import { useEffect } from 'react';

/**
 * Softly fades content in as it enters the viewport.
 * Elements opt in with a `data-reveal` attribute; the hidden/visible
 * styles live in index.css so the first paint is already correct
 * (no flash of visible-then-hidden content).
 */
export function useScrollReveal(active: boolean): void {
  useEffect(() => {
    if (!active) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );
    if (targets.length === 0) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => {
        el.dataset.revealed = 'true';
      });
      return;
    }

    // threshold 0 + a negative bottom margin: works for blocks of any height,
    // including ones taller than the screen on phones.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = 'true';
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);
}
