import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/lib/data";
import { pageMeta, abs } from "@/lib/seo";
import { ui } from "@/lib/ui";
// Stays out of search results until real projects are added.
export const metadata = pageMeta({ title: "Electrical Projects in Rwanda", path: "/projects", noindex: projects.length === 0,
  description: "Electrical projects delivered by COSBEL Ltd for industrial, residential and commercial customers in Kigali and across Rwanda.",
  keywords: ["electrical projects Kigali", "COSBEL Ltd projects"] });
export default function Projects() {
  return (<><JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "COSBEL Ltd projects", url: abs("/projects") }} />
    <section className={ui.pageHero}>
      <div className={ui.wrap}>
        <Breadcrumbs trail={[["Projects", "/projects"]]} />
        <div className="max-w-3xl">
          <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-white/75">COSBEL Ltd · Kigali, Rwanda</p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Electrical work, built around your needs.</h1>
          <p className={ui.pageP}>Explore a selection of electrical installation and equipment imagery, and get in touch to discuss your own project.</p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link className={ui.btnAccent} href="/contact#quote">Discuss Your Project</Link>
            <Link className={ui.btnGhost} href="/services">Explore Our Services</Link>
          </div>
        </div>
      </div>
    </section>
    <section className={ui.sec}>
      <div className={ui.wrap}>
        {projects.length > 0 && (
          <div className="mb-16">
            <h2 className={ui.h2}>Project profiles</h2>
            <div className={ui.grid}>{projects.map((project) => (
              <article key={project.title} className={ui.plain}>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand2">{project.category} · {project.location}</p>
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-2">{project.scope}</p>
                <p className="text-fg/80">{project.description}</p>
              </article>
            ))}</div>
          </div>
        )}

        <div className="mb-8 max-w-2xl">
          <p className="mb-2 font-semibold uppercase tracking-[0.15em] text-brand2">From the field</p>
          <h2 className={`${ui.h2} mb-3`}>Electrical work gallery</h2>
          <p className="text-fg/80">Browse examples of electrical equipment and installation work. Select an image to view it larger and move through the gallery.</p>
        </div>
        <ProjectGallery />

        {projects.length === 0 && (
          <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-line bg-mist p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="mb-1 text-xl font-bold">Looking for a specific service?</h2>
              <p className="max-w-2xl text-fg/80">Project profiles will be added as confirmed project details become available. In the meantime, explore our services or tell us what you need.</p>
            </div>
            <Link className={`${ui.btn} shrink-0`} href="/contact#quote">Request a Quote</Link>
          </div>
        )}
      </div>
    </section>
    <Cta /></>);
}
