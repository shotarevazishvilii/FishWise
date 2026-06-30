import type { AnalyzeFishingConditionsInput, FishingResult } from "@/types/fishing";

export type { FishingResult };

export const WEBHOOK_URL_ENV_KEY = "NEXT_PUBLIC_N8N_WEBHOOK_URL" as const;

function toApiError(message: string, status?: number): Error {
  return status ? new Error(`${message} (status: ${status})`) : new Error(message);
}

function isFishingResult(value: unknown): value is FishingResult {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.weather === "string" &&
    typeof candidate.temperature === "number" &&
    typeof candidate.pressure === "number" &&
    typeof candidate.wind === "number" &&
    typeof candidate.fishingScore === "number" &&
    typeof candidate.bestFishingTime === "string" &&
    typeof candidate.recommendedBait === "string" &&
    typeof candidate.recommendation === "string" &&
    typeof candidate.tips === "string"
  );
}

export async function analyzeFishingConditions(
  input: AnalyzeFishingConditionsInput,
): Promise<FishingResult> {
  const webhookUrl = process.env[WEBHOOK_URL_ENV_KEY];

  if (!webhookUrl) {
    throw toApiError("Webhook URL is missing. Please configure environment variables.");
  }

  let response: Response;
  try {
    response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
  } catch {
    throw toApiError("Unable to reach the analysis service. Check your network and try again.");
  }

  if (!response.ok) {
    throw toApiError("Analysis service returned an error. Please try again.", response.status);
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw toApiError("Received an invalid server response. Please try again.");
  }

  if (!isFishingResult(data)) {
    throw toApiError("Received an unexpected response format from the analysis service.");
  }

  return data;
}
