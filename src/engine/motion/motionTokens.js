import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MOTION_SPEEDS = {
  FAST: 0.18,      // snappy micro-interactions, button hovers, badge toggles
  MEDIUM: 0.42,    // fast and smooth section entries, card reveals, drawer slides
  SLOW: 0.85       // fluid environmental shifts, Enso drawing, circle convergence
};

export const MOTION_EASES = {
  EDITORIAL: 'cubic-bezier(0.16, 1, 0.3, 1)',
  DELIBERATE: 'cubic-bezier(0.25, 1, 0.5, 1)',
  SMOOTH: 'power3.out',
  FAST_OUT: 'power2.out',
  EXPO_OUT: 'expo.out'
};

/**
 * Checks if reduced motion is preferred by user.
 */
export function isReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Reusable helper: Editorial Text Reveal / Displacement (Fast & Smooth)
 */
export function revealText(element, options = {}) {
  if (!element) return;
  if (isReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 });
    return;
  }

  const {
    delay = 0,
    duration = MOTION_SPEEDS.MEDIUM,
    yOffset = 20,
    scrollTrigger = null
  } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, y: yOffset },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: MOTION_EASES.SMOOTH,
      scrollTrigger
    }
  );
}

/**
 * Reusable helper: Hairline / Rule Expansion
 */
export function expandLine(lineElement, options = {}) {
  if (!lineElement) return;
  if (isReducedMotion()) {
    gsap.set(lineElement, { scaleX: 1, opacity: 1 });
    return;
  }

  const {
    delay = 0,
    duration = MOTION_SPEEDS.MEDIUM,
    scrollTrigger = null,
    origin = 'left center'
  } = options;

  return gsap.fromTo(
    lineElement,
    { scaleX: 0, opacity: 0, transformOrigin: origin },
    {
      scaleX: 1,
      opacity: 1,
      duration,
      delay,
      ease: MOTION_EASES.EDITORIAL,
      scrollTrigger
    }
  );
}

/**
 * Reusable helper: Circle Expansion
 */
export function expandCircle(circleElement, options = {}) {
  if (!circleElement) return;
  if (isReducedMotion()) {
    gsap.set(circleElement, { scale: 1, opacity: 1 });
    return;
  }

  const {
    delay = 0,
    duration = MOTION_SPEEDS.SLOW,
    scrollTrigger = null
  } = options;

  return gsap.fromTo(
    circleElement,
    { scale: 0.88, opacity: 0, transformOrigin: 'center center' },
    {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease: MOTION_EASES.EDITORIAL,
      scrollTrigger
    }
  );
}
