"use client";

import { CalendarDays } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DatePickerProps {
  id: string;
  label: string;
  value?: string;
  onChange: (value: string) => void;
  minDate: string;
  error?: string;
}

export function DatePicker({
  id,
  label,
  value,
  onChange,
  minDate,
  error,
}: DatePickerProps) {
  const hasError = Boolean(error);

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <CalendarDays className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id={id}
          type="date"
          value={value ?? ""}
          min={minDate}
          className="h-10 pl-9"
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : undefined}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
      {hasError ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
