// src/components/Header.tsx
import { useEffect, useRef, useState } from "react";
import { useScrollState } from "@/hooks/useScrollState";
import { trackEvent } from "@/lib/analytics";

import logoLight from "assets/images/logo-title-light.png";
import logoDark from "assets/images/logo-title-dark.png";

const NAV = [
  { label: "About", href: "/#about", mobileOnly: false },
  { label: "Industries", href: "/#industries", mobileOnly: false },
  { label: "Partnerships", href: "/#partnerships", mobileOnly: false },
  { label: "Licensing", href: "/#licensing", mobileOnly: false },
  { label: "Contact", href: "/#contact", mobileOnly: true },
];

/**
 * Behavior required:
 * - Header slides UP (hide) as soon as the user starts scrolling (any direction).
 * - Header slides DOWN (show) only after scrolling has COMPLETELY stopped
 *   for a short idle window (no jitter when merely slowing).
 *
 * Notes:
 * - Always show near the very top to avoid rubber-band bounce issues.
 * - Keep all styling/markup exactly as in the original component.
 */
function usePinnedHeader({ topThreshold = 12, idleRevealMs = 220, microDelta = 2 } = {}) {
  const [pinned, setPinned] = useState(true);
  const lastY = useRef(0);
  const raf = useRef<number | null>(null);
  const idleTimer = useRef<number | null>(null);

  useEffect(() => {
    lastY.current = window.scrollY || 0;

    const scheduleIdleReveal = () => {
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => {
        // Reveal only after a full idle (true stop)
        setPinned(true);
      }, idleRevealMs);
    };

    const onScroll = () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const dy = y - lastY.current;
        lastY.current = y;

        // Always show near the very top (prevents bounce flicker)
        if (y <= topThreshold) {
          if (!pinned) setPinned(true);
          // Still schedule an idle reveal to keep logic consistent
          scheduleIdleReveal();
          return;
        }

        // If there is *any* real movement, immediately hide
        if (Math.abs(dy) >= microDelta) {
          if (pinned) setPinned(false); // slide up/out as soon as scrolling starts
          scheduleIdleReveal(); // and wait for complete stop to show again
          return;
        }

        // Tiny deltas: just (re)arm the idle settle
        scheduleIdleReveal();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, [pinned, topThreshold, idleRevealMs, microDelta]);

  return pinned;
}

export default function Header() {
  // Keep using this for color/blur thresholding
  const { isScrolled } = useScrollState(6, 12);

  // New behavior: hide on any scroll-start; show only after true stop
  const pinned = usePinnedHeader();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // If menu is open, keep header visible
  const isVisible = open || pinned;


  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const bg = isScrolled
    ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm"
    : "bg-transparent";
  const text = isScrolled ? "text-gray-900" : "text-white";
  const logoSrc = isScrolled ? logoDark : logoLight;
  const onNavigate = () => setOpen(false);

  return (
    <header
      ref={headerRef}
      role="banner"
      className={[
        // transform-gpu reduces paint/flicker on Safari/iOS when combined with blur
        "fixed top-0 left-0 right-0 z-50 transform-gpu transition-transform duration-300 ease-out will-change-transform",
        bg,
        isVisible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
    >
      <div className="h-[env(safe-area-inset-top)]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3">
            <img src={logoSrc} alt="AS3SIX" className="h-14 w-auto select-none" draggable={false} />
            <span className={`font-semibold ${text}`} />
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className={`hidden md:flex items-center gap-8 text-sm ${text}`}>
            {NAV.filter((i) => !i.mobileOnly).map((i) => (
              <a key={i.href} href={i.href} className="hover:opacity-80">
                {i.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className={[
                "hidden sm:inline-flex rounded-xl px-3 py-2 text-sm font-medium transition",
                isScrolled
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-white/10 text-white hover:bg-white/20",
              ].join(" ")}
              onClick={() =>
                trackEvent("cta_click", { label: "header_contact_desktop" })
              }
            >
              Contact
            </a>
            <button
              type="button"
              className={`md:hidden inline-flex items-center justify-center rounded-lg p-2 focus:outline-none focus:ring-2 ring-brand ${text}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <SvgX /> : <SvgBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={[
          "md:hidden fixed top-16 right-0 bottom-0 z-40 w-72 max-w-[85vw]",
          "transition-transform duration-300 ease-out",
          "bg-theme-dark text-white",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <ul className="px-4 py-6 space-y-2">
          {NAV.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                onClick={() => {
                  if (i.label === "Contact") {
                    trackEvent("cta_click", { label: "header_contact_mobile" });
                  }
                  onNavigate();
                }}
                className="block rounded-lg px-3 py-2 font-medium text-white/90 hover:text-white hover:bg-white/5"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      <button
        aria-hidden={!open}
        tabIndex={-1}
        className={[
          "md:hidden fixed inset-0 z-30 bg-black/30 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}

function SvgBars() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function SvgX() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
