# MyselfX Developer — Next.js + FastAPI Starter Kit (Frontend)

Production-ready full-stack starter kit by **MyselfX Developer** built with
Next.js 14, FastAPI, PostgreSQL, Tailwind CSS and shadcn/ui. Features JWT
authentication, an admin dashboard and a polished dark/light theme.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables

Copy `.env.example` to `.env.local` and set:

- `API_BASE_URL` — the FastAPI backend base URL (e.g. `http://localhost:8000`).

The landing page renders fully without a backend. Login, dashboard, items and
admin routes need a running FastAPI API.

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — start the production server
- `npm run lint` — lint with Next ESLint
- `npm run test:ts` — TypeScript type-check (`tsc --noEmit`)

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel, click **Add New → Project** and import the repo.
   Vercel auto-detects Next.js and uses Node 20+ (this project requires
   `>= 20.0.0`, Vercel's default is fine).
3. Add the environment variable `API_BASE_URL` pointing at your live FastAPI
   backend (optional — the landing page works without it).
4. Choose a Project Name to set your live URL, e.g. `myselfx-platform` →
   `https://myselfx-platform.vercel.app`.
5. Click **Deploy**. Build runs `npm install && npm run build`.

## Contact

- Email: `myselfxdeveloper@gmail.com`
- Phone / WhatsApp: `+92 344 1586424`
- Location: Multan, Punjab, Pakistan