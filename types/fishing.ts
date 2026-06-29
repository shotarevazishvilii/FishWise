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

export interface ApiError {
  message: string;
  status?: number;
}
