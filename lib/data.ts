type Photo = { src: string; alt: string; w: number; h: number };

export const company = {
  name: "COSBEL Ltd",
  phone: "+250 788 312 434", tel: "tel:+250788312434",
  email: "smackreime@gmail.com", mailto: "mailto:smackreime@gmail.com",
  tin: "122484737", // printed on the letterhead but kept off the public site by design
  location: "Kimironko, Gasabo, Kigali, Rwanda",
  // A missing site URL would silently point every canonical, sitemap entry and
  // schema @id at the wrong domain, so a production build must fail loudly instead.
  site: (() => {
    const raw = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
    if (raw) return raw;
    if (process.env.NODE_ENV === "production") {
      throw new Error("NEXT_PUBLIC_SITE_URL is not set. Set it in .env (e.g. NEXT_PUBLIC_SITE_URL=https://your-domain.com) and rebuild: canonical URLs, the sitemap and all structured data depend on it.");
    }
    return "http://localhost:3000";
  })(),
};
// Supplied reference photos. Swap for COSBEL's own photos before launch (same keys).
export const photos: Record<string, Photo> = {
  board: { src: "/images/electrical-distribution-board.jpg", w: 392, h: 510, alt: "Electrical distribution board with circuit breakers and neatly routed wiring" },
  tray: { src: "/images/cable-tray-installation.jpg", w: 669, h: 457, alt: "Steel cable trays carrying power cables along a building ceiling" },
  switchgear: { src: "/images/industrial-switchgear-panel.jpg", w: 387, h: 516, alt: "Industrial medium-voltage switchgear panels with protection relays" },
  control: { src: "/images/control-panel-terminals.jpg", w: 678, h: 452, alt: "Control panel circuit breakers and terminal blocks with colour-coded wiring" },
  transformer: { src: "/images/pole-mounted-transformer.jpg", w: 547, h: 365, alt: "Pole-mounted electrical transformer with insulators against a blue sky" },
  wiring: { src: "/images/panel-wiring-terminals.jpg", w: 547, h: 365, alt: "Close-up of blue and green wiring connected to electrical terminal blocks" },
};

// Only entries with confirmed: true are published. Set the rest to true once COSBEL Ltd confirms them.
export const services = [
  { slug: "industrial-electrical-services", title: "Industrial Electrical Services", tag: "Industrial", confirmed: true, photo: photos.switchgear,
    short: "Electrical engineering for factories and industrial sites.",
    body: "Electrical engineering for factories and industrial sites: power supply, distribution and equipment installation, planned around the way each facility operates.",
    seoTitle: "Industrial Electrical Services in Rwanda",
    seoDesc: "Industrial electrical services for factories, workshops and warehouses in Kigali and across Rwanda from COSBEL Ltd. Request a quote.",
    keywords: ["industrial electrical services Rwanda", "factory electrical Kigali", "industrial electrician Kigali"],
    applications: ["Factories and production sites", "Warehouses and workshops", "Power distribution equipment"] },
  { slug: "compact-substations-and-transformers", title: "Compact Substations & Transformer Installation", tag: "Substations", confirmed: true, photo: photos.switchgear,
    short: "Supply and installation of compact substations and transformers, including the full HV/LV chain.",
    body: "We supply and install compact substations and distribution transformers, covering the complete high-voltage to low-voltage chain: ring main units, breakers, protection and metering, commissioned and ready for your load.",
    seoTitle: "Compact Substation & Transformer Installation in Rwanda",
    seoDesc: "Compact substation and transformer installation in Kigali and across Rwanda, including ring main units, protection and metering. COSBEL Ltd.",
    keywords: ["compact substation Rwanda", "transformer installation Kigali", "transformer supplier Rwanda", "ring main unit installation Kigali"],
    applications: ["New factory power supplies", "HV/LV chain: RMU, breakers, protection, metering", "Transformer replacements and upgrades"] },
  { slug: "underground-cabling", title: "Underground Cabling", tag: "Cabling", confirmed: true, photo: photos.tray,
    short: "Underground power cables between substations, boards, generators and existing supply lines.",
    body: "We lay and terminate underground power cables that connect your substation, automatic transfer switches, main distribution boards, generators and existing supply lines, including links designed to support an existing line and keep power failures away.",
    seoTitle: "Underground Cable Installation in Kigali & Rwanda",
    seoDesc: "Underground power cable installation in Kigali and across Rwanda: substation, ATS, distribution board and generator connections by COSBEL Ltd.",
    keywords: ["underground cabling Rwanda", "underground electrical cable Kigali", "cable installation company Rwanda"],
    applications: ["Substation to distribution board links", "Generator and ATS connections", "Supply-line reinforcement"] },
  { slug: "ats-and-generator-systems", title: "ATS & Generator Systems", tag: "Backup power", confirmed: true, photo: photos.control,
    short: "Generator integration and transfer switches so backup power engages without a hitch.",
    body: "We connect generators to your main supply through automatic transfer switches and interlocked changeovers, designed so that two sources can never be connected together. We also design and manufacture our own manual ATS units, including installations that manage several generators.",
    seoTitle: "ATS & Generator Integration in Rwanda",
    seoDesc: "Automatic transfer switch installation and generator integration in Kigali and across Rwanda. COSBEL Ltd also designs and manufactures manual ATS units.",
    keywords: ["automatic transfer switch Rwanda", "generator installation Kigali", "ATS manufacturer Rwanda", "backup power for factory Rwanda"],
    applications: ["Automatic transfer switches (ATS)", "Interlocked changeovers", "Manual ATS design and manufacturing", "Multi-generator installations"] },
  { slug: "industrial-equipment-commissioning", title: "Industrial Equipment Installation & Commissioning", tag: "Commissioning", confirmed: true, photo: photos.board,
    short: "Installation and commissioning of industrial equipment with its own power infrastructure.",
    body: "We install and commission industrial equipment such as ovens and production machinery, including any dedicated sub-distribution boards they need, so the equipment is powered, tested and production-ready.",
    seoTitle: "Industrial Equipment Installation & Commissioning in Rwanda",
    seoDesc: "Installation and commissioning of industrial equipment in Kigali and across Rwanda, including dedicated sub-distribution boards. COSBEL Ltd.",
    keywords: ["industrial equipment installation Rwanda", "machine commissioning Kigali", "industrial oven installation Rwanda"],
    applications: ["Production machinery", "Industrial ovens and process equipment", "Dedicated sub-distribution boards"] },
  { slug: "power-distribution-design", title: "Power Distribution System Design", tag: "Design", confirmed: true, photo: photos.wiring,
    short: "Engineering design for how a facility is supplied from one or more sources, with generator backup.",
    body: "We design how your facility is supplied, including multi-source supplies with generator backup, breaker coordination, operating modes and the list of checks to confirm before construction, so your power system is engineered before it is built.",
    seoTitle: "Power Distribution System Design in Rwanda",
    seoDesc: "Power distribution system design in Kigali and across Rwanda: multi-source supplies, generator backup and breaker coordination by COSBEL Ltd.",
    keywords: ["power distribution design Rwanda", "electrical design engineer Kigali", "factory power system design Rwanda"],
    applications: ["Single- and multi-source supply designs", "Generator backup planning", "Pre-construction checks and confirmations"] },
  { slug: "transformer-inspection-and-testing", title: "Transformer Inspection & Testing", tag: "Inspection", confirmed: true, photo: photos.transformer,
    short: "Formal inspection reports on the condition of your transformers and electrical equipment.",
    body: "We inspect existing electrical equipment such as transformers and deliver formal condition reports, so you know the state of your assets and what to plan for.",
    seoTitle: "Transformer Inspection & Condition Reports in Rwanda",
    seoDesc: "Transformer inspection and formal condition reports in Kigali and across Rwanda from COSBEL Ltd. Book an inspection of your equipment.",
    keywords: ["transformer inspection Rwanda", "transformer testing Kigali", "electrical inspection report Rwanda"],
    applications: ["Distribution transformers", "Formal condition reports", "Periodic equipment inspections"] },
  { slug: "residential-electrical-services", title: "Residential Electrical Services", tag: "Residential", confirmed: true, photo: photos.board,
    short: "Safe, tidy electrical work for homes and households.",
    body: "Electrical services for households, from new installations to everyday electrical needs.",
    seoTitle: "Residential Electrical Installation in Kigali",
    seoDesc: "Residential electrical installation and services for homes in Kigali, Rwanda. COSBEL Ltd delivers safe, tidy household electrical work.",
    keywords: ["residential electrical installation Kigali", "house wiring Kigali", "home electrician Kigali"],
    applications: ["New homes and extensions", "Household wiring and fittings", "Residential upgrades"] },
  { slug: "commercial-electrical-installations", title: "Commercial Electrical Installations", tag: "Commercial", confirmed: true, photo: photos.tray,
    short: "Electrical installations for offices and business premises.",
    body: "Installations for offices and commercial buildings, delivered with clear communication.",
    seoTitle: "Commercial Electrical Installation in Kigali",
    seoDesc: "Electrical installations for offices, shops and commercial buildings in Kigali, Rwanda. Talk to COSBEL Ltd about your premises.",
    keywords: ["commercial electrical installation Kigali", "office electrical Kigali", "commercial electrician Rwanda"],
    applications: ["Offices", "Shops and business premises", "Commercial buildings"] },
  { slug: "installation-and-maintenance", title: "Electrical Installation and Maintenance", tag: "Maintenance", confirmed: true, photo: photos.wiring,
    short: "Installation and ongoing maintenance of electrical systems.",
    body: "Installation of electrical systems and maintenance to keep them working safely.",
    seoTitle: "Electrical Maintenance Services in Kigali",
    seoDesc: "Electrical installation and maintenance in Kigali, Rwanda: distribution boards, repairs and routine upkeep from COSBEL Ltd.",
    keywords: ["electrical maintenance Kigali", "electrical installation Rwanda", "electrician Kigali"],
    applications: ["New installations", "Routine maintenance", "Repairs and replacements"] },
  { slug: "electrical-troubleshooting", title: "Electrical Troubleshooting", tag: "Troubleshooting", confirmed: false, photo: photos.control,
    short: "Finding and fixing electrical faults.", body: "", seoTitle: "", seoDesc: "", keywords: [] as string[], applications: [] as string[] },
].filter((s) => s.confirmed);

export const industries = [
  { title: "Factories and industrial facilities", icon: "factory" },
  { title: "Homes and residential properties", icon: "home" },
  { title: "Offices and commercial buildings", icon: "building" },
  { title: "Business premises and other electrical projects", icon: "bolt" },
];
export const values = [
  ["Electrical safety", "Safety is the first consideration on every job."],
  ["Quality workmanship", "Work is done carefully and checked before handover."],
  ["Flexible solutions", "Different customers need different electrical solutions."],
  ["Clear communication", "You know what is planned, what it involves and who to call."],
  ["Right for the setting", "Approach adapted to industrial, residential and commercial sites."],
];

// FAQ content shown on the About page and used for FAQPage structured data (AEO).
export const faqs: [string, string][] = [
  ["Where does COSBEL Ltd work?", "We are based in Kimironko, Gasabo, Kigali and take on projects across Rwanda."],
  ["Do you work on homes as well as factories?", "Yes. Our core work is industrial and commercial, but we also carry out residential electrical installation and maintenance."],
  ["Can you install a compact substation or transformer?", "Yes. We supply and install compact substations and distribution transformers, including the high-voltage to low-voltage chain: ring main units, breakers, protection and metering."],
  ["Can you connect a generator to our existing supply?", "Yes. We integrate generators through automatic transfer switches and interlocked changeovers, designed so that two sources are never connected together."],
  ["Do you manufacture ATS units?", "We design and manufacture our own manual ATS units, including installations that manage several generators."],
  ["Can you inspect our transformer or electrical equipment?", "Yes. We inspect existing equipment such as transformers and deliver formal condition reports."],
  ["Do you provide documentation when a job is finished?", "Every project is handed over with completion certificates and inspection reports on COSBEL-branded documents."],
  ["How do we get a quote?", "Call +250 788 312 434, email us, or send the request form on our contact page and we will come back to you."],
];

// Case studies written so no client is named and no unconfirmed rating is published.
// Name clients and add project photos only once each client agrees.
export const projects: {
  title: string;
  location: string;
  category: string;
  scope: string;
  description: string;
  completion: string;
  metrics: { value: string; label: string }[];
  images: { src: string; alt: string }[];
}[] = [
  {
    title: "Compact Substation & Factory Power Upgrade",
    location: "Gasabo, Rwanda",
    category: "Industrial",
    scope: "Compact substation, underground cabling, oven commissioning and ATS manufacturing",
    description: "Installed a compact substation and laid underground cables from the substation to the automatic transfer switch, the main distribution board, the generators and the existing supply line. Installed and commissioned an industrial oven with its own sub-distribution board, and manufactured a manual ATS to manage three generators. Handed over with a formal completion certificate.",
    completion: "100% complete",
    metrics: [
      { value: "1", label: "Compact substation" },
      { value: "3", label: "Generators managed" },
      { value: "100%", label: "Completed" },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80", alt: "Compact substation installation at an industrial site" },
      { src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80", alt: "Underground power cables and switchgear in a factory" },
      { src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80", alt: "Industrial control panel and transfer switch wiring" },
    ],
  },
  {
    title: "Factory Power Distribution Design",
    location: "Kigali, Rwanda",
    category: "Design",
    scope: "Multi-source supply design with generator backup",
    description: "Engineered how a factory is supplied from more than one source, each with generator backup, including the operating modes for every failure scenario and the list of checks to confirm before construction. Delivered as a design package the build was then carried out against.",
    completion: "Design delivered",
    metrics: [
      { value: "2", label: "Independent supplies" },
      { value: "4", label: "Operating modes" },
      { value: "100%", label: "Documented" },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80", alt: "Power distribution system design for a factory" },
      { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80", alt: "Electrical engineering drawings and switchgear" },
      { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80", alt: "Power system design documentation" },
    ],
  },
  {
    title: "Transformer Inspection & Condition Report",
    location: "Kigali, Rwanda",
    category: "Inspection",
    scope: "Formal inspection of a distribution transformer at a warehouse facility",
    description: "Carried out a multi-day inspection of a distribution transformer serving a warehouse facility and delivered a formal condition report on COSBEL-branded documentation, covering the observed condition of the unit and what the operator should plan for.",
    completion: "Report issued",
    metrics: [
      { value: "1", label: "Transformer assessed" },
      { value: "1", label: "Formal report" },
      { value: "100%", label: "Documented" },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80", alt: "Distribution transformer inspection" },
      { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80", alt: "Electrical equipment inspection at an industrial site" },
      { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80", alt: "Engineer inspecting electrical equipment" },
    ],
  },
];
