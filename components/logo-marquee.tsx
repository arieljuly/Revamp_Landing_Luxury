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
    <div className="w-full bg-[#fffdf9] py-16 border-y border-[#dcded8] overflow-hidden relative">
      <div className="w-full max-w-[1160px] mx-auto px-6 md:px-8 mb-10">
        <h2 className="text-center text-[#66736f] text-[0.65rem] font-bold tracking-[0.2em] uppercase">
          Trusted by industry leaders
        </h2>
      </div>

      {/* Edge Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[#fffdf9] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[#fffdf9] to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden">
        
        {/* Sequence 1 */}
        <div className="flex animate-marquee whitespace-nowrap items-center gap-16 md:gap-24 px-8 md:px-12 shrink-0">
          {LOGOS.map((src, index) => (
            <div
              key={`${src}-1`}
              className="relative w-32 md:w-40 h-16 md:h-20 flex-shrink-0"
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

        {/* Sequence 2 (Duplicate for seamless loop) */}
        <div 
          className="flex animate-marquee whitespace-nowrap items-center gap-16 md:gap-24 px-8 md:px-12 shrink-0"
          aria-hidden="true"
        >
          {LOGOS.map((src, index) => (
            <div
              key={`${src}-2`}
              className="relative w-32 md:w-40 h-16 md:h-20 flex-shrink-0"
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