"use client";
import Link from "next/link";
import { useState } from "react";
import { ui } from "@/lib/ui";
export function Logo({ dark = false }: { dark?: boolean }) {
  return (<Link href="/" aria-label="COSBEL Ltd home" className="flex items-center gap-2 text-xl font-extrabold text-brand2 no-underline">
    {/* Replace with the official logo file, e.g. <Image src="/logo.png" ... /> */}
    <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="currentColor" /></svg>
    <span className={dark ? "text-white" : "text-fg"}>COSBEL <small className="font-medium">Ltd</small></span></Link>);
}
const nav = [["/", "Home"], ["/about", "About Us"], ["/services", "Services"], ["/projects", "Projects"], ["/contact", "Contact"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (<header className="sticky top-0 z-10 border-b border-line bg-bg"><div className={`${ui.wrap} flex min-h-[68px] items-center justify-between`}>
    <Logo />
    <button className="rounded-md border border-line px-3.5 py-2 md:hidden" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    <nav id="nav" aria-label="Main" className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-[68px] flex-col gap-4 border-b border-line bg-bg p-5 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:p-0`}>
      {nav.map(([h, l]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="font-semibold text-fg no-underline hover:text-brand2">{l}</Link>)}
      <Link href="/contact#quote" className={ui.btn} onClick={() => setOpen(false)}>Request a Quote</Link>
    </nav></div></header>);
}
