# FishWise AI

FishWise AI is an AI-powered fishing assistant that helps anglers decide whether a specific day and location are suitable for fishing. The application collects trip details, sends them to an n8n workflow, and displays live weather data, fishing scores, and AI-generated recommendations in a modern responsive interface.

---

## Features

- **AI Fishing Analysis** — Submit location, date, and fish species for intelligent trip planning
- **Live Weather Integration** — Real-time weather data via n8n and Open-Meteo APIs
- **Fishing Score** — Clear score visualization with quality categories
- **Smart Recommendations** — AI-powered fishing advice based on current conditions
- **Fishing Tips** — Actionable tips returned from the analysis workflow
- **Responsive UI** — Optimized for desktop, tablet, and mobile
- **Fisherman Profile Preview** — Future-vision dashboard with demo profile data
- **n8n Workflow Integration** — All business logic handled server-side in n8n

---

## Technologies Used

- **Next.js 15** — App Router, React Server Components
- **TypeScript** — Strict type safety across the application
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — Accessible UI component library
- **React Hook Form** — Form state management
- **Zod** — Schema validation
- **Lucide React** — Icon system
- **n8n** — Workflow automation and webhook backend
- **OpenAI** — AI recommendations inside the n8n workflow
- **Open-Meteo API** — Live weather data
- **Open-Meteo Geocoding API** — Location geocoding

---

## Project Structure

```text
app/
  layout.tsx              # Root layout, fonts, metadata
  page.tsx                  # Landing page + analysis + results
  profile/page.tsx          # Fisherman Profile preview
components/
  fishing/                  # Analysis form components
  layout/                   # Navbar, Footer, SiteLayout
  profile/                  # Profile preview components
  results/                  # Results dashboard components
  ui/                       # shadcn/ui primitives
lib/
  api.ts                    # n8n webhook client
  constants.ts              # Brand assets and constants
  profile-demo-data.ts      # Static profile preview data
  utils.ts                  # Shared utilities
types/
  fishing.ts                # API and result TypeScript types
public/
  logo.png                  # Official FishWise AI logo
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/shotarevazishvilii/FishWise.git
cd FishWise
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

```env
NEXT_PUBLIC_N8N_WEBHOOK_URL=
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_N8N_WEBHOOK_URL` | The n8n webhook endpoint URL. The frontend sends validated form data here and receives the fishing analysis JSON response. |

Never hardcode the webhook URL. Always use the environment variable.

---

## How It Works

```text
User
  ↓
Frontend (Next.js)
  ↓
n8n Webhook
  ↓
Weather APIs (Open-Meteo + Geocoding)
  ↓
AI Analysis (OpenAI via n8n)
  ↓
JSON Response
  ↓
Results Dashboard
```

1. The user enters location, fishing date, and fish species on the landing page.
2. The frontend validates input with React Hook Form and Zod.
3. A POST request is sent to the n8n webhook with `{ location, date, fish }`.
4. n8n fetches live weather data, calculates the fishing score, and generates AI recommendations.
5. The frontend receives the JSON response and renders the results dashboard.
6. No business logic runs in the browser — the frontend is a client and presentation layer only.

---

## Future Improvements

- User Authentication
- Database Integration
- Fishing History Storage
- Catch Gallery
- AI Trip Planner
- Favorite Baits Library
- Community Features
- Maps Integration
- Seasonal Analytics

---

## Screenshots

> Add screenshots to the `screenshots/` folder and replace the placeholders below.

### Landing Page

![Landing Page](./screenshots/landing-page.png)

### Fishing Analysis

![Fishing Analysis](./screenshots/fishing-analysis.png)

### Results

![Results](./screenshots/results.png)

### Profile

![Profile](./screenshots/profile.png)

---

## License

MIT License.

---

## Author

**Created by:** Your Name

**GitHub:** [https://github.com/shotarevazishvilii/FishWise](https://github.com/shotarevazishvilii/FishWise)

**Repository:** [https://github.com/shotarevazishvilii/FishWise](https://github.com/shotarevazishvilii/FishWise)
