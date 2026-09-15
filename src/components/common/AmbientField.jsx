import React, { useEffect, useRef } from 'react';
import { AmbientParticleEngine } from '../../engine/particles/ambientParticles';
import { usePrefersReducedMotion } from '../../utils/accessibility';

/**
 * Ambient Atmospheric Mote Field
 * Runs a restrained canvas particle system that gracefully respects prefers-reduced-motion.
 */
export function AmbientField() {
  const canvasRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !canvasRef.current) return;

    const engine = new AmbientParticleEngine(canvasRef.current);
    engine.start();

    // Pause when document is hidden (switching tabs)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        engine.stop();
      } else {
        engine.start();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      engine.stop();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [prefersReducedMotion]);

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
        zIndex: 2,
        opacity: 0.75
      }}
    />
  );
}
