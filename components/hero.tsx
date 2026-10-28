"use client";

import Image from "next/image";
import { useState } from "react";
import { RollingNumber } from "./rolling-number";
import { MoveUpRight } from "lucide-react";

export function Hero() {
  const [hoverExplore, setHoverExplore] = useState(false);
  const [hoverCall, setHoverCall] = useState(false);

  return (
    <section
      className="relative min-h-[90vh] lg:min-h-[720px] flex items-center pt-40 pb-20 lg:pt-48 lg:pb-24 overflow-hidden"
      id="top"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bg-1.jpeg"
          alt="Pahrump, Nevada landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#132322]/90 via-[#132322]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#132322]/90 via-[#132322]/20 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1160px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-end">
          {/* Left Side: Headline & CTAs */}
          <div className="max-w-[720px]">
            <div className="text-[#e2c99f] text-[0.72rem] font-bold tracking-[0.18em] uppercase mb-5">
              Pahrump, Nevada · Your next chapter starts here
            </div>

            <h1
              className="font-serif text-[clamp(3.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.04em] mb-6"
              style={{ color: "white" }}
            >
              Find the place
              <br />
              <em className="italic font-light">you belong.</em>
            </h1>

            <p
              className="text-[1.05rem] leading-[1.7] max-w-[480px] mb-10"
              style={{ color: "#edf1ed" }}
            >
              Real estate guidance with local perspective, honest advice, and
              nearly three decades of experience in the Pahrump community.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Explore Listings */}
              <a
                href="#listings"
                onMouseEnter={() => setHoverExplore(true)}
                onMouseLeave={() => setHoverExplore(false)}
                className="inline-flex items-center justify-center gap-3 min-h-[52px] px-8 text-[0.73rem] font-bold tracking-[0.12em] uppercase transition-all duration-300 border border-white"
                style={{
                  backgroundColor: hoverExplore ? "transparent" : "white",
                  color: hoverExplore ? "white" : "#20312f",
                }}
              >
                Explore listings{" "}
                <span className="text-sm leading-none">
                  <MoveUpRight />
                </span>
              </a>

              {/* Call Marci */}
              <a
                href="tel:+12069196886"
                onMouseEnter={() => setHoverCall(true)}
                onMouseLeave={() => setHoverCall(false)}
                className="inline-flex items-center justify-center min-h-[52px] px-8 text-[0.73rem] font-bold tracking-[0.12em] uppercase transition-all duration-300 border border-white"
                style={{
                  backgroundColor: hoverCall ? "white" : "transparent",
                  color: hoverCall ? "#20312f" : "white",
                }}
              >
                Call Marci
              </a>
            </div>
          </div>

          {/* Right Side: Meta Stats */}
          <div className="flex flex-row lg:flex-col gap-8 lg:gap-10 lg:pb-2 border-t border-white/20 lg:border-t-0 pt-6 lg:pt-0">
            <div>
              <div
                className="text-[0.65rem] tracking-[0.12em] uppercase font-bold mb-1.5 opacity-80"
                style={{ color: "#edf1ed" }}
              >
                Local expertise
              </div>
              <div
                className="text-xl lg:text-2xl font-serif tracking-normal flex items-baseline gap-1"
                style={{ color: "#e2c99f" }}
              >
                <RollingNumber value={28} />
                <span>+ years</span>
              </div>
            </div>

            <div>
              <div
                className="text-[0.65rem] tracking-[0.12em] uppercase font-bold mb-1.5 opacity-80"
                style={{ color: "#edf1ed" }}
              >
                Sales closed
              </div>
              <div
                className="text-xl lg:text-2xl font-serif tracking-normal flex items-baseline gap-1"
                style={{ color: "#e2c99f" }}
              >
                <span>$</span>
                <RollingNumber value={28.5} decimals={1} suffix="M" />
                <span className="ml-1">in 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
