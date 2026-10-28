"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RollingNumber } from "./rolling-number";

// --- Inline hook for scroll reveal ---
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// --- Results Row Sub-component ---
type ResultsRowProps = {
  reverse?: boolean;
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
};

function ResultsRow({
  reverse,
  image,
  alt,
  eyebrow,
  title,
  body,
}: ResultsRowProps) {
  const { ref, visible } = useReveal();

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 lg:gap-24 mb-16 md:mb-24 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        width={1200}
        height={600}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`w-full aspect-[2/1] object-cover ${reverse ? "md:order-2" : ""}`}
      />
      <div className={`max-w-lg ${reverse ? "md:order-1" : ""}`}>
        <div className="text-[#bd6748] text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-3">
          {eyebrow}
        </div>
        <h3 className="font-serif text-3xl md:text-4xl text-[#20312f] leading-tight mb-4">
          {title}
        </h3>
        <p className="text-[#66736f] leading-relaxed text-base">{body}</p>
      </div>
    </article>
  );
}

// --- Main Who Component ---
export function Who() {
  return (
    <section className="py-24 md:py-32 bg-[#fffdf9]" id="about">
      <div className="w-full max-w-[1160px] mx-auto px-6 md:px-8">
        {/* Meet Marci Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative max-w-[460px] mx-auto lg:ml-auto lg:mr-0 w-full">
            <div className="absolute inset-0 translate-x-5 translate-y-5 border border-[#d9c6a8] pointer-events-none" />
            <Image
              src="/assets/face1.webp"
              alt="Marci Metzger, Pahrump realtor"
              width={730}
              height={730}
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="relative z-10 w-full h-auto object-cover"
            />
            <div className="absolute z-20 right-[-18px] bottom-6 w-[158px] bg-[#bd6748] text-white p-4 text-[0.68rem] leading-[1.55] tracking-[0.07em] uppercase shadow-[0_12px_30px_rgba(189,103,72,0.25)]">
              Your local real estate advocate
            </div>
          </div>

          {/* Copy Side */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[34px] h-[1px] bg-[#bd6748]" />
              <div className="text-[#bd6748] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
                Meet Marci
              </div>
            </div>

            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.04em] text-[#20312f] mb-6">
              A steady hand for <em className="italic">big moves.</em>
            </h2>

            <div className="space-y-5 text-[#66736f] leading-[1.85] max-w-[540px] text-[0.95rem]">
              <p>
                Marci Metzger is a REALTOR for nearly 3 decades and the trusted
                face of The Ridge Realty Group. Whether you are buying your
                first home, selling a legacy property, or investing in the next
                opportunity, you deserve a partner who knows the market and
                knows how to listen.
              </p>
              <p>
                Our team works hard every day to grow and learn, so that we may
                continue to excel in our market. Our clients deserve our best,
                and we want to make sure our best is better every year.
              </p>
            </div>

            {/* 
              Stats Container 
              - grid-cols-3 forces them into a row on ALL devices
              - gap-3 on mobile, gap-6 on desktop
            */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 pt-8 border-t border-[#dcded8]">
              <div className="flex flex-col min-w-0">
                {/* 
                  Responsive Number 
                  - clamp(1.75rem, 5vw, 3.5rem) ensures it scales down on mobile
                  - whitespace-nowrap prevents it from breaking into two lines
                */}
                <div className="font-serif text-[clamp(1.75rem,5vw,3.5rem)] leading-none tracking-[-0.04em] text-[#20312f] whitespace-nowrap">
                  <RollingNumber value={90} />
                </div>
                {/* Responsive Label - smaller text and tracking on mobile to fit */}
                <span className="text-[#66736f] text-[0.55rem] sm:text-[0.65rem] leading-[1.3] tracking-[0.02em] sm:tracking-[0.1em] uppercase mt-2 sm:mt-3">
                  clients helped in 2021
                </span>
              </div>

              <div className="flex flex-col min-w-0">
                <div className="font-serif text-[clamp(1.75rem,5vw,3.5rem)] leading-none tracking-[-0.04em] text-[#20312f] whitespace-nowrap">
                  <RollingNumber value={28.5} decimals={1} suffix="M" />
                </div>
                <span className="text-[#66736f] text-[0.55rem] sm:text-[0.65rem] leading-[1.3] tracking-[0.02em] sm:tracking-[0.1em] uppercase mt-2 sm:mt-3">
                  in sales closed in 2021
                </span>
              </div>

              <div className="flex flex-col min-w-0">
                <div className="font-serif text-[clamp(1.75rem,5vw,3.5rem)] leading-none tracking-[-0.04em] text-[#20312f] whitespace-nowrap">
                  <RollingNumber value={1} suffix=":1" />
                </div>
                <span className="text-[#66736f] text-[0.55rem] sm:text-[0.65rem] leading-[1.3] tracking-[0.02em] sm:tracking-[0.1em] uppercase mt-2 sm:mt-3">
                  personal guidance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-24 pt-24 border-t border-[#dcded8]">
          <div className="text-center font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] tracking-[-0.04em] text-[#20312f] uppercase mb-12">
            Get it <em className="italic">sold.</em>
          </div>

          <ResultsRow
            image="/assets/img_1.webp"
            alt="Bright modern kitchen in a home listing"
            eyebrow="Top residential sales"
            title="Results you can feel good about."
            body="We helped nearly 90 clients in 2021, and closed 28.5 million in sales. Our team works hard every day to grow and learn, so that we may continue to excel in our market."
          />

          <ResultsRow
            reverse
            image="/assets/img_2.webp"
            alt="Luxury home with pool at sunset"
            eyebrow="Seller guidance"
            title="Don't just list it…"
            body="Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting top dollar for your home."
          />

          <ResultsRow
            image="/assets/img_3.webp"
            alt="House keys resting on wood"
            eyebrow="Buyer guidance"
            title="Guide to buyers."
            body="Nobody knows the market like we do. Enjoy having a pro at your service — market analysis, upgrade lists, contractors on speed dial, and more."
          />
        </div>
      </div>
    </section>
  );
}
