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

// Gallery grouped by the work shown. Section descriptions come from the
// company's project documentation; each photo also carries its own detail line.
export type GalleryItem = { src: string; alt: string };
export type GallerySection = { title: string; desc: string; items: GalleryItem[] };
export const gallerySections: GallerySection[] = [
  {
    title: "Power distribution systems",
    desc: "We provide power distribution systems for big buildings, factories and low-voltage distribution lines, including capacitor bank installations to avoid reactive energy penalties.",
    items: [
      { src: "/images/site/dist-board-din-breakers.jpg", alt: "Distribution board with DIN-rail breakers and protection devices for a building supply" },
      { src: "/images/site/dist-panel-busbar-insulators.jpg", alt: "Low-voltage panel with busbar insulators and a full bank of circuit breakers" },
      { src: "/images/site/dist-panel-metering-controls.jpg", alt: "Distribution panel with metering, control instruments and moulded-case breakers" },
      { src: "/images/site/dist-panel-mccb-wiring.jpg", alt: "COSBEL technician wiring moulded-case circuit breakers in a power distribution panel" },
      { src: "/images/site/dist-panel-breaker-wiring.jpg", alt: "Circuit breakers with colour-coded phase and earth wiring in a distribution panel" },
      { src: "/images/site/control-panel-breakers.jpg", alt: "Industrial control panel with circuit breakers and colour-coded wiring" },
      { src: "/images/site/distribution-board-breakers.jpg", alt: "Electrical distribution board with circuit breakers and labelled wiring" },
      { src: "/images/site/residential.jpg", alt: "Residential property served by a COSBEL Ltd electrical installation" },
    ],
  },
  {
    title: "Substation structure and equipment mounting",
    desc: "Substation structure and equipment mounting (DS, ES, CB, SA, CT) and earthing system.",
    items: [
      { src: "/images/site/hvsub-equipment-on-structure.jpg", alt: "High-voltage disconnect and earthing switches mounted on steel support structures" },
      { src: "/images/site/hvsub-crew-mounting-equipment.jpg", alt: "COSBEL crew mounting high-voltage switchgear equipment on steel structures" },
      { src: "/images/site/hvsub-structures-under-construction.jpg", alt: "Rows of high-voltage equipment structures under construction at a substation site" },
      { src: "/images/site/hvsub-crane-lifting.jpg", alt: "Crane lifting high-voltage equipment into position during substation construction" },
      { src: "/images/site/hvsub-technician-at-height.jpg", alt: "Technician working at height on a high-voltage substation structure" },
      { src: "/images/site/hvsub-crew-install-equipment.jpg", alt: "COSBEL crew installing high-voltage equipment on a support structure" },
      { src: "/images/site/substation-under-construction.jpg", alt: "Substation structures and power equipment under construction" },
      { src: "/images/site/substation-yard-structures.jpg", alt: "Substation yard with equipment mounted on steel support structures" },
      { src: "/images/site/substation-steel-structures.jpg", alt: "Steel support structures ready to carry substation equipment" },
      { src: "/images/site/ring-main-unit.jpg", alt: "Ring main unit (RMU) installed at an industrial substation" },
      { src: "/images/site/rmu-interior-busbars.jpg", alt: "Open ring main unit cabinet showing busbars and cable terminations" },
      { src: "/images/site/compac-worker.jpg", alt: "COSBEL worker at a compact substation enclosure on site" },
      { src: "/images/site/compact.jpg", alt: "Compact substation enclosure opened to show metering and breaker compartments" },
      { src: "/images/site/compact-substation1.jpg", alt: "Compact substation low-voltage compartment with breakers and controls" },
      { src: "/images/site/crew3.jpg", alt: "Compact substation interior with metering and distribution breakers" },
      { src: "/images/site/crew2.jpg", alt: "Low-voltage switchgear cabinet with busbars and breakers wired by COSBEL Ltd" },
      { src: "/images/site/substation.jpg", alt: "Compact substation cabinet open showing switchgear busbars" },
    ],
  },
  {
    title: "Earthing system interconnection",
    desc: "With our clients in projects we inter-connect the earthing system cables for substations, buildings and factories.",
    items: [
      { src: "/images/site/earth-facility-interconnection.jpg", alt: "Industrial production facility where the earthing system was interconnected" },
      { src: "/images/site/earth-buried-conductor-trench.jpg", alt: "Bare copper earth conductor laid in a rocky excavation trench" },
      { src: "/images/site/earth-conductor-branch.jpg", alt: "Copper earthing conductor branch joint buried in prepared soil" },
      { src: "/images/site/earth-grid-joint.jpg", alt: "Copper earth grid conductor joint in an excavated pit" },
      { src: "/images/site/earth-trench-hv-structures.jpg", alt: "Concrete cable trench channels at a substation site, with high-voltage structures beyond" },
      { src: "/images/site/earth-technician-bending-conductor.jpg", alt: "COSBEL technician forming copper earthing conductor in a trench" },
      { src: "/images/site/earth-trench-building.jpg", alt: "Earthing conductor routed through a concrete building structure trench" },
      { src: "/images/site/earthing-pit-copper.jpg", alt: "Copper earth conductor in an inspection pit during earthing system installation" },
      { src: "/images/site/earthing-rod-joint.jpg", alt: "Copper earthing rod joint prepared in an earth pit" },
      { src: "/images/site/earthing-joint-pit.jpg", alt: "Earth conductor joint in a pit as part of the substation earthing system" },
      { src: "/images/site/earthing-cable-joint.jpg", alt: "Copper cable joint in an earthing pit connecting the site earth grid" },
    ],
  },
  {
    title: "Automatic transfer switch (ATS) manufacture",
    desc: "Automatic changeover switch (ATS) manufacture, designed and built in-house.",
    items: [
      { src: "/images/site/ats-contactors-enclosure.jpg", alt: "Hand-wired ATS enclosure with contactors and control wiring built by COSBEL Ltd" },
      { src: "/images/site/ats-mechanism-backplate.jpg", alt: "ATS changeover mechanism assembled on its backplate before enclosure" },
      { src: "/images/site/ats-technician-cabinet.jpg", alt: "COSBEL technician working on an ATS cabinet on site" },
    ],
  },
  {
    title: "Generator installation and automation",
    desc: "Generator installation and automation.",
    items: [
      { src: "/images/site/gen-crew-connection.jpg", alt: "COSBEL crew connecting a generator installation on site" },
      { src: "/images/site/gen-plant-room-install.jpg", alt: "Large generator set installed in a plant room" },
      { src: "/images/site/gen-technician-large-set.jpg", alt: "COSBEL technician beside a large generator set at the installation" },
      { src: "/images/site/gen-outdoor-installation.jpg", alt: "Generator sets installed outside a commercial building" },
      { src: "/images/site/generator.jpg", alt: "Generator set installed in an equipment room" },
      { src: "/images/site/gen2.jpg", alt: "COSBEL technician working inside a generator canopy during installation" },
    ],
  },
  {
    title: "Underground cable laying and termination",
    desc: "Underground cable laying and termination.",
    items: [
      { src: "/images/site/cable-termination-prep.jpg", alt: "Multi-core power cable cores prepared for termination" },
      { src: "/images/site/cable-termination-panel.jpg", alt: "COSBEL technician terminating power cables at a distribution panel" },
      { src: "/images/site/cable-wall-entry-termination.jpg", alt: "Underground cables terminating through a building wall entry" },
      { src: "/images/site/crew-laying-cable-trench.jpg", alt: "COSBEL technicians laying power cable in an excavated trench" },
      { src: "/images/site/cable-pulling-trench.jpg", alt: "Technician pulling power cable through a deep trench" },
      { src: "/images/site/underground-cable-trench.jpg", alt: "Underground power cable laid in a prepared trench" },
      { src: "/images/site/cable-trench-channels.jpg", alt: "Concrete cable trench channels at a substation site" },
      { src: "/images/site/cable-trench-structures.jpg", alt: "Cable trench running between steel structures at a substation" },
      { src: "/images/site/cableling.jpg", alt: "COSBEL technician terminating high-voltage cables at an equipment wall" },
    ],
  },
  {
    title: "Air circuit breaker functionality tests",
    desc: "Air circuit breaker (ACB) functionality testing.",
    items: [
      { src: "/images/site/acb-mechanism-test.jpg", alt: "Air circuit breaker mechanism under functionality test" },
      { src: "/images/site/acb-test-wiring.jpg", alt: "Air circuit breaker wired for a functionality test run" },
      { src: "/images/site/acb-test-setup.jpg", alt: "Air circuit breaker test setup prepared on a workbench" },
    ],
  },
  {
    title: "Battery backup installation and maintenance",
    desc: "Battery backup installation and maintenance.",
    items: [
      { src: "/images/site/batt-bank-rack.jpg", alt: "Battery backup bank installed on storage racks" },
      { src: "/images/site/batt-bank-rows.jpg", alt: "Rows of backup batteries with cabling and protection devices" },
    ],
  },
  {
    title: "Transformer installation, maintenance, oil testing and regeneration",
    desc: "Transformer installation, maintenance, oil testing and regeneration.",
    items: [
      { src: "/images/site/tx-oil-regeneration.jpg", alt: "Oil regeneration machine connected to a distribution transformer" },
      { src: "/images/site/tx-oil-processing.jpg", alt: "Transformer oil processing equipment connected for maintenance" },
      { src: "/images/site/tx-oil-piping.jpg", alt: "Transformer oil piping and valves during maintenance work" },
      { src: "/images/site/tx-radiator-closeup.jpg", alt: "Distribution transformer radiator and tank during service" },
      { src: "/images/site/tx-lv-busbars.jpg", alt: "Colour-coded low-voltage busbars above a distribution transformer" },
      { src: "/images/site/tx-indoor-installation.jpg", alt: "Indoor distribution transformer with high-voltage connections" },
      { src: "/images/site/transformer-rmu-plinth.jpg", alt: "Transformer and ring main unit mounted on a concrete plinth" },
      { src: "/images/site/transformer-hv-bushings.jpg", alt: "Distribution transformer with high-voltage bushings on a steel structure" },
      { src: "/images/site/transformer-hv-connection-work.jpg", alt: "Technicians making high-voltage connections on a transformer" },
      { src: "/images/site/crew-scaffold-transformer.jpg", alt: "COSBEL crew working from scaffolding on transformer installation" },
      { src: "/images/site/hv-bushing-connection-work.jpg", alt: "Technician connecting a high-voltage bushing on a transformer" },
      { src: "/images/site/crew-transformer-top.jpg", alt: "COSBEL technicians working on top of a transformer unit" },
    ],
  },
  {
    title: "Industrial equipment installation and commissioning",
    desc: "Installation and commissioning of industrial equipment, such as ovens, with their own sub-distribution boards.",
    items: [
      { src: "/images/site/oven-installation.jpg", alt: "Sub-distribution boards installed for industrial equipment commissioning" },
      { src: "/images/site/oven2.jpg", alt: "Industrial oven with insulated element terminals during commissioning" },
      { src: "/images/site/industrial.jpg", alt: "COSBEL technician connecting heating circuits on an industrial oven line" },
      { src: "/images/site/oven-switers.jpg", alt: "Technician terminating oven control circuits on site" },
      { src: "/images/site/baking1.jpg", alt: "COSBEL technician working on baking equipment during installation" },
      { src: "/images/site/baking2.jpg", alt: "Baking line equipment being set up by a COSBEL technician" },
    ],
  },
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
      { value: "100%", label: "Completed" }
    ],
    images: [
      { src: "/images/site/compac-worker.jpg", alt: "A Compac substation being Installed to an Industry by a COSBEL Ltd Crew" },
      { src: "/images/site/crew2.jpg", alt: "COSBEL Ltd technicians installing the power change over" },
      { src: "/images/site/crew3.jpg", alt: "COSBEL Ltd technicians intalling the baking industries' oven" }
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
      { value: "100%", label: "Documented" }
    ],
    images: [
      { src: "/images/site/crew-transformer-top.jpg", alt: "COSBEL Ltd technicians working on top of a transformer unit" },
      { src: "/images/site/substation-steel-structures.jpg", alt: "Engineer inspecting electrical equipment" },
      { src: "/images/site/cable-trench-structures.jpg", alt: "Power system design documentation" }
    ],
  },
  
];
