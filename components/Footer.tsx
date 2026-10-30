import Link from "next/link";
import { company, services } from "@/lib/data";
import { Logo } from "./Header";
import { ui } from "@/lib/ui";
const l = "mb-2 block text-fg/70 no-underline hover:text-brand2";
const h = "mb-4 font-bold text-brand";
export default function Footer() {
  return (<footer className="border-t border-line bg-mist pt-16 pb-6"><div className={`${ui.wrap} grid gap-10 sm:grid-cols-2 lg:grid-cols-4`}>
    <div><Logo /><p className="mt-4 text-fg/70">Electrical services for industrial, residential and commercial customers in Kigali, Rwanda.</p></div>
    <div><h3 className={h}>Company</h3>{[["/", "Home"], ["/about", "About Us"], ["/services", "Services"], ["/projects", "Projects"], ["/contact", "Contact"]].map(([p, t]) => <Link key={p} href={p} className={l}>{t}</Link>)}</div>
    <div><h3 className={h}>Services</h3>{services.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className={l}>{s.title}</Link>)}</div>
    <div><h3 className={h}>Contact</h3><a href={company.tel} className={l}>{company.phone}</a><a href={company.mailto} className={l}>{company.email}</a><span className="mb-2 block text-fg/70">{company.location}</span><span className="block text-fg/70">TIN: {company.tin}</span></div>
  </div><div className={`${ui.wrap} mt-12 border-t border-line pt-5 text-sm text-fg/60`}>© {new Date().getFullYear()} COSBEL Ltd. All rights reserved.</div></footer>);
}
