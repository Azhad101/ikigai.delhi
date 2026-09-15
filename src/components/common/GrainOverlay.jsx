import React from 'react';

/**
 * Procedural Film Grain Overlay
 * Simulates delicate washi paper fibers and film grain with zero external image requests.
 */
export function GrainOverlay() {
  return (
    <div className="grain-overlay" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="washi-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#washi-grain)" opacity="0.6" />
      </svg>
    </div>
  );
}
