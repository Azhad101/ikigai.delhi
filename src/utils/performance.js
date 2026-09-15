/**
 * Performance & Rendering Optimization Utilities
 */

/**
 * Check if WebGL is supported by the client browser.
 */
export function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

/**
 * Helper to observe element visibility using IntersectionObserver.
 * Calls onVisible/onHidden callbacks to pause/resume expensive animations.
 */
export function observeVisibility(element, { onVisible, onHidden, threshold = 0.1 } = {}) {
  if (!element || typeof IntersectionObserver === 'undefined') {
    if (onVisible) onVisible();
    return () => {};
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (onVisible) onVisible(entry);
      } else {
        if (onHidden) onHidden(entry);
      }
    });
  }, { threshold });

  observer.observe(element);
  return () => observer.disconnect();
}
