import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
const BANDS = [
    { key: "A", name: "Micro", odHint: "< 20 mm OD", baseLicenseUSD: 0.40, royaltyPct: 2.0, icon: _jsx(IconDot, {}) },
    { key: "B", name: "Small", odHint: "20–40 mm OD", baseLicenseUSD: 0.90, royaltyPct: 1.8, icon: _jsx(IconDot, {}) },
    { key: "C", name: "Medium", odHint: "40–70 mm OD", baseLicenseUSD: 1.50, royaltyPct: 1.6, icon: _jsx(IconDot, {}) },
    { key: "D", name: "Large", odHint: "70–120 mm OD", baseLicenseUSD: 2.50, royaltyPct: 1.4, icon: _jsx(IconDot, {}) },
    { key: "E", name: "Heavy", odHint: "> 120 mm OD", baseLicenseUSD: 4.00, royaltyPct: 1.2, icon: _jsx(IconDot, {}) },
];
function volumeDiscount(volume) {
    // simple, easy-to-explain bands (illustrative)
    if (volume >= 1_000_000)
        return 0.40;
    if (volume >= 500_000)
        return 0.30;
    if (volume >= 200_000)
        return 0.20;
    if (volume >= 50_000)
        return 0.10;
    return 0.00;
}
export default function Licensing({ id = "licensing", title = "Licensing", subtitle = "Flexible commercialization—license CWEC for your electromagnets with size-based pricing and volume breaks", className = "", }) {
    const [bandIndex, setBandIndex] = useState(2); // default "Medium"
    const [volume, setVolume] = useState(100_000); // units per year (illustrative)
    const [asp, setAsp] = useState(25); // avg selling price of the electromagnet ($)
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
    return (_jsxs("section", { id: id, className: [
            "scroll-mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
            className,
        ].join(" "), "aria-label": "Licensing and pricing", children: [_jsxs("header", { className: "mb-10 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-semibold text-white", children: title }), _jsx("p", { className: "mt-2 text-slate-300", children: subtitle })] }), _jsxs("div", { className: [
                    "relative overflow-hidden rounded-2xl mb-8",
                    "bg-white/5 border border-white/10 backdrop-blur",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_18px_40px_-16px_rgba(0,0,0,0.6)]",
                ].join(" "), children: [_jsx("div", { className: "pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-theme-light/20 blur-3xl" }), _jsx("div", { className: "pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-theme-dark/25 blur-3xl" }), _jsx("div", { className: "relative px-6 py-7 md:px-10 md:py-9", children: _jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-6", children: [_jsxs("div", { className: "max-w-3xl", children: [_jsxs("h3", { className: "text-xl md:text-2xl font-semibold text-white flex items-center gap-3", children: [_jsx(IconLicense, {}), "License CWEC into your magnets"] }), _jsx("p", { className: "mt-2 text-slate-300", children: "We align incentives via simple, transparent economics: a size-based per-unit license plus a light royalty on your electromagnet ASP. Scale wins get volume discounts. Reference designs and enablement reduce your time-to-value." }), _jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: ["Size-based pricing", "Volume discounts", "Reference designs", "Manufacturing enablement"].map((b) => (_jsxs("span", { className: "inline-flex items-center rounded-full bg-white/10 text-white/90 text-xs font-medium px-3 py-1 ring-1 ring-white/10", children: [_jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-white/70 mr-1" }), b] }, b))) })] }), _jsx("div", { className: "shrink-0 flex items-center gap-3", children: _jsx("a", { href: "mailto:zach@as3six.com?subject=CWEC%20Licensing%20Inquiry&body=Hi%20AS3SIX%2C%0A%0AWe%E2%80%99d%20like%20to%20license%20CWEC%20for%20our%20electromagnets.%20Context%20%28use%20cases%2C%20sizes%2C%20volumes%29%3A%0A", className: "rounded-xl bg-theme-dark text-white px-4 py-2 text-sm font-medium hover:opacity-95 ring-1 ring-white/10", children: "Email Licensing" }) })] }) }), _jsx("div", { className: "h-1 w-full bg-gradient-to-r from-theme-light via-white/60 to-theme-dark opacity-90" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: [
                            "relative overflow-hidden rounded-2xl lg:col-span-2",
                            "bg-white/5 border border-white/10 backdrop-blur",
                            "p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_10px_25px_-10px_rgba(0,0,0,0.6)]",
                        ].join(" "), children: [_jsxs("h4", { className: "text-white font-semibold text-lg flex items-center gap-2", children: [_jsx(IconCalculator, {}), " Pricing Calculator ", _jsx("span", { className: "ml-2 text-xs text-white/60", children: "(illustrative)" })] }), _jsxs("div", { className: "mt-5", children: [_jsxs("label", { className: "flex items-center justify-between text-sm text-white/90", children: [_jsx("span", { children: "Electromagnet size band" }), _jsxs("span", { className: "font-medium", children: [band.name, " ", _jsxs("span", { className: "text-white/60", children: ["(", band.odHint, ")"] })] })] }), _jsx("input", { type: "range", min: 0, max: BANDS.length - 1, value: bandIndex, onChange: (e) => setBandIndex(Number(e.target.value)), className: "mt-2 w-full accent-white" }), _jsx("div", { className: "mt-2 grid grid-cols-5 text-[10px] text-white/60", children: BANDS.map((b) => (_jsx("div", { className: "text-center", children: b.key }, b.key))) })] }), _jsxs("div", { className: "mt-5", children: [_jsxs("label", { className: "flex items-center justify-between text-sm text-white/90", children: [_jsx("span", { children: "Annual volume (units)" }), _jsx("span", { className: "font-medium", children: volume.toLocaleString() })] }), _jsx("input", { type: "range", min: 1000, max: 1_000_000, step: 1000, value: volume, onChange: (e) => setVolume(Number(e.target.value)), className: "mt-2 w-full accent-white" }), _jsxs("div", { className: "mt-2 flex justify-between text-[10px] text-white/60", children: [_jsx("span", { children: "1k" }), _jsx("span", { children: "50k" }), _jsx("span", { children: "200k" }), _jsx("span", { children: "500k" }), _jsx("span", { children: "1M" })] })] }), _jsxs("div", { className: "mt-5", children: [_jsxs("label", { className: "flex items-center justify-between text-sm text-white/90", children: [_jsx("span", { children: "Electromagnet ASP (US$)" }), _jsxs("span", { className: "font-medium", children: ["$", asp.toFixed(2)] })] }), _jsx("input", { type: "range", min: 5, max: 150, step: 1, value: asp, onChange: (e) => setAsp(Number(e.target.value)), className: "mt-2 w-full accent-white" }), _jsxs("div", { className: "mt-2 flex justify-between text-[10px] text-white/60", children: [_jsx("span", { children: "$5" }), _jsx("span", { children: "$25" }), _jsx("span", { children: "$75" }), _jsx("span", { children: "$120" }), _jsx("span", { children: "$150" })] })] }), _jsxs("div", { className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsx(Metric, { title: "Per-unit license (after volume discount)", value: `$${licensePerUnit.toFixed(2)}`, foot: `Base $${band.baseLicenseUSD.toFixed(2)} • Discount ${(discount * 100).toFixed(0)}%` }), _jsx(Metric, { title: "Per-unit royalty (indicative)", value: `$${royaltyPerUnit.toFixed(2)}`, foot: `${band.royaltyPct.toFixed(1)}% of ASP` }), _jsx(Metric, { title: "Est. annual licensing", value: `$${estAnnual.toLocaleString()}`, foot: `${volume.toLocaleString()} units • ASP $${asp.toFixed(2)}`, highlight: true })] }), _jsxs("p", { className: "mt-4 text-xs text-white/60", children: ["Figures shown are ", _jsx("span", { className: "font-medium text-white/80", children: "illustrative" }), " and subject to commercial agreement. Final pricing varies by design complexity, duty cycle, regulatory scope, and support model."] })] }), _jsxs("div", { className: "grid grid-cols-1 gap-6", children: [_jsx(ProgramCard, { name: "Reference Design Kit", price: "from $15k NRE", bullets: [
                                    "Design files, BOM, winding data",
                                    "Driver guidance & test plans",
                                    "Email support / office hours",
                                ], badge: "Fastest start" }), _jsx(ProgramCard, { name: "Co-Development", price: "from $60k NRE", bullets: [
                                    "Joint proto & validation on your rigs",
                                    "Performance tuning & EMI hygiene",
                                    "DFM/DFx + manufacturing handoff",
                                ], badge: "Most popular" }), _jsx(ProgramCard, { name: "Enterprise Enablement", price: "from $150k NRE", bullets: [
                                    "On-site bring-up & qualification",
                                    "Secure supply & QA fixtures",
                                    "Multi-platform rollout playbook",
                                ] })] })] }), _jsxs("div", { className: "mt-10 relative overflow-hidden rounded-2xl bg-theme-dark text-white px-6 py-6 ring-1 ring-white/10", children: [_jsx("div", { className: "pointer-events-none absolute -top-24 right-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" }), _jsxs("div", { className: "relative flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold", children: "Ready to model your program?" }), _jsx("p", { className: "text-white/80 text-sm", children: "Share your coil envelopes, volumes, and environments\u2014we\u2019ll turn around a tailored quote." })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("a", { href: "mailto:zach@as3six.com?subject=CWEC%20Licensing%20Model&body=Coil%20sizes%2FOD%2C%20volumes%2C%20duty%20cycles%2C%20and%20target%20costs%3A%0A", className: "rounded-xl bg-white text-theme-dark px-4 py-2 text-sm font-semibold hover:opacity-95", children: "Email Licensing" }), _jsx("a", { href: "/#contact", className: "rounded-xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15 ring-1 ring-white/10", children: "Contact" })] })] })] })] }));
}
/* ---------- subcomponents ---------- */
function Metric({ title, value, foot, highlight, }) {
    return (_jsxs("div", { className: [
            "rounded-2xl p-4 border backdrop-blur",
            highlight
                ? "bg-white/10 border-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "bg-white/5  border-white/10 text-white/90",
        ].join(" "), children: [_jsx("div", { className: "text-xs uppercase tracking-wide text-white/70", children: title }), _jsx("div", { className: "mt-1 text-2xl font-semibold", children: value }), foot && _jsx("div", { className: "mt-1 text-xs text-white/60", children: foot })] }));
}
function ProgramCard({ name, price, bullets, badge, }) {
    return (_jsxs("article", { className: [
            "relative overflow-hidden rounded-2xl",
            "bg-white/5 border border-white/10 backdrop-blur",
            "p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_10px_25px_-10px_rgba(0,0,0,0.6)]",
        ].join(" "), children: [badge && (_jsx("span", { className: "absolute top-3 right-3 rounded-full bg-white/10 px-2 py-[2px] text-[10px] font-semibold ring-1 ring-white/15", children: badge })), _jsx("h5", { className: "text-lg font-semibold", children: name }), _jsx("div", { className: "mt-1 text-sm text-white/80", children: price }), _jsx("ul", { className: "mt-3 space-y-2 text-sm text-slate-300", children: bullets.map((b, i) => (_jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-white/70" }), _jsx("span", { children: b })] }, i))) })] }));
}
/* ---------- inline icons (no deps) ---------- */
function IconLicense() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", "aria-hidden": true, children: [_jsx("path", { d: "M6 4h12a2 2 0 0 1 2 2v13H8a3 3 0 0 0-3 3V6a2 2 0 0 1 2-2Z", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M9 8h8M9 12h8M9 16h5", stroke: "currentColor", strokeWidth: "1.5" })] }));
}
function IconCalculator() {
    return (_jsxs("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "none", "aria-hidden": true, children: [_jsx("rect", { x: "4", y: "3", width: "16", height: "18", rx: "2", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M8 7h8M8 12h2m4 0h2M8 16h2m4 0h2", stroke: "currentColor", strokeWidth: "1.5" })] }));
}
function IconDot() {
    return (_jsx("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "currentColor", "aria-hidden": true, children: _jsx("circle", { cx: "12", cy: "12", r: "3" }) }));
}
