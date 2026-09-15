import React, { useEffect } from 'react';
import { initScrollManager, destroyScrollManager } from './engine/scroll/scrollManager';
import { setupKeyboardFocusIndicator } from './utils/accessibility';

// Environmental / Visual primitives
import { GrainOverlay } from './components/common/GrainOverlay';
import { AmbientField } from './components/common/AmbientField';
import { SakuraShower } from './components/SakuraShower/SakuraShower';
import { BootSequence } from './components/BootSequence/BootSequence';
import { AmbientAudio } from './components/AmbientAudio/AmbientAudio';

// Core Navigation
import { Navigation } from './components/Navigation/Navigation';

// Content Sections (Foundational Shell)
import { Hero } from './components/Hero/Hero';
import { IkigaiOrb } from './components/IkigaiOrb/IkigaiOrb';
import { IntellectualHonesty } from './components/IntellectualHonesty/IntellectualHonesty';
import { TrackSelection } from './components/TrackSelection/TrackSelection';
import { Journey } from './components/Journey/Journey';
import { EventReveal } from './components/EventReveal/EventReveal';
import { Masthead } from './components/Masthead/Masthead';
import { Partners } from './components/Partners/Partners';
import { DateAlert } from './components/DateAlert/DateAlert';
import { FAQ } from './components/FAQ/FAQ';
import { FinalCTA } from './components/FinalCTA/FinalCTA';
import { Footer } from './components/Footer/Footer';

export function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll and GSAP ScrollTrigger sync
    const lenis = initScrollManager();

    // Enable accessible keyboard focus indicators
    const cleanupKeyboard = setupKeyboardFocusIndicator();

    return () => {
      destroyScrollManager();
      if (cleanupKeyboard) cleanupKeyboard();
    };
  }, []);

  return (
    <div className="ikigai-app-shell">
      {/* 0. Boot Sequence — ~5s intro on the philosophy of ikigai */}
      <BootSequence />

      {/* 0.5. Ambient Background Score */}
      <AmbientAudio />

      {/* 1. Global Environmental Backdrop (Washi Wash) */}
      <div className="washi-environmental-canvas" aria-hidden="true" />

      {/* 2. Procedural Film Grain Overlay */}
      <GrainOverlay />

      {/* 3. Sparse Atmospheric Mote Field */}
      <AmbientField />

      {/* 3.5. Live Cherry Blossom Shower — 桜吹雪 */}
      <SakuraShower />

      {/* 4. Global Editorial Navigation */}
      <Navigation />

      {/* 5. Main Content River */}
      <main id="main-content">
        <Hero />
        <IkigaiOrb />
        <EventReveal />
        <IntellectualHonesty />
        <TrackSelection />
        <Journey />
        <Masthead />
        <Partners />
        <DateAlert />
        <FAQ />
        <FinalCTA />
      </main>

      {/* 6. Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
