import React, { useState } from 'react';
import { PosterMountains, PosterTorii } from './JapaneseLandscape';

interface RegisterPageProps {
  onBackToHome: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onBackToHome }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [field, setField] = useState('CODE');
  const [link, setLink] = useState('');
  const [obsession, setObsession] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      localStorage.setItem(
        'ikigai_application',
        JSON.stringify({
          name,
          email,
          field,
          link,
          obsession,
          timestamp: new Date().toISOString(),
        })
      );
    } catch {
      // ignore
    }
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-svh pt-14 bg-[#F4E7C6] text-[#A3262A] selection:bg-[#A3262A] selection:text-[#F4E7C6] flex flex-col justify-between overflow-x-hidden">
      {/* 1. Background Japanese Screen-Print Poster Details */}
      {/* Charcoal mountain ridge along the bottom */}
      <div className="absolute -bottom-1 left-0 right-0 pointer-events-none opacity-90 z-0">
        <PosterMountains variant="valley" color="#1A1817" fillColor="#1A1817" />
      </div>

      {/* Subtle Torii gate silhouette on the bottom right */}
      <div className="absolute right-8 md:right-20 bottom-24 w-32 md:w-44 pointer-events-none opacity-30 z-0 hidden sm:block">
        <PosterTorii color="#1A1817" />
      </div>

      {/* Corner Crop Marks */}
      <div className="absolute top-20 left-8 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10 hidden sm:block">
        ⌜ 28.6139° N
      </div>
      <div className="absolute top-20 right-8 font-mono text-xs text-[#A3262A]/40 select-none pointer-events-none z-10 hidden sm:block">
        77.2090° E ⌝
      </div>

      {/* Main Form Container */}
      <main className="relative z-10 max-w-2xl mx-auto w-full px-6 py-12 md:py-16 my-auto">
        {submitted ? (
          <div key="dossier-done" className="page-enter border-2 border-[#A3262A] p-8 md:p-12 bg-[#F4E7C6] text-center space-y-6 shadow-sm">
            <span className="font-mono text-xs tracking-[0.35em] text-[#A3262A] uppercase font-bold block">
              ✓ DOSSIER RECORDED · № 2026-F
            </span>
            <h1 className="font-editorial text-4xl md:text-5xl font-bold text-[#A3262A]">
              Thank you, {name}.
            </h1>
            <p className="font-sans text-sm md:text-base text-[#A3262A]/85 font-normal leading-relaxed max-w-md mx-auto">
              Your submission has been cataloged for the 2026 Delhi cohort.
              Admittance invitations and physical gathering coordinates will be delivered to{' '}
              <strong className="font-semibold text-[#A3262A]">{email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={onBackToHome}
                className="px-8 py-3.5 border border-[#A3262A] hover:bg-[#A3262A] hover:text-[#F4E7C6] font-mono text-xs font-bold tracking-[0.25em] uppercase transition-all cursor-pointer"
              >
                RETURN TO EXPERIENCE [←]
              </button>
            </div>
          </div>
        ) : (
          <div key="dossier-form" className="page-enter space-y-10">
            {/* Header intro */}
            <div className="border-b border-[#A3262A]/20 pb-6">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#A3262A]/60 uppercase block mb-2 font-semibold">
                FELLOWSHIP APPLICATION
              </span>
              <h1 className="font-editorial text-4xl md:text-5xl font-bold tracking-tight text-[#A3262A] mb-3">
                Register Candidate Dossier
              </h1>
              <p className="font-sans text-sm text-[#A3262A]/80 font-normal leading-relaxed">
                24 fellows are selected across four disciplines. Selected participants attend with zero costs covered by the fellowship.
              </p>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Primary Discipline Toggle */}
              <div>
                <label className="block font-mono text-[11px] tracking-[0.25em] text-[#A3262A] uppercase mb-3 font-semibold">
                  PRIMARY DISCIPLINE *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'WRITE', label: '01 WRITE', jp: '書' },
                    { id: 'CODE', label: '02 CODE', jp: '符' },
                    { id: 'VISUALIZE', label: '03 VISUALIZE', jp: '景' },
                    { id: 'CRAFT', label: '04 CRAFT', jp: '工' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setField(item.id)}
                      className={`p-3 font-mono text-xs font-semibold tracking-wider transition-all border text-left flex flex-col justify-between gap-1 cursor-pointer ${
                        field === item.id
                          ? 'border-[#A3262A] bg-[#A3262A] text-[#F4E7C6]'
                          : 'border-[#A3262A]/25 text-[#A3262A]/70 hover:border-[#A3262A]/50 bg-[#F4E7C6]'
                      }`}
                    >
                      <span className="text-[10px] opacity-75">{item.label}</span>
                      <span className="font-jp text-sm font-bold opacity-60">{item.jp}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[11px] tracking-[0.25em] text-[#A3262A] uppercase mb-2 font-semibold">
                    NAME / MONIKER *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name or handle"
                    className="w-full bg-transparent border-b-2 border-[#A3262A]/30 py-2.5 text-sm text-[#A3262A] placeholder-[#A3262A]/35 focus:outline-none focus:border-[#A3262A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] tracking-[0.25em] text-[#A3262A] uppercase mb-2 font-semibold">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full bg-transparent border-b-2 border-[#A3262A]/30 py-2.5 text-sm text-[#A3262A] placeholder-[#A3262A]/35 focus:outline-none focus:border-[#A3262A] transition-colors"
                  />
                </div>
              </div>

              {/* Link Input */}
              <div>
                <label className="block font-mono text-[11px] tracking-[0.25em] text-[#A3262A] uppercase mb-2 font-semibold">
                  PORTFOLIO / WORK LINK (GITHUB, SITE, ESSAY, FIGMA) *
                </label>
                <input
                  type="url"
                  required
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="https://..."
                  className="w-full bg-transparent border-b-2 border-[#A3262A]/30 py-2.5 text-sm text-[#A3262A] placeholder-[#A3262A]/35 focus:outline-none focus:border-[#A3262A] transition-colors font-mono"
                />
              </div>

              {/* Statement of Obsession */}
              <div>
                <label className="block font-mono text-[11px] tracking-[0.25em] text-[#A3262A] uppercase mb-2 font-semibold">
                  WHAT OBSESSION DO YOU PLAN TO FINISH OVER 2 DAYS?
                </label>
                <textarea
                  data-lenis-prevent
                  rows={3}
                  value={obsession}
                  onChange={(e) => setObsession(e.target.value)}
                  placeholder="Briefly describe the artifact, code repository, essay, or design..."
                  className="w-full bg-transparent border-2 border-[#A3262A]/30 p-3 text-sm text-[#A3262A] placeholder-[#A3262A]/35 focus:outline-none focus:border-[#A3262A] transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[#A3262A] hover:bg-[#8B1E22] text-[#F4E7C6] font-mono text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 cursor-pointer shadow-sm"
                >
                  SUBMIT DOSSIER [→]
                </button>
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#A3262A]/60 uppercase">
                  CONFIDENTIAL REVIEW
                </span>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-16 py-6 border-t border-[#A3262A]/20 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-[#A3262A]/60">
        <span>IKIGAI.DELHI · 2026 ADMITTANCE</span>
        <span>DELHI ODYSSEE</span>
        <span>28.6139° N, 77.2090° E</span>
      </footer>
    </div>
  );
};
