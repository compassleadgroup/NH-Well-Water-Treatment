// Per-town location page content. Each town carries genuinely unique, verified
// local data: population and housing context (U.S. Census), private-well
// reliance (NHDES), bedrock and arsenic or uranium propensity (USGS, NHDES),
// local co-contaminants, and real local features. Facts are cited in the
// visible Sources list and noted in comments next to the fact.

export interface LocationSource {
  label: string;
  href: string;
}

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface LocationContent {
  slug: string;
  town: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  heroSub: string;
  whyParas: string[];
  features: string[];
  coContaminants: string[];
  faqs: LocationFaq[];
  nearby: string[];
  sources: LocationSource[];
}

const NHDES_PRIVATE_WELLS: LocationSource = {
  label: "NHDES, Private Wells",
  href: "https://www.des.nh.gov/water/drinking-water/private-wells",
};
const USGS_PROBABILITY: LocationSource = {
  label: "USGS, Estimated Probability of Arsenic in Groundwater from Bedrock Aquifers in New Hampshire (SIR 2012-5156)",
  href: "https://pubs.usgs.gov/sir/2012/5156/",
};
const USGS_FS051: LocationSource = {
  label: "USGS, Arsenic in Private Bedrock Wells in Southeastern New Hampshire (FS-051-03)",
  href: "https://pubs.usgs.gov/fs/fs-051-03/",
};
const USGS_URANIUM_RADON: LocationSource = {
  label: "USGS, New Maps Predict Areas of Elevated Radon and Uranium in New Hampshire Groundwater",
  href: "https://www.usgs.gov/centers/new-england-water-science-center/news/new-maps-predict-areas-elevated-radon-uranium-new",
};
const census = (slug: string, town: string): LocationSource => ({
  label: `U.S. Census Bureau, QuickFacts: ${town}, New Hampshire`,
  href: `https://www.census.gov/quickfacts/${slug}`,
});

export const locationContent: Record<string, LocationContent> = {
  "laconia-nh": {
    slug: "laconia-nh",
    town: "Laconia",
    county: "Belknap",
    metaTitle: "Well Water Treatment in Laconia, New Hampshire",
    metaDescription:
      "Well water treatment for Laconia, New Hampshire homeowners. Connect with a licensed contractor for a free in-home water test and quote. No obligation.",
    heroSub:
      "Laconia sits in the heart of the Lakes Region, where private wells draw from granite bedrock that can carry arsenic, uranium, and radon. A licensed local contractor can test your well and recommend the right system. Start with a free in-home water test and quote.",
    whyParas: [
      // Census: Laconia pop 16,871 (2020); 64.2% owner-occupied; median year built 1974
      "Laconia is the largest community in the Lakes Region, a city of about 16,900 people set between Lake Winnipesaukee and Lake Winnisquam, with Paugus Bay and Opechee Bay running through its center and the neighborhoods of Lakeport and The Weirs along the water. Roughly two-thirds of its occupied homes are owner-occupied, and much of the housing stock dates to the mid-1970s or earlier, before arsenic in New Hampshire bedrock was widely understood.",
      // NHDES ~46% on private wells; USGS bedrock granite/metamorphic source of As/U/Rn
      "Homes outside the city water system draw from private wells in that bedrock. Statewide, about 46 percent of New Hampshire residents rely on private wells, and the granite and metamorphic rock under the Lakes Region is a natural source of arsenic, uranium, and radon. No agency tests a private well for you, so testing is the homeowner's responsibility.",
      // USGS SIR 2012-5156: arsenic tied to bedrock units, median similar across counties
      "USGS mapping ties arsenic to specific bedrock units rather than to town lines, and median arsenic in private bedrock wells is similar across New Hampshire counties. A Laconia well can carry it whether or not a neighbor's does, and because arsenic is odorless and tasteless, the only way to know your level is to test.",
    ],
    features: ["Lake Winnipesaukee", "Lake Winnisquam", "Paugus Bay", "Opechee Bay", "Weirs Beach and Lakeport"],
    coContaminants: [
      "In the Lakes Region, the contaminants that travel with arsenic are usually the other products of the same bedrock. Uranium and radon are both naturally radioactive and common in deep bedrock wells, and iron and manganese, which stain fixtures and laundry, are common across New Hampshire. A standard Laconia well test looks for all of these together so a contractor can size one system to the whole picture.",
    ],
    faqs: [
      {
        question: "Do Laconia homes on city water need treatment?",
        answer:
          "Laconia has a public water system, and this service is aimed at homes on private wells. If your Laconia home draws from a private well, a test is the way to know what is in your water. Public-water customers can request water-quality reports from their supplier.",
      },
      {
        question: "Is arsenic a concern in the Laconia area?",
        answer:
          "Arsenic occurs naturally in the granite and metamorphic bedrock under the Lakes Region, and USGS mapping ties it to bedrock rather than to town lines. Because it is odorless and tasteless, a test is the only way to know a specific Laconia well's level.",
      },
      {
        question: "How do I get my Laconia well tested?",
        answer:
          "You can use a New Hampshire accredited laboratory or request a free in-home test from the licensed local contractor we connect you with. NHDES recommends a standard analysis every three to five years.",
      },
    ],
    nearby: ["gilford-nh", "meredith-nh", "belmont-nh", "tilton-nh"],
    sources: [census("laconiacitynewhampshire", "Laconia"), USGS_PROBABILITY, NHDES_PRIVATE_WELLS],
  },

  "gilford-nh": {
    slug: "gilford-nh",
    town: "Gilford",
    county: "Belknap",
    metaTitle: "Well Water Treatment in Gilford, New Hampshire",
    metaDescription:
      "Well water treatment for Gilford, New Hampshire well owners. Connect with a licensed contractor for a free in-home water test and quote. No obligation.",
    heroSub:
      "Gilford's homes sit along Lake Winnipesaukee and up the slopes of Belknap Mountain, most of them on private bedrock wells. A licensed local contractor can test your well and recommend the right system. Start with a free in-home water test and quote.",
    whyParas: [
      // Census: Gilford pop 7,699 (2020); 93.1% owner-occupied
      "Gilford is a residential Lakes Region town of about 7,700 people on the eastern shore of Lake Winnipesaukee, home to Ellacoya State Beach, Gunstock Mountain Resort, and Belknap Mountain State Forest. More than nine in ten of its occupied homes are owner-occupied, the kind of long-term ownership where a one-time investment in clean water pays off.",
      // NHDES private wells; USGS uranium/radon maps for Lakes Region bedrock
      "Away from the lakefront and the village, Gilford homes generally draw from private wells in granite and metamorphic bedrock. That bedrock is a natural source of arsenic and of uranium and its radioactive decay product, radon, which USGS mapping shows is elevated across much of central and eastern New Hampshire.",
      // USGS SIR 2012-5156 / FS-051-03 context
      "Private wells are not tested or regulated by any agency, so a Gilford well owner finds out what is in the water only by testing. Arsenic, uranium, and radon are all invisible in water, and all three are treatable once a test shows what is present.",
    ],
    features: ["Lake Winnipesaukee", "Gunstock Mountain Resort", "Ellacoya State Beach", "Belknap Mountain State Forest", "Governors Island"],
    coContaminants: [
      "Gilford wells most often pair arsenic with the other bedrock contaminants, uranium and radon, and with the iron and manganese that are common in New Hampshire groundwater and show up as staining and a metallic taste. A contractor reads the full test and, where several contaminants are present, designs a whole-house system that handles them in the right order.",
    ],
    faqs: [
      {
        question: "Are Gilford wells likely to have uranium or radon?",
        answer:
          "Both occur naturally in the granite and metamorphic bedrock under Gilford, and USGS mapping shows elevated radon and uranium probability across much of central and eastern New Hampshire. A radiological test that includes uranium and radon is the way to know your well's levels.",
      },
      {
        question: "Can one system treat several contaminants in a Gilford well?",
        answer:
          "Yes. When a test shows more than one contaminant, a contractor can design a whole-house system that treats them in sequence. The free in-home test is what determines the right design.",
      },
      {
        question: "How often should a Gilford well be tested?",
        answer:
          "NHDES recommends a standard analysis every three to five years, with bacteria and nitrate yearly, and a radiological test for radon and uranium every three to five years.",
      },
    ],
    nearby: ["laconia-nh", "meredith-nh", "alton-nh"],
    sources: [census("gilfordtownbelknapcountynewhampshire", "Gilford"), USGS_URANIUM_RADON, NHDES_PRIVATE_WELLS],
  },

  "meredith-nh": {
    slug: "meredith-nh",
    town: "Meredith",
    county: "Belknap",
    metaTitle: "Well Water Treatment in Meredith, New Hampshire",
    metaDescription:
      "Well water treatment for Meredith, New Hampshire homeowners and second-home owners. Free in-home water test and quote from a licensed local contractor.",
    heroSub:
      "Meredith mixes year-round homes with lakefront second homes, most on private bedrock wells. A licensed local contractor can test your well and recommend the right system. Start with a free in-home water test and quote.",
    whyParas: [
      // Census: Meredith pop 6,662 (2020); high seasonal-home share (2010 vacancy ~42.7%)
      "Meredith is a Lakes Region town of about 6,700 year-round residents on the western bays of Lake Winnipesaukee, with Lake Waukewan and Lake Wicwas adding to its shoreline. A large share of its housing is seasonal, with many lakefront second homes that sit empty for part of the year, which means some wells run hard in summer and barely at all in winter.",
      // NHDES private wells; USGS bedrock
      "Both year-round and seasonal homes outside the village draw from private wells in granite and metamorphic bedrock. That bedrock naturally releases arsenic, uranium, and radon, and private wells are not tested or regulated by any agency, so the homeowner is responsible for testing.",
      // USGS arsenic probability tied to bedrock
      "USGS mapping ties arsenic to bedrock units rather than to town lines, so a Meredith well can carry it regardless of the address. Seasonal homes are worth testing too, since water that has sat in a system over a closed-up winter is exactly the kind that should be checked before it is used again.",
    ],
    features: ["Lake Winnipesaukee", "Lake Waukewan", "Lake Wicwas", "Meredith Bay", "Meredith Village"],
    coContaminants: [
      "In Meredith, arsenic typically comes with uranium and radon from the same bedrock, plus the iron and manganese that are common across New Hampshire and leave rust and dark staining. For a seasonal home, a contractor may also suggest a bacteria test, since a system that sits idle can pick up issues a year-round home would not.",
    ],
    faqs: [
      {
        question: "Should I test a Meredith seasonal or lakefront home's well?",
        answer:
          "Yes. Arsenic, uranium, and radon come from the bedrock regardless of how often a home is used, and a well that sits idle over the winter is worth testing before the water is used again in the spring.",
      },
      {
        question: "What contaminants are common in Meredith well water?",
        answer:
          "Arsenic, uranium, and radon from the granite and metamorphic bedrock are the main concerns, often alongside iron and manganese that cause staining. A standard test checks for all of these.",
      },
      {
        question: "How do I get a Meredith well tested?",
        answer:
          "Use a New Hampshire accredited laboratory or request a free in-home test from the licensed local contractor we connect you with. NHDES recommends a standard analysis every three to five years.",
      },
    ],
    nearby: ["laconia-nh", "gilford-nh", "moultonborough-nh", "tilton-nh"],
    sources: [census("meredithtownbelknapcountynewhampshire", "Meredith"), USGS_PROBABILITY, NHDES_PRIVATE_WELLS],
  },

  "moultonborough-nh": {
    slug: "moultonborough-nh",
    town: "Moultonborough",
    county: "Carroll",
    metaTitle: "Well Water Treatment in Moultonborough, New Hampshire",
    metaDescription:
      "Well water treatment for Moultonborough, New Hampshire well owners. Free in-home water test and quote from a licensed local contractor. No obligation.",
    heroSub:
      "Moultonborough is large, rural, and almost entirely on private wells, wrapped by Lake Winnipesaukee and Squam Lake. A licensed local contractor can test your well and recommend the right system. Start with a free in-home water test and quote.",
    whyParas: [
      // Census: Moultonborough pop 4,918 (2020); 90.6% owner-occupied; ~60% seasonal homes (2010)
      "Moultonborough is a large, rural Carroll County town of about 4,900 year-round residents, bounded by Lake Winnipesaukee to the southwest and Squam Lake to the northwest, with Lake Kanasatka and the Ossipee Mountains and Castle in the Clouds rising to the north. More than half of its homes are seasonal, and on the land it covers that means a great many private wells spread across big rural lots.",
      // NHDES private wells; USGS uranium/radon and arsenic bedrock
      "With little public water, Moultonborough homes draw almost entirely from private bedrock wells. The granite and metamorphic bedrock here naturally releases arsenic, uranium, and radon, and USGS mapping shows elevated radon and uranium probability across much of this part of New Hampshire.",
      "Private wells are not tested for you, so a Moultonborough owner learns what is in the water only by testing. Large-lot rural wells vary well to well, which is exactly why a test of your own well matters more than any general figure.",
    ],
    features: ["Lake Winnipesaukee", "Squam Lake", "Lake Kanasatka", "Castle in the Clouds", "Red Hill"],
    coContaminants: [
      "Moultonborough wells commonly carry arsenic together with uranium and radon from the bedrock, and iron and manganese are widespread as well. Because so many homes are seasonal, a contractor often pairs the standard test with a bacteria check, and where several contaminants show up, designs a whole-house system to address them together.",
    ],
    faqs: [
      {
        question: "Is well water the norm in Moultonborough?",
        answer:
          "Yes. Moultonborough has little public water, so most homes rely on private bedrock wells. That makes testing the only way to know what is in a given well, since the bedrock contaminants here are invisible.",
      },
      {
        question: "Are radon and uranium common in Moultonborough wells?",
        answer:
          "USGS mapping shows elevated radon and uranium probability across much of this part of New Hampshire, and both come from the same bedrock as arsenic. A radiological test that includes radon and uranium is the way to know your levels.",
      },
      {
        question: "How do I test a Moultonborough well?",
        answer:
          "You can use a New Hampshire accredited laboratory or request a free in-home test from the licensed local contractor we connect you with. NHDES recommends a standard analysis every three to five years.",
      },
    ],
    nearby: ["meredith-nh", "wolfeboro-nh", "alton-nh"],
    sources: [census("moultonboroughtowncarrollcountynewhampshire", "Moultonborough"), USGS_URANIUM_RADON, NHDES_PRIVATE_WELLS],
  },

  "wolfeboro-nh": {
    slug: "wolfeboro-nh",
    town: "Wolfeboro",
    county: "Carroll",
    metaTitle: "Well Water Treatment in Wolfeboro, New Hampshire",
    metaDescription:
      "Well water treatment for Wolfeboro, New Hampshire well owners. Free in-home water test and quote from a licensed local contractor. No obligation.",
    heroSub:
      "Wolfeboro, the oldest summer resort in America, mixes historic homes with newer lakefront builds, most on private wells. A licensed local contractor can test your well and recommend the right system. Start with a free in-home water test and quote.",
    whyParas: [
      // Census: Wolfeboro pop 6,416 (2020); housing ~1,865 units, ~72% detached single-family
      "Wolfeboro is a Carroll County town of about 6,400 people on the eastern shore of Lake Winnipesaukee, with Lake Wentworth and Crescent Lake behind it and a historic downtown that has drawn summer residents since the 1700s. Most of its homes are detached single-family houses, a mix of older village stock and newer lakefront construction, and many sit on private wells.",
      // NHDES private wells; USGS uranium/radon
      "Wells here draw from the same granite and metamorphic bedrock that underlies the Lakes Region, a natural source of arsenic, uranium, and radon. USGS mapping shows elevated radon and uranium probability across much of eastern New Hampshire, and private wells are not tested by any agency, so the responsibility falls to the owner.",
      "The age range of Wolfeboro homes matters: older houses may predate any prior testing, and newer lakefront builds drill into the same bedrock. In both cases, a test is the only way to know whether arsenic or the radiological contaminants are present.",
    ],
    features: ["Lake Winnipesaukee", "Lake Wentworth", "Crescent Lake", "Wentworth State Park", "Downtown Wolfeboro"],
    coContaminants: [
      "Wolfeboro wells generally carry arsenic alongside uranium and radon, with iron and manganese common as well. For an older home being updated or a lakefront property being prepared for sale, a contractor reads the full test and recommends either a point-of-use system for drinking water or a whole-house system when several contaminants are present.",
    ],
    faqs: [
      {
        question: "Do older Wolfeboro homes need a water test?",
        answer:
          "Yes. Older homes may never have had a recent test, and the bedrock contaminants here are invisible, so a current test is the only way to know what is in the water. It is also useful information when buying or selling.",
      },
      {
        question: "What is in Wolfeboro well water?",
        answer:
          "The main concerns are arsenic, uranium, and radon from the granite and metamorphic bedrock, often with iron and manganese that cause staining. A standard analysis checks for these together.",
      },
      {
        question: "How do I get a Wolfeboro well tested?",
        answer:
          "Use a New Hampshire accredited laboratory or request a free in-home test from the licensed local contractor we connect you with. NHDES recommends a standard analysis every three to five years.",
      },
    ],
    nearby: ["moultonborough-nh", "alton-nh", "gilford-nh"],
    sources: [census("wolfeborotowncarrollcountynewhampshire", "Wolfeboro"), USGS_URANIUM_RADON, NHDES_PRIVATE_WELLS],
  },

  "dover-nh": {
    slug: "dover-nh",
    town: "Dover",
    county: "Strafford",
    metaTitle: "Well Water Treatment in Dover, New Hampshire",
    metaDescription:
      "Well water treatment for Dover, New Hampshire in the Strafford County arsenic belt. Free in-home water test and quote from a licensed contractor.",
    heroSub:
      "Dover sits in the southeastern New Hampshire arsenic belt, where USGS sampling found arsenic above the federal limit in a notable share of bedrock wells. A licensed local contractor can test your well and recommend the right system. Start with a free in-home water test and quote.",
    whyParas: [
      // Census: Dover pop 32,741 (2020); 52.7% owner-occupied; Strafford County seat
      "Dover is the largest city in Strafford County, with about 32,700 residents along the Cochecho and Bellamy rivers in the Seacoast region. A little over half of its occupied homes are owner-occupied. While much of the city is on public water, homes in the outlying and more rural areas draw from private wells in the bedrock.",
      // USGS FS-051-03: 21% of Hillsborough/Strafford wells > 10 ug/L
      "Dover sits in what researchers call the southeastern New Hampshire arsenic belt. A USGS study of private bedrock wells in the region found that about 21 percent of wells in Hillsborough and Strafford counties exceeded the federal arsenic limit of 10 micrograms per liter, a higher rate than the state as a whole.",
      // NH 5 ppb standard; NHDES private wells
      "New Hampshire's enforceable arsenic standard is 5 parts per billion, half the federal limit, and private wells are not tested by any agency. For a Dover-area well owner, that combination, a documented arsenic belt and a strict state standard, makes a test the clear first step.",
    ],
    features: ["Cochecho River", "Bellamy River", "Piscataqua River", "Downtown Dover", "Garrison Hill"],
    coContaminants: [
      "In the Strafford County arsenic belt, arsenic is the headline contaminant, and it frequently comes with iron and manganese that stain fixtures, plus uranium and radon from the same bedrock. Because arsenic rates here run above the statewide average, a contractor pays particular attention to the arsenic result and to whether the species present calls for a pre-oxidation step before the main treatment.",
    ],
    faqs: [
      {
        question: "Is arsenic really more common around Dover?",
        answer:
          "A USGS study found that about 21 percent of private bedrock wells in Hillsborough and Strafford counties exceeded the federal arsenic limit of 10 micrograms per liter, a higher rate than the state as a whole. That is why a test matters in the Dover area.",
      },
      {
        question: "My Dover home is on city water. Does this apply to me?",
        answer:
          "This service is for homes on private wells. Much of Dover is on public water, but outlying and rural homes often have private wells. If your home draws from a well, a test is the way to know your arsenic level.",
      },
      {
        question: "How do I get a Dover well tested?",
        answer:
          "Use a New Hampshire accredited laboratory or request a free in-home test from the licensed local contractor we connect you with. Given the local arsenic rates, NHDES guidance to test on a regular schedule is worth following.",
      },
    ],
    nearby: ["rochester-nh", "barrington-nh", "farmington-nh"],
    sources: [census("dovercitynewhampshire", "Dover"), USGS_FS051, NHDES_PRIVATE_WELLS],
  },
};
