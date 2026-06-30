"use client";

import { useCallback, useState } from "react";

import { CTASection } from "@/components/cta-section";
import { Features } from "@/components/features";
import { FishingAnalysisForm } from "@/components/fishing/fishing-analysis-form";
import { ResultsPlaceholder } from "@/components/fishing/results-placeholder";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import type { FishingResult } from "@/types/fishing";

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState<FishingResult | null>(null);

  const handleAnalysisSuccess = useCallback((result: FishingResult) => {
    setAnalysisResult(result);
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <FishingAnalysisForm onAnalysisSuccess={handleAnalysisSuccess} />
        <ResultsPlaceholder result={analysisResult} />
        <Features />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
