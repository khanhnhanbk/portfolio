# Khanh Nhan — freelance profile site

Personal profile site in Vietnamese (`/`) and English (`/en`). Static Next.js 15 (App Router),
React 19, TypeScript and Tailwind CSS. No database, no backend, no environment variables.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000 (VI) and http://localhost:3000/en (EN)
npm run build    # production build; / and /en are prerendered as static pages
npm run lint
```

## Editing content

- All page copy lives in `lib/i18n/vi.ts` (Vietnamese, the source of the `Dictionary` type) and
  `lib/i18n/en.ts`. A key missing from `en.ts` is a type error, so the two stay in sync.
- Email, phone, Zalo and project links live in `lib/contact.ts`.
- Each locale has its own root layout (`app/(vi)/layout.tsx`, `app/(en)/layout.tsx`), so `<html lang>`
  and metadata are correct per language.

## Profile photo

Put a square photo at `public/avatar.jpg` (at least 320×320 px), then restart `npm run dev` or
rebuild. Without that file the site shows a "KN" initials circle instead.

## Deploy on Vercel

1. Push this repo to GitHub.
2. On vercel.com: **Add New → Project**, import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables needed. Click **Deploy**.
4. Once you know the final URL, update `SITE_URL` in `lib/contact.ts` (used for Open Graph and
   language alternates) and push again.
