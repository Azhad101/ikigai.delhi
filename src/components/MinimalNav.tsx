import React from 'react';
import { useNavAppearance } from '../lib/useNavAppearance';

export type SiteRoute = 'home' | 'register';

interface MinimalNavProps {
  route: SiteRoute;
  onBrandClick: () => void;
  onActionClick: () => void;
}

/**
 * One header for the whole site. It never unmounts when the route changes —
 * only its labels cross-fade — which is what makes moving between the
 * experience and the dossier feel like a single continuous page.
 */
export const MinimalNav: React.FC<MinimalNavProps> = ({
  route,
  onBrandClick,
  onActionClick,
}) => {
  const onHome = route === 'home';
  const { theme, scrolled } = useNavAppearance(onHome);

  return (
    <header
      className="site-nav fixed top-0 left-0 w-full z-30 px-6 md:px-12 py-3 flex items-center justify-between"
      data-theme={theme}
      data-scrolled={scrolled ? 'true' : 'false'}
    >
      <div className="flex items-center gap-3">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onBrandClick();
          }}
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img
            src="/ikigai-logo.png"
            alt="IKIGAI.DELHI"
            className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover shrink-0"
          />
          <span className="font-editorial text-xl md:text-2xl font-bold tracking-wider uppercase">
            IKIGAI.DELHI
          </span>
        </a>
      </div>

      <div className="nav-swap hidden sm:grid font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase justify-items-center">
        <div data-active={onHome} className="flex items-center gap-3">
          <span className="opacity-70">DELHI</span>
          <span className="w-1 h-1 rounded-full bg-current opacity-40" />
          <span className="opacity-70">2026</span>
          <span className="w-1 h-1 rounded-full bg-current opacity-40" />
          <span className="font-semibold">2-DAY ODYSSEE</span>
        </div>
        <div data-active={!onHome} className="flex items-center gap-3">
          <span className="opacity-70">CANDIDATE DOSSIER · 2026</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onActionClick}
        aria-label={onHome ? 'Enter — open the application' : 'Return to the experience'}
        className="nav-cta nav-swap grid justify-items-center font-mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] px-3.5 py-1.5 uppercase cursor-pointer"
      >
        <span data-active={onHome}>ENTER [→]</span>
        <span data-active={!onHome}>← RETURN</span>
      </button>
    </header>
  );
};
