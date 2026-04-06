"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden bg-gray-50 dark:bg-white/5 relative w-full aspect-[16/9]">
        <Image
          src={images[selectedImage]}
          alt="selected project image"
          fill
          className="object-contain"
        />
      </div>

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
  );
}
