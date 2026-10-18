import Image from "next/image";
import Link from "next/link";
import { ui } from "@/lib/ui";
type S = { slug: string; title: string; short: string; image: string; alt: string };
export default function ServiceCard({ s }: { s: S }) {
  return (<article className={ui.card}>
    <Image src={s.image} alt={s.alt} width={800} height={600} className="aspect-[4/3] w-full object-cover" />
    <div className="p-6"><h3 className="mb-2 text-lg font-bold">{s.title}</h3><p className="mb-4 text-fg/80">{s.short}</p>
      <Link href={`/services/${s.slug}`} className={ui.cardLink} aria-label={`Learn more about ${s.title}`}>Learn More →</Link></div></article>);
}
