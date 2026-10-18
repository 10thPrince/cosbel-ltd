import Link from "next/link";
import { company } from "@/lib/data";
import { ui } from "@/lib/ui";
export default function Cta() {
  return (<section className="bg-brand py-16 text-white"><div className={ui.wrap}>
    <h2 className={ui.h2}>Let&apos;s Discuss Your Electrical Project.</h2>
    <p className="max-w-xl">Contact COSBEL Ltd to discuss your electrical service requirements and request a quotation.</p>
    <div className="mt-6 flex flex-wrap gap-3.5"><a className={ui.btnLight} href={company.tel}>Call {company.phone}</a>
      <a className={ui.btnGhost} href={company.mailto}>Send an Email</a>
      <Link className={ui.btnAccent} href="/contact#quote">Request a Quote</Link></div></div></section>);
}
