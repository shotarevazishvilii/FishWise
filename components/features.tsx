import { BarChart3, Brain, CloudSun } from "lucide-react";

const features = [
  {
    title: "Live Weather Analysis",
    description:
      "Evaluate real-time weather patterns to understand if conditions are favorable before your trip.",
    icon: CloudSun,
  },
  {
    title: "AI Fishing Recommendations",
    description:
      "Get smart recommendations tailored to conditions so you can make better fishing decisions faster.",
    icon: Brain,
  },
  {
    title: "Fishing Score",
    description:
      "See a clear, easy-to-understand score that summarizes overall fishing quality at a glance.",
    icon: BarChart3,
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for Better Fishing Decisions
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          FishWise AI combines real weather signals and intelligent guidance to
          help you choose the right moment to cast.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="mb-4 inline-flex rounded-xl bg-muted p-3">
              <feature.icon className="h-5 w-5 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
