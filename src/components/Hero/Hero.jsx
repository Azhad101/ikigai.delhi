import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isReducedMotion } from '../../engine/motion/motionTokens';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef(null);
  const stageRef = useRef(null);
  const textGroupRef = useRef(null);

  // Pillar circle elements
  const circleTopRef = useRef(null);
  const circleRightRef = useRef(null);
  const circleBottomRef = useRef(null);
  const circleLeftRef = useRef(null);
  const centerSunRef = useRef(null);
  const centerWordmarkRef = useRef(null);
  const faintRingRef = useRef(null);

  // Text elements
  const japaneseTextRef = useRef(null);
  const reasonTextRef = useRef(null);
  const ikigaiTitleRef = useRef(null);
  const statementRef = useRef(null);
  const metadataRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion()) {
      gsap.set([
        japaneseTextRef.current,
        reasonTextRef.current,
        ikigaiTitleRef.current,
        statementRef.current,
        metadataRef.current,
        ctaRef.current,
        circleTopRef.current,
        circleRightRef.current,
        circleBottomRef.current,
        circleLeftRef.current,
        centerSunRef.current,
        centerWordmarkRef.current,
        faintRingRef.current
      ], { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // 60FPS SNAPPY & SMOOTH MASTER ENTRANCE TIMELINE
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', force3D: true }
      });

      // 1. Initial State
      tl.set(faintRingRef.current, { opacity: 0, scale: 0.9 })
        .set(japaneseTextRef.current, { opacity: 0, y: 12 })
        .set(reasonTextRef.current, { opacity: 0, y: 10 })
        .set(ikigaiTitleRef.current, { opacity: 0, y: 18 })
        .set(centerSunRef.current, { opacity: 0, scale: 0 })
        .set(centerWordmarkRef.current, { opacity: 0, scale: 0.85 })
        .set(statementRef.current, { opacity: 0, y: 16 })
        .set(metadataRef.current, { opacity: 0 })
        .set(ctaRef.current, { opacity: 0, y: 8 });

      // Initial positions for 4 entering circles (directional offsets)
      tl.set(circleTopRef.current, { opacity: 0, y: -90, x: 0 })
        .set(circleRightRef.current, { opacity: 0, x: 90, y: 0 })
        .set(circleBottomRef.current, { opacity: 0, y: 90, x: 0 })
        .set(circleLeftRef.current, { opacity: 0, x: -90, y: 0 });

      // Step 2: Faint ambient ring emerges softly & quickly
      tl.to(faintRingRef.current, { opacity: 0.35, scale: 1, duration: 0.6, ease: 'power2.out' }, '+=0.05');

      // Step 3: Japanese text & "The reason you wake up" fade in (snappy)
      tl.to(japaneseTextRef.current, { opacity: 1, y: 0, duration: 0.4 }, '-=0.35')
        .to(reasonTextRef.current, { opacity: 1, y: 0, duration: 0.4 }, '-=0.3');

      // Step 4: Monumental IKIGAI typography appears
      tl.to(ikigaiTitleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power4.out' }, '-=0.25');

      // Step 5: Four conceptual circles enter from different directions
      tl.to([circleTopRef.current, circleRightRef.current, circleBottomRef.current, circleLeftRef.current], {
        opacity: 0.8,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power2.out'
      }, '-=0.3');

      // Step 6: Circles smoothly overlap towards their converged coordinates
      tl.to(circleTopRef.current, { y: 0, duration: 0.65, ease: 'power3.out' }, '-=0.4')
        .to(circleRightRef.current, { x: 0, duration: 0.65, ease: 'power3.out' }, '<')
        .to(circleBottomRef.current, { y: 0, duration: 0.65, ease: 'power3.out' }, '<')
        .to(circleLeftRef.current, { x: 0, duration: 0.65, ease: 'power3.out' }, '<');

      // Step 7: Central convergence activates — sun glows and central wordmark anchors
      tl.to(centerSunRef.current, { opacity: 0.95, scale: 1, duration: 0.4, ease: 'back.out(1.8)' }, '-=0.45')
        .to(centerWordmarkRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }, '<+=0.05');

      // Step 8: Main statement & metadata reveal
      tl.to(statementRef.current, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25')
        .to(metadataRef.current, { opacity: 1, duration: 0.35 }, '-=0.3')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, '-=0.25');

      // ====================================================================
      // 60FPS SCROLL TRANSITION: Linked to ScrollTrigger with hardware acceleration
      // ====================================================================
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
          invalidateOnRefresh: true
        }
      });

      scrollTl.to(textGroupRef.current, {
        y: -100,
        opacity: 0.15,
        ease: 'none',
        force3D: true
      }, 0);

      scrollTl.to(circleTopRef.current, { y: -50, opacity: 0.3, ease: 'none', force3D: true }, 0)
              .to(circleRightRef.current, { x: 50, opacity: 0.3, ease: 'none', force3D: true }, 0)
              .to(circleBottomRef.current, { y: 50, opacity: 0.3, ease: 'none', force3D: true }, 0)
              .to(circleLeftRef.current, { x: -50, opacity: 0.3, ease: 'none', force3D: true }, 0)
              .to(centerSunRef.current, { scale: 1.4, opacity: 0.25, ease: 'none', force3D: true }, 0);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-sanctuary" id="hero" ref={heroRef}>
      <div className="container hero-container">
        {/* Top Context Metadata Bar */}
        <div className="hero-top-bar" ref={metadataRef}>
          <div className="hero-status-pill">
            <span className="hero-status-dot" />
            <span className="meta-label">IKIGAI ODYSSEE // CYCLE 2026 // DELHI NCR</span>
          </div>
          <div className="hero-city-tag">
            <span className="meta-label">DELHI · 2026</span>
          </div>
        </div>

        {/* Asymmetrical Hero Stage */}
        <div className="hero-stage-grid">
          {/* Left: Monumental Typographic Narrative */}
          <div className="hero-narrative-block gpu-accel" ref={textGroupRef}>
            {/* Opening Japanese Whisper */}
            <div className="hero-prelude-row">
              <span className="hero-kanji-anchor" ref={japaneseTextRef}>生き甲斐</span>
              <span className="hero-prelude-text" ref={reasonTextRef}>
                // The reason you wake up.
              </span>
            </div>

            {/* Monumental Wordmark */}
            <div className="hero-title-wrap" ref={ikigaiTitleRef}>
              <h1 className="hero-monumental-wordmark hero-wordmark-brand">
                <img
                  src="/branding/ikigai-wordmark.png"
                  alt="IKIGAI"
                  className="hero-wordmark-image"
                />
              </h1>
            </div>

            {/* Guiding Statement */}
            <div className="hero-statement-wrap" ref={statementRef}>
              <h2 className="hero-guidance-title">
                FIND WHAT DRIVES YOU.<br />
                <span className="hero-title-accent">BUILD WHAT MATTERS.</span>
              </h2>
              <p className="hero-lead-copy">
                A 2-day odyssee where an ancient idea transforms into the work only you could make — in code, design, words, or art.
                Not merely making something, but discovering why you make it.
              </p>
            </div>

            {/* CTA Anchor */}
            <div className="hero-cta-wrap" ref={ctaRef}>
              <a href="#ikigai-orb" className="hero-enter-btn" aria-label="Enter the journey">
                <span>ENTER THE JOURNEY</span>
                <span className="hero-enter-arrow">↓</span>
              </a>
            </div>
          </div>

          {/* Right: Four Conceptual Circles Convergence Visualization */}
          <div className="hero-convergence-stage gpu-accel" ref={stageRef} aria-hidden="true">
            {/* Faint Outer Ring */}
            <div className="hero-faint-ring" ref={faintRingRef} />

            <svg
              className="hero-circles-svg"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Central Soft Gold Axes */}
              <line x1="300" y1="40" x2="300" y2="560" stroke="var(--color-hairline-strong)" strokeWidth="1" strokeDasharray="3 5" />
              <line x1="40" y1="300" x2="560" y2="300" stroke="var(--color-hairline-strong)" strokeWidth="1" strokeDasharray="3 5" />

              {/* Circle 1: WHAT YOU LOVE (Top) */}
              <g className="hero-circle-group group-top" ref={circleTopRef}>
                <circle cx="300" cy="220" r="130" stroke="#B6533C" strokeWidth="1.3" className="pillar-circle-path" />
                <text x="300" y="80" textAnchor="middle" fill="#B6533C" fontSize="9.5" fontFamily="var(--font-sans)" letterSpacing="0.18em" fontWeight="600">
                  WHAT YOU LOVE · 愛
                </text>
              </g>

              {/* Circle 2: WHAT YOU'RE GOOD AT (Right) */}
              <g className="hero-circle-group group-right" ref={circleRightRef}>
                <circle cx="380" cy="300" r="130" stroke="#C8A96B" strokeWidth="1.3" className="pillar-circle-path" />
                <text x="522" y="304" textAnchor="start" fill="#C8A96B" fontSize="9.5" fontFamily="var(--font-sans)" letterSpacing="0.18em" fontWeight="600">
                  WHAT YOU'RE GOOD AT · 技
                </text>
              </g>

              {/* Circle 3: WHAT THE WORLD NEEDS (Bottom) */}
              <g className="hero-circle-group group-bottom" ref={circleBottomRef}>
                <circle cx="300" cy="380" r="130" stroke="#26382F" strokeWidth="1.3" className="pillar-circle-path" />
                <text x="300" y="530" textAnchor="middle" fill="#26382F" fontSize="9.5" fontFamily="var(--font-sans)" letterSpacing="0.18em" fontWeight="600">
                  WHAT THE WORLD NEEDS · 要
                </text>
              </g>

              {/* Circle 4: WHAT YOU CAN BE REWARDED FOR (Left) */}
              <g className="hero-circle-group group-left" ref={circleLeftRef}>
                <circle cx="220" cy="300" r="130" stroke="#111111" strokeWidth="1.3" className="pillar-circle-path" opacity="0.8" />
                <text x="78" y="304" textAnchor="end" fill="#111111" fontSize="9.5" fontFamily="var(--font-sans)" letterSpacing="0.18em" fontWeight="600">
                  WHAT YOU CAN BE REWARDED FOR · 報
                </text>
              </g>

              {/* Central Convergence Sun & Wordmark */}
              <g className="hero-center-convergence">
                <circle ref={centerSunRef} cx="300" cy="300" r="16" fill="#B6533C" />
                <g ref={centerWordmarkRef}>
                  <circle cx="300" cy="300" r="32" stroke="#B6533C" strokeWidth="0.8" opacity="0.35" />
                  <text x="300" y="304" textAnchor="middle" fill="#F5F1E8" fontSize="10.5" fontFamily="var(--font-display)" letterSpacing="0.22em" fontWeight="600">
                    IKIGAI
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
