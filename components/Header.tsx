"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ui } from "@/lib/ui";
export function Logo() {
  return (<Link href="/" aria-label="COSBEL Ltd home" className="flex items-center no-underline">
    <Image src="/logo.webp" alt="COSBEL Ltd logo" width={2060} height={624} priority sizes="140px" className="h-9 w-auto" /></Link>);
}
const nav = [["/", "Home"], ["/about", "About Us"], ["/services", "Services"], ["/projects", "Projects"], ["/contact", "Contact"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (<header className="sticky top-0 z-20 border-b border-line bg-white/85 backdrop-blur"><div className={`${ui.wrap} flex min-h-[72px] items-center justify-between`}>
    <Logo />
    <button className="rounded-full border border-line px-4 py-2 text-sm font-semibold md:hidden" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    <nav id="nav" aria-label="Main" className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-[72px] flex-col gap-4 border-b border-line bg-white p-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
      {nav.map(([h, l]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="font-semibold text-fg/80 no-underline transition hover:text-brand2">{l}</Link>)}
      <Link href="/contact#quote" className={`${ui.btn} !py-2.5`} onClick={() => setOpen(false)}>Request a Quote</Link>
    </nav></div></header>);
}
