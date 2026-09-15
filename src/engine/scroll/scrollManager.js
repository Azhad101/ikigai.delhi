import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

/**
 * Initialize high-performance 60fps Lenis smooth scrolling and synchronize with GSAP ScrollTrigger.
 */
export function initScrollManager() {
  if (typeof window === 'undefined') return null;

  if (lenisInstance) {
    return lenisInstance;
  }

  // Respect prefers-reduced-motion: fall back to near-instant, native-feeling
  // scroll response instead of the full eased smooth-scroll experience.
  const prefersReducedMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  lenisInstance = new Lenis({
    duration: prefersReducedMotion ? 0 : 0.85, // faster and smoother response
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: !prefersReducedMotion,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.2,
  });

  // Synchronize Lenis scroll updates with GSAP ScrollTrigger immediately
  lenisInstance.on('scroll', ScrollTrigger.update);

  // Bind Lenis animation frame to GSAP's 60fps RAF ticker
  const tickerHandler = (time) => {
    lenisInstance.raf(time * 1000);
  };
  gsap.ticker.add(tickerHandler);
  gsap.ticker.lagSmoothing(500, 33); // maintain 60fps rhythm without jumps

  return lenisInstance;
}

/**
 * Get active Lenis instance.
 */
export function getLenis() {
  return lenisInstance;
}

/**
 * Clean up scroll manager.
 */
export function destroyScrollManager() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
