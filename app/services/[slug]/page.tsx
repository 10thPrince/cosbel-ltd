import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/Cta";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/data";
import { pageMeta, abs, bizId } from "@/lib/seo";
import { ui } from "@/lib/ui";
type P = { params: Promise<{ slug: string }> };
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? pageMeta({ title: s.seoTitle, description: s.seoDesc, path: `/services/${s.slug}`, keywords: s.keywords }) : {};
}
export default async function Service({ params }: P) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);
  return (<><JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.seoDesc, url: abs(`/services/${s.slug}`), provider: { "@id": bizId() }, areaServed: ["Kigali", "Rwanda"], serviceType: s.title }} />
    <section className={ui.pageHero}><div className={ui.wrap}><Breadcrumbs trail={[["Services", "/services"], [s.title, `/services/${s.slug}`]]} /><h1 className="mb-3 text-4xl font-extrabold">{s.title} in Kigali, Rwanda</h1><p className={ui.pageP}>{s.body}</p></div></section>
    <section className={ui.sec}><div className={`${ui.wrap} grid items-center gap-12 md:grid-cols-2`}>
      <div><h2 className={ui.h2}>Where we apply it</h2><ul className="mb-8 grid list-none gap-3 p-0">{s.applications.map((a) => <li key={a} className={`${ui.plain} py-4 font-semibold`}>{a}</li>)}</ul>
        <Link className={ui.btn} href="/contact#quote">Request a Quote</Link></div>
      <Image src={s.image} alt={s.alt} width={800} height={600} priority className="rounded-3xl shadow-lg" /></div></section>
    <section className={ui.secAlt}><div className={ui.wrap}><h2 className={ui.h2}>Other services</h2>
      <ul className="flex list-none flex-wrap gap-3 p-0">{others.map((o) => <li key={o.slug}><Link href={`/services/${o.slug}`} className={ui.btnGhost.replace("text-white", "text-brand2").replace("border-white/70", "border-brand2")}>{o.title}</Link></li>)}</ul></div></section>
    <Cta /></>);
}
