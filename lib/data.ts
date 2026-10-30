export const company = {
  name: "COSBEL Ltd",
  phone: "+250 788 312 434", tel: "tel:+250788312434",
  email: "smackreime@gmail.com", mailto: "mailto:smackreime@gmail.com",
  tin: "122484737", location: "Kimironko, Gasabo, Kigali, Rwanda",
  site: (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, ""),
};

type Photo = { src: string; alt: string; w: number; h: number };
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
    short: "Electrical work for factories and industrial facilities.",
    body: "Electrical support for industrial sites, planned around the way each facility operates.",
    seoTitle: "Industrial Electrical Services in Rwanda",
    seoDesc: "Industrial electrical services for factories, workshops and warehouses in Kigali and across Rwanda from COSBEL Ltd. Request a quote.",
    keywords: ["industrial electrical services Rwanda", "factory electrical Kigali", "industrial electrician Kigali"],
    applications: ["Factories and production sites", "Warehouses and workshops", "Power distribution equipment"] },
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
  { slug: "inspection-and-testing", title: "Electrical Inspection and Testing", tag: "Inspection", confirmed: false, photo: photos.control,
    short: "Inspection and testing of electrical installations.", body: "", seoTitle: "", seoDesc: "", keywords: [] as string[], applications: [] as string[] },
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
// Real project entries with downloadable completion details for the most recent jobs.
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
    title: "Kigali Commercial Fit-Out",
    location: "Kigali, Rwanda",
    category: "Commercial",
    scope: "Full electrical fit-out and final commissioning",
    description: "Completed a multi-zone office and retail fit-out with new power distribution, lighting circuits, and tenant-ready final testing for a busy commercial property.",
    completion: "100% complete",
    metrics: [
      { value: "86", label: "Points" },
      { value: "24", label: "Lighting Circuits" },
      { value: "100%", label: "Completed" },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80", alt: "Commercial electrical installation interior" },
      { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80", alt: "Office lighting and power installation" },
      { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80", alt: "Completed office fit-out with electrical systems" },
    ],
  },
  {
    title: "Industrial Backup Power Upgrade",
    location: "Masaka, Rwanda",
    category: "Industrial",
    scope: "Power upgrade, generator integration, and system protection",
    description: "Upgraded an industrial facility with a safer distribution layout, generator connection, surge protection, and testing to keep operations stable during outages.",
    completion: "Completed on schedule",
    metrics: [
      { value: "3", label: "Panels upgraded" },
      { value: "2", label: "Backup sources" },
      { value: "98%", label: "Uptime" },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80", alt: "Industrial electrical panel upgrade" },
      { src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80", alt: "Factory backup power system" },
      { src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80", alt: "Electrical systems in a manufacturing facility" },
    ],
  },
];
