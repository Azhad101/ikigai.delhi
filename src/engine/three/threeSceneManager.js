import * as THREE from 'three';
import { isWebGLAvailable } from '../../utils/performance';

/**
 * Singleton ThreeSceneManager
 * 
 * Enforces a single WebGLRenderer lifecycle to prevent multiple GPU context creation,
 * memory leaks, and render contention.
 */
class ThreeSceneManager {
  constructor() {
    this.renderer = null;
    this.activeScenes = new Map();
    this.isSupported = isWebGLAvailable();
  }

  getRenderer(container) {
    if (!this.isSupported) {
      console.warn('[ThreeSceneManager] WebGL is not available on this device/browser.');
      return null;
    }

    if (!this.renderer && typeof window !== 'undefined') {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.0;
    }

    if (container && this.renderer.domElement.parentElement !== container) {
      container.appendChild(this.renderer.domElement);
      this.resize(container.clientWidth, container.clientHeight);
    }

    return this.renderer;
  }

  resize(width, height) {
    if (this.renderer) {
      this.renderer.setSize(width, height);
    }
  }

  dispose() {
    if (this.renderer) {
      this.renderer.dispose();
      if (this.renderer.domElement && this.renderer.domElement.parentElement) {
        this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
      }
      this.renderer = null;
    }
  }
}

export const threeSceneManager = new ThreeSceneManager();
