import React from 'react';
import { PosterSunDisc, PosterMountains } from '../JapaneseLandscape';
import { SeamRidge } from '../SeamRidge';

interface EnterMomentProps {
  onEnterClick: () => void;
}

export const EnterMoment: React.FC<EnterMomentProps> = ({ onEnterClick }) => {
  return (
    <section id="enter" data-nav-theme="crimson" className="relative min-h-svh flex flex-col justify-between px-6 md:px-16 lg:px-24 py-16 md:py-24 seam-pad-bottom bg-[#A3262A] text-[#F4E7C6] overflow-hidden">
      {/* Seam: starts in the crimson the previous section ended with */}
      <div aria-hidden="true" className="seam-cap seam-cap-top seam-crimson" />

      {/* 1. Screen-Print Poster Final Summit Atmosphere */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-40">
        <PosterSunDisc size={380} color="#F4E7C6" />
      </div>

      {/* Stark charcoal mountain peaks rising across the base */}
      <div className="absolute -bottom-1 left-0 right-0 z-0 pointer-events-none opacity-95">
        <PosterMountains variant="craggy-foreground" color="#1A1817" fillColor="#1A1817" />
      </div>

      {/* Corner Crop Marks */}
      <div className="absolute top-6 left-6 font-mono text-xs text-[#F4E7C6]/40 select-none pointer-events-none z-10">
        ⌜ 28.6139° N
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs text-[#F4E7C6]/40 select-none pointer-events-none z-10">
        77.2090° E ⌝
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-xs text-[#A3262A]/70 select-none pointer-events-none z-10">
        ⌞ MOMENT 05
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-xs text-[#A3262A]/70 select-none pointer-events-none z-10">
        FINAL ENTRANCE ⌟
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-[#F4E7C6]/80 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4E7C6]" />
          <span>05 / THE THRESHOLD</span>
        </div>
        <span>ADMITTANCE · 2026 COHORT</span>
        <span>[ 05 / 08 ]</span>
      </div>

      {/* Main Center Composition: Climax of the Odyssey */}
      <div data-reveal className="relative z-10 my-auto py-8 md:py-10 max-w-3xl mx-auto w-full text-center">
        <p className="font-mono text-[11px] md:text-xs tracking-[0.35em] text-[#F4E7C6]/80 uppercase mb-4 font-semibold">
          THE ODYSSEE AWAITS
        </p>

        {/* Primary Climax Headline: BEGIN THE ODYSSEE */}
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F4E7C6] tracking-tight leading-[0.95] mb-6">
          BEGIN THE<br />
          <span className="italic font-normal underline decoration-[#F4E7C6]/30 underline-offset-8">
            ODYSSEE.
          </span>
        </h2>

        <p className="font-sans text-sm md:text-base text-[#F4E7C6]/90 font-normal max-w-md mx-auto mb-8 leading-relaxed">
          An experimental gathering of 24 makers across Write, Code, Visualize, Craft.
          Admittance is limited and strictly portfolio-based. There are zero fees for selected fellows.
        </p>

        {/* The Distinctive ENTER Button */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={onEnterClick}
            className="group relative inline-flex items-center gap-4 px-12 py-5 border-2 border-[#F4E7C6] bg-[#1A1817]/40 hover:bg-[#F4E7C6] text-[#F4E7C6] hover:text-[#A3262A] font-mono text-xs md:text-sm font-bold tracking-[0.35em] uppercase transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
          >
            <span>ENTER</span>
            <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
              →
            </span>
          </button>

          <span className="font-mono text-[10px] tracking-[0.25em] text-[#F4E7C6]/60 uppercase pt-2 font-medium">
            OPENS THE CANDIDATE DOSSIER
          </span>
        </div>
      </div>

      {/* Seam: cream ridge in front of the crags, so the section ends in the cream Conveners starts with */}
      <div className="seam-ridge-layer">
        <SeamRidge color="#F4E7C6" variant="b" />
      </div>
    </section>
  );
};
