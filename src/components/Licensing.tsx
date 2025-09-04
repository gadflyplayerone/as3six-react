import React, { useMemo, useState } from "react";

type LicensingProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
};

/** ----------------------------------------------------------------
 *  Illustrative pricing model
 *  - Size bands map to typical coil envelopes (OD guidance)
 *  - Base per-unit license fee scales up with size
 *  - Royalty % scales down with size (economies of scale)
 *  - Volume discounts reduce per-unit license fee
 *  NOTE: These values are placeholders for web copy. Final pricing is SOW-based.
 *-----------------------------------------------------------------*/
type SizeBand = {
  key: "A" | "B" | "C" | "D" | "E";
  name: string;
  odHint: string;      // outer diameter guidance
  baseLicenseUSD: number; // base license $/unit before volume discount
  royaltyPct: number;     // % of electromagnet ASP, indicative
  icon?: React.ReactNode;
};

const BANDS: SizeBand[] = [
  { key: "A", name: "Micro",     odHint: "< 20 mm OD",  baseLicenseUSD: 0.40, royaltyPct: 2.0, icon: <IconDot /> },
  { key: "B", name: "Small",     odHint: "20–40 mm OD", baseLicenseUSD: 0.90, royaltyPct: 1.8, icon: <IconDot /> },
  { key: "C", name: "Medium",    odHint: "40–70 mm OD", baseLicenseUSD: 1.50, royaltyPct: 1.6, icon: <IconDot /> },
  { key: "D", name: "Large",     odHint: "70–120 mm OD",baseLicenseUSD: 2.50, royaltyPct: 1.4, icon: <IconDot /> },
  { key: "E", name: "Heavy",     odHint: "> 120 mm OD", baseLicenseUSD: 4.00, royaltyPct: 1.2, icon: <IconDot /> },
];

function volumeDiscount(volume: number) {
  // simple, easy-to-explain bands (illustrative)
  if (volume >= 1_000_000) return 0.40;
  if (volume >= 500_000)   return 0.30;
  if (volume >= 200_000)   return 0.20;
  if (volume >= 50_000)    return 0.10;
  return 0.00;
}

export default function Licensing({
  id = "licensing",
  title = "Licensing",
  subtitle = "Flexible commercialization—license CWEC for your electromagnets with size-based pricing and volume breaks",
  className = "",
}: LicensingProps) {
  const [bandIndex, setBandIndex] = useState(2);     // default "Medium"
  const [volume, setVolume] = useState(100_000);     // units per year (illustrative)
  const [asp, setAsp]       = useState(25);          // avg selling price of the electromagnet ($)

  const band = BANDS[bandIndex];
  const discount = volumeDiscount(volume);

  const licensePerUnit = useMemo(() => {
    return +(band.baseLicenseUSD * (1 - discount)).toFixed(2);
  }, [band.baseLicenseUSD, discount]);

  const royaltyPerUnit = useMemo(() => {
    return +((asp * band.royaltyPct) / 100).toFixed(2);
  }, [asp, band.royaltyPct]);

  const estAnnual = useMemo(() => {
    const total = volume * (licensePerUnit + royaltyPerUnit);
    return Math.round(total);
  }, [volume, licensePerUnit, royaltyPerUnit]);

  return (
    <section
      id={id}
      className={[
        "scroll-mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
        className,
      ].join(" ")}
      aria-label="Licensing and pricing"
    >
      {/* Header */}
      <header className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-slate-300">{subtitle}</p>
      </header>

      {/* Hero narrative */}
      <div
        className={[
          "relative overflow-hidden rounded-2xl mb-8",
          "bg-white/5 border border-white/10 backdrop-blur",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_18px_40px_-16px_rgba(0,0,0,0.6)]",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-theme-light/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-theme-dark/25 blur-3xl" />
        <div className="relative px-6 py-7 md:px-10 md:py-9">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-3xl">
              <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-3">
                <IconLicense />
                License CWEC into your magnets
              </h3>
              <p className="mt-2 text-slate-300">
                We align incentives via simple, transparent economics: a size-based per-unit license
                plus a light royalty on your electromagnet ASP. Scale wins get volume discounts.
                Reference designs and enablement reduce your time-to-value.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Size-based pricing", "Volume discounts", "Reference designs", "Manufacturing enablement"].map((b) => (
                  <span key={b} className="inline-flex items-center rounded-full bg-white/10 text-white/90 text-xs font-medium px-3 py-1 ring-1 ring-white/10">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70 mr-1" />
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <a
                href="mailto:zach@as3six.com?subject=CWEC%20Licensing%20Inquiry&body=Hi%20AS3SIX%2C%0A%0AWe%E2%80%99d%20like%20to%20license%20CWEC%20for%20our%20electromagnets.%20Context%20%28use%20cases%2C%20sizes%2C%20volumes%29%3A%0A"
                className="rounded-xl bg-theme-dark text-white px-4 py-2 text-sm font-medium hover:opacity-95 ring-1 ring-white/10"
              >
                Email Licensing
              </a>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-theme-light via-white/60 to-theme-dark opacity-90" />
      </div>

      {/* Calculator + Bands */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interactive Calculator */}
        <div
          className={[
            "relative overflow-hidden rounded-2xl lg:col-span-2",
            "bg-white/5 border border-white/10 backdrop-blur",
            "p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_10px_25px_-10px_rgba(0,0,0,0.6)]",
          ].join(" ")}
        >
          <h4 className="text-white font-semibold text-lg flex items-center gap-2">
            <IconCalculator /> Pricing Calculator <span className="ml-2 text-xs text-white/60">(illustrative)</span>
          </h4>

          {/* Size selector */}
          <div className="mt-5">
            <label className="flex items-center justify-between text-sm text-white/90">
              <span>Electromagnet size band</span>
              <span className="font-medium">{band.name} <span className="text-white/60">({band.odHint})</span></span>
            </label>
            <input
              type="range"
              min={0}
              max={BANDS.length - 1}
              value={bandIndex}
              onChange={(e) => setBandIndex(Number(e.target.value))}
              className="mt-2 w-full accent-white"
            />
            <div className="mt-2 grid grid-cols-5 text-[10px] text-white/60">
              {BANDS.map((b) => (
                <div key={b.key} className="text-center">{b.key}</div>
              ))}
            </div>
          </div>

          {/* Volume selector */}
          <div className="mt-5">
            <label className="flex items-center justify-between text-sm text-white/90">
              <span>Annual volume (units)</span>
              <span className="font-medium">{volume.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min={1000}
              max={1_000_000}
              step={1000}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="mt-2 w-full accent-white"
            />
            <div className="mt-2 flex justify-between text-[10px] text-white/60">
              <span>1k</span><span>50k</span><span>200k</span><span>500k</span><span>1M</span>
            </div>
          </div>

          {/* ASP selector */}
          <div className="mt-5">
            <label className="flex items-center justify-between text-sm text-white/90">
              <span>Electromagnet ASP (US$)</span>
              <span className="font-medium">${asp.toFixed(2)}</span>
            </label>
            <input
              type="range"
              min={5}
              max={150}
              step={1}
              value={asp}
              onChange={(e) => setAsp(Number(e.target.value))}
              className="mt-2 w-full accent-white"
            />
            <div className="mt-2 flex justify-between text-[10px] text-white/60">
              <span>$5</span><span>$25</span><span>$75</span><span>$120</span><span>$150</span>
            </div>
          </div>

          {/* Results */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Metric
              title="Per-unit license (after volume discount)"
              value={`$${licensePerUnit.toFixed(2)}`}
              foot={`Base $${band.baseLicenseUSD.toFixed(2)} • Discount ${(discount * 100).toFixed(0)}%`}
            />
            <Metric
              title="Per-unit royalty (indicative)"
              value={`$${royaltyPerUnit.toFixed(2)}`}
              foot={`${band.royaltyPct.toFixed(1)}% of ASP`}
            />
            <Metric
              title="Est. annual licensing"
              value={`$${estAnnual.toLocaleString()}`}
              foot={`${volume.toLocaleString()} units • ASP $${asp.toFixed(2)}`}
              highlight
            />
          </div>

          <p className="mt-4 text-xs text-white/60">
            Figures shown are <span className="font-medium text-white/80">illustrative</span> and subject to commercial agreement. Final pricing varies by
            design complexity, duty cycle, regulatory scope, and support model.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 gap-6">
          <ProgramCard
            name="Reference Design Kit"
            price="from $15k NRE"
            bullets={[
              "Design files, BOM, winding data",
              "Driver guidance & test plans",
              "Email support / office hours",
            ]}
            badge="Fastest start"
          />
          <ProgramCard
            name="Co-Development"
            price="from $60k NRE"
            bullets={[
              "Joint proto & validation on your rigs",
              "Performance tuning & EMI hygiene",
              "DFM/DFx + manufacturing handoff",
            ]}
            badge="Most popular"
          />
          <ProgramCard
            name="Enterprise Enablement"
            price="from $150k NRE"
            bullets={[
              "On-site bring-up & qualification",
              "Secure supply & QA fixtures",
              "Multi-platform rollout playbook",
            ]}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 relative overflow-hidden rounded-2xl bg-theme-dark text-white px-6 py-6 ring-1 ring-white/10">
        <div className="pointer-events-none absolute -top-24 right-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold">Ready to model your program?</h4>
            <p className="text-white/80 text-sm">
              Share your coil envelopes, volumes, and environments—we’ll turn around a tailored quote.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:zach@as3six.com?subject=CWEC%20Licensing%20Model&body=Coil%20sizes%2FOD%2C%20volumes%2C%20duty%20cycles%2C%20and%20target%20costs%3A%0A"
              className="rounded-xl bg-white text-theme-dark px-4 py-2 text-sm font-semibold hover:opacity-95"
            >
              Email Licensing
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

/* ---------- subcomponents ---------- */

function Metric({
  title,
  value,
  foot,
  highlight,
}: {
  title: string;
  value: string;
  foot?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl p-4 border backdrop-blur",
        highlight
          ? "bg-white/10 border-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          : "bg-white/5  border-white/10 text-white/90",
      ].join(" ")}
    >
      <div className="text-xs uppercase tracking-wide text-white/70">{title}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      {foot && <div className="mt-1 text-xs text-white/60">{foot}</div>}
    </div>
  );
}

function ProgramCard({
  name,
  price,
  bullets,
  badge,
}: {
  name: string;
  price: string;
  bullets: string[];
  badge?: string;
}) {
  return (
    <article
      className={[
        "relative overflow-hidden rounded-2xl",
        "bg-white/5 border border-white/10 backdrop-blur",
        "p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_10px_25px_-10px_rgba(0,0,0,0.6)]",
      ].join(" ")}
    >
      {badge && (
        <span className="absolute top-3 right-3 rounded-full bg-white/10 px-2 py-[2px] text-[10px] font-semibold ring-1 ring-white/15">
          {badge}
        </span>
      )}
      <h5 className="text-lg font-semibold">{name}</h5>
      <div className="mt-1 text-sm text-white/80">{price}</div>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ---------- inline icons (no deps) ---------- */

function IconLicense() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
      <path d="M6 4h12a2 2 0 0 1 2 2v13H8a3 3 0 0 0-3 3V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 8h8M9 12h8M9 16h5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconCalculator() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 7h8M8 12h2m4 0h2M8 16h2m4 0h2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconDot() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
