// Single source of truth for site identity, compliance strings, and the
// service, location, and guide lists. Centralizing the compliance copy here
// guarantees the header disclosure strip and footer disclaimer are
// byte-for-byte identical on every page, which the definition of done requires.

export const site = {
  brand: "NH Well Water Treatment",
  legalEntity: "Compass Camper LLC",
  legalState: "Oregon",
  domain: "nhwellwatertreatment.com",
  productionUrl: "https://nhwellwatertreatment.com",
  state: "New Hampshire",
  stateAbbr: "NH",
  phoneDisplay: "(603) 555-0100",
  phoneTel: "+16035550100",
  contactEmail: "compassleadgroup@gmail.com",
  hours: "Monday to Friday, 9:00 AM to 6:00 PM Eastern",
  launchYear: 2026,
  // Web3Forms access key (public by design, embedded in the form HTML).
  web3formsKey: "6987e5b1-8b8b-42af-ac88-86da101e9b60",
} as const;

// Compliance copy. Do not reword without checking COMPLIANCE_STANDARDS.md.
export const headerDisclosure =
  "A marketing service connecting New Hampshire homeowners with licensed local water treatment contractors. Compass Camper LLC is not a contractor and does not perform water treatment work.";

export const footerDisclaimer =
  "This website is operated by Compass Camper LLC (Oregon), a licensed marketing and lead generation company. NH Well Water Treatment is a marketing service that connects homeowners with independent, licensed local water treatment contractors. All water testing and treatment services are performed by independent licensed contractors. Compass Camper LLC is not a contractor and does not perform water treatment work directly. Contractor license numbers are available upon request.";

// TCPA consent text. The visible "See our Privacy Policy." link is rendered as
// a real anchor to /privacy in the form, immediately after this sentence.
export const tcpaConsent =
  "By submitting this form, I agree that Compass Camper LLC and a water treatment contractor may contact me at the phone number and email I provided, including by automated phone calls, prerecorded messages, and text messages, regarding water treatment services. Consent is not a condition of any purchase. Message and data rates may apply. I may opt out at any time by replying STOP to any text or asking to be removed during any call.";

export const formSharingDisclosure =
  "When you submit this form, your information is shared with a licensed local water treatment contractor for the purpose of scheduling your free in-home water test and quote.";

export interface ServiceItem {
  name: string;
  slug: string;
  short: string;
  icon: string;
}

// The six services from PROJECT_BRIEF.md, framed as contractor-provided work.
export const services: ServiceItem[] = [
  {
    name: "Arsenic Treatment",
    slug: "arsenic-treatment",
    short:
      "The highest-intent concern on New Hampshire bedrock wells. A licensed contractor sizes a system to your water and the arsenic species present.",
    icon: "shield-check",
  },
  {
    name: "Uranium Treatment",
    slug: "uranium-treatment",
    short:
      "Naturally occurring uranium turns up in parts of New Hampshire bedrock. A contractor typically addresses it with anion exchange or reverse osmosis.",
    icon: "filter",
  },
  {
    name: "Radon in Water Treatment",
    slug: "radon-in-water-treatment",
    short:
      "Waterborne radon is distinct from airborne radon. On bedrock wells a contractor reduces it with aeration or activated carbon.",
    icon: "waves",
  },
  {
    name: "Iron and Manganese Treatment",
    slug: "iron-manganese-treatment",
    short:
      "Iron and manganese cause staining, taste, odor, and buildup. Treatment is often bundled with an arsenic or uranium system.",
    icon: "droplet",
  },
  {
    name: "Whole-House Water Treatment",
    slug: "whole-house-water-treatment",
    short:
      "Point-of-entry systems treat the water entering the whole home. This is the route to weigh when more than one contaminant is present.",
    icon: "home",
  },
  {
    name: "Reverse Osmosis Systems",
    slug: "reverse-osmosis-systems",
    short:
      "Point-of-use drinking-water systems at the kitchen tap, often paired with a whole-house system for the rest of the home.",
    icon: "beaker",
  },
];

// Well Water Testing is the top-of-funnel front door (added June 2026 for the
// testing-demand retarget). It is a standalone page, not one of the six dynamic
// service routes, so it stays out of the `services` array and is surfaced
// through serviceNavLinks for the footer and the /services overview.
export const testingService: ServiceItem = {
  name: "Well Water Testing",
  slug: "well-water-testing",
  short:
    "The first step for any New Hampshire well. A licensed local contractor provides a free in-home water test, or you can use a state-accredited laboratory.",
  icon: "test-tube",
};

// Testing first, then the six treatment services. Used by the footer services
// column and the /services overview grid.
export const serviceNavLinks: ServiceItem[] = [testingService, ...services];

export interface LocationItem {
  town: string;
  county: string;
  slug: string;
}

// Candidate towns from PROJECT_BRIEF.md. Each is verified for unique local data
// during the location batches; any town with thin data gets swapped and noted.
export const locations: LocationItem[] = [
  { town: "Laconia", county: "Belknap", slug: "laconia-nh" },
  { town: "Gilford", county: "Belknap", slug: "gilford-nh" },
  { town: "Meredith", county: "Belknap", slug: "meredith-nh" },
  { town: "Moultonborough", county: "Carroll", slug: "moultonborough-nh" },
  { town: "Wolfeboro", county: "Carroll", slug: "wolfeboro-nh" },
  { town: "Dover", county: "Strafford", slug: "dover-nh" },
  { town: "Rochester", county: "Strafford", slug: "rochester-nh" },
  { town: "Farmington", county: "Strafford", slug: "farmington-nh" },
  { town: "Barrington", county: "Strafford", slug: "barrington-nh" },
  { town: "Alton", county: "Belknap", slug: "alton-nh" },
  { town: "Belmont", county: "Belknap", slug: "belmont-nh" },
  { town: "Tilton", county: "Belknap", slug: "tilton-nh" },
];

export interface GuideItem {
  title: string;
  slug: string;
  excerpt: string;
}

// The linkable guides from PROJECT_BRIEF.md. Authored as the brand, never a
// fabricated person.
export const guides: GuideItem[] = [
  {
    title: "New Hampshire Arsenic in Well Water: A Homeowner's Guide",
    slug: "arsenic-in-well-water-nh",
    excerpt:
      "What arsenic is, why New Hampshire bedrock produces it, the 5 ppb standard, and how to test and treat your well.",
  },
  {
    title: "Well Water Testing Before Buying or Selling a Home in New Hampshire",
    slug: "well-water-testing-home-sale-nh",
    excerpt:
      "What buyers and sellers should test for, when to test, who pays, and how treatment fits into a home sale.",
  },
  {
    title: "Arsenic-III vs Arsenic-V: Choosing the Right Treatment System",
    slug: "arsenic-treatment-system-comparison",
    excerpt:
      "Why the arsenic species changes the right system, and the questions to ask a contractor before you buy.",
  },
  {
    title: "Uranium and Radon in New Hampshire Well Water",
    slug: "uranium-radon-well-water-nh",
    excerpt:
      "Why uranium and radon often travel with arsenic in New Hampshire bedrock, plus the common treatment approaches.",
  },
  {
    title: "A New Hampshire Well Water Contaminants Overview",
    slug: "nh-well-water-contaminants",
    excerpt:
      "A plain-language map of the common New Hampshire well contaminants and which treatment each one calls for.",
  },
];

// Primary navigation used by the header.
export const navLinks = [
  { label: "Testing", href: "/services/well-water-testing" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Guides", href: "/guides" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
