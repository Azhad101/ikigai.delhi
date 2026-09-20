import React from 'react';
import { ChiseledIkigaiTitle } from '../ChiseledIkigaiTitle';
import { JapanesePosterSkyline } from '../JapanesePosterPanorama';

export const OpenMoment: React.FC = () => {
  return (
    <section className="relative min-h-svh flex flex-col justify-between bg-[#F4E7C6] text-[#A3262A] overflow-hidden select-none">
      {/* Seam: ends in the crimson the next section starts with */}
      <div aria-hidden="true" className="seam-cap seam-cap-bottom seam-cap-over seam-crimson" />

      {/* 1. Corner Registration Crop Marks */}
      <div className="absolute top-14 left-6 md:left-12 font-mono text-[10px] md:text-[11px] text-[#A3262A]/40 select-none pointer-events-none z-20">
        ⌜ 28.6139° N
      </div>
      <div className="absolute top-14 right-6 md:right-12 font-mono text-[10px] md:text-[11px] text-[#A3262A]/40 select-none pointer-events-none z-20">
        77.2090° E ⌝
      </div>

      {/* 2. Top Editorial Details Bar */}
      <div className="relative z-20 px-6 md:px-14 pt-16 md:pt-18 pb-2 flex items-center justify-between text-[#A3262A]/80 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 bg-[#A3262A] inline-block shadow-[0_0_6px_#A3262A]" />
          <span className="font-semibold tracking-[0.25em]">AN ENCLAVE FOR CREATION</span>
        </div>
        <span className="hidden sm:inline font-mono tracking-[0.3em] text-[#A3262A]/70">
          DELHI · 2-DAY GATHERING OF MAKERS
        </span>
        <span className="font-mono text-[#A3262A] font-semibold">[ 01 / 08 ]</span>
      </div>

      {/* 3. UPPER HALF: DOMINATING CHISELED HEADLINE (Color in Ink Charcoal #1A1817) */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 md:px-12 pt-4 pb-2">
        {/* Sub-label banner */}
        <div className="flex items-center gap-3 mb-2">
          <span className="h-[1px] w-8 md:w-14 bg-[#A3262A]/40" />
          <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-[#A3262A] uppercase font-bold">
            A TEMPLE OF WORK · NOT A HACKATHON
          </p>
          <span className="h-[1px] w-8 md:w-14 bg-[#A3262A]/40" />
        </div>

        {/* GIANT, BOLD, CHISELED "IKIGAI" POSTER WORDMARK IN INK CHARCOAL #1A1817 */}
        <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-2 my-1 max-h-[140px] md:max-h-[170px] flex items-center justify-center">
          <ChiseledIkigaiTitle color="#1A1817" className="max-h-[130px] md:max-h-[160px]" />
        </div>

        {/* SUBTITLE */}
        <div className="mt-2 md:mt-3 flex flex-col items-center gap-1">
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.18em] sm:tracking-[0.22em] text-[#1A1817] uppercase">
            A 2-DAY ODYSSEE · DELHI 2026
          </h2>
          <p className="font-jp text-xs md:text-sm tracking-[0.35em] text-[#A3262A] font-bold">
            生き甲斐 · 魂の宿る場所
          </p>
        </div>
      </div>

      {/* 4. EXPANDED EDGE-TO-EDGE HORIZONTAL SKYLINE (West to East) */}
      <div className="relative z-10 w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px] flex items-end">
        <JapanesePosterSkyline
          color="#A3262A"
          skylineColor="#A3262A"
          bgCutoutColor="#F4E7C6"
          className="w-full h-full object-fill object-bottom"
        />
      </div>
    </section>
  );
};
