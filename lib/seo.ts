import type { Metadata } from "next";
import { company, services } from "./data";
export const abs = (p: string) => company.site + p;
export function pageMeta(o: { title: string; description: string; path: string; keywords?: string[]; noindex?: boolean }): Metadata {
  const full = `${o.title} | COSBEL Ltd`;
  return {
    title: o.title, description: o.description, keywords: o.keywords,
    alternates: { canonical: o.path },
    robots: o.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { type: "website", siteName: "COSBEL Ltd", locale: "en_RW", url: o.path, title: full, description: o.description },
    twitter: { card: "summary_large_image", title: full, description: o.description },
  };
}
export const bizId = () => abs("/#business");
export const business = () => ({
  "@context": "https://schema.org", "@type": ["Electrician", "LocalBusiness"], "@id": bizId(),
  name: company.name, url: company.site, image: abs("/opengraph-image"), telephone: "+250788312434", email: company.email, taxID: company.tin,
  address: { "@type": "PostalAddress", addressLocality: "Kimironko, Gasabo", addressRegion: "Kigali", addressCountry: "RW" },
  areaServed: [{ "@type": "City", name: "Kigali" }, { "@type": "Country", name: "Rwanda" }],
  makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, url: abs(`/services/${s.slug}`) } })),
});
export const breadcrumbLd = (trail: [string, string][]) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
});
