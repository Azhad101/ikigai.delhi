import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JapaneseAnchor } from '../common/JapaneseAnchor';
import { SectionDivider } from '../common/SectionDivider';
import { isReducedMotion } from '../../engine/motion/motionTokens';
import './People.css';

gsap.registerPlugin(ScrollTrigger);

const ECOSYSTEM_GROUPS = [
  {
    id: "seekers",
    tier: "ROOTS",
    title: "SEEKERS",
    kanji: "求道者",
    description: "Students who arrive looking for something worth building. Driven by curiosity and hungry for hard problems.",
    accent: "var(--color-accent-gold)"
  },
  {
    id: "makers",
    tier: "ROOTS / BRANCHES",
    title: "MAKERS",
    kanji: "創作者",
    description: "Teams who turn philosophical ideas into tangible work — code, prose, visual art, and working projects.",
    accent: "var(--color-accent-vermilion)"
  },
  {
    id: "mentors",
    tier: "BRANCHES",
    title: "MENTORS",
    kanji: "導き手",
    description: "Seasoned engineers, writers, and artists who help squads see further, sharpen their craft, and pressure-test their thinking.",
    accent: "var(--color-forest-text)"
  },
  {
    id: "partners",
    tier: "CANOPY",
    title: "PARTNERS",
    kanji: "連帯者",
    description: "Ecosystem organizations that provide compute, toolchains, and capital to make enduring projects possible.",
    accent: "var(--color-accent-gold-light)"
  }
];

export function People() {
  const sectionRef = useRef(null);
  const treeSvgRef = useRef(null);
  const rootsPathRef = useRef(null);
  const trunkPathRef = useRef(null);
  const branchesPathRef = useRef(null);
  const flowersGroupRef = useRef(null);
  const cohortGridRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Tree growth scroll animation: Roots -> Trunk -> Branches -> Flowers
      const treeTl = gsap.timeline({
        scrollTrigger: {
          trigger: treeSvgRef.current,
          start: 'top 85%',
          end: 'bottom 45%',
          scrub: 0.6
        }
      });

      if (rootsPathRef.current && trunkPathRef.current && branchesPathRef.current && flowersGroupRef.current) {
        treeTl
          .fromTo(rootsPathRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
          .fromTo(trunkPathRef.current, { opacity: 0, scaleY: 0.2, transformOrigin: 'bottom center' }, { opacity: 1, scaleY: 1, duration: 1.2 }, '-=0.5')
          .fromTo(branchesPathRef.current, { opacity: 0, scale: 0.8, transformOrigin: 'bottom center' }, { opacity: 1, scale: 1, duration: 1.4 }, '-=0.6')
          .fromTo(flowersGroupRef.current, { opacity: 0, scale: 0.65, transformOrigin: 'center center' }, { opacity: 1, scale: 1, duration: 1.2 }, '-=0.7');
      }

      // Staggered reveal of ecosystem cohort cards
      const cards = cohortGridRef.current?.querySelectorAll('.ecosystem-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cohortGridRef.current,
              start: 'top 80%'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-forest people-section" id="people" ref={sectionRef}>
      <SectionDivider sectionNumber="08" label="THE PEOPLE & ECOSYSTEM" />

      <div className="container people-container">
        {/* Header Block */}
        <div className="people-header-block">
          <div className="people-anchor-row">
            <JapaneseAnchor kanji="樹木" romaji="JUMOKU" translation="The Ecosystem Tree" />
          </div>

          <span className="meta-label people-context-tag">THE LIVING COMMUNITY</span>

          <h2 className="title-editorial people-main-title">
            THE PEOPLE
          </h2>

          <p className="body-editorial people-subtitle">
            The tree represents the Ikigai ecosystem. Not decorative foliage, but an organic continuum of people, ideas, teams, projects, and impact.
          </p>
        </div>

        {/* The Architectural Sakura Ecosystem Tree Visual */}
        <div className="ecosystem-tree-stage" ref={treeSvgRef} aria-hidden="true">
          <svg
            className="ecosystem-tree-svg"
            viewBox="0 0 900 660"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Trunk Gradient: rich dark bark with subtle lighting */}
              <linearGradient id="trunkGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1c140e" />
                <stop offset="45%" stopColor="#2c1d16" />
                <stop offset="85%" stopColor="#3d2a20" />
                <stop offset="100%" stopColor="#4a3427" />
              </linearGradient>

              {/* Foliage Green Gradients */}
              <radialGradient id="foliageGrad1" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#4e725d" />
                <stop offset="65%" stopColor="#31493b" />
                <stop offset="100%" stopColor="#1f3026" />
              </radialGradient>
              <radialGradient id="foliageGrad2" cx="45%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#628b72" />
                <stop offset="60%" stopColor="#3d5b4a" />
                <stop offset="100%" stopColor="#22362b" />
              </radialGradient>

              {/* Sakura Blossom Petal Radial Gradients */}
              <radialGradient id="blossomSoft" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#ffe6ec" />
                <stop offset="40%" stopColor="#fca5b7" />
                <stop offset="85%" stopColor="#e85d75" />
                <stop offset="100%" stopColor="#b6533c" />
              </radialGradient>
              <radialGradient id="blossomDeep" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#ffb8c6" />
                <stop offset="55%" stopColor="#d94b68" />
                <stop offset="100%" stopColor="#8d263b" />
              </radialGradient>

              {/* Reusable Blossom Symbol */}
              <g id="sakuraBlossom">
                {/* 5 Petals */}
                <path d="M0,0 C-7,-16 -16,-12 -12,0 Z" fill="url(#blossomSoft)" />
                <path d="M0,0 C-15,-7 -15,10 0,8 Z" fill="url(#blossomSoft)" transform="rotate(72)" />
                <path d="M0,0 C-15,-7 -15,10 0,8 Z" fill="url(#blossomSoft)" transform="rotate(144)" />
                <path d="M0,0 C-15,-7 -15,10 0,8 Z" fill="url(#blossomSoft)" transform="rotate(216)" />
                <path d="M0,0 C-15,-7 -15,10 0,8 Z" fill="url(#blossomSoft)" transform="rotate(288)" />
                {/* Center Pistil / Stamen */}
                <circle cx="0" cy="0" r="3.2" fill="#c8a96b" />
                <circle cx="0" cy="0" r="1.5" fill="#f5f1e8" />
              </g>

              <g id="leafCluster">
                <path d="M0,0 C6,-8 14,-6 16,0 C14,6 6,8 0,0 Z" fill="#628b72" opacity="0.85" />
                <path d="M-2,2 C-10,-4 -14,4 -8,8 C-2,10 0,6 -2,2 Z" fill="#4e725d" opacity="0.8" />
                <path d="M4,-4 C10,-14 18,-10 14,-2 C10,4 2,0 4,-4 Z" fill="#81aa91" opacity="0.75" />
              </g>

              {/* Drifting Petal */}
              <path id="singlePetal" d="M0,0 C-3,-6 -7,-4 -5,1 C-3,4 0,3 0,0 Z" fill="url(#blossomSoft)" />
            </defs>

            {/* Background Reticle and Subtle Atmosphere */}
            <line x1="450" y1="30" x2="450" y2="610" stroke="rgba(245, 241, 232, 0.06)" strokeDasharray="3 6" />
            <line x1="60" y1="500" x2="840" y2="500" stroke="rgba(245, 241, 232, 0.08)" />

            {/* Level 1: ROOTS (Seekers, Builders, Mentors, Partners) with Gnarled Wood Curvature */}
            <g className="tree-roots" ref={rootsPathRef}>
              {/* Primary Gnarled Root Form */}
              <path
                d="M440,500 C420,530 380,550 310,565 C250,578 180,582 140,595"
                stroke="#3d2a20"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M445,500 C435,535 410,560 370,580 C340,595 300,600 270,610"
                stroke="#2c1d16"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M455,500 C465,535 490,560 530,580 C560,595 600,600 630,610"
                stroke="#2c1d16"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M460,500 C480,530 520,550 590,565 C650,578 720,582 760,595"
                stroke="#3d2a20"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Fine Root Filaments with Gold Glow */}
              <path d="M310,565 C280,585 240,595 200,605" stroke="var(--color-accent-gold)" strokeWidth="1.2" strokeOpacity="0.75" fill="none" />
              <path d="M370,580 C350,605 320,615 285,622" stroke="var(--color-accent-gold)" strokeWidth="1" strokeOpacity="0.6" fill="none" />
              <path d="M530,580 C550,605 580,615 615,622" stroke="var(--color-accent-gold)" strokeWidth="1" strokeOpacity="0.6" fill="none" />
              <path d="M590,565 C620,585 660,595 700,605" stroke="var(--color-accent-gold)" strokeWidth="1.2" strokeOpacity="0.75" fill="none" />

              {/* Root Badges & Labels */}
              <g transform="translate(130, 618)">
                <circle cx="0" cy="0" r="3" fill="var(--color-accent-gold)" />
                <text x="8" y="3" fill="var(--color-accent-gold)" fontSize="11" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.16em">SEEKERS</text>
                <text x="8" y="16" fill="var(--color-forest-muted)" fontSize="9" fontFamily="var(--font-sans)">Curiosity & Need</text>
              </g>

              <g transform="translate(260, 634)">
                <circle cx="0" cy="0" r="3" fill="var(--color-accent-gold)" />
                <text x="8" y="3" fill="var(--color-accent-gold)" fontSize="11" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.16em">BUILDERS</text>
                <text x="8" y="16" fill="var(--color-forest-muted)" fontSize="9" fontFamily="var(--font-sans)">Code & Prototypes</text>
              </g>

              <g transform="translate(520, 634)">
                <circle cx="0" cy="0" r="3" fill="var(--color-accent-gold)" />
                <text x="8" y="3" fill="var(--color-accent-gold)" fontSize="11" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.16em">MENTORS</text>
                <text x="8" y="16" fill="var(--color-forest-muted)" fontSize="9" fontFamily="var(--font-sans)">Insight & Rigor</text>
              </g>

              <g transform="translate(680, 618)">
                <circle cx="0" cy="0" r="3" fill="var(--color-accent-gold)" />
                <text x="8" y="3" fill="var(--color-accent-gold)" fontSize="11" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.16em">PARTNERS</text>
                <text x="8" y="16" fill="var(--color-forest-muted)" fontSize="9" fontFamily="var(--font-sans)">Toolchains & Grant</text>
              </g>
            </g>

            {/* Level 2: TRUNK (Organic Ancient Wood Body with Bark Fissures) */}
            <g className="tree-trunk" ref={trunkPathRef}>
              {/* Organic Trunk Polygon Silhouette */}
              <path
                d="M415,505 C425,445 428,390 422,340 C420,310 435,280 445,260 L455,260 C465,280 480,310 478,340 C472,390 475,445 485,505 C460,510 440,510 415,505 Z"
                fill="url(#trunkGrad)"
              />
              {/* Bark Texture Lines & Fissures */}
              <path d="M438,495 C444,435 442,380 446,325" stroke="#1c140e" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.8" />
              <path d="M455,490 C452,430 456,370 452,320" stroke="#4a3427" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.6" />
              <path d="M465,498 C462,440 464,395 460,345" stroke="#1c140e" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.8" />

              {/* Core convergence knot */}
              <circle cx="450" cy="380" r="7" fill="var(--color-accent-vermilion)" />
              <circle cx="450" cy="380" r="16" stroke="var(--color-accent-vermilion)" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
              <circle cx="450" cy="380" r="26" stroke="var(--color-accent-gold)" strokeWidth="0.8" opacity="0.35" />
            </g>

            {/* Level 3: BRANCHES & DENSE FOLIAGE CLUSTERS */}
            <g className="tree-branches" ref={branchesPathRef}>
              {/* Branch Wood Infrastructure */}
              {/* Left Lower Branch */}
              <path d="M435,320 C380,285 300,280 210,290 C180,295 140,310 110,325" stroke="#3d2a20" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M320,282 C285,250 230,230 180,225" stroke="#2c1d16" strokeWidth="2.5" strokeLinecap="round" fill="none" />

              {/* Left Upper Branch */}
              <path d="M440,270 C390,220 340,180 270,145 C230,125 185,115 150,110" stroke="#3d2a20" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M350,185 C330,140 280,105 240,90" stroke="#2c1d16" strokeWidth="2" strokeLinecap="round" fill="none" />

              {/* Right Upper Branch */}
              <path d="M460,270 C510,220 560,180 630,145 C670,125 715,115 750,110" stroke="#3d2a20" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M550,185 C570,140 620,105 660,90" stroke="#2c1d16" strokeWidth="2" strokeLinecap="round" fill="none" />

              {/* Right Lower Branch */}
              <path d="M465,320 C520,285 600,280 690,290 C720,295 760,310 790,325" stroke="#3d2a20" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M580,282 C615,250 670,230 720,225" stroke="#2c1d16" strokeWidth="2.5" strokeLinecap="round" fill="none" />

              {/* Central Crown Branches */}
              <path d="M448,260 C435,200 420,160 410,110" stroke="#3d2a20" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M452,260 C465,200 480,160 490,110" stroke="#3d2a20" strokeWidth="3" strokeLinecap="round" fill="none" />

              {/* Organic Foliage Clouds (Rich layered Greens) */}
              <ellipse cx="180" cy="225" rx="55" ry="35" fill="url(#foliageGrad1)" opacity="0.85" />
              <ellipse cx="120" cy="315" rx="45" ry="28" fill="url(#foliageGrad2)" opacity="0.8" />
              <ellipse cx="230" cy="115" rx="65" ry="40" fill="url(#foliageGrad1)" opacity="0.9" />
              <ellipse cx="320" cy="130" rx="55" ry="35" fill="url(#foliageGrad2)" opacity="0.85" />
              <ellipse cx="450" cy="100" rx="80" ry="48" fill="url(#foliageGrad1)" opacity="0.9" />
              <ellipse cx="580" cy="130" rx="55" ry="35" fill="url(#foliageGrad2)" opacity="0.85" />
              <ellipse cx="670" cy="115" rx="65" ry="40" fill="url(#foliageGrad1)" opacity="0.9" />
              <ellipse cx="780" cy="315" rx="45" ry="28" fill="url(#foliageGrad2)" opacity="0.8" />
              <ellipse cx="720" cy="225" rx="55" ry="35" fill="url(#foliageGrad1)" opacity="0.85" />

              {/* Branch Domain Labels with Pill Badges */}
              <g transform="translate(140, 80)">
                <rect x="-8" y="-14" width="70" height="22" rx="4" fill="rgba(26, 40, 33, 0.85)" stroke="var(--color-accent-gold)" strokeWidth="1" />
                <text x="27" y="1" fill="#F5F1E8" fontSize="10" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.14em" textAnchor="middle">IDEAS</text>
              </g>

              <g transform="translate(290, 65)">
                <rect x="-8" y="-14" width="76" height="22" rx="4" fill="rgba(26, 40, 33, 0.85)" stroke="var(--color-accent-vermilion)" strokeWidth="1" />
                <text x="30" y="1" fill="#F5F1E8" fontSize="10" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.14em" textAnchor="middle">TEAMS</text>
              </g>

              <g transform="translate(530, 65)">
                <rect x="-8" y="-14" width="104" height="22" rx="4" fill="rgba(26, 40, 33, 0.85)" stroke="var(--color-accent-gold)" strokeWidth="1" />
                <text x="44" y="1" fill="#F5F1E8" fontSize="10" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.14em" textAnchor="middle">COMMUNITY</text>
              </g>

              <g transform="translate(680, 80)">
                <rect x="-8" y="-14" width="80" height="22" rx="4" fill="rgba(26, 40, 33, 0.85)" stroke="var(--color-accent-vermilion)" strokeWidth="1" />
                <text x="32" y="1" fill="#F5F1E8" fontSize="10" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.14em" textAnchor="middle">IMPACT</text>
              </g>
            </g>

            {/* Level 4: DETAILED SAKURA BLOSSOMS & BLOOMING PROJECTS */}
            <g className="tree-flowers" ref={flowersGroupRef}>
              {/* Dense clusters of 5-petal Sakura Flowers */}
              {/* Left Canopy Blossoms */}
              <use href="#sakuraBlossom" x="150" y="125" transform="scale(1.2)" />
              <use href="#sakuraBlossom" x="185" y="105" transform="scale(0.95)" />
              <use href="#sakuraBlossom" x="220" y="135" transform="scale(1.1)" />
              <use href="#sakuraBlossom" x="250" y="100" transform="scale(0.85)" />
              <use href="#sakuraBlossom" x="170" y="210" transform="scale(1.15)" />
              <use href="#sakuraBlossom" x="200" y="235" transform="scale(0.9)" />
              <use href="#sakuraBlossom" x="130" y="300" transform="scale(1)" />
              <use href="#sakuraBlossom" x="155" y="325" transform="scale(0.85)" />

              {/* Mid-Left Canopy Blossoms */}
              <use href="#sakuraBlossom" x="290" y="145" transform="scale(1.25)" />
              <use href="#sakuraBlossom" x="330" y="120" transform="scale(1.05)" />
              <use href="#sakuraBlossom" x="355" y="155" transform="scale(0.95)" />
              <use href="#sakuraBlossom" x="310" y="180" transform="scale(1.1)" />

              {/* Center Crest Canopy Blossoms */}
              <use href="#sakuraBlossom" x="410" y="90" transform="scale(1.3)" />
              <use href="#sakuraBlossom" x="445" y="65" transform="scale(1.1)" />
              <use href="#sakuraBlossom" x="480" y="85" transform="scale(1.25)" />
              <use href="#sakuraBlossom" x="430" y="120" transform="scale(0.95)" />
              <use href="#sakuraBlossom" x="470" y="125" transform="scale(1)" />

              {/* Mid-Right Canopy Blossoms */}
              <use href="#sakuraBlossom" x="540" y="150" transform="scale(1.1)" />
              <use href="#sakuraBlossom" x="575" y="115" transform="scale(1.2)" />
              <use href="#sakuraBlossom" x="610" y="140" transform="scale(1)" />
              <use href="#sakuraBlossom" x="590" y="175" transform="scale(0.95)" />

              {/* Right Canopy Blossoms */}
              <use href="#sakuraBlossom" x="650" y="105" transform="scale(0.95)" />
              <use href="#sakuraBlossom" x="680" y="130" transform="scale(1.2)" />
              <use href="#sakuraBlossom" x="715" y="105" transform="scale(1.1)" />
              <use href="#sakuraBlossom" x="700" y="215" transform="scale(1.15)" />
              <use href="#sakuraBlossom" x="735" y="240" transform="scale(0.9)" />
              <use href="#sakuraBlossom" x="765" y="300" transform="scale(1)" />
              <use href="#sakuraBlossom" x="790" y="325" transform="scale(0.85)" />

              {/* Central Focal Point: Glowing Major Project Sun/Flower */}
              <g transform="translate(450, 190)">
                <circle cx="0" cy="0" r="38" fill="rgba(182, 83, 60, 0.18)" />
                <circle cx="0" cy="0" r="26" fill="rgba(182, 83, 60, 0.45)" />
                <circle cx="0" cy="0" r="18" fill="var(--color-accent-vermilion)" />
                <circle cx="0" cy="0" r="42" stroke="var(--color-accent-gold)" strokeWidth="1" strokeDasharray="4 4" opacity="0.75" />
                <text x="0" y="4" textAnchor="middle" fill="#F5F1E8" fontSize="10" fontFamily="var(--font-display)" fontWeight="600" letterSpacing="0.22em">PROJECTS</text>
                <text x="0" y="58" textAnchor="middle" fill="var(--color-accent-gold-light)" fontSize="8.5" fontFamily="var(--font-sans)" letterSpacing="0.16em">// ENDURING SOFTWARE</text>
              </g>

              {/* Swirling Drifting Sakura Petals descending to earth */}
              <use href="#singlePetal" x="220" y="170" transform="rotate(35 220 170) scale(1.4)" />
              <use href="#singlePetal" x="280" y="240" transform="rotate(-40 280 240) scale(1.2)" />
              <use href="#singlePetal" x="340" y="310" transform="rotate(65 340 310) scale(1.5)" />
              <use href="#singlePetal" x="380" y="420" transform="rotate(-25 380 420) scale(1.3)" />
              <use href="#singlePetal" x="290" y="480" transform="rotate(50 290 480) scale(1.1)" />

              <use href="#singlePetal" x="660" y="170" transform="rotate(-30 660 170) scale(1.4)" />
              <use href="#singlePetal" x="610" y="250" transform="rotate(45 610 250) scale(1.3)" />
              <use href="#singlePetal" x="540" y="320" transform="rotate(-55 540 320) scale(1.5)" />
              <use href="#singlePetal" x="510" y="430" transform="rotate(20 510 430) scale(1.2)" />
              <use href="#singlePetal" x="600" y="490" transform="rotate(-40 600 490) scale(1.1)" />

              <use href="#singlePetal" x="450" y="280" transform="rotate(15 450 280) scale(1.6)" />
              <use href="#singlePetal" x="470" y="460" transform="rotate(-10 470 460) scale(1.3)" />
            </g>
          </svg>
        </div>

        {/* Ecosystem Cohort Manifest Cards */}
        <div className="ecosystem-cohort-grid" ref={cohortGridRef}>
          {ECOSYSTEM_GROUPS.map((group) => (
            <div key={group.id} className="ecosystem-card">
              <div className="ecosystem-card-top">
                <span className="meta-label card-tier-tag">{group.tier}</span>
                <span className="text-japanese card-kanji">{group.kanji}</span>
              </div>

              <h3 className="ecosystem-card-title">{group.title}</h3>
              <p className="ecosystem-card-desc">{group.description}</p>

              <div className="card-accent-hairline" style={{ backgroundColor: group.accent }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
