import Image from "next/image";
import Cta from "@/components/Cta";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import SectionHead from "@/components/SectionHead";
import { values, industries, photos, faqs } from "@/lib/data";
import { pageMeta, abs, bizId } from "@/lib/seo";
import { ui } from "@/lib/ui";
export const metadata = pageMeta({ title: "About Our Electrical Company in Kigali", path: "/about", image: photos.transformer,
  description: "Meet COSBEL Ltd, an electrical engineering company in Kimironko, Kigali. We design, install, manufacture and commission power-supply and power-distribution systems for factories and industrial sites across Rwanda.",
  keywords: ["electrical engineering company Kigali", "about COSBEL Ltd", "electrical contractor Rwanda", "substation installation Rwanda"] });
const draft = "rounded-2xl border border-line border-l-4 border-l-accent bg-white p-6 italic text-fg/80";
export default function About() {
  return (<><JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", url: abs("/about"), name: "About COSBEL Ltd", about: { "@id": bizId() } }} />
    <section className={ui.pageHero}><div className={ui.wrap}><Breadcrumbs trail={[["About Us", "/about"]]} /><h1 className={ui.pageH1}>About COSBEL Ltd</h1>
      <p className={ui.pageP}>COSBEL Ltd is an electrical engineering company based in Kimironko, Gasabo, Kigali. We design, install, manufacture and commission power-supply and power-distribution systems for factories and industrial sites, and we inspect existing electrical equipment such as transformers.</p></div></section>
    <section className={ui.sec}><div className={ui.wrap}>
      <SectionHead eyebrow="What that means in practice" title="From design to handover" sub="Most of our clients are businesses: factories, warehouses and processing plants that depend on their power supply every day." />
      <div className={ui.grid}>
        <div className={ui.plain}><h3 className="mb-1 font-bold text-brand">Design</h3><p className="text-fg/70">We plan how a facility is supplied, including multi-source supplies with generator backup, breaker coordination and the operating modes for every failure scenario.</p></div>
        <div className={ui.plain}><h3 className="mb-1 font-bold text-brand">Installation</h3><p className="text-fg/70">We install compact substations and transformers, lay underground cabling and integrate generators through transfer switches and interlocked changeovers.</p></div>
        <div className={ui.plain}><h3 className="mb-1 font-bold text-brand">Manufacturing</h3><p className="text-fg/70">We design and manufacture our own manual ATS units, including installations that manage several generators.</p></div>
        <div className={ui.plain}><h3 className="mb-1 font-bold text-brand">Commissioning &amp; inspection</h3><p className="text-fg/70">We commission equipment such as industrial ovens with their own sub-distribution boards, inspect transformers and hand over with completion certificates and condition reports.</p></div>
      </div></div></section>
    <section className={ui.sec}><div className={`${ui.wrap} grid items-center gap-12 lg:grid-cols-2`}>
      <div className="grid gap-6"><div><h2 className="mb-3 text-2xl font-extrabold text-brand">Our mission</h2><p className={draft}>Draft, pending company approval: To deliver safe, reliable electrical solutions that meet each customer&apos;s needs.</p></div>
        <div><h2 className="mb-3 text-2xl font-extrabold text-brand">Our vision</h2><p className={draft}>Draft, pending company approval: To be a trusted electrical services partner in Rwanda.</p></div></div>
      <Image src={photos.wiring.src} alt={photos.wiring.alt} width={photos.wiring.w} height={photos.wiring.h} sizes="(min-width:1024px) 560px, 100vw" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" /></div></section>
    <section className={ui.secAlt}><div className={ui.wrap}><SectionHead eyebrow="Our values" title="What guides our work" /><div className={ui.grid}>{values.map(([t, d]) => <div key={t} className={ui.plain}><h3 className="mb-1 font-bold text-brand">{t}</h3><p className="text-fg/70">{d}</p></div>)}</div></div></section>
    <section className={ui.sec}><div className={ui.wrap}><SectionHead eyebrow="Customers" title="Who we serve" /><ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">{industries.map((i) => <li key={i.title} className={`${ui.plain} flex items-center gap-3 font-semibold text-brand`}><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand2/10 text-brand2"><Icon name={i.icon} className="h-5 w-5" /></span>{i.title}</li>)}</ul></div></section>
    <section className={ui.secAlt}><div className={ui.wrap}><SectionHead eyebrow="Common questions" title="Frequently asked questions" sub="Short answers about where we work and what we do. For anything project-specific, call or send a quote request." />
      <dl className="grid max-w-3xl list-none gap-4 p-0">{faqs.map(([q, a]) => <div key={q} className={ui.plain}><dt className="font-bold text-brand">{q}</dt><dd className="mt-1 text-fg/70">{a}</dd></div>)}</dl></div></section>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} /><Cta /></>);
}
