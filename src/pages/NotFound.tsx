export default function NotFound() {
  return (
    <main className="pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-2 text-slate-300">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="mt-6 inline-block rounded-lg bg-white text-theme-dark px-4 py-2 text-sm font-semibold">Go home</a>
      </div>
    </main>
  );
}
