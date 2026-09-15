import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { traditionalContext } from '../../data/philosophy';
import { JapaneseAnchor } from '../common/JapaneseAnchor';
import { SectionDivider } from '../common/SectionDivider';
import { isReducedMotion } from '../../engine/motion/motionTokens';
import './IntellectualHonesty.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * A NOTE ON INTELLECTUAL HONESTY
 *
 * A short, standalone contemplative pause between the Orb and The Two Ikigais.
 * Its entire purpose: be honest that the four-circle diagram is a modern
 * synthesis, not ancient doctrine, before the site goes on to use it anyway.
 */
export function IntellectualHonesty() {
  const sectionRef = useRef(null);
  const blockRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        blockRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: blockRef.current,
            start: 'top 85%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-forest honesty-section" id="intellectual-honesty" ref={sectionRef}>
      <SectionDivider sectionNumber="04" label="INTELLECTUAL HONESTY" />

      <div className="container honesty-container" ref={blockRef}>
        <div className="honesty-anchor-row">
          <JapaneseAnchor kanji={traditionalContext.japanese} romaji="HONRAI NO IKIGAI" translation="Ikigai, in its original form" />
        </div>

        <span className="meta-label honesty-tag">{traditionalContext.headline}</span>

        <h2 className="title-editorial honesty-statement">
          {traditionalContext.statement}
        </h2>

        <p className="body-editorial honesty-body">
          {traditionalContext.body}
        </p>
      </div>
    </section>
  );
}
