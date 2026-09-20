import React from 'react';
import { PosterTerrainSwoop } from '../JapaneseLandscape';
import { OdysseeDial } from '../OdysseeDial';

export const OdysseeMoment: React.FC = () => {
  return (
    <section className="relative min-h-svh flex flex-col justify-between px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-[#F4E7C6] text-[#A3262A] overflow-hidden">
      {/* Seam: starts in the cream the previous section ended with */}
      <div aria-hidden="true" className="seam-cap seam-cap-top seam-cream" />

      {/* Sweeping deep crimson terrain along the bottom edge, leading into the final summit */}
      <div className="absolute -bottom-1 left-0 right-0 z-0 pointer-events-none">
        <PosterTerrainSwoop color="#A3262A" direction="left-to-right" />
      </div>

      {/* Corner Crop Marks */}
      <div className="absolute top-6 left-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        ⌜ 28.6139° N
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        77.2090° E ⌝
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-xs text-[#F4E7C6]/80 select-none pointer-events-none z-10">
        ⌞ MOMENT 04
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-xs text-[#F4E7C6]/80 select-none pointer-events-none z-10">
        THE STRUCTURE ⌟
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-[#A3262A]/80 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A3262A]" />
          <span>04 / THE ODYSSEE</span>
        </div>
        <span>DELHI · 2-DAY ODYSSEE</span>
        <span>[ 04 / 08 ]</span>
      </div>

      {/* Main Content */}
      <div data-reveal className="relative z-10 my-auto py-6 md:py-8 max-w-6xl">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-10 mb-8 md:mb-10">
          <h2 className="lg:col-span-8 font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1817] leading-[1.08] tracking-tight mb-0 max-w-3xl">
            What happens when you are given the time to{' '}
            <span className="italic font-normal underline decoration-[#1A1817]/30 underline-offset-8">
              finish what matters?
            </span>
          </h2>

          {/* Right side only: the 48-hour dial (desktop) */}
          <div className="hidden lg:flex lg:col-span-4 justify-end lg:-my-8">
            <OdysseeDial />
          </div>
        </div>

        {/* 3 Pure Editorial Columns with Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 pt-6 md:pt-8 border-t border-[#A3262A]/20">
          <div className="space-y-3">
            <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-[#A3262A] uppercase block">
              [ 01 · THE IMMERSION ]
            </span>
            <h3 className="font-editorial text-2xl md:text-3xl font-bold text-[#1A1817]">
              2 Days
            </h3>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#A3262A]/85 font-normal leading-relaxed">
              Date: [DATE TO BE ANNOUNCED]. Continuous odyssee window from opening keynote to final submission.
            </p>
          </div>

          <div className="space-y-4 md:border-l md:border-[#A3262A]/20 md:pl-10">
            <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#A3262A] uppercase block">
              [ 02 · THE COLLISION ]
            </span>
            <h3 className="font-editorial text-3xl font-bold text-[#1A1817]">
              2 Builders Together
            </h3>
            <p className="font-sans text-sm md:text-base text-[#A3262A]/85 font-normal leading-relaxed">
              Individual participation. Teams of 2, team will be decided in the event. You will not sit in a room of people of one field. Coders, poets, designers, and physical fabricators push one another into their territory.
            </p>
          </div>

          <div className="space-y-4 md:border-l md:border-[#A3262A]/20 md:pl-10">
            <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#A3262A] uppercase block">
              [ 03 · THE OUTCOME ]
            </span>
            <h3 className="font-editorial text-3xl font-bold text-[#1A1817]">
              Delhi NCR
            </h3>
            <p className="font-sans text-sm md:text-base text-[#A3262A]/85 font-normal leading-relaxed">
              Venue: [VENUE TO BE ANNOUNCED]. Physical collaboration, high-speed telemetry, and direct mentor access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
