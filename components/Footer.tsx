import Link from "next/link";
import { company, services } from "@/lib/data";
import { Logo } from "./Header";
import { ui } from "@/lib/ui";
const l = "mb-1.5 block text-[#cfd9ea] no-underline hover:text-white";
const h = "mb-3 font-bold text-white";
export default function Footer() {
  return (<footer className="bg-navy pt-14 pb-6 text-[#cfd9ea]"><div className={`${ui.wrap} grid gap-8 sm:grid-cols-2 lg:grid-cols-4`}>
    <div><Logo dark /><p className="mt-3">Electrical services for industrial, residential and commercial customers in Rwanda.</p></div>
    <div><h3 className={h}>Pages</h3>{[["/", "Home"], ["/about", "About Us"], ["/services", "Services"], ["/projects", "Projects"], ["/contact", "Contact"]].map(([p, t]) => <Link key={p} href={p} className={l}>{t}</Link>)}</div>
    <div><h3 className={h}>Services</h3>{services.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className={l}>{s.title}</Link>)}</div>
    <div><h3 className={h}>Contact</h3><a href={company.tel} className={l}>{company.phone}</a><a href={company.mailto} className={l}>{company.email}</a><span className="mb-1.5 block">{company.location}</span><span className="block">TIN: {company.tin}</span></div>
  </div><div className={`${ui.wrap} mt-8 border-t border-[#22324d] pt-4 text-sm`}>© {new Date().getFullYear()} COSBEL Ltd. All rights reserved.</div></footer>);
}
