import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import ServiceCard from "@/components/ServiceCard";
import { services, values, industries } from "@/lib/data";
import { pageMeta, abs, bizId } from "@/lib/seo";
import { ui } from "@/lib/ui";
export const metadata: Metadata = {
  ...pageMeta({ title: "Electrical Services in Kigali, Rwanda", path: "/",
    description: "COSBEL Ltd offers industrial, residential and commercial electrical installation and maintenance in Kigali, Rwanda. Call +250 788 312 434 for a quote.",
    keywords: ["electrical services Kigali", "industrial electrical services Rwanda", "residential electrical installation Kigali", "electrician Kigali", "COSBEL Ltd"] }),
  title: { absolute: "Electrical Services in Kigali, Rwanda | COSBEL Ltd" },
};
export default function Home() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: "COSBEL Ltd", url: abs("/"), publisher: { "@id": bizId() }, inLanguage: "en" }} />
    <section className="bg-gradient-to-br from-brand to-brand2 py-16 text-white md:py-24"><div className={`${ui.wrap} grid items-center gap-12 md:grid-cols-2`}>
      <div className="motion-safe:animate-fade-up">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Professional Electrical Solutions You Can Rely On.</h1>
        <p className="mt-5 max-w-xl text-lg text-white/90">COSBEL Ltd provides electrical services for industrial facilities, residential properties, commercial buildings, and other electrical project requirements across its service areas.</p>
        <div className="mt-8 flex flex-wrap gap-3.5"><Link className={ui.btnAccent} href="/contact#quote">Request a Quote</Link><Link className={ui.btnGhost} href="/services">Explore Our Services</Link></div></div>
      <Image src="/images/electrical-2.jpg" alt="Illustration of power lines and pylons carrying electricity" width={800} height={600} priority className="rounded-3xl shadow-2xl" /></div></section>
    <section className={ui.sec}><div className={ui.wrap}><h2 className={ui.h2}>Our Electrical Services</h2>
      <div className={ui.grid}>{services.map((s) => <ServiceCard key={s.slug} s={s} />)}</div></div></section>
    <section className={ui.secAlt}><div className={`${ui.wrap} grid items-center gap-12 md:grid-cols-2`}>
      <Image src="/images/electrical-3.jpg" alt="Electrical transformer at a power substation" width={800} height={600} className="rounded-3xl shadow-lg" />
      <div><h2 className={ui.h2}>About COSBEL Ltd</h2><p className="mb-6">COSBEL Ltd is an electrical services company based in Kimironko, Gasabo, Kigali. We work with industrial facilities, households, commercial buildings and other customers who need dependable electrical solutions, and we keep each project clear from first call to handover.</p><Link className={ui.btn} href="/about">Learn More About Us</Link></div></div></section>
    <section className={ui.sec}><div className={ui.wrap}><h2 className={ui.h2}>Why Choose COSBEL Ltd?</h2>
      <div className={ui.grid}>{values.map(([t, d]) => <div key={t} className={ui.plain}><h3 className="mb-1 font-bold">{t}</h3><p className="text-fg/80">{d}</p></div>)}</div></div></section>
    <section className={ui.secAlt}><div className={ui.wrap}><h2 className={ui.h2}>Industries We Serve</h2>
      <ul className="grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">{industries.map((i) => <li key={i.title} className={ui.card}>
        <Image src={i.image} alt={i.alt} width={800} height={600} className="aspect-[4/3] w-full object-cover" /><p className="p-4 font-semibold">{i.title}</p></li>)}</ul></div></section>
    <Cta /></>);
}
