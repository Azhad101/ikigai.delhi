import React, { useEffect, useState } from 'react';

/**
 * A brief boot-up splash shown once when the site first loads: the crest,
 * "生き甲斐" in Japanese, and a small guiding quote. Fades itself out and
 * unmounts so it never affects the page underneath.
 */
export const BootScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const holdMs = reduced ? 400 : 1700;
    const fadeMs = reduced ? 0 : 550;

    const fadeTimer = window.setTimeout(() => setFading(true), holdMs);
    const doneTimer = window.setTimeout(() => setVisible(false), holdMs + fadeMs);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-[#1A1817] transition-opacity duration-500 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <img
        src="/ikigai-logo.png"
        alt="IKIGAI.DELHI"
        className="boot-fade-up w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
      />
      <h1
        className="boot-fade-up font-jp text-6xl sm:text-7xl md:text-8xl font-bold text-[#F4E7C6] leading-none"
        style={{ animationDelay: '150ms' }}
      >
        生き甲斐
      </h1>
      <p
        className="boot-fade-up font-editorial italic text-sm sm:text-base text-[#A3262A] tracking-wide"
        style={{ animationDelay: '320ms' }}
      >
        “Find What Drives You”
      </p>
    </div>
  );
};
