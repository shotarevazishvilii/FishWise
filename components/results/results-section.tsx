import { Clock3, Cloud, Thermometer, Wind, Waves, FishingHook } from "lucide-react";

import { RecommendationCard } from "@/components/results/recommendation-card";
import { ScoreCard } from "@/components/results/score-card";
import { TipsCard } from "@/components/results/tips-card";
import { WeatherCard } from "@/components/results/weather-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { FishingResult } from "@/types/fishing";

interface ResultsSectionProps {
  result: FishingResult;
}

export function ResultsSection({ result }: ResultsSectionProps) {
  return (
    <section id="results" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Fishing Analysis Results
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Review today&apos;s fishing conditions and AI recommendations.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <ScoreCard score={result.fishingScore} />
        <Card className="rounded-3xl border-border/70 bg-slate-50 shadow-sm">
          <CardHeader className="flex flex-row items-center gap-2">
            <Clock3 className="h-5 w-5 text-slate-700" aria-hidden="true" />
            <CardTitle>Best Fishing Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {result.bestFishingTime}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <WeatherCard
          title="Weather"
          value={result.weather}
          icon={<Cloud className="h-5 w-5" />}
        />
        <WeatherCard
          title="Temperature"
          value={`${result.temperature} °C`}
          icon={<Thermometer className="h-5 w-5" />}
        />
        <WeatherCard
          title="Wind Speed"
          value={`${result.wind} m/s`}
          icon={<Wind className="h-5 w-5" />}
        />
        <WeatherCard
          title="Air Pressure"
          value={`${result.pressure} hPa`}
          icon={<Waves className="h-5 w-5" />}
        />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card className="rounded-2xl border-border/70 shadow-sm">
          <CardHeader className="flex flex-row items-center gap-2">
            <FishingHook className="h-5 w-5 text-emerald-700" aria-hidden="true" />
            <CardTitle className="text-lg">Recommended Bait</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold tracking-tight">{result.recommendedBait}</p>
          </CardContent>
        </Card>
        <div className="lg:col-span-2">
          <RecommendationCard recommendation={result.recommendation} />
        </div>
      </div>

      <div className="mt-4">
        <TipsCard tips={result.tips} />
      </div>
    </section>
  );
}
