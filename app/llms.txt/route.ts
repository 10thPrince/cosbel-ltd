import { company, services, faqs } from "@/lib/data";
import { abs } from "@/lib/seo";

// llms.txt (https://llmstxt.org/): a curated markdown overview for AI agents and
// answer engines. Regenerated from lib/data.ts so it stays in sync with the site.
export const dynamic = "force-static";
export function GET() {
  const md = [
    `# ${company.name}`,
    "",
    `> ${company.name} is an electrical engineering company based in Kimironko, Gasabo, Kigali, Rwanda. We design, install, manufacture and commission power-supply and power-distribution systems for factories and industrial sites, and we inspect existing electrical equipment such as transformers. We also carry out residential and commercial electrical work.`,
    "",
    "## Pages",
    "",
    `- [Home](${abs("/")}): overview of the company and its main services.`,
    `- [Services](${abs("/services")}): the full list of electrical engineering services.`,
    ...services.map((s) => `- [${s.title}](${abs(`/services/${s.slug}`)}): ${s.short}`),
    `- [About](${abs("/about")}): who we are, how we work, and answers to common questions.`,
    `- [Projects](${abs("/projects")}): selected projects across design, installation, commissioning and inspection.`,
    `- [Contact](${abs("/contact")}): phone ${company.phone}, email, address and the quote-request form.`,
    "",
    "## Frequently asked questions",
    "",
    ...faqs.map(([q, a]) => `- [${q}](${abs("/about")}): ${a}`),
    "",
  ].join("\n");
  return new Response(md, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
