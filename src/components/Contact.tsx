import React, { useMemo, useState } from "react";

type ContactProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  emailTo?: string;                 // where the message goes (mailto)
  phone?: string;                   // displayed and clickable
  addressLines?: string[];          // e.g., ["Ann Arbor, MI", "United States"]
  className?: string;
};

export default function Contact({
  id = "contact",
  title = "Contact",
  subtitle = "Let’s align on scope, timelines, and outcomes.",
  emailTo = "contact@as3six.com",
  phone = "+1 (202) 422-2951",
  addressLines = ["Michigan", "United States"],
  className = "",
}: ContactProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General");
  const [message, setMessage] = useState("");

  const emailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
  const canSubmit = name.trim() && emailValid && message.trim();

  function cleanTel(t: string) {
    return t.replace(/[^\d+]/g, "");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    const subject = `[AS3SIX] ${topic} — ${name}${company ? " @ " + company : ""}`;
    const body = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      `Topic: ${topic}`,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${encodeURIComponent(emailTo)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // open the user's mail client
    window.location.href = mailto;
  }

  return (
    <section
      id={id}
      className={["scroll-mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20", className].join(" ")}
      aria-label="Contact form"
    >
      {/* Header */}
      <header className="mb-10 text-center">
        <div className="mx-auto mb-4 h-0.5 w-full max-w-3xl bg-gradient-to-r from-theme-light via-white/60 to-theme-dark" />
        <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-slate-300">{subtitle}</p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left: company contact info */}
        <aside
          className={[
            "relative overflow-hidden rounded-2xl",
            "bg-white/5 border border-white/10 backdrop-blur",
            "p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_10px_25px_-10px_rgba(0,0,0,0.6)]",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-theme-light/20 blur-3xl" />
          <div className="relative space-y-4">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <div className="text-white/90">
              {addressLines.map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
            <div className="space-y-1">
              <a className="block hover:opacity-90" href={`tel:${cleanTel(phone)}`}>
                {phone}
              </a>
              <a className="block hover:opacity-90" href={`mailto:${emailTo}`}>
                {emailTo}
              </a>
            </div>
            <div className="pt-2 text-sm text-white/70">
              Prefer email? Use the form or message us directly.
            </div>
            </div>
          </aside>

        {/* Right: form */}
        <div
          className={[
            "lg:col-span-2 relative overflow-hidden rounded-2xl",
            "bg-white/5 border border-white/10 backdrop-blur",
            "p-5 md:p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_10px_25px_-10px_rgba(0,0,0,0.6)]",
          ].join(" ")}
        >
          <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Name" required>
                <input
                  className="w-full rounded-lg bg-black/20 px-3 py-2 ring-1 ring-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Ada Lovelace"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Field>
              <Field label="Company">
                <input
                  className="w-full rounded-lg bg-black/20 px-3 py-2 ring-1 ring-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  type="text"
                  name="company"
                  placeholder="Babbage Engines"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Field>
            </div>

            <Field label="Email" required hint={!emailValid && email ? "Enter a valid email." : undefined}>
              <input
                className={[
                  "w-full rounded-lg bg-black/20 px-3 py-2 ring-1 placeholder-white/40 focus:outline-none focus:ring-2",
                  email && !emailValid
                    ? "ring-red-500/50 focus:ring-red-500/70"
                    : "ring-white/10 focus:ring-white/30",
                ].join(" ")}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="ada@babbage.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={!!(email && !emailValid)}
              />
            </Field>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Topic">
                <select
                  className="w-full rounded-lg bg-black/20 px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  {["General", "Partnerships", "Licensing", "Technical", "Media"].map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="hidden md:block" />
            </div>

            <Field label="Message" required>
              <textarea
                className="min-h-[120px] w-full resize-y rounded-lg bg-black/20 px-3 py-2 ring-1 ring-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                name="message"
                placeholder="Tell us about your use case, volumes, timelines, and success criteria…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Field>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <p className="text-xs text-white/70">
                By submitting, you agree to our{" "}
                <a className="underline hover:opacity-90" href="/privacy">
                  Privacy
                </a>{" "}
                and{" "}
                <a className="underline hover:opacity-90" href="/terms">
                  Terms of Use
                </a>
                .
              </p>
              <div className="flex gap-2">
                <a
                  href={`mailto:${emailTo}`}
                  className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15 ring-1 ring-white/10"
                >
                  Email directly
                </a>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={[
                    "rounded-lg px-4 py-2 text-sm font-semibold",
                    canSubmit
                      ? "bg-white text-theme-dark hover:opacity-95"
                      : "bg-white/20 text-white/60 cursor-not-allowed",
                  ].join(" ")}
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- small field wrapper ---------- */
function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 inline-flex items-center gap-1 text-sm text-white/90">
        {label} {required && <span className="text-white/60">*</span>}
      </span>
      <div>{children}</div>
      {hint && <div className="mt-1 text-xs text-red-300/90">{hint}</div>}
    </label>
  );
}
