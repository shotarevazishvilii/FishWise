import { Sparkles } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RecommendationCardProps {
  recommendation: string;
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <Card className="rounded-3xl border-border/70 bg-gradient-to-r from-slate-100 via-slate-50 to-sky-50 shadow-sm">
      <CardHeader className="flex flex-row items-center gap-2">
        <Sparkles className="h-5 w-5 text-sky-700" aria-hidden="true" />
        <CardTitle className="text-xl">AI Recommendation</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-7 text-foreground">{recommendation}</p>
      </CardContent>
    </Card>
  );
}
