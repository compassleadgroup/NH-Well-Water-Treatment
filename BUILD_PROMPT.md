# ============================================================
# MASTER BUILD PROMPT: Paste this entire file into Claude Code
# Site: nhwellwatertreatment.com
# Brand: NH Well Water Treatment
# Operator: Compass Camper LLC (Oregon), operating as Compass Lead Group
# Goal: Build a compliant, static, SEO lead-gen site on a tight footprint
# ============================================================

You are building NH Well Water Treatment, a rank-and-rent lead generation website. Read this ENTIRE prompt before doing anything. Then read `CLAUDE.md`, `PROJECT_BRIEF.md`, and `COMPLIANCE_STANDARDS.md` in the repo root. Execution happens in batches. After each batch, STOP and wait for my approval before the next.

This is a planned-purchase, research-driven niche (arsenic and uranium in well water). The tone is calm, credible, and educational, never urgent or fear-baiting. We are a marketing service that connects homeowners with licensed local contractors. We never claim to do the work.

# ============================================================
# OPERATOR ONE-TIME SETUP (I do these, not you)
# ============================================================

I am completing these before or around the build. You do not do any of these. Do not attempt Cloudflare or DNS work yourself.

1. Create a private GitHub repo `compassleadgroup/nh-well-water-treatment` with a README so `main` exists.
2. Connect a Cloudflare Pages project to that repo:
   - Production branch: `main`
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22`
   - Do NOT add a custom domain yet. I will review at the `*.pages.dev` URL.
3. Place `CLAUDE.md`, `PROJECT_BRIEF.md`, and `COMPLIANCE_STANDARDS.md` in the repo root.

You will work on a branch and open a pull request. I review the PR and the Cloudflare PR preview, then I merge. Cloudflare auto-builds `main`. You never merge, never deploy, never touch Cloudflare, never point DNS.

# ============================================================
# CRITICAL CONSTRAINTS (non-negotiable)
# ============================================================

DEPLOYMENT:
- Wrangler is banned. Never use it.
- Never call Cloudflare APIs. Never deploy. Never connect Cloudflare. Never point DNS or add a custom domain.
- Commit to a working branch, push, open a PR. I merge. Commit and push source before any deploy is ever discussed.
- Run one command at a time. Do not chain commands with && in a single call.

DEMAND-VALIDATION GATE:
- Build the whole site regardless. But the site is not promoted (no custom domain, no Search Console, no sitemap submission, no citations) until I confirm I have run a Google Keyword Planner pull and a geolocated incognito NH SERP check. If asked to submit the sitemap to Search Console, confirm I cleared this gate first.

COMPLIANCE (COMPLIANCE_STANDARDS.md is authoritative):
- Forbidden language anywhere: "vetted," "our network," "our vetted network," "pre-screened," "pre-qualified," "hand-selected," "carefully selected," "top-rated," "best contractors in [town]," "trusted partners," and first-person work claims ("we test," "we install," "we treat," "we remove," "we fix," "we diagnose," "we repair"). Allowed: "we connect," "we help," "we serve" (as in areas we serve), "licensed and insured local contractors," "the contractor you are matched with."
- Header disclosure strip on every page, above the nav. Footer disclaimer on every page, byte-for-byte identical. Use the exact wording in CLAUDE.md.
- TCPA consent block above every submit button, not pre-checked, not in a popup, with a real link to `/privacy`. Add a code comment marking where TrustedForm or Jornaya integrates before paid traffic.
- Schema allowed types only: Organization, ProfessionalService, Service, FAQPage, BreadcrumbList. NEVER LocalBusiness, Review, AggregateRating, or any Rating without data. FAQ schema answers must match visible text exactly.
- Pre-tenant exclusions: no testimonials, reviews, ratings, review widgets, star ratings, "as featured in" logos, certification or accreditation badges, named team bios, "years in business" or "jobs completed" counters, before-and-after galleries, or specific pricing claims that are not backed by a cited source.
- NH licensing nuance: NH licenses well and pump contractors (RSA 482-B), but water treatment installers are not always separately state-licensed. Verify current NH requirements. Use "licensed and insured local contractors" and "licensing where required," not a blanket license claim if NH does not license treatment installers.

FACT VERIFICATION:
- Every local fact and every statistic must be verified by web search against a primary source (NHDES, USGS, US Census or ACS, Dartmouth Toxic Metals SRP, EPA) before it goes on a page. Put the source in a short HTML comment next to the fact. If a town-specific figure cannot be verified, use a verified county or statewide figure and write it qualitatively. Never invent a number, neighborhood, lab, or failure rate.

STYLE:
- No em dashes anywhere, including code comments and commit messages. Use commas, periods, parentheses, or "to" for ranges.
- Numbers under 10 spelled out, 10 and above as digits. Currency $3,500 with no space. Phone displays as (603) 555-0100 and links as +16035550100 (placeholder, I will swap it).
- Vary sentence openings across pages. Avoid LLM tells ("delve into," "navigate the complexities," "rest assured," "ensure peace of mind," "moreover," "furthermore," "in today's world," "it is important to note").

# ============================================================
# SCAFFOLDING (create these files exactly, then verify the build)
# ============================================================

Create the following files verbatim. These pin the stack to the proven configuration. If the Cloudflare build later errors on a Vite version mismatch, tell me and we will remove the overrides pin rather than you changing it silently.

--- FILE: package.json ---
{
  "name": "nh-well-water-treatment",
  "type": "module",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^6.0.0",
    "@astrojs/sitemap": "^3.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0"
  },
  "overrides": {
    "vite": "7.3.x"
  }
}

--- FILE: astro.config.mjs ---
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nhwellwatertreatment.com',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

--- FILE: tsconfig.json ---
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}

--- FILE: .nvmrc ---
22

--- FILE: .gitignore ---
node_modules/
dist/
.astro/
.DS_Store
*.log
.env
.env.*

--- FILE: public/robots.txt ---
User-agent: *
Allow: /
Disallow: /thank-you

Sitemap: https://nhwellwatertreatment.com/sitemap-index.xml

--- FILE: public/_redirects ---
# Cloudflare Pages redirects. None at launch.
# Add 301s here only when renaming a live URL, one per line:
# /old-path  /new-path  301

--- FILE: src/styles/global.css ---
@import "tailwindcss";

@theme {
  /* Brand: deep teal (clean water, calm authority) */
  --color-brand-50: #f0fdfa;
  --color-brand-100: #ccfbf1;
  --color-brand-200: #99f6e4;
  --color-brand-300: #5eead4;
  --color-brand-400: #2dd4bf;
  --color-brand-500: #14b8a6;
  --color-brand-600: #0d9488;
  --color-brand-700: #0f766e;
  --color-brand-800: #115e59;
  --color-brand-900: #134e4a;
  --color-brand-950: #042f2e;

  /* Ink: slate (text and headlines) */
  --color-ink-50: #f8fafc;
  --color-ink-100: #f1f5f9;
  --color-ink-200: #e2e8f0;
  --color-ink-300: #cbd5e1;
  --color-ink-400: #94a3b8;
  --color-ink-500: #64748b;
  --color-ink-600: #475569;
  --color-ink-700: #334155;
  --color-ink-800: #1e293b;
  --color-ink-900: #0f172a;
  --color-ink-950: #020617;

  /* Accent: amber (primary CTAs only) */
  --color-accent-300: #fcd34d;
  --color-accent-400: #fbbf24;
  --color-accent-500: #f59e0b;
  --color-accent-600: #d97706;
  --color-accent-700: #b45309;
}

html {
  scroll-behavior: smooth;
}

body {
  color: var(--color-ink-800);
  background: #ffffff;
}

--- FILE: .github/workflows/compliance.yml ---
name: Compliance Check

on:
  pull_request:
    branches: [main]

jobs:
  compliance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run compliance greps
        run: |
          set -e
          fail=0

          echo "Checking for em dashes..."
          if grep -rnP "\x{2014}" src/ 2>/dev/null; then
            echo "FAIL: em dash found"; fail=1
          fi

          echo "Checking for forbidden language..."
          if grep -rinE "vetted|our network|pre-screened|pre-qualified|hand-selected|carefully selected|top-rated|trusted partners" src/ 2>/dev/null; then
            echo "FAIL: forbidden language found"; fail=1
          fi

          echo "Checking for first-person work claims..."
          if grep -rinE "we (test|install|treat|remove|fix|diagnose|repair)\b" src/ 2>/dev/null; then
            echo "FAIL: first-person work claim found"; fail=1
          fi

          echo "Checking for forbidden schema types..."
          if grep -rnE "\"(LocalBusiness|AggregateRating|Review)\"" src/ 2>/dev/null; then
            echo "FAIL: forbidden schema type found"; fail=1
          fi

          if [ "$fail" -ne 0 ]; then
            echo "Compliance check failed."
            exit 1
          fi
          echo "Compliance check passed."

# ============================================================
# COMPONENTS TO CREATE
# ============================================================

- BaseLayout.astro: html head with unique title and meta description per page, canonical to the production domain, Open Graph and Twitter tags, a JSON-LD slot, the header disclosure strip, the nav (with phone CTA), the footer mega-nav listing every service, location, and guide plus the legal disclaimer, and a sticky mobile click-to-call bar. Pull in `src/styles/global.css`.
- A reusable contact form component using Web3Forms, with the sharing disclosure, the TCPA consent block above the submit, and a redirect to `/thank-you`.
- Card components for services, locations, and guides.
- An FAQ accordion component whose visible answers exactly match the FAQPage JSON-LD it emits.
- A breadcrumb component that emits BreadcrumbList JSON-LD.

Use Lucide icons only. Build to the Bedrock design system tokens defined in global.css.

# ============================================================
# BUILD SEQUENCE (stop after each batch, wait for my approval)
# ============================================================

Run the session-start tripwire in CLAUDE.md first. Report the result.

BATCH 0: Scaffolding and shell
1. Create all scaffolding files above.
2. Create BaseLayout and the shared components (header strip, nav, footer with disclaimer, sticky mobile call bar, form, cards, FAQ accordion, breadcrumb).
3. Run `npm install` then `npm run build`. Confirm it builds clean.
4. Run the compliance greps. Report results.
5. STOP. Wait for approval.

BATCH 1: Foundation pages (8)
Build Home, How It Works, About, Contact, Privacy, Terms, the custom 404, and `/thank-you` (noindex), per PROJECT_BRIEF.md. Verify the header strip, footer disclaimer, TCPA block, and schema. Run `npm run build` and the greps. Report. STOP.

BATCH 2: Services (overview + 6)
Build `/services` and the six service pages (arsenic, uranium, radon in water, iron and manganese, whole-house, reverse osmosis). Verify and cite all technical and cost facts. Service + FAQPage + BreadcrumbList schema. Run build and greps. Report. STOP.

BATCH 3: Locations (hub + first 6 towns)
Build `/locations` (thin bare-links hub) and the first 6 town pages from PROJECT_BRIEF.md. Verify and cite every local fact per the required data pegs. ProfessionalService (areaServed) + FAQPage + BreadcrumbList. Run build and greps. Report. STOP.

BATCH 4: Locations (remaining 4 to 6 towns)
Build the remaining town pages. Same standard. Run build and greps. Report. STOP.

BATCH 5: Guides (index + 4 to 5)
Build `/guides` and the guides from PROJECT_BRIEF.md. Sourced, genuinely linkable, soft CTA. Author is the brand, not a person. Run build and greps. Report. STOP.

BATCH 6: Cross-linking and final QA
Add the full internal-linking map. Verify the full per-build definition of done in CLAUDE.md and PROJECT_BRIEF.md. Run build and greps. Report. STOP. Build complete.

# ============================================================
# AFTER EACH BATCH, REPORT
# ============================================================

1. Files created, modified, or deleted.
2. Compliance grep results, run these exactly:
   - grep -rnP "\x{2014}" src/
   - grep -rinE "vetted|our network|pre-screened|pre-qualified|hand-selected|carefully selected|top-rated|trusted partners" src/
   - grep -rinE "we (test|install|treat|remove|fix|diagnose|repair)\b" src/
   - grep -rnE "\"(LocalBusiness|AggregateRating|Review)\"" src/
3. `npm run build` result.
4. Any local fact you could not verify and how you handled it (which qualitative phrasing replaced which number).
5. Any judgment calls or conflicts you flagged.
6. Anything that needs my decision before the next batch.

# ============================================================
# GIT WORKFLOW
# ============================================================

- Work on a branch named `build/initial-site`.
- Commit in logical chunks with clear messages and no em dashes.
- Push the branch and open one pull request into `main`.
- Do NOT merge. Do NOT deploy. Do NOT touch Cloudflare. I review the PR and the Cloudflare preview, then I merge.

# ============================================================
# STARTING INSTRUCTIONS
# ============================================================

1. Read this entire prompt, then CLAUDE.md, PROJECT_BRIEF.md, and COMPLIANCE_STANDARDS.md.
2. Run the session-start tripwire and report the result.
3. Execute BATCH 0 only.
4. Report per the reporting section.
5. STOP and wait for my approval before BATCH 1.

Do not use Wrangler. Do not call Cloudflare APIs. Do not merge or deploy. Begin with the tripwire, then BATCH 0.
