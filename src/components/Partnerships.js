import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Partnerships({ id = "partnerships", title = "Partnerships", subtitle = "We’re teaming with leaders to commercialize CWEC across regulated and global markets", className = "", }) {
    return (_jsxs("section", { id: id, className: [
            "scroll-mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
            className,
        ].join(" "), "aria-label": "Strategic partnerships", children: [_jsxs("header", { className: "mb-10 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-semibold text-white", children: title }), _jsx("p", { className: "mt-2 text-slate-300", children: subtitle })] }), _jsxs("div", { className: [
                    "relative overflow-hidden rounded-2xl mb-10",
                    "bg-white/5 border border-white/10 backdrop-blur",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_18px_40px_-16px_rgba(0,0,0,0.6)]",
                ].join(" "), children: [_jsx("div", { className: "pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-theme-light/20 blur-3xl" }), _jsx("div", { className: "pointer-events-none absolute -bottom-20 -right-24 h-64 w-64 rounded-full bg-theme-dark/25 blur-3xl" }), _jsx("div", { className: "relative px-6 py-8 md:px-10 md:py-10", children: _jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-6", children: [_jsxs("div", { className: "max-w-3xl", children: [_jsxs("h3", { className: "text-xl md:text-2xl font-semibold text-white flex items-center gap-3", children: [_jsx(IconHandshake, {}), "Bring CWEC to market\u2014together"] }), _jsx("p", { className: "mt-2 text-slate-300", children: "We partner with OEMs, Tier-1s, primes, and international operating companies to accelerate integration, certification, and scale. Co-development, licensing, and reference designs available." }), _jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: ["Co-development", "IP licensing", "Reference designs", "Manufacturing enablement"].map((b) => (_jsx("span", { className: "inline-flex items-center rounded-full bg-white/10 text-white/90 text-xs font-medium px-3 py-1 ring-1 ring-white/10", children: b }, b))) })] }), _jsxs("div", { className: "shrink-0 flex items-center gap-3", children: [_jsx("a", { href: "mailto:zach@as3six.com?subject=CWEC%20Partnership%20Inquiry&body=Hi%20AS3SIX%20Team%2C%0A%0AWe%E2%80%99d%20like%20to%20discuss%20a%20CWEC%20partnership.%20Here%E2%80%99s%20some%20context%3A%0A", className: "rounded-xl bg-theme-dark text-white px-4 py-2 text-sm font-medium hover:opacity-95 ring-1 ring-white/10", children: "Email Partnerships" }), _jsx("a", { href: "/#contact", className: "rounded-xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15 ring-1 ring-white/10", children: "Contact" })] })] }) }), _jsx("div", { className: "h-1 w-full bg-gradient-to-r from-theme-light via-white/60 to-theme-dark opacity-90" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs("article", { className: cardBase(), children: [_jsxs("header", { className: "flex items-center gap-3", children: [_jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white", children: _jsx(IconCar, {}) }), _jsxs("div", { children: [_jsx("h3", { className: "text-white font-semibold text-lg", children: "Automotive OEM & Tier-1" }), _jsx("p", { className: "text-slate-300 text-sm", children: "Retrofit or greenfield: faster coils in safety-critical mechatronics with lower thermal load." })] })] }), _jsx(SectionBlock, { title: "Sample applications", children: [
                                    "ABS/ESC valves (kHz control)",
                                    "Injector/purge solenoids",
                                    "HV pack contactors",
                                    "Active suspension (MR)",
                                    "Parking brake/clutch release",
                                ].map(Chip) }), _jsx(SectionBlock, { title: "Ideal partners", children: ["OEM advanced engineering", "Tier-1 valves/actuators", "Brake & chassis systems", "Power electronics"].map(Chip) }), _jsx(FootAccent, {})] }), _jsxs("article", { className: cardBase(), children: [_jsxs("header", { className: "flex items-center gap-3", children: [_jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white", children: _jsx(IconShield, {}) }), _jsxs("div", { children: [_jsx("h3", { className: "text-white font-semibold text-lg", children: "Defense & National Security" }), _jsx("p", { className: "text-slate-300 text-sm", children: "Deterministic, ns-class field steps for flight-critical actuation and pulsed-power adjuncts." })] })] }), _jsx(SectionBlock, { title: "Sample applications", children: [
                                    "Pulsed power gating coils",
                                    "Missile fin valves",
                                    "Degauss/field shaping",
                                    "Seeker/radome service coils",
                                    "Safing/arming actuators",
                                ].map(Chip) }), _jsx(SectionBlock, { title: "Ideal partners", children: ["Prime integrators", "Defense labs", "Tiered subsystem vendors", "Secure manufacturing"].map(Chip) }), _jsx(FootAccent, {})] }), _jsxs("article", { className: cardBase(), children: [_jsxs("header", { className: "flex items-center gap-3", children: [_jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white", children: _jsx(IconGlobe, {}) }), _jsxs("div", { children: [_jsx("h3", { className: "text-white font-semibold text-lg", children: "International Licensing & JV" }), _jsx("p", { className: "text-slate-300 text-sm", children: "Regional co-investment and tech transfer to localize bill-of-materials and compliance." })] })] }), _jsx(SectionBlock, { title: "Models", children: ["Territorial licensing", "Joint venture (JV)", "Reference design kits", "Local supply enablement"].map(Chip) }), _jsx(SectionBlock, { title: "Focus regions", children: ["EU & UK", "GCC", "Japan & Korea", "India", "Australia"].map(Chip) }), _jsx(FootAccent, {})] }), _jsxs("article", { className: cardBase(), children: [_jsxs("header", { className: "flex items-center gap-3", children: [_jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white", children: _jsx(IconSpeaker, {}) }), _jsxs("div", { children: [_jsx("h3", { className: "text-white font-semibold text-lg", children: "Audio & Acoustics" }), _jsx("p", { className: "text-slate-300 text-sm", children: "Pure-fidelity transduction and extended high-frequency response (40\u201360 kHz+) for next-gen sound." })] })] }), _jsx(SectionBlock, { title: "Sample applications", children: [
                                    "Reference monitors & hi-fi tweeters",
                                    "Extended HF tweeters (40–60 kHz+)",
                                    "Parametric/beamforming arrays",
                                    "Ultrasonic UX & haptics",
                                    "Automotive audio transducers",
                                ].map(Chip) }), _jsx(SectionBlock, { title: "Ideal partners", children: [
                                    "Hi-Fi & studio monitor OEMs",
                                    "Pro-audio & line arrays",
                                    "Automotive audio Tier-1s",
                                    "Ultrasonic vendors",
                                    "Academic/industrial acoustics labs",
                                ].map(Chip) }), _jsx(FootAccent, {})] }), _jsxs("article", { className: cardBase(), children: [_jsxs("header", { className: "flex items-center gap-3", children: [_jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white", children: _jsx(IconRobot, {}) }), _jsxs("div", { children: [_jsx("h3", { className: "text-white font-semibold text-lg", children: "Industrial Automation & Robotics" }), _jsx("p", { className: "text-slate-300 text-sm", children: "Deterministic, high-speed actuation for conveyors, pick/pack, EOAT, and safety systems with lower thermal budgets." })] })] }), _jsx(SectionBlock, { title: "Sample applications", children: [
                                    "High-speed diverter actuators",
                                    "Pick-and-place solenoids",
                                    "EOAT clamps & brakes",
                                    "Pneumatic valve drivers (ms-class)",
                                    "Machine safety interlocks",
                                ].map(Chip) }), _jsx(SectionBlock, { title: "Ideal partners", children: [
                                    "Robotics OEMs",
                                    "System integrators / line builders",
                                    "Sortation & AMR vendors",
                                    "Pneumatics / valve manufacturers",
                                    "PLC / motion solution providers",
                                ].map(Chip) }), _jsx(FootAccent, {})] }), _jsxs("article", { className: cardBase(), children: [_jsxs("header", { className: "flex items-center gap-3", children: [_jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white", children: _jsx(IconLab, {}) }), _jsxs("div", { children: [_jsx("h3", { className: "text-white font-semibold text-lg", children: "Research & Academia" }), _jsx("p", { className: "text-slate-300 text-sm", children: "Open collaboration on novel electromagnetic transduction, extended-band audio, and pulsed-power testbeds." })] })] }), _jsx(SectionBlock, { title: "Collaboration modes", children: [
                                    "Sponsored research",
                                    "SBIR/STTR proposals",
                                    "Co-authored publications",
                                    "Open testbed access",
                                    "Student capstone projects",
                                ].map(Chip) }), _jsx(SectionBlock, { title: "Focus areas", children: [
                                    "Advanced coil topologies",
                                    "Driver control & DSP",
                                    "Ultrasonic / parametric acoustics",
                                    "Medical / industrial imaging",
                                    "High-speed mechatronics",
                                ].map(Chip) }), _jsx(FootAccent, {})] })] }), _jsxs("div", { className: "mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [_jsx(MiniModel, { icon: _jsx(IconLab, {}), title: "Co-development", children: "Shared roadmap, rapid prototyping, and validation on your rigs and duty cycles." }), _jsx(MiniModel, { icon: _jsx(IconKey, {}), title: "IP Licensing", children: "Field-proven designs and know-how; royalties aligned to shipped volume." }), _jsx(MiniModel, { icon: _jsx(IconBlueprint, {}), title: "Reference Designs", children: "Drop-in coil modules with BOM, winding data, and driver guidance." }), _jsx(MiniModel, { icon: _jsx(IconFactory, {}), title: "Manufacturing Enablement", children: "DFM/DFx, fixtures, QA, and ramp support with preferred vendors." })] }), _jsxs("div", { className: "mt-10 relative overflow-hidden rounded-2xl bg-theme-dark text-white px-6 py-6 ring-1 ring-white/10", children: [_jsx("div", { className: "pointer-events-none absolute -top-24 right-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" }), _jsxs("div", { className: "relative flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold", children: "Let\u2019s operationalize the partnership" }), _jsx("p", { className: "text-white/80 text-sm", children: "Bring your platform constraints, we\u2019ll bring CWEC designs, fixtures, and test plans." })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("a", { href: "mailto:zach@as3six.com?subject=Partnerships%20%2F%20CWEC&body=Hi%20AS3SIX%2C%0A%0AWe%E2%80%99d%20like%20to%20discuss%20a%20partnership%20for%20%5BAutomotive%20%7C%20Defense%20%7C%20International%20%7C%20Audio%5D.%0AContext%3A%20", className: "rounded-xl bg-white text-theme-dark px-4 py-2 text-sm font-semibold hover:opacity-95", children: "Email Partnerships" }), _jsx("a", { href: "/#contact", className: "rounded-xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15 ring-1 ring-white/10", children: "Contact" })] })] })] })] }));
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
function SectionBlock({ title, children }) {
    return (_jsxs("div", { className: "mt-4", children: [_jsx("div", { className: "text-xs uppercase tracking-wide text-white/70", children: title }), _jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: children })] }));
}
function Chip(label) {
    return (_jsxs("span", { className: "inline-flex items-center rounded-full bg-white/10 text-white/90 text-xs font-medium px-3 py-1 ring-1 ring-white/10", children: [_jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-white/70 mr-1" }), label] }, label));
}
function FootAccent() {
    return (_jsx("div", { className: "absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-theme-light via-white/60 to-theme-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" }));
}
function MiniModel({ icon, title, children, }) {
    return (_jsxs("div", { className: [
            "relative overflow-hidden rounded-2xl",
            "bg-white/5 border border-white/10 backdrop-blur",
            "p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_10px_25px_-10px_rgba(0,0,0,0.6)]",
        ].join(" "), children: [_jsxs("div", { className: "flex items-center gap-3 text-white", children: [_jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-white/10", children: icon }), _jsx("h5", { className: "font-semibold", children: title })] }), _jsx("p", { className: "mt-2 text-slate-300 text-sm", children: children })] }));
}
/* ---------- inline icons (no extra deps) ---------- */
function IconHandshake() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "none", "aria-hidden": true, children: [_jsx("path", { d: "M8.5 11.5l3-3a2.1 2.1 0 013 0l1 1 3-3L22 7l-3.5 3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }), _jsx("path", { d: "M1.5 9L7 3.5 9.5 6m0 0l2 2M6 13l4.5 4.5a2 2 0 003 0L15 17m-1.5-1.5l1 1a2 2 0 003 0l.5-.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] }));
}
function IconCar() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "none", "aria-hidden": true, children: [_jsx("path", { d: "M3 12l2-5h14l2 5v6h-2a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H3v-6Z", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M7 12h10", stroke: "currentColor", strokeWidth: "1.5" })] }));
}
function IconShield() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "none", "aria-hidden": true, children: [_jsx("path", { d: "M12 3l7 3v6c0 5-3.6 7.9-7 9-3.4-1.1-7-4-7-9V6l7-3Z", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M9 12l2 2 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] }));
}
function IconGlobe() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "none", "aria-hidden": true, children: [_jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9S9.5 5.7 12 3Z", stroke: "currentColor", strokeWidth: "1.5" })] }));
}
function IconLab() {
    return (_jsx("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", "aria-hidden": true, children: _jsx("path", { d: "M10 2v5l-6 10a3 3 0 002.6 4.5h10.8A3 3 0 0020 17L14 7V2", stroke: "currentColor", strokeWidth: "1.5" }) }));
}
function IconKey() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", "aria-hidden": true, children: [_jsx("circle", { cx: "8", cy: "10", r: "3", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M11 10h10l-3 3 2 2-2 2-2-2-2 2", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] }));
}
function IconBlueprint() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", "aria-hidden": true, children: [_jsx("path", { d: "M5 4h12a3 3 0 013 3v11H8a3 3 0 00-3 3V4Z", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M9 8h8M9 12h8M9 16h5", stroke: "currentColor", strokeWidth: "1.5" })] }));
}
function IconFactory() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", "aria-hidden": true, children: [_jsx("path", { d: "M3 21V9l6 3V9l6 3V9l6 3v9H3Z", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M6 21v-4h4v4M14 21v-4h4v4", stroke: "currentColor", strokeWidth: "1.5" })] }));
}
function IconSpeaker() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "none", "aria-hidden": true, children: [_jsx("rect", { x: "6", y: "3", width: "12", height: "18", rx: "2.5", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("circle", { cx: "12", cy: "9", r: "2", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("circle", { cx: "12", cy: "16", r: "3.5", stroke: "currentColor", strokeWidth: "1.5" })] }));
}
function IconRobot() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "none", "aria-hidden": true, children: [_jsx("rect", { x: "6", y: "8", width: "12", height: "10", rx: "2", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("circle", { cx: "9", cy: "12", r: "1.2", fill: "currentColor" }), _jsx("circle", { cx: "15", cy: "12", r: "1.2", fill: "currentColor" }), _jsx("path", { d: "M12 4v3M8 18v2M16 18v2", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }), _jsx("path", { d: "M4 10h2M18 10h2", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] }));
}
