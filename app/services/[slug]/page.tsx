import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/Cta";
import Breadcrumbs from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";
import { pageMeta, abs, bizId } from "@/lib/seo";
import { ui } from "@/lib/ui";
type P = { params: Promise<{ slug: string }> };
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? pageMeta({ title: s.seoTitle, description: s.seoDesc, path: `/services/${s.slug}`, keywords: s.keywords, image: s.photo }) : {};
}
export default async function Service({ params }: P) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);
  return (<><JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.seoDesc, url: abs(`/services/${s.slug}`), image: abs(s.photo.src), provider: { "@id": bizId() }, areaServed: ["Kigali", "Rwanda"], serviceType: s.title }} />
    <section className={ui.pageHero}><div className={ui.wrap}><Breadcrumbs trail={[["Services", "/services"], [s.title, `/services/${s.slug}`]]} /><h1 className={ui.pageH1}>{s.title} in Kigali, Rwanda</h1><p className={ui.pageP}>{s.body}</p></div></section>
    <section className={ui.sec}><div className={`${ui.wrap} grid items-center gap-12 lg:grid-cols-2`}>
      <div><p className={ui.eyebrow}>Applications</p><h2 className={ui.h2}>Where we apply it</h2>
        <ul className="mb-8 grid list-none gap-3 p-0">{s.applications.map((a) => <li key={a} className={`${ui.plain} flex items-center gap-3 !py-4 font-semibold text-brand`}><span className="grid h-6 w-6 place-items-center rounded-full bg-brand2/10 text-brand2"><Icon name="check" className="h-4 w-4" /></span>{a}</li>)}</ul>
        <Link className={ui.btn} href="/contact#quote">Request a Quote</Link></div>
      <Image src={s.photo.src} alt={s.photo.alt} width={s.photo.w} height={s.photo.h} priority sizes="(min-width:1024px) 560px, 100vw" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" /></div></section>
    <section className={ui.secAlt}><div className={ui.wrap}><SectionHead eyebrow="Explore more" title="Other electrical services" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{others.map((o) => <ServiceCard key={o.slug} s={o} />)}</div></div></section>
    <Cta /></>);
}
