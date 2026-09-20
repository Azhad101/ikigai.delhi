import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { MinimalNav } from './components/MinimalNav';
import type { SiteRoute } from './components/MinimalNav';
import { BackgroundAudio } from './components/BackgroundAudio';
import { BootScreen } from './components/BootScreen';
import { OpenMoment } from './components/sections/OpenMoment';
import { IdeaMoment } from './components/sections/IdeaMoment';
import { FieldsMoment } from './components/sections/FieldsMoment';
import { OdysseeMoment } from './components/sections/OdysseeMoment';
import { EnterMoment } from './components/sections/EnterMoment';
import { ConvenersMoment } from './components/sections/ConvenersMoment';
import { SponsorsMoment } from './components/sections/SponsorsMoment';
import { PingMeMoment } from './components/sections/PingMeMoment';
import { SiteFooter } from './components/SiteFooter';
import { RegisterPage } from './components/RegisterPage';
import { initSmoothScroll, scrollToElement, scrollToTop } from './lib/scroll';
import { useScrollReveal } from './lib/useScrollReveal';

/** How long the outgoing page takes to dissolve (matches .page-shell in index.css). */
const LEAVE_MS = 280;

const readRoute = (): SiteRoute => {
  if (typeof window === 'undefined') return 'home';
  const { pathname, hash } = window.location;
  return pathname === '/register' || pathname.endsWith('/register') || hash === '#register'
    ? 'register'
    : 'home';
};

const writeRoute = (route: SiteRoute) => {
  try {
    window.history.pushState({}, '', route === 'register' ? '/register' : '/');
  } catch {
    window.location.hash = route === 'register' ? 'register' : '';
  }
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface TransitionOptions {
  /** Update the address bar (skip for back/forward, where the URL already changed). */
  push?: boolean;
  /** When landing on home, return to where the visitor left off instead of the top. */
  restore?: boolean;
}

export function App() {
  const [route, setRoute] = useState<SiteRoute>(readRoute);
  const [leaving, setLeaving] = useState(false);

  const routeRef = useRef<SiteRoute>(route);
  const busyRef = useRef(false);
  const homeScrollRef = useRef(0);
  const restoreRef = useRef<number | null>(null);
  const timerRef = useRef<number | undefined>(undefined);

  /**
   * Dissolve the current page, swap the route while it is invisible,
   * put the scroll position where it belongs, and let the new page settle in.
   * The header and background stay put the whole time.
   */
  const transitionTo = useCallback((next: SiteRoute, options: TransitionOptions = {}) => {
    if (busyRef.current || next === routeRef.current) return;
    busyRef.current = true;

    if (routeRef.current === 'home') homeScrollRef.current = window.scrollY;
    if (options.push) writeRoute(next);

    setLeaving(true);
    timerRef.current = window.setTimeout(
      () => {
        routeRef.current = next;
        restoreRef.current = next === 'home' && options.restore ? homeScrollRef.current : 0;
        busyRef.current = false;
        setRoute(next);
        setLeaving(false);
      },
      prefersReducedMotion() ? 0 : LEAVE_MS,
    );
  }, []);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  // We manage scroll ourselves so back/forward never causes a visible jump.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Browser back / forward flows through the same soft transition.
  useEffect(() => {
    const sync = () => {
      const wanted = readRoute();
      if (wanted !== routeRef.current) transitionTo(wanted, { restore: true });
    };
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, [transitionTo]);

  // If back/forward happened mid-transition, catch up once it settles.
  useEffect(() => {
    if (leaving) return;
    const wanted = readRoute();
    if (wanted !== route) transitionTo(wanted, { restore: true });
  }, [route, leaving, transitionTo]);

  // Runs before the new page is painted, so the visitor never sees a jump.
  useLayoutEffect(() => {
    const y = restoreRef.current;
    if (y === null) return;
    restoreRef.current = null;
    window.scrollTo({ top: y, left: 0, behavior: 'instant' });
  }, [route]);

  // Fresh smooth-scroll engine per page, so it always measures the page it is on.
  useEffect(() => {
    return initSmoothScroll();
  }, [route]);

  useScrollReveal(route === 'home');

  const goToRegister = () => transitionTo('register', { push: true });
  const goHome = (restore: boolean) => transitionTo('home', { push: true, restore });

  const handleBrandClick = () => {
    if (route === 'home') scrollToTop();
    else goHome(false);
  };

  const handleNavAction = () => {
    if (route === 'register') {
      goHome(true);
      return;
    }
    const enter = document.getElementById('enter');
    if (enter) scrollToElement(enter);
    else goToRegister();
  };

  return (
    <div className="relative min-h-svh selection:bg-[#A3262A] selection:text-[#F4E7C6]">
      <BootScreen />
      <BackgroundAudio />
      <MinimalNav
        route={route}
        onBrandClick={handleBrandClick}
        onActionClick={handleNavAction}
      />

      <div key={route} className="page-shell page-enter" data-leaving={leaving ? 'true' : 'false'}>
        {route === 'register' ? (
          <RegisterPage onBackToHome={() => goHome(true)} />
        ) : (
          <main className="relative w-full">
            <OpenMoment />
            <IdeaMoment />
            <FieldsMoment />
            <OdysseeMoment />
            <EnterMoment onEnterClick={goToRegister} />
            <ConvenersMoment />
            <SponsorsMoment />
            <PingMeMoment />
            <SiteFooter />
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
