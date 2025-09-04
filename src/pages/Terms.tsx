export default function Terms() {
  return (
    <main className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Terms of Use</h1>
          <p className="mt-2 text-slate-300 text-sm">Effective date: 2025-01-01 (example)</p>
        </header>

        <article className="prose prose-invert prose-slate max-w-none text-white">
          <h2>Acceptance of Terms</h2>
          <p>By accessing or using our website, you agree to these Terms.</p>
           <br />
          <h2>Use of the Site</h2>
          <ul>
            <li>You will comply with applicable laws.</li>
            <li>No reverse engineering, scraping, or unauthorized access.</li>
            <li>Content is provided “as is” without warranties.</li>
          </ul>
           <br />
          <h2>Intellectual Property</h2>
          <p>All trademarks, logos, and content are owned by their respective holders.</p>
           <br />
          <h2>Limitation of Liability</h2>
          <p>We are not liable for indirect or consequential damages arising from your use of the site.</p>
           <br />
          <h2>Governing Law</h2>
          <p>These Terms are governed by the laws of your applicable jurisdiction (to be specified).</p>
           <br />
          <h2>Contact</h2>
          <p>For questions about these Terms, email <a href="mailto:zach@as3six.com">zach@as3six.com</a>.</p>
        </article>
      </div>
    </main>
  );
}
