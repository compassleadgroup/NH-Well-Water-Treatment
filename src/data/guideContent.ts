// Guide content. These are the linkable, sourced assets. Authored as the brand,
// never a fabricated person. Paragraph and list strings may contain inline HTML
// links to authoritative sources (NHDES, USGS, EPA, Dartmouth), which the
// template renders. Health content is stated the way EPA and NHDES state it,
// with citations, and is never alarmist.

export interface GuideSection {
  id: string;
  heading: string;
  paras?: string[];
  list?: string[];
}

export interface GuideSource {
  label: string;
  href: string;
}

export interface GuideContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  sections: GuideSection[];
  relatedServices: string[];
  relatedGuides: string[];
  sources: GuideSource[];
}

const S = {
  nhdesArsenicStd: {
    label: "NHDES, More Protective Arsenic Standard Will Reduce Risk for Many",
    href: "https://www.des.nh.gov/news-and-media/blog/more-protective-arsenic-standard-will-reduce-risk-many",
  },
  nhdesArsenic: {
    label: "NHDES, Arsenic in New Hampshire Well Water (DWGB-3-2)",
    href: "https://www.des.nh.gov/sites/g/files/ehbemt341/files/documents/2020-01/dwgb-3-2.pdf",
  },
  usgsFs: {
    label: "USGS, Arsenic in Private Bedrock Wells in Southeastern New Hampshire (FS-051-03)",
    href: "https://pubs.usgs.gov/fs/fs-051-03/",
  },
  usgsProb: {
    label: "USGS, Estimated Probability of Arsenic in Groundwater from Bedrock Aquifers in New Hampshire (SIR 2012-5156)",
    href: "https://pubs.usgs.gov/sir/2012/5156/",
  },
  usgsUranRadon: {
    label: "USGS, New Maps Predict Areas of Elevated Radon and Uranium in New Hampshire Groundwater",
    href: "https://www.usgs.gov/centers/new-england-water-science-center/news/new-maps-predict-areas-elevated-radon-uranium-new",
  },
  nhdesTesting: {
    label: "NHDES, Suggested Water Quality Testing for Private Wells (DWGB-2-1)",
    href: "https://www.des.nh.gov/sites/g/files/ehbemt341/files/documents/2020-01/dwgb-2-1.pdf",
  },
  nhdesRadionuclides: {
    label: "NHDES, Radionuclides in Drinking Water (DWGB-3-11)",
    href: "https://www.des.nh.gov/sites/g/files/ehbemt341/files/documents/2020-01/dwgb-3-11.pdf",
  },
  nhdesIronMn: {
    label: "NHDES, Iron and/or Manganese in Drinking Water (DWGB-3-8)",
    href: "https://www.des.nh.gov/sites/g/files/ehbemt341/files/documents/2020-01/dwgb-3-8.pdf",
  },
  nhdesHardness: {
    label: "NHDES, Hardness in Drinking Water (DWGB-3-6)",
    href: "https://www.des.nh.gov/sites/g/files/ehbemt341/files/documents/2020-01/dwgb-3-6.pdf",
  },
  nhdesPrivate: {
    label: "NHDES, Private Wells",
    href: "https://www.des.nh.gov/water/drinking-water/private-wells",
  },
  epaArsenic: {
    label: "EPA, Chemical Contaminant Rules and arsenic health information",
    href: "https://www.epa.gov/dwreginfo/chemical-contaminant-rules",
  },
  epaRadionuclides: {
    label: "EPA, Natural Radionuclides in Private Wells",
    href: "https://www.epa.gov/radtown/natural-radionuclides-private-wells",
  },
  atsdrUranium: {
    label: "ATSDR, ToxFAQs for Uranium",
    href: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=439&toxid=77",
  },
  dartmouth: {
    label: "Dartmouth Toxic Metals Superfund Research Program",
    href: "https://sites.dartmouth.edu/toxmetal/",
  },
  rsa4d: {
    label: "New Hampshire RSA 477:4-d (private water supply disclosure)",
    href: "https://gc.nh.gov/rsa/html/xlviii/477/477-4-d.htm",
  },
  rsa4a: {
    label: "New Hampshire RSA 477:4-a (radon, arsenic, and lead notification)",
    href: "https://gc.nh.gov/rsa/html/xlviii/477/477-4-a.htm",
  },
};

const link = (s: GuideSource, text: string) =>
  `<a href="${s.href}" rel="noopener noreferrer" class="text-brand-700 underline">${text}</a>`;

export const guideContent: Record<string, GuideContent> = {
  "arsenic-in-well-water-nh": {
    slug: "arsenic-in-well-water-nh",
    title: "New Hampshire Arsenic in Well Water: A Homeowner's Guide",
    metaTitle: "Arsenic in New Hampshire Well Water: A Guide",
    metaDescription:
      "What arsenic is, why New Hampshire bedrock produces it, the 5 ppb standard, and how to test and treat your private well. A calm, sourced homeowner's guide.",
    intro: [
      "Arsenic is the single most common reason New Hampshire well owners reach out about their water, and it is also the most misunderstood. It is invisible, it comes from the ground rather than from pollution, and it is a long-term health issue rather than an emergency. This guide explains what arsenic is, why it shows up in New Hampshire wells, what the health research says, and how testing and treatment work.",
      `Everything here is drawn from primary sources, including the ${link(S.nhdesArsenic, "New Hampshire Department of Environmental Services")}, the ${link(S.usgsFs, "United States Geological Survey")}, and the ${link(S.dartmouth, "Dartmouth Toxic Metals Superfund Research Program")}, so you can check any fact for yourself.`,
    ],
    sections: [
      {
        id: "what-it-is",
        heading: "What arsenic is and why it is in New Hampshire water",
        paras: [
          "Arsenic is a naturally occurring element found in rock, soil, and groundwater. In New Hampshire it dissolves out of the granite and metamorphic bedrock that underlies much of the state, which is why it turns up in private wells with no nearby industrial source. It has no color, taste, or smell, so no one can detect it without a laboratory test.",
          "Because it comes from the bedrock, arsenic is mostly a concern for drilled bedrock wells rather than shallow dug wells, though either can be affected. Two homes on the same road can have very different levels, since arsenic follows the rock rather than the property line.",
        ],
      },
      {
        id: "how-common",
        heading: "How common arsenic is in New Hampshire wells",
        paras: [
          `Arsenic is widespread enough that testing is the only responsible assumption. A ${link(S.usgsFs, "USGS study of private bedrock wells in southeastern New Hampshire")} found that nearly one in five exceeded the federal arsenic limit of 10 micrograms per liter, and the rate reached about 21 percent in Hillsborough and Strafford counties.`,
          `Statewide, ${link(S.usgsProb, "USGS probability mapping")} ties arsenic to specific bedrock units, and median arsenic in private bedrock wells is similar across counties. In other words, there is no New Hampshire town where you can safely assume your well is clear without testing it.`,
        ],
      },
      {
        id: "health",
        heading: "What the health research says",
        paras: [
          "This is a long-term exposure issue, not an acute poisoning risk at the levels found in most wells. The concern is years of drinking water with elevated arsenic, not a single glass.",
          "The EPA links long-term exposure to inorganic arsenic in drinking water to a higher risk of several cancers, including skin, bladder, and lung cancer, and to non-cancer effects on the cardiovascular, skin, and other systems. New Hampshire weighed this evidence when it tightened its own standard. None of this is cause for panic, and it is exactly why the state and federal agencies recommend knowing your level and treating water that exceeds the standard.",
        ],
      },
      {
        id: "standard",
        heading: "New Hampshire's 5 ppb arsenic standard",
        paras: [
          `In 2021, New Hampshire lowered its enforceable standard for arsenic to 5 parts per billion, half the federal limit of 10 parts per billion, becoming one of the first states in the country to do so (${link(S.nhdesArsenicStd, "NHDES")}). The standard applies to public water systems, but it is also the sensible benchmark for a private well: if your level is above 5 parts per billion, treatment is worth serious consideration.`,
        ],
      },
      {
        id: "testing",
        heading: "How to test your well for arsenic",
        paras: [
          `You cannot see, taste, or smell arsenic, so a laboratory test is the only way to know your level. You can send a sample to a New Hampshire accredited laboratory, or have a licensed local contractor collect a sample during a free in-home visit. ${link(S.nhdesTesting, "NHDES")} recommends including arsenic in a standard water analysis every three to five years.`,
          "If your home is on a bedrock well and has never been tested, that is the place to start. A test also tells you which form of arsenic is present, which matters for choosing a treatment system.",
        ],
      },
      {
        id: "treatment",
        heading: "Treatment options at a high level",
        paras: [
          `Arsenic is very treatable. According to ${link(S.nhdesArsenic, "NHDES")}, the common approaches are adsorptive media filters that bind arsenic, anion exchange systems that trade it off a resin bed, and reverse osmosis systems at the kitchen tap. A licensed contractor sizes the system to your water, your level, and whether you want to treat the whole house or just drinking water.`,
          "One detail matters enough to have its own guide: arsenic comes in two forms, and the form changes which system works best and whether a pre-treatment step is needed. If you want to understand that before talking to a contractor, the companion guide on arsenic species walks through it.",
        ],
      },
      {
        id: "interpreting",
        heading: "What your arsenic result means",
        paras: [
          "Once you have a number, it is easy to interpret. Below 5 parts per billion, your well meets New Hampshire's standard. Between 5 and 10 parts per billion, you are above the state standard but below the older federal limit, and treatment is worth considering. Above 10 parts per billion, you exceed both standards, and treatment is the clear path.",
          "A single result is a snapshot. Arsenic levels can shift with the seasons and with how much the well is used, which is why a standard analysis every three to five years is the baseline recommendation, and why treated water is retested on a schedule rather than tested once and forgotten.",
        ],
      },
      {
        id: "whole-house-or-pou",
        heading: "Whole-house or point-of-use treatment?",
        paras: [
          `Because arsenic is a concern only when swallowed and is not absorbed through the skin, ${link(S.nhdesArsenic, "NHDES")} notes that a point-of-use system at the kitchen tap is often the most cost-effective solution for arsenic alone. A whole-house system makes sense when arsenic levels are high, when iron also needs to be removed, or when you simply want every tap covered.`,
          "A licensed local contractor weighs your level, your water chemistry, and how your household uses water before recommending one approach or the other. The free in-home test is what makes that recommendation specific to your home rather than generic, and it is the reason there is no single right answer that fits every well.",
        ],
      },
    ],
    relatedServices: ["arsenic-treatment", "whole-house-water-treatment", "reverse-osmosis-systems"],
    relatedGuides: ["arsenic-treatment-system-comparison", "well-water-testing-home-sale-nh"],
    sources: [S.nhdesArsenicStd, S.nhdesArsenic, S.usgsFs, S.usgsProb, S.nhdesTesting, S.epaArsenic, S.dartmouth],
  },

  "well-water-testing-home-sale-nh": {
    slug: "well-water-testing-home-sale-nh",
    title: "Well Water Testing Before Buying or Selling a Home in New Hampshire",
    metaTitle: "Well Water Testing for a NH Home Sale",
    metaDescription:
      "What buyers and sellers should test for, what New Hampshire disclosure law requires, who pays, and how treatment fits a home sale. A sourced guide.",
    intro: [
      "A private well is one of the few parts of a New Hampshire home that no public agency monitors, so a home sale is often the moment its water finally gets tested. Whether you are buying or selling, knowing what is in the water protects everyone and prevents surprises at the closing table.",
      "This guide covers what New Hampshire law requires, what to test for, when to test, who usually pays, and how treatment fits into a sale. For the testing process itself, from choosing a state-accredited laboratory to the free in-home option, see our <a href=\"/services/well-water-testing\" rel=\"noopener\" class=\"text-brand-700 underline\">well water testing page</a>.",
    ],
    sections: [
      {
        id: "why",
        heading: "Why water comes up in a New Hampshire home sale",
        paras: [
          "Most New Hampshire homes outside the larger downtowns are on private wells, and the state's granite bedrock naturally releases arsenic, uranium, and radon. Because those contaminants are invisible and unregulated on private wells, a buyer's due diligence and a seller's disclosure are how they come to light.",
        ],
      },
      {
        id: "law",
        heading: "What New Hampshire disclosure law requires",
        paras: [
          `New Hampshire law does require disclosure, even though it does not mandate a specific test. Under ${link(S.rsa4d, "RSA 477:4-d")}, a seller of a one-to-four-family home must give the buyer written information about the private water supply, including its type and location and the date of the most recent water test, along with any known problems such as an unsatisfactory result.`,
          `Separately, ${link(S.rsa4a, "RSA 477:4-a")} requires a notification reminding buyers that radon and arsenic can be present in New Hampshire and that testing is recommended. The takeaway is simple: water quality is part of the transaction, and current test results make the disclosure straightforward.`,
        ],
      },
      {
        id: "what-to-test",
        heading: "What to test for",
        paras: [
          `A home-sale test should go beyond bacteria. ${link(S.nhdesTesting, "NHDES")} recommends a standard analysis that includes arsenic, along with bacteria, nitrate, and the common minerals, plus a radiological test for radon and uranium. In the arsenic belt of southeastern New Hampshire, arsenic deserves particular attention.`,
        ],
        list: [
          "Arsenic, the most common high-intent concern on New Hampshire bedrock wells",
          "Uranium and radon, the radioactive products of the same bedrock",
          "Bacteria and nitrate, which point to surface influence or contamination",
          "Iron, manganese, and hardness, which affect taste, staining, and plumbing",
        ],
      },
      {
        id: "timing",
        heading: "Timing and who pays",
        paras: [
          "Testing usually happens during the inspection period, alongside the home inspection. In practice the buyer most often pays for and orders the test as part of due diligence, though this is negotiable, and a seller who tests ahead of listing can resolve questions before offers come in.",
          "If a test comes back above the New Hampshire arsenic standard or shows another issue, it becomes a normal point of negotiation, much like any inspection finding.",
        ],
      },
      {
        id: "treatment-fit",
        heading: "How treatment fits into the sale",
        paras: [
          "The reassuring part is that the bedrock contaminants are treatable, so a result above a standard rarely needs to break a deal. A buyer or seller can have a licensed local contractor test the water, explain the result, and provide a written quote for a system, which gives both sides a real number to work with.",
          "Installing or crediting for a treatment system is a common way to handle a water finding, and it leaves the next owner with clean water and documentation.",
        ],
      },
      {
        id: "timeline",
        heading: "How testing fits the inspection timeline",
        paras: [
          "A water test slots neatly into the inspection period of a typical New Hampshire purchase. A sample is collected, sent to an accredited laboratory, and results come back within the inspection window in most cases. Planning the test early in that window leaves room to act on the results before deadlines arrive.",
          `Sellers can get ahead of this by testing before listing. A recent, complete water test answers the disclosure questions under ${link(S.rsa4d, "RSA 477:4-d")} up front and removes a common source of late-stage friction, since the buyer is not left waiting on results during the most time-sensitive part of the deal.`,
        ],
      },
      {
        id: "if-high",
        heading: "If the result comes back high",
        paras: [
          "A result above a standard is a normal negotiation point, not a deal-breaker. Because the bedrock contaminants are treatable, the usual outcomes are a price adjustment, a seller credit toward treatment, or a system installed before closing.",
          "Either party can have a licensed local contractor test the water, explain the result, and provide a written, itemized quote, which turns an uncertain finding into a concrete number both sides can work with. The next owner then inherits clean water and the documentation to prove it, which is useful at the following sale as well.",
        ],
      },
      {
        id: "checklist",
        heading: "A simple checklist for buyers and sellers",
        list: [
          "Confirm whether the home is on a private well or public water",
          "Order a standard analysis plus a radiological test for radon and uranium",
          "Pay particular attention to arsenic, especially in the southeastern arsenic belt",
          "Time the test early in the inspection period",
          "If a result is high, get a written treatment quote before negotiating",
        ],
      },
    ],
    relatedServices: ["arsenic-treatment", "whole-house-water-treatment"],
    relatedGuides: ["arsenic-in-well-water-nh", "nh-well-water-contaminants"],
    sources: [S.rsa4d, S.rsa4a, S.nhdesTesting, S.nhdesPrivate, S.nhdesArsenicStd],
  },

  "arsenic-treatment-system-comparison": {
    slug: "arsenic-treatment-system-comparison",
    title: "Arsenic-III vs Arsenic-V: Choosing the Right Treatment System",
    metaTitle: "Arsenic-III vs Arsenic-V Treatment Systems",
    metaDescription:
      "Why the arsenic species in your well changes the right treatment system, how each method handles it, and the questions to ask a contractor before you buy.",
    intro: [
      "If you have an arsenic result and are weighing treatment, there is one technical detail worth understanding first: arsenic comes in two chemical forms, and the form you have changes which system works best. This guide explains the difference in plain language so you can have a better conversation with a contractor.",
      `The technical points here follow ${link(S.nhdesArsenic, "NHDES guidance on arsenic in New Hampshire well water")}.`,
    ],
    sections: [
      {
        id: "two-forms",
        heading: "Two forms of arsenic",
        paras: [
          "Arsenic in well water is usually present as one of two species: Arsenic-III, also called arsenite, and Arsenic-V, also called arsenate. They are the same element but carry different electrical charges. Arsenic-V is negatively charged in water, while Arsenic-III carries essentially no charge.",
          "A standard arsenic test reports your total arsenic, and a contractor can determine or estimate the species, which is the piece that drives the system choice.",
        ],
      },
      {
        id: "why-it-matters",
        heading: "Why the species matters",
        paras: [
          "Most arsenic treatment relies on the contaminant carrying a charge so it can be captured. Because Arsenic-V is charged, it is removed efficiently by anion exchange and by reverse osmosis membranes. Because Arsenic-III carries little or no charge, those same methods remove it far less effectively until it is converted.",
          `${link(S.nhdesArsenic, "NHDES notes")} that reverse osmosis removes roughly 95 percent of Arsenic-V but only about 60 percent of Arsenic-III, which is a large enough gap to change the design of a system.`,
        ],
      },
      {
        id: "methods",
        heading: "How each method handles the two forms",
        list: [
          "Anion exchange removes Arsenic-V well across a range of pH, but does not remove uncharged Arsenic-III, so it needs Arsenic-III converted first.",
          "Reverse osmosis removes most Arsenic-V and only part of Arsenic-III, so a pre-oxidation cartridge is added when Arsenic-III is present.",
          "Adsorptive media binds arsenic, but its capacity drops when Arsenic-III is present or when pH is above 7.5.",
          "Pre-oxidation, using chlorine, a manganese dioxide media, or similar, converts Arsenic-III to Arsenic-V so the main treatment can do its job.",
        ],
      },
      {
        id: "ph",
        heading: "The role of pH",
        paras: [
          "Water chemistry beyond the arsenic itself matters too. Higher pH reduces the capacity of some adsorptive media, which is one reason a contractor reviews your full water profile rather than the arsenic number alone. In some cases a system pairs arsenic treatment with pH adjustment, such as a calcite neutralizer, to keep it working well.",
        ],
      },
      {
        id: "questions",
        heading: "Questions to ask a contractor",
        list: [
          "Which arsenic species is in my water, and how was that determined?",
          "Does the recommended system need a pre-oxidation step for Arsenic-III?",
          "How does my pH affect the system you are proposing?",
          "What is the maintenance schedule, and how often should I retest the treated water?",
          "Is point-of-use or whole-house treatment the better fit for my level and household?",
        ],
      },
      {
        id: "maintenance",
        heading: "Maintenance and monitoring",
        paras: [
          `Whatever system you choose, it needs upkeep, and arsenic systems get one extra step: confirmation testing. ${link(S.nhdesArsenic, "NHDES")} recommends retesting the treated water for arsenic quarterly during the first year and twice a year after that, so you know the system is performing as intended.`,
          "The hardware maintenance varies by method. Adsorptive media is replaced every one to three years depending on your water and use, anion exchange resin is regenerated with ordinary salt, and reverse osmosis membranes and cartridges are changed on a set schedule. A contractor lays out the full maintenance plan in the written quote so there are no surprises later.",
        ],
      },
      {
        id: "pou-or-whole-house",
        heading: "Point-of-use or whole-house for your arsenic",
        paras: [
          "The species discussion connects directly to where you treat. A point-of-use reverse osmosis system protects drinking and cooking water at one tap and handles Arsenic-V well, with a pre-oxidation cartridge added for Arsenic-III. A whole-house anion exchange or adsorptive media system treats every tap and is the choice when levels are high or other contaminants are present.",
          "Neither is universally better. A point-of-use system is the lower-cost route when arsenic is the only concern, while a whole-house system earns its place when iron, manganese, or radon also need attention. The right answer comes from your test, your water chemistry, and how your household uses water.",
        ],
      },
      {
        id: "how-species-determined",
        heading: "How the arsenic species is determined",
        paras: [
          "You may wonder how anyone knows which form you have. Some laboratories report arsenic speciation directly, and a contractor can also infer the likely form from your water chemistry, since Arsenic-III is more common in low-oxygen groundwater and Arsenic-V where water is more oxygenated.",
          "When there is any doubt, a safe design assumes Arsenic-III is present and includes a pre-oxidation step, so the system performs regardless. That belt-and-suspenders approach is common on New Hampshire bedrock wells, where conditions vary from one well to the next.",
        ],
      },
    ],
    relatedServices: ["arsenic-treatment", "reverse-osmosis-systems", "whole-house-water-treatment"],
    relatedGuides: ["arsenic-in-well-water-nh", "nh-well-water-contaminants"],
    sources: [S.nhdesArsenic, S.nhdesArsenicStd],
  },

  "uranium-radon-well-water-nh": {
    slug: "uranium-radon-well-water-nh",
    title: "Uranium and Radon in New Hampshire Well Water",
    metaTitle: "Uranium and Radon in NH Well Water",
    metaDescription:
      "Why uranium and radon occur in New Hampshire bedrock wells, what the health research says, and how they are tested and treated. A calm, sourced guide.",
    intro: [
      "Arsenic gets most of the attention, but the same New Hampshire bedrock that produces it also produces two radioactive contaminants: uranium and radon. They often travel together with arsenic, and they are worth understanding and testing for. This guide explains where they come from, what the health research says, and how they are treated.",
      `It draws on the ${link(S.usgsUranRadon, "United States Geological Survey")}, ${link(S.nhdesRadionuclides, "NHDES")}, and ${link(S.epaRadionuclides, "EPA")}.`,
    ],
    sections: [
      {
        id: "where",
        heading: "Why uranium and radon occur in New Hampshire bedrock",
        paras: [
          `New Hampshire's bedrock is largely granite and metamorphic rock, which has a high potential to contain uranium. As uranium decays, it produces radon, a radioactive gas. ${link(S.usgsUranRadon, "USGS mapping")} shows that much of central and eastern New Hampshire has an elevated probability of radon and uranium in groundwater, and bedrock wells tend to carry higher levels of these natural contaminants than shallow wells.`,
        ],
      },
      {
        id: "uranium-health",
        heading: "Uranium and your health",
        paras: [
          `Uranium in drinking water is mainly a concern for the kidneys. The ${link(S.atsdrUranium, "federal ATSDR")} describes soluble uranium as a kidney toxin at elevated levels, and the EPA sets a federal limit of 30 micrograms per liter for uranium in drinking water. As with arsenic, this is about long-term exposure, and the practical response is to test and, if needed, treat.`,
        ],
      },
      {
        id: "radon-water-air",
        heading: "Radon in water is different from radon in air",
        paras: [
          `Radon in water and radon in air are related but distinct. ${link(S.nhdesRadionuclides, "NHDES")} explains that the larger health risk comes from radon in indoor air, where it is the well-known lung-cancer risk, and that radon dissolved in well water escapes into the air when you shower, do laundry, or run the tap, adding to that indoor air level.`,
          `NHDES recommends treating well water when radon is at or above 10,000 picocuries per liter, and treatment may be advisable between 2,000 and 10,000 picocuries per liter when indoor air radon is also elevated. Because the two are connected, testing both the water and the indoor air gives the complete picture.`,
        ],
      },
      {
        id: "testing",
        heading: "How uranium and radon are tested",
        paras: [
          `Both are found through a radiological test, which a ${link(S.nhdesTesting, "standard NHDES testing schedule")} suggests every three to five years. A single laboratory analysis can report arsenic, uranium, and radon together, which is why a contractor often recommends testing for all of the bedrock contaminants at once.`,
        ],
      },
      {
        id: "treatment",
        heading: "How they are treated",
        paras: [
          "The treatment methods differ because the contaminants behave differently. Uranium, which is charged in water, is removed by anion exchange or by reverse osmosis at the tap. Radon, a dissolved gas, is removed by whole-house aeration, which NHDES considers the preferred method, or by granular activated carbon at lower levels.",
          "A licensed local contractor matches the method to your levels and household, and because uranium and radon so often come with arsenic, a single system can sometimes address more than one.",
        ],
      },
      {
        id: "numbers",
        heading: "What the numbers mean",
        paras: [
          `For uranium, the federal limit is 30 micrograms per liter, and a result is straightforward to read against it. For radon in water, ${link(S.nhdesRadionuclides, "NHDES")} points to 10,000 picocuries per liter as the level at which it recommends treating the water, with the 2,000 to 10,000 range worth treating when indoor air radon is also elevated.`,
          "As with arsenic, these are long-term exposure benchmarks rather than emergency thresholds. A number above them is a reason to plan treatment, not to panic, and both contaminants are very treatable once measured.",
        ],
      },
      {
        id: "treating",
        heading: "Treating uranium and radon, step by step",
        paras: [
          "Uranium is removed by anion exchange, which captures it on a resin bed, or by reverse osmosis at the tap. Because the captured uranium concentrates radioactivity over time, a licensed contractor manages replacement and disposal of the media correctly rather than leaving it to build up in the home.",
          "Radon is a dissolved gas, so it is handled differently. Whole-house aeration, which NHDES considers the preferred method, strips radon from the water and vents it outside before it reaches your taps. Granular activated carbon can work at lower levels, but it concentrates radioactivity and needs careful placement and periodic media changes.",
        ],
      },
      {
        id: "test-anyway",
        heading: "Worth testing even if you treated for arsenic",
        paras: [
          "Because uranium and radon come from the same bedrock as arsenic, it is a mistake to assume an arsenic system covers them. The treatment methods are different, and a home that handled its arsenic may still have untreated uranium or radon. A radiological test settles the question and lets a contractor design around the full set of contaminants.",
        ],
      },
    ],
    relatedServices: ["uranium-treatment", "radon-in-water-treatment", "reverse-osmosis-systems"],
    relatedGuides: ["arsenic-in-well-water-nh", "nh-well-water-contaminants"],
    sources: [S.usgsUranRadon, S.nhdesRadionuclides, S.epaRadionuclides, S.atsdrUranium, S.nhdesTesting],
  },

  "nh-well-water-contaminants": {
    slug: "nh-well-water-contaminants",
    title: "A New Hampshire Well Water Contaminants Overview",
    metaTitle: "New Hampshire Well Water Contaminants Overview",
    metaDescription:
      "A plain-language map of the common New Hampshire well water contaminants, what each one does, and which treatment addresses it. A sourced overview.",
    intro: [
      "If you are new to private-well ownership in New Hampshire, the list of things to test for can feel long. This overview is a plain-language map of the contaminants that actually matter here, what each one does, and which treatment addresses it, with links to go deeper on any of them.",
      `It is built from ${link(S.nhdesPrivate, "NHDES")} guidance. Private wells are not tested by any agency, so this is your starting point for deciding what to check.`,
    ],
    sections: [
      {
        id: "bedrock",
        heading: "The bedrock contaminants: arsenic, uranium, and radon",
        paras: [
          `These three come from New Hampshire's granite and metamorphic bedrock and are the headline concerns for bedrock wells. Arsenic is odorless and tasteless and is tied to a higher long-term cancer risk, which is why the state set a ${link(S.nhdesArsenicStd, "5 parts per billion standard")}. Uranium is a kidney concern, and radon is a radioactive gas that adds to indoor-air lung-cancer risk.`,
          "All three are invisible, all three are treatable, and all three should be on a New Hampshire well test.",
        ],
        list: [
          "Arsenic, treated with adsorptive media, anion exchange, or reverse osmosis",
          "Uranium, treated with anion exchange or reverse osmosis",
          "Radon in water, treated with aeration or granular activated carbon",
        ],
      },
      {
        id: "nuisance",
        heading: "The nuisance minerals: iron, manganese, and hardness",
        paras: [
          `Iron and manganese are not the same kind of health concern as arsenic, but they are very common in New Hampshire and cause the rust and black staining, metallic taste, and buildup that many well owners notice first. ${link(S.nhdesIronMn, "NHDES")} sets secondary standards of 0.3 milligrams per liter for iron and 0.05 for manganese, and oxidation-filtration is the usual treatment.`,
          `Hardness, the calcium and magnesium that leave scale, is a ${link(S.nhdesHardness, "common nuisance")} rather than a health risk, and a water softener addresses it where needed.`,
        ],
      },
      {
        id: "bacteria-nitrate",
        heading: "Bacteria and nitrate",
        paras: [
          `Bacteria and nitrate point to a different kind of issue, usually surface water or other contamination reaching the well rather than something from the bedrock. ${link(S.nhdesTesting, "NHDES")} recommends testing for both every year, more often than the bedrock contaminants, because they can change with seasons and weather.`,
        ],
      },
      {
        id: "what-to-do",
        heading: "What to test for and what to do next",
        paras: [
          `A ${link(S.nhdesTesting, "standard NHDES analysis")} every three to five years, with bacteria and nitrate yearly and a radiological test for radon and uranium, covers the contaminants above. Once you have results, a licensed local contractor can explain what they mean and, where treatment makes sense, recommend and quote a system sized to your water.`,
        ],
      },
      {
        id: "standard-test",
        heading: "What a standard New Hampshire well test includes",
        paras: [
          `A ${link(S.nhdesTesting, "standard NHDES analysis")} bundles the common contaminants into one test: arsenic, bacteria, nitrate and nitrite, chloride, copper, fluoride, hardness, iron, lead, manganese, pH, and sodium. A separate radiological test adds radon, uranium, and gross alpha. Together these cover the contaminants that matter most on a New Hampshire bedrock well.`,
          "Ordering them together is efficient and gives a contractor the full picture needed to recommend treatment, rather than a single number read in isolation. It also establishes a baseline you can compare against at the next test.",
        ],
      },
      {
        id: "how-often",
        heading: "How often to test, and when to test sooner",
        paras: [
          "The baseline is a standard analysis every three to five years, with bacteria and nitrate every year because they can change more quickly. Beyond the schedule, it is worth testing after any change in taste, color, or odor, after work is done on the well, and when buying or selling a home.",
          "Because private wells are not monitored by anyone else, this schedule is the homeowner's safety net. Once results are in hand, a licensed local contractor can explain what they mean and turn them into a treatment plan where one is warranted.",
        ],
      },
      {
        id: "when-whole-house",
        heading: "When to consider a whole-house system",
        paras: [
          "Some of these contaminants call for whole-house treatment by their nature. Radon in water has to be treated at the point of entry, since it escapes into the air throughout the house, and iron and manganese staining affects every fixture and load of laundry.",
          "Arsenic and uranium, by contrast, are often handled at a single drinking-water tap unless levels are high or other contaminants are present. A licensed local contractor reads the full test and recommends point-of-use treatment, a whole-house system, or a combination, sized to your water and your home.",
        ],
      },
    ],
    relatedServices: [
      "arsenic-treatment",
      "uranium-treatment",
      "radon-in-water-treatment",
      "iron-manganese-treatment",
      "whole-house-water-treatment",
      "reverse-osmosis-systems",
    ],
    relatedGuides: ["arsenic-in-well-water-nh", "uranium-radon-well-water-nh"],
    sources: [S.nhdesPrivate, S.nhdesArsenicStd, S.nhdesIronMn, S.nhdesHardness, S.nhdesTesting, S.nhdesRadionuclides],
  },
};
