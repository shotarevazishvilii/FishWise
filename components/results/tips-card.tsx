import { Lightbulb } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TipsCardProps {
  tips: string;
}

export function TipsCard({ tips }: TipsCardProps) {
  return (
    <Card className="rounded-2xl border-border/70 shadow-sm">
      <CardHeader className="flex flex-row items-center gap-2">
        <Lightbulb className="h-5 w-5 text-amber-600" aria-hidden="true" />
        <CardTitle className="text-lg">Fishing Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{tips}</p>
      </CardContent>
    </Card>
  );
}
