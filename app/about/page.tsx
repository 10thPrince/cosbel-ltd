import Image from "next/image";
import Cta from "@/components/Cta";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { values, industries } from "@/lib/data";
import { pageMeta, abs, bizId } from "@/lib/seo";
import { ui } from "@/lib/ui";
export const metadata = pageMeta({
  title: "About Our Electrical Company in Kigali", path: "/about",
  description: "Meet COSBEL Ltd, an electrical services company in Kimironko, Kigali serving industrial, residential and commercial customers across Rwanda.",
  keywords: ["electrical company Kigali", "about COSBEL Ltd", "electrical contractor Rwanda"]
});
const draft = "rounded-2xl border border-line border-l-4 border-l-accent bg-bg p-6 italic";
export default function About() {
  return (<><JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", url: abs("/about"), name: "About COSBEL Ltd", about: { "@id": bizId() } }} />
    <section className="relative isolate overflow-hidden bg-brand py-16 text-white md:py-24">
      <Image src="/images/electrical-6.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/80 to-brand/20" />
      <div className={`${ui.wrap} relative`}><Breadcrumbs trail={[["About Us", "/about"]]} /><h1 className="mb-3 text-4xl font-extrabold">About COSBEL Ltd</h1>
      <p className={ui.pageP}>COSBEL Ltd is a Rwandan electrical services company based in Kimironko, Gasabo, Kigali. We provide electrical installation and maintenance for industrial, residential and commercial customers.</p></div></section>
    <section className={ui.sec}><div className={`${ui.wrap} grid items-center gap-12 md:grid-cols-2`}>
      <div className="grid gap-6"><div><h2 className="mb-3 text-2xl font-extrabold">Mission</h2><p className={draft}>Draft, pending company approval: To deliver safe, reliable electrical solutions that meet each customer&apos;s needs.</p></div>
        <div><h2 className="mb-3 text-2xl font-extrabold">Vision</h2><p className={draft}>Draft, pending company approval: To be a trusted electrical services partner in Rwanda.</p></div></div>
      <Image src="/images/electrical-1.jpg" alt="Electrical distribution board with circuit breakers" width={800} height={600} className="rounded-3xl shadow-lg" /></div></section>
    <section className={ui.secAlt}><div className={ui.wrap}><h2 className={ui.h2}>Our core values</h2><div className={ui.grid}>{values.map(([t, d]) => <div key={t} className={ui.plain}><h3 className="mb-1 font-bold">{t}</h3><p className="text-fg/80">{d}</p></div>)}</div></div></section>
    <section className={ui.sec}><div className={ui.wrap}><h2 className={ui.h2}>Who we serve</h2><ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">{industries.map((i) => <li key={i.title} className={`${ui.plain} font-semibold`}>{i.title}</li>)}</ul></div></section><Cta /></>);
}
