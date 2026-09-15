import { useState, useEffect } from 'react';

export const BREAKPOINTS = {
  mobileMax: 767,
  tabletMin: 768,
  tabletMax: 1023,
  desktopMin: 1024,
  wideMin: 1440
};

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    width: typeof window !== 'undefined' ? window.innerWidth : 1200
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function update() {
      const w = window.innerWidth;
      setBreakpoint({
        isMobile: w < BREAKPOINTS.tabletMin,
        isTablet: w >= BREAKPOINTS.tabletMin && w <= BREAKPOINTS.tabletMax,
        isDesktop: w >= BREAKPOINTS.desktopMin,
        width: w
      });
    }

    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  return breakpoint;
}
