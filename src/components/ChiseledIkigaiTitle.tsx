import React from 'react';

interface ChiseledIkigaiTitleProps {
  color?: string;
  className?: string;
}

/**
 * Chiseled Woodcut Poster Typography: "IKIGAI"
 * Blocky, faceted woodcut typography with true transparent counter on 'A'.
 */
export const ChiseledIkigaiTitle: React.FC<ChiseledIkigaiTitleProps> = ({
  color = '#A3262A',
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 1180 200"
      className={`w-full h-auto select-none pointer-events-none drop-shadow-sm ${className}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* --- LETTER 1: I --- */}
      <polygon
        points="
          20,40
          42,15
          118,15
          140,40
          125,55
          104,55
          104,95
          94,105
          104,115
          104,155
          125,155
          140,170
          118,195
          42,195
          20,170
          35,155
          56,155
          56,115
          66,105
          56,95
          56,55
          35,55
        "
      />

      {/* --- LETTER 2: K --- */}
      {/* Left stem */}
      <polygon
        points="
          175,40
          195,15
          255,15
          265,30
          250,55
          240,55
          240,95
          248,105
          240,115
          240,155
          250,155
          265,180
          255,195
          195,195
          175,170
          190,155
          202,155
          202,115
          210,105
          202,95
          202,55
          190,55
        "
      />
      {/* Upper diagonal arm */}
      <polygon
        points="
          235,115
          265,80
          345,20
          385,20
          400,38
          375,68
          300,125
          245,135
        "
      />
      {/* Lower diagonal leg */}
      <polygon
        points="
          275,108
          340,155
          390,195
          345,195
          310,175
          255,130
        "
      />
      <polygon
        points="
          330,150
          385,195
          405,195
          410,175
          365,135
        "
      />

      {/* --- LETTER 3: I --- */}
      <polygon
        points="
          435,40
          457,15
          533,15
          555,40
          540,55
          519,55
          519,95
          509,105
          519,115
          519,155
          540,155
          555,170
          533,195
          457,195
          435,170
          450,155
          471,155
          471,115
          481,105
          471,95
          471,55
          450,55
        "
      />

      {/* --- LETTER 4: G --- */}
      <polygon
        points="
          600,45
          640,15
          750,15
          785,45
          755,75
          665,60
          645,85
          640,105
          645,125
          665,150
          735,150
          735,120
          705,120
          705,95
          785,95
          785,165
          745,195
          640,195
          590,155
          580,105
          590,65
        "
      />

      {/* --- LETTER 5: A (Single compound path with evenodd rule for true transparency) --- */}
      <path
        fillRule="evenodd"
        d="
          M 885,15 L 945,15 L 965,40 L 1025,170 L 1045,170 L 1050,195 L 995,195 L 980,165 L 850,165 L 835,195 L 780,195 L 785,170 L 805,170 L 865,40 Z
          M 915,65 L 950,135 L 880,135 Z
        "
      />

      {/* --- LETTER 6: I --- */}
      <polygon
        points="
          1065,40
          1087,15
          1163,15
          1185,40
          1170,55
          1149,55
          1149,95
          1139,105
          1149,115
          1149,155
          1170,155
          1185,170
          1163,195
          1087,195
          1065,170
          1080,155
          1101,155
          1101,115
          1111,105
          1101,95
          1101,55
          1080,55
        "
      />
    </svg>
  );
};
