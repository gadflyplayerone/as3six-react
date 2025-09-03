import { useMemo } from "react";

import { useScrollState } from "@/hooks/useScrollState";
import logoLight from "assets/images/logo-title-light.png"
import logoDark from "assets/images/logo-title-dark.png";

export default function Header() {
  const { direction, isScrolled } = useScrollState(6, 12);

  // Show when at top or scrolling up; hide when scrolling down and already scrolled.
  const isVisible = useMemo(
    () => isScrolled || direction === "up",
    [direction, isScrolled]
  );

  const bgClass = isScrolled
    ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm"
    : "bg-transparent";

  const textClass = isScrolled ? "text-gray-900" : "text-white";
  const logoSrc = isScrolled ? logoDark : logoLight;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out will-change-transform",
        bgClass,
        isVisible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
      role="banner"
    >
      {/* Safe-area for iOS notches */}
      <div className="h-[env(safe-area-inset-top)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="AS3SIX"
              className="h-7 w-auto select-none"
              draggable={false}
            />
            <span className={`font-semibold tracking-tight ${textClass}`}></span>
          </a>

          {/* Nav (placeholder) */}
          <nav
            aria-label="Primary"
            className={`hidden md:flex items-center gap-8 text-sm ${textClass}`}
          >
            <a href="#" className="hover:opacity-80">Product</a>
            <a href="#" className="hover:opacity-80">Docs</a>
            <a href="#" className="hover:opacity-80">Pricing</a>
          </nav>

          {/* CTA (placeholder) */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className={`hidden sm:inline-flex rounded-xl px-3 py-2 text-sm font-medium transition ${
                isScrolled
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
