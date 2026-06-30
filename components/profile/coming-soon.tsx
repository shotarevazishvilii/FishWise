import { Sparkles } from "lucide-react";

import { Badge } from "@/components/results/weather-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { comingSoonFeaturesDemo } from "@/lib/profile-demo-data";

export function ComingSoon() {
  return (
    <section aria-labelledby="coming-soon-heading" className="mt-10">
      <h2 id="coming-soon-heading" className="text-2xl font-semibold tracking-tight">
        Coming Soon
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {comingSoonFeaturesDemo.map((feature) => (
          <Card key={feature.title} className="rounded-2xl border-border/70 shadow-sm">
            <CardHeader className="flex flex-row items-start justify-between gap-2 pb-2">
              <CardTitle className="text-base leading-snug">{feature.title}</CardTitle>
              <Badge className="shrink-0 bg-sky-100 text-sky-700">Coming Soon</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        These features are planned for future releases of FishWise AI.
      </p>
    </section>
  );
}
