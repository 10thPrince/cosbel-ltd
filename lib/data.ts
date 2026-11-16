type Photo = { src: string; alt: string; w: number; h: number };

const FALLBACK_SITE_URL = "https://cosbel-ltd.vercel.app";

export const company = {
  name: "COSBEL Ltd",
  phone: "+250 788 312 434", tel: "tel:+250788312434",
  email: "smackreime@gmail.com", mailto: "mailto:smackreime@gmail.com",
  tin: "122484737", // printed on the letterhead but kept off the public site by design
  location: "Kigali, Rwanda",
  // A missing site URL would silently point every canonical, sitemap entry and
  // schema @id at the wrong domain. In dev we fall back to localhost; on Vercel
  // previews the Production-scoped env var isn't available, so fall back to the
  // live domain with a warning rather than failing the build.
  site: (() => {
    const raw = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
    if (raw) return raw;
    if (process.env.NODE_ENV !== "production") return "http://localhost:3000";
    console.warn("NEXT_PUBLIC_SITE_URL is not set; falling back to " + FALLBACK_SITE_URL + ". Set it in Vercel (all environments) so canonical URLs, the sitemap and structured data use the real domain.");
    return FALLBACK_SITE_URL;
  })(),
};
// Real COSBEL site photos (client's Drive, GPS data stripped, optimized for web).
export const photos: Record<string, Photo> = {
  board: { src: "/images/site/distribution-board-breakers.jpg", w: 1600, h: 1200, alt: "COSBEL Ltd electrical distribution board with circuit breakers and neatly routed wiring" },
  tray: { src: "/images/site/underground-cable-trench.jpg", w: 1200, h: 1600, alt: "Underground power cable laid in a prepared trench at a COSBEL Ltd work site" },
  switchgear: { src: "/images/site/ring-main-unit.jpg", w: 1200, h: 1600, alt: "Ring main unit installed at an industrial substation in Rwanda" },
  powerSupply: { src: "/images/site/industrial.jpg.jpeg", w: 1200, h: 1600, alt: "Ring main unit installed at an industrial substation in Rwanda" },
  control: { src: "/images/site/control-panel-breakers.jpg", w: 1200, h: 1600, alt: "Industrial control panel with circuit breakers and colour-coded wiring wired by COSBEL Ltd" },
  transformer: { src: "/images/site/transformer-hv-bushings.jpg", w: 1200, h: 1600, alt: "Distribution transformer with high-voltage bushings installed on a steel structure" },
  compac: { src: "/images/site/compact-substation1.jpg", w: 1200, h: 1600, alt: "Distribution transformer with high-voltage bushings installed on a steel structure" },
  compacWorker: { src: "/images/site/compac-worker.jpg", w: 1200, h: 1600, alt: "Distribution transformer with high-voltage bushings installed on a steel structure" },
  residential: { src: "/images/site/residential.jpg", w: 1200, h: 1600, alt: "Electrical Maintenance at a Resident" },
  wiring: { src: "/images/site/cable-trench-structures.jpg", w: 1200, h: 1600, alt: "Cable trench between steel structures at a substation construction site" },
  substation: { src: "/images/site/substation-under-construction.jpg", w: 1600, h: 1200, alt: "Compact substation under construction with transformers and high-voltage structures" },
  yard: { src: "/images/site/substation-yard-structures.jpg", w: 1200, h: 1600, alt: "Substation yard with power equipment mounted on steel structures" },
  rmu: { src: "/images/site/rmu-interior-busbars.jpg", w: 1600, h: 1200, alt: "Open ring main unit cabinet showing busbars and cable terminations" },
  crew: { src: "/images/site/crew-laying-cable-trench.jpg", w: 1200, h: 1600, alt: "COSBEL Ltd technicians laying power cable in an excavated trench" },
  crew2: { src: "/images/site/crew2.jpg", w: 1200, h: 1600, alt: "COSBEL Ltd technicians installing the power change over" },
  crew3: { src: "/images/site/crew3.jpg", w: 1200, h: 1600, alt: "COSBEL Ltd technicians intalling the baking industries' oven" },
  substation2: { src: "/images/site/substation.jpg", w: 1200, h: 1600, alt: "COSBEL Ltd technicians inspecting a substation" },
};

// General site photo gallery shown on the projects page (photos not used on other pages).
export const gallery: { src: string; alt: string }[] = [
  { src: "/images/site/substation-under-construction.jpg", alt: "Compact substation under construction with transformers and high-voltage structures" },
  { src: "/images/site/substation-yard-structures.jpg", alt: "Substation yard with power equipment mounted on steel structures" },
  { src: "/images/site/substation-steel-structures.jpg", alt: "High-voltage steel structures ready for equipment installation" },
  { src: "/images/site/oven2.jpg", alt: "COSBEL Ltd" },
  { src: "/images/site/ring-main-unit.jpg", alt: "Ring main unit installed at an industrial substation" },
  { src: "/images/site/rmu-interior-busbars.jpg", alt: "Open ring main unit cabinet showing busbars and cable terminations" },
  { src: "/images/site/gen2.jpg" , alt: "COSBEL Ltd" },
  { src: "/images/site/transformer-hv-bushings.jpg", alt: "Distribution transformer with high-voltage bushings" },
  { src: "/images/site/compac-worker.jpg", alt: "A Compac substation being Installed to an Industry by a COSBEL Ltd Crew" },
  { src: "/images/site/oven-installation.jpg", alt: "COSBEL Ltd" },
  { src: "/images/site/transformer-rmu-plinth.jpg", alt: "Transformer and ring main unit mounted on a concrete plinth" },
  { src: "/images/site/transformer-hv-connection-work.jpg", alt: "Technicians making high-voltage connections on a transformer" },
  { src: "/images/site/crew-scaffold-transformer.jpg", alt: "COSBEL Ltd crew working from scaffolding on transformer installation" },
  { src: "/images/site/hv-bushing-connection-work.jpg", alt: "Technician connecting high-voltage bushing on a transformer" },
  { src: "/images/site/generator.jpg", alt: "COSBEL Ltd" },
  { src: "/images/site/crew-transformer-top.jpg", alt: "COSBEL Ltd technicians working on top of a transformer unit" },
   { src: "/images/site/crew3.jpg", alt: "COSBEL Ltd technicians intalling the baking industries' oven" },
   { src: "/images/site/crew2.jpg", alt: "COSBEL Ltd technicians installing the power change over" },
  { src: "/images/site/control-panel-breakers.jpg", alt: "Industrial control panel with circuit breakers and colour-coded wiring" },
  { src: "/images/site/distribution-board-breakers.jpg", alt: "Electrical distribution board with circuit breakers and labelled wiring" },
  { src: "/images/site/crew-laying-cable-trench.jpg", alt: "COSBEL Ltd technicians laying power cable in an excavated trench" },
  { src: "/images/site/cable-pulling-trench.jpg", alt: "Technician pulling power cable through a deep trench" },
  { src: "/images/site/residential.jpg", alt: "COSBEL Ltd mainteining this Residential and did the electrical Installation" },
  { src: "/images/site/cable-trench-channels.jpg", alt: "Concrete cable trench channels at a substation site" },
  { src: "/images/site/earthing-rod-joint.jpg", alt: "Copper earthing rod joint prepared in an earth pit" },
  { src: "/images/site/cable-trench-structures.jpg", alt: "Cable trench running between steel structures at a substation" },
  { src: "/images/site/industrial.jpg.jpeg", alt: "COSBEL Ltd Electritian installing a power distribution system" },
  { src: "/images/site/compact-substation1.jpg", alt: "A Compac substation" },
  { src: "/images/site/substation.jpg", alt: "COSBEL Ltd technicians inspecting a substation" },
  { src: "/images/site/baking1.jpg", alt: "COSBEL Ltd" },
  { src: "/images/site/baking2.jpg", alt: "COSBEL Ltd" },
  { src: "/images/site/cableling.jpg", alt: "COSBEL Ltd" },
  { src: "/images/site/compact.jpg", alt: "COSBEL Ltd" },
  { src: "/images/site/oven-switers.jpg", alt: "COSBEL Ltd" },
];

// Only entries with confirmed: true are published. Set the rest to true once COSBEL Ltd confirms them.
export const services = [
  { slug: "industrial-electrical-services", title: "Industrial Electrical Services", tag: "Industrial", confirmed: true, photo: photos.powerSupply,
    short: "Electrical engineering for factories and industrial sites.",
    body: "Electrical engineering for factories and industrial sites: power supply, distribution and equipment installation, planned around the way each facility operates.",
    seoTitle: "Industrial Electrical Services in Rwanda",
    seoDesc: "Industrial electrical services for factories, workshops and warehouses in Kigali and across Rwanda from COSBEL Ltd. Request a quote.",
    keywords: ["industrial electrical services Rwanda", "factory electrical Kigali", "industrial electrician Kigali"],
    applications: ["Factories and production sites", "Warehouses and workshops", "Power distribution equipment"] },
  { slug: "compact-substations-and-transformers", title: "Compact Substations & Transformer Installation", tag: "Substations", confirmed: true, photo: photos.compac,
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
  { slug: "residential-electrical-services", title: "Residential Electrical Services", tag: "Residential", confirmed: true, photo: photos.residential,
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
      { src: "/images/site/compac-worker.jpg", alt: "A Compac substation being Installed to an Industry by a COSBEL Ltd Crew" },
      { src: "/images/site/crew2.jpg", alt: "COSBEL Ltd technicians installing the power change over" },
       { src: "/images/site/crew3.jpg", alt: "COSBEL Ltd technicians intalling the baking industries' oven" },
    ],
  },
  {
    title: "KIREHE Distribution Design",
    location: "Kigali, Rwanda",
    category: "Industrial",
    scope: "Multi-source supply design with generator backup",
    description: "Engineered how the power distribution is going to be able to supply enough power and efficiently.",
    completion: "Design delivered and built",
    metrics: [
      { value: "2", label: "Independent supplies" },
      { value: "4", label: "Operating modes" },
      { value: "100%", label: "Documented" },
    ],
    images: [
      { src: "/images/site/crew-transformer-top.jpg", alt: "COSBEL Ltd technicians working on top of a transformer unit" },
       { src: "/images/site/substation-steel-structures.jpg", alt: "Engineer inspecting electrical equipment" },
      { src: "/images/site/cable-trench-structures.jpg", alt: "Power system design documentation" },
    ],
  },
  ,
];
