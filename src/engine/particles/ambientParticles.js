/**
 * Ambient Atmospheric Particle Engine
 * 
 * Renders sparse, organic motes representing dust, light, and ideas drifting
 * across the negative space of the editorial canvas.
 */

export class AmbientParticleEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animationFrameId = null;
    this.isRunning = false;
    this.density = 24; // restrained number of particles to ensure high performance
    this.width = 0;
    this.height = 0;

    this.initParticles();
    this.handleResize = this.handleResize.bind(this);
    this.render = this.render.bind(this);
  }

  handleResize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(dpr, dpr);
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.density; i++) {
      this.particles.push({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        radius: Math.random() * 1.5 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.25, // gentle upward drift
        alpha: Math.random() * 0.35 + 0.1,
        color: Math.random() > 0.85 ? '200, 169, 107' : (Math.random() > 0.92 ? '182, 83, 60' : '38, 35, 32')
      });
    }
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.handleResize();
    window.addEventListener('resize', this.handleResize, { passive: true });
    this.render();
  }

  stop() {
    this.isRunning = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around screen boundaries
      if (p.y < -10) p.y = this.height + 10;
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      this.ctx.fill();
    }

    this.animationFrameId = requestAnimationFrame(this.render);
  }
}
