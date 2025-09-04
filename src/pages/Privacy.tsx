export default function Privacy() {
  return (
    <main className="pt-20" id="top">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <header className="mb-8">
          <div className="mb-4 h-0.5 w-full bg-gradient-to-r from-theme-light via-white/60 to-theme-dark" />
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Privacy Policy</h1>
          <div className="mt-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-theme-light" />
              <span>Effective date:</span>
              <time dateTime="2025-01-01">January 1, 2025</time>
            </span>
          </div>
        </header>

        {/* Content card */}
        <article
          className={[
            "rounded-2xl border border-white/10 bg-white/5 backdrop-blur text-white",
            "p-6 md:p-8",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_10px_25px_-10px_rgba(0,0,0,0.6)]",
          ].join(" ")}
        >
          <div className="prose prose-invert prose-slate max-w-none">
            <p className="lead">
              This Privacy Policy describes how we collect, use, disclose, and safeguard information in connection
              with our website, products, and services.
            </p>
            <br />
            <h2 id="information-we-collect" className="scroll-mt-24">Information We Collect</h2>
            <ul>
              <li><strong>Contact data</strong> (e.g., name, email, phone) when you reach out.</li>
              <li><strong>Usage data</strong> (device, pages viewed, approximate location) for analytics.</li>
              <li><strong>Communications</strong> you send us (email or forms).</li>
            </ul>
            <br />
            <h2 id="how-we-use-information" className="scroll-mt-24">How We Use Information</h2>
            <ul>
              <li>To provide, operate, and improve the site and services.</li>
              <li>To respond to inquiries and support requests.</li>
              <li>To analyze usage and enhance security.</li>
            </ul>
            <br />
            <h2 id="sharing" className="scroll-mt-24">Sharing</h2>
            <p>
              We do not sell personal data. We may share with service providers under contract, or as required by law.
            </p>
            <br />
            <h2 id="retention" className="scroll-mt-24">Retention</h2>
            <p>
              We retain data only as long as necessary for the purposes above, or to satisfy legal obligations.
            </p>
            <br />
            <h2 id="your-choices" className="scroll-mt-24">Your Choices</h2>
            <ul>
              <li>Opt out of non-essential analytics via your browser settings or cookie controls.</li>
              <li>Request access, correction, or deletion of your personal data by contacting us.</li>
            </ul>
            <br />
            <h2 id="contact" className="scroll-mt-24">Contact</h2>
            <p>
              Questions? Email <a href="mailto:zach@as3six.com">zach@as3six.com</a>.
            </p>
            <br />
            <h2 id="updates" className="scroll-mt-24">Updates</h2>
            <p>We may update this Policy. Material changes will be posted with a new “Effective date”.</p>
          </div>
        </article>

        {/* Utilities */}
        <div className="mt-8 flex items-center justify-between">
          <a href="#top" className="text-sm text-white/80 hover:text-white">
            Back to top
          </a>
          <nav aria-label="On this page" className="hidden sm:block">
            <ul className="flex flex-wrap gap-3 text-xs text-white/70">
              <li><a className="hover:text-white" href="#information-we-collect">Info We Collect</a></li>
              <li><a className="hover:text-white" href="#how-we-use-information">Use of Info</a></li>
              <li><a className="hover:text-white" href="#sharing">Sharing</a></li>
              <li><a className="hover:text-white" href="#retention">Retention</a></li>
              <li><a className="hover:text-white" href="#your-choices">Your Choices</a></li>
              <li><a className="hover:text-white" href="#contact">Contact</a></li>
              <li><a className="hover:text-white" href="#updates">Updates</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
