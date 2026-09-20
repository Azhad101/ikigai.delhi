import React, { useState } from 'react';
import { JapanesePineTree } from '../JapaneseLandscape';

interface TeamMember {
  name: string;
  jp: string;
  role: string;
  focus: string;
}

export const ConvenersMoment: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const team: TeamMember[] = [
    { name: 'Azhad', jp: '基盤', role: 'Lead Organizer', focus: 'Lead Organizer' },
    { name: 'Mayank', jp: '設計', role: 'Lead Organizer', focus: 'Lead Organizer' },
    { name: 'Atharv', jp: '環境', role: 'Co-organizer', focus: 'Co-organizer' },
    { name: 'Harman', jp: '音響', role: 'Co-organizer', focus: 'Co-organizer' },
    { name: 'Azka', jp: '造形', role: 'Designer', focus: 'Designer' },
    { name: 'Asad', jp: '企画', role: 'Technicalities', focus: 'Technicalities' },
    { name: 'Ubaid', jp: '言霊', role: 'Social Media', focus: 'Social Media' },
    { name: 'Nishant', jp: '共同', role: 'Logistics', focus: 'Logistics' },
  ];

  return (
    <section
      id="conveners"
      className="relative min-h-svh flex flex-col justify-between px-6 md:px-12 lg:px-16 py-16 md:py-24 bg-[#F4E7C6] text-[#A3262A] overflow-hidden select-none"
    >
      {/* Seams: cream in, cream out */}
      <div aria-hidden="true" className="seam-cap seam-cap-top seam-cream" />
      <div aria-hidden="true" className="seam-cap seam-cap-bottom seam-cream" />

      {/* Background Japanese Pine Silhouette Accents in Crimson */}
      <div className="absolute top-12 -left-32 w-[320px] pointer-events-none opacity-20 rotate-45 z-0 hidden lg:block">
        <JapanesePineTree color="#A3262A" />
      </div>
      <div className="absolute bottom-12 -right-32 w-[320px] pointer-events-none opacity-20 -rotate-45 z-0 hidden lg:block">
        <JapanesePineTree color="#A3262A" />
      </div>

      {/* Corner Crop Marks */}
      <div className="absolute top-6 left-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        ⌜ 28.6139° N
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        77.2090° E ⌝
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        ⌞ MOMENT 06
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        THE CONVENERS ⌟
      </div>

      {/* Top Section Header */}
      <div className="relative z-10 flex items-center justify-between text-[#A3262A]/80 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A3262A]" />
          <span>06 / THE CONVENERS · 発起人</span>
        </div>
        <span className="hidden sm:inline">ARCHITECTS OF THE GROUND</span>
        <span>[ 06 / 08 ]</span>
      </div>

      {/* Main 3-Column Editorial Layout */}
      <div data-reveal className="relative z-10 my-auto py-8 max-w-7xl mx-auto w-full">
        {/* Section Intro Title */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="h-[1px] w-8 bg-[#A3262A]/30" />
            <span className="font-mono text-xs tracking-[0.35em] text-[#A3262A] uppercase font-semibold">
              THE MAKERS BEHIND IKIGAI
            </span>
            <span className="h-[1px] w-8 bg-[#A3262A]/30" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1817] tracking-tight leading-[1.08]">
            The Conveners of the{' '}
            <span className="italic font-normal text-[#A3262A] underline decoration-[#A3262A]/30 underline-offset-8">
              Odyssee.
            </span>
          </h2>
        </div>

        {/* 3 Columns: Left Story / Center Photograph / Right Roster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Context, Philosophy & Guild Principles */}
          <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col justify-between space-y-6">
            <div className="border-l-2 border-[#A3262A]/40 pl-5 space-y-3">
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#A3262A] uppercase block font-semibold">
                [ BUILDERS FIRST · HOSTS SECOND ]
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#1A1817] leading-tight">
                Not a conference agency. A collective of makers.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1A1817]/80 leading-relaxed font-normal">
                IKIGAI is conceived, organized, and funded by active programmers, visual designers,
                typographers, and writers based in Delhi. We built the sanctuary we desperately wished existed
                in our own city.
              </p>
            </div>

            {/* Three Sacred Tenets */}
            <div className="bg-[#FAF4E8] border border-[#A3262A]/20 p-4 rounded-xs space-y-3">
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#A3262A] uppercase block font-bold">
                CONVENER CREED · 規律
              </span>
              <div className="space-y-2 font-mono text-[11px] text-[#1A1817]/85">
                <div className="flex items-start gap-2">
                  <span className="text-[#A3262A] font-bold">01/</span>
                  <span>Zero commercial pitches or sponsor stages.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#A3262A] font-bold">02/</span>
                  <span>Every participant application vetted personally.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#A3262A] font-bold">03/</span>
                  <span>48 hours of continuous, uninterrupted craft.</span>
                </div>
              </div>
            </div>

            {/* Coordinates & Seal */}
            <div className="pt-2 border-t border-[#A3262A]/15 flex items-center justify-between text-[#A3262A]/60 font-mono text-[10px]">
              <span>SEAL // 発起人印</span>
              <span className="font-bold text-[#A3262A]">DELHI 2026</span>
            </div>
          </div>

          {/* Center Column: The Framed Street Crossing Photograph */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center">
            <div className="relative p-2 md:p-3 bg-[#FAF4E8] border border-[#A3262A]/30 shadow-2xl shadow-[#1A1817]/10 max-w-[440px] sm:max-w-[480px] w-full">
              {/* Photo Corner Guides */}
              <div className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[#A3262A] select-none pointer-events-none">
                ⌜
              </div>
              <div className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[#A3262A] select-none pointer-events-none">
                ⌝
              </div>
              <div className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[#A3262A] select-none pointer-events-none">
                ⌞
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[#A3262A] select-none pointer-events-none">
                ⌟
              </div>

              {/* The Team Street Crossing Photograph */}
              <div className="relative overflow-hidden border border-[#1A1817]/20 bg-[#1A1817]">
                <img
                  src="/team/team-crossing.jpg"
                  alt="The Conveners of IKIGAI crossing the Delhi intersection"
                  className="w-full h-auto object-cover filter contrast-[1.03] hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Subtle Red Stamp in the Photo Corner */}
                <div className="absolute bottom-3 right-3 bg-[#A3262A]/90 backdrop-blur-xs text-[#F4E7C6] font-mono text-[9px] px-2 py-1 uppercase tracking-widest border border-[#F4E7C6]/30 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4E7C6]" />
                  <span>CONVENERS · DELHI</span>
                </div>
              </div>

              {/* Museum/Gallery Plate Caption */}
              <div className="mt-3 px-1 py-1.5 flex items-center justify-between font-mono text-[10px] text-[#A3262A]/80 border-t border-[#A3262A]/15">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#1A1817]">PLATE NO. 01</span>
                  <span>// THE CROSSING</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[9px] text-[#A3262A]">
                  <span>8 MAKERS IN MOTION</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Convener Roster & Focuses */}
          <div className="lg:col-span-3 order-3 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#A3262A] uppercase font-semibold">
                  [ THE ROSTER ]
                </span>
                <span className="font-mono text-[10px] text-[#A3262A]/60">
                  8 MEMBERS
                </span>
              </div>
              <p className="font-editorial italic text-xs text-[#1A1817]/70 mb-4">
                Hover to locate each craftsman across the crossing:
              </p>

              {/* Interactive Member List */}
              <div className="divide-y divide-[#A3262A]/15 border-y border-[#A3262A]/20">
                {team.map((member) => {
                  const isHovered = hoveredMember === member.name;
                  return (
                    <div
                      key={member.name}
                      onMouseEnter={() => setHoveredMember(member.name)}
                      onMouseLeave={() => setHoveredMember(null)}
                      className={`py-2.5 px-2 transition-all duration-200 cursor-default flex items-center justify-between group ${
                        isHovered ? 'bg-[#FAF4E8] pl-3 border-l-2 border-[#A3262A]' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            isHovered ? 'bg-[#A3262A] scale-125' : 'bg-[#A3262A]/40'
                          }`}
                        />
                        <span className="font-editorial text-base sm:text-lg font-bold text-[#1A1817] group-hover:text-[#A3262A] transition-colors">
                          {member.name}
                        </span>
                        <span className="font-jp text-xs text-[#A3262A]/40">
                          {member.jp}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-[#A3262A]/80 uppercase block">
                          {member.role}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Pull Quote */}
            <div className="p-3.5 bg-[#FAF4E8] border border-[#A3262A]/20">
              <p className="font-editorial italic text-xs sm:text-sm text-[#1A1817] leading-snug">
                “We don't need another stage. We need quiet rooms, serious peers, and the time to finish what matters.”
              </p>
              <span className="font-mono text-[9px] tracking-widest text-[#A3262A] uppercase block mt-2 font-semibold">
                — THE DELHI CONVENERS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Coordinates Bar */}
      <div className="relative z-10 flex items-center justify-between text-[#A3262A]/60 font-mono text-[10px] tracking-[0.25em] uppercase">
        <span>DELHI COHORT · 2026</span>
        <span>INDEPENDENT · CRAFT-LED</span>
      </div>
    </section>
  );
};
