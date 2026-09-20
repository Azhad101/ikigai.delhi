import React, { useState } from 'react';
import { PosterMountains, PosterTorii, JapanesePineTree } from '../JapaneseLandscape';

export const FieldsMoment: React.FC = () => {
  const [activeField, setActiveField] = useState<number | null>(null);

  const fields = [
    {
      name: 'WRITE',
      jp: '書',
      line: 'Give shape to what cannot yet be seen.',
      index: '01',
    },
    {
      name: 'CODE',
      jp: '符',
      line: 'Turn thought into something that moves.',
      index: '02',
    },
    {
      name: 'VISUALIZE',
      jp: '景',
      line: 'Make an idea visible.',
      index: '03',
    },
    {
      name: 'CRAFT',
      jp: '工',
      line: 'Build something that can exist.',
      index: '04',
    },
  ];

  return (
    <section className="relative min-h-svh flex flex-col justify-between px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-[#F4E7C6] text-[#A3262A] overflow-hidden">
      {/* Seam: starts in the cream the previous section ended with */}
      <div aria-hidden="true" className="seam-cap seam-cap-top seam-cream" />
      {/* Seam: the valley fades into cream, which is how the next section begins */}
      <div aria-hidden="true" className="seam-cap seam-cap-bottom seam-cap-tall seam-cream" />

      {/* 1. Continuous Japanese Landscape Background (Screen-Print Poster System) */}
      <div className="absolute -bottom-1 left-0 right-0 z-0 pointer-events-none opacity-90">
        <PosterMountains variant="valley" color="#A3262A" fillColor="#A3262A" />
      </div>

      {/* Flat graphic Torii gate silhouette standing on the right ridge */}
      <div className="absolute right-8 md:right-24 bottom-24 w-28 sm:w-36 md:w-44 z-0 pointer-events-none opacity-85">
        <PosterTorii color="#8C1F23" />
      </div>

      {/* Pine branch silhouette entering from the left edge */}
      <div className="absolute top-16 -left-28 w-[280px] md:w-[360px] z-0 pointer-events-none opacity-25 rotate-45 hidden lg:block">
        <JapanesePineTree color="#A3262A" />
      </div>

      {/* Corner Crop Marks */}
      <div className="absolute top-6 left-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        ⌜ 28.6139° N
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        77.2090° E ⌝
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-xs text-[#A3262A]/60 select-none pointer-events-none z-10">
        ⌞ MOMENT 03
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-xs text-[#A3262A]/60 select-none pointer-events-none z-10">
        FOUR DISCIPLINES ⌟
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-[#A3262A]/80 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A3262A]" />
          <span>03 / FOUR FIELDS</span>
        </div>
        <span className="hidden sm:inline">ONE INTERDISCIPLINARY CANVAS</span>
        <span>[ 03 / 08 ]</span>
      </div>

      {/* Main Monumental Typographic Composition */}
      <div data-reveal className="relative z-10 my-auto py-6 md:py-8 max-w-6xl w-full">
        <div className="divide-y divide-[#A3262A]/20 border-y border-[#A3262A]/20">
          {fields.map((field, idx) => {
            const isHovered = activeField === idx;
            return (
              <div
                key={field.name}
                onMouseEnter={() => setActiveField(idx)}
                onMouseLeave={() => setActiveField(null)}
                className={`py-4 md:py-6 group cursor-pointer transition-all duration-300 ${
                  activeField !== null && !isHovered ? 'opacity-35' : 'opacity-100'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3">
                  <div className="flex items-baseline gap-5 md:gap-10">
                    <span className="font-mono text-xs md:text-sm font-semibold tracking-[0.3em] text-[#1A1817]/50 group-hover:text-[#1A1817] transition-colors">
                      {field.index}
                    </span>
                    <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1817] group-hover:translate-x-2 transition-transform duration-300">
                      {field.name}
                    </h2>
                  </div>

                  <div className="flex items-center gap-4 pl-10 md:pl-0">
                    <span className="font-editorial text-base sm:text-lg md:text-xl italic text-[#A3262A]/75 group-hover:text-[#A3262A] transition-colors">
                      {field.line}
                    </span>
                    <span className="hidden lg:inline font-jp text-xl font-bold text-[#A3262A]/35 group-hover:text-[#A3262A] transition-colors">
                      {field.jp}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
