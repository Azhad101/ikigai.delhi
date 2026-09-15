import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { isReducedMotion } from '../../engine/motion/motionTokens';
import './BootSequence.css';

/**
 * BootSequence
 *
 * A brief (~5s), skippable intro that stages the philosophy of ikigai
 * before the site reveals itself: the four converging questions —
 * LOVE, SKILL, NEED, REWARD — resolving into 生き甲斐 (ikigai) itself.
 *
 * Respects prefers-reduced-motion by skipping straight to the site.
 * Any click or keypress fast-forwards the sequence.
 */
export function BootSequence() {
  const [booted, setBooted] = useState(false);
  const overlayRef = useRef(null);
  const dotRef = useRef(null);
  const loveRef = useRef(null);
  const skillRef = useRef(null);
  const needRef = useRef(null);
  const rewardRef = useRef(null);
  const kanjiRef = useRef(null);
  const wordmarkRef = useRef(null);
  const taglineRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion()) {
      setBooted(true);
      return;
    }

    document.body.classList.add('boot-lock');

    const finish = () => {
      document.body.classList.remove('boot-lock');
      setBooted(true);
    };

    const words = [loveRef.current, skillRef.current, needRef.current, rewardRef.current];

    const tl = gsap.timeline({ onComplete: finish });
    timelineRef.current = tl;

    gsap.set(words, { opacity: 0, scale: 0.9, y: 8 });
    gsap.set(dotRef.current, { opacity: 0, scale: 0 });
    gsap.set([kanjiRef.current, wordmarkRef.current, taglineRef.current], { opacity: 0, y: 10 });

    tl.to(dotRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }, 0)
      .to(loveRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power2.out' }, 0.15)
      .to(skillRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power2.out' }, 0.35)
      .to(needRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power2.out' }, 0.55)
      .to(rewardRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power2.out' }, 0.75)
      .to([...words, dotRef.current], { opacity: 0, scale: 0.4, duration: 0.5, ease: 'power2.in' }, 1.9)
      .to(kanjiRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' }, 2.1)
      .to(wordmarkRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 2.5)
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 2.75)
      .to(overlayRef.current, { opacity: 0, duration: 0.6, ease: 'power2.inOut' }, 4.3);

    const skip = () => {
      if (timelineRef.current) {
        timelineRef.current.timeScale(8);
      }
    };

    window.addEventListener('click', skip, { once: true });
    window.addEventListener('keydown', skip, { once: true });

    return () => {
      window.removeEventListener('click', skip);
      window.removeEventListener('keydown', skip);
      tl.kill();
      document.body.classList.remove('boot-lock');
    };
  }, []);

  if (booted) return null;

  return (
    <div className="boot-sequence" ref={overlayRef} role="presentation" aria-hidden="true">
      <div className="boot-inner">
        <div className="boot-compass">
          <span className="boot-word boot-word-love" ref={loveRef}>LOVE · 愛</span>
          <span className="boot-word boot-word-skill" ref={skillRef}>SKILL · 技</span>
          <span className="boot-word boot-word-need" ref={needRef}>NEED · 要</span>
          <span className="boot-word boot-word-reward" ref={rewardRef}>REWARD · 報</span>
          <span className="boot-center-dot" ref={dotRef} />
        </div>

        <div className="boot-resolve">
          <span className="boot-kanji" ref={kanjiRef}>生き甲斐</span>
          <span className="boot-wordmark" ref={wordmarkRef}>IKIGAI</span>
          <span className="boot-tagline" ref={taglineRef}>Find what drives you.</span>
        </div>
      </div>
    </div>
  );
}

export default BootSequence;
