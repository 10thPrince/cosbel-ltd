"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { gallery } from "@/lib/data";

export default function SiteGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const total = gallery.length;

  useEffect(() => {
    if (selected === null) return;
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected((c) => (c === null ? null : (c + 1) % total));
      if (event.key === "ArrowLeft") setSelected((c) => (c === null ? null : (c - 1 + total) % total));
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [selected, total]);

  return (
    <>
      <ul className="grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setSelected(index)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-mist focus:outline-none focus-visible:ring-2 focus-visible:ring-brand2"
              aria-label={`View photo: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                loading="lazy"
                sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>
      {selected !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={gallery[selected].alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={gallery[selected].src}
              alt={gallery[selected].alt}
              width={1600}
              height={1200}
              sizes="(min-width:1024px) 896px, 100vw"
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
            <p className="mt-3 text-center text-sm text-white/80">{gallery[selected].alt}</p>
            <button
              type="button"
              onClick={() => setSelected((c) => (c === null ? null : (c - 1 + total) % total))}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 font-bold text-brand"
              aria-label="Previous photo"
            >&#8592;</button>
            <button
              type="button"
              onClick={() => setSelected((c) => (c === null ? null : (c + 1) % total))}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 font-bold text-brand"
              aria-label="Next photo"
            >&#8594;</button>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute -top-2 right-0 rounded-full bg-white/90 px-3 py-1 font-bold text-brand"
              aria-label="Close gallery"
            >&#215;</button>
          </div>
        </div>
      )}
    </>
  );
}