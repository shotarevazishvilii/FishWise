export const profileDemo = {
  name: "John Fisher",
  experience: "5 Years",
  favoriteFish: "Carp",
  memberSince: "2026",
};

export const statisticsDemo = [
  { label: "Fishing Trips", value: "48" },
  { label: "Average Fishing Score", value: "81" },
  { label: "Best Fishing Score", value: "96" },
  { label: "Favorite Fish", value: "Carp" },
  { label: "Successful Trips", value: "39" },
] as const;

export const tripHistoryDemo = [
  {
    location: "Lake Lisi",
    fishSpecies: "Carp",
    fishingScore: 89,
    weather: "Cloudy",
    date: "2026-07-05",
  },
  {
    location: "Tbilisi Reservoir",
    fishSpecies: "Catfish",
    fishingScore: 76,
    weather: "Sunny",
    date: "2026-06-28",
  },
  {
    location: "Paravani Lake",
    fishSpecies: "Trout",
    fishingScore: 92,
    weather: "Overcast",
    date: "2026-06-15",
  },
  {
    location: "Lake Lisi",
    fishSpecies: "Pike",
    fishingScore: 84,
    weather: "Partly Cloudy",
    date: "2026-06-02",
  },
  {
    location: "Kura River",
    fishSpecies: "Perch",
    fishingScore: 71,
    weather: "Rainy",
    date: "2026-05-20",
  },
  {
    location: "Paravani Lake",
    fishSpecies: "Crucian Carp",
    fishingScore: 88,
    weather: "Clear",
    date: "2026-05-08",
  },
] as const;

export const favoriteLocationsDemo = [
  {
    name: "Lake Lisi",
    description: "A calm urban lake ideal for carp and perch fishing.",
    rating: 5,
  },
  {
    name: "Tbilisi Reservoir",
    description: "Popular spot with varied species and easy shoreline access.",
    rating: 4,
  },
  {
    name: "Paravani Lake",
    description: "High-altitude lake known for trout and peaceful scenery.",
    rating: 5,
  },
] as const;

export const achievementsDemo = [
  { emoji: "🎣", title: "First Catch" },
  { emoji: "🏆", title: "Fishing Expert" },
  { emoji: "🌦", title: "Weather Master" },
  { emoji: "📍", title: "Explorer" },
  { emoji: "🐟", title: "Carp Specialist" },
] as const;

export const comingSoonFeaturesDemo = [
  {
    title: "Personal Fishing Journal",
    description: "Record notes, catches, and conditions from every trip.",
  },
  {
    title: "Catch Photo Gallery",
    description: "Upload and organize photos from your fishing adventures.",
  },
  {
    title: "AI Trip History",
    description: "Review past analyses and AI recommendations over time.",
  },
  {
    title: "Seasonal Fishing Analytics",
    description: "Discover patterns in your best fishing seasons and locations.",
  },
  {
    title: "Saved Weather Reports",
    description: "Access historical weather data for your favorite spots.",
  },
  {
    title: "Favorite Baits Library",
    description: "Save and track which baits work best for each species.",
  },
  {
    title: "Personal Fishing Calendar",
    description: "Plan upcoming trips with reminders and condition alerts.",
  },
  {
    title: "Community Challenges",
    description: "Join fishing challenges and compare progress with others.",
  },
] as const;
