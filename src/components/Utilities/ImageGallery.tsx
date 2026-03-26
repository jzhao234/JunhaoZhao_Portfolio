"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images, alt}: { images: string[], alt: string[] }) {
    const [selectedImage, setSelectedImage] = useState(0);

    return(
        <div className="flex flex-col gap-4 mt-3 sm:mt-10 mx-3 sm:mx-10"> 

            <div className="blueBorder relative w-full max-w-4xl aspect-[16/9] rounded-xl overflow-hidden"> 
                <Image
                    src={images[selectedImage]}
                    alt="selected project image"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex gap-2 overflow-x-auto">
                {images.map((src, i) => (
                    <button
                        key={i}
                        onClick={() => setSelectedImage(i)}
                        className={`border rounded-md overflow-hidden ${selectedImage === i ? "border-blue-500" : "border-gray-300"}`}
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
        </div>
    )
}