import Image from "next/image";
import Link from "next/link";
import { ui } from "@/lib/ui";
type S = { slug: string; title: string; short: string; tag: string; photo: { src: string; alt: string; w: number; h: number } };
export default function ServiceCard({ s }: { s: S }) {
  return (<article className={ui.card}>
    <div className="relative overflow-hidden">
      <Image src={s.photo.src} alt={s.photo.alt} width={s.photo.w} height={s.photo.h} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand2 shadow">{s.tag}</span></div>
    <div className="p-6"><h3 className="mb-2 text-lg font-bold text-brand">{s.title}</h3><p className="mb-4 text-fg/70">{s.short}</p>
      <Link href={`/services/${s.slug}`} className={ui.cardLink} aria-label={`Learn more about ${s.title}`}>Learn More →</Link></div></article>);
}
