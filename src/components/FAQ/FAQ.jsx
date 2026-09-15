import React, { useState } from 'react';
import { faqIndex } from '../../data/faq';
import { JapaneseAnchor } from '../common/JapaneseAnchor';
import { SectionDivider } from '../common/SectionDivider';
import './FAQ.css';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Open first item by default for discovery

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(idx);
    }
  };

  return (
    <section className="section-editorial faq-section" id="faq">
      <SectionDivider sectionNumber="11" label="SYSTEM MANUAL" />
      <div className="container faq-container">
        {/* Header Block */}
        <div className="faq-header-block">
          <div className="faq-anchor-row">
            <JapaneseAnchor kanji="手引" romaji="TEBIKI" translation="System Handbook" />
          </div>
          <span className="meta-label faq-context-tag">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="title-editorial faq-main-title">
            SYSTEM MANUAL
          </h2>
          <p className="faq-subtitle">
            Essential operational details, team parameters, sprint guidelines, and admissions protocol.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="faq-accordion-list" role="region" aria-label="System Manual Accordion">
          {faqIndex.map((item, idx) => {
            const isOpen = openIndex === idx;
            const headerId = `faq-header-${item.index}`;
            const panelId = `faq-panel-${item.index}`;

            return (
              <div
                key={item.index}
                className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  id={headerId}
                  className="faq-trigger-btn"
                  onClick={() => toggle(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <div className="faq-trigger-left">
                    <span className="faq-item-num">{item.index}</span>
                    <span className="text-japanese faq-item-kanji">{item.japanese}</span>
                    <span className="faq-item-question">{item.question}</span>
                  </div>

                  <div className="faq-trigger-right">
                    <span className="meta-label faq-item-tag">{item.tag}</span>
                    <span className={`faq-icon-marker ${isOpen ? 'is-expanded' : ''}`} aria-hidden="true">
                      +
                    </span>
                  </div>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`faq-content-panel ${isOpen ? 'is-open' : ''}`}
                  hidden={!isOpen}
                >
                  <div className="faq-panel-inner">
                    <p className="faq-item-answer">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
