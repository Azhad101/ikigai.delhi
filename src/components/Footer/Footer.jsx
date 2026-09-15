import React from 'react';
import { eventConfig } from '../../data/event';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-editorial">
      <div className="container footer-container">
        {/* Top Brand & Philosophy Row */}
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              IKIGAI<span className="brand-dot">.</span>DELHI
            </div>
            <div className="text-japanese footer-kanji-tag">
              {eventConfig.japaneseAnchor}
            </div>
            <div className="footer-purpose-tag">
              BUILD WHAT MATTERS.
            </div>
          </div>

          <div className="footer-nav-groups">
            {/* Direct Contact & Community Icons */}
            <div className="footer-link-group">
              <span className="meta-label footer-group-heading">CONNECT WITH US</span>

              <div className="footer-icon-row">
                <a
                  href={eventConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-link"
                  aria-label="Chat with us on WhatsApp"
                  title="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.87.505 3.628 1.383 5.145L2 22l4.99-1.354a10.03 10.03 0 0 0 5.014 1.353h.005c5.518 0 10.004-4.486 10.004-10.005C22.013 6.486 17.522 2 12.004 2zm0 18.191h-.004a8.15 8.15 0 0 1-4.155-1.138l-.298-.177-3.007.817.803-2.933-.194-.301a8.147 8.147 0 0 1-1.253-4.354c0-4.505 3.667-8.171 8.174-8.171 2.184 0 4.238.85 5.784 2.397a8.132 8.132 0 0 1 2.394 5.783c0 4.505-3.667 8.077-8.244 8.077z"/>
                  </svg>
                </a>

                <a
                  href={eventConfig.socials.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-link"
                  aria-label="Join our Discord server"
                  title="Discord"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.09-.32 13.68.099 18.213a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .079.009c.12.1.246.198.373.292a.077.077 0 0 1-.006.128c-.598.35-1.22.645-1.873.892a.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.727-3.548-13.816a.06.06 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>

                <a
                  href={eventConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-link"
                  aria-label="Follow us on Instagram"
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                </a>

                <a
                  href={`mailto:${eventConfig.contactEmail}`}
                  className="footer-icon-link"
                  aria-label="Email us"
                  title="Email"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                    <path d="M3.5 6.5 12 12.5l8.5-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                <a
                  href={eventConfig.contactPhoneHref}
                  className="footer-icon-link"
                  aria-label="Call us"
                  title="Phone"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.25 1.02z"/>
                  </svg>
                </a>
              </div>

              <div className="footer-contact-text">
                <a href={`mailto:${eventConfig.contactEmail}`} className="footer-contact-line">
                  {eventConfig.contactEmail}
                </a>
                <a href={eventConfig.contactPhoneHref} className="footer-contact-line">
                  {eventConfig.contactPhoneDisplay}
                </a>
              </div>
            </div>

            {/* Confirmed External Links */}
            <div className="footer-link-group">
              <span className="meta-label footer-group-heading">COMMUNITY & SOCIAL</span>
              <ul className="footer-link-list">
                <li>
                  <a href={eventConfig.socials.github} target="_blank" rel="noopener noreferrer" className="footer-nav-link">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={eventConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="footer-nav-link">
                    Twitter / X
                  </a>
                </li>
                {eventConfig.socials.instagram && eventConfig.socials.instagram !== '#' && (
                  <li>
                    <a href={eventConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="footer-nav-link">
                      Instagram
                    </a>
                  </li>
                )}
                {eventConfig.socials.linkedin && eventConfig.socials.linkedin !== '#' && (
                  <li>
                    <a href={eventConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="footer-nav-link">
                      LinkedIn
                    </a>
                  </li>
                )}
                <li>
                  <a href={`mailto:${eventConfig.contactEmail}`} className="footer-nav-link">
                    Email Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Edition & Logistics Meta */}
            <div className="footer-link-group">
              <span className="meta-label footer-group-heading">EDITION MANIFEST</span>
              <div className="footer-meta-stack">
                <span className="footer-meta-item">{eventConfig.edition}</span>
                <span className="footer-meta-item">{eventConfig.location}</span>
                <span className="footer-meta-item">{eventConfig.duration} Sprint</span>
                <span className="footer-meta-item" style={{ color: 'var(--color-accent-gold)' }}>Free Admission</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Craft Line */}
        <div className="footer-bottom-bar">
          <span className="footer-legal-copy">
            © {new Date().getFullYear()} IKIGAI.DELHI · ALL RIGHTS RESERVED.
          </span>
          <span className="footer-craft-copy">
            DELHI NCR · CRAFTED WITH INTENTIONAL RESTRAINT
          </span>
        </div>
      </div>
    </footer>
  );
}
