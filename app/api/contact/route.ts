import { NextResponse } from "next/server";

// Quote requests are delivered through Web3Forms (https://web3forms.com).
// The access key lives in the WEB3FORMS_ACCESS_KEY env var (set it in Vercel:
// Project Settings > Environment Variables, then redeploy).
export async function POST(req: Request) {
  const d = await req.json().catch(() => null);
  if (!d?.name || !d?.phone || !d?.email || !d?.service || !d?.message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!key) return NextResponse.json({ error: "Email delivery not configured" }, { status: 503 });
  const esc = (s: string) => String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string));
  const r = await fetch("https://api.web3forms.com/submit", {
    method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject: `Quote request: ${esc(d.service)} from ${esc(d.name)}`,
      from_name: "COSBEL Website",
      name: d.name,
      phone: d.phone,
      email: d.email,
      service: d.service,
      location: d.location || "-",
      message: d.message,
      replyto: d.email,
    }),
  });
  if (!r.ok) return NextResponse.json({ error: "Send failed" }, { status: 502 });
  const res = await r.json().catch(() => null);
  return res?.success ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Send failed" }, { status: 502 });
}