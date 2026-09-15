import React, { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../utils/accessibility';

/**
 * SAKURA SHOWER — 桜吹雪
 *
 * A continuous, live cherry-blossom petal fall rendered on a fixed full-screen
 * canvas behind the content. Each petal drifts, sways and tumbles on its own
 * axis so the page reads as a living wallpaper rather than a static backdrop.
 *
 * Performance notes:
 *  - single requestAnimationFrame loop, no DOM nodes per petal
 *  - petal count scales down on small screens
 *  - pauses entirely when the tab is hidden
 *  - fully disabled under prefers-reduced-motion
 */

const PETAL_TINTS = [
  'rgba(244, 194, 203, ALPHA)',
  'rgba(238, 170, 186, ALPHA)',
  'rgba(249, 214, 220, ALPHA)',
  'rgba(229, 150, 165, ALPHA)',
  'rgba(214, 122, 102, ALPHA)'
];

function makePetal(w, h, seeded) {
  const size = 7 + Math.random() * 11;
  return {
    x: Math.random() * w,
    y: seeded ? Math.random() * h : -size - Math.random() * h * 0.4,
    size,
    speedY: 0.35 + Math.random() * 0.85,
    swayAmp: 18 + Math.random() * 46,
    swaySpeed: 0.006 + Math.random() * 0.014,
    swayPhase: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.028,
    angle: Math.random() * Math.PI * 2,
    flutter: 0.4 + Math.random() * 0.9,
    alpha: 0.35 + Math.random() * 0.45,
    tint: PETAL_TINTS[(Math.random() * PETAL_TINTS.length) | 0]
  };
}

/** One soft cherry-blossom petal: a rounded teardrop with a notched tip. */
function drawPetal(ctx, p, squash) {
  const s = p.size;
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.5);
  ctx.bezierCurveTo(s * 0.52, -s * 0.34, s * 0.46, s * 0.36, 0, s * 0.5);
  ctx.bezierCurveTo(-s * 0.46, s * 0.36, -s * 0.52, -s * 0.34, 0, -s * 0.5);
  ctx.closePath();
  ctx.fillStyle = p.tint.replace('ALPHA', (p.alpha * squash).toFixed(3));
  ctx.fill();
}

export function SakuraShower({ opacity = 0.9, zIndex = 3, density = 1 }) {
  const canvasRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let petals = [];
    let frame = null;
    let running = false;
    let tick = 0;

    const petalCount = () => {
      let base;
      if (window.innerWidth < 640) base = 26;
      else if (window.innerWidth < 1100) base = 40;
      else base = 58;
      return Math.max(8, Math.round(base * density));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = petalCount();
      if (petals.length === 0) {
        petals = Array.from({ length: target }, () => makePetal(width, height, true));
      } else if (petals.length > target) {
        petals.length = target;
      } else {
        while (petals.length < target) petals.push(makePetal(width, height, true));
      }
    };

    const render = () => {
      if (!running) return;
      tick += 1;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i += 1) {
        const p = petals[i];

        p.y += p.speedY;
        p.swayPhase += p.swaySpeed;
        p.angle += p.spin;

        const drift = Math.sin(p.swayPhase) * p.swayAmp;
        // Tumble: petal appears to turn edge-on as it flutters.
        const squash = Math.abs(Math.cos(p.swayPhase * p.flutter)) * 0.75 + 0.25;

        ctx.save();
        ctx.translate(p.x + drift, p.y);
        ctx.rotate(p.angle);
        ctx.scale(squash, 1);
        drawPetal(ctx, p, 1);
        ctx.restore();

        // Recycle above the viewport once it clears the bottom.
        if (p.y - p.size > height) {
          Object.assign(p, makePetal(width, height, false));
        }
      }

      frame = window.requestAnimationFrame(render);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = window.requestAnimationFrame(render);
    };

    const stop = () => {
      running = false;
      if (frame) window.cancelAnimationFrame(frame);
      frame = null;
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    resize();
    start();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [prefersReducedMotion, density]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex,
        opacity
      }}
    />
  );
}
