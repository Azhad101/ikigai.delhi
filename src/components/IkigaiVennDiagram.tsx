import React, { useState } from 'react';

interface IkigaiVennDiagramProps {
  inverted?: boolean; // If true, for red background (cream lines). If false, for cream background (red lines).
  className?: string;
  size?: number;
}

export const IkigaiVennDiagram: React.FC<IkigaiVennDiagramProps> = ({
  inverted = false,
  className = '',
}) => {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  const strokeColor = inverted ? '#F4E7C6' : '#A3262A';
  const fillColor = inverted ? '#F4E7C6' : '#A3262A';
  const coreBgColor = inverted ? '#F4E7C6' : '#A3262A';
  const coreInnerBg = inverted ? '#A3262A' : '#F4E7C6';
  const coreTextColor = inverted ? '#A3262A' : '#A3262A';

  return (
    <div className={`relative w-full select-none ${className}`}>
      <svg
        viewBox="0 0 600 600"
        className="w-full h-auto drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Astrolabe / Compass Guide Rings */}
        <circle
          cx="300"
          cy="300"
          r="275"
          stroke={strokeColor}
          strokeWidth="0.75"
          strokeDasharray="3 6"
          opacity="0.3"
        />
        <circle
          cx="300"
          cy="300"
          r="260"
          stroke={strokeColor}
          strokeWidth="0.5"
          opacity="0.2"
        />

        {/* Cardinal Degree & Coordinate Notation */}
        <text x="300" y="38" textAnchor="middle" className="font-mono text-[8px] tracking-[0.25em]" fill={strokeColor} opacity="0.4">
          000° · N
        </text>
        <text x="568" y="303" textAnchor="middle" className="font-mono text-[8px] tracking-[0.25em]" fill={strokeColor} opacity="0.4">
          090° · E
        </text>
        <text x="300" y="574" textAnchor="middle" className="font-mono text-[8px] tracking-[0.25em]" fill={strokeColor} opacity="0.4">
          180° · S
        </text>
        <text x="32" y="303" textAnchor="middle" className="font-mono text-[8px] tracking-[0.25em]" fill={strokeColor} opacity="0.4">
          270° · W
        </text>

        {/* Central Axis crosshairs */}
        <line x1="300" y1="48" x2="300" y2="552" stroke={strokeColor} strokeWidth="0.75" opacity="0.18" strokeDasharray="4 6" />
        <line x1="48" y1="300" x2="552" y2="300" stroke={strokeColor} strokeWidth="0.75" opacity="0.18" strokeDasharray="4 6" />

        {/* Subtle Diagonal Quadrant Rays */}
        <line x1="120" y1="120" x2="480" y2="480" stroke={strokeColor} strokeWidth="0.5" opacity="0.1" strokeDasharray="3 6" />
        <line x1="120" y1="480" x2="480" y2="120" stroke={strokeColor} strokeWidth="0.5" opacity="0.1" strokeDasharray="3 6" />

        {/* 4 PRIMARY REALM CIRCLES */}
        {/* 1. NORTH: WHAT YOU LOVE (愛) */}
        <g
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveSegment('LOVE')}
          onMouseLeave={() => setActiveSegment(null)}
        >
          <circle
            cx="300"
            cy="218"
            r="135"
            stroke={strokeColor}
            strokeWidth={activeSegment === 'LOVE' ? '2.5' : '1.5'}
            fill={fillColor}
            fillOpacity={activeSegment === 'LOVE' ? '0.18' : '0.04'}
            className="transition-all duration-200"
          />
          <circle cx="300" cy="218" r="130" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.25" />
          <text
            x="300"
            y="112"
            textAnchor="middle"
            className="font-mono text-[10px] tracking-[0.25em] font-bold"
            fill={strokeColor}
          >
            WHAT YOU LOVE
          </text>
          <text
            x="300"
            y="126"
            textAnchor="middle"
            className="font-jp text-[9px] tracking-[0.2em] font-semibold"
            fill={strokeColor}
            opacity="0.7"
          >
            愛 · PASSION & OBSESSION
          </text>
        </g>

        {/* 2. EAST: WHAT YOU CREATE (技) */}
        <g
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveSegment('CRAFT')}
          onMouseLeave={() => setActiveSegment(null)}
        >
          <circle
            cx="382"
            cy="300"
            r="135"
            stroke={strokeColor}
            strokeWidth={activeSegment === 'CRAFT' ? '2.5' : '1.5'}
            fill={fillColor}
            fillOpacity={activeSegment === 'CRAFT' ? '0.18' : '0.04'}
            className="transition-all duration-200"
          />
          <circle cx="382" cy="300" r="130" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.25" />
          <text
            x="485"
            y="298"
            textAnchor="start"
            className="font-mono text-[10px] tracking-[0.25em] font-bold"
            fill={strokeColor}
          >
            WHAT YOU CREATE
          </text>
          <text
            x="485"
            y="312"
            textAnchor="start"
            className="font-jp text-[9px] tracking-[0.2em] font-semibold"
            fill={strokeColor}
            opacity="0.7"
          >
            技 · MASTERY & CRAFT
          </text>
        </g>

        {/* 3. SOUTH: WHAT CAN ENDURE (業) */}
        <g
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveSegment('ENDURE')}
          onMouseLeave={() => setActiveSegment(null)}
        >
          <circle
            cx="300"
            cy="382"
            r="135"
            stroke={strokeColor}
            strokeWidth={activeSegment === 'ENDURE' ? '2.5' : '1.5'}
            fill={fillColor}
            fillOpacity={activeSegment === 'ENDURE' ? '0.18' : '0.04'}
            className="transition-all duration-200"
          />
          <circle cx="300" cy="382" r="130" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.25" />
          <text
            x="300"
            y="492"
            textAnchor="middle"
            className="font-mono text-[10px] tracking-[0.25em] font-bold"
            fill={strokeColor}
          >
            WHAT CAN ENDURE
          </text>
          <text
            x="300"
            y="506"
            textAnchor="middle"
            className="font-jp text-[9px] tracking-[0.2em] font-semibold"
            fill={strokeColor}
            opacity="0.7"
          >
            業 · VALUE & TIME
          </text>
        </g>

        {/* 4. WEST: WHAT IS NEEDED (志) */}
        <g
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveSegment('NEED')}
          onMouseLeave={() => setActiveSegment(null)}
        >
          <circle
            cx="218"
            cy="300"
            r="135"
            stroke={strokeColor}
            strokeWidth={activeSegment === 'NEED' ? '2.5' : '1.5'}
            fill={fillColor}
            fillOpacity={activeSegment === 'NEED' ? '0.18' : '0.04'}
            className="transition-all duration-200"
          />
          <circle cx="218" cy="300" r="130" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.25" />
          <text
            x="115"
            y="298"
            textAnchor="end"
            className="font-mono text-[10px] tracking-[0.25em] font-bold"
            fill={strokeColor}
          >
            WHAT IS NEEDED
          </text>
          <text
            x="115"
            y="312"
            textAnchor="end"
            className="font-jp text-[9px] tracking-[0.2em] font-semibold"
            fill={strokeColor}
            opacity="0.7"
          >
            志 · SERVICE & PURPOSE
          </text>
        </g>

        {/* 4 INTERSECTING QUADRANT HARMONIES (Petals) */}
        {/* Passion (Love ∩ Craft) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActiveSegment('PASSION')}
          onMouseLeave={() => setActiveSegment(null)}
        >
          <circle
            cx="355"
            cy="245"
            r="17"
            fill={fillColor}
            fillOpacity={activeSegment === 'PASSION' ? '0.25' : '0.08'}
            stroke={strokeColor}
            strokeWidth="0.75"
          />
          <text
            x="355"
            y="242"
            textAnchor="middle"
            className="font-mono text-[7px] tracking-[0.2em] font-bold"
            fill={strokeColor}
          >
            PASSION
          </text>
          <text
            x="355"
            y="252"
            textAnchor="middle"
            className="font-jp text-[6px] font-semibold"
            fill={strokeColor}
            opacity="0.7"
          >
            情熱
          </text>
        </g>

        {/* Profession (Craft ∩ Endure) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActiveSegment('PROFESSION')}
          onMouseLeave={() => setActiveSegment(null)}
        >
          <circle
            cx="355"
            cy="355"
            r="17"
            fill={fillColor}
            fillOpacity={activeSegment === 'PROFESSION' ? '0.25' : '0.08'}
            stroke={strokeColor}
            strokeWidth="0.75"
          />
          <text
            x="355"
            y="352"
            textAnchor="middle"
            className="font-mono text-[7px] tracking-[0.2em] font-bold"
            fill={strokeColor}
          >
            PROFESSION
          </text>
          <text
            x="355"
            y="362"
            textAnchor="middle"
            className="font-jp text-[6px] font-semibold"
            fill={strokeColor}
            opacity="0.7"
          >
            専門
          </text>
        </g>

        {/* Vocation (Endure ∩ Need) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActiveSegment('VOCATION')}
          onMouseLeave={() => setActiveSegment(null)}
        >
          <circle
            cx="245"
            cy="355"
            r="17"
            fill={fillColor}
            fillOpacity={activeSegment === 'VOCATION' ? '0.25' : '0.08'}
            stroke={strokeColor}
            strokeWidth="0.75"
          />
          <text
            x="245"
            y="352"
            textAnchor="middle"
            className="font-mono text-[7px] tracking-[0.2em] font-bold"
            fill={strokeColor}
          >
            VOCATION
          </text>
          <text
            x="245"
            y="362"
            textAnchor="middle"
            className="font-jp text-[6px] font-semibold"
            fill={strokeColor}
            opacity="0.7"
          >
            天職
          </text>
        </g>

        {/* Mission (Need ∩ Love) */}
        <g
          className="cursor-pointer"
          onMouseEnter={() => setActiveSegment('MISSION')}
          onMouseLeave={() => setActiveSegment(null)}
        >
          <circle
            cx="245"
            cy="245"
            r="17"
            fill={fillColor}
            fillOpacity={activeSegment === 'MISSION' ? '0.25' : '0.08'}
            stroke={strokeColor}
            strokeWidth="0.75"
          />
          <text
            x="245"
            y="242"
            textAnchor="middle"
            className="font-mono text-[7px] tracking-[0.2em] font-bold"
            fill={strokeColor}
          >
            MISSION
          </text>
          <text
            x="245"
            y="252"
            textAnchor="middle"
            className="font-jp text-[6px] font-semibold"
            fill={strokeColor}
            opacity="0.7"
          >
            使命
          </text>
        </g>

        {/* CENTRAL CORE: IKIGAI FOCAL SEAL */}
        <g className="cursor-pointer">
          <circle cx="300" cy="300" r="40" stroke={strokeColor} strokeWidth="1" opacity="0.35" strokeDasharray="3 3" />
          <circle cx="300" cy="300" r="32" fill={coreBgColor} />
          <circle cx="300" cy="300" r="26" fill={coreInnerBg} stroke={strokeColor} strokeWidth="1" />
          <circle cx="300" cy="300" r="5" fill={coreBgColor} />

          <text
            x="300"
            y="292"
            textAnchor="middle"
            className="font-editorial text-[10px] font-bold tracking-[0.15em]"
            fill={coreTextColor}
          >
            IKIGAI
          </text>
          <text
            x="300"
            y="318"
            textAnchor="middle"
            className="font-jp text-[8px] tracking-[0.2em] font-bold"
            fill={coreTextColor}
          >
            生き甲斐
          </text>
        </g>
      </svg>
    </div>
  );
};
