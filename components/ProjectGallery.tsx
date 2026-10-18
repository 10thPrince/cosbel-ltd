"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const photos = [
  { src: "/images/electrical-1.jpg", alt: "Electrical distribution board with circuit breakers", title: "Distribution boards" },
  { src: "/images/electrical-2.jpg", alt: "Wiring connected to an electrical distribution board", title: "Electrical wiring" },
  { src: "/images/electrical-3.jpg", alt: "Electrical transformer at a power substation", title: "Power transformers" },
  { src: "/images/electrical-4.jpg", alt: "Electrical cable trays routed through a building ceiling", title: "Cable management" },
  { src: "/images/electrical-5.jpg", alt: "Electrical switchgear cabinets with wiring", title: "Switchgear" },
  { src: "/images/electrical-6.jpg", alt: "Electrical panel installation with connected cables", title: "Panel installation" },
];

export default function ProjectGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        triggerButtonRef.current?.focus();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((index) => index === null ? null : (index + 1) % photos.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((index) => index === null ? null : (index - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  const closeViewer = () => {
    setActiveIndex(null);
    triggerButtonRef.current?.focus();
  };

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className={`group overflow-hidden rounded-2xl border border-line bg-bg text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-offset-4 ${index === 0 ? "sm:col-span-2" : ""}`}
            onClick={(event) => {
              triggerButtonRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
            aria-label={`Open image ${index + 1}: ${photo.alt}`}
          >
            <span className="relative block overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1000}
                height={750}
                className={`w-full object-cover transition duration-500 group-hover:scale-105 ${index === 0 ? "aspect-16/8 sm:aspect-16/7" : "aspect-4/3"}`}
              />
              <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-5 pb-4 pt-12 text-left text-lg font-bold text-white">
                {photo.title}
              </span>
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
          onClick={closeViewer}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeViewer();
            }}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/15 px-4 py-2 font-semibold hover:bg-white/25"
            aria-label="Close image viewer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex - 1 + photos.length) % photos.length);
            }}
            className="absolute left-3 z-10 rounded-full bg-white/15 px-4 py-3 font-semibold hover:bg-white/25 sm:left-6"
            aria-label="Previous image"
          >
            Previous
          </button>
          <div
            className="relative h-[75vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-contain"
              priority
            />
            <p className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-2 text-center text-sm">
              {photos[activeIndex].alt} · {activeIndex + 1} of {photos.length}
            </p>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((activeIndex + 1) % photos.length);
            }}
            className="absolute right-3 z-10 rounded-full bg-white/15 px-4 py-3 font-semibold hover:bg-white/25 sm:right-6"
            aria-label="Next image"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
