import React, { useState, useEffect } from 'react';
import { eventConfig } from '../../data/event';
import './Navigation.css';

const NAV_LINKS = [
  { id: 'journey', label: 'JOURNEY', href: '#journey' },
  { id: 'event', label: 'EVENT', href: '#event' },
  { id: 'partners', label: 'PARTNERS', href: '#partners' },
  { id: 'faq', label: 'FAQ', href: '#faq' }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('journey');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <header className={`nav-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Left Brand */}
        <a href="#hero" className="nav-brand" aria-label="Ikigai.delhi Home">
          <span className="nav-brand-title-wrap">
            <img
              src="/branding/ikigai-stamp-logo.png"
              alt=""
              aria-hidden="true"
              className="nav-brand-seal"
            />
            <span className="nav-brand-title">
              IKIGAI<span className="nav-brand-dot">.</span>DELHI
            </span>
          </span>
          <span className="nav-brand-kanji" aria-hidden="true">
            {eventConfig.japaneseAnchor}
          </span>
        </a>

        {/* Center Desktop Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-menu-desktop">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="nav-actions">
          <a
            href={eventConfig.registrationUrl}
            className="nav-cta-btn"
            aria-label="Register for Ikigai.delhi"
          >
            <span>REGISTER</span>
          </a>

          <button
            type="button"
            className={`nav-mobile-toggle ${mobileOpen ? 'is-open' : ''}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`nav-mobile-overlay ${mobileOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="container">
          <ul className="nav-menu-mobile">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link-mobile ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
