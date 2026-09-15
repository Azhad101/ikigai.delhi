import React, { useState } from 'react';
import { eventConfig } from '../../data/event';
import { JapaneseAnchor } from '../common/JapaneseAnchor';
import './DateAlert.css';

/**
 * PING ME WHEN THE DATE DROPS — 風鈴 (fūrin, the wind bell)
 *
 * Visitors leave an email address and get mailed the moment the date,
 * venue and registration link go live on the site.
 *
 * HOW THE EMAIL ACTUALLY GETS SENT
 * --------------------------------
 * A static site cannot send mail by itself. Set `eventConfig.alertFormEndpoint`
 * to a form endpoint (Formspree, Getform, Basin, or your own API) and every
 * submission lands in ikigainational@gmail.com automatically.
 * Until that endpoint is filled in, the button falls back to opening the
 * visitor's mail client with the message pre-written — nothing breaks.
 */

const STATES = {
  IDLE: 'idle',
  SENDING: 'sending',
  DONE: 'done',
  ERROR: 'error'
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function DateAlert() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(STATES.IDLE);
  const [message, setMessage] = useState('');

  const endpoint = eventConfig.alertFormEndpoint;
  const hasEndpoint = Boolean(endpoint && !endpoint.startsWith('['));

  const mailtoFallback = (address) =>
    `mailto:${eventConfig.contactEmail}` +
    `?subject=${encodeURIComponent('Ping me when the Ikigai date drops')}` +
    `&body=${encodeURIComponent(
      `Please add me to the Ikigai date-alert list.\n\nMy email: ${address}\n`
    )}`;

  const handleSubmit = async () => {
    const value = email.trim();

    if (!EMAIL_RE.test(value)) {
      setStatus(STATES.ERROR);
      setMessage('That email address does not look right. Please check it.');
      return;
    }

    if (!hasEndpoint) {
      window.location.href = mailtoFallback(value);
      setStatus(STATES.DONE);
      setMessage('Your mail app is opening — just hit send and you are on the list.');
      return;
    }

    setStatus(STATES.SENDING);
    setMessage('');

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: value,
          list: 'ikigai-date-alert',
          source: 'ikigai.delhi website',
          submittedAt: new Date().toISOString()
        })
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus(STATES.DONE);
      setMessage('You are on the list. The bell rings the second the date drops.');
      setEmail('');
    } catch (err) {
      setStatus(STATES.ERROR);
      setMessage('Could not reach our server. Please mail us directly instead.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <section className="date-alert-section" id="date-alert">
      <div className="container date-alert-container">
        <div className="date-alert-card">
          {/* ---- Left: the hanging wind bell ---- */}
          <div className="alert-bell-stage" aria-hidden="true">
            <div className="alert-bell-halo" />
            <img
              src="/assets/japanese-bell.png"
              alt=""
              className="alert-bell-img"
            />
          </div>

          {/* ---- Right: the sign-up ---- */}
          <div className="alert-copy-col">
            <div className="alert-anchor-row">
              <JapaneseAnchor kanji="風鈴" romaji="FŪRIN" translation="The Wind Bell" />
            </div>

            <span className="meta-label alert-context-tag">STAY IN THE LOOP</span>

            <h2 className="alert-title">
              PING ME WHEN THE
              <br />
              <span className="alert-title-accent">DATE DROPS</span>
            </h2>

            <p className="alert-desc">
              Dates, venue and the registration link are still being locked in. Drop your
              email and we will mail you the moment they go live on this site — one mail,
              no spam, no newsletters.
            </p>

            {status === STATES.DONE ? (
              <div className="alert-success" role="status">
                <span className="alert-success-mark">✓</span>
                <p>{message}</p>
              </div>
            ) : (
              <>
                <div className="alert-input-row">
                  <input
                    type="email"
                    className="alert-input"
                    placeholder="you@gmail.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === STATES.ERROR) setStatus(STATES.IDLE);
                    }}
                    onKeyDown={handleKeyDown}
                    aria-label="Your email address"
                    autoComplete="email"
                  />
                  <button
                    type="button"
                    className="alert-submit-btn"
                    onClick={handleSubmit}
                    disabled={status === STATES.SENDING}
                  >
                    <span>{status === STATES.SENDING ? 'SENDING…' : 'PING ME'}</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>

                {status === STATES.ERROR && (
                  <p className="alert-error" role="alert">
                    {message}{' '}
                    <a href={mailtoFallback(email.trim())}>Mail us instead →</a>
                  </p>
                )}
              </>
            )}

            <p className="alert-footnote">
              We only use your address for this one announcement. Nothing else, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
