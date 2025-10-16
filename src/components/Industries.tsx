import React from "react";

type Industry = {
  name: string;
  blurb: string;
  apps: string[];
  icon?: React.ReactNode;
};

type IndustriesProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  items?: Industry[];
  className?: string;
};

const defaultItems: Industry[] = [
  {
    name: "Automotive & Mobility",
    blurb:
      "Slash actuation latency across safety-critical mechatronics; retrofit legacy coils without re-architecting platforms.",
    apps: [
      "kHz ABS/ESC hydraulic valves with lower hold current",
      "Injector & purge solenoids w/ faster pintle control",
      "Active suspension (MR valves) high-bandwidth fielding",
      "Motor/actuator brakes & clutches with rapid release",
      "HV contactors for EV pack isolation with minimal bounce",
      "EMI damping coils & transient suppression on power rails"
    ],
    icon: <IconCar />,
  },
  {
    name: "Aerospace & Defense",
    blurb:
      "Decision-grade field control: fast pulsed power, flight-critical actuators, and resilient EMI/EMP countermeasures.",
    apps: [
      "Pulsed power gating & crowbar coils (ns-class turn-on)",
      "High-G fuze/pyro safing coils with precise timing",
      "EM armor/active EMI shielding field generators",
      "Missile fin/valve actuation at high duty cycles",
      "Fast degaussing/tuning coils in seekers & radomes",
      "Rail/coilgun research fixtures & range diagnostics"
    ],
    icon: <IconAero />,
  },
  {
    name: "Space Systems",
    blurb:
      "Field agility for on-orbit control and survivability with mass-efficient coils.",
    apps: [
      "Magnetorquer attitude control with sharper steps",
      "Reaction wheel magnetic brakes w/ micro-slew control",
      "Thruster valve solenoids at high pulse cadence",
      "Radiation/EMP event field shaping for payload protection",
      "Deployable latch releases with deterministic timing",
      "On-orbit experiments needing fast B-field changes"
    ],
    icon: <IconSpace />,
  },
  {
    name: "Audio & Acoustics",
    blurb: "Ultra-clean transduction for pure-fidelity and extended high-frequency systems.",
    apps: [
      "Reference Monitors",
      "Hi-Fi Tweeters (40–60 kHz)",
      "Parametric/Beamforming Arrays",
      "Ultrasonic UX / Haptics",
      "NDT / Imaging",
      "Acoustic Sensing"
    ],
    icon: <IconWave />,
  },
  {
    name: "Fusion & Plasma",
    blurb:
      "Rapid B-field adjustments for stability windows, ELM pacing, and diagnostic coils.",
    apps: [
      "Edge localized mode (ELM) pacing coils",
      "Fast trim/strike-point control coils",
      "Probe/diagnostic excitation (ns gating)",
      "Neutral beamline shutter/valve actuation",
      "Active MHD suppression experiments",
      "Retrofit of classical trim coils to CWEC topology"
    ],
    icon: <IconAtom />,
  },
  {
    name: "Particle Accelerators",
    blurb:
      "Precise, low-latency magnetic elements to sharpen beam steering and timing.",
    apps: [
      "Kicker/septum auxiliary trigger coils",
      "Corrector & trim coils with reduced settling",
      "Fast chopper apertures & shutters",
      "Beamline valve interlocks with deterministic timing",
      "Magnet cycling experiments with reduced EMI",
      "Retrofits for test stands and diagnostics"
    ],
    icon: <IconAccelerator />,
  },
  {
    name: "Power & Energy",
    blurb:
      "Grid-scale responsiveness: protection, isolation, and fast magnetic devices with less thermal penalty.",
    apps: [
      "Solid-state breaker assist coils (fault clearing)",
      "Transformer inrush pre-magnetization control",
      "HVDC valve auxiliary fast coils",
      "Switchgear trip/close coils at high duty",
      "Active EMI chokes with higher effective bandwidth",
      "Fast saturable reactor research fixtures"
    ],
    icon: <IconPower />,
  },
  {
    name: "Industrial Automation",
    blurb:
      "Higher takt time and tighter control loops across lines, tools, and material handling.",
    apps: [
      "Pick-and-place magnetic grippers w/ high pulse rate",
      "Pneumatic valve islands with kHz solenoid drive",
      "Machine safety brakes with faster release/engage",
      "Laser shutter & beam-dump actuation (ns-μs)",
      "Vibration isolation using fast magnetic actuators",
      "Magnetic clamping with energy-aware hold"
    ],
    icon: <IconFactory />,
  },
  {
    name: "Robotics",
    blurb:
      "Tunable compliance and impulse delivery using field-responsive elements.",
    apps: [
      "Series-elastic brakes with rapid torque modulation",
      "End-effector quick-release and micro-grip coils",
      "Soft-robot MR fluid valves with high bandwidth",
      "Cable-drive tensioning clamps (micro-pulsed)",
      "Legged robot foot actuator de-bounce",
      "On-arm EMI suppression for high-power tools"
    ],
    icon: <IconRobot />,
  },
  {
    name: "Medical Devices",
    blurb:
      "Cleaner transients in patient-proximate actuation; better imaging adjuncts.",
    apps: [
      "Ventilator/infusion valve blocks at high cadence",
      "MRI non-imaging service coils (room systems) with reduced EMI",
      "Surgical instrument locks/latches with precise timing",
      "Disposable pump solenoids at low thermal load",
      "Radiotherapy beamline auxiliaries",
      "Lab automation valve arrays (microfluidics)"
    ],
    icon: <IconHeart />,
  },
  {
    name: "Semiconductor & Precision Tools",
    blurb:
      "Micro-second tool state changes to protect yield and boost throughput.",
    apps: [
      "EUV/DUV shutter and aperture actuation",
      "Vacuum valve pulse control with low outgassing",
      "Reticle/clamp emergency release coils",
      "Ion implanter beamline accessories",
      "Degauss/field-null coils for metrology",
      "Active EMI damping on motion stages"
    ],
    icon: <IconChip />,
  },
  {
    name: "Telecom & RF",
    blurb:
      "Fast coil behavior for tunable elements, relays, and EMI hygiene across radios and base stations.",
    apps: [
      "High-speed RF relay/transfer switches (coil side)",
      "Tunable matching network auxiliaries",
      "Filter bank selection with reduced coil delay",
      "Active EMI notch injection coils",
      "Tower power system contactors",
      "Remote radio head valve/actuator control"
    ],
    icon: <IconAntenna />,
  },
  {
    name: "Audio & Acoustics",
    blurb:
      "Higher-fidelity electromagnetic transducers and test fixtures.",
    apps: [
      "High-bandwidth voice-coil prototypes",
      "Studio monitor protection relays (silent, fast)",
      "Micro-shutters in measurement rigs",
      "Magnetic damping fixtures for acoustics labs",
      "Transducer end-of-line test coils",
      "Anti-pop muting relays with clean edges"
    ],
    icon: <IconWave />,
  },
  {
    name: "Retail & Consumer Devices",
    blurb:
      "Lower power, snappier actuation, and quieter operation in compact form factors.",
    apps: [
      "Lock/latched mechanisms in smart home devices",
      "Appliance valves (water/gas) with low heat rise",
      "Camera shutter/iris solenoids",
      "Haptic actuators using fast magnetic pulses",
      "E-bike/e-scooter brake & lock coils",
      "Battery protection contactor actuation"
    ],
    icon: <IconTag />,
  },
  {
    name: "Logistics & Warehousing",
    blurb:
      "Dense actuation arrays for high-throughput sortation and packing.",
    apps: [
      "Diverter gates & pop-up wheel modules",
      "Air logic valve arrays (cartons, flats, poly bags)",
      "AGV/AMR brake and latch coils",
      "Labeler/coder applicator trigger coils",
      "Conveyor release locks (micro-timed)",
      "Dock lock actuation under harsh EMI"
    ],
    icon: <IconTruck />,
  },
  {
    name: "Rail & Marine",
    blurb:
      "Harsh-environment actuation with deterministic timing.",
    apps: [
      "Brake control valve solenoids at high duty",
      "Point/switch machine assist coils",
      "Ballast water valve blocks (marine compliance)",
      "Winch/clutch magnetic releases",
      "EMI hardening coils for navigation racks",
      "Emergency trip coils with fast reset"
    ],
    icon: <IconShip />,
  },
  {
    name: "Agriculture",
    blurb:
      "Pulse-dense control for precision application and autonomy.",
    apps: [
      "Sprayer and seeder valve arrays (high pulse rate)",
      "Implement clutch/brake actuation",
      "Grain handling gates & diverters",
      "UAV sprayer valve blocks",
      "Electro-weeding pulsed coil fixtures (research)",
      "Equipment EMI damping around GNSS/RTK"
    ],
    icon: <IconLeaf />,
  },
  {
    name: "Security & Built Environment",
    blurb:
      "Quiet, efficient locks and field-based mitigation in sensitive facilities.",
    apps: [
      "Maglocks with lower steady-state draw",
      "Turnstile release coils (quiet actuation)",
      "EMI field cancellation near SCIF perimeters",
      "Fire-life safety damper actuation",
      "Blast/door latch quick-release mechanisms",
      "Elevator brake release coils"
    ],
    icon: <IconShield />,
  }
];

export default function Industries({
  id = "industries",
  title = "Industries",
  subtitle = "Where we drive impact end-to-end",
  items = defaultItems,
  className = "",
}: IndustriesProps) {
  return (
    <section
      id={id}
      className={[
        "scroll-mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
        className,
      ].join(" ")}
    >
      <header className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-slate-300">{subtitle}</p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <article
            key={i}
            className={[
              "group relative overflow-hidden rounded-2xl",
              "bg-white/5 backdrop-blur border border-white/10",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_10px_25px_-10px_rgba(0,0,0,0.6)]",
              "transition-transform duration-300 hover:-translate-y-1",
            ].join(" ")}
          >
            {/* Corner gradient accent */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-theme-light/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-theme-dark/25 blur-3xl" />

            <div className="relative p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white">
                  {it.icon ?? <IconSpark />}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{it.name}</h3>
                  <p className="text-slate-300 text-sm">{it.blurb}</p>
                </div>
              </div>

              {/* Applications */}
              <div className="mt-4 flex flex-wrap gap-2">
                {it.apps.map((a, j) => (
                  <span
                    key={j}
                    className={[
                      "inline-flex items-center gap-1 rounded-full px-3 py-1",
                      "text-xs font-medium",
                      "bg-white/10 text-white/90",
                      "ring-1 ring-white/10",
                      "transition-colors group-hover:bg-white/15",
                    ].join(" ")}
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover underline accent */}
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-theme-light via-white/60 to-theme-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------- Inline Icons (no extra deps) ------- */

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M12 2l2.2 5.6L20 10l-5.8 2.4L12 18l-2.2-5.6L4 10l5.8-2.4L12 2Z" stroke="currentColor" strokeWidth="1.5" />
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
function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M12 21s-7-4.6-9-8.5C1.2 9.8 3.3 6 7 6c2 0 3 .9 5 2 2-1.1 3-2 5-2 3.7 0 5.8 3.8 4 6.5C19 16.4 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconCoins() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <ellipse cx="12" cy="6" rx="7" ry="3.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 6v6c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5V6" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconBag() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M6 9V7a4 4 0 1 1 8 0v2M4 9h16l-1 11H5L4 9Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconPlay() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M8 5v14l10-7-10-7Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconRadar() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 12l6-6M12 3v3M21 12h-3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconBook() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M5 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 4v16" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconTruck() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M14 17H3V6h11v11Zm0 0h2.5l2-3H21V9h-4l-3 4v4Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="7" cy="18.5" r="1.5" fill="currentColor"/><circle cx="17" cy="18.5" r="1.5" fill="currentColor"/>
    </svg>
  );
}
function IconWave() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path
        d="M2 12c3-4 5-4 8 0s5 4 8 0 5-4 8 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---- New lightweight icons for better semantics ---- */

function IconAero() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M3 13l18-6-6 6 6 6-18-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M3 13l6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconSpace() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 12c3-2 6-3 9-3s6 1 9 3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/>
    </svg>
  );
}
function IconAtom() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="1.8" fill="currentColor"/>
      <path d="M4 12c0-4.4 3.6-8 8-8 2.6 0 5.7 1.7 7.5 4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20 12c0 4.4-3.6 8-8 8-2.6 0-5.7-1.7-7.5-4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 6c2.8 2.8 9.2 2.8 12 0M6 18c2.8-2.8 9.2-2.8 12 0" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconAccelerator() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 4v8l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconPower() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 3v9m2-6-6 9h5l-1 6 6-9h-4Z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconFactory() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M3 21V9l6 3V9l6 3V6l6-2v17H3Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 21v-4h3v4M12 21v-4h3v4M18 21v-4h3v4" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function IconRobot() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <rect x="5" y="7" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/>
      <path d="M12 7V4m-7 9H3m18 0h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconChip() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 7v-3M12 20v-3M7 12H4M20 12h-3M8 4v3M16 4v3M8 20v-3M16 20v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconAntenna() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M12 20v-6m-3 6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="8" r="2" fill="currentColor"/>
      <path d="M5 5c2.8-2.8 10.2-2.8 13 0M7.5 7.5c1.8-1.8 7.2-1.8 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconTag() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M3 12l9-9h6l3 3v6l-9 9-9-9Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.5" cy="7.5" r="1.25" fill="currentColor"/>
    </svg>
  );
}
function IconShip() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M3 15l9-4 9 4v3H3v-3Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 18c2 1.5 10 1.5 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 11V4h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconLeaf() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M20 4C12 4 4 8 4 16c0 2.5 1.5 4 4 4 8 0 12-8 12-16Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 20c2-6 6-10 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden>
      <path d="M12 3l8 3v6c0 5-4 7.5-8 9-4-1.5-8-4-8-9V6l8-3Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9.5 12.5l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
