import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { observeVisibility } from '../../utils/performance';
import { usePrefersReducedMotion } from '../../utils/accessibility';
import { JapaneseAnchor } from '../common/JapaneseAnchor';
import { SectionDivider } from '../common/SectionDivider';
import './Journey.css';

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    number: "00",
    title: "THE AWAKENING",
    kanji: "覚醒",
    headline: "Before the journey begins.",
    description: "A moment to pause, observe, and find your direction."
  },
  {
    number: "01",
    title: "THE SPARK",
    kanji: "発火",
    headline: "Where it all begins.",
    description: "Find the thing that makes you care."
  },
  {
    number: "02",
    title: "THE ANCHOR",
    kanji: "錨",
    headline: "Look beyond yourself.",
    description: "Discover what truly matters."
  },
  {
    number: "03",
    title: "THE FORGE",
    kanji: "鍛冶",
    headline: "Time to create.",
    description: "Turn an idea into something real."
  },
  {
    number: "04",
    title: "THE HORIZON",
    kanji: "地平線",
    headline: "Think beyond today.",
    description: "Imagine where it could go next."
  },
  {
    number: "05",
    title: "THE CROSSING",
    kanji: "渡河",
    headline: "Bring it all together.",
    description: "One final step. One bigger picture."
  }
];

const GOLDEN_ANGLE = 2.399963229728653;

export function Journey() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId = null;
    let isVisible = false;

    // Responsive particle count
    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 120 : 280;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Seeded random helper
    const seeded = (seed) => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    // State Generators (returns x, y relative to canvas center)
    const scale = Math.min(width, height) * 0.42;

    // State 0: DISCOVER — Loose, chaotic organic bloom
    const getDiscoverPos = (i, n) => {
      const angle = i * GOLDEN_ANGLE;
      const r = scale * 0.75 * Math.sqrt((i + 0.5) / n) * (1 + 0.18 * Math.sin(angle * 3));
      return { x: r * Math.cos(angle), y: r * Math.sin(angle) * 0.85 };
    };

    // State 1: DEFINE — Structuring into aligned horizontal & vertical grid axes
    const getDefinePos = (i, n) => {
      const cols = Math.ceil(Math.sqrt(n * 1.3));
      const rows = Math.ceil(n / cols);
      const spacing = (scale * 1.3) / Math.max(cols, rows);
      const col = i % cols;
      const row = Math.floor(i / cols);
      return {
        x: (col - (cols - 1) / 2) * spacing,
        y: (row - (rows - 1) / 2) * spacing
      };
    };

    // State 2: BUILD — Geometric concentric circuitry / blueprint rings
    const getBuildPos = (i, n) => {
      const rings = 4;
      const ringIdx = i % rings;
      const r = (scale * 0.3) + ringIdx * (scale * 0.22);
      const itemsInRing = Math.floor(n / rings);
      const angle = ((i % itemsInRing) / itemsInRing) * Math.PI * 2;
      return { x: r * Math.cos(angle), y: r * Math.sin(angle) };
    };

    // State 3: COLLABORATE — Hub & spoke clustering
    const HUBS = 5;
    const hubCenters = [
      { x: 0, y: 0 },
      { x: -scale * 0.5, y: -scale * 0.4 },
      { x: scale * 0.5, y: -scale * 0.4 },
      { x: -scale * 0.4, y: scale * 0.45 },
      { x: scale * 0.4, y: scale * 0.45 }
    ];

    const getCollaboratePos = (i, n) => {
      const hubIdx = i % HUBS;
      const center = hubCenters[hubIdx];
      const localIdx = Math.floor(i / HUBS);
      const angle = localIdx * GOLDEN_ANGLE;
      const r = (scale * 0.22) * Math.sqrt(localIdx / (n / HUBS));
      return {
        x: center.x + r * Math.cos(angle),
        y: center.y + r * Math.sin(angle)
      };
    };

    // State 4: PRESENT — Expanding radiant upward fan
    const getPresentPos = (i, n) => {
      const progress = i / n;
      const fanAngle = -Math.PI / 2 + (progress - 0.5) * (Math.PI * 0.95);
      const dist = (scale * 0.3) + progress * (scale * 0.85);
      return {
        x: dist * Math.cos(fanAngle),
        y: dist * Math.sin(fanAngle) + (scale * 0.2)
      };
    };

    // State 5: IMPACT — Four-circle Ikigai convergence
    const fourCenters = [
      { x: 0, y: -scale * 0.32 }, // Love (Top)
      { x: scale * 0.32, y: 0 },  // Skill (Right)
      { x: 0, y: scale * 0.32 },  // Need (Bottom)
      { x: -scale * 0.32, y: 0 }  // Reward (Left)
    ];

    const getImpactPos = (i, n) => {
      const group = i % 4;
      const center = fourCenters[group];
      const localIdx = Math.floor(i / 4);
      const countInGroup = n / 4;
      const angle = (localIdx / countInGroup) * Math.PI * 2;
      const r = scale * 0.42;
      return {
        x: center.x + r * Math.cos(angle),
        y: center.y + r * Math.sin(angle)
      };
    };

    // Array of state position generators
    const stateGenerators = [
      getDiscoverPos,
      getDefinePos,
      getBuildPos,
      getCollaboratePos,
      getPresentPos,
      getImpactPos
    ];

    // Colors across the 6 stages
    const stageColors = [
      { r: 182, g: 83, b: 60 },   // Discover: vermilion
      { r: 99, g: 132, b: 114 },  // Define: jade
      { r: 200, g: 169, b: 107 }, // Build: gold
      { r: 182, g: 83, b: 60 },   // Collaborate: vermilion
      { r: 200, g: 169, b: 107 }, // Present: gold
      { r: 182, g: 83, b: 60 }    // Impact: vermilion core
    ];

    let currentScrollProgress = 0; // 0 to 5

    // Initialize particles
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        seed: seeded(i * 17.3),
        noiseSpeed: 0.8 + seeded(i * 9.1) * 0.6
      });
    }

    // GSAP ScrollTrigger to track stage progression
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      onUpdate: (self) => {
        const rawP = self.progress * (STAGES.length - 1);
        currentScrollProgress = Math.max(0, Math.min(STAGES.length - 1, rawP));
        const activeIdx = Math.min(STAGES.length - 1, Math.round(rawP));
        setActiveStageIndex(activeIdx);
      }
    });

    // 60FPS Smooth Canvas Render Loop
    let time = 0;
    const render = () => {
      if (!isVisible) return;

      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Current stage interpolation indices
      const floorIdx = Math.floor(currentScrollProgress);
      const ceilIdx = Math.min(STAGES.length - 1, floorIdx + 1);
      const t = currentScrollProgress - floorIdx;

      // Smooth cubic ease for morphing between stages
      const easeT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const fromGen = stateGenerators[floorIdx];
      const toGen = stateGenerators[ceilIdx];

      const fromColor = stageColors[floorIdx];
      const toColor = stageColors[ceilIdx];

      const curR = Math.round(fromColor.r + (toColor.r - fromColor.r) * easeT);
      const curG = Math.round(fromColor.g + (toColor.g - fromColor.g) * easeT);
      const curB = Math.round(fromColor.b + (toColor.b - fromColor.b) * easeT);

      // Render structural wiring lines in BUILD and COLLABORATE stages
      if (floorIdx === 2 || floorIdx === 3 || ceilIdx === 2 || ceilIdx === 3) {
        ctx.strokeStyle = `rgba(${curR}, ${curG}, ${curB}, 0.12)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < Math.min(PARTICLE_COUNT, 80); i += 4) {
          const p1From = fromGen(i, PARTICLE_COUNT);
          const p1To = toGen(i, PARTICLE_COUNT);
          const p1X = centerX + (p1From.x + (p1To.x - p1From.x) * easeT);
          const p1Y = centerY + (p1From.y + (p1To.y - p1From.y) * easeT);

          const nextIdx = (i + 1) % PARTICLE_COUNT;
          const p2From = fromGen(nextIdx, PARTICLE_COUNT);
          const p2To = toGen(nextIdx, PARTICLE_COUNT);
          const p2X = centerX + (p2From.x + (p2To.x - p2From.x) * easeT);
          const p2Y = centerY + (p2From.y + (p2To.y - p2From.y) * easeT);

          ctx.moveTo(p1X, p1Y);
          ctx.lineTo(p2X, p2Y);
        }
        ctx.stroke();
      }

      // Draw Particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const pFrom = fromGen(i, PARTICLE_COUNT);
        const pTo = toGen(i, PARTICLE_COUNT);

        let targetX = pFrom.x + (pTo.x - pFrom.x) * easeT;
        let targetY = pFrom.y + (pTo.y - pFrom.y) * easeT;

        // Subtle organic breathing drift
        const drift = Math.sin(time * 1.5 + pFrom.x * 0.02) * 2.5;
        const x = centerX + targetX + drift;
        const y = centerY + targetY + drift * 0.5;

        // Particle radius
        const radius = i % 7 === 0 ? 2.2 : 1.4;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${curR}, ${curG}, ${curB}, ${i % 5 === 0 ? 0.85 : 0.6})`;
        ctx.fill();
      }

      // In the final IMPACT state: draw subtle converging center sun
      if (currentScrollProgress > 4.2) {
        const impactAlpha = (currentScrollProgress - 4.2) / 0.8;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 16 * impactAlpha, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(182, 83, 60, ${impactAlpha * 0.9})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Visibility observer to pause canvas when off-screen
    const cleanupObserver = observeVisibility(section, {
      threshold: 0.05,
      onVisible: () => {
        if (!isVisible) {
          isVisible = true;
          render();
        }
      },
      onHidden: () => {
        isVisible = false;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      }
    });

    return () => {
      isVisible = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      cleanupObserver();
      scrollTrigger.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, [prefersReducedMotion]);

  const activeStage = STAGES[activeStageIndex];

  return (
    <section className="journey-track-section" id="journey" ref={sectionRef}>
      <SectionDivider sectionNumber="06" label="THE JOURNEY" />

      {/* Sticky Journey Stage Stage & Canvas */}
      <div className="journey-sticky-stage">
        {/* Persistent 2D Morphing Particle Canvas */}
        <div className="journey-canvas-container">
          <canvas ref={canvasRef} className="journey-particle-canvas" aria-label="Interactive 6-Stage Morphing Particle Canvas" />

          {/* Central Ikigai Wordmark on Final State */}
          <div className={`journey-final-emblem ${activeStageIndex === 5 ? 'is-active' : ''}`} aria-hidden="true">
            <span className="final-emblem-text">IKIGAI</span>
            <span className="final-emblem-kanji">生き甲斐</span>
          </div>
        </div>

        {/* Synchronized Centered Text Narrative Overlay (No Box/Card) */}
        <div className="journey-content-overlay container">
          <div className="journey-center-text-block" key={activeStage.number}>
            {/* Top Stage Header */}
            <div className="journey-display-top">
              <div className="journey-number-box">
                <span className="journey-large-num">{activeStage.number}</span>
                <span className="text-japanese journey-kanji-tag">{activeStage.kanji}</span>
              </div>
              <span className="meta-label journey-path-label">// PHASE {activeStage.number}</span>
            </div>

            {/* Stage Title & Headline */}
            <h2 className="title-editorial journey-stage-title">
              {activeStage.title}
            </h2>

            <h3 className="journey-stage-headline">
              {activeStage.headline}
            </h3>

            {/* Concise Description */}
            <p className="body-editorial journey-stage-desc">
              {activeStage.description}
            </p>

            {/* Centered Stepped Progress Dots */}
            <div className="journey-progress-dots" aria-label="Journey Stage Indicator">
              {STAGES.map((st, idx) => (
                <div
                  key={st.number}
                  className={`progress-dot-item ${idx === activeStageIndex ? 'is-active' : ''}`}
                >
                  <span className="dot-index">{st.number}</span>
                  <div className="dot-line" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
