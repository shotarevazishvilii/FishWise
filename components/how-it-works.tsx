const steps = [
  "Choose location, date, and fish species.",
  "FishWise AI analyzes weather conditions using AI.",
  "Receive personalized fishing recommendations instantly.",
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          How It Works
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          From planning to recommendations in three simple steps.
        </p>
      </div>

      <ol className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4">
        {steps.map((step, index) => (
          <li key={step} className="w-full text-center">
            <div className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Step {index + 1}
              </p>
              <p className="mt-2 text-base font-medium">{step}</p>
            </div>
            {index < steps.length - 1 ? (
              <div
                className="mx-auto mt-3 h-6 w-px bg-border"
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
