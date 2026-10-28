"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoverDesktopCall, setHoverDesktopCall] = useState(false);
  const [hoverMobileCall, setHoverMobileCall] = useState(false);

  const links = [
    ["About", "about"],
    ["Listings", "listings"],
    ["Services", "services"],
    ["Contact", "contact"],
  ];

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 560);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="absolute top-0 left-0 z-50 w-full text-white">
      <div className="w-full max-w-[1160px] mx-auto px-6 md:px-8 flex items-center justify-between min-h-[88px] border-b border-white/20 relative">
        {/* Wordmark */}
        <a
          href="#top"
          className="flex flex-col z-50 relative"
          onClick={() => setOpen(false)}
        >
          <span className="text-[0.85rem] font-bold tracking-[0.16em]">
            MARCI METZGER
          </span>
          <span className="text-[#dec5a0] text-[0.58rem] tracking-[0.28em] mt-1">
            THE RIDGE REALTY GROUP
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-[0.72rem] font-bold tracking-[0.14em] uppercase">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="opacity-85 hover:opacity-100 hover:text-[#dec5a0] transition-all"
            >
              {label}
            </a>
          ))}

          {/* Desktop Call Button */}
          <a
            className="ml-2 px-6 py-2.5 border border-white transition-all duration-300"
            style={{
              backgroundColor: hoverDesktopCall ? "transparent" : "white",
              color: hoverDesktopCall ? "white" : "#20312f",
            }}
            onMouseEnter={() => setHoverDesktopCall(true)}
            onMouseLeave={() => setHoverDesktopCall(false)}
            href="tel:+12069196886"
          >
            Call now
          </a>
        </div>

        <button
          className="lg:hidden text-3xl z-50 relative p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <div
          className={`absolute top-full left-0 w-full bg-[#20312f] shadow-2xl flex flex-col transition-all duration-300 overflow-hidden lg:hidden ${
            open ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-8 py-4 text-[0.8rem] font-bold tracking-[0.1em] uppercase hover:bg-white/10 transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          {/* Mobile Call Button */}
          <div className="px-8 pt-2 pb-6 mt-2 border-t border-white/10">
            <a
              href="tel:+12069196886"
              className="flex justify-center items-center w-full px-6 py-4 border border-white transition-all duration-300 text-[0.8rem] font-bold tracking-[0.1em] uppercase"
              style={{
                backgroundColor: hoverMobileCall ? "transparent" : "white",
                color: hoverMobileCall ? "white" : "#20312f",
              }}
              onMouseEnter={() => setHoverMobileCall(true)}
              onMouseLeave={() => setHoverMobileCall(false)}
            >
              Call now
            </a>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button
          type="button"
          className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-[#20312f] text-xl text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#bd6748] focus:outline-none focus:ring-2 focus:ring-[#bd6748] focus:ring-offset-2"
          aria-label="Back to top"
          title="Back to top"
          onClick={goToTop}
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </nav>
  );
}
