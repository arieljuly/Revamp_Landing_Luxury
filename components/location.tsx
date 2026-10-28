"use client";

import { useState } from "react";

export function Location() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-[#f5f2eb]" id="contact">
      <div className="w-full max-w-[1160px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left Side: Contact Info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[34px] h-[1px] bg-[#bd6748]" />
              <div className="text-[#bd6748] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
                Call or visit
              </div>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.04em] text-[#20312f] mb-10">
              Let’s find your <em className="italic">place.</em>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <span className="text-[#bd6748] text-xl">⌖</span>
                <div>
                  <strong className="block text-[#20312f] text-[0.72rem] tracking-[0.12em] uppercase mb-1">
                    Office
                  </strong>
                  <span className="text-[#66736f] leading-relaxed">
                    3190 HW-160, Suite F<br />
                    Pahrump, Nevada 89048
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-[#bd6748] text-xl">✆</span>
                <div>
                  <strong className="block text-[#20312f] text-[0.72rem] tracking-[0.12em] uppercase mb-1">
                    Phone
                  </strong>
                  <a
                    href="tel:+12069196886"
                    className="text-[#66736f] leading-relaxed hover:text-[#bd6748] transition-colors"
                  >
                    (206) 919-6886
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-[#bd6748] text-xl">◷</span>
                <div>
                  <strong className="block text-[#20312f] text-[0.72rem] tracking-[0.12em] uppercase mb-1">
                    Office hours
                  </strong>
                  <span className="text-[#66736f] leading-relaxed">
                    Open daily · 8:00 am – 7:00 pm
                    <br />
                    Appointments outside office hours available upon request.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-4 border border-[#dcded8] bg-white outline-none focus:border-[#bd6748] transition-colors"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              className="w-full p-4 border border-[#dcded8] bg-white outline-none focus:border-[#bd6748] transition-colors"
            />
            <textarea
              placeholder="Tell us a little about what you are looking for"
              className="w-full p-4 border border-[#dcded8] bg-white outline-none focus:border-[#bd6748] transition-colors min-h-[140px] resize-y"
            />
            <button
              type="submit"
              className="self-start inline-flex items-center justify-center min-h-[52px] px-8 bg-[#20312f] text-white text-[0.73rem] font-bold tracking-[0.12em] uppercase hover:bg-[#bd6748] transition-colors duration-300 mt-2"
            >
              Send message ↗
            </button>
          </form>
        </div>

        {/* 3D Pin Map Section */}
        <div
          className="relative w-full max-w-[900px] mx-auto h-[450px] flex items-center justify-center perspective-[1000px] group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          tabIndex={0}
        >
          {/* The Pin Label */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 px-4 py-2 bg-white text-[#20312f] text-[0.7rem] font-bold uppercase tracking-widest shadow-lg transition-all duration-500 z-30 ${isHovered ? "opacity-100 translate-y-[-50px]" : "opacity-0"}`}
          >
            Visit our office
          </div>

          {/* The Pin Line */}
          <div
            className={`absolute top-0 left-1/2 w-[2px] bg-[#bd6748] transition-all duration-500 z-20 origin-bottom ${isHovered ? "h-[100px] opacity-100" : "h-0 opacity-0"}`}
          />

          {/* The Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div
              className={`absolute w-32 h-32 rounded-full border-2 border-[#bd6748]/50 opacity-0 ${isHovered ? "pin-ring" : ""}`}
            />
            <div
              className={`absolute w-32 h-32 rounded-full border-2 border-[#bd6748]/50 opacity-0 ${isHovered ? "pin-ring pin-ring-delay-1" : ""}`}
            />
            <div
              className={`absolute w-32 h-32 rounded-full border-2 border-[#bd6748]/50 opacity-0 ${isHovered ? "pin-ring pin-ring-delay-2" : ""}`}
            />
          </div>

          {/* The Map Card (Tilts back) */}
          <div
            className="relative w-full h-full bg-[#e5e3de] rounded-md overflow-hidden border border-[#dcded8] transition-transform duration-700 ease-out z-10"
            style={{
              transform: isHovered
                ? "rotateX(20deg) scale(0.95)"
                : "rotateX(0deg) scale(1)",
              transformOrigin: "bottom center",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13190577.837097859!2d-126.80299091608876!3d36.1822249804225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6399c2c4d07df%3A0xecb13a12e7fe66d3!2sThe%20Lally%20Realty%20Team!5e0!3m2!1sen!2sph!4v1793110425042!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="The Lally Realty Team location on Google Maps"
              className="grayscale-[30%] contrast-[1.1] transition-all duration-500 group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
