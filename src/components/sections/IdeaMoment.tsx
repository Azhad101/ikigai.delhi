import React from 'react';
import { PosterMountains, PosterKatana, JapanesePineTree } from '../JapaneseLandscape';
import { IkigaiVennDiagram } from '../IkigaiVennDiagram';
import { SeamRidge } from '../SeamRidge';

export const IdeaMoment: React.FC = () => {
  return (
    <section id="idea" data-nav-theme="crimson" className="relative min-h-svh flex flex-col justify-between px-6 md:px-16 lg:px-24 py-16 md:py-24 seam-pad-bottom bg-[#A3262A] text-[#F4E7C6] overflow-hidden">
      {/* Seam: starts in the crimson the previous section ended with */}
      <div aria-hidden="true" className="seam-cap seam-cap-top seam-crimson" />

      {/* 1. Continuous Japanese Landscape Background */}
      <div className="absolute -top-1 left-0 right-0 z-0 pointer-events-none opacity-35">
        <PosterMountains variant="craggy-foreground" color="#1A1817" fillColor="#1A1817" />
      </div>

      {/* Pine tree silhouette in the periphery */}
      <div className="absolute -top-40 -right-16 w-[280px] md:w-[360px] z-0 pointer-events-none opacity-20 hidden md:block">
        <JapanesePineTree color="#1A1817" />
      </div>

      {/* Corner Crop Marks */}
      <div className="absolute top-6 left-6 font-mono text-xs text-[#F4E7C6]/40 select-none pointer-events-none z-10">
        ⌜ 28.6139° N
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs text-[#F4E7C6]/40 select-none pointer-events-none z-10">
        77.2090° E ⌝
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-xs text-[#A3262A]/70 select-none pointer-events-none z-10">
        ⌞ MOMENT 02
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-xs text-[#A3262A]/70 select-none pointer-events-none z-10">
        THE PREMISE ⌟
      </div>

      {/* Moment Tag */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#F4E7C6]/80">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4E7C6]" />
          <span>02 / THE PREMISE</span>
        </div>
        <span className="hidden sm:inline">AN ENCLAVE FOR SERIOUS INQUIRY</span>
        <span>[ 02 / 08 ]</span>
      </div>

      {/* 2-Column Balanced Composition: Philosophy on Left, Ikigai Venn Diagram on Right */}
      <div data-reveal className="relative z-10 my-auto py-6 md:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Statement & Obsession Thesis */}
        <div className="lg:col-span-6 xl:col-span-7 space-y-6">
          <span className="font-mono text-[11px] tracking-[0.3em] text-[#F4E7C6]/70 uppercase font-semibold block">
            THE FOUR REALMS OF PURPOSE
          </span>

          <blockquote className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#F4E7C6] leading-[1.08] tracking-tight">
            "A journey through what you love, what you can create, and what you might become."
          </blockquote>

          {/* Screen-Printed Katana Silhouette Detail */}
          <div className="py-1 max-w-sm opacity-85">
            <PosterKatana color="#F4E7C6" />
          </div>

          <div className="pl-5 border-l-2 border-[#F4E7C6]/60 space-y-3 max-w-xl">
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#F4E7C6]/90 font-normal leading-relaxed">
              Most gatherings in Delhi demand speed, noise, and elevator pitches.
              Ikigai.delhi offers quiet and depth: two uninterrupted days dedicated entirely to turning
              an unresolved obsession into an enduring physical or digital artifact.
            </p>
            <p className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] text-[#F4E7C6]/75 uppercase font-semibold">
              JURIES · PRIZES · PURE CRAFTSMANSHIP
            </p>
          </div>
        </div>

        {/* Right Column: The Expanded Ikigai Venn Diagram */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center lg:items-end justify-center">
          <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px]">
            <IkigaiVennDiagram inverted={true} />
          </div>
        </div>
      </div>

      {/* Seam: cream ridge, so the section ends in the cream that Fields starts with */}
      <div className="seam-ridge-layer">
        <SeamRidge color="#F4E7C6" variant="a" />
      </div>
    </section>
  );
};
