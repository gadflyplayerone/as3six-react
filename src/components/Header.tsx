// src/components/Header.tsx
import { useEffect, useMemo, useRef, useState } from "react";
// If you have "@/*" alias, switch to "@/hooks/useScrollState"
import { useScrollState } from "@/hooks/useScrollState";
import logoLight from "assets/images/logo-title-light.png";
import logoDark from "assets/images/logo-title-dark.png";

const NAV = [
  { label: "About", href: "/#about" },
  { label: "Industries",  href: "/#industries"  },
  { label: "Partnerships",  href: "/#partnerships"  },
  { label: "Licensing",  href: "/#licensing"  },
];

export default function Header() {
  const { direction, isScrolled } = useScrollState(6, 12);
  const isVisible = useMemo(() => !isScrolled || direction === "up" || direction === "none", [direction, isScrolled]);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // lock/unlock page scroll when menu is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const bg = isScrolled
    ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm"
    : "bg-transparent";
  const text = isScrolled ? "text-gray-900" : "text-white";

  const logoSrc = isScrolled ? logoDark : logoLight;

  const onNavigate = () => setOpen(false); // close drawer after clicking a link

  return (
    <header
      ref={headerRef}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out will-change-transform",
        bg,
        isVisible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
      role="banner"
    >
      <div className="h-[env(safe-area-inset-top)]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3">
            <img src={logoSrc} alt="AS3SIX" className="h-14 w-auto select-none" draggable={false} />
            <span className={`font-semibold ${text}`}></span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className={`hidden md:flex items-center gap-8 text-sm ${text}`}>
            {NAV.map((i) => (
              <a key={i.href} href={i.href} className="hover:opacity-80">
                {i.label}
              </a>
            ))}
          </nav>

          {/* Right-side actions */}
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className={[
                "hidden sm:inline-flex rounded-xl px-3 py-2 text-sm font-medium transition",
                isScrolled ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-white/10 text-white hover:bg-white/20",
              ].join(" ")}
            >
              Contact
            </a>

            {/* Mobile menu button (right aligned) */}
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

      {/* Off-canvas mobile menu (right slide-in) */}
<div
  id="mobile-menu"
  role="dialog"
  aria-modal="true"
  className={[
    "md:hidden fixed top-16 right-0 bottom-0 z-40 w-72 max-w-[85vw]",
    "transition-transform duration-300 ease-out bg-gray-900",
    // ⬇️ Always use dark header color + light text
    "bg-theme-dark/95 backdrop-blur text-white",
    open ? "translate-x-0" : "translate-x-full",
  ].join(" ")}
>
  <ul className="px-4 py-6 space-y-2 bg-gray-900">
    {NAV.map((i) => (
      <li key={i.href}>
        <a
          href={i.href}
          onClick={onNavigate}
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
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
