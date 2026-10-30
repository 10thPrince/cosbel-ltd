import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { company } from "@/lib/data";
import { pageMeta, abs, bizId } from "@/lib/seo";
import { ui } from "@/lib/ui";
export const metadata = pageMeta({ title: "Contact & Electrical Quote in Kigali", path: "/contact",
  description: "Contact COSBEL Ltd in Kimironko, Kigali. Call +250 788 312 434, email smackreime@gmail.com or request an electrical services quote online.",
  keywords: ["contact electrician Kigali", "electrical quote Kigali", "COSBEL Ltd contact"] });
const a = "text-brand2 hover:underline";
export default function Contact() {
  return (<><JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", url: abs("/contact"), name: "Contact COSBEL Ltd", about: { "@id": bizId() } }} />
    <section className={ui.pageHero}><div className={ui.wrap}><Breadcrumbs trail={[["Contact", "/contact"]]} /><h1 className={ui.pageH1}>Contact COSBEL Ltd</h1><p className={ui.pageP}>Call, email or send a quote request.</p></div></section>
    <section className={ui.sec}><div className={`${ui.wrap} grid items-start gap-12 md:grid-cols-2`}>
      <div><address className="leading-8 not-italic text-fg/80"><strong>COSBEL Ltd</strong><br />{company.location}<br />Telephone: <a className={a} href={company.tel}>{company.phone}</a><br />Email: <a className={a} href={company.mailto}>{company.email}</a><br />TIN: {company.tin}</address>
        <iframe className="mt-5 h-72 w-full rounded-2xl border-0" title="Map of Kimironko, Kigali" loading="lazy" src="https://www.google.com/maps?q=Kimironko,Kigali,Rwanda&output=embed" /></div>
      <ContactForm /></div></section></>);
}
