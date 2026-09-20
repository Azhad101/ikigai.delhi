import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Plays the Ikigai theme on a quiet loop in the background.
 * Browsers block unmuted autoplay, so we start muted, then unmute
 * automatically on the visitor's first tap/click/keypress anywhere
 * on the page. A small fixed toggle also lets them mute it back.
 */
export const BackgroundAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;
    audio.play().catch(() => {
      /* Autoplay (even muted) can still be blocked on some browsers; the
         first-interaction listener below covers that case too. */
    });

    const unlock = () => {
      audio.muted = false;
      setMuted(false);
      audio.play().catch(() => {});
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };

    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);
    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !muted;
    audio.muted = next;
    setMuted(next);
    if (!next) audio.play().catch(() => {});
  };

  return (
    <>
      <audio ref={audioRef} src="/ikigai-theme.mp3" loop muted playsInline preload="auto" />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute background music' : 'Mute background music'}
        className="fixed bottom-5 right-5 z-40 w-9 h-9 flex items-center justify-center rounded-full bg-[#1A1817]/85 text-[#F4E7C6] border border-[#F4E7C6]/25 backdrop-blur-sm hover:bg-[#A3262A] transition-colors duration-300 cursor-pointer shadow-lg"
      >
        {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </>
  );
};
