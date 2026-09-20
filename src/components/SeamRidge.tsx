import React from 'react';

interface SeamRidgeProps {
  /** The background colour of the section that comes NEXT. */
  color?: string;
  variant?: 'a' | 'b';
}

/**
 * A low, layered ridge drawn in the colour of the following section.
 * The front layer is fully opaque and runs to the very last pixel row, so
 * the section ends in exactly the colour the next one starts with — the
 * join disappears instead of being a hard cut.
 */
export const SeamRidge: React.FC<SeamRidgeProps> = ({ color = '#F4E7C6', variant = 'a' }) => {
  const shapes =
    variant === 'a'
      ? {
          back: 'M0 200 L0 100 L170 68 L350 108 L540 48 L740 100 L930 40 L1110 94 L1290 60 L1440 90 L1440 200 Z',
          front: 'M0 200 L0 150 L210 124 L430 152 L650 120 L890 150 L1130 116 L1310 146 L1440 128 L1440 200 Z',
        }
      : {
          back: 'M0 200 L0 80 L150 112 L330 56 L520 104 L720 52 L900 102 L1120 46 L1300 98 L1440 66 L1440 200 Z',
          front: 'M0 200 L0 138 L240 158 L470 124 L700 154 L940 120 L1180 152 L1440 122 L1440 200 Z',
        };

  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      className="seam-ridge select-none"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={shapes.back} fill={color} opacity={variant === 'a' ? 0.42 : 0.55} />
      <path d={shapes.front} fill={color} />
    </svg>
  );
};
