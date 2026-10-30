import Link from "next/link";
import { ui } from "@/lib/ui";
export default function SectionHead({ eyebrow, title, sub, href, linkText }: { eyebrow: string; title: string; sub?: string; href?: string; linkText?: string }) {
  return (<div className="mb-10 flex flex-wrap items-end justify-between gap-4">
    <div><p className={ui.eyebrow}>{eyebrow}</p><h2 className={ui.h2}>{title}</h2>{sub && <p className={ui.lead}>{sub}</p>}</div>
    {href && <Link href={href} className={ui.cardLink}>{linkText} →</Link>}</div>);
}
