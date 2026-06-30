import { MapPin, Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { favoriteLocationsDemo } from "@/lib/profile-demo-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function FavoriteLocations() {
  return (
    <section aria-labelledby="favorite-locations-heading">
      <h2 id="favorite-locations-heading" className="mb-4 text-xl font-semibold">
        Favorite Fishing Locations
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {favoriteLocationsDemo.map((location) => (
          <Card key={location.name} className="rounded-2xl border-border/70 shadow-sm">
            <CardHeader className="flex flex-row items-start justify-between gap-3 pb-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                <CardTitle className="text-base">{location.name}</CardTitle>
              </div>
              <StarRating rating={location.rating} />
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {location.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
