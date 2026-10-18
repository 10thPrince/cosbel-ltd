import { ImageResponse } from "next/og";
export const alt = "COSBEL Ltd: electrical services in Kigali, Rwanda";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: 80, background: "linear-gradient(135deg,#0b2a5b,#1f6fd1)", color: "#fff" }}>
      <div style={{ fontSize: 40, color: "#f28c28", fontWeight: 700 }}>COSBEL Ltd</div>
      <div style={{ fontSize: 72, fontWeight: 800, marginTop: 20, lineHeight: 1.1 }}>Professional Electrical Solutions in Kigali, Rwanda</div>
      <div style={{ fontSize: 32, marginTop: 30 }}>+250 788 312 434</div></div>), size);
}
