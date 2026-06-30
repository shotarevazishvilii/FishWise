import type { Metadata } from "next";
import { Info } from "lucide-react";

import { Achievements } from "@/components/profile/achievements";
import { ComingSoon } from "@/components/profile/coming-soon";
import { FavoriteLocations } from "@/components/profile/favorite-locations";
import { ProfileCard } from "@/components/profile/profile-card";
import { Statistics } from "@/components/profile/statistics";
import { TripHistory } from "@/components/profile/trip-history";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Fisherman Profile",
  description:
    "Preview of future FishWise AI profile features including fishing history, statistics, and achievements.",
};

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div
            className="mb-8 flex items-start gap-3 rounded-2xl border border-sky-200 bg-sky-50 px-4 py-4 text-sm leading-6 text-sky-900"
            role="status"
          >
            <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <p>
              <strong>This profile page is a preview</strong> of features planned
              for future versions of FishWise AI. The current MVP focuses on
              AI-powered fishing analysis.
            </p>
          </div>

          <header className="mb-10">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Fisherman Profile
            </h1>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              View your fishing history, favorite locations, achievements, and
              personal fishing statistics.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <ProfileCard />
              <div>
                <h2 className="mb-4 text-xl font-semibold">Personal Statistics</h2>
                <Statistics />
              </div>
              <Achievements />
            </div>

            <div className="space-y-8">
              <TripHistory />
              <FavoriteLocations />
            </div>
          </div>

          <ComingSoon />
        </div>
      </main>
      <Footer />
    </>
  );
}
