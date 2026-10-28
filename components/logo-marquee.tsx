"use client";

import Image from "next/image";

const LOGOS = [
  "/assets/logo_1.webp",
  "/assets/logo-2.webp",
  "/assets/logo-3.webp",
  "/assets/logo-4.webp",
];

export function LogoMarquee() {
  return (
    <div className="w-full bg-[#fffdf9] py-12 md:py-16 overflow-hidden border-y border-[#dcded8]">
      <div className="w-full max-w-[1160px] mx-auto px-6 md:px-8 mb-8">
        <h2 className="text-center text-[#66736f] text-[0.65rem] font-bold tracking-[0.2em] uppercase">
          Trusted by industry leaders
        </h2>
      </div>

      {/* 
        The Marquee Container 
        Using group to pause on hover
      */}
      <div className="relative flex overflow-x-hidden group">
        {/* First sequence of logos */}
        <div className="flex animate-marquee whitespace-nowrap items-center gap-16 md:gap-24 px-8 md:px-12">
          {LOGOS.map((src, index) => (
            <div
              key={`${src}-1`}
              className="relative w-32 md:w-40 h-16 md:h-20 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={src}
                alt={`Partner Logo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Duplicated sequence for seamless looping */}
        <div
          className="absolute top-0 flex animate-marquee whitespace-nowrap items-center gap-16 md:gap-24 px-8 md:px-12"
          aria-hidden="true"
        >
          {LOGOS.map((src, index) => (
            <div
              key={`${src}-2`}
              className="relative w-32 md:w-40 h-16 md:h-20 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={src}
                alt={`Partner Logo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
