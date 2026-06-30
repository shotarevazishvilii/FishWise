import type { FishingResult } from "@/types/fishing";

interface ResultsPlaceholderProps {
  result: FishingResult | null;
}

export function ResultsPlaceholder({ result }: ResultsPlaceholderProps) {
  return (
    <section id="results" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Analysis Results
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          {result
            ? "Results received successfully. Detailed presentation will be added in the next prompt."
            : "Results will appear here after successful analysis."}
        </p>
      </div>
    </section>
  );
}
