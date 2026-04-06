"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <div className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden bg-gray-50 dark:bg-white/5">
        <Image
          src={images[selectedImage]}
          alt="selected project image"
          width={1200}
          height={900}
          className="w-full h-auto"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className={`flex-shrink-0 border rounded-md overflow-hidden transition-colors ${
                selectedImage === i
                  ? "border-[#2196F3]"
                  : "border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20"
              }`}
            >
              <Image
                src={src}
                alt="project image"
                width={300}
                height={100}
                className="object-cover w-full h-16"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
