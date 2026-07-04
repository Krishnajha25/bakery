# bakeologgyyy

Landing page for the bakeologgyyy home bakery — Next.js (App Router) + TypeScript, no UI dependencies. Design: "warm patisserie editorial" (cream / cocoa / caramel, Fraunces + Karla via `next/font`).

## Run

```bash
npm install
npm run dev
```

## Where things live

- `src/lib/site.ts` — all content/config: links, menu items, prices, ticker. Edit here, not in components.
- `src/components/` — one component per section (`Hero`, `Menu`, `About`, …).
- `src/app/globals.css` — full design system (CSS variables in `:root`).
- `src/components/Reveal.tsx` — the only client component (scroll-reveal via IntersectionObserver).

## Photos

Real photos from the @bakeologgyyy Instagram live in `public/photos/` (curated, renamed). `public/photos-raw/` holds all 16 originals pulled from the profile — safe to delete or keep for swapping. Images are referenced from `src/lib/site.ts`.

## Before going live

- [ ] Testimonials in `Testimonials.tsx` are placeholders.
- [ ] Menu item descriptions were written by us — have the baker confirm them.
- [ ] Consider replacing `photos/cookies-n-cream.jpg` and the Biscoff card image (currently the assorted-box shot) with dedicated single-cookie photos when available.

Menu, prices (₹) and WhatsApp number come from the printed menu; location, FSSAI status and 1–2 day pre-order from the Instagram bio (July 2026).
