import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { company } from "@/lib/data";
import { business } from "@/lib/seo";
export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1, colorScheme: "light" };
export const metadata: Metadata = {
  metadataBase: new URL(company.site),
  title: { default: "Electrical Services in Kigali, Rwanda | COSBEL Ltd", template: "%s | COSBEL Ltd" },
  description: "COSBEL Ltd offers industrial, residential and commercial electrical installation and maintenance in Kigali, Rwanda.",
  applicationName: "COSBEL Ltd", authors: [{ name: "COSBEL Ltd" }], creator: "COSBEL Ltd", publisher: "COSBEL Ltd",
  formatDetection: { telephone: true, email: true },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  other: { "geo.region": "RW-01", "geo.placename": "Kimironko, Kigali" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>
    <JsonLd data={business()} />
    <a href="#main" className="absolute -left-[999px] bg-white p-2 focus:top-2 focus:left-2 focus:z-50">Skip to content</a>
    <Header /><main id="main">{children}</main><Footer /></body></html>);
}
