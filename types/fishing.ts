export interface WeatherData {
  weather: string;
  temperature: number;
  pressure: number;
  wind: number;
}

export interface FishingResult extends WeatherData {
  fishingScore: number;
  bestFishingTime: string;
  recommendedBait: string;
  recommendation: string;
  tips: string;
}

export interface AnalyzeFishingConditionsInput {
  location: string;
  date: string;
  fish: string;
}

export interface ApiError {
  message: string;
  status?: number;
}
