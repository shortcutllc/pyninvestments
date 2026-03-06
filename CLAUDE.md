# CLAUDE.md — Pyn Investments

## Project Overview

Pyn Investments (pyninvestments.com) is a family investment firm website + password-gated financial dashboard. Migrated from Squarespace in 2025.

- **Stack:** React 19 + TypeScript 5.9 (strict) + Tailwind CSS v4 + Vite 7 + Supabase Auth + Recharts
- **Deployment:** Netlify auto-deploy from `main` branch. SPA redirect in `netlify.toml`.
- **Env vars:** `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (set in Netlify + `.env` locally)
- **Build:** `npm run build` → `tsc -b && vite build`
- **Dev:** `npm run dev` → Vite on port 5173

## Architecture

```
src/
  App.tsx                    # Routes (Layout wraps public pages; /login + /dashboard standalone)
  main.tsx                   # Entry point, BrowserRouter
  index.css                  # Tailwind v4 + @theme design tokens
  components/
    Layout.tsx               # Navbar + Footer + ScrollToTop wrapper
    Navbar.tsx               # Fixed top nav, mobile hamburger, Sign In link
    Footer.tsx               # CTA section + contact info + Employee Login link
    LowerPyneDashboard.tsx   # THE BIG FILE (~4500 lines) — 6-tab financial dashboard
    ProjectionChart.tsx      # Recharts AreaChart (lazy-loaded)
    ProtectedRoute.tsx       # Supabase session guard → /login redirect
    ScrollToTop.tsx          # Scroll to top on route change
    PlaceholderImage.tsx     # Gray placeholder for missing images
  pages/
    Home.tsx                 # Hero + About Pyn + investment grid (filters hidden)
    About.tsx                # Company history
    OurTeam.tsx              # Team cards (filters hidden members)
    Press.tsx                # Press articles with external links
    Contact.tsx              # Contact form + address
    InvestmentDetail.tsx     # Individual investment with prev/next nav
    Login.tsx                # Supabase email/password sign-in
    Dashboard.tsx            # Wraps LowerPyneDashboard, email-based tab restriction
  data/
    investments.ts           # Investment[] array with hidden flag pattern
  lib/
    supabase.ts              # Supabase client from env vars
```

### Routing

| Path | Component | Auth | Layout |
|------|-----------|------|--------|
| `/` | Home | Public | Yes |
| `/about` | About | Public | Yes |
| `/team` | OurTeam | Public | Yes |
| `/press` | Press | Public | Yes |
| `/contact` | Contact | Public | Yes |
| `/investments/:slug` | InvestmentDetail | Public | Yes |
| `/login` | Login | Public | No |
| `/dashboard` | Dashboard (ProtectedRoute) | Supabase session | No |

### Auth & Access Control

- Supabase email/password auth (invite-only, no self-registration)
- `ProtectedRoute` checks `supabase.auth.getSession()`, redirects to `/login` if no session
- `Dashboard.tsx` restricts tabs per email:
  - `david.l.dobkin@gmail.com` → only `['projections']`
  - All other authenticated users → all 6 tabs
- Dashboard shows loading state until email resolves (prevents flash of unauthorized tabs)

## Design System

### Color Palette

All colors are defined as `@theme` tokens in `src/index.css`. Use `pyn-*` classes in new code.

**Brand Colors:**

| Token | Hex | Class Example | Usage |
|-------|-----|---------------|-------|
| `pyn-teal` | `#2A4A46` | `bg-pyn-teal` | Hero overlays, CTA bg, primary brand |
| `pyn-teal-light` | `#334A46` | `text-pyn-teal-light` | Dashboard headings, table headers, accent bg |
| `pyn-peach` | `#E8A87C` | `bg-pyn-peach` | CTA buttons |
| `pyn-peach-dark` | `#D4956A` | `hover:bg-pyn-peach-dark` | CTA button hover |
| `pyn-cream` | `#FAF8F5` | `bg-pyn-cream` | Login page bg |
| `pyn-charcoal` | `#1A1A1A` | `text-pyn-charcoal` | Public page headings/body |

**Dashboard Text:**

| Token | Hex | Class Example | Usage |
|-------|-----|---------------|-------|
| `pyn-body` | `#3D4F5F` | `text-pyn-body` | Dashboard body/secondary text |
| `pyn-muted` | `#666666` | `text-pyn-muted` | Placeholder text, em-dashes |
| `pyn-card` | `#FAFAFA` | `bg-pyn-card` | Card backgrounds, alt table rows |

**Status Colors:**

| Token | Hex | Class Example | Usage |
|-------|-----|---------------|-------|
| `pyn-success` | `#2E7D32` | `text-pyn-success` | Positive values, healthy DSCR |
| `pyn-danger` | `#C62828` | `text-pyn-danger` | Negative values, alerts |
| `pyn-warning` | `#B26A00` | `text-pyn-warning` | Caution callouts |
| `pyn-caution` | `#F57F17` | `text-pyn-caution` | DSCR warning zone |
| `pyn-accent-red` | `#FF5050` | `text-pyn-accent-red` | "Confidential" badge |
| `pyn-info` | `#1565C0` | `text-pyn-info` | Info/status badges |

**Highlight Backgrounds:**

| Token | Hex | Class Example | Usage |
|-------|-----|---------------|-------|
| `pyn-success-bg` | `#E2EFDA` | `bg-pyn-success-bg` | Summary rows, positive panels |
| `pyn-success-bg-alt` | `#E8F5E9` | `bg-pyn-success-bg-alt` | Income section bg |
| `pyn-warning-bg` | `#FFF8E1` | `bg-pyn-warning-bg` | Warning callouts, tax notes |
| `pyn-danger-bg` | `#FFEBEE` | `bg-pyn-danger-bg` | Negative balance rows |

**Chart Colors:**

| Token | Hex | Usage |
|-------|-----|-------|
| `pyn-chart-green` | `#6B9E8A` | FCF line, secondary green |
| `pyn-chart-gray` | `#9CA3AF` | Debt service line |
| `pyn-chart-blue` | `#2E5A88` | Timeline badges |

### Typography

- **Public pages:** `font-serif` (Playfair Display) for headings, default sans (Inter) for body
- **Dashboard:** `Outfit` font via `font-['Outfit',system-ui,sans-serif]` on dashboard root
- Public headings: `font-serif text-5xl md:text-6xl text-pyn-charcoal`
- Dashboard headings: `text-[2rem] md:text-[2.5rem] font-extrabold text-[#334A46]`
- Dashboard body: `text-[14px] text-[#3D4F5F] leading-relaxed`
- Dashboard labels: `text-[11px] font-bold uppercase tracking-[.15em] text-[#334A46]`
- Public buttons: `tracking-wide uppercase text-sm font-medium`

### Spacing Conventions

- **Public pages:** `max-w-7xl mx-auto px-6 lg:px-12`, sections `py-20 md:py-28`
- **Dashboard:** `max-w-7xl mx-auto px-6 py-10`, sections spaced with `space-y-16`
- Cards: `rounded-2xl p-5 border border-[#334A46]/[.08]`
- Grids: `grid md:grid-cols-2 gap-4` (cards), `grid-cols-2 md:grid-cols-3 gap-4` (stats)

### Border & Shadow Patterns

- Card borders: `border border-[#334A46]/[.08]`
- Table row dividers: `border-b border-[#334A46]/[.06]`
- Hover: `hover:bg-[#334A46]/[.02] transition-colors`
- Active tab: `bg-white shadow-sm`
- All cards: `rounded-2xl`

### Dashboard Component Patterns

**Section** — Fade-in wrapper (IntersectionObserver). All dashboard sections use this.
```tsx
<Section id="section-id">
  <SectionLabel>Label</SectionLabel>
  <h2 className="text-[1.5rem] font-extrabold text-[#334A46] mb-4">Title</h2>
</Section>
```

**SectionLabel** — `text-[11px] font-bold uppercase tracking-[.15em] text-[#334A46] mb-3`

**Table** — `<Table headers={[...]} rows={[[...]]} compact? />`
- Headers: uppercase, right-aligned after first column
- Rows: hover highlight, right-aligned numbers

**Stat** — `<Stat value="$880K" label="2025 Revenue" accent? />`
- Default: `bg-[#FAFAFA] border border-[#334A46]/[.08]`
- Accent: `bg-[#334A46] text-white`

**ContactCard** — Card with name, company, role, phone, email, sub-contacts, notes

**DeltaCell** — Green/red percentage change. `invert` prop flips logic.

### Formatting Helpers (in LowerPyneDashboard.tsx)

- `fmt(n)` — `$1,234` or `($1,234)` for negative
- `pct(n)` — `41.2%`
- `delta(curr, prev)` — percentage change, null if prev is 0
- `fmtK(n)` — `$123K` (thousands)

## Dashboard Structure

`type Tab = 'analysis' | 'projections' | 'pyn' | 'housing' | 'expenses' | 'contractors'`

| Tab | Label | Content |
|-----|-------|---------|
| `analysis` | Analysis | Investment thesis, rent roll, historical performance, financial statements, projections, refinancing, strategic actions. Has sidebar TOC on desktop. |
| `projections` | Projections | Interactive 10-year model with 13 sliders + Recharts visualization |
| `pyn` | Pyn | Entity structure, assets, cash flow model, W&B distributions, net worth, estate tax |
| `housing` | Housing | Residential transition scenario builder with interactive sliders |
| `expenses` | Personal | David Newton personal expense/income report |
| `contractors` | Contractors | Vendor directory, payment history (2021-2025), expense mapping, bankers, accountants |

## Key Files

| File | Lines | Purpose |
|------|-------|---------|
| `src/components/LowerPyneDashboard.tsx` | ~4500 | All 6 dashboard tabs, financial data, reusable components |
| `src/index.css` | ~40 | Tailwind v4 + @theme design tokens |
| `src/data/investments.ts` | ~120 | Investment data with `hidden` flag |
| `src/pages/Dashboard.tsx` | ~40 | Email-based tab restriction, sign-out |
| `src/components/Navbar.tsx` | ~100 | Public nav with commented-out Our Team link |
| `src/App.tsx` | ~30 | All routes |
| `src/lib/supabase.ts` | ~5 | Supabase client init |

## Code Conventions

### TypeScript
- Strict mode: `strict: true`, `noUnusedLocals`, `noUnusedParameters`
- `verbatimModuleSyntax` — use `import type` for type-only imports
- Export `Tab` type from LowerPyneDashboard for cross-component use

### React
- Function components only
- `useState` for local state, `useMemo` for computed values
- `React.lazy()` + `<Suspense>` for ProjectionChart code-split
- No external state management — all state is component-local

### Tailwind
- Tailwind CSS v4 — tokens in `@theme` block in `index.css`, NOT in `tailwind.config.js`
- Public pages use semantic token classes: `text-pyn-charcoal`, `bg-pyn-teal`
- Dashboard currently uses hardcoded hex in brackets — **new code should use `pyn-*` tokens**
- Responsive: `md:` for tablet, `lg:` for desktop

## Things to Remember

### Hidden Items
- **Investments:** `Vivvi` and `Shortcut` have `hidden: true` in `investments.ts`. Home filters with `.filter(inv => !inv.hidden)`.
- **Team:** `Ben Newton` and `Will Newton` have `hidden: true` in `OurTeam.tsx`. Set `hidden: false` to restore.
- **Nav:** `Our Team` link is commented out in `Navbar.tsx`. Uncomment to restore.

### Financial Data
- All data is hardcoded in `LowerPyneDashboard.tsx` (not from API/database)
- Years: 2023-2025 actuals, 2026-2035 projections
- Historical: 2015-2025 (2017 omitted)
- Contractor payments: 2021-2025

### Dashboard Font
Dashboard uses `Outfit` font (set via inline class on root div). Public pages use Inter + Playfair Display (loaded via Google Fonts in `index.html`).

### Deployment
- Netlify auto-deploys on push to `main`
- SPA redirect: `/* → /index.html` (200 status)
- Build output: `dist/`
