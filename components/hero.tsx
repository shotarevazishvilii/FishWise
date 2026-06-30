import { Fish, Sparkles, Waves } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-background to-background" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            AI-Powered Fishing Forecast & Recommendations
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Find the Perfect Time to Go Fishing
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            FishWise AI analyzes live weather conditions and AI-powered insights
            to help you plan smarter, more successful fishing trips with
            confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Analyze Conditions
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[420px]">
          <div className="absolute h-56 w-56 rounded-full bg-sky-100 blur-3xl" />
          <div className="absolute right-8 top-10 h-40 w-40 rounded-full bg-emerald-100 blur-3xl" />
          <div className="relative w-full max-w-md rounded-3xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4">
                <Waves className="h-5 w-5 text-slate-600" />
                <p className="text-sm font-medium text-slate-700">
                  Coastal and freshwater conditions
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-emerald-100 p-4">
                <Fish className="h-5 w-5 text-emerald-700" />
                <p className="text-sm font-medium text-emerald-800">
                  Species-aware recommendations
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-sky-100 p-4">
                <Sparkles className="h-5 w-5 text-sky-700" />
                <p className="text-sm font-medium text-sky-800">
                  AI insights in a simple score
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
