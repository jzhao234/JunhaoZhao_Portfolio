"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const closeZoom = useCallback(() => setZoomed(false), []);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeZoom();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomed, closeZoom]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Gallery layout: main image top, thumbnails bottom */}
      <div className="flex flex-col gap-3 w-full">

        {/* Main image */}
        <button
          onClick={() => setZoomed(true)}
          className="group border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden bg-gray-50 dark:bg-white/5 relative w-full aspect-[16/9] cursor-zoom-in"
          aria-label="Zoom image"
        >
          <Image
            src={images[selectedImage]}
            alt="selected project image"
            fill
            className="object-contain"
          />
          {/* Zoom hint */}
          <span className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-xs px-2 py-1 rounded-md pointer-events-none select-none">
            Click to zoom
          </span>
        </button>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`flex-shrink-0 border rounded-md overflow-hidden transition-colors bg-gray-50 dark:bg-white/5 relative w-32 h-16 ${
                  selectedImage === i
                    ? "border-[#2196F3]"
                    : "border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20"
                }`}
              >
                <Image
                  src={src}
                  alt="project image"
                  fill
                  className="object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Zoom modal */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out"
          onClick={closeZoom}
        >
          <div className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4">
            <Image
              src={images[selectedImage]}
              alt="zoomed project image"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            onClick={closeZoom}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-9 h-9 flex items-center justify-center transition-colors"
            aria-label="Close zoom"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
