import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbLd } from "@/lib/seo";
export default function Breadcrumbs({ trail }: { trail: [string, string][] }) {
  const all: [string, string][] = [["Home", "/"], ...trail];
  return (<nav aria-label="Breadcrumb" className="mb-4 text-sm text-fg/60">
    <JsonLd data={breadcrumbLd(all)} />
    <ol className="flex flex-wrap gap-2">{all.map(([n, p], i) => (
      <li key={p} className="flex gap-2">{i > 0 && <span aria-hidden>/</span>}
        {i < all.length - 1 ? <Link href={p} className="hover:text-brand2 hover:underline">{n}</Link> : <span aria-current="page" className="font-semibold text-brand">{n}</span>}</li>))}</ol></nav>);
}
