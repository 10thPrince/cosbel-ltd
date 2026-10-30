import Image from "next/image";
import Cta from "@/components/Cta";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import SectionHead from "@/components/SectionHead";
import { values, industries, photos } from "@/lib/data";
import { pageMeta, abs, bizId } from "@/lib/seo";
import { ui } from "@/lib/ui";
export const metadata = pageMeta({ title: "About Our Electrical Company in Kigali", path: "/about", image: photos.transformer,
  description: "Meet COSBEL Ltd, an electrical services company in Kimironko, Kigali serving industrial, residential and commercial customers across Rwanda.",
  keywords: ["electrical company Kigali", "about COSBEL Ltd", "electrical contractor Rwanda"] });
const draft = "rounded-2xl border border-line border-l-4 border-l-accent bg-white p-6 italic text-fg/80";
export default function About() {
  return (<><JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", url: abs("/about"), name: "About COSBEL Ltd", about: { "@id": bizId() } }} />
    <section className={ui.pageHero}><div className={ui.wrap}><Breadcrumbs trail={[["About Us", "/about"]]} /><h1 className={ui.pageH1}>About COSBEL Ltd</h1>
      <p className={ui.pageP}>COSBEL Ltd is a Rwandan electrical services company based in Kimironko, Gasabo, Kigali. We provide electrical installation and maintenance for industrial, residential and commercial customers.</p></div></section>
    <section className={ui.sec}><div className={`${ui.wrap} grid items-center gap-12 lg:grid-cols-2`}>
      <div className="grid gap-6"><div><h2 className="mb-3 text-2xl font-extrabold text-brand">Our mission</h2><p className={draft}>Draft, pending company approval: To deliver safe, reliable electrical solutions that meet each customer&apos;s needs.</p></div>
        <div><h2 className="mb-3 text-2xl font-extrabold text-brand">Our vision</h2><p className={draft}>Draft, pending company approval: To be a trusted electrical services partner in Rwanda.</p></div></div>
      <Image src={photos.wiring.src} alt={photos.wiring.alt} width={photos.wiring.w} height={photos.wiring.h} sizes="(min-width:1024px) 560px, 100vw" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" /></div></section>
    <section className={ui.secAlt}><div className={ui.wrap}><SectionHead eyebrow="Our values" title="What guides our work" /><div className={ui.grid}>{values.map(([t, d]) => <div key={t} className={ui.plain}><h3 className="mb-1 font-bold text-brand">{t}</h3><p className="text-fg/70">{d}</p></div>)}</div></div></section>
    <section className={ui.sec}><div className={ui.wrap}><SectionHead eyebrow="Customers" title="Who we serve" /><ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">{industries.map((i) => <li key={i.title} className={`${ui.plain} flex items-center gap-3 font-semibold text-brand`}><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand2/10 text-brand2"><Icon name={i.icon} className="h-5 w-5" /></span>{i.title}</li>)}</ul></div></section><Cta /></>);
}
