import React from 'react';

/**
 * IKIGAI.DELHI — Screen-Printed Japanese Landscape Poster System
 * Colors:
 * - Deep Red: #A3262A
 * - Warm Cream: #F4E7C6
 * - Ink Charcoal: #1A1817 / #12100E
 * Flat 2D silhouettes, solid colors, hand-crafted poster edges.
 */

interface PosterSunDiscProps {
  color?: string;
  size?: number;
  className?: string;
}

export const PosterSunDisc: React.FC<PosterSunDiscProps> = ({
  color = '#A3262A',
  size = 460,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer subtle concentric print registration ring */}
      <circle cx="250" cy="250" r="240" stroke={color} strokeWidth="1.5" strokeDasharray="6 8" opacity="0.25" />
      <circle cx="250" cy="250" r="225" stroke={color} strokeWidth="1" opacity="0.2" />

      {/* Massive Bold Flat Sun/Moon Silhouette */}
      <circle cx="250" cy="250" r="200" fill={color} />

      {/* Subtle screen-print ink bleed cut / ring */}
      <circle cx="250" cy="250" r="197" stroke="#F4E7C6" strokeWidth="1" opacity="0.15" />
    </svg>
  );
};

interface JapanesePineTreeProps {
  color?: string;
  className?: string;
}

export const JapanesePineTree: React.FC<JapanesePineTreeProps> = ({
  color = '#1A1817',
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 450 700"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gnarled, expressive pine trunk (Matsu) */}
      <path
        d="M380 700 Q360 520 320 420 T260 260 T210 140 Q190 80 160 30"
        stroke={color}
        strokeWidth="28"
        strokeLinecap="round"
      />
      {/* Lower supporting trunk thickness */}
      <path
        d="M410 700 Q380 540 335 440 L310 445 Q355 550 380 700 Z"
        fill={color}
      />
      {/* Branch 1 extending Left */}
      <path
        d="M280 340 Q210 320 150 350 T60 370"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="round"
      />
      {/* Branch 2 extending Right */}
      <path
        d="M320 420 Q380 400 420 425"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
      />
      {/* Branch 3 extending Mid-Left */}
      <path
        d="M240 220 Q170 190 110 210"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
      />
      {/* Topmost Branch */}
      <path
        d="M190 120 Q140 90 90 100"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M170 60 Q210 30 250 40"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* Tiered Flat Foliage Cloud Pads (Stylized Pine Tufts) */}
      {/* Cloud 1: Top Summit */}
      <path
        d="M120 40 Q150 15 190 25 T240 20 Q270 35 250 55 T190 60 T140 55 Z"
        fill={color}
      />
      {/* Cloud 2: Upper Left */}
      <path
        d="M60 105 Q100 80 145 95 T180 115 Q170 135 130 130 T70 125 Z"
        fill={color}
      />
      {/* Cloud 3: Upper Right */}
      <path
        d="M200 135 Q240 115 285 125 T320 150 Q300 170 250 165 T205 150 Z"
        fill={color}
      />
      {/* Cloud 4: Mid Left Large */}
      <path
        d="M80 210 Q130 180 185 195 T230 225 Q210 250 160 245 T85 235 Z"
        fill={color}
      />
      {/* Cloud 5: Low Left Grand */}
      <path
        d="M30 365 Q90 330 160 345 T210 380 Q190 410 130 400 T35 390 Z"
        fill={color}
      />
      {/* Cloud 6: Mid Right */}
      <path
        d="M360 415 Q400 395 440 410 T460 435 Q440 455 390 450 T360 430 Z"
        fill={color}
      />
    </svg>
  );
};

interface PosterMountainsProps {
  color?: string;
  fillColor?: string;
  className?: string;
  variant?: 'distant' | 'craggy-foreground' | 'valley';
}

export const PosterMountains: React.FC<PosterMountainsProps> = ({
  color = '#1A1817',
  fillColor = '#1A1817',
  className = '',
  variant = 'distant',
}) => {
  if (variant === 'craggy-foreground') {
    return (
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className={`w-full h-auto pointer-events-none select-none ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layer: Heavy screen-printed craggy rock formation */}
        <path
          d="M0 320 L0 180 L140 120 L240 160 L380 90 L520 150 L680 70 L820 140 L980 60 L1120 130 L1260 80 L1380 140 L1440 110 L1440 320 Z"
          fill={fillColor}
        />
        {/* Graphic facet cuts for silk-screen depth */}
        <polygon points="380,90 440,180 340,190" fill="#A3262A" opacity="0.3" />
        <polygon points="680,70 740,170 640,180" fill="#A3262A" opacity="0.3" />
        <polygon points="980,60 1050,170 940,180" fill="#A3262A" opacity="0.3" />
        {/* Hairline ridge highlight */}
        <path
          d="M0 180 L140 120 L240 160 L380 90 L520 150 L680 70 L820 140 L980 60 L1120 130 L1260 80 L1380 140 L1440 110"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (variant === 'valley') {
    return (
      <svg
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
        className={`w-full h-auto pointer-events-none select-none ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back ridge */}
        <path
          d="M0 280 L0 130 L220 70 L480 160 L740 50 L1020 140 L1280 60 L1440 110 L1440 280 Z"
          fill={fillColor}
          opacity="0.5"
        />
        {/* Front rolling ridge */}
        <path
          d="M0 280 L0 180 L180 200 L420 130 L660 190 L920 110 L1180 180 L1440 140 L1440 280 Z"
          fill={fillColor}
          opacity="0.85"
        />
      </svg>
    );
  }

  // Distant multi-layered peaks
  return (
    <svg
      viewBox="0 0 1440 360"
      preserveAspectRatio="none"
      className={`w-full h-auto pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Layer 1: Distant monumental peak (Fuji inspired flat silhouette) */}
      <path
        d="M0 360 L0 230 L320 220 L580 90 L680 120 L760 50 L840 110 L940 85 L1200 210 L1440 190 L1440 360 Z"
        fill={fillColor}
        opacity="0.45"
      />
      {/* Layer 2: Mid-distance crags */}
      <path
        d="M0 360 L0 270 L210 210 L380 250 L560 180 L720 230 L900 160 L1100 240 L1300 190 L1440 250 L1440 360 Z"
        fill={fillColor}
        opacity="0.75"
      />
      {/* Layer 3: Solid foreground foothills */}
      <path
        d="M0 360 L0 305 L160 275 L340 310 L510 260 L690 300 L870 245 L1060 295 L1240 255 L1440 290 L1440 360 Z"
        fill={fillColor}
      />
    </svg>
  );
};

interface PosterToriiProps {
  color?: string;
  className?: string;
}

export const PosterTorii: React.FC<PosterToriiProps> = ({
  color = '#1A1817',
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 240 200"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Kasagi (Top curved lintel) */}
      <path
        d="M10 42 Q120 28 230 42 L226 50 Q120 38 14 50 Z"
        fill={color}
      />
      {/* Shimaki (Sub-lintel) */}
      <rect x="28" y="56" width="184" height="12" fill={color} />
      {/* Nuki (Tie beam) */}
      <rect x="36" y="86" width="168" height="10" fill={color} />
      {/* Hashira (Pillars) */}
      <polygon points="65,56 75,56 70,195 58,195" fill={color} />
      <polygon points="165,56 175,56 182,195 170,195" fill={color} />
      {/* Center tablet strut */}
      <rect x="114" y="56" width="12" height="30" fill={color} />
    </svg>
  );
};

interface PosterKatanaProps {
  color?: string;
  className?: string;
}

export const PosterKatana: React.FC<PosterKatanaProps> = ({
  color = '#F4E7C6',
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 600 60"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cord-wrapped Tsuka (Hilt) */}
      <rect x="470" y="24" width="120" height="16" rx="2" fill={color} opacity="0.6" />
      {/* Diamond wrap silhouetted cuts */}
      <path
        d="M480 24 L488 32 L480 40 M500 24 L508 32 L500 40 M520 24 L528 32 L520 40 M540 24 L548 32 L540 40 M560 24 L568 32 L560 40"
        stroke="#A3262A"
        strokeWidth="2"
      />
      {/* Tsuba (Guard) */}
      <rect x="460" y="16" width="10" height="32" rx="2" fill={color} />
      {/* Habaki Collar */}
      <rect x="450" y="22" width="10" height="20" fill={color} opacity="0.85" />
      {/* Long Curved Blade */}
      <path
        d="M450 25 L80 25 Q40 25 15 33 Q40 35 80 35 L450 35 Z"
        fill={color}
      />
      {/* Hamon temper line */}
      <path
        d="M440 30 Q400 28 360 30 T280 29 T200 30 T120 29 T60 31 L15 33"
        stroke="#A3262A"
        strokeWidth="1.2"
        opacity="0.8"
      />
    </svg>
  );
};

interface PosterTerrainSwoopProps {
  color?: string;
  className?: string;
  direction?: 'left-to-right' | 'right-to-left';
}

export const PosterTerrainSwoop: React.FC<PosterTerrainSwoopProps> = ({
  color = '#1A1817',
  className = '',
  direction = 'left-to-right',
}) => {
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      className={`w-full h-auto pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {direction === 'left-to-right' ? (
        <path
          d="M0 0 Q400 160 900 110 T1440 180 L1440 200 L0 200 Z"
          fill={color}
        />
      ) : (
        <path
          d="M0 160 Q600 90 1100 170 T1440 40 L1440 200 L0 200 Z"
          fill={color}
        />
      )}
    </svg>
  );
};

interface ContinuousMountainTransitionProps {
  type: 'cream-to-crimson' | 'crimson-to-cream';
  className?: string;
}

/**
 * Organic Mountain Transition: Seamlessly connects Warm Cream and Deep Crimson
 * zones through layered crags and silhouettes with NO hard horizontal lines.
 */
export const ContinuousMountainTransition: React.FC<ContinuousMountainTransitionProps> = ({
  type,
  className = '',
}) => {
  if (type === 'cream-to-crimson') {
    return (
      <div className={`relative w-full overflow-hidden select-none pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1600 360"
          preserveAspectRatio="none"
          className="w-full h-auto block -mb-[1px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Layer 1: Distant subtle ridge */}
          <path
            d="M0 360 L0 260 Q320 180 640 240 T1280 190 L1600 240 L1600 360 Z"
            fill="#A3262A"
            opacity="0.35"
          />
          {/* Layer 2: Mid-distance crags */}
          <path
            d="M0 360 L0 290 Q240 210 520 270 T1080 180 T1600 250 L1600 360 Z"
            fill="#A3262A"
            opacity="0.65"
          />
          {/* Layer 3: Solid foreground foothills rising to full red */}
          <path
            d="M0 360 L0 320 Q200 240 440 300 T920 220 T1360 270 L1600 210 L1600 360 Z"
            fill="#A3262A"
          />
        </svg>
      </div>
    );
  }

  // crimson-to-cream
  return (
    <div className={`relative w-full overflow-hidden select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1600 360"
        preserveAspectRatio="none"
        className="w-full h-auto block -mt-[1px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layer 1: Crimson descending foothills */}
        <path
          d="M0 0 L1600 0 L1600 150 Q1360 90 920 140 T440 60 T0 140 Z"
          fill="#A3262A"
        />
        {/* Layer 2: Mid-distance ridge fading into cream */}
        <path
          d="M0 0 L1600 0 L1600 110 Q1080 180 520 90 T0 70 Z"
          fill="#A3262A"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

interface OverhangingPineBranchProps {
  color?: string;
  side?: 'left' | 'right';
  className?: string;
}

/**
 * Monumental Overhanging Pine Branch that organically crosses whitespace and typography
 */
export const OverhangingPineBranch: React.FC<OverhangingPineBranchProps> = ({
  color = '#A3262A',
  side = 'left',
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 600 220"
      className={`pointer-events-none select-none ${className} ${
        side === 'right' ? 'scale-x-[-1]' : ''
      }`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Heavy curving bough */}
      <path
        d="M-40 40 Q80 50 200 80 T420 130 T560 150"
        stroke={color}
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M200 80 Q280 110 340 160"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M380 125 Q460 145 510 190"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Pine needle cloud pads (flat graphic stylized pads) */}
      <path
        d="M120 70 Q160 35 220 50 T280 40 Q320 60 290 90 T220 95 T140 90 Z"
        fill={color}
      />
      <path
        d="M260 100 Q310 70 370 85 T430 80 Q460 105 430 130 T360 135 T290 125 Z"
        fill={color}
      />
      <path
        d="M390 145 Q440 120 500 135 T560 130 Q580 150 560 170 T490 175 T420 165 Z"
        fill={color}
      />
      <path
        d="M290 170 Q340 140 400 155 T450 150 Q470 170 450 190 T390 195 T320 190 Z"
        fill={color}
        opacity="0.85"
      />
    </svg>
  );
};

interface ContinuousMistRibbonProps {
  color?: string;
  className?: string;
}

/**
 * Traditional Japanese Kasumi (mist / floating cloud ribbon)
 */
export const ContinuousMistRibbon: React.FC<ContinuousMistRibbonProps> = ({
  color = '#F4E7C6',
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      className={`w-full pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 40 Q200 15 400 35 T800 25 T1200 45 L1200 65 Q1000 45 800 60 T400 45 T0 65 Z"
        fill={color}
      />
    </svg>
  );
};

