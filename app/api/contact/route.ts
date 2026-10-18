import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const d = await req.json().catch(() => null);
  if (!d?.name || !d?.phone || !d?.email || !d?.service || !d?.message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "Email delivery not configured" }, { status: 503 });
  const esc = (s: string) => String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string));
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "COSBEL Website <onboarding@resend.dev>", to: ["smackreime@gmail.com"], reply_to: d.email,
      subject: `Quote request: ${esc(d.service)} from ${esc(d.name)}`,
      html: `<p><b>Name:</b> ${esc(d.name)}<br><b>Phone:</b> ${esc(d.phone)}<br><b>Email:</b> ${esc(d.email)}<br><b>Service:</b> ${esc(d.service)}<br><b>Location:</b> ${esc(d.location || "-")}</p><p>${esc(d.message)}</p>`,
    }),
  });
  return r.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Send failed" }, { status: 502 });
}
