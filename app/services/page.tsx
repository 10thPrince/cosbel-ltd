import Cta from "@/components/Cta";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";
import { pageMeta, abs } from "@/lib/seo";
import { ui } from "@/lib/ui";
export const metadata = pageMeta({ title: "Electrical Services in Kigali & Rwanda", path: "/services",
  description: "Industrial, residential and commercial electrical installation and maintenance services from COSBEL Ltd in Kigali, Rwanda. Request a quote today.",
  keywords: ["electrical services Kigali", "industrial electrical services Rwanda", "electrical installation Kigali", "electrical maintenance Rwanda"] });
export default function Services() {
  return (<><JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: abs(`/services/${s.slug}`), name: s.title })) }} />
    <section  className={ui.pageHero}><div className={ui.wrap}><Breadcrumbs trail={[["Services", "/services"]]} /><h1 className="mb-3 text-4xl font-extrabold">Electrical Services in Kigali</h1><p className={ui.pageP}>What COSBEL Ltd can do for your facility, home or business.</p></div></section>
    <section className={ui.sec}><div className={`${ui.wrap} ${ui.grid}`}>{services.map((s) => <ServiceCard key={s.slug} s={s} />)}</div></section><Cta /></>);
}
