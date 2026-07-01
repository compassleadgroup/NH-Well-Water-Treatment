# CLAUDE.md: Standing Instructions for NH Well Water Treatment

This file is your persistent project context. Read it in full at the start of every session before working on any task. It defines who we are, what we are building, the tech stack, design rules, content rules, compliance rules, SEO rules, and the definition of done that applies to every page.

For specific page content, read `PROJECT_BRIEF.md` in the project root.
For the authoritative compliance master, read `COMPLIANCE_STANDARDS.md` in the project root. On any conflict between this file or PROJECT_BRIEF.md and COMPLIANCE_STANDARDS.md, COMPLIANCE_STANDARDS.md wins.

---

## SESSION-START TRIPWIRE (run before any other work)

Before doing anything else, confirm you are in the correct repository. Run these three checks and report the result in one line:

1. **Niche check:** Does `PROJECT_BRIEF.md` contain the phrase "well water" and "arsenic"? It must.
2. **Design system check:** Does this file reference the design system name "Bedrock"? It must.
3. **Repo check:** Is the git remote `compassleadgroup/nh-well-water-treatment`? It must.

If any check fails, STOP. Do not edit anything. Output: "Tripwire failed: [which check], expected [X], found [Y]. I may be in the wrong repo. Confirm before I proceed." Wait for the operator.

If all three pass, output: "Tripwire passed: NH Well Water Treatment, Bedrock design system, correct repo." Then continue.

Before adding, replacing, or wiring any image or visual asset, read the
"Image and Visual Asset Standards" section of COMPLIANCE_STANDARDS.md and
apply it without exception.

---

## SITE VARIABLES

- **SITE_BRAND:** NH Well Water Treatment
- **DOMAIN:** nhwellwatertreatment.com
- **PRODUCTION_URL:** https://nhwellwatertreatment.com
- **PRIMARY_GEO:** New Hampshire (statewide brand, demand focus on the Lakes Region and inland Strafford and Seacoast areas, deliberately NOT the Manchester, Nashua, or Concord city cores)
- **PRIMARY_STATE:** New Hampshire
- **PRIMARY_STATE_ABBR:** NH
- **NICHE:** well water treatment
- **NICHE_SHORT:** water treatment
- **NICHE_PROVIDER:** licensed and insured local water treatment contractors
- **TARGET_CUSTOMER:** private-well homeowners
- **DEMAND_DRIVER:** naturally occurring arsenic, uranium, and radon in New Hampshire's granite bedrock, the state's 5 ppb arsenic drinking-water standard, and the well-water disclosure that comes up when a home is bought or sold
- **CONVERSION_OFFER:** a free in-home water test and quote from a licensed local contractor
- **TICKET_RANGE:** $1,500 to $10,000 or more (a single-contaminant point-of-use system on the low end, a whole-house multi-contaminant system on the high end)
- **PHONE_DISPLAY:** (603) 555-0100  [PLACEHOLDER. Replace with a real TextNow 603 number before launch. Swap to a CallRail tracking number before any tenant outreach.]
- **PHONE_TEL:** +16035550100  [PLACEHOLDER, see above]
- **CONTACT_EMAIL:** compassleadgroup@gmail.com  [Real and monitored. Optionally add an info@nhwellwatertreatment.com forwarder later.]
- **LAUNCH_YEAR:** 2026
- **HOURS:** Monday to Friday, 9:00 AM to 6:00 PM Eastern
- **REPO:** compassleadgroup/nh-well-water-treatment (private)
- **DESIGN_SYSTEM:** Bedrock

---

## PROJECT OVERVIEW

**Brand:** NH Well Water Treatment
**Legal operating entity:** Compass Camper LLC (Oregon), operating as Compass Lead Group
**Business model:** A marketing service that connects New Hampshire private-well homeowners with licensed and insured local water treatment contractors. We do not test water, we do not install systems, and we do not perform any water treatment work. We are a lead generation and marketing platform.
**Target customer:** Homeowners on private wells in New Hampshire, with demand concentrated in the Lakes Region and inland Strafford and Seacoast areas.
**Buyer intent:** Planned and research-driven. Arsenic and uranium are odorless and tasteless. A homeowner discovers a problem through a water test, then researches health risk and treatment options over days or weeks before requesting quotes. This is NOT an emergency niche. The site must read like a calm, credible resource, not an urgent sales pitch.
**Site type:** Static, SEO-optimized lead generation website on a tight, data-rich footprint (rank-and-rent model).

---

## TECH STACK (do not change versions during the build)

- **Framework:** Astro 6.x with TypeScript in strict mode
- **Styling:** Tailwind CSS v4 via the `@tailwindcss/vite` plugin. No `tailwind.config.js`. Theme tokens live in `src/styles/global.css` under `@theme`.
- **Build output:** Static, no SSR
- **Node:** 22.x, pinned in `.nvmrc`. Astro 6 requires Node 22. The Cloudflare Pages build environment must be set to Node 22.
- **Sitemap:** `@astrojs/sitemap` 3.x. Sitemap index publishes at `https://nhwellwatertreatment.com/sitemap-index.xml`.
- **Forms:** Web3Forms (free). Access key in the form HTML. Form redirects to `/thank-you`.
- **Hosting:** Cloudflare Pages via GitHub auto-build from the `main` branch. The build runs in Cloudflare's cloud, never locally and never on the iPad.
- **Domain registrar:** Cloudflare Registrar
- **Analytics:** GA4 via Cloudflare Zaraz, added after launch. Do NOT inject any analytics or third-party scripts during the build.
- **Call tracking:** TextNow placeholder number pre-launch, CallRail before tenant outreach.
- **Icons:** Lucide icons only. Never mix icon libraries.

`astro.config.mjs` `site` value MUST be exactly `https://nhwellwatertreatment.com`. A mismatch breaks canonical URLs and the sitemap.

---

## DEPLOYMENT RULES (permanent, non-negotiable)

- **Wrangler is banned.** Never use the Wrangler CLI for anything. It has created duplicate rogue Pages projects in the past.
- **Never call Cloudflare APIs directly.** Never deploy. Never connect or configure a Cloudflare Pages project. The operator does all Cloudflare work.
- **Standard workflow:** You commit to a working branch, push the branch, and open a GitHub pull request. The operator reviews and merges into `main`. Cloudflare auto-builds from `main`. You never merge.
- **Commit and push source before any deploy is requested.** This prevents repo-versus-live drift, which has been a costly incident before.
- **Do not point DNS, do not add a custom domain, do not submit to Search Console, and do not start citations** until the operator confirms the demand-validation gate below has passed.

---

## DEMAND-VALIDATION GATE (build fully, promote only after this passes)

Build the entire site to the spec regardless. But the site does NOT get promoted (no custom domain, no Search Console, no citations, no link building) until the operator has personally run and confirmed both of these:

1. A free Google Keyword Planner pull confirming real planned-intent search volume for the money keywords in the target areas.
2. A manual incognito SERP check from a New Hampshire geolocation confirming how the map pack, AI Overviews, and ads actually render for the money queries, and confirming the organic field is beatable.

If you are ever asked to point DNS or submit the sitemap to Search Console, confirm the operator has cleared this gate first.

---

## DESIGN SYSTEM: "Bedrock"

Clean, calm, credible. This is a health-and-water trust brand, not a hardware-store flyer. Avoid alarmist red. Avoid stocky "happy family drinking water" cliches.

### Color tokens (defined in `src/styles/global.css` under `@theme`)
- **Primary (deep teal):** the `brand-*` scale. Deep teal communicates clean water and calm authority. Use the darkest steps for headers and dark sections, mid steps for accents, lightest for subtle backgrounds.
- **Ink (slate):** the `ink-*` scale for body text and headlines on light backgrounds.
- **Accent (amber):** the `accent-*` scale for primary CTAs only. Warm, confident, high-contrast against teal. Use sparingly.
- **Neutrals:** white, an off-white surface, and the slate scale.

### Typography
- Headlines: bold, large, ink-900 on light, white on dark.
- Body: 16px base, leading-relaxed, ink-800.
- In-body links: brand-700, underline on hover.
- All-caps only for small section eyebrow labels.

### Spacing and rhythm
- Section padding: py-16 to py-24 desktop, py-12 mobile.
- Paragraphs always have visible vertical spacing (space-y-4 on prose containers, mb-4 minimum).
- Content max width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8. Prose blocks max-w-3xl. Grids max-w-6xl.
- Alternate section backgrounds for flow: white, off-white, white, deep-teal (white text), white. Never stack two identical backgrounds without a strong separator.

### Buttons
- Primary CTA: amber background, ink-900 or white text for max contrast, generous padding, rounded-md, clear hover state.
- Secondary CTA: outline with brand-700 border and text.
- Phone CTA: always includes a Lucide phone icon and a `tel:` link.
- Minimum mobile tap target 48px tall. Full width on mobile, auto width on desktop.

### Cards
White background, soft shadow, rounded-lg, p-6 to p-8. Icon at top in a brand-50 circle with a brand-700 Lucide icon.

### Sticky mobile call bar
A bottom-fixed click-to-call bar on mobile across every page.

---

## BRAND VOICE AND WRITING RULES

### Voice
- **Calm and credible.** The knowledgeable local resource, not a salesperson. This buyer is researching a health concern, not reacting to a flood.
- **Educational first.** Explain the contaminant, the health context, the testing, and the treatment options plainly before any call to action.
- **Honest about the model.** We are a matching service. We say so.
- **Locally grounded.** Reference New Hampshire's granite bedrock, the 5 ppb arsenic standard, specific towns and counties, and the home-sale disclosure trigger wherever it is natural and accurate.

### Never violate
- **No emergency or fear-bait framing.** No "act now," "don't wait," "stop worrying," "same-week," countdown urgency. Arsenic is a long-term exposure issue. Treat it with seriousness, not panic.
- **No fake history, tenure, or "since [year]" claims.** The brand is new in 2026. Compass Camper LLC is the operator.
- **No fake certifications, awards, BBB ratings, or media logos.**
- **No fake testimonials, reviews, customer names, or project photos.** Omit these sections entirely until a real tenant provides real, consented content.
- **No fake team members or stock-photo bios.**
- **No fabricated statistics or local facts.** Every number and every local detail must be verified against a primary source (NHDES, USGS, US Census, Dartmouth Toxic Metals SRP) before it goes on the page. If a town-specific figure cannot be verified, use a verified county or statewide figure and describe it qualitatively. Never invent a number, a neighborhood, a lab, or a failure rate.

### Allowed, honest, and converting
- "Licensed and insured local contractors"
- "A licensed water treatment contractor in your area"
- "The contractor you are matched with"
- "We connect New Hampshire homeowners with..."
- "We help you find..."
- "A free in-home water test and quote from a licensed local contractor"
- Specific verifiable contractor criteria: hold any licensing required in New Hampshire, carry general liability insurance, provide written itemized estimates, offer written workmanship warranties.

### Forbidden language (creates legal exposure, see COMPLIANCE_STANDARDS.md)
Never use: "vetted," "our network," "our vetted network," "pre-screened," "pre-qualified," "hand-selected," "carefully selected," "top-rated," "best contractors in [town]," "trusted partners," or any first-person work claim ("we test," "we install," "we treat," "we remove," "we fix").

### Style
- **No em dashes anywhere.** Not in copy, not in code comments, not in commit messages. Use commas, periods, parentheses, or "to" for ranges.
- Numbers under 10 spelled out, 10 and above as digits.
- Currency: $3,500 with no space after the dollar sign.
- Phone: always display as PHONE_DISPLAY, link as `tel:PHONE_TEL`.
- Capitalize service names consistently across the site.
- Service and location slugs lowercase with hyphens.
- Vary sentence openings across pages. Do not let every page start with "When it comes to well water in [town]."
- Avoid LLM tells: "in today's world," "navigate the complexities," "delve into," "ensure peace of mind," "rest assured," "moreover," "furthermore," "it is important to note."

---

## COMPLIANCE REQUIREMENTS (summary, COMPLIANCE_STANDARDS.md is authoritative)

### Header disclosure strip (every page, above the nav)
A thin off-white or light-gray bar, small but readable text, centered:
> "A marketing service connecting New Hampshire homeowners with licensed local water treatment contractors. Compass Camper LLC is not a contractor and does not perform water treatment work."

Not footer-only. The FTC net-impression doctrine requires the reader to actually encounter it.

### Footer disclaimer (every page, identical wording)
> "This website is operated by Compass Camper LLC (Oregon), a licensed marketing and lead generation company. NH Well Water Treatment is a marketing service that connects homeowners with independent, licensed local water treatment contractors. All water testing and treatment services are performed by independent licensed contractors. Compass Camper LLC is not a contractor and does not perform water treatment work directly. Contractor license numbers are available upon request."

### Form consent (above every submit button, not pre-checked, not in a popup)
TCPA consent block plus a sharing disclosure. Use the templates in COMPLIANCE_STANDARDS.md, with [SERVICE] resolved to "water treatment." The Privacy Policy link must be a real link to `/privacy`. Add a code comment marking where a TrustedForm or Jornaya token would integrate before any paid traffic.

### Schema (JSON-LD), allowed types only
- **Organization** on the About page, referencing Compass Camper LLC, Oregon.
- **ProfessionalService** on the homepage and on location pages, with a description that says this is a marketing and lead generation service for water treatment, and `areaServed` set to the relevant New Hampshire area. The category must describe a marketing or referral service, never a contractor category.
- **Service** on service pages, described as connecting homeowners with licensed contractors for that service, not as performing it.
- **FAQPage** on any page with FAQs. The JSON-LD answer text must match the visible answer exactly.
- **BreadcrumbList** on service, location, and guide pages.
- **NEVER** LocalBusiness, Review, AggregateRating, or any Rating without underlying data. Fake review schema carries an FTC penalty up to $53,088 per violation.

### Pre-tenant exclusions (do not build any of these yet)
Testimonials, review widgets, star ratings, AggregateRating or Review schema, "as featured in" logos, certification or accreditation badges, named team bios, "years in business" or "jobs completed" counters, before-and-after galleries, and specific pricing claims that are not backed by verified market data with a cited source.

---

## SEO REQUIREMENTS (every page)

### Meta and head (via the BaseLayout)
- Unique meta title, 60 characters or fewer.
- Unique meta description, 155 characters or fewer.
- Canonical URL pointing to the page itself on the production domain.
- Open Graph and Twitter card tags.
- No noindex except on `/thank-you`.

### Internal linking
- Footer mega-nav links to every service and every location on every page (hub and spoke from the footer).
- Service pages link to the homepage, 3 or more other service pages, and 2 to 3 location pages.
- Location pages link to the homepage, 3 or more service pages, and 3 to 4 adjacent location pages.
- Guides link to the relevant service pages.
- Visible breadcrumbs on service, location, and guide pages.

### Images
- Descriptive alt text. Format: "[subject], [New Hampshire location context]" with no em dash.
- Use Astro image optimization. WebP with fallback. Lazy-load below the fold.
- Use images sparingly. No stock-photo bloat. No fake before-and-after, no fake teams, no "happy family" stock. Diagrams, illustrative graphics, and generic New Hampshire landscape or home imagery are fine.

### URL structure
- Home `/`, How It Works `/how-it-works`, About `/about`, Contact `/contact`, Privacy `/privacy`, Terms `/terms`, Thank you `/thank-you` (noindex).
- Services overview `/services`, service pages `/services/[slug]`.
- Locations hub `/locations`, location pages `/locations/[town]-nh`.
- Guides index `/guides`, guide pages `/guides/[slug]`.
- No trailing slashes, no `.html`.

---

## DEFINITION OF DONE

### Per page
1. Unique meta title and description within limits.
2. One H1 containing the primary keyword, clean H2 and H3 structure.
3. Correct schema injected and valid (matches the allowed list, FAQ answers match visible text).
4. Mobile-responsive at 375px, 768px, and 1280px.
5. All CTAs clickable, all `tel:` links working, zero internal 404s.
6. No placeholder or Lorem Ipsum text. No fabricated facts.
7. Visible paragraph spacing.
8. Header disclosure strip and footer disclaimer present and intact.
9. No console errors.
10. No forbidden language, no em dashes, no forbidden schema.

### Per build (before reporting a batch done)
1. `npm run build` runs clean in the Cloudflare-equivalent Node 22 environment (you can run it locally in your sandbox to verify, but you never deploy).
2. Every internal link resolves to a real page.
3. The sitemap includes every indexable page and excludes `/thank-you`.
4. `robots.txt` is correct.
5. Every page has a unique meta title and description.
6. The footer disclaimer is byte-for-byte identical across all pages.
7. All phone numbers display as PHONE_DISPLAY and link to PHONE_TEL.
8. The compliance greps in the build prompt return zero hits.

---

## BUILD ORDER (tight footprint, target about 30 indexable pages)

Build in this order. Stop after each batch and wait for operator approval.

**Phase 1, Foundation (8 pages):** Home, How It Works, About, Contact, Privacy, Terms, a custom 404, and the `/thank-you` page (noindex).

**Phase 2, Services (1 + 6 pages):** Services overview, then the six contaminant and system pages: Arsenic Treatment, Uranium Treatment, Radon in Water Treatment, Iron and Manganese Treatment, Whole-House Water Treatment, Reverse Osmosis Systems.

**Phase 3, Locations (1 + 10 to 12 pages):** The `/locations` hub (a thin, bare-links page), then one page per target New Hampshire town from PROJECT_BRIEF.md, each carrying genuinely unique, verified local data.

**Phase 4, Guides (1 + 4 to 5 pages):** The `/guides` index, then the linkable guides specified in PROJECT_BRIEF.md.

Do NOT build combinatorial service-times-town pages. The location pages are general to the town and earn their place through unique local data, not through repeating each service for each town.

---

## WORKING STYLE

### Autonomy
Work through PROJECT_BRIEF.md autonomously within a batch. Make minor design and phrasing calls yourself within the voice and rules above. Stop and ask only when:
1. You hit genuine content ambiguity that changes meaning.
2. You hit a technical error you cannot resolve.
3. You are about to do anything destructive or irreversible.
4. A local fact cannot be verified and the spec depends on it.
5. You finish a batch.

Flag conflicts explicitly. Never silently paper over a conflict between this file, PROJECT_BRIEF.md, and COMPLIANCE_STANDARDS.md. Surface it and let the operator decide.

### Git discipline
Commit in logical chunks with clear messages (no em dashes in messages). Push to a working branch. Open a PR. Do not merge, do not deploy, do not touch Cloudflare.

### Reporting back after each batch
1. What was built (page count, components, any deviations).
2. Content judgment calls, especially any place a specific number was replaced with a qualitative statement because it could not be verified.
3. Skipped or incomplete items.
4. Compliance grep results.
5. Build result.
6. Anything that needs an operator decision before the next batch.

---

## COMMON PITFALLS TO AVOID

- Do not add testimonials, reviews, ratings, team bios, or project photos.
- Do not use LocalBusiness, Review, or AggregateRating schema.
- Do not use any forbidden language or any em dash.
- Do not write emergency or fear-bait copy. This is a planned-purchase niche.
- Do not invent local facts, neighborhoods, labs, or statistics.
- Do not build combinatorial service-by-town pages.
- Do not auto-update Astro, Vite, or Tailwind during the build.
- Do not inject analytics or third-party scripts yet.
- Do not connect Cloudflare, point DNS, or submit to Search Console.
- Do not use Wrangler. Do not call Cloudflare APIs. Do not merge or deploy.

---

End of CLAUDE.md
