import { useEffect, useState } from 'react';

export type NavTheme = 'cream' | 'crimson';

const THEME_COLORS: Record<NavTheme, string> = {
  cream: '#F4E7C6',
  crimson: '#A3262A',
};

/**
 * Keeps the fixed header in tune with whatever is underneath it, so it
 * melts into each section instead of sitting on top like a separate strip.
 * Sections opt in to the crimson look with `data-nav-theme="crimson"`.
 * The browser's own toolbar colour (mobile) follows along too.
 */
export function useNavAppearance(trackSections: boolean) {
  const [theme, setTheme] = useState<NavTheme>('cream');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 40);

      if (!trackSections) {
        setTheme('cream');
        return;
      }

      const probeY = 28; // roughly the middle of the header
      let next: NavTheme = 'cream';
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('main > section'),
      );
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          next = section.dataset.navTheme === 'crimson' ? 'crimson' : 'cream';
          break;
        }
      }
      setTheme(next);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [trackSections]);

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[theme]);
  }, [theme]);

  return { theme, scrolled };
}
