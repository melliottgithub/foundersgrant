# FoundersGrant.org — AGENTS.md

## Repository Guidelines & Operational Invariants

### 1. The Value Equation & Grant Framing Invariant
- NEVER refer to the offerings as "free labor", "pro bono handouts", or "volunteering".
- ALWAYS use **"In-Kind Technology Infrastructure Grant"** with clear market valuations ($3,500 – $8,500).
- The mutual exchange must remain visible: high-leverage software delivered at $0 in exchange for a 2-minute video review and permission to feature metrics in a public case study.

### 2. Legal Protections Invariant
- All client agreements, submission forms, and documentation MUST point to `/legal/terms`.
- Maintain the $0 liability limitation and "AS-IS" software disclaimers at all times.
- Ensure the recipient is granted 100% full IP code ownership and repository access upon project handover.

### 3. Programmatic Hub Expansion
- When adding new city or international hubs, append them directly to `src/data/cities.ts`.
- Ensure each city entry has a unique slug, metro population, regional focus title, priority needs, and active cycle deadline.
- `generateStaticParams()` will automatically compile new static routes on build.

### 4. Zero-Assumption & Verification Invariant
- Always run `npm run build` to verify clean compilation across all static routes before declaring completion.
