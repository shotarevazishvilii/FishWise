import { User } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profileDemo } from "@/lib/profile-demo-data";

export function ProfileCard() {
  return (
    <Card className="rounded-3xl border-border/70 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-muted"
          aria-hidden="true"
        >
          <User className="h-10 w-10 text-muted-foreground" />
        </div>
        <dl className="grid w-full gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-muted-foreground">Name</dt>
            <dd className="mt-1 font-semibold">{profileDemo.name}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Experience</dt>
            <dd className="mt-1 font-semibold">{profileDemo.experience}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Favorite Fish</dt>
            <dd className="mt-1 font-semibold">{profileDemo.favoriteFish}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Member Since</dt>
            <dd className="mt-1 font-semibold">{profileDemo.memberSince}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
