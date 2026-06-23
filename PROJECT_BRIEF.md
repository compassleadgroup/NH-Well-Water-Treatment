# PROJECT_BRIEF.md: NH Well Water Treatment Build Spec

Read `CLAUDE.md` first for standing rules. Read `COMPLIANCE_STANDARDS.md` for the authoritative compliance master. On any conflict, COMPLIANCE_STANDARDS.md wins.

This document specifies content, structure, and SEO for every page. Build in the order in CLAUDE.md. You have freedom on component structure and visual variation. Content, headings, meta tags, schema, and conversion elements must match this spec and the compliance rules.

Two reminders that override the convenience of writing fast:
1. **Every local fact must be verified against a primary source before it goes on a page.** Use web search. Cite the source in a short HTML comment next to the fact. If you cannot verify a town-specific number, use a verified county or statewide figure and phrase it qualitatively. Never invent.
2. **This is a planned-purchase, research-driven niche.** Calm and educational, never urgent or fear-baiting.

---

## SITE CONFIGURATION

- **SITE_BRAND:** NH Well Water Treatment
- **DOMAIN:** nhwellwatertreatment.com
- **PRODUCTION_URL:** https://nhwellwatertreatment.com
- **PRIMARY_STATE:** New Hampshire
- **PRIMARY_STATE_ABBR:** NH
- **NICHE:** well water treatment
- **NICHE_SHORT:** water treatment
- **NICHE_PROVIDER:** licensed and insured local water treatment contractors
- **TARGET_CUSTOMER:** private-well homeowners
- **DEMAND_DRIVER:** naturally occurring arsenic, uranium, and radon in New Hampshire granite bedrock, the state 5 ppb arsenic standard, and the home-sale water disclosure trigger
- **CONVERSION_OFFER:** a free in-home water test and quote from a licensed local contractor
- **TICKET_RANGE:** $1,500 to $10,000 or more
- **PHONE_DISPLAY:** (603) 555-0100  [placeholder, replace before launch]
- **CONTACT_EMAIL:** compassleadgroup@gmail.com
- **LAUNCH_YEAR:** 2026

---

## SERVICES LIST (6 service pages plus an overview)

Each becomes one page at `/services/[slug]`. Frame every service as something the matched contractor provides, never as work we do.

1. **Arsenic Treatment**: `/services/arsenic-treatment`
   Removal of arsenic from private well water using systems sized to the home and the arsenic species present. This is the flagship page and the highest-intent topic in New Hampshire.

2. **Uranium Treatment**: `/services/uranium-treatment`
   Removal of naturally occurring uranium, common in parts of New Hampshire bedrock, typically via anion exchange or reverse osmosis.

3. **Radon in Water Treatment**: `/services/radon-in-water-treatment`
   Reduction of waterborne radon (distinct from airborne radon), typically via aeration or activated carbon, for homes on bedrock wells.

4. **Iron and Manganese Treatment**: `/services/iron-manganese-treatment`
   Removal of iron and manganese that cause staining, taste, odor, and buildup. Often bundled with arsenic and uranium treatment.

5. **Whole-House Water Treatment**: `/services/whole-house-water-treatment`
   Point-of-entry, multi-contaminant systems that treat all water entering the home. This is the higher-ticket configuration and the one to lead buyers toward when multiple contaminants are present.

6. **Reverse Osmosis Systems**: `/services/reverse-osmosis-systems`
   Point-of-use drinking-water systems at the kitchen tap, often paired with whole-house treatment.

Note for the contractor-criteria framing on every service page: New Hampshire licenses well and pump contractors under RSA 482-B, but water treatment installers are not always separately state-licensed, and some installations require a licensed plumber. Verify current NH requirements before publishing. Use "licensed and insured local contractors" and "licensing where required," not an unqualified blanket license claim if NH does not license treatment installers specifically.

---

## LOCATIONS LIST (10 to 12 town pages plus a hub)

Each becomes one page at `/locations/[town]-nh`. These towns are chosen for high private-well reliance and documented arsenic or uranium concerns, and to stay OUT of the contested Manchester, Nashua, and Concord city cores and out of immediate Portsmouth.

**Candidate towns (verify each before building, swap any that turns out to have weak data):**

| Town | County | Why it is on the list (verify all figures) |
|---|---|---|
| Laconia | Belknap | Lakes Region hub, high well reliance in surrounding areas |
| Gilford | Belknap | Lakes Region, residential well dependence |
| Meredith | Belknap | Lakes Region, second-home and year-round wells |
| Moultonborough | Carroll | High private-well reliance, large lot rural housing |
| Wolfeboro | Carroll | Lakes Region, older and newer well stock |
| Dover | Strafford | Larger Strafford-county city, southeastern NH arsenic belt |
| Rochester | Strafford | Strafford-county city, well-dependent surrounding areas |
| Farmington | Strafford | Rural Strafford, high well reliance |
| Barrington | Strafford | Heavily well-dependent residential town |
| Alton | Belknap | Lakes Region, rural wells |
| Belmont | Belknap | Lakes Region adjacent, well reliance |
| Tilton | Belknap | Lakes Region gateway, well reliance |

Build 10 to 12 of these. If verification shows a town has thin or unavailable local data, drop it and note the substitution.

### Required unique data per location page (this is what clears the scaled-content bar)

Each location page must carry these verified, town-specific pegs. This is non-negotiable. Identical pages with only the town name swapped will be penalized.

1. **Demographics and housing:** town population, owner-occupied rate, and housing-age context. Source: US Census or American Community Survey. Cite it.
2. **Private-well reliance:** the share of the town or county on private wells, or a clear statewide-plus-local statement if a town figure is not published. Source: USGS, NHDES, or CDC. Cite it.
3. **Bedrock geology and arsenic or uranium propensity:** the local bedrock context and why it drives arsenic, uranium, or radon. Source: USGS New England arsenic studies, NHDES, or Dartmouth Toxic Metals SRP. Cite it.
4. **Common local co-contaminants:** which contaminants are most relevant in this area (for example arsenic plus uranium, or arsenic plus iron and manganese). Source: NHDES regional data. Cite it.
5. **Real local features:** 3 to 5 real neighborhoods, lakes, rivers, or landmarks for local texture. Real names only.
6. **Testing pathway:** how a homeowner in this area gets a well test (NHDES accredited labs, NHDES test kits, or the contractor free in-home test). Do not invent a specific lab name. Reference NHDES accredited-lab guidance or name a verified lab only if confirmed.
7. **Home-sale disclosure note:** the New Hampshire context for well-water testing when buying or selling a home in this county. Verify current NH disclosure practice before stating it as a rule.

---

## GUIDES LIST (4 to 5 link-bait and trust pages plus an index)

Each at `/guides/[slug]`. These are the linkable assets for free outreach and the trust and topical-authority layer. They are informational, not lead-capture-first, though each ends with a soft CTA.

1. **New Hampshire Arsenic in Well Water: A Homeowner's Guide**: `/guides/arsenic-in-well-water-nh`
   The anchor asset. What arsenic is, why NH bedrock causes it, the 5 ppb standard, how to test, health context (factual, sourced, not alarmist), and treatment options at a high level. Pitch this to NH local press and realtors.

2. **Well Water Testing Before Buying or Selling a Home in New Hampshire**: `/guides/well-water-testing-home-sale-nh`
   The real-estate trigger asset. What buyers and sellers should test for, timing, who pays, what results mean, and how treatment fits a sale. Highly linkable by realtors and relocation resources.

3. **Arsenic-III vs Arsenic-V: Choosing the Right Treatment System**: `/guides/arsenic-treatment-system-comparison`
   The technical decision guide. Why arsenic species matters, how it changes the right system, and what to ask a contractor. Captures research-stage searchers.

4. **Uranium and Radon in New Hampshire Well Water**: `/guides/uranium-radon-well-water-nh`
   The companion-contaminant guide. Why these co-occur with arsenic in NH bedrock, health context, and treatment approaches.

5. **(Optional fifth) A New Hampshire Well Water Contaminants Overview**: `/guides/nh-well-water-contaminants`
   A plain-language map of the common NH contaminants (arsenic, uranium, radon, iron, manganese, hardness, bacteria) and which treatment each calls for. Strong internal-linking hub to all six service pages.

Author every guide as the brand ("NH Well Water Treatment"), never as a fabricated named expert. Cite NHDES, USGS, EPA, and Dartmouth Toxic Metals SRP as outbound authority links. These outbound citations are a Trust signal, not a leak.

---

## PAGE: Homepage (`/`)

Word count 1,500 to 2,400. Calm, credible, educational.

### Meta
- **Title:** Well Water Treatment in New Hampshire | NH Well Water Treatment
- **Description:** Connecting New Hampshire well owners with licensed local contractors for arsenic, uranium, and whole-house water treatment. Free in-home water test and quote.

### Section 1: Hero
- **H1:** New Hampshire Well Water Treatment: Arsenic, Uranium, and Whole-House Filtration
- **Subheadline:** Plain, calm. Note that arsenic and uranium occur naturally in New Hampshire bedrock and are odorless and tasteless, so a test is the only way to know. Close with the matching-service offer: "We connect New Hampshire well owners with licensed local contractors for a free in-home water test and quote."
- **Primary CTA:** "Get a Free Water Test and Quote" to `/contact`
- **Secondary CTA:** "Call PHONE_DISPLAY" (tel link)
- **Trust bar (verifiable items only):** Licensed and insured local contractors / Free in-home water test / No-obligation written quotes / Whole-house and point-of-use systems / New Hampshire 5 ppb arsenic standard

### Section 2: The local context (establishes relevance, not panic)
- **H2:** Why New Hampshire Well Water Carries Arsenic, Uranium, and Radon
- 2 to 3 paragraphs on the granite bedrock geology, the share of New Hampshire residents on private wells, and the fact that private wells are not federally regulated so testing is the homeowner's responsibility. Verify and cite the well-reliance figure and the arsenic standard.

### Section 3: Services grid (6 cards)
- **H2:** Water Treatment Services Available Through Local Contractors
- One card per service, each with a Lucide icon, the service name, a 2 to 3 sentence plain description framed as something the matched contractor provides, and a "Learn more" link to the service page.

### Section 4: How matching works (3 steps, reinforces the model)
- **H2:** How It Works
- Step 1: You tell us about your water (or request a free test). Step 2: We connect you with a licensed local water treatment contractor. Step 3: The contractor tests your water, explains the results, and gives you a written quote. No obligation.
- Link to `/how-it-works`.

### Section 5: What gets tested and treated
- **H2:** Common New Hampshire Well Water Contaminants
- A short, scannable list of arsenic, uranium, radon, iron, manganese, hardness, and bacteria, each with one line on the effect and a link to the relevant service or guide. Verify health context against NHDES or EPA.

### Section 6: Coverage
- **H2:** Serving Well Owners Across New Hampshire
- Tiles linking to the location pages. Closing line: "Do not see your town? Call us and we will connect you with a contractor who serves your area."

### Section 7: FAQ (with FAQPage schema)
- **H2:** Frequently Asked Questions
- 7 to 8 questions. Suggested: How do I know if my well has arsenic? Is arsenic in well water dangerous (factual, sourced)? What does arsenic treatment cost in New Hampshire? Do I need a whole-house system or just a drinking-water system? How often should I test my well? Is the water test really free? Do you install the system (answer: no, we connect you with a licensed local contractor who does)? How long does treatment take to install? Schema answers must match the visible text exactly.

### Section 8: Final CTA
- **H2:** Find Out What Is in Your Well Water
- Calm body referencing testing as the sensible first step. Buttons: "Get a Free Water Test and Quote" and "Call PHONE_DISPLAY."

### Schema
ProfessionalService (marketing and lead generation service for water treatment, areaServed New Hampshire) plus FAQPage.

---

## PAGE: How It Works (`/how-it-works`)

Word count 600 to 1,000. This page exists to make the matching model unmistakable, which is both compliant and trust-building.

### Meta
- **Title:** How It Works | NH Well Water Treatment
- **Description:** How we connect New Hampshire well owners with licensed local water treatment contractors for a free in-home test and a no-obligation quote.

### Content
- Eyebrow "HOW IT WORKS," H1 "How We Connect You With a Local Water Treatment Contractor."
- Clear statement: NH Well Water Treatment is a marketing service operated by Compass Camper LLC. We are not a contractor. We do not test water or install systems.
- The 3-step process expanded, plus what to expect from the contractor (free in-home test, plain explanation of results, written itemized quote, no obligation).
- A short "What the contractor provides" list using the objective criteria (licensing where required, general liability insurance, written estimates, written workmanship warranties).
- Soft CTA to `/contact`.

### Schema
BreadcrumbList.

---

## PAGE: About (`/about`)

Word count 600 to 900.

### Meta
- **Title:** About NH Well Water Treatment | A Local Matching Service
- **Description:** NH Well Water Treatment connects New Hampshire well owners with licensed local water treatment contractors. Learn how we work and who operates this site.

### Content
- Eyebrow "ABOUT," H1 "About NH Well Water Treatment."
- **Who we are:** A marketing service operated by Compass Camper LLC, an Oregon-registered marketing company. We are not a water treatment contractor and do not perform water treatment work. We help New Hampshire well owners find licensed local contractors.
- **Why this exists:** New Hampshire bedrock produces naturally occurring arsenic, uranium, and radon. Many well owners do not know what is in their water and do not know which contractor to call. We make that first step simple. (Verify the geology and contaminant context.)
- **Contractor criteria (objective only):** hold any licensing required in New Hampshire, carry current general liability insurance, provide transparent written itemized estimates, offer written workmanship warranties.
- **Operating company disclosure:** Compass Camper LLC, Oregon. Include the operating-address requirement here. [OPERATOR: insert the real operating address per COMPLIANCE_STANDARDS. Do not fabricate one. It does not need to be prominent, but it must be disclosed on About or Contact.]
- No fake team, no founder bio, no tenure claims.
- Soft CTA to `/contact`.

### Schema
Organization referencing Compass Camper LLC, Oregon. BreadcrumbList.

---

## PAGE: Contact (`/contact`)

Word count light. The form is the point.

### Meta
- **Title:** Contact | Free Water Test and Quote | NH Well Water Treatment
- **Description:** Request a free in-home water test and quote from a licensed New Hampshire water treatment contractor. Call PHONE_DISPLAY or submit the form.

### Hero (compact)
- Eyebrow "GET IN TOUCH," H1 "Request a Free Water Test and Quote."
- Subheadline: a licensed local contractor will reach out to schedule a free in-home water test and provide a written quote. No obligation.
- Trust bar: Free in-home test / No obligation / Licensed and insured contractors.

### Two-column layout
**Left, the form (Web3Forms):**
- Full Name (required)
- Phone (required, tel)
- Email (required, email)
- Property Address (optional)
- Town (dropdown of the location towns plus "Other")
- What is your main water concern? (dropdown: Arsenic / Uranium / Radon in water / Iron, manganese, or staining / Hard water / Not sure, I want a full test / Other)
- Additional details (optional textarea)
- **Sharing disclosure above the consent block:** "When you submit this form, your information is shared with a licensed local water treatment contractor for the purpose of scheduling your free in-home water test and quote."
- **TCPA consent block above submit, not pre-checked:** use the COMPLIANCE_STANDARDS template with [SERVICE] as "water treatment," with a real link to `/privacy`. Add a code comment: TODO integrate TrustedForm or Jornaya consent token before any paid traffic.
- Submit button: "Get My Free Water Test and Quote."
- Form redirects to `/thank-you` on success.

**Right, contact info:**
- "Prefer to call?" with the large clickable PHONE_DISPLAY.
- Hours: Monday to Friday, 9:00 AM to 6:00 PM Eastern.
- A short "What happens next" 3-step box.
- A "Where we work" note listing the service areas.

### Schema
BreadcrumbList.

---

## PAGE: Privacy Policy (`/privacy`)
Use the COMPLIANCE_STANDARDS privacy requirements (10 elements). Reference Compass Camper LLC (Oregon), the domain, CONTACT_EMAIL for privacy requests, the data shared with licensed contractors and processors (Cloudflare, Web3Forms, and later CallRail and GA4 via Zaraz), and TCPA consent retention of at least 5 years. Use LAUNCH_YEAR for the last-updated date.

## PAGE: Terms of Service (`/terms`)
Use the COMPLIANCE_STANDARDS terms requirements. Operator Compass Camper LLC, governing law Oregon, service is marketing and lead generation and not a contractor, disclaim liability for contractor work, no warranty on contractor work, reasonable limitation of liability.

## PAGE: Thank You (`/thank-you`)
Noindex. Short confirmation that the request was received and a licensed local contractor will reach out, a reassuring next-step line, and a link back to the guides for reading while they wait. Keep the header strip and footer disclaimer.

## PAGE: 404
Large "404," H1 "This page does not exist," a primary CTA to `/contact`, a secondary link to `/`, and a short list of popular pages (top services and the arsenic guide).

---

## PAGE: Services Overview (`/services`)

### Meta
- **Title:** Water Treatment Services | NH Well Water Treatment
- **Description:** Arsenic, uranium, radon, iron and manganese, whole-house, and reverse osmosis water treatment from licensed New Hampshire contractors. Free test and quote.

### Content
- Eyebrow "SERVICES," H1 "Well Water Treatment Services in New Hampshire."
- One intro paragraph framing these as services the matched contractor provides.
- The 6-service grid matching the homepage.
- A short "Not sure which you need?" section pointing to the contaminants guide and `/contact`.

### Schema
BreadcrumbList.

---

## SERVICE PAGE TEMPLATE (one per service)

Word count 1,000 to 1,500. Educational, calm, locally grounded. Frame everything as the matched contractor's work.

- **URL:** `/services/[slug]`
- **Meta title:** [Service Name] in New Hampshire | NH Well Water Treatment (cap 60 chars; abbreviate to NH if needed)
- **Meta description:** service-specific, 155 chars, with the free-test offer and a soft CTA.

**Hero:** breadcrumb (Home > Services > [Service]), H1 "[Service Name] in New Hampshire," a 1 to 2 sentence subheadline with the local driver and the free-test offer, two CTAs (form button and phone).

**Section 1, What this is and why New Hampshire wells need it (250 to 350 words, unique per service):** plain explanation, the bedrock or water-chemistry context, sourced. For arsenic, cover that it is odorless and tasteless and tied to the 5 ppb standard. Verify and cite.

**Section 2, How the contractor approaches it (4 to 6 items):** the methods or system types relevant to this contaminant (for arsenic, adsorptive media versus anion exchange versus reverse osmosis, and why species matters; for uranium, anion exchange or RO; for radon, aeration versus carbon; etc.). Verify the technical content. Frame as "a licensed contractor will," never "we will."

**Section 3, What to expect (process, 4 to 6 steps, realistic):** free in-home test, results explained, system recommendation and written quote, installation by the contractor, follow-up. No fake timeframes.

**Section 4, Cost context (honest, sourced):** give a realistic range only if you can cite it (for example NHDES whole-house filtration figures or three real contractor pricing pages), and frame it as "final cost depends on the contaminant levels and the system, and a free test gives you a real number." If you cannot cite a number, describe the cost qualitatively rather than inventing one. Annotate ranges as "2026 New Hampshire market context."

**Section 5, Related services and where this fits (internal links):** link to 3 or more other service pages and 2 to 3 location pages, and to the most relevant guide.

**Section 6, FAQ (5 to 7 service-specific questions, FAQPage schema, answers match visible text).**

**Final CTA + form.**

**Schema:** Service (described as connecting homeowners with licensed contractors for this service) + FAQPage + BreadcrumbList.

---

## LOCATION PAGE TEMPLATE (one per town)

Word count 800 to 1,100, at least 30 to 40 percent genuinely unique. The unique data pegs listed in the Locations section above are mandatory. Calm and local.

- **URL:** `/locations/[town]-nh`
- **Meta title:** Well Water Treatment in [Town], NH | NH Well Water Treatment (cap 60 chars)
- **Meta description:** [Town]-specific, 155 chars, with the free-test offer.

**Hero:** breadcrumb (Home > Locations > [Town]), H1 "Well Water Treatment in [Town], New Hampshire," a subheadline naming the town and the local contaminant context, two CTAs.

**Section 1, Why [Town] wells carry these contaminants (200 to 300 words, unique per town):** weave in the three required hyperlocal pegs (demographics and housing, private-well reliance, and the bedrock and arsenic or uranium propensity), each with a cited source in an HTML comment. Name 3 to 5 real local features.

**Section 2, Water treatment services available in [Town] (6-card grid):** each card one to two sentences on how that service applies locally, linking to the service page.

**Section 3, Common well water issues in the [Town] area (150 to 250 words, unique per town):** the specific co-contaminants most relevant locally, sourced.

**Section 4, How to test and treat your [Town] well (process):** the testing pathway peg (NHDES accredited labs or the contractor free in-home test) plus the 3-step matching process.

**Section 5, Nearby areas we serve:** links to 3 to 4 adjacent location pages.

**Section 6, FAQ (3 to 4 questions, unique per town).**

**Final CTA + form.**

**Schema:** ProfessionalService with areaServed set to [Town], New Hampshire (a marketing and referral service, never a contractor category) + FAQPage + BreadcrumbList. Never LocalBusiness.

---

## GUIDES INDEX (`/guides`)

### Meta
- **Title:** New Hampshire Well Water Guides | NH Well Water Treatment
- **Description:** Plain-language guides to arsenic, uranium, and radon in New Hampshire well water, testing before a home sale, and choosing the right treatment system.

### Content
- Eyebrow "GUIDES," H1 "New Hampshire Well Water Guides."
- A card grid of all guides with title, one-line excerpt, and "Read the guide."
- Soft CTA to `/contact`.

---

## GUIDE PAGE TEMPLATE (one per guide)

Word count 1,200 to 2,000. Educational, sourced, genuinely useful. This is the link bait, so it must be good enough that a NH local outlet or realtor would link to it.

- **URL:** `/guides/[slug]`
- **Meta title:** keyword-led, cap 60 chars.
- **Meta description:** 155 chars.
- **Author:** "NH Well Water Treatment" (the brand). No fabricated individual.

**Structure:** H1 = guide title, a short intro, a table of contents for guides over 1,500 words, clear H2 and H3 structure, sourced facts throughout with outbound links to NHDES, USGS, EPA, and Dartmouth Toxic Metals SRP, and a conclusion with a soft CTA to `/contact` and links to the relevant service pages.

**Health content rule:** factual and sourced, never alarmist, never giving individualized medical advice. State risks the way NHDES and EPA state them, with citations.

**Schema:** BreadcrumbList. (Do not use Article schema with a fake author byline. If Article schema is used, the author must be the Organization, not an invented person.)

---

## CROSS-LINKING MAP

- Footer mega-nav on every page links to all 6 services, all locations, and all guides.
- Homepage links to all services, the top locations, the contaminants guide, and the arsenic guide.
- Each service page links to the homepage, 3 or more other services, 2 to 3 locations, and the most relevant guide.
- Each location page links to the homepage, 3 or more services, 3 to 4 adjacent locations.
- Each guide links to the relevant service pages and 1 to 2 other guides.

Anchor text mix: mostly branded and natural phrases, some naked URL, limited exact-match keyword. Do not over-optimize exact-match anchors.

---

## AFTER BUILD COMPLETION

Before reporting the full build done, verify the per-build definition of done in CLAUDE.md, plus:
1. `npm run build` runs clean.
2. Every internal link resolves.
3. The sitemap index at `/sitemap-index.xml` includes every indexable page and excludes `/thank-you`.
4. `robots.txt` is correct and references the sitemap index.
5. Unique meta title and description on every page.
6. The footer disclaimer is byte-for-byte identical everywhere.
7. All phone numbers display as PHONE_DISPLAY and link to PHONE_TEL.
8. Every local fact has a cited source in an HTML comment, or has been written qualitatively because it could not be verified.
9. The compliance greps return zero hits.

Report total pages built, content judgment calls (especially unverifiable-fact decisions), any skipped items, compliance grep results, and the build result. Do NOT deploy. Open a PR and wait for the operator.

---

End of PROJECT_BRIEF.md
