import React from "react";
// src/components/Footer.tsx

import logoLight from "assets/images/logo-title-light.png"; // optional brand mark on dark footer
import flagUSA from "assets/images/usa.svg";
import flagIsrael from "assets/images/israel.svg";
import flagNATO from "assets/images/nato.svg";
import flagUkraine from "assets/images/ukraine.svg";

type FooterProps = {
  id?: string;
  companyName?: string;
  addressLines?: string[];   // e.g., ["Detroit, MI", "United States"]
  phone?: string;            // e.g., "+1 (313) 555-0123"
  email?: string;            // e.g., "hello@yourco.com"
  className?: string;
};

export default function Footer({
  id = "footer",
  companyName = "",
  addressLines = ["Michigan", "United States"],
  phone = "+1 (202) 422-2951",
  email = "contact@as3six.com",
  className = "",
}: FooterProps) {
  const year = new Date().getFullYear();

  const companyLinks = [
    { label: "About", href: "/#about" },
    { label: "Industries", href: "/#industries" },
    { label: "Partnerships", href: "/#partnerships" },
    { label: "Licensing", href: "/#licensing" },
    { label: "Contact", href: "/#contact" },
  ];

  const legalLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ];

  return (
    <footer
      id={id}
      className={[
        "relative mt-20 border-t border-white/10 bg-theme-dark text-white",
        "ring-1 ring-inset ring-white/5",
        className,
      ].join(" ")}
    >
      {/* top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-theme-light via-white/60 to-theme-dark opacity-80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* floating glow accents */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        {/* <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" /> */}

        <div className="relative mb-10 flex flex-col items-center gap-3 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            We Shall Prevail:
          </p>
          <div className="flex items-center gap-4">
            <img src={flagUSA} alt="United States flag" className="h-6 w-auto md:h-8" loading="lazy" />
            <img src={flagIsrael} alt="Israel flag" className="h-6 w-auto md:h-8" loading="lazy" />
            <img src={flagNATO} alt="NATO flag" className="h-6 w-auto md:h-8" loading="lazy" />
            <img src={flagUkraine} alt="Ukraine flag" className="h-6 w-auto md:h-8" loading="lazy" />
          </div>
        </div>

        {/* grid */}
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand + Address */}
          <div className="space-y-4">
            <a href="/" className="inline-flex items-center gap-3">
              <img
                src={logoLight}
                alt={companyName}
                className="h-14 w-auto select-none"
                draggable={false}
              />
              <span className="text-sm font-semibold tracking-wide">{companyName}</span>
            </a>

            <address className="not-italic text-sm text-white/80">
              {addressLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              <div className="mt-2">
                <a className="hover:opacity-90" href={`tel:${cleanTel(phone)}`}>{phone}</a>
              </div>
              <div>
                <a className="hover:opacity-90" href={`mailto:${email}`}>{email}</a>
              </div>
            </address>
          </div>

          {/* Company */}
          <nav aria-label="Company" className="md:col-span-1">
            <h4 className="text-sm font-semibold tracking-wide text-white/90">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:opacity-90">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal" className="md:col-span-1">
            <h4 className="text-sm font-semibold tracking-wide text-white/90">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:opacity-90">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* About / CTA */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold tracking-wide text-white/90">About</h4>
            <p className="mt-3 text-sm text-white/80">
              CWEC unlocks step-response electromagnetic performance for coalition defense fleets, aerospace platforms, and high-duty industrial magnetics. Partner with us to commercialize across regulated and global markets.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="/#contact"
                className="rounded-lg bg-white text-theme-dark px-3 py-2 text-xs font-semibold hover:opacity-95"
              >
                Contact
              </a>
              <a
                href="mailto:contact@as3six.com?subject=Partnerships%20%2F%20CWEC"
                className="rounded-lg bg-white/10 px-3 py-2 text-xs font-medium hover:bg-white/15 ring-1 ring-white/10"
              >
                Partnerships
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="relative mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/70">
            © {year} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- helpers & icons ---------------- */

function cleanTel(t: string) {
  return t.replace(/[^\d+]/g, "");
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3.5 8.98h3v11.52h-3V8.98Zm6 0h2.88v1.58h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.62 2 3.62 4.6v6.9h-3V14.4c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v6.2h-3V8.98Z"/>
    </svg>
  );
}
function IconX() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 3h4.6l4.3 6 5-6H21l-7 8 7 10h-4.6l-4.8-6.8L6 21H3l7-8L3 3Z"/>
    </svg>
  );
}
function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56l-.02-2.2c-3.2.7-3.87-1.54-3.87-1.54a3.05 3.05 0 0 0-1.28-1.69c-1.05-.72.08-.71.08-.71a2.42 2.42 0 0 1 1.76 1.18 2.45 2.45 0 0 0 3.35.96c.05-.58.3-1.02.55-1.26-2.55-.29-5.23-1.28-5.23-5.7A4.47 4.47 0 0 1 6 6.68a4.16 4.16 0 0 1 .11-3.07s.97-.31 3.18 1.18a10.93 10.93 0 0 1 5.8 0C17.3 3.3 18.27 3.6 18.27 3.6c.23.69.35 1.42.34 2.15a4.47 4.47 0 0 1 1.19 3.1c0 4.43-2.68 5.4-5.24 5.69.36.32.68.94.68 1.9l-.02 2.81c0 .31.21.67.79.56A11.5 11.5 0 0 0 12 .5Z"/>
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23 12s0-3.4-.43-5a3 3 0 0 0-2.1-2.1C18.84 4.5 12 4.5 12 4.5s-6.84 0-8.47.4A3 3 0 0 0 1.43 7C1 8.6 1 12 1 12s0 3.4.43 5a3 3 0 0 0 2.1 2.1c1.63.4 8.47.4 8.47.4s6.84 0 8.47-.4a3 3 0 0 0 2.1-2.1c.43-1.6.43-5 .43-5ZM10 15.5v-7l6 3.5-6 3.5Z"/>
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9S9.5 5.7 12 3Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconArrowUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 19V5m0 0l-6 6m6-6l6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
