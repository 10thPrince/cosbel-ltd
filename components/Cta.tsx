import Link from "next/link";
import { company } from "@/lib/data";
import { ui } from "@/lib/ui";
export default function Cta() {
  return (<section className="py-20"><div className={ui.wrap}>
    <div className="rounded-3xl bg-gradient-to-br from-brand to-brand2 px-6 py-14 text-center text-white shadow-xl sm:px-12">
      <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Let&apos;s Discuss Your Electrical Project.</h2>
      <p className="mx-auto max-w-xl text-lg text-white/90">Contact COSBEL Ltd to discuss your electrical service requirements and request a quotation.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3.5"><a className={ui.btnLight} href={company.tel}>Call {company.phone}</a>
        <a className={ui.btnGhost} href={company.mailto}>Send an Email</a>
        <Link className={ui.btnAccent} href="/contact#quote">Request a Quote</Link></div></div></div></section>);
}
