import { Badge } from "@/components/results/weather-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ScoreCardProps {
  score: number;
}

function getScoreCategory(score: number) {
  if (score <= 30) {
    return { label: "Poor", className: "bg-red-100 text-red-700" };
  }
  if (score <= 60) {
    return { label: "Fair", className: "bg-amber-100 text-amber-700" };
  }
  if (score <= 80) {
    return { label: "Good", className: "bg-sky-100 text-sky-700" };
  }
  return { label: "Excellent", className: "bg-emerald-100 text-emerald-700" };
}

export function ScoreCard({ score }: ScoreCardProps) {
  const category = getScoreCategory(score);

  return (
    <Card className="rounded-3xl border-border/70 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <CardTitle className="text-xl">Fishing Score</CardTitle>
        <Badge className={category.className}>{category.label}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {score} <span className="text-xl text-muted-foreground">/ 100</span>
        </p>
      </CardContent>
    </Card>
  );
}
