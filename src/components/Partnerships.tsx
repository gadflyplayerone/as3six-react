import React from "react";

type PartnershipsProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function Partnerships({
  id = "partnerships",
  title = "Partnerships",
  subtitle = "We partner with primes, air & space forces, and allied defense ecosystems to commercialize CWEC worldwide",
  className = "",
}: PartnershipsProps) {
  return (
    <section
      id={id}
      className={[
        "scroll-mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
        className,
      ].join(" ")}
      aria-label="Strategic partnerships"
    >
      {/* Header */}
      <header className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-slate-300">{subtitle}</p>
      </header>

      {/* Hero banner */}
      <div
        className={[
          "relative overflow-hidden rounded-2xl mb-10",
          "bg-white/5 border border-white/10 backdrop-blur",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_18px_40px_-16px_rgba(0,0,0,0.6)]",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-theme-light/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-24 h-64 w-64 rounded-full bg-theme-dark/25 blur-3xl" />

        <div className="relative px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-3xl">
              <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-3">
                <IconHandshake />
                Bring CWEC to market—together
              </h3>
              <p className="mt-2 text-slate-300">
                We partner with OEMs, Tier-1s, primes, coalition program offices, and strategic defense majors to
                accelerate integration, certification, and scale. Co-development, licensing, and
                reference designs available with secure collaboration paths.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Co-development", "Mission onboarding", "Export compliance alignment", "IP licensing", "Reference designs", "Manufacturing enablement"].map((b) => (
                  <span key={b} className="inline-flex items-center rounded-full bg-white/10 text-white/90 text-xs font-medium px-3 py-1 ring-1 ring-white/10">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href="mailto:contact@as3six.com?subject=CWEC%20Partnership%20Inquiry&body=Hi%20AS3SIX%20Team%2C%0A%0AWe%E2%80%99d%20like%20to%20discuss%20a%20CWEC%20partnership.%20Here%E2%80%99s%20some%20context%3A%0A"
                className="rounded-xl bg-theme-dark text-white px-4 py-2 text-sm font-medium hover:opacity-95 ring-1 ring-white/10"
              >
                Email Partnerships
              </a>
              <a
              href="/#contact"
              className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15 ring-1 ring-white/10"
            >
              Contact
            </a>
            </div>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-theme-light via-white/60 to-theme-dark opacity-90" />
      </div>

      {/* Tracks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Automotive */}
        <article className={cardBase()}>
          <header className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white">
              <IconCar />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Automotive OEM & Tier-1</h3>
              <p className="text-slate-300 text-sm">
                Retrofit or greenfield: faster coils in safety-critical mechatronics with lower thermal load.
              </p>
            </div>
          </header>
          <SectionBlock title="Sample applications">
            {[
              "ABS/ESC valves (kHz control)",
              "Injector/purge solenoids",
              "HV pack contactors",
              "Active suspension (MR)",
              "Parking brake/clutch release",
            ].map(Chip)}
          </SectionBlock>
          <SectionBlock title="Ideal partners">
            {["OEM advanced engineering", "Tier-1 valves/actuators", "Brake & chassis systems", "Power electronics"].map(Chip)}
          </SectionBlock>
          <FootAccent />
        </article>

        {/* Defense */}
        <article className={cardBase()}>
          <header className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white">
              <IconShield />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Defense & National Security</h3>
              <p className="text-slate-300 text-sm">
                Deterministic, ns-class field steps for flight-critical actuation and pulsed-power adjuncts.
              </p>
            </div>
          </header>
          <SectionBlock title="Sample applications">
            {[
              "Flight control magnetics for coalition aircraft",
              "Counter-UAS & missile defense coils",
              "Directed energy pulse conditioning",
              "Degaussing & magnetic signature control",
              "Safing/arming actuators",
              "Expeditionary radar & EW calibration tooling",
            ].map(Chip)}
          </SectionBlock>
          <SectionBlock title="Ideal partners">
            {[
              "Air & space readiness commands",
              "Defense innovation units",
              "Coalition primes & research centres",
              "Strategic ministries of defense",
              "Secure manufacturing",
            ].map(Chip)}
          </SectionBlock>
          <FootAccent />
        </article>

        {/* International */}
        <article className={cardBase()}>
          <header className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white">
              <IconGlobe />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">International Licensing & JV</h3>
              <p className="text-slate-300 text-sm">
                Regional co-investment and tech transfer to localize bill-of-materials and compliance.
              </p>
            </div>
          </header>
          <SectionBlock title="Models">
            {["Territorial licensing", "Joint venture (JV)", "Reference design kits", "Local supply enablement"].map(Chip)}
          </SectionBlock>
          <SectionBlock title="Focus regions">
            {["EU & UK", "GCC", "Japan & Korea", "India", "Australia"].map(Chip)}
          </SectionBlock>
          <FootAccent />
        </article>

        {/* Audio & Acoustics */}
        <article className={cardBase()}>
          <header className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white">
              <IconSpeaker />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Audio & Acoustics</h3>
              <p className="text-slate-300 text-sm">
                Pure-fidelity transduction and extended high-frequency response (40–60 kHz+) for next-gen sound.
              </p>
            </div>
          </header>
          <SectionBlock title="Sample applications">
            {[
              "Reference monitors & hi-fi tweeters",
              "Extended HF tweeters (40–60 kHz+)",
              "Parametric/beamforming arrays",
              "Ultrasonic UX & haptics",
              "Automotive audio transducers",
            ].map(Chip)}
          </SectionBlock>
          <SectionBlock title="Ideal partners">
            {[
              "Hi-Fi & studio monitor OEMs",
              "Pro-audio & line arrays",
              "Automotive audio Tier-1s",
              "Ultrasonic vendors",
              "Academic/industrial acoustics labs",
            ].map(Chip)}
          </SectionBlock>
          <FootAccent />
        </article>

        {/* Industrial Automation & Robotics */}
<article className={cardBase()}>
  <header className="flex items-center gap-3">
    <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white">
      <IconRobot />
    </div>
    <div>
      <h3 className="text-white font-semibold text-lg">Industrial Automation & Robotics</h3>
      <p className="text-slate-300 text-sm">
        Deterministic, high-speed actuation for conveyors, pick/pack, EOAT, and safety systems with lower thermal budgets.
      </p>
    </div>
  </header>
  <SectionBlock title="Sample applications">
    {[
      "High-speed diverter actuators",
      "Pick-and-place solenoids",
      "EOAT clamps & brakes",
      "Pneumatic valve drivers (ms-class)",
      "Machine safety interlocks",
    ].map(Chip)}
  </SectionBlock>
  <SectionBlock title="Ideal partners">
    {[
      "Robotics OEMs",
      "System integrators / line builders",
      "Sortation & AMR vendors",
      "Pneumatics / valve manufacturers",
      "PLC / motion solution providers",
    ].map(Chip)}
  </SectionBlock>
  <FootAccent />
</article>

{/* Research & Academia */}
<article className={cardBase()}>
  <header className="flex items-center gap-3">
    <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white">
      <IconLab />
    </div>
    <div>
      <h3 className="text-white font-semibold text-lg">Research & Academia</h3>
      <p className="text-slate-300 text-sm">
        Open collaboration on novel electromagnetic transduction, extended-band audio, and pulsed-power testbeds.
      </p>
    </div>
  </header>
  <SectionBlock title="Collaboration modes">
    {[
      "Sponsored research",
      "SBIR/STTR proposals",
      "Co-authored publications",
      "Open testbed access",
      "Student capstone projects",
    ].map(Chip)}
  </SectionBlock>
  <SectionBlock title="Focus areas">
    {[
      "Advanced coil topologies",
      "Driver control & DSP",
      "Ultrasonic / parametric acoustics",
      "Medical / industrial imaging",
      "High-speed mechatronics",
    ].map(Chip)}
  </SectionBlock>
  <FootAccent />
</article>

      </div>

      

      {/* How we partner */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MiniModel icon={<IconLab />} title="Co-development">
          Shared roadmap, rapid prototyping, and validation on your rigs and duty cycles.
        </MiniModel>
        <MiniModel icon={<IconKey />} title="IP Licensing">
          Field-proven designs and know-how; royalties aligned to shipped volume.
        </MiniModel>
        <MiniModel icon={<IconBlueprint />} title="Reference Designs">
          Drop-in coil modules with BOM, winding data, and driver guidance.
        </MiniModel>
        <MiniModel icon={<IconFactory />} title="Manufacturing Enablement">
          DFM/DFx, fixtures, QA, and ramp support with preferred vendors.
        </MiniModel>
      </div>

      {/* CTA Bar */}
      <div className="mt-10 relative overflow-hidden rounded-2xl bg-theme-dark text-white px-6 py-6 ring-1 ring-white/10">
        <div className="pointer-events-none absolute -top-24 right-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold">Let’s operationalize the partnership</h4>
            <p className="text-white/80 text-sm">
              Bring your platform constraints, we’ll bring CWEC designs, fixtures, and test plans.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:contact@as3six.com?subject=Partnerships%20%2F%20CWEC&body=Hi%20AS3SIX%2C%0A%0AWe%E2%80%99d%20like%20to%20discuss%20a%20partnership%20for%20%5BAutomotive%20%7C%20Defense%20%7C%20International%20%7C%20Audio%5D.%0AContext%3A%20"
              className="rounded-xl bg-white text-theme-dark px-4 py-2 text-sm font-semibold hover:opacity-95"
            >
              Email Partnerships
            </a>
            <a
              href="/#contact"
              className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15 ring-1 ring-white/10"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- small helpers ---------- */

function cardBase() {
  return [
    "group relative overflow-hidden rounded-2xl",
    "bg-white/5 border border-white/10 backdrop-blur",
    "p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_10px_25px_-10px_rgba(0,0,0,0.6)]",
    "transition-transform duration-300 hover:-translate-y-1",
  ].join(" ");
}

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <div className="text-xs uppercase tracking-wide text-white/70">{title}</div>
      <div className="mt-2 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip(label: string) {
  return (
    <span
      key={label}
      className="inline-flex items-center rounded-full bg-white/10 text-white/90 text-xs font-medium px-3 py-1 ring-1 ring-white/10"
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70 mr-1" />
      {label}
    </span>
  );
}

function FootAccent() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-theme-light via-white/60 to-theme-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  );
}

function MiniModel({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl",
        "bg-white/5 border border-white/10 backdrop-blur",
        "p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_10px_25px_-10px_rgba(0,0,0,0.6)]",
      ].join(" ")}
    >
      <div className="flex items-center gap-3 text-white">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">{icon}</div>
        <h5 className="font-semibold">{title}</h5>
      </div>
      <p className="mt-2 text-slate-300 text-sm">{children}</p>
    </div>
  );
}

/* ---------- inline icons (no extra deps) ---------- */

function IconHandshake() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M8.5 11.5l3-3a2.1 2.1 0 013 0l1 1 3-3L22 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M1.5 9L7 3.5 9.5 6m0 0l2 2M6 13l4.5 4.5a2 2 0 003 0L15 17m-1.5-1.5l1 1a2 2 0 003 0l.5-.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconCar() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M3 12l2-5h14l2 5v6h-2a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H3v-6Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 12h10" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M12 3l7 3v6c0 5-3.6 7.9-7 9-3.4-1.1-7-4-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9S9.5 5.7 12 3Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconLab() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
      <path d="M10 2v5l-6 10a3 3 0 002.6 4.5h10.8A3 3 0 0020 17L14 7V2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconKey() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
      <circle cx="8" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11 10h10l-3 3 2 2-2 2-2-2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconBlueprint() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
      <path d="M5 4h12a3 3 0 013 3v11H8a3 3 0 00-3 3V4Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 8h8M9 12h8M9 16h5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconFactory() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
      <path d="M3 21V9l6 3V9l6 3V9l6 3v9H3Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 21v-4h4v4M14 21v-4h4v4" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconSpeaker() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <rect x="6" y="3" width="12" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconRobot() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <rect x="6" y="8" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="12" r="1.2" fill="currentColor" />
      <circle cx="15" cy="12" r="1.2" fill="currentColor" />
      <path d="M12 4v3M8 18v2M16 18v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 10h2M18 10h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
