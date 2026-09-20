import React, { useState, useEffect } from 'react';

export const PingMeMoment: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('ikigai_ping_email');
    if (saved) {
      setEmail(saved);
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    localStorage.setItem('ikigai_ping_email', email);
    setSubmitted(true);
  };

  const handleReset = () => {
    localStorage.removeItem('ikigai_ping_email');
    setEmail('');
    setSubmitted(false);
  };

  return (
    <section
      id="ping"
      className="relative min-h-svh flex flex-col justify-between px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-[#F4E7C6] text-[#A3262A] overflow-hidden select-none"
    >
      {/* Seam: starts in the cream the previous section ended with */}
      <div aria-hidden="true" className="seam-cap seam-cap-top seam-cream" />

      {/* Drifting Sakura Petals in the Wind */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        {[
          { top: '12%', left: '8%', rotate: '15deg', size: '18px', delay: '0s' },
          { top: '28%', left: '88%', rotate: '45deg', size: '14px', delay: '1.2s' },
          { top: '75%', left: '15%', rotate: '-25deg', size: '20px', delay: '0.8s' },
          { top: '65%', left: '82%', rotate: '60deg', size: '16px', delay: '2.4s' },
          { top: '42%', left: '4%', rotate: '-10deg', size: '12px', delay: '1.7s' },
          { top: '85%', left: '92%', rotate: '35deg', size: '22px', delay: '0.4s' },
          { top: '8%', left: '72%', rotate: '-40deg', size: '15px', delay: '2.1s' },
        ].map((petal, i) => (
          <svg
            key={i}
            className="absolute fill-[#A3262A]/60 transition-transform duration-1000"
            style={{
              top: petal.top,
              left: petal.left,
              width: petal.size,
              height: petal.size,
              transform: `rotate(${petal.rotate})`,
            }}
            viewBox="0 0 30 30"
          >
            <path d="M15 0 C25 8 30 20 15 30 C0 20 5 8 15 0 Z" />
          </svg>
        ))}
      </div>

      {/* Corner Crop Marks */}
      <div className="absolute top-6 left-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        ⌜ 28.6139° N
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        77.2090° E ⌝
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        ⌞ MOMENT 08
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10">
        THE WIND BELL ⌟
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-[#A3262A]/80 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A3262A]" />
          <span>08 / PING ME · THE SIGNAL</span>
        </div>
        <span className="hidden sm:inline">INSTANT CHIME NOTIFICATION</span>
        <span>[ 08 / 08 ]</span>
      </div>

      {/* Main Centerpiece Card */}
      <div data-reveal className="relative z-10 my-auto py-8 max-w-5xl mx-auto w-full">
        <div className="relative bg-[#FAF4E8] border border-[#A3262A]/30 shadow-xl shadow-[#A3262A]/5 overflow-hidden flex flex-col md:flex-row items-stretch">
          {/* Left Vertical Crimson Border Accent */}
          <div className="w-full md:w-2 bg-[#A3262A] h-2 md:h-auto shrink-0" />

          {/* Left Column: Traditional Fūrin (Wind Bell) Illustration */}
          <div className="w-full md:w-64 lg:w-72 bg-[#F6ECE0]/60 p-8 md:p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#A3262A]/20 relative overflow-hidden">
            {/* Wind bell animation container */}
            <div className="flex flex-col items-center origin-top animate-wind-bell-sway transition-all">
              {/* Suspension cord */}
              <div className="w-[1.5px] h-12 bg-[#1A1817]/40" />

              {/* Wooden / Bronze Pagoda Eaves */}
              <svg
                width="84"
                height="56"
                viewBox="0 0 84 56"
                fill="none"
                className="drop-shadow-xs"
              >
                {/* Roof cap */}
                <path
                  d="M42 4 L48 10 L36 10 Z"
                  fill="#1A1817"
                />
                {/* Pagoda roof curve */}
                <path
                  d="M42 10 Q58 14 78 28 L68 34 Q42 22 16 34 L6 28 Q26 14 42 10 Z"
                  fill="#7A4B3A"
                />
                {/* Eaves base */}
                <rect x="22" y="30" width="40" height="20" rx="2" fill="#5A3426" />
                {/* Crest window / Kamon */}
                <rect x="36" y="34" width="12" height="12" fill="#FAF4E8" opacity="0.9" />
                <path
                  d="M38 36 H46 M42 34 V44 M38 42 H46"
                  stroke="#5A3426"
                  strokeWidth="1.2"
                />
              </svg>

              {/* Internal cord to clapper */}
              <div className="w-[1px] h-8 bg-[#1A1817]/50" />

              {/* Bronze Clapper Bead (Zetu) */}
              <div className="w-3.5 h-3.5 rounded-full bg-[#8C1F23] border border-[#FAF4E8] shadow-xs" />

              {/* Cord to Tanzaku */}
              <div className="w-[1px] h-6 bg-[#1A1817]/40" />

              {/* Tanzaku (Wind-catching Crimson Paper Slip) */}
              <div className="relative w-8 h-28 bg-[#A3262A] shadow-md border-t border-[#F4E7C6]/30 flex flex-col items-center justify-center p-1 transform origin-top rotate-[-4deg] transition-transform duration-700 hover:rotate-6">
                <span className="font-jp text-xs text-[#F4E7C6] font-bold tracking-widest writing-vertical-rl select-none">
                  風鈴
                </span>
                <span className="font-mono text-[7px] text-[#F4E7C6]/75 uppercase tracking-tighter mt-1">
                  IKIGAI
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#A3262A]/80 uppercase block">
                FŪRIN · 風鈴
              </span>
              <span className="font-editorial text-xs italic text-[#1A1817]/60">
                The Chime of Delhi
              </span>
            </div>
          </div>

          {/* Right Column: Information & Notification Capture */}
          <div className="flex-1 p-8 sm:p-10 lg:p-14 flex flex-col justify-between">
            <div>
              {/* Category Tags */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-jp text-sm font-bold text-[#A3262A]">風鈴</span>
                <span className="font-mono text-[11px] tracking-[0.25em] text-[#A3262A]/70 uppercase">
                  // FŪRIN (THE WIND BELL)
                </span>
              </div>
              <p className="font-mono text-[10px] md:text-[11px] font-semibold tracking-[0.3em] text-[#A3262A] uppercase mb-2">
                STAY IN THE CURRENT
              </p>

              {/* Main Headline */}
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1817] tracking-tight leading-[1.05] mb-4">
                PING ME WHEN THE <br />
                <span className="text-[#A3262A] italic underline decoration-[#A3262A]/20 underline-offset-8">
                  DATE DROPS
                </span>
              </h2>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm md:text-base text-[#1A1817]/80 leading-relaxed max-w-xl mb-8">
                Dates, venue sanctuary, and the admittance application are currently being locked in. Drop your email and our wind bell will chime your inbox the instant they go live on this site — one single transmission, zero spam, zero newsletters.
              </p>
            </div>

            {/* Form Section */}
            <div>
              {!submitted ? (
                <form key="ping-form" onSubmit={handleSubmit} className="page-enter space-y-3">
                  <div className="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="flex-1 px-4 py-3.5 bg-[#F4E7C6]/40 border border-[#A3262A]/30 text-[#1A1817] placeholder:text-[#1A1817]/40 font-mono text-xs sm:text-sm focus:outline-none focus:border-[#A3262A] focus:ring-1 focus:ring-[#A3262A] transition-all"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-[#A3262A] hover:bg-[#8C1F23] text-[#F4E7C6] font-mono text-xs font-bold tracking-[0.2em] transition-colors uppercase whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                    >
                      <span>PING ME</span>
                      <span>→</span>
                    </button>
                  </div>
                  {error && (
                    <p className="font-mono text-xs text-[#A3262A] font-medium">{error}</p>
                  )}
                  <p className="font-sans text-[11px] text-[#1A1817]/60 flex items-center gap-1.5">
                    <span className="text-[#A3262A]">⌖</span>
                    We only use your address for this one announcement. Nothing else, ever.
                  </p>
                </form>
              ) : (
                <div key="ping-done" className="page-enter bg-[#A3262A]/5 border border-[#A3262A]/20 p-5 rounded-xs max-w-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🔔</span>
                    <div>
                      <h4 className="font-editorial text-lg font-bold text-[#1A1817]">
                        The Chime Is Set
                      </h4>
                      <p className="font-sans text-xs text-[#1A1817]/80 leading-relaxed mt-1">
                        We have recorded <span className="font-mono font-bold text-[#A3262A]">{email}</span>. You will receive a direct dispatch the minute Delhi dates and registration go live.
                      </p>
                      <button
                        onClick={handleReset}
                        className="mt-3 font-mono text-[10px] tracking-wider text-[#A3262A] hover:underline uppercase cursor-pointer"
                      >
                        [ Change Email Address ]
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom coordinates & sanctuary seal */}
      <div className="relative z-10 flex items-center justify-between text-[#A3262A]/60 font-mono text-[10px] tracking-[0.25em] uppercase pt-12">
        <span>DELHI · HARVEST 2026</span>
        <span>ONE CALL · ZERO NOISE</span>
      </div>

      {/* Serene Landscape Outro Horizon */}
      <div className="relative z-0 w-full mt-12 pt-8 select-none pointer-events-none opacity-40">
        <svg
          viewBox="0 0 1600 200"
          preserveAspectRatio="none"
          className="w-full h-auto block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Distant Mount Fuji cone */}
          <path
            d="M660 200 L760 80 Q780 50 800 50 Q820 50 840 80 L940 200 Z"
            fill="#A3262A"
            opacity="0.5"
          />
          {/* Rolling foothills */}
          <path
            d="M0 200 L0 150 Q300 110 600 140 T1200 120 T1600 140 L1600 200 Z"
            fill="#A3262A"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Final quiet stamp */}
      <div className="relative z-10 py-6 text-center text-[#A3262A]/50 font-mono text-[9px] tracking-[0.3em] uppercase">
        IKIGAI.DELHI · 生き甲斐 · 28.6139° N, 77.2090° E · A TEMPLE OF WORK
      </div>
    </section>
  );
};
