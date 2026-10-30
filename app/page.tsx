import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/Cta";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import { services, values, industries, photos } from "@/lib/data";
import { pageMeta, abs, bizId } from "@/lib/seo";
import { ui } from "@/lib/ui";
export const metadata: Metadata = {
  ...pageMeta({ title: "Electrical Services in Kigali, Rwanda", path: "/",
    description: "COSBEL Ltd offers industrial, residential and commercial electrical installation and maintenance in Kigali, Rwanda. Call +250 788 312 434 for a quote.",
    keywords: ["electrical services Kigali", "industrial electrical services Rwanda", "residential electrical installation Kigali", "electrician Kigali", "COSBEL Ltd"] }),
  title: { absolute: "Electrical Services in Kigali, Rwanda | COSBEL Ltd" },
};
const chips = ["Industrial, residential & commercial", "Installation & maintenance", "Based in Kimironko, Kigali"];
export default function Home() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: "COSBEL Ltd", url: abs("/"), publisher: { "@id": bizId() }, inLanguage: "en" }} />
    <section className="bg-gradient-to-b from-mist to-white py-16 md:py-24"><div className={`${ui.wrap} grid items-center gap-12 lg:grid-cols-2`}>
      <div className="motion-safe:animate-fade-up">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-brand shadow-sm"><span className="h-2 w-2 rounded-full bg-accent" />Kimironko, Kigali, Rwanda</p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand sm:text-5xl lg:text-6xl">Professional Electrical Solutions You Can Rely On.</h1>
        <p className="mt-5 max-w-xl text-lg text-fg/70">COSBEL Ltd provides electrical services for industrial facilities, residential properties, commercial buildings, and other electrical project requirements across its service areas.</p>
        <div className="mt-8 flex flex-wrap gap-3.5"><Link className={ui.btn} href="/contact#quote">Request a Quote</Link><Link className={ui.btnOutline} href="/services">Explore Our Services</Link></div>
        <ul className="mt-8 grid list-none gap-2 p-0 text-sm font-semibold text-fg/80">{chips.map((c) => <li key={c} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-brand2/10 text-brand2"><Icon name="check" className="h-3.5 w-3.5" /></span>{c}</li>)}</ul></div>
      <div className="relative">
        <Image src={photos.control.src} alt={photos.control.alt} width={photos.control.w} height={photos.control.h} priority sizes="(min-width:1024px) 560px, 100vw" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl" />
        <div className="absolute -bottom-5 left-4 flex max-w-[260px] items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-xl sm:left-[-1.5rem]">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand2 text-white"><Icon name="shield" className="h-5 w-5" /></span>
          <p className="text-sm"><strong className="block text-brand">Safety first</strong><span className="text-fg/70">Every job planned with electrical safety in mind.</span></p></div></div></div></section>

    <section className={ui.sec}><div className={ui.wrap}>
      <SectionHead eyebrow="What we do" title="Electrical services built around your site" sub="From new installations to ongoing maintenance for industrial, residential and commercial customers." href="/services" linkText="View all services" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{services.map((s) => <ServiceCard key={s.slug} s={s} />)}</div></div></section>

    <section className={ui.secAlt}><div className={ui.wrap}>
      <SectionHead eyebrow="Who we serve" title="Industries We Serve" sub="Electrical solutions for different environments and customer requirements." />
      <ul className="grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">{industries.map((i) => <li key={i.title} className={`${ui.plain} transition hover:-translate-y-1 hover:shadow-lg`}>
        <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand2/10 text-brand2"><Icon name={i.icon} /></span><p className="font-bold text-brand">{i.title}</p></li>)}</ul></div></section>

    <section className={ui.sec}><div className={`${ui.wrap} grid items-center gap-12 lg:grid-cols-2`}>
      <Image src={photos.transformer.src} alt={photos.transformer.alt} width={photos.transformer.w} height={photos.transformer.h} sizes="(min-width:1024px) 560px, 100vw" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
      <div><p className={ui.eyebrow}>About COSBEL Ltd</p><h2 className={ui.h2}>A Rwandan electrical services company</h2>
        <p className="mb-6 text-fg/70">COSBEL Ltd is based in Kimironko, Gasabo, Kigali. We work with industrial facilities, households, commercial buildings and other customers who need dependable electrical solutions, and we keep each project clear from first call to handover.</p>
        <Link className={ui.btn} href="/about">Learn More About Us</Link></div></div></section>

    <section className={ui.secAlt}><div className={ui.wrap}>
      <SectionHead eyebrow="Why us" title="Why Choose COSBEL Ltd?" sub="Our approach is built on safety, quality and clear communication." />
      <div className={ui.grid}>{values.map(([t, d], i) => <div key={t} className={ui.plain}>
        <span className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-bold text-white">{i + 1}</span><h3 className="mb-1 font-bold text-brand">{t}</h3><p className="text-fg/70">{d}</p></div>)}</div></div></section>
    <Cta /></>);
}
