"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import { DatePicker } from "@/components/fishing/date-picker";
import { FishSelect, fishSpeciesOptions } from "@/components/fishing/fish-select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fishingAnalysisSchema = z.object({
  location: z
    .string()
    .min(2, "Location must be at least 2 characters.")
    .max(100, "Location must be at most 100 characters."),
  fishingDate: z
    .string()
    .min(1, "Fishing date is required.")
    .refine((value) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(value);
      return !Number.isNaN(selectedDate.getTime()) && selectedDate >= today;
    }, "Fishing date cannot be in the past."),
  fishSpecies: z.enum(fishSpeciesOptions, {
    message: "Fish species is required.",
  }),
});

type FishingAnalysisFormValues = z.infer<typeof fishingAnalysisSchema>;

function formatDateForInput(date: Date) {
  return date.toISOString().split("T")[0] ?? "";
}

export function FishingAnalysisForm() {
  const minDate = useMemo(() => formatDateForInput(new Date()), []);

  const form = useForm<FishingAnalysisFormValues>({
    resolver: zodResolver(fishingAnalysisSchema),
    mode: "onChange",
    defaultValues: {
      location: "",
      fishingDate: "",
      fishSpecies: undefined,
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = form;

  const onSubmit = (values: FishingAnalysisFormValues) => {
    console.log(values);
  };

  return (
    <section id="analysis" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Analyze Fishing Conditions
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Enter your fishing trip details and let FishWise AI analyze live
          weather conditions to generate personalized fishing recommendations.
        </p>
      </div>

      <Card className="mx-auto mt-10 w-full max-w-3xl rounded-3xl border border-border/70 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Trip Details</CardTitle>
          <CardDescription>
            Complete all fields to prepare your fishing analysis.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            noValidate
            className="grid gap-6"
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
          >
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                placeholder="Enter a city (e.g. Tbilisi)"
                className="h-10"
                aria-invalid={Boolean(errors.location)}
                aria-describedby={errors.location ? "location-error" : undefined}
                {...register("location")}
              />
              {errors.location ? (
                <p id="location-error" className="text-sm text-destructive">
                  {errors.location.message}
                </p>
              ) : null}
            </div>

            <Controller
              control={control}
              name="fishingDate"
              render={({ field }) => (
                <DatePicker
                  id="fishingDate"
                  label="Fishing Date"
                  value={field.value}
                  onChange={field.onChange}
                  minDate={minDate}
                  error={errors.fishingDate?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="fishSpecies"
              render={({ field }) => (
                <FishSelect
                  id="fishSpecies"
                  label="Fish Species"
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.fishSpecies?.message}
                />
              )}
            />

            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={!isValid}
                className="h-11 w-full sm:w-auto"
                aria-label="Analyze conditions"
              >
                Analyze Conditions
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
