"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const photos = [
  "/assets/pg-1.webp",
  "/assets/pg-2.webp",
  "/assets/pg-3.webp",
  "/assets/pg-4.webp",
  "/assets/pg-5.webp",
  "/assets/pg-6.webp",
  "/assets/pg-7.webp",
];

export function PhotoGallery() {
  const [active, setActive] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3D Tilt State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Lock scroll for lightbox
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [active]);

  // Handle 3D Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate tilt (max 10 degrees)
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setTilt({ x: 0, y: 0 }); // Reset tilt on change
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      className="py-24 md:py-32 bg-[#fffdf9] overflow-hidden"
      id="gallery"
    >
      <div className="w-full max-w-[1160px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[34px] h-[1px] bg-[#bd6748]" />
              <div className="text-[#bd6748] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
                A glimpse of home
              </div>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.04em] text-[#20312f]">
              Spaces worth <em className="italic">coming home to.</em>
            </h2>
          </div>
          <p className="text-[#66736f] max-w-[290px] leading-relaxed text-sm md:text-base hidden md:block">
            From desert calm to thoughtful interiors, we help you see what is
            possible in every property.
          </p>
        </div>

        {/* 3D Carousel Area */}
        <div className="flex flex-col items-center">
          <div className="perspective-1000 w-full max-w-[900px] mb-8">
            {/* The Card */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActive(photos[currentIndex])}
              className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-md overflow-hidden bg-[#f5f2eb] cursor-pointer group transition-transform duration-200 ease-out transform-3d shadow-2xl"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              {/* Base Image */}
              <Image
                fill
                sizes="(max-width: 1200px) 100vw, 900px"
                src={photos[currentIndex]}
                alt={`Pahrump property gallery image ${currentIndex + 1}`}
                quality={90}
                className="object-cover"
              />

              {/* Overlay / Depth Layer */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center pointer-events-none"></div>

              {/* Decorative Corner Layer (Pops out slightly) */}
              <div
                className="absolute top-6 left-6 bg-[#bd6748] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg"
                style={{ transform: "translateZ(40px)" }}
              >
                0{currentIndex + 1} / 0{photos.length}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={prevPhoto}
              className="w-12 h-12 rounded-full border border-[#dcded8] flex items-center justify-center text-[#20312f] hover:bg-[#20312f] hover:text-white hover:border-[#20312f] transition-all duration-300"
              aria-label="Previous photo"
            >
              ←
            </button>

            <div className="flex gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-[#bd6748] w-6"
                      : "bg-[#dcded8] hover:bg-[#bd6748]/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPhoto}
              className="w-12 h-12 rounded-full border border-[#dcded8] flex items-center justify-center text-[#20312f] hover:bg-[#20312f] hover:text-white hover:border-[#20312f] transition-all duration-300"
              aria-label="Next photo"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal (Unchanged) */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#132322]/95 p-4 md:p-10 backdrop-blur-md"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 z-50 text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-3xl transition-all focus:outline-none focus:ring-2 focus:ring-white"
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="relative w-full max-w-[1200px] h-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              fill
              sizes="100vw"
              src={active}
              alt="Expanded property"
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
