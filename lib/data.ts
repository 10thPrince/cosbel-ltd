export const company = {
  name: "COSBEL Ltd",
  phone: "+250 788 312 434", tel: "tel:+250788312434",
  email: "smackreime@gmail.com", mailto: "mailto:smackreime@gmail.com",
  tin: "122484737", location: "Kimironko, Gasabo, Kigali, Rwanda",
  site: (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, ""),
};

// Only entries with confirmed: true are published. Set the rest to true once COSBEL Ltd confirms them.
export const services = [
  { slug: "industrial-electrical-services", title: "Industrial Electrical Services", confirmed: true,
    image: "/images/electrical-5.jpg", alt: "Electrical switchgear cabinets with wiring",
    short: "Electrical work for factories and industrial facilities.",
    body: "Electrical support for industrial sites, planned around the way each facility operates.",
    seoTitle: "Industrial Electrical Services in Rwanda",
    seoDesc: "Industrial electrical services for factories, workshops and warehouses in Kigali and across Rwanda from COSBEL Ltd. Request a quote.",
    keywords: ["industrial electrical services Rwanda", "factory electrical Kigali", "industrial electrician Kigali"],
    applications: ["Factories and production sites", "Warehouses and workshops", "Power distribution equipment"] },
  { slug: "residential-electrical-services", title: "Residential Electrical Services", confirmed: true,
    image: "/images/electrical-1.jpg", alt: "Electrical distribution board with circuit breakers",
    short: "Safe, tidy electrical work for homes and households.",
    body: "Electrical services for households, from new installations to everyday electrical needs.",
    seoTitle: "Residential Electrical Installation in Kigali",
    seoDesc: "Residential electrical installation and services for homes in Kigali, Rwanda. COSBEL Ltd delivers safe, tidy household electrical work.",
    keywords: ["residential electrical installation Kigali", "house wiring Kigali", "home electrician Kigali"],
    applications: ["New homes and extensions", "Household wiring and fittings", "Residential upgrades"] },
  { slug: "commercial-electrical-installations", title: "Commercial Electrical Installations", confirmed: true,
    image: "/images/electrical-4.jpg", alt: "Electrical cables routed through a commercial ceiling",
    short: "Electrical installations for offices and business premises.",
    body: "Installations for offices and commercial buildings, delivered with clear communication.",
    seoTitle: "Commercial Electrical Installation in Kigali",
    seoDesc: "Electrical installations for offices, shops and commercial buildings in Kigali, Rwanda. Talk to COSBEL Ltd about your premises.",
    keywords: ["commercial electrical installation Kigali", "office electrical Kigali", "commercial electrician Rwanda"],
    applications: ["Offices", "Shops and business premises", "Commercial buildings"] },
  { slug: "installation-and-maintenance", title: "Electrical Installation and Maintenance", confirmed: true,
    image: "/images/electrical-2.jpg", alt: "Wiring connected to an electrical distribution board",
    short: "Installation and ongoing maintenance of electrical systems.",
    body: "Installation of electrical systems and maintenance to keep them working safely.",
    seoTitle: "Electrical Installation & Maintenance in Kigali",
    seoDesc: "Electrical installation and maintenance in Kigali, Rwanda: distribution boards, repairs and routine upkeep from COSBEL Ltd.",
    keywords: ["electrical maintenance Kigali", "electrical installation Rwanda", "electrician Kigali"],
    applications: ["New installations", "Routine maintenance", "Repairs and replacements"] },
  { slug: "electrical-troubleshooting", title: "Electrical Troubleshooting", confirmed: false,
    image: "/images/electrical-2.jpg", alt: "", short: "Finding and fixing electrical faults.", body: "",
    seoTitle: "", seoDesc: "", keywords: [] as string[], applications: [] as string[] },
  { slug: "inspection-and-testing", title: "Electrical Inspection and Testing", confirmed: false,
    image: "/images/electrical-1.jpg", alt: "", short: "Inspection and testing of electrical installations.", body: "",
    seoTitle: "", seoDesc: "", keywords: [] as string[], applications: [] as string[] },
].filter((s) => s.confirmed);

export const industries = [
  { title: "Factories and industrial facilities", image: "/images/electrical-5.jpg", alt: "Electrical switchgear cabinets in an industrial facility" },
  { title: "Homes and residential properties", image: "/images/electrical-1.jpg", alt: "Electrical distribution board with circuit breakers" },
  { title: "Offices and commercial buildings", image: "/images/electrical-4.jpg", alt: "Electrical cable trays installed in a commercial building" },
  { title: "Business premises and other electrical projects", image: "/images/electrical-3.jpg", alt: "Electrical transformer at a power substation" },
];
export const values = [
  ["Electrical safety", "Safety is the first consideration on every job."],
  ["Quality workmanship", "Work is done carefully and checked before handover."],
  ["Flexible solutions", "Different customers need different electrical solutions."],
  ["Clear communication", "You know what is planned, what it involves and who to call."],
  ["Right for the setting", "Approach adapted to industrial, residential and commercial sites."],
];
// Add only real projects: { title, location, category, scope, description }
export const projects: { title: string; location: string; category: string; scope: string; description: string }[] = [];
