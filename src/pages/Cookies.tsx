export default function Cookies() {
  return (
    <main className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Cookies</h1>
          <p className="mt-2 text-slate-300 text-sm">Effective date: 2025-01-01 (example)</p>
        </header>

        <article className="prose prose-invert prose-slate max-w-none text-white">
          <h1><strong>What Are Cookies?</strong></h1>
          <p>Cookies are small text files stored on your device to remember settings and improve UX.</p>
          <br />
          <h1><strong>Types We Use</strong></h1>
          <ul>
            <li>Essential– required for core functionality.</li>
            <li>Analytics– to understand usage and improve performance.</li>
          </ul>
          <br />
          <h1><strong>Your Controls</strong></h1>
          <ul>
            <li>Browser settings to block/clear cookies.</li>
            <li>Opt-out mechanisms for analytics (if enabled).</li>
          </ul>
           <br />
          <h1><strong>Contact</strong></h1>
          <p>Questions? <a href="mailto:contact@as3six.com">contact@as3six.com</a></p>
        </article>
      </div>
    </main>
  );
}
