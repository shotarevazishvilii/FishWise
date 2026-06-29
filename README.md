# FishWise AI

AI-powered fishing assistant web application.

FishWise AI helps fishermen decide whether a specific day and location are suitable for fishing using real weather data and AI analysis.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- React Hook Form
- Zod

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy the environment file and configure the n8n webhook URL:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_N8N_WEBHOOK_URL` | n8n webhook endpoint for fishing analysis |

## Brand Assets

Place the official FishWise AI logo at `public/logo.png`. The application references this path via `lib/constants.ts`.
