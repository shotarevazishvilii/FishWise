import { Card, CardContent } from "@/components/ui/card";
import { achievementsDemo } from "@/lib/profile-demo-data";

export function Achievements() {
  return (
    <section aria-labelledby="achievements-heading">
      <h2 id="achievements-heading" className="mb-4 text-xl font-semibold">
        Personal Achievements
      </h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {achievementsDemo.map((achievement) => (
          <Card
            key={achievement.title}
            className="rounded-2xl border-border/70 shadow-sm"
          >
            <CardContent className="flex flex-col items-center gap-2 py-6 text-center">
              <span className="text-3xl" aria-hidden="true">
                {achievement.emoji}
              </span>
              <p className="text-sm font-medium">{achievement.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
