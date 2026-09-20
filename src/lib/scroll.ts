import Lenis from 'lenis';

/**
 * One smooth-scroll engine for the whole site.
 *
 * Lenis gives the page inertia (the "buttery" feel), and every programmatic
 * scroll — logo, ENTER button, route changes — goes through here so nothing
 * ever jumps. Users who prefer reduced motion get plain native scrolling.
 */

let lenis: Lenis | null = null;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function initSmoothScroll(): () => void {
  if (prefersReducedMotion()) return () => {};

  const instance = new Lenis({
    lerp: 0.09,
    wheelMultiplier: 0.95,
    smoothWheel: true,
  });
  lenis = instance;

  let frame = 0;
  const tick = (time: number) => {
    instance.raf(time);
    frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(frame);
    instance.destroy();
    if (lenis === instance) lenis = null;
  };
}

/** Longer trips take a little longer, so speed always feels the same. */
const durationFor = (distance: number) =>
  Math.min(2.2, Math.max(0.9, 0.8 + Math.abs(distance) / 4000));

export function scrollToElement(target: HTMLElement): void {
  if (!lenis) {
    target.scrollIntoView({ behavior: 'auto', block: 'start' });
    return;
  }
  const distance = target.getBoundingClientRect().top;
  lenis.scrollTo(target, {
    duration: durationFor(distance),
    easing: easeInOutCubic,
  });
}

export function scrollToTop(): void {
  if (!lenis) {
    window.scrollTo({ top: 0, behavior: 'auto' });
    return;
  }
  lenis.scrollTo(0, {
    duration: durationFor(window.scrollY),
    easing: easeInOutCubic,
  });
}
