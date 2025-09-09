// src/hooks/useScrollState.ts
import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "none";
interface ScrollState { direction: Direction; offset: number; isScrolled: boolean; }

/**
 * Hysteresis-based scroll state with idle settle to prevent jitter.
 * - Small deltas are ignored.
 * - After scrolling stops for IDLE_REVEAL_MS, we force direction="up" (reveal).
 */
export function useScrollState(
  THRESHOLD_PX = 8,     // ignore micro-jitter
  SCROLLED_AT = 16,     // when to consider the page "scrolled"
) : ScrollState {
  const [state, setState] = useState<ScrollState>({
    direction: "none",
    offset: 0,
    isScrolled: false,
  });

  const lastY = useRef<number>(0);
  const rafTick = useRef<boolean>(false);

  // Hysteresis baselines
  const baseDownY = useRef<number>(0); // start of a down run
  const baseUpY   = useRef<number>(0); // start of an up run
  const lastDir   = useRef<Direction>("none");

  // Idle settle to reveal after scroll stops
  const idleTimer = useRef<number | null>(null);
  const IDLE_REVEAL_MS = 180;            // key to remove end-of-scroll jitter
  const HIDE_AFTER_DOWN_DELTA = 14;      // need this much down-run to consider “hide”
  const SHOW_AFTER_UP_DELTA   = 6;       // need this much up-run to consider “show”

  useEffect(() => {
    lastY.current = window.scrollY || window.pageYOffset || 0;
    baseDownY.current = lastY.current;
    baseUpY.current = lastY.current;

    const onScroll = () => {
      const curY = window.scrollY || window.pageYOffset || 0;
      const delta = curY - lastY.current;

      // Debounce tiny movement noise
      if (Math.abs(delta) < THRESHOLD_PX) {
        scheduleIdleReveal();
        return;
      }

      // Direction inference with hysteresis baselines
      const nextDir: Direction = delta > 0 ? "down" : "up";

      // Reset baseline when direction flips
      if (nextDir !== lastDir.current) {
        if (nextDir === "down") baseDownY.current = curY;
        if (nextDir === "up")   baseUpY.current   = curY;
        lastDir.current = nextDir;
      }

      // Run-only updates in rAF to avoid layout thrash
      if (!rafTick.current) {
        window.requestAnimationFrame(() => {
          const downRun = curY - baseDownY.current;
          const upRun   = baseUpY.current - curY;

          // Decide “effective direction” using hysteresis
          let effectiveDir: Direction = state.direction;
          if (nextDir === "down" && downRun >= HIDE_AFTER_DOWN_DELTA) {
            effectiveDir = "down";
          } else if (nextDir === "up" && upRun >= SHOW_AFTER_UP_DELTA) {
            effectiveDir = "up";
          }

          setState({
            direction: effectiveDir,
            offset: curY,
            isScrolled: curY > SCROLLED_AT,
          });

          rafTick.current = false;
        });
        rafTick.current = true;
      }

      lastY.current = curY;
      scheduleIdleReveal();
    };

    const scheduleIdleReveal = () => {
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => {
        // Force “reveal” after scrolling stops – kills settle jitter
        setState(prev => ({
          direction: "up",
          offset: window.scrollY || window.pageYOffset || 0,
          isScrolled: (window.scrollY || window.pageYOffset || 0) > SCROLLED_AT,
        }));
      }, IDLE_REVEAL_MS);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}