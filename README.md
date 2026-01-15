# Visibility Engine

Production-ready Next.js MVP mit PageSpeed 100 Focus.

## Setup

```bash
npm install
npm run dev
```

## Struktur

- `app/(public)` - Öffentliche Seiten (SSG, kein Client-JS)
- `app/(auth)` - Auth-Flows (SSR, minimal JS)
- `app/dashboard` - Geschützter Bereich (Client-Side)

## Performance-Regeln

- Public Pages: `force-static`, kein `'use client'`
- Blog: ISR mit 60s revalidate
- Dashboard: `'use client'` ab layout.tsx
- System Fonts only (0 KB)

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + CSS Custom Properties
- Zero external fonts
