import React from 'react';
import { PosterMountains } from '../JapaneseLandscape';

interface Partner {
  name: string;
  role: string;
  logo: string;
  url?: string;
  description: string;
  tag: string;
}

interface Category {
  id: string;
  title: string;
  jp: string;
  description: string;
  partners: Partner[];
  openSlotTitle: string;
  openSlotDesc: string;
}

export const SponsorsMoment: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'venue',
      title: 'VENUE PARTNER',
      jp: '会場',
      description: 'The physical sanctuary providing uninterrupted, focused space in Delhi.',
      partners: [],
      openSlotTitle: 'SANCTUARY SPACE · DELHI',
      openSlotDesc: 'Open for industrial studios, design spaces, or campus venues offering 2 continuous days of deep flow.',
    },
    {
      id: 'tech',
      title: 'TECHNOLOGY PARTNER',
      jp: '技術',
      description: 'Providing world-class developer tools, domains, and core infrastructure.',
      partners: [
        {
          name: '.xyz',
          role: 'Official Domain & Web3 Partner',
          logo: '/sponsors/xyz.png',
          url: 'https://gen.xyz',
          description: 'Powering the next generation of internet pioneers, creative engineers, and decentralised builders worldwide.',
          tag: 'DOMAINS · WEB INFRA',
        },
      ],
      openSlotTitle: 'TECH / COMPUTE / API PARTNER',
      openSlotDesc: 'Open for cloud providers, developer platforms, and AI tooling wanting to equip serious craftspeople.',
    },
    {
      id: 'prize',
      title: 'PRIZE PARTNER',
      jp: '褒賞',
      description: 'Bounties, fellowships, and mastery subscriptions for enduring artifacts.',
      partners: [
        {
          name: 'CodeCrafters',
          role: 'Official Systems Mastery Partner',
          logo: '/sponsors/codecrafters.jpg',
          url: 'https://codecrafters.io',
          description: 'Advanced practice challenges for software engineers building complex systems from scratch.',
          tag: 'SYSTEMS MASTERY',
        },
        {
          name: 'Azka Creation',
          role: 'Official Creative Studio Partner',
          logo: '/sponsors/azka-creation.jpg',
          url: 'https://azkacreation.com',
          description: 'Bespoke design, physical merchandise fabrication, and visual artifacts for visionary projects.',
          tag: 'DESIGN · FABRICATION',
        },
        {
          name: 'OSEN',
          role: 'Prize Partner',
          logo: '/sponsors/osen.jpg',
          description: 'Prize partner for the Odyssee.',
          tag: 'PRIZE PARTNER',
        },
        {
          name: 'Interview Buddy',
          role: 'Prize Partner',
          logo: '/sponsors/interview-buddy.jpg',
          description: 'Prize partner for the Odyssee.',
          tag: 'PRIZE PARTNER',
        },
      ],
      openSlotTitle: 'BOUNTIES & GRANTS SLOT',
      openSlotDesc: 'Open for venture funds, grant programs, and specialized hardware rewards.',
    },
    {
      id: 'community',
      title: 'COMMUNITY PARTNER',
      jp: '共同体',
      description: 'Collectives, hacker houses, and design fraternities mobilizing talent.',
      partners: [],
      openSlotTitle: 'COMMUNITY & GUILD PARTNER',
      openSlotDesc: 'Open for open-source fraternities, builder groups, and university design societies.',
    },
    {
      id: 'food',
      title: 'FOOD & SUSTENANCE',
      jp: '兵站',
      description: 'Fueling relentless stamina across 2 continuous days of craft.',
      partners: [],
      openSlotTitle: 'SUSTENANCE & CAFFEINE PARTNER',
      openSlotDesc: 'Open for specialty coffee roasters, healthy rations, and midnight nourishment.',
    },
  ];

  return (
    <section
      id="sponsors"
      className="relative min-h-svh flex flex-col justify-between px-6 md:px-16 lg:px-24 py-10 md:py-14 bg-[#F4E7C6] text-[#A3262A] overflow-hidden"
    >
      {/* Seams: cream in; the mountains dissolve into cream on the way out */}
      <div aria-hidden="true" className="seam-cap seam-cap-top seam-cream" />
      <div aria-hidden="true" className="seam-cap seam-cap-bottom seam-cap-tall seam-cream" />

      {/* 1. Continuous Japanese Landscape Background in rich crimson shades */}
      <div className="absolute -bottom-1 left-0 right-0 z-0 pointer-events-none opacity-40">
        <PosterMountains variant="distant" color="#A3262A" fillColor="#A3262A" />
      </div>

      {/* Corner Crop Marks */}
      <div className="absolute top-6 left-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        ⌜ 28.6139° N
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        77.2090° E ⌝
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        ⌞ MOMENT 07
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        ALLIANCES & PATRONS ⌟
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-[#A3262A]/80 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A3262A]" />
          <span>07 / ALLIANCES & PATRONS</span>
        </div>
        <span className="hidden sm:inline">PATRONS OF THE ODYSSEE</span>
        <span>[ 07 / 08 ]</span>
      </div>

      {/* Main Content */}
      <div data-reveal className="relative z-10 my-auto py-4 md:py-6 max-w-6xl w-full">
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-jp text-base font-bold text-[#A3262A]/60">後援・同盟</span>
            <span className="h-[1px] w-10 bg-[#A3262A]/30" />
            <span className="font-mono text-xs tracking-[0.3em] text-[#A3262A]/80 uppercase">
              THE PATRONAGE
            </span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1817] leading-[1.08] tracking-tight max-w-3xl">
            Alliances backing Delhi’s{' '}
            <span className="italic font-normal text-[#A3262A] underline decoration-[#A3262A]/30 underline-offset-8">
              uncompromising craft.
            </span>
          </h2>
          <p className="mt-3 font-sans text-xs sm:text-sm text-[#1A1817]/80 max-w-2xl leading-relaxed">
            The guilds, tooling, and patrons providing sanctuary, compute, and bounties. Every category retains open slots for partners dedicated to serious inquiry.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-4 md:space-y-5">
          {categories.map((cat) => (
            <div key={cat.id} className="pt-3 border-t border-[#A3262A]/20">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.25em] text-[#A3262A] uppercase">
                    [{cat.title}]
                  </span>
                  <span className="font-jp text-xs text-[#A3262A]/50">{cat.jp}</span>
                </div>
                <p className="font-editorial italic text-xs text-[#1A1817]/70">
                  {cat.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {cat.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="relative group bg-[#FAF4E8] border border-[#A3262A]/25 p-2.5 flex flex-col items-center justify-center transition-all duration-300 hover:border-[#A3262A] hover:shadow-md"
                  >
                    <div className="w-full h-11 bg-white/60 border border-[#A3262A]/10 rounded-sm p-1.5 flex items-center justify-center mb-1.5 overflow-hidden">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-8 max-w-[85%] object-contain rounded-xs transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="font-editorial text-xs font-bold text-[#1A1817] text-center leading-tight">
                      {partner.name}
                    </h3>
                  </div>
                ))}

                <div className="relative border border-dashed border-[#A3262A]/30 bg-[#FAF4E8]/40 p-2.5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#A3262A] hover:bg-[#FAF4E8]">
                  <span className="font-mono text-lg font-light text-[#A3262A]/60 leading-none mb-1">+</span>
                  <a
                    href="mailto:patrons@ikigai.delhi?subject=IKIGAI.delhi%20Partner%20Inquiry"
                    className="font-mono text-[8px] font-bold tracking-widest text-[#A3262A] hover:text-[#1A1817] hover:underline uppercase leading-tight"
                  >
                    {cat.openSlotTitle}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-[#A3262A]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <p className="font-editorial text-sm font-bold text-[#1A1817]">
              Want to support Delhi’s premier builder gathering?
            </p>
            <p className="font-sans text-xs text-[#1A1817]/75">
              Direct inquiries for custom bounties, compute grants, or patron sponsorship packages.
            </p>
          </div>
          <a
            href="mailto:patrons@ikigai.delhi?subject=IKIGAI.delhi%20Sponsorship%20Prospectus"
            className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] bg-[#A3262A] text-[#F4E7C6] hover:bg-[#1A1817] px-5 py-2.5 transition-colors uppercase whitespace-nowrap cursor-pointer"
          >
            INQUIRE PATRONAGE [→]
          </a>
        </div>
      </div>
    </section>
  );
};
