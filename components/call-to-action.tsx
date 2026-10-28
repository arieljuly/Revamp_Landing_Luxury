import { MoveUpRight } from "lucide-react";
export function CallToAction() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#d9c6a8]">
      {/* Background Image with Soft-Light Blend */}
      <div
        className="absolute inset-0 bg-[url('/assets/bg-2.jpg')] bg-cover bg-center mix-blend-soft-light opacity-60"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1160px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-16">
          {/* Left Side: Headline */}
          <div className="max-w-[600px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[34px] h-[1px] bg-[#20312f]" />
              <div className="text-[#20312f] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
                Ready when you are
              </div>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-[#20312f]">
              Your next chapter is closer than you think.
            </h2>
          </div>

          {/* Right Side: Copy & Button */}
          <div className="max-w-[310px] w-full flex flex-col gap-6">
            <p className="text-[#4d5c57] leading-relaxed text-base">
              Let’s talk about what’s next — no pressure, no guesswork, just a
              clear plan for your move.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 self-start min-h-[52px] px-8 bg-[#20312f] text-white text-[0.73rem] font-bold tracking-[0.12em] uppercase hover:bg-[#bd6748] transition-colors duration-300"
            >
              Start a conversation{" "}
              <span className="text-sm leading-none"><MoveUpRight /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
