import { useEffect, useLayoutEffect, useRef, useState } from 'react';

type Options = {
  /** Number of tabs/steps. */
  count: number;
  /** Time on each one, in ms. */
  interval: number;
  /** Index shown first. */
  initial?: number;
};

/**
 * The "plays on its own" behaviour shared by the home dashboard and the demo tour.
 *  - Advances every `interval` ms while the observed element is on screen (>= 40% visible).
 *  - Pauses while the pointer is over, or focus is inside, the interaction area.
 *  - Ends for good when the visitor clicks inside the interaction area (or calls `choose`).
 *  - Never runs with prefers-reduced-motion, and does nothing before hydration.
 * It also tells the panels when to play their entrance animation (`armed`/`seen`): the prerendered HTML hides
 * nothing; after hydration the panels wait in their start state until the element has been on screen, and the
 * active one replays each time it becomes active. Spread `interactionProps` on the area that should pause and
 * stop the autoplay, and put `observeRef` on the element whose visibility starts it (they can be the same).
 */
export function useTabAutoplay({ count, interval, initial = 0 }: Options) {
  const observeRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(initial);
  const [autoplay, setAutoplay] = useState(true);
  const [onScreen, setOnScreen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(true); // true until known
  const [armed, setArmed] = useState(false);
  const [seen, setSeen] = useState(false);
  const running = autoplay && onScreen && !paused && !reduceMotion;

  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useLayoutEffect(() => {
    setArmed(!matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (onScreen) setSeen(true);
  }, [onScreen]);

  useEffect(() => {
    const el = observeRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setOnScreen(e.isIntersecting && e.intersectionRatio >= 0.4),
      { threshold: [0, 0.4, 0.6, 1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearTimeout(timer);
  }, [running, index, count, interval]);

  /** The visitor picked one: show it and stop the autoplay for good. */
  const choose = (i: number) => {
    setAutoplay(false);
    setIndex(i);
  };

  const interactionProps = {
    onPointerEnter: () => setPaused(true),
    onPointerLeave: () => setPaused(false),
    onClickCapture: () => setAutoplay(false),
    onFocusCapture: () => setPaused(true),
    onBlurCapture: () => setPaused(false),
  };

  /** Value for the panel's `data-anim` attribute (see "Dashboard entrance" in style.css). */
  const animState = (i: number) => (armed ? (seen && index === i ? 'play' : 'idle') : undefined);

  return { index, choose, running, observeRef, interactionProps, animState };
}
