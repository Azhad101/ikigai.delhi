import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { eventConfig } from '../../data/event';
import { JapaneseAnchor } from '../common/JapaneseAnchor';
import { SectionDivider } from '../common/SectionDivider';
import { isReducedMotion } from '../../engine/motion/motionTokens';
import './EventReveal.css';

gsap.registerPlugin(ScrollTrigger);

export function EventReveal() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const fieldGridRef = useRef(null);
  const ctaBarRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Grounding headline reveal
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%'
          }
        }
      );

      // Staggered Field Notes reveal
      const fieldCards = fieldGridRef.current?.querySelectorAll('.field-note-card');
      if (fieldCards) {
        gsap.fromTo(
          fieldCards,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: fieldGridRef.current,
              start: 'top 80%'
            }
          }
        );
      }

      // CTA bar reveal
      gsap.fromTo(
        ctaBarRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaBarRef.current,
            start: 'top 90%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-editorial event-reveal-section" id="event" ref={sectionRef}>
      <SectionDivider sectionNumber="07" label="THE EVENT" />

      <div className="container event-reveal-container">
        {/* The Grounding Transition */}
        <div className="event-grounding-block" ref={headlineRef}>
          <div className="event-anchor-row">
            <JapaneseAnchor kanji="実体" romaji="JITTAI" translation="Embodiment into Reality" />
          </div>

          <span className="meta-label event-context-tag">
            FROM PHILOSOPHY TO SPRINT
          </span>

          <h2 className="event-grounding-headline">
            2 DAYS. ONE PROBLEM.<br />
            <span className="event-headline-accent">MANY WAYS TO SOLVE IT.</span>
          </h2>

          <p className="body-editorial event-grounding-lead">
            The philosophical contemplation settles into grounded reality.
            Ikigai.delhi is not an abstract theory—it is a 2-day odyssee where builders, writers,
            artists, and creators take what they care about, make real work, and prove it in Delhi NCR.
          </p>
        </div>

        {/* Mission Briefing / Field Notes Grid */}
        <div className="field-notes-grid" ref={fieldGridRef}>
          {/* FIELD 01: THE SEEKERS */}
          <div className="field-note-card">
            <div className="field-note-header">
              <span className="field-id">FIELD // 01</span>
              <span className="text-japanese field-kanji">探求者</span>
            </div>
            <span className="meta-label field-category">THE SEEKERS</span>
            <div className="field-primary-metric">
              <span className="metric-number">{eventConfig.teamSize}</span>
              <span className="metric-unit">PER SQUAD</span>
            </div>
            <p className="field-description">
              {eventConfig.eligibility}. Formed across code, design, writing, art, and domain insight.
            </p>
            <div className="field-stamp-line">
              <span className="meta-label stamp-label">VERIFIED COHORT</span>
            </div>
          </div>

          {/* FIELD 02: THE CHALLENGE */}
          <div className="field-note-card">
            <div className="field-note-header">
              <span className="field-id">FIELD // 02</span>
              <span className="text-japanese field-kanji">挑戦</span>
            </div>
            <span className="meta-label field-category">THE CHALLENGE</span>
            <div className="field-primary-metric">
              <span className="metric-statement">BUILD WHAT MATTERS</span>
            </div>
            <p className="field-description">
              Move beyond shallow wrappers and generic toys. Pick a problem worthy of your intellect and build enduring architecture.
            </p>
            <div className="field-stamp-line">
              <span className="meta-label stamp-label">MERIT EVALUATED</span>
            </div>
          </div>

          {/* FIELD 03: THE CLOCK */}
          <div className="field-note-card">
            <div className="field-note-header">
              <span className="field-id">FIELD // 03</span>
              <span className="text-japanese field-kanji">時間</span>
            </div>
            <span className="meta-label field-category">THE CLOCK</span>
            <div className="field-primary-metric">
              <span className="metric-number">{eventConfig.duration}</span>
              <span className="metric-unit">ONE JOURNEY</span>
            </div>
            <p className="field-description">
              Date: <strong style={{ color: 'var(--color-ink)' }}>{eventConfig.dateDisplay}</strong>. Continuous odyssee window from opening keynote to final submission.
            </p>
            <div className="field-stamp-line">
              <span className="meta-label stamp-label">SCHEDULE PROGRESSION</span>
            </div>
          </div>

          {/* FIELD 04: THE PLACE */}
          <div className="field-note-card">
            <div className="field-note-header">
              <span className="field-id">FIELD // 04</span>
              <span className="text-japanese field-kanji">拠点</span>
            </div>
            <span className="meta-label field-category">THE PLACE</span>
            <div className="field-primary-metric">
              <span className="metric-number">{eventConfig.location.split(',')[0]}</span>
              <span className="metric-unit">OFFLINE / IN-PERSON</span>
            </div>
            <p className="field-description">
              Venue: <strong style={{ color: 'var(--color-ink)' }}>{eventConfig.venue}</strong>. Physical collaboration, high-speed telemetry, and direct mentor access.
            </p>
            <div className="field-stamp-line">
              <span className="meta-label stamp-label">ZERO ADMISSION FEE</span>
            </div>
          </div>
        </div>

        {/* Action & Registration Briefing Strip */}
        <div className="event-briefing-cta-strip" ref={ctaBarRef}>
          <div className="cta-strip-logistics">
            <div className="logistics-item">
              <span className="meta-label">ADMISSION FEE</span>
              <span className="logistics-val" style={{ color: 'var(--color-accent-vermilion)' }}>
                {eventConfig.registrationFee}
              </span>
            </div>
            <div className="logistics-item">
              <span className="meta-label">CURRENT STATUS</span>
              <span className="logistics-val">
                {eventConfig.registrationStatus}
              </span>
            </div>
          </div>

          <div className="cta-strip-action">
            <a
              href={eventConfig.registrationUrl}
              className="event-register-now-btn"
              aria-label="Register now for Ikigai.delhi"
            >
              <span>REGISTER NOW</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
