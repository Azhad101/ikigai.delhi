import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { trackSelection, tracks, fieldCollaboration } from '../../data/tracks';
import { JapaneseAnchor } from '../common/JapaneseAnchor';
import { SectionDivider } from '../common/SectionDivider';
import { isReducedMotion } from '../../engine/motion/motionTokens';
import './TrackSelection.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * FIELD SELECTION
 *
 * The five creative languages, presented as an editorial card grid immediately
 * after the Intellectual Honesty pause — mirroring the "Choose Your World"
 * domain-selection pattern, but scoped to Build / Write / Create / Visualize / Invent.
 */
export function TrackSelection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const collabRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%'
          }
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%'
          }
        }
      );

      gsap.fromTo(
        collabRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: collabRef.current,
            start: 'top 88%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="track-selection-section" id="track-selection" ref={sectionRef}>
      <SectionDivider sectionNumber="05" label={trackSelection.headline} />

      <div className="container track-selection-header" ref={headerRef}>
        <div className="track-selection-anchor-row">
          <JapaneseAnchor
            kanji={trackSelection.japanese}
            romaji={trackSelection.romaji}
            translation={trackSelection.translation}
          />
        </div>

        <span className="meta-label track-selection-tag">{trackSelection.headline}</span>

        <h2 className="title-editorial track-selection-title">
          {trackSelection.title}
        </h2>

        <p className="body-editorial track-selection-subtitle">
          {trackSelection.subtitle}
        </p>
      </div>

      <div className="container track-grid-container">
        <div className="track-grid">
          {tracks.map((track, idx) => {
            const isExpanded = expandedIndex === idx;
            const detailId = `field-detail-${track.number}`;

            return (
              <div
                key={track.number}
                className={`track-card${isExpanded ? ' track-card-expanded' : ''}`}
                ref={(el) => (cardsRef.current[idx] = el)}
              >
                <span className="track-card-watermark text-japanese" aria-hidden="true">
                  {track.watermark}
                </span>

                <div className="track-card-top-row">
                  <span className="meta-number track-card-num">FLD-{track.number}</span>
                  <span className="track-card-seal text-japanese" aria-hidden="true">
                    {track.kanji}
                  </span>
                </div>

                <span className="meta-label track-card-category">{track.category}</span>

                <h3 className="track-card-title">{track.title}</h3>

                <dl className="track-card-facts">
                  <div className="track-card-fact-row">
                    <dt>Deliverable</dt>
                    <dd>{track.deliverable}</dd>
                  </div>
                  <div className="track-card-fact-row">
                    <dt>Core Focus</dt>
                    <dd>{track.coreFocus}</dd>
                  </div>
                </dl>

                <p className="body-quiet track-card-desc">{track.description}</p>

                <div className="track-card-detail-wrap" id={detailId}>
                  <div className="track-card-detail-inner">
                    <p className="body-quiet track-card-detail-text">{track.detail}</p>

                    <div className="track-card-examples">
                      <span className="meta-label track-card-sublabel">YOU MIGHT MAKE</span>
                      <ul className="track-card-examples-list">
                        {track.examples.map((example, exampleIdx) => (
                          <li key={exampleIdx}>{example}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="track-card-pairs">
                      <span className="meta-label track-card-sublabel">PAIRS WELL WITH</span>
                      <span className="track-card-pairs-value">{track.pairsWith.join(' · ')}</span>
                    </div>
                  </div>
                </div>

                <div className="track-card-footer">
                  <button
                    type="button"
                    className="track-card-link"
                    aria-expanded={isExpanded}
                    aria-controls={detailId}
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  >
                    {isExpanded ? 'CLOSE FIELD ↑' : 'EXPLORE FIELD →'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Collaboration Note: fields are languages, not silos */}
      <div className="container track-collab-container">
        <div className="track-collab-note" ref={collabRef}>
          <div className="track-collab-anchor-row">
            <JapaneseAnchor
              kanji={fieldCollaboration.japanese}
              romaji={fieldCollaboration.romaji}
              translation={fieldCollaboration.translation}
            />
          </div>
          {fieldCollaboration.lines.map((line, idx) => (
            <p
              key={idx}
              className={
                idx < 2
                  ? "body-editorial track-collab-lead"
                  : "body-editorial track-collab-line"
              }
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
