import type { Metadata } from "next";
import Link from "next/link";
import { ui } from "@/lib/ui";
export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };
export default function NotFound() {
  return (<section className="py-28"><div className={`${ui.wrap} max-w-xl text-center`}><p className={ui.eyebrow}>Error 404</p><h1 className={ui.pageH1}>Page not found</h1>
    <p className="mb-8 text-fg/70">The page you are looking for does not exist. Try our services or contact COSBEL Ltd directly.</p>
    <div className="flex flex-wrap justify-center gap-3"><Link href="/" className={ui.btn}>Home</Link><Link href="/services" className={ui.btnOutline}>Services</Link><Link href="/contact" className={ui.btnOutline}>Contact</Link></div></div></section>);
}
