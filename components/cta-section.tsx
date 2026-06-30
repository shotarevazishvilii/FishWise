export function CTASection() {
  return (
    <section id="cta" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="rounded-3xl border border-border bg-gradient-to-r from-slate-100 via-slate-50 to-emerald-50 px-6 py-12 text-center shadow-sm sm:px-10">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to Plan Your Next Fishing Trip?
        </h2>
        <a
          href="#analysis"
          className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          aria-label="Start analysis"
        >
          Start Analysis
        </a>
      </div>
    </section>
  );
}
