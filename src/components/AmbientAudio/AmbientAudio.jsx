import React, { useEffect, useRef, useState } from 'react';
import './AmbientAudio.css';

/**
 * AmbientAudio
 *
 * Loops a quiet background score behind the site. Browsers block
 * unmuted autoplay, so playback begins muted, then unmutes itself
 * on the visitor's first click/keypress/touch — the same gesture
 * that skips the boot sequence. A small persistent toggle lets the
 * visitor mute it again at any time.
 */
export function AmbientAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.32;

    const unmuteOnGesture = () => {
      audio.muted = false;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    };

    // Attempt a muted autoplay immediately (browsers generally allow this).
    audio.muted = true;
    audio.play().catch(() => {});

    window.addEventListener('click', unmuteOnGesture, { once: true });
    window.addEventListener('keydown', unmuteOnGesture, { once: true });
    window.addEventListener('touchstart', unmuteOnGesture, { once: true });

    return () => {
      window.removeEventListener('click', unmuteOnGesture);
      window.removeEventListener('keydown', unmuteOnGesture);
      window.removeEventListener('touchstart', unmuteOnGesture);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/ikigai-theme.mp3" loop preload="auto" />
      <button
        type="button"
        className={`ambient-audio-toggle ${isPlaying ? 'is-playing' : ''}`}
        onClick={toggle}
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
        aria-pressed={isPlaying}
      >
        <span className="ambient-audio-bar" />
        <span className="ambient-audio-bar" />
        <span className="ambient-audio-bar" />
      </button>
    </>
  );
}

export default AmbientAudio;
