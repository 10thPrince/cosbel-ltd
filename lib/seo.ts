import type { Metadata } from "next";
import { company, services, photos } from "./data";
export const abs = (p: string) => company.site + p;
export function pageMeta(o: { title: string; description: string; path: string; keywords?: string[]; noindex?: boolean; image?: { src: string; alt: string } }): Metadata {
  const full = `${o.title} | COSBEL Ltd`;
  const img = o.image || { src: "/opengraph-image", alt: "COSBEL Ltd: electrical services in Kigali, Rwanda" };
  const images = [{ url: img.src, alt: img.alt }];
  return {
    title: o.title, description: o.description, keywords: o.keywords,
    alternates: { canonical: o.path },
    robots: o.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { type: "website", siteName: "COSBEL Ltd", locale: "en_RW", url: o.path, title: full, description: o.description, images },
    twitter: { card: "summary_large_image", title: full, description: o.description, images: [img.src] },
  };
}
export const bizId = () => abs("/#business");
export const business = () => ({
  "@context": "https://schema.org", "@type": ["Electrician", "LocalBusiness"], "@id": bizId(),
  name: company.name, url: company.site, logo: abs("/icon.svg"),
  image: [photos.switchgear, photos.board, photos.tray].map((p) => abs(p.src)),
  description: "Electrical installation and maintenance for industrial, residential and commercial customers in Kigali, Rwanda.",
  telephone: "+250788312434", email: company.email, taxID: company.tin,
  address: { "@type": "PostalAddress", addressLocality: "Kimironko, Gasabo", addressRegion: "Kigali", addressCountry: "RW" },
  areaServed: [{ "@type": "City", name: "Kigali" }, { "@type": "Country", name: "Rwanda" }],
  contactPoint: { "@type": "ContactPoint", telephone: "+250788312434", email: company.email, contactType: "customer service", areaServed: "RW", availableLanguage: ["en", "rw"] },
  makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, url: abs(`/services/${s.slug}`) } })),
});
export const breadcrumbLd = (trail: [string, string][]) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
});
