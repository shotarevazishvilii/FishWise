"use client";

import { Fish } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export const fishSpeciesOptions = [
  "Carp",
  "Catfish",
  "Pike",
  "Trout",
  "Perch",
  "Crucian Carp",
] as const;

interface FishSelectProps {
  id: string;
  label: string;
  value?: string;
  onChange: (value: string) => void;
  error?: string;
}

export function FishSelect({ id, label, value, onChange, error }: FishSelectProps) {
  const hasError = Boolean(error);

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} onValueChange={(nextValue) => onChange(nextValue ?? "")}>
        <SelectTrigger
          id={id}
          className="h-10 w-full"
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : undefined}
        >
          <SelectValue placeholder="Select fish species" />
        </SelectTrigger>
        <SelectContent>
          {fishSpeciesOptions.map((species) => (
            <SelectItem key={species} value={species}>
              <span className="flex items-center gap-2">
                <Fish className="h-4 w-4 text-muted-foreground" />
                {species}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {hasError ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
