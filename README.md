# FoundersGrant.org — In-Kind Technology & Automation Grants

> **Domain:** [foundersgrant.org](https://foundersgrant.org)  
> **Mission:** Award enterprise-grade web development, custom software, local SEO, and AI workflow automations at $0 cost to bootstrapped founders, local services, and creators who cannot afford agency retainers.  
> **Operated By:** DevMellio LLC · Denver, CO

---

## 🎯 Architecture & North Star

1. **The In-Kind Grant Model**:
   - Never marketed as "cheap free labor" or "charity handouts".
   - Framed as a prestigious **In-Kind Technology Infrastructure Grant** ($3,500–$8,500 market value).
   - Clear, authentic mutual exchange: Recipient gets full production software + code ownership; we get documented metrics and a 2-minute video review for our public case studies.

2. **Programmatic Geo-Architecture**:
   - Programmatically scales across 100+ major US metropolitan areas and states (`/grants/[city]`).
   - Dynamic static generation with `generateStaticParams()` in Next.js App Router for instant sub-second edge delivery.
   - Pre-populates city intake and localized small-business context.

3. **Legal & Compliance Shield**:
   - $0 limitation of liability cap.
   - Standard AS-IS software delivery disclaimers.
   - Full IP and code ownership granted to recipient upon sprint completion.
   - Colorado jurisdiction under DevMellio LLC.

---

## 🚀 Technical Stack

- **Framework**: Next.js 15 (App Router, Server Components + Client Hydration)
- **Styling**: Vanilla CSS Design System with dark glassmorphic tokens, CSS variables, and responsive mobile safe zones (zero bulky framework overhead).
- **Typography**: Google Fonts (`Inter` + `Plus Jakarta Sans`).
- **Data Architecture**: Structured TypeScript catalogs in `src/data/`:
  - `cities.ts`: Metro data, populations, local focus areas, and grant cycle status.
  - `packages.ts`: 4 core grant packages with features and fair market valuations.
  - `stories.ts`: Verified impact studies, before/after metrics, and founder quotes.

---

## 🛠️ Local Development & Build Commands

```bash
# Run local dev server (port 3000)
npm run dev

# Run production build & verify all static pages
npm run build

# Start production server
npm start
```
