import { useState, useEffect } from 'react';

/**
 * Hook to detect and listen to system prefers-reduced-motion preference.
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else {
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, []);

  return prefersReducedMotion;
}

/**
 * Check if keyboard focus is currently active.
 */
export function setupKeyboardFocusIndicator() {
  if (typeof window === 'undefined') return;

  function handleKeyDown(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation-active');
    }
  }

  function handleMouseDown() {
    document.body.classList.remove('keyboard-navigation-active');
  }

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('mousedown', handleMouseDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('mousedown', handleMouseDown);
  };
}
