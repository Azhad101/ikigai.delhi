import React, { useEffect, useRef, useState } from 'react';

/**
 * THE 48-HOUR DIAL
 * A live clock for the two-day Odyssee: one second = one hour. A crimson sun
 * sweeps the ring, the hours it has passed light up behind it, and the centre
 * counts which day and hour you are in. An enso brush-circle draws itself in
 * the first time it scrolls into view. Nothing here is decorative filler —
 * it says "two days, one turn" without a word of copy.
 */

const CX = 220;
const CY = 220;
const HOURS = 48;
const STEP = 360 / HOURS; // 7.5° per hour
const START_HOUR = 14; // also the still frame for reduced-motion visitors

// deg is measured clockwise from twelve o'clock
const polar = (r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
};

const TICKS = Array.from({ length: HOURS }, (_, i) => {
  const major = i % 6 === 0;
  const a = polar(major ? 154 : 162, i * STEP);
  const b = polar(172, i * STEP);
  return { i, major, x1: a.x, y1: a.y, x2: b.x, y2: b.y };
});

const LABELS = [0, 12, 24, 36].map((h) => ({ h, ...polar(191, h * STEP) }));

const arc = (r: number, from: number, to: number) => {
  const s = polar(r, from);
  const e = polar(r, to);
  return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 0 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
};

// The comet tail behind the sun, drawn in three fading pieces (orbit r = 142)
const TAIL = [
  { d: arc(142, -42, -28), o: 0.14 },
  { d: arc(142, -28, -14), o: 0.34 },
  { d: arc(142, -14, 0), o: 0.7 },
];

export const OdysseeDial: React.FC = () => {
  const [tick, setTick] = useState(START_HOUR);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Only run the clock while the dial is actually on screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setTick((t) => t + 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, [visible]);

  const hour = tick % HOURS;
  const dayOne = hour < 24;

  return (
    <div ref={rootRef} className="w-[300px] xl:w-[340px] select-none">
      <svg
        viewBox="0 0 440 440"
        role="img"
        aria-label="A dial counting the 48 hours of the two-day Odyssee"
        className="w-full h-auto block overflow-visible"
      >
        {/* slow dashed outer ring */}
        <circle className="dial-spin" cx={CX} cy={CY} r="208" fill="none" stroke="#A3262A" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="2 7" />

        {/* hairline guides */}
        <circle cx={CX} cy={CY} r="132" fill="none" stroke="#A3262A" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx={CX} cy={CY} r="120" fill="none" stroke="#A3262A" strokeOpacity="0.12" strokeWidth="1" />

        {/* 48 hour ticks — the ones the sun has passed light up */}
        {TICKS.map((t) => {
          const passed = t.i <= hour;
          return (
            <line
              key={t.i}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke={t.major ? '#1A1817' : '#A3262A'}
              strokeWidth={t.major ? 2 : 1.4}
              strokeLinecap="round"
              opacity={passed ? 1 : 0.22}
              style={{ transition: 'opacity 600ms ease' }}
            />
          );
        })}

        {/* 00 · 12 · 24 · 36 */}
        {LABELS.map((l) => (
          <text
            key={l.h}
            x={l.x}
            y={l.y}
            textAnchor="middle"
            dominantBaseline="central"
            className="font-mono-meta"
            fontSize="11"
            letterSpacing="1"
            fill="#A3262A"
            fillOpacity="0.75"
          >
            {String(l.h).padStart(2, '0')}
          </text>
        ))}

        {/* the orbiting sun + comet tail: one 7.5° step per second */}
        <g
          style={{
            transform: `rotate(${tick * STEP}deg)`,
            transformOrigin: `${CX}px ${CY}px`,
            transition: 'transform 1000ms linear',
          }}
        >
          {TAIL.map((seg, i) => (
            <path key={i} d={seg.d} fill="none" stroke="#A3262A" strokeOpacity={seg.o} strokeWidth="4" strokeLinecap="round" />
          ))}
          <circle cx={CX} cy={CY - 142} r="9" fill="#A3262A" />
          <circle cx={CX} cy={CY - 142} r="15" fill="none" stroke="#A3262A" strokeOpacity="0.35" strokeWidth="1" />
        </g>

        {/* enso — the brush circle draws itself when the dial is revealed */}
        <g transform={`rotate(-62 ${CX} ${CY})`}>
          <circle className="dial-enso" cx={CX} cy={CY} r="104" fill="none" stroke="#1A1817" strokeWidth="9" strokeLinecap="round" />
          <circle className="dial-enso-thin" cx={CX + 1.5} cy={CY - 1} r="106" fill="none" stroke="#1A1817" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* sun disc + live counter */}
        <circle cx={CX} cy={CY} r="80" fill="#A3262A" />
        <text x={CX} y={CY - 38} textAnchor="middle" className="font-mono-meta" fontSize="10" letterSpacing="3" fill="#F4E7C6" fillOpacity="0.85">
          {dayOne ? 'DAY 1 / 2' : 'DAY 2 / 2'}
        </text>
        <text x={CX} y={CY + 16} textAnchor="middle" className="font-editorial" fontSize="66" fontWeight="700" fill="#F4E7C6">
          {String(hour).padStart(2, '0')}
        </text>
        <text x={CX} y={CY + 44} textAnchor="middle" className="font-mono-meta" fontSize="10" letterSpacing="3" fill="#F4E7C6" fillOpacity="0.85">
          OF 48 HRS
        </text>
      </svg>
    </div>
  );
};
