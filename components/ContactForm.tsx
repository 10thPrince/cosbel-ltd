"use client";
import { useState } from "react";
import { services } from "@/lib/data";
import { ui } from "@/lib/ui";
const inp = "w-full rounded-xl border border-line bg-white p-3 focus:border-brand2 text-fg";
type Errs = Record<string, string>;
function F({ id, label, err, children }: { id: string; label: string; err?: string; children: React.ReactNode }) {
  return (<div><label htmlFor={id} className="mb-1 block font-bold">{label}</label>{children}{err && <p className="mt-1 text-sm text-red-600" role="alert">{err}</p>}</div>);
}
export default function ContactForm() {
  const [errs, setErrs] = useState<Errs>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const er: Errs = {};
    if ((d.name || "").trim().length < 2) er.name = "Enter your full name.";
    if (!/^\+?[0-9\s-]{9,15}$/.test((d.phone || "").trim())) er.phone = "Enter a valid phone number, e.g. +250 788 000 000.";
    if (!/^\S+@\S+\.\S+$/.test((d.email || "").trim())) er.email = "Enter a valid email address.";
    if (!d.service) er.service = "Choose the service you need.";
    if ((d.message || "").trim().length < 10) er.message = "Describe your project in at least 10 characters.";
    setErrs(er);
    if (Object.keys(er).length) return;
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      setStatus(r.ok ? "ok" : "fail");
      if (r.ok) form.reset();
    } catch { setStatus("fail"); }
  }
  return (<form id="quote" onSubmit={onSubmit} noValidate className="grid gap-4">
    <F id="name" label="Full name" err={errs.name}><input className={inp} id="name" name="name" autoComplete="name" /></F>
    <F id="phone" label="Phone" err={errs.phone}><input className={inp} id="phone" name="phone" type="tel" autoComplete="tel" /></F>
    <F id="email" label="Email" err={errs.email}><input className={inp} id="email" name="email" type="email" autoComplete="email" /></F>
    <F id="service" label="Service required" err={errs.service}><select className={inp} id="service" name="service" defaultValue=""><option value="" disabled>Select a service</option>
      {services.map((s) => <option key={s.slug}>{s.title}</option>)}<option>Other</option></select></F>
    <F id="location" label="Project location"><input className={inp} id="location" name="location" /></F>
    <F id="message" label="Message" err={errs.message}><textarea className={inp} id="message" name="message" rows={5} /></F>
    <button className={`${ui.btn} disabled:opacity-60`} disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send request"}</button>
    <p role="status" aria-live="polite">
      {status === "ok" && "Thank you. Your request was sent and COSBEL Ltd will reply by phone or email."}
      {status === "fail" && "Your request could not be sent. Please call +250 788 312 434 or email smackreime@gmail.com."}</p>
  </form>);
}
