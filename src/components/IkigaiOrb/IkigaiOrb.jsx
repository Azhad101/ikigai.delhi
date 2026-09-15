import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isWebGLAvailable, observeVisibility } from '../../utils/performance';
import { usePrefersReducedMotion } from '../../utils/accessibility';
import { JapaneseAnchor } from '../common/JapaneseAnchor';
import { SectionDivider } from '../common/SectionDivider';
import './IkigaiOrb.css';

gsap.registerPlugin(ScrollTrigger);

export function IkigaiOrb() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const centerBadgeRef = useRef(null);

  const [webGLSupported, setWebGLSupported] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Defer the (~600KB) Three.js chunk until the Orb section is actually
  // approaching the viewport, instead of loading it on initial page load.
  const [shouldLoadEngine, setShouldLoadEngine] = useState(false);

  useEffect(() => {
    if (!isWebGLAvailable() || prefersReducedMotion) {
      setWebGLSupported(false);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    // Preload Three.js once the section is within ~1 viewport of scrolling
    // into view, so it's ready by the time the user actually arrives.
    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoadEngine(true);
      return;
    }

    const preloadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadEngine(true);
            preloadObserver.disconnect();
          }
        });
      },
      { rootMargin: '600px 0px', threshold: 0 }
    );

    preloadObserver.observe(section);
    return () => preloadObserver.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!shouldLoadEngine) return;

    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let cleanupFn = () => {};

    // Lazy-load Three.js only when the orb is actually about to be needed.
    import('three').then((THREE) => {
      if (cancelled || !containerRef.current) return;
      cleanupFn = initOrbScene(THREE, container, canvasRef.current, sectionRef.current);
    });

    return () => {
      cancelled = true;
      cleanupFn();
    };
  }, [shouldLoadEngine]);

  return (
    <section className="ikigai-orb-section" id="ikigai-orb" ref={sectionRef}>
      <SectionDivider sectionNumber="03" label="IKIGAI ORB" />
      <div className="container orb-section-header">
        <JapaneseAnchor kanji="収束" romaji="SHŪSOKU" translation="The Convergence" />
        <span className="meta-label orb-section-badge">FLAGSHIP ART INSTALLATION</span>
        <h2 className="title-editorial orb-section-title">The Ikigai Orb</h2>
        <p className="body-quiet orb-section-instruction">
          Drag to rotate the orbital paths · Scroll to observe the continuous convergence
        </p>
      </div>

      <div className="orb-stage-wrapper" ref={containerRef}>
        {webGLSupported ? (
          <canvas ref={canvasRef} className="orb-three-canvas" aria-label="Interactive 3D Ikigai Orb" />
        ) : (
          /* Graceful 2D Fallback if WebGL unavailable or reduced-motion enabled */
          <div className="orb-2d-fallback" aria-label="Static 2D representation of the Ikigai Orb">
            <svg viewBox="0 0 500 500" className="fallback-svg">
              <circle cx="250" cy="250" r="180" stroke="var(--color-accent-gold)" strokeWidth="1" strokeDasharray="4 6" fill="none" opacity="0.4" />
              <circle cx="250" cy="250" r="140" stroke="var(--color-accent-vermilion)" strokeWidth="1.2" fill="none" opacity="0.6" />
              <circle cx="250" cy="250" r="100" stroke="var(--color-forest)" strokeWidth="1.2" fill="none" opacity="0.5" />
              <circle cx="250" cy="250" r="20" fill="var(--color-accent-vermilion)" />
              <text x="250" y="254" textAnchor="middle" fill="#F5F1E8" fontSize="11" fontFamily="var(--font-display)" letterSpacing="0.2em">
                IKIGAI
              </text>
            </svg>
          </div>
        )}

        {/* Orbit Concept Labels Overlaid */}
        <div className="orb-labels-overlay" aria-hidden="true">
          <div className="orb-label label-love">
            <span className="dot dot-love" />
            <span className="label-text">LOVE · 愛</span>
          </div>
          <div className="orb-label label-skill">
            <span className="dot dot-skill" />
            <span className="label-text">SKILL · 技</span>
          </div>
          <div className="orb-label label-need">
            <span className="dot dot-need" />
            <span className="label-text">NEED · 要</span>
          </div>
          <div className="orb-label label-reward">
            <span className="dot dot-reward" />
            <span className="label-text">REWARD · 報</span>
          </div>
        </div>

        {/* Central Convergence Badge */}
        <div className="orb-center-badge" ref={centerBadgeRef}>
          <span className="meta-label">CONVERGENCE</span>
          <span className="orb-center-title">IKIGAI</span>
        </div>
      </div>
    </section>
  );
}

/**
 * Builds and owns the full Three.js scene lifecycle for the orb.
 * Kept outside the component body so the ~600KB `three` module is only
 * ever referenced inside this function, which only runs after the
 * dynamic import above has resolved.
 */
function initOrbScene(THREE, container, domCanvas, sectionEl) {
    let renderer, scene, camera, animationFrameId;
    let isRendering = false;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.001, y: 0.002 };

    const orbGroup = new THREE.Group();

    // 1. Scene & Camera Setup
    scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    // 2. WebGL Renderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: domCanvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
    } catch {
      // WebGL context creation failed unexpectedly at init time; bail out
      // quietly and leave the static 2D fallback markup in place.
      return () => {};
    }

    // 3. Four Intersecting Orbital Rings (Love, Skill, Need, Reward)
    const ringConfigs = [
      { color: 0xB6533C, rotX: Math.PI / 4, rotY: 0, rotZ: 0, label: 'LOVE' },
      { color: 0xC8A96B, rotX: -Math.PI / 4, rotY: Math.PI / 3, rotZ: 0, label: 'SKILL' },
      { color: 0x26382F, rotX: 0, rotY: -Math.PI / 3, rotZ: Math.PI / 4, label: 'NEED' },
      { color: 0x111111, rotX: Math.PI / 3, rotY: Math.PI / 4, rotZ: -Math.PI / 4, label: 'REWARD' }
    ];

    const ringRadius = 2.4;
    const ringSegments = 128;

    ringConfigs.forEach((cfg) => {
      const ringGeometry = new THREE.BufferGeometry();
      const points = [];
      for (let i = 0; i <= ringSegments; i++) {
        const theta = (i / ringSegments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * ringRadius, Math.sin(theta) * ringRadius, 0));
      }
      ringGeometry.setFromPoints(points);

      const ringMaterial = new THREE.LineBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.55,
        linewidth: 1.5
      });

      const line = new THREE.Line(ringGeometry, ringMaterial);
      line.rotation.set(cfg.rotX, cfg.rotY, cfg.rotZ);
      orbGroup.add(line);
    });

    // 4. Ethereal Horizon Ring (Enso influence)
    const ensoGeometry = new THREE.BufferGeometry();
    const ensoPoints = [];
    for (let i = 0; i <= ringSegments; i++) {
      const theta = (i / ringSegments) * Math.PI * 2;
      ensoPoints.push(new THREE.Vector3(Math.cos(theta) * 2.8, Math.sin(theta) * 2.8, 0));
    }
    ensoGeometry.setFromPoints(ensoPoints);
    const ensoMaterial = new THREE.LineDashedMaterial({
      color: 0xC8A96B,
      dashSize: 0.15,
      gapSize: 0.08,
      transparent: true,
      opacity: 0.3
    });
    const ensoLine = new THREE.Line(ensoGeometry, ensoMaterial);
    ensoLine.computeLineDistances();
    ensoLine.rotation.x = Math.PI / 2;
    orbGroup.add(ensoLine);

    // 5. Orbital Particles Cloud along intersecting paths
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 240 : 650;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colors = [
      new THREE.Color(0xB6533C), // Vermilion
      new THREE.Color(0xC8A96B), // Gold
      new THREE.Color(0x26382F), // Forest
      new THREE.Color(0x111111)  // Ink
    ];

    for (let i = 0; i < particleCount; i++) {
      const ringIdx = i % 4;
      const angle = (i / particleCount) * Math.PI * 8 + Math.random() * 0.2;
      const r = ringRadius + (Math.random() - 0.5) * 0.28;

      const basePos = new THREE.Vector3(Math.cos(angle) * r, Math.sin(angle) * r, (Math.random() - 0.5) * 0.2);
      const cfg = ringConfigs[ringIdx];
      basePos.applyEuler(new THREE.Euler(cfg.rotX, cfg.rotY, cfg.rotZ));

      particlePositions[i * 3] = basePos.x;
      particlePositions[i * 3 + 1] = basePos.y;
      particlePositions[i * 3 + 2] = basePos.z;

      const c = colors[ringIdx];
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.042,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    orbGroup.add(particles);

    // 6. Central Convergence Core (The Origin Sun)
    const coreGeometry = new THREE.SphereGeometry(0.24, 32, 32);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xB6533C,
      transparent: true,
      opacity: 0.9
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    orbGroup.add(coreMesh);

    scene.add(orbGroup);

    // 7. Interactive Mouse Drag & Parallax
    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        rotationVelocity.y = deltaX * 0.003;
        rotationVelocity.x = deltaY * 0.003;

        orbGroup.rotation.y += rotationVelocity.y;
        orbGroup.rotation.x += rotationVelocity.x;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        // Subtle ambient parallax
        const normX = (e.clientX / window.innerWidth - 0.5) * 2;
        const normY = (e.clientY / window.innerHeight - 0.5) * 2;
        camera.position.x += (normX * 0.4 - camera.position.x) * 0.04;
        camera.position.y += (-normY * 0.4 - camera.position.y) * 0.04;
        camera.lookAt(scene.position);
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    domCanvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseup', handleMouseUp);

    // Touch events for mobile
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;
        rotationVelocity.y = deltaX * 0.004;
        rotationVelocity.x = deltaY * 0.004;
        orbGroup.rotation.y += rotationVelocity.y;
        orbGroup.rotation.x += rotationVelocity.x;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    domCanvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    // 8. 60FPS Render Loop with Damping
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isRendering) return;

      const elapsedTime = clock.getElapsedTime();

      // Gentle continuous baseline drift
      if (!isDragging) {
        orbGroup.rotation.y += 0.0035;
        orbGroup.rotation.x += 0.0015;
      }

      // Smooth damping on drag impulse
      rotationVelocity.x *= 0.95;
      rotationVelocity.y *= 0.95;

      // Subtle organic breathing of the central sun
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
      coreMesh.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    // 9. IntersectionObserver Lifecycle (Zero GPU load when off-screen)
    const cleanupObserver = observeVisibility(sectionEl, {
      threshold: 0.1,
      onVisible: () => {
        if (!isRendering) {
          isRendering = true;
          animate();
        }
      },
      onHidden: () => {
        isRendering = false;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      }
    });

    // 10. ScrollTrigger Transformation (Convergence into core)
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.8,
      onUpdate: (self) => {
        const progress = self.progress;
        // As you scroll through, the orb rotates along its vertical axis and slightly scales
        orbGroup.rotation.z = progress * Math.PI * 0.75;
      }
    });

    // 11. Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      isRendering = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      cleanupObserver();
      scrollTrigger.kill();

      domCanvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domCanvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('resize', handleResize);

      // Dispose geometries and materials
      particleGeometry.dispose();
      particleMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ensoGeometry.dispose();
      ensoMaterial.dispose();
      renderer.dispose();
    };
}
