import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { statisticsDemo } from "@/lib/profile-demo-data";

export function Statistics() {
  return (
    <section aria-labelledby="statistics-heading">
      <h2 id="statistics-heading" className="sr-only">
        Personal Statistics
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {statisticsDemo.map((stat) => (
          <Card key={stat.label} className="rounded-2xl border-border/70 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
