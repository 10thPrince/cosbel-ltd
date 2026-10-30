import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ProjectsGallery from "@/components/ProjectsGallery";
import { pageMeta, abs } from "@/lib/seo";
import { ui } from "@/lib/ui";

export const metadata = pageMeta({
  title: "Electrical Projects in Rwanda",
  path: "/projects",
  noindex: false,
  description: "Electrical projects delivered by COSBEL Ltd for industrial, residential and commercial customers in Kigali and across Rwanda.",
  keywords: ["electrical projects Kigali", "COSBEL Ltd projects"],
});

export default function Projects() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "COSBEL Ltd projects", url: abs("/projects") }} />

      <section className={ui.pageHero}>
        <div className={ui.wrap}>
          <Breadcrumbs trail={[["Projects", "/projects"]]} />
          <h1 className={ui.pageH1}>Our Electrical Projects</h1>
          <p className={ui.pageP}>A record of COSBEL Ltd electrical work across commercial, industrial and residential installations.</p>
        </div>
      </section>

      <section className={ui.sec}>
        <div className={ui.wrap}>
          <div className="mb-10">
            <p className={ui.eyebrow}>Some of our projects</p>
            <h2 className={ui.h2}>From first installation to final handover.</h2>
          </div>

          <ProjectsGallery />

          <div className="mt-12 max-w-2xl rounded-3xl border border-line bg-mist p-8">
            <p className={ui.eyebrow}>Need a similar result?</p>
            <h3 className="mb-3 text-2xl font-extrabold text-brand">Let’s plan your next electrical project.</h3>
            <p className="mb-6 text-fg/70">We deliver professional electrical installations, upgrades and maintenance for homes, shops and industrial facilities in Kigali and beyond.</p>
            <Link className={ui.btn} href="/contact#quote">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
