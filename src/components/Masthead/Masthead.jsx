import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { crewMembers } from '../../data/crew';
import { JapaneseAnchor } from '../common/JapaneseAnchor';
import { SectionDivider } from '../common/SectionDivider';
import { isReducedMotion } from '../../engine/motion/motionTokens';
import './Masthead.css';

gsap.registerPlugin(ScrollTrigger);

export function Masthead() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%'
          }
        }
      );

      const cards = gridRef.current?.querySelectorAll('.crew-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-editorial masthead-section" id="masterminds" ref={sectionRef}>
      <SectionDivider sectionNumber="09" label="THE ORGANIZING MASTERMINDS" />

      <div className="container masthead-container">
        {/* Header Block */}
        <div className="masthead-header-block" ref={headerRef}>
          <div className="masthead-anchor-row">
            <JapaneseAnchor kanji="編集部" romaji="HENSHŪBU" translation="The Editorial Crew" />
          </div>

          <span className="meta-label masthead-context-tag">ORGANIZED BY STUDENTS</span>

          <h2 className="title-editorial masthead-main-title">
            THE CREATIVE<br /><em>MASTERMINDS.</em>
          </h2>

          <p className="body-editorial masthead-subtitle">
            Built and directed by students passionate about creative technology.
          </p>
        </div>

        {/* Crew Cards Grid */}
        <div className="crew-grid" ref={gridRef}>
          {crewMembers.map((member) => (
            <div key={member.id} className="crew-card">
              <div className="crew-card-portrait">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="crew-card-photo"
                    loading="lazy"
                  />
                ) : (
                  <div className="crew-card-initials">
                    <span>{member.initials}</span>
                  </div>
                )}
              </div>

              <div className="crew-card-meta">
                <span className="meta-label crew-card-number">
                  {member.number} <span className="crew-card-dot">•</span> ORGANIZER
                </span>
                <h3 className="crew-card-name">{member.name}</h3>
                <p className="crew-card-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
