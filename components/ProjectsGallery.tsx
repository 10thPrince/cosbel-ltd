"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/data";

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const activeProject = selectedProject === null ? null : projects[selectedProject];
  const totalImages = activeProject ? activeProject.images.length : 0;

  useEffect(() => {
    if (selectedProject === null) return;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
      if (event.key === "ArrowRight" && totalImages > 0) {
        setSelectedImage((current) => (current + 1) % totalImages);
      }
      if (event.key === "ArrowLeft" && totalImages > 0) {
        setSelectedImage((current) => (current - 1 + totalImages) % totalImages);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [selectedProject, totalImages]);

  const openModal = (projectIndex: number, imageIndex: number) => {
    setSelectedProject(projectIndex);
    setSelectedImage(imageIndex);
  };

  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <div className="grid gap-6">
        {projects.map((project, projectIndex) => (
          <article key={project.title} className="w-full overflow-hidden rounded-[28px] border border-line bg-white shadow-sm">
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {project.images.map((image, imageIndex) => (
                <button
                  key={`${project.title}-${image.src}`}
                  type="button"
                  onClick={() => openModal(projectIndex, imageIndex)}
                  className="group relative block overflow-hidden rounded-2xl border border-line bg-mist focus:outline-none focus-visible:ring-2 focus-visible:ring-brand2"
                  aria-label={`Open ${project.title} image ${imageIndex + 1}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>

            <div className="border-t border-line px-5 pb-6 pt-5 sm:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="rounded-full border border-brand2/20 bg-brand2/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand2">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-brand">{project.title}</h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-fg/60">{project.location}</span>
              </div>

              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand2">{project.scope}</p>
              <p className="mt-4 text-base text-fg/70">{project.description}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={`${project.title}-${metric.label}`} className="rounded-2xl border border-line bg-mist p-3 text-center">
                    <p className="text-xl font-extrabold text-brand">{metric.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-fg/60">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4 text-sm text-fg/70">
                <span className="font-semibold">{project.completion}</span>
                <button
                  type="button"
                  onClick={() => openModal(projectIndex, 0)}
                  className="font-semibold text-brand2 hover:underline"
                >
                  View gallery
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject !== null && activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-lg text-white transition hover:bg-black/80"
              aria-label="Close gallery"
            >
              ×
            </button>

            <div className="flex items-center justify-between border-b border-line bg-mist px-5 py-3 text-sm font-semibold text-brand">
              <span>{activeProject.title}</span>
              <span className="text-fg/60">{selectedImage + 1} / {totalImages}</span>
            </div>

            <div className="relative bg-[#f5f3ee]">
              <img
                src={activeProject.images[selectedImage].src}
                alt={activeProject.images[selectedImage].alt}
                className="max-h-[72vh] w-full object-contain"
              />

              {totalImages > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setSelectedImage((current) => (current - 1 + totalImages) % totalImages)}
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedImage((current) => (current + 1) % totalImages)}
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            <div className="flex gap-3 overflow-x-auto border-t border-line bg-white p-3">
              {activeProject.images.map((image, index) => (
                <button
                  key={`${activeProject.title}-thumb-${image.src}`}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border ${
                    index === selectedImage ? "border-brand2 ring-2 ring-brand2/25" : "border-line"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
