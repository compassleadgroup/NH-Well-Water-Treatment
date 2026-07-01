// Per-service page content for the six service pages. Facts are verified against
// the cited primary sources (see each service's `sources` array, rendered
// visibly on the page). Source notes also appear in comments next to facts.
// All copy is framed as the matched contractor's work, never as work we perform.

export interface ServiceMethod {
  title: string;
  body: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSource {
  label: string;
  href: string;
}

export interface ServiceExtraSection {
  id: string;
  heading: string;
  paras: string[];
}

export interface ServiceContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  // Optional H1 override. Defaults to `${service.name} in New Hampshire`.
  h1?: string;
  heroSub: string;
  intro: string[];
  methodsHeading: string;
  methods: ServiceMethod[];
  costHeading: string;
  cost: string[];
  followUp?: string;
  // Optional extra sections rendered after the cost section (for example the
  // Arsenic-III versus Arsenic-V section on the arsenic page).
  extraSections?: ServiceExtraSection[];
  related: {
    services: string[];
    locations: string[];
    guide: { label: string; href: string };
  };
  faqs: ServiceFaq[];
  sources: ServiceSource[];
}

const NHDES_ARSENIC = {
  label: "NHDES, Arsenic in New Hampshire Well Water (DWGB-3-2)",
  href: "https://www.des.nh.gov/sites/g/files/ehbemt341/files/documents/2020-01/dwgb-3-2.pdf",
};
const USGS_FS = {
  label: "USGS, Arsenic in Private Bedrock Wells in Southeastern New Hampshire (FS-051-03)",
  href: "https://pubs.usgs.gov/fs/fs-051-03/",
};
const NHDES_ARSENIC_STD = {
  label: "NHDES, More Protective Arsenic Standard Will Reduce Risk for Many",
  href: "https://www.des.nh.gov/news-and-media/blog/more-protective-arsenic-standard-will-reduce-risk-many",
};
const NHDES_RADIONUCLIDES = {
  label: "NHDES, Radionuclides in Drinking Water (DWGB-3-11)",
  href: "https://www.des.nh.gov/sites/g/files/ehbemt341/files/documents/2020-01/dwgb-3-11.pdf",
};
const NHDES_RADON_HOME = {
  label: "NHDES, Radon in Your Home (DWGB-3-12)",
  href: "https://www.des.nh.gov/sites/g/files/ehbemt341/files/documents/2020-01/dwgb-3-12.pdf",
};
const NHDES_IRON_MN = {
  label: "NHDES, Iron and/or Manganese in Drinking Water (DWGB-3-8)",
  href: "https://www.des.nh.gov/sites/g/files/ehbemt341/files/documents/2020-01/dwgb-3-8.pdf",
};
const EPA_TREATMENT = {
  label: "EPA, Overview of Drinking Water Treatment Technologies",
  href: "https://www.epa.gov/sdwa/overview-drinking-water-treatment-technologies",
};
const EPA_RADIONUCLIDES = {
  label: "EPA, Natural Radionuclides in Private Wells",
  href: "https://www.epa.gov/radtown/natural-radionuclides-private-wells",
};

export const serviceContent: Record<string, ServiceContent> = {
  "arsenic-treatment": {
    slug: "arsenic-treatment",
    metaTitle: "Arsenic in Well Water Treatment in New Hampshire",
    metaDescription:
      "How New Hampshire well owners remove arsenic from well water. Treatment by arsenic type, typical cost, and a free in-home water test.",
    h1: "Arsenic in Well Water Treatment in New Hampshire",
    heroSub:
      "Arsenic is naturally present in New Hampshire bedrock and is odorless and tasteless. A licensed local contractor can test your well and recommend the right system. Start with a free in-home water test and quote.",
    intro: [
      "Arsenic is the contaminant that brings most New Hampshire well owners to a water test, and for good reason. It dissolves naturally out of the granite and metamorphic bedrock that underlies much of the state, and it is completely invisible, with no color, taste, or smell. The only way to know your level is to test.",
      // Source: USGS FS-051-03 (nearly 1 in 5 SE-NH bedrock wells exceed 10 ug/L); NHDES arsenic standard 5 ppb (2021)
      "A United States Geological Survey study of private bedrock wells in southeastern New Hampshire found that nearly one in five exceeded the federal arsenic limit of 10 micrograms per liter, with higher rates in parts of Hillsborough and Strafford counties. In 2021, New Hampshire set its own enforceable standard at 5 parts per billion, half the federal limit and one of the strictest in the country.",
      "Arsenic exposure is a long-term health issue, not an emergency. NHDES and the EPA link long-term exposure to a higher risk of several cancers and other effects, which is why the state tightened its standard. The reassuring part is that arsenic is very treatable once a test shows how much is present and which form it takes.",
    ],
    methodsHeading: "How a contractor treats arsenic",
    methods: [
      {
        title: "Adsorptive media filters",
        body: "Iron-based or titanium-based media bind arsenic as water passes through. A contractor can size these for the whole house or for a single tap. The media has a finite capacity and is replaced every one to three years, and its performance drops when Arsenic-III is present or pH is above 7.5.",
      },
      {
        title: "Anion exchange",
        body: "An anion exchange system trades arsenic for harmless ions on a resin bed. It removes Arsenic-V well across a range of pH and regenerates with ordinary salt, so operating costs are low. It is often paired with a calcite neutralizer for pH.",
      },
      {
        title: "Reverse osmosis at the tap",
        body: "A point-of-use reverse osmosis system under the kitchen sink pushes water through a fine membrane and removes about 95 percent of Arsenic-V. Because it treats only one tap, it is a lower-cost option for drinking and cooking water.",
      },
      {
        title: "Why the arsenic species matters",
        body: "Arsenic shows up as Arsenic-III or Arsenic-V. Arsenic-III carries no electrical charge, so anion exchange and membranes remove it less effectively. A contractor may add a simple pre-oxidation step, using chlorine or a manganese dioxide media, to convert Arsenic-III to the more easily removed Arsenic-V before the main treatment.",
      },
    ],
    costHeading: "How much arsenic removal costs",
    cost: [
      // Source: NHDES survey figures via DWGB-3-2 (median POU install $1,200 with $343/yr maintenance; whole-house $3,000 with $550/yr; POU RO $1,200 to $2,000; whole-house single filtration $1,500 to $3,000). https://www.des.nh.gov/sites/g/files/ehbemt341/files/documents/2020-01/dwgb-3-2.pdf
      "It depends on your water, but New Hampshire has solid benchmarks. As 2026 New Hampshire market context, an NHDES survey found a median installed cost of about $1,200 for a point-of-use system, with median annual maintenance around $343, and about $3,000 for a whole-house system, with median annual maintenance around $550. A point-of-use reverse osmosis unit for arsenic commonly runs $1,200 to $2,000 installed, and a whole-house single-filtration system generally falls between $1,500 and $3,000.",
      "Your exact number depends on your arsenic level and species, your water chemistry and pH, and whether you treat one tap or the whole home. That is what the free in-home test and written, itemized quote pin down, so you are working from a price for your well rather than a general range.",
    ],
    followUp:
      "For arsenic, NHDES recommends retesting the treated water quarterly for the first year and twice a year after that, so you can confirm the system is doing its job.",
    extraSections: [
      {
        id: "arsenic-iii-vs-v",
        heading: "Arsenic-III versus Arsenic-V and why it changes the system",
        // Source: NHDES DWGB-3-2 (species behavior; RO removes ~95% As-V vs ~60% As-III; pre-oxidation converts As-III to As-V).
        paras: [
          "Arsenic shows up in well water as one of two species, Arsenic-III (arsenite) or Arsenic-V (arsenate), and the difference is not academic. It changes which system works and whether an extra step is needed.",
          "Arsenic-V carries a negative charge in water, so it is removed efficiently by anion exchange and by reverse osmosis membranes. Arsenic-III carries essentially no charge, so those same methods remove it far less effectively. NHDES notes that reverse osmosis removes roughly 95 percent of Arsenic-V but only about 60 percent of Arsenic-III.",
          "The fix is a pre-oxidation step. A contractor can convert Arsenic-III to the more easily removed Arsenic-V using chlorine or a manganese dioxide media before the main treatment, which is why the arsenic species is one of the first things a good contractor checks when sizing a system.",
        ],
      },
    ],
    related: {
      services: ["uranium-treatment", "whole-house-water-treatment", "reverse-osmosis-systems"],
      locations: ["laconia-nh", "dover-nh", "barrington-nh"],
      guide: {
        label: "New Hampshire Arsenic in Well Water: A Homeowner's Guide",
        href: "/guides/arsenic-in-well-water-nh",
      },
    },
    faqs: [
      {
        // Source: NHDES survey cost figures (DWGB-3-2), median POU $1,200 / whole-house $3,000.
        question: "How much does it cost to remove arsenic from well water?",
        answer:
          "Cost depends on the arsenic type and level and whether you treat the whole house or only drinking water. As 2026 New Hampshire context, an NHDES survey found a median installed cost of about $1,200 for a point-of-use system and about $3,000 for a whole-house system. A free in-home test gives you an exact quote.",
      },
      {
        question: "What is the best way to remove arsenic from well water?",
        answer:
          "The right method depends on the arsenic species and concentration. Common approaches are adsorptive media, anion exchange, and reverse osmosis. A licensed contractor tests your water and sizes the system.",
      },
      {
        // Source: NHDES 5 ppb (2021); EPA federal MCL 10 ppb.
        question: "What is a safe level of arsenic in drinking water?",
        answer:
          "New Hampshire's maximum contaminant level is 5 parts per billion, set in 2021 and half the federal limit, and the federal EPA maximum contaminant level is 10 parts per billion. Because arsenic is a long-term exposure issue, lower is better, and a test is the only way to know your level.",
      },
      {
        question: "Do I need a whole-house arsenic system or a point-of-use filter?",
        answer:
          "A point-of-use system treats water at a single tap, usually the kitchen, for drinking and cooking. A whole-house system treats all water entering the home. Which one fits depends on your test results and how you use your water, and the matched contractor advises based on the test.",
      },
      {
        // Source: NHDES DWGB-3-2 (species behavior; RO ~95% As-V vs ~60% As-III).
        question: "What is the difference between Arsenic-III and Arsenic-V?",
        answer:
          "Arsenic-III (arsenite) and Arsenic-V (arsenate) respond differently to treatment. Arsenic-V carries a charge and is removed well by anion exchange and reverse osmosis, while Arsenic-III carries little charge and is harder to remove, so a contractor often adds an oxidation step to convert it to Arsenic-V first.",
      },
    ],
    sources: [NHDES_ARSENIC, USGS_FS, NHDES_ARSENIC_STD],
  },

  "uranium-treatment": {
    slug: "uranium-treatment",
    metaTitle: "Uranium Treatment in NH | NH Well Water Treatment",
    metaDescription:
      "Uranium treatment for New Hampshire well water using anion exchange or reverse osmosis. Free in-home water test and quote from a licensed local contractor.",
    heroSub:
      "Uranium occurs naturally in New Hampshire bedrock and often travels with arsenic and radon. A licensed local contractor can test your well and recommend the right system. Start with a free in-home water test and quote.",
    intro: [
      "Uranium is a naturally occurring radioactive metal that leaches from New Hampshire's granite and metamorphic bedrock into groundwater. Like arsenic, it is invisible in water, and it often shows up alongside arsenic and radon in the same bedrock wells.",
      // Source: USGS NH radon/uranium maps; EPA natural radionuclides in private wells
      "At elevated levels, uranium in drinking water is a concern mainly for the kidneys rather than for cancer, and the EPA notes that private-well owners are responsible for testing for it because private wells are not federally regulated. A radiological test that includes uranium is the way to find out what your well holds.",
      "Uranium is treatable, and the same systems that handle it often handle other bedrock contaminants, so a single visit from a contractor can address more than one problem.",
    ],
    methodsHeading: "How a contractor treats uranium",
    methods: [
      {
        title: "Anion exchange",
        body: "Uranium carries a negative charge in water, so a strong-base anion exchange resin captures it efficiently. This is a common whole-house approach, and the resin is backwashed and reused until it eventually needs replacement.",
      },
      {
        title: "Reverse osmosis at the tap",
        body: "A point-of-use reverse osmosis system removes uranium along with other dissolved contaminants and is a lower-cost option when you mainly want to protect drinking and cooking water.",
      },
      {
        title: "Activated alumina",
        body: "Activated alumina adsorption is another option a contractor may consider depending on your water chemistry and the other contaminants present.",
      },
      {
        title: "Handling the spent media",
        body: "Resin and media that capture uranium concentrate radioactivity over time and can become a regulated waste. A licensed contractor manages replacement and disposal correctly so the radioactivity is not left to build up in your home.",
      },
    ],
    costHeading: "What uranium treatment costs in New Hampshire",
    cost: [
      "A whole-house anion exchange system falls in the same general range NHDES cites for residential treatment, roughly $1,500 to $3,000 to install for a single treatment step, while a point-of-use reverse osmosis system that protects the kitchen tap costs less.",
      "The right choice and the real cost depend on your uranium level, whether arsenic or radon are also present, and your water chemistry. The free in-home test and written quote give you a number for your home. These figures are 2026 New Hampshire market context drawn from NHDES guidance, not a quote.",
    ],
    related: {
      services: ["arsenic-treatment", "radon-in-water-treatment", "reverse-osmosis-systems"],
      locations: ["moultonborough-nh", "wolfeboro-nh", "gilford-nh"],
      guide: {
        label: "Uranium and Radon in New Hampshire Well Water",
        href: "/guides/uranium-radon-well-water-nh",
      },
    },
    faqs: [
      {
        question: "Is uranium in well water dangerous?",
        answer:
          "At elevated levels, uranium in drinking water is a concern mainly for kidney health. It is a long-term exposure issue, not an emergency, and it is treatable once a test shows your level.",
      },
      {
        question: "How does a contractor remove uranium?",
        answer:
          "The most common methods are anion exchange, which captures uranium on a resin bed, and reverse osmosis at the kitchen tap. Activated alumina is another option depending on your water chemistry.",
      },
      {
        question: "Should I treat the whole house or just the tap for uranium?",
        answer:
          "Because the main concern is drinking water, a point-of-use reverse osmosis system is often enough, while a whole-house anion exchange system makes sense when uranium is high or other contaminants are present. The contractor recommends the right approach after testing.",
      },
      {
        question: "Does uranium often come with arsenic or radon?",
        answer:
          "Yes. Uranium, radon, and arsenic all come from the same New Hampshire bedrock and frequently occur together, which is why a contractor may suggest a radiological test and a system that addresses more than one contaminant.",
      },
      {
        question: "What happens to the system's spent media?",
        answer:
          "Media that captures uranium concentrates radioactivity over time and can become a regulated waste. A licensed contractor handles replacement and disposal properly so it does not accumulate in your home.",
      },
    ],
    sources: [EPA_TREATMENT, EPA_RADIONUCLIDES, NHDES_RADIONUCLIDES],
  },

  "radon-in-water-treatment": {
    slug: "radon-in-water-treatment",
    metaTitle: "Radon in Water Treatment in NH | NH Well Water Treatment",
    metaDescription:
      "Radon in water treatment for New Hampshire wells, by aeration or activated carbon. Free in-home water test and quote from a licensed local contractor.",
    heroSub:
      "Radon in water is distinct from radon in air and comes from the same New Hampshire bedrock. A licensed local contractor can test your well and recommend the right system. Start with a free in-home water test and quote.",
    intro: [
      "Radon is a radioactive gas produced as uranium decays in bedrock, and in New Hampshire it dissolves into groundwater in many bedrock wells. Radon in water is a separate issue from radon in indoor air, though they are related: when you run a faucet, shower, or washing machine, radon escapes from the water into the air you breathe.",
      // Source: NHDES DWGB-3-11 / DWGB-3-12 radon in water guidance and thresholds
      "NHDES notes that the health risk from radon in water is lower than from radon in air, but some New Hampshire wells carry enough radon in water to raise indoor air levels and add to lung-cancer risk. NHDES recommends treating the water when radon is at or above 10,000 picocuries per liter, and treatment may be advisable between 2,000 and 10,000 picocuries per liter when indoor air radon is also elevated.",
      "A water test tells you your radon level, and a contractor can match the right system to it.",
    ],
    methodsHeading: "How a contractor treats radon in water",
    methods: [
      {
        title: "Whole-house aeration",
        body: "Aeration bubbles air through the water to release radon before it reaches your taps, then vents it safely outside. NHDES considers aeration the preferred treatment for radon in water, especially at higher levels, because it removes radon without concentrating it indoors.",
      },
      {
        title: "Granular activated carbon",
        body: "A granular activated carbon filter can be used when radon is at or below 10,000 picocuries per liter. The carbon adsorbs radon, but it concentrates radioactivity, so the media is changed every one to two years and a contractor places and manages it carefully.",
      },
      {
        title: "Matching the method to your level",
        body: "A contractor chooses between aeration and carbon based on your radon level and household. Higher levels point toward aeration, while a carbon system can suit lower levels where placement and disposal are handled correctly.",
      },
      {
        title: "Looking at air as well as water",
        body: "Because radon in water adds to radon in air, a contractor may suggest testing your indoor air too, so the water system and any air mitigation work together.",
      },
    ],
    costHeading: "What radon in water treatment costs in New Hampshire",
    cost: [
      "Radon treatment cost depends mostly on the method. A whole-house aeration system is a larger point-of-entry installation and generally costs more than a single filter, while a granular activated carbon system is usually less to install but carries media-replacement and disposal considerations.",
      "Because the right choice hinges on your radon level and your home, the free in-home test and written quote are the honest way to get a real number. We do not publish a flat price, since a number that ignores your water would not mean much.",
    ],
    related: {
      services: ["uranium-treatment", "whole-house-water-treatment", "arsenic-treatment"],
      locations: ["meredith-nh", "alton-nh", "belmont-nh"],
      guide: {
        label: "Uranium and Radon in New Hampshire Well Water",
        href: "/guides/uranium-radon-well-water-nh",
      },
    },
    faqs: [
      {
        question: "Is radon in water the same as radon in air?",
        answer:
          "No, but they are connected. Radon in water is the radon dissolved in your well water, and some of it escapes into indoor air when you use water. Radon in air is the larger health concern, and treating the water reduces the part that comes from your well.",
      },
      {
        question: "At what level does NHDES recommend treating radon in water?",
        answer:
          "NHDES recommends treating the water when radon is at or above 10,000 picocuries per liter. Between 2,000 and 10,000 picocuries per liter, treatment may be advisable when indoor air radon is also elevated.",
      },
      {
        question: "Is aeration or carbon better for radon?",
        answer:
          "NHDES considers whole-house aeration the preferred treatment, especially at higher levels, because it removes radon without concentrating radioactivity indoors. Granular activated carbon can work at lower levels when placement and disposal are handled correctly.",
      },
      {
        question: "Does a carbon filter for radon need special handling?",
        answer:
          "Yes. A carbon filter concentrates radon as it works, so the media is changed every one to two years and a contractor manages its placement and disposal to keep radioactivity from building up.",
      },
      {
        question: "Should I test my indoor air for radon too?",
        answer:
          "It is a good idea. Radon in water adds to radon in air, so testing both gives a complete picture and lets the water system and any air mitigation work together.",
      },
    ],
    sources: [NHDES_RADIONUCLIDES, NHDES_RADON_HOME],
  },

  "iron-manganese-treatment": {
    slug: "iron-manganese-treatment",
    metaTitle: "Iron & Manganese Treatment in NH | NH Well Water Treatment",
    metaDescription:
      "Iron and manganese treatment for New Hampshire well water by oxidation and filtration. Free in-home water test and quote from a licensed local contractor.",
    heroSub:
      "Iron and manganese cause staining, metallic taste, and buildup, and they are very common in New Hampshire wells. A licensed local contractor can test your well and recommend the right system. Start with a free in-home water test and quote.",
    intro: [
      "Iron and manganese are among the most common nuisances in New Hampshire well water, found in both shallow and deep wells. They are not the same kind of health concern as arsenic, but they cause the rust and black staining on fixtures and laundry, the metallic taste, and the buildup in plumbing and water heaters that many well owners notice first.",
      // Source: NHDES DWGB-3-8 secondary MCLs iron 0.3 mg/L, manganese 0.05 mg/L; oxidation-filtration preferred
      "NHDES sets secondary standards of 0.3 milligrams per liter for iron and 0.05 milligrams per liter for manganese, the points at which staining and taste usually appear. Concentrations in New Hampshire groundwater range widely, from barely detectable to several times those levels, so a test tells you what you are dealing with.",
      "Because iron and manganese often occur with arsenic in New Hampshire bedrock, a contractor frequently treats them together with a single, well-sequenced system.",
    ],
    methodsHeading: "How a contractor treats iron and manganese",
    methods: [
      {
        title: "Oxidation and filtration",
        body: "NHDES considers oxidation-filtration the preferred residential approach. The system converts dissolved iron and manganese into solid particles and filters them out, using filter media such as Birm, greensand, MTM, or Filox, without discharging brine to the environment.",
      },
      {
        title: "Pre-oxidation when needed",
        body: "Depending on your water, a contractor may add air, chlorine, or a permanganate feed ahead of the filter to oxidize the iron and manganese fully. Air alone is often enough for iron, while manganese usually needs a stronger oxidizer.",
      },
      {
        title: "Water softening where hardness co-occurs",
        body: "When iron or manganese comes with high hardness above 150 milligrams per liter, a water softener can address all three. NHDES suggests using non-salt iron and manganese treatment unless you also need to remove hardness.",
      },
      {
        title: "Sequencing with other treatment",
        body: "When arsenic or other contaminants are also present, a contractor orders the treatment steps so each works properly, which is one reason iron and manganese removal is often built into a whole-house system.",
      },
    ],
    costHeading: "What iron and manganese treatment costs in New Hampshire",
    cost: [
      "NHDES puts the installation cost of a typical residential whole-house iron and manganese system at roughly $1,500 to $3,000 for a single filtration step, regardless of the specific technology, with additional pre-treatment or post-treatment adding to that.",
      "Your real cost depends on how much iron and manganese you have, whether hardness or arsenic are also present, and the system the contractor recommends after the free in-home test. These figures are 2026 New Hampshire market context drawn from NHDES guidance, not a quote.",
    ],
    related: {
      services: ["whole-house-water-treatment", "arsenic-treatment", "reverse-osmosis-systems"],
      locations: ["rochester-nh", "farmington-nh", "tilton-nh"],
      guide: {
        label: "A New Hampshire Well Water Contaminants Overview",
        href: "/guides/nh-well-water-contaminants",
      },
    },
    faqs: [
      {
        question: "Are iron and manganese in well water harmful?",
        answer:
          "They are mainly a nuisance, causing staining, metallic taste, and buildup rather than the kind of health risk arsenic carries. NHDES sets secondary standards of 0.3 milligrams per liter for iron and 0.05 milligrams per liter for manganese, the levels where problems usually start.",
      },
      {
        question: "Why does my water leave rust or black stains?",
        answer:
          "Iron tends to leave rust-colored stains and manganese leaves black or dark stains on fixtures, laundry, and inside plumbing. A test confirms which one, and usually it is some of both.",
      },
      {
        question: "Is oxidation-filtration better than a water softener?",
        answer:
          "NHDES considers oxidation-filtration the preferred approach for iron and manganese and suggests using non-salt treatment unless you also need to remove hardness. A softener can make sense when high hardness occurs along with iron and manganese.",
      },
      {
        question: "Will treatment fix the metallic taste and smell?",
        answer:
          "Removing iron and manganese addresses the metallic taste and the staining they cause. If a separate odor is present, the contractor identifies its source during testing and recommends the right step.",
      },
      {
        question: "How much maintenance does the system need?",
        answer:
          "Oxidation-filtration systems are backwashed regularly and the media is serviced on a schedule the contractor explains in the quote. Any oxidizer feed is refilled periodically.",
      },
    ],
    sources: [NHDES_IRON_MN],
  },

  "whole-house-water-treatment": {
    slug: "whole-house-water-treatment",
    metaTitle: "Whole-House Water Treatment in NH | NH Well Water Treatment",
    metaDescription:
      "Whole-house water treatment for New Hampshire wells when several contaminants are present. Free in-home water test and quote from a licensed contractor.",
    heroSub:
      "A whole-house system treats every tap in the home and is the right choice when several contaminants are present. A licensed local contractor can test your well and design the right system. Start with a free in-home water test and quote.",
    intro: [
      "Whole-house water treatment, also called point-of-entry treatment, treats the water where it enters your home so that every tap, shower, and appliance gets treated water. It is the configuration to consider when more than one contaminant is present, when a contaminant affects the whole home rather than just drinking water, or when levels are high.",
      // Source: NHDES DWGB-3-2 (whole-house applicability and cost); DWGB-3-8 (iron/manganese)
      "Some New Hampshire problems point clearly to whole-house treatment. Radon in water needs a point-of-entry system because it escapes into the air throughout the house, and iron and manganese staining affects every fixture and load of laundry. NHDES notes that whole-house arsenic treatment makes sense when arsenic is high or when iron also needs to be removed, while a point-of-use system can be the most cost-effective choice for arsenic alone.",
      "Because New Hampshire bedrock often delivers several contaminants at once, a whole-house system is frequently built in stages, each handling a different problem in the right order.",
    ],
    methodsHeading: "How a contractor designs a whole-house system",
    methods: [
      {
        title: "Start with a full test",
        body: "A whole-house system is designed around your actual water, so a contractor begins with a test that covers arsenic, uranium, radon, iron, manganese, hardness, and bacteria, then builds only what your water calls for.",
      },
      {
        title: "Stage the treatment in the right order",
        body: "Multi-contaminant systems are sequenced so each step works. For example, oxidation-filtration for iron and manganese may come before arsenic media, and aeration for radon is placed where it vents safely. Getting the order right protects the downstream stages.",
      },
      {
        title: "Size it to your household",
        body: "A contractor sizes the system to your flow rate and water use so treated water keeps up with the whole home, including peak demand.",
      },
      {
        title: "Pair with point-of-use where it helps",
        body: "Some homes use a whole-house system for issues like radon and iron, then add a reverse osmosis tap for the lowest-cost protection of drinking and cooking water. A contractor recommends the mix that fits.",
      },
    ],
    costHeading: "What whole-house treatment costs in New Hampshire",
    cost: [
      "NHDES puts a single whole-house filtration step at roughly $1,500 to $3,000 to install, regardless of technology. A whole-house system that addresses several contaminants combines steps, so the cost reflects how many problems it solves and any pre-treatment or post-treatment it needs.",
      "The only way to a real number is a test and a written, itemized quote, which is exactly what the free in-home visit provides. These figures are 2026 New Hampshire market context drawn from NHDES guidance, not a quote.",
    ],
    related: {
      services: ["arsenic-treatment", "iron-manganese-treatment", "radon-in-water-treatment"],
      locations: ["laconia-nh", "dover-nh", "wolfeboro-nh"],
      guide: {
        label: "A New Hampshire Well Water Contaminants Overview",
        href: "/guides/nh-well-water-contaminants",
      },
    },
    faqs: [
      {
        question: "When do I need whole-house treatment instead of a single tap?",
        answer:
          "Whole-house treatment makes sense when several contaminants are present, when a contaminant like radon or iron affects the whole home, or when levels are high. For arsenic alone, a point-of-use system at the kitchen tap is often the most cost-effective choice.",
      },
      {
        question: "Can one system handle several contaminants?",
        answer:
          "Yes. A whole-house system is often built in stages, each handling a different contaminant in the right order. A contractor designs the sequence around your test results.",
      },
      {
        question: "How much space does a whole-house system need?",
        answer:
          "It varies with the number of treatment stages. A contractor confirms the space needed, usually near where the water line enters the home, during the in-home visit.",
      },
      {
        question: "Is whole-house treatment more expensive than a tap system?",
        answer:
          "Generally yes, because it treats all the water in the home and may combine several stages. NHDES puts a single whole-house filtration step at about $1,500 to $3,000, and a multi-stage system costs more. The written quote gives you the real figure.",
      },
      {
        question: "How often does a whole-house system need service?",
        answer:
          "Each stage has its own schedule, from backwashing to media and filter changes. The contractor lays out the maintenance plan in the quote so there are no surprises.",
      },
    ],
    sources: [NHDES_ARSENIC, NHDES_IRON_MN],
  },

  "reverse-osmosis-systems": {
    slug: "reverse-osmosis-systems",
    metaTitle: "Reverse Osmosis Systems in NH | NH Well Water Treatment",
    metaDescription:
      "Reverse osmosis drinking-water systems for New Hampshire wells, often paired with whole-house treatment. Free in-home water test and quote.",
    heroSub:
      "A reverse osmosis system at the kitchen tap is a lower-cost way to protect drinking and cooking water. A licensed local contractor can test your well and recommend the right setup. Start with a free in-home water test and quote.",
    intro: [
      "Reverse osmosis is a point-of-use treatment, usually installed under the kitchen sink, that pushes water through a very fine membrane and leaves a broad range of dissolved contaminants behind. For New Hampshire well owners, it is a practical, lower-cost way to protect the water you drink and cook with.",
      // Source: NHDES DWGB-3-2 (RO POU, As-V ~95%, As-III ~60%, 3-4 gal waste); EPA treatment technologies
      "Reverse osmosis removes contaminants including arsenic and uranium, and it is effective enough that NHDES describes it as a standard point-of-use option. It does produce some wastewater, on the order of three to four gallons for every gallon it treats, which is why it is used at a single tap rather than for the whole house.",
      "Many homes pair a reverse osmosis tap with whole-house treatment, letting the larger system handle issues like radon and iron while the reverse osmosis unit polishes drinking water.",
    ],
    methodsHeading: "How a contractor sets up reverse osmosis",
    methods: [
      {
        title: "Under-sink installation",
        body: "A contractor installs the membrane, pre-filters, and a small storage tank under the kitchen sink, with a dedicated faucet for treated water. It is a compact system that does not change the rest of your plumbing.",
      },
      {
        title: "Pre-oxidation for Arsenic-III",
        body: "Reverse osmosis removes about 95 percent of Arsenic-V but only about 60 percent of Arsenic-III. When Arsenic-III is present, a contractor adds a pre-oxidation cartridge so the membrane can do its job.",
      },
      {
        title: "Filter and membrane changes",
        body: "The pre-filters and membrane are replaced on a schedule to keep the system working. A contractor sets that schedule based on your water and use, and explains it in the quote.",
      },
      {
        title: "Pairing with whole-house treatment",
        body: "When a well has whole-home issues like radon or iron, a contractor often combines a whole-house system with a reverse osmosis tap, which is usually the lowest-cost way to protect drinking water.",
      },
    ],
    costHeading: "What a reverse osmosis system costs in New Hampshire",
    cost: [
      "Because it treats only one tap, a point-of-use reverse osmosis system is a lower-cost option than whole-house treatment, with periodic filter and membrane changes as the main ongoing cost.",
      "The right setup depends on which contaminants are in your water and whether you also need whole-house treatment, so the free in-home test and written quote are the way to a real number for your home.",
    ],
    related: {
      services: ["arsenic-treatment", "uranium-treatment", "whole-house-water-treatment"],
      locations: ["gilford-nh", "barrington-nh", "rochester-nh"],
      guide: {
        label: "A New Hampshire Well Water Contaminants Overview",
        href: "/guides/nh-well-water-contaminants",
      },
    },
    faqs: [
      {
        question: "What does a reverse osmosis system remove?",
        answer:
          "Reverse osmosis removes a broad range of dissolved contaminants, including arsenic and uranium. It is a standard point-of-use option for protecting drinking and cooking water.",
      },
      {
        question: "Does reverse osmosis waste water?",
        answer:
          "It produces some wastewater, on the order of three to four gallons for every gallon it treats, which is why it is used at a single tap rather than for the whole house.",
      },
      {
        question: "Can reverse osmosis treat the whole house?",
        answer:
          "It is generally used at one tap because of the wastewater and the volume involved. For whole-home issues like radon or iron, a contractor pairs whole-house treatment with a reverse osmosis tap for drinking water.",
      },
      {
        question: "Does reverse osmosis remove Arsenic-III?",
        answer:
          "It removes about 95 percent of Arsenic-V but only about 60 percent of Arsenic-III. When Arsenic-III is present, a contractor adds a pre-oxidation cartridge so the membrane removes it effectively.",
      },
      {
        question: "How often do the filters need changing?",
        answer:
          "The pre-filters and membrane are replaced on a schedule based on your water and use. The contractor sets that schedule and explains it in the written quote.",
      },
    ],
    sources: [NHDES_ARSENIC, EPA_TREATMENT],
  },
};
