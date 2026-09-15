import React from 'react';
import { eventConfig } from '../../data/event';
import { JapaneseAnchor } from '../common/JapaneseAnchor';
import { SectionDivider } from '../common/SectionDivider';
import './FinalCTA.css';

export function FinalCTA() {
  return (
    <section className="final-cta-section" id="register">
      <SectionDivider sectionNumber="12" label="THE BEGINNING" />

      {/* Atmospheric dark gradient wash fading to black */}
      <div className="final-cta-fade-backdrop" aria-hidden="true" />

      <div className="container final-cta-container">
        {/* Converged Four Circles Visual — Symmetrical mirror to Hero */}
        <div className="final-converged-circles-stage" aria-hidden="true">
          <svg
            className="final-circles-svg"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft Reticle Axes */}
            <line x1="250" y1="30" x2="250" y2="470" stroke="rgba(245, 241, 232, 0.12)" strokeDasharray="3 5" />
            <line x1="30" y1="250" x2="470" y2="250" stroke="rgba(245, 241, 232, 0.12)" strokeDasharray="3 5" />

            {/* Converged Four Circles (Already locked at center) */}
            {/* Top: Love */}
            <circle cx="250" cy="190" r="105" stroke="#B6533C" strokeWidth="1.2" opacity="0.65" />
            {/* Right: Skill */}
            <circle cx="310" cy="250" r="105" stroke="#C8A96B" strokeWidth="1.2" opacity="0.65" />
            {/* Bottom: Need */}
            <circle cx="250" cy="310" r="105" stroke="#4E725D" strokeWidth="1.2" opacity="0.65" />
            {/* Left: Reward */}
            <circle cx="190" cy="250" r="105" stroke="#F5F1E8" strokeWidth="1.2" opacity="0.45" />

            {/* Glowing Converged Center Sun */}
            <circle cx="250" cy="250" r="38" fill="rgba(182, 83, 60, 0.25)" />
            <circle cx="250" cy="250" r="18" fill="#B6533C" />
            <circle cx="250" cy="250" r="32" stroke="#C8A96B" strokeWidth="0.8" opacity="0.5" />

            {/* Center Ikigai Wordmark */}
            <text x="250" y="254" textAnchor="middle" fill="#F5F1E8" fontSize="10" fontFamily="var(--font-display)" letterSpacing="0.22em" fontWeight="600">
              IKIGAI
            </text>
          </svg>
        </div>

        {/* Closing Narrative Content */}
        <div className="final-cta-content-block">
          <div className="final-anchor-row">
            <JapaneseAnchor kanji="出発" romaji="SHUPPATSU" translation="Departure / Beginning" />
          </div>

          <span className="meta-label final-context-tag">YOUR JOURNEY STARTS HERE</span>

          <h2 className="title-editorial final-mirror-title">
            WHAT WILL YOU BUILD WITH IT?
          </h2>

          <p className="final-lead-copy">
            {eventConfig.duration} of focus, genuine craft, and high-impact creation in {eventConfig.location}.
            Zero application fees. Free admission. Strictly evaluated by merit.
          </p>

          {/* Primary & Secondary Dual CTAs */}
          <div className="final-cta-actions">
            <a
              href={eventConfig.registrationUrl}
              className="final-primary-btn"
              aria-label="Register for Ikigai.delhi"
            >
              <span>REGISTER NOW</span>
              <span className="btn-arrow">→</span>
            </a>

            <a
              href={eventConfig.partnerDossierUrl}
              className="final-secondary-btn"
              aria-label="Partner with Ikigai.delhi"
            >
              <span>PARTNER WITH US</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>

          <div className="final-status-footnote">
            <span className="status-dot-pulse" />
            <span className="meta-label">{eventConfig.edition} · {eventConfig.location} · {eventConfig.registrationStatus}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
