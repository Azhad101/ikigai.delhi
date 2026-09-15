import React from 'react';
import { partnerCategories } from '../../data/partners';
import { eventConfig } from '../../data/event';
import { JapaneseAnchor } from '../common/JapaneseAnchor';
import { SectionDivider } from '../common/SectionDivider';
import './Partners.css';

export function Partners() {
  return (
    <section className="section-forest partners-section" id="partners">
      <SectionDivider sectionNumber="10" label="BUILD WITH US" />
      <div className="container partners-container">
        {/* Header Block */}
        <div className="partners-header-block">
          <div className="partners-anchor-row">
            <JapaneseAnchor kanji="共創" romaji="KYŌSŌ" translation="Co-Creation & Alliance" />
          </div>
          <span className="meta-label partners-context-tag">ALLIANCE & PARTNERSHIP</span>
          <h2 className="title-editorial partners-main-title">
            BUILD WITH US
          </h2>
          <p className="partners-subtitle">
            Help us create an ecosystem where students don't just build projects. They build things that matter.
          </p>
        </div>

        {/* Partner Category Strips: Venue, Technology, Community, Prize, Food */}
        <div className="partner-strip-list">
          {partnerCategories.map((item, idx) => (
            <div
              key={idx}
              className={`partner-strip-card ${item.logos || item.openSlots ? 'has-logo-panel' : ''}`}
            >
              <div className="strip-info-half">
                <span className="text-japanese strip-kanji">{item.japanese}</span>
                <div className="strip-main-col">
                  <span className="meta-label strip-label">{item.label}</span>
                  <p className="strip-desc">{item.description}</p>
                </div>
                <span className="strip-status-tag">{item.status}</span>
              </div>

              {(item.logos || item.openSlots) && (
                <div className="strip-logo-half">
                  {item.logos && item.logos.map((logo, logoIdx) => (
                    <img
                      key={logoIdx}
                      src={logo.src}
                      alt={logo.name}
                      className="strip-logo-img"
                    />
                  ))}

                  {/* Open sponsor slot — every category keeps recruiting */}
                  {item.openSlots && (
                    <a
                      href={eventConfig.sponsorBrochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="strip-open-slot"
                      title={item.openSlotsNote}
                    >
                      <span className="open-slot-plus" aria-hidden="true">+</span>
                      <span className="open-slot-label">SLOTS OPEN</span>
                      <span className="open-slot-note">{item.openSlotsNote}</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sponsor CTA Block */}
        <div className="sponsor-cta-banner">
          <div className="sponsor-cta-copy">
            <h3 className="sponsor-cta-title">PARTNER WITH IKIGAI</h3>
            <p className="sponsor-cta-desc">
              Connect directly with high-caliber student builders and creators, test experimental tooling, and support genuine creative and technical breakthroughs in Delhi NCR.
            </p>
          </div>
          <div className="sponsor-cta-action">
            <a
              href={eventConfig.sponsorBrochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-primary-btn"
              aria-label="Become a partner for Ikigai.delhi"
            >
              <span>BECOME A PARTNER</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
