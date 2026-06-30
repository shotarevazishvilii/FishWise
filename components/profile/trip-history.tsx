import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tripHistoryDemo } from "@/lib/profile-demo-data";

export function TripHistory() {
  return (
    <Card className="rounded-3xl border-border/70 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Recent Fishing History</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full min-w-[540px] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="pb-3 pr-4 font-medium">Location</th>
              <th className="pb-3 pr-4 font-medium">Fish Species</th>
              <th className="pb-3 pr-4 font-medium">Fishing Score</th>
              <th className="pb-3 pr-4 font-medium">Weather</th>
              <th className="pb-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {tripHistoryDemo.map((trip) => (
              <tr key={`${trip.location}-${trip.date}`} className="border-b border-border/60 last:border-0">
                <td className="py-3 pr-4 font-medium">{trip.location}</td>
                <td className="py-3 pr-4">{trip.fishSpecies}</td>
                <td className="py-3 pr-4">{trip.fishingScore}</td>
                <td className="py-3 pr-4">{trip.weather}</td>
                <td className="py-3">{trip.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
