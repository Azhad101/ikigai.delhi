import { gsap } from 'gsap';
import { MOTION_SPEEDS, MOTION_EASES, isReducedMotion } from '../motion/motionTokens';

/**
 * Transition Type 1: Typography Mask Displacement
 * Splits and gently floats titles up into view with editorial ease.
 */
export function transitionTypographyDisplace(target, trigger) {
  if (!target) return;
  if (isReducedMotion()) {
    gsap.set(target, { opacity: 1, y: 0 });
    return;
  }

  return gsap.fromTo(
    target,
    { opacity: 0, y: 35 },
    {
      opacity: 1,
      y: 0,
      duration: MOTION_SPEEDS.MEDIUM,
      ease: MOTION_EASES.POWER3_OUT,
      scrollTrigger: trigger ? { trigger, start: 'top 85%' } : undefined
    }
  );
}

/**
 * Transition Type 2: Enso Stroke Drawing
 * Animates SVG stroke-dashoffset to draw an Enso-inspired circular arc like ink on paper.
 */
export function transitionEnsoDraw(pathElement, trigger) {
  if (!pathElement) return;
  if (isReducedMotion()) {
    gsap.set(pathElement, { strokeDashoffset: 0, opacity: 1 });
    return;
  }

  const length = pathElement.getTotalLength ? pathElement.getTotalLength() : 600;
  gsap.set(pathElement, { strokeDasharray: length, strokeDashoffset: length });

  return gsap.to(pathElement, {
    strokeDashoffset: 0,
    duration: MOTION_SPEEDS.SLOW,
    ease: MOTION_EASES.DELIBERATE,
    scrollTrigger: trigger ? { trigger, start: 'top 80%' } : undefined
  });
}

/**
 * Transition Type 3: Horizontal Hairline Expansion
 * Draws minimal architectural divider lines from left to right.
 */
export function transitionLineExpand(lineElement, trigger) {
  if (!lineElement) return;
  if (isReducedMotion()) {
    gsap.set(lineElement, { scaleX: 1, opacity: 1 });
    return;
  }

  return gsap.fromTo(
    lineElement,
    { scaleX: 0, transformOrigin: 'left center', opacity: 0 },
    {
      scaleX: 1,
      opacity: 1,
      duration: MOTION_SPEEDS.MEDIUM,
      ease: MOTION_EASES.EDITORIAL,
      scrollTrigger: trigger ? { trigger, start: 'top 90%' } : undefined
    }
  );
}

/**
 * Transition Type 4: Concentric Circle Convergence / Expansion
 * Scales concentric circular forms outward or converges them to the center.
 */
export function transitionCircleScale(circleElements, trigger) {
  if (!circleElements) return;
  if (isReducedMotion()) {
    gsap.set(circleElements, { scale: 1, opacity: 1 });
    return;
  }

  return gsap.fromTo(
    circleElements,
    { scale: 0.88, opacity: 0, transformOrigin: 'center center' },
    {
      scale: 1,
      opacity: 1,
      stagger: 0.12,
      duration: MOTION_SPEEDS.SLOW,
      ease: MOTION_EASES.EDITORIAL,
      scrollTrigger: trigger ? { trigger, start: 'top 80%' } : undefined
    }
  );
}
