import type { MetadataRoute } from "next";
import { company, services, projects } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [["", 1], ["/services", 0.9], ...services.map((s) => [`/services/${s.slug}`, 0.8] as [string, number]), ["/about", 0.6], ["/contact", 0.8]];
  if (projects.length) pages.push(["/projects", 0.6]);
  return pages.map(([p, priority]) => ({ url: company.site + p, lastModified: new Date(), changeFrequency: "monthly", priority }));
}
