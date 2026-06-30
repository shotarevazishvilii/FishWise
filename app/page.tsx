"use client";

import { useCallback, useEffect, useState } from "react";

import { CTASection } from "@/components/cta-section";
import { Features } from "@/components/features";
import { FishingAnalysisForm } from "@/components/fishing/fishing-analysis-form";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { SiteLayout } from "@/components/layout/site-layout";
import { ResultsSection } from "@/components/results/results-section";
import type { FishingResult } from "@/types/fishing";

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState<FishingResult | null>(null);

  const handleAnalysisSuccess = useCallback((result: FishingResult) => {
    setAnalysisResult(result);
  }, []);

  useEffect(() => {
    if (!analysisResult) {
      return;
    }
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
  }, [analysisResult]);

  return (
    <SiteLayout>
      <main className="overflow-x-hidden">
        <Hero />
        <FishingAnalysisForm onAnalysisSuccess={handleAnalysisSuccess} />
        {analysisResult ? <ResultsSection result={analysisResult} /> : null}
        <Features />
        <HowItWorks />
        <CTASection />
      </main>
    </SiteLayout>
  );
}
