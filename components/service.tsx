import Image from "next/image";

const services = [
  {
    image: "/assets/service-1.webp",
    title: "Real estate done right",
    text: "Nervous about your property adventure? Don’t be. Whether you’re getting ready to buy or sell your residence, exploring investment properties, or just curious about the market, our team ensures you get the best experience possible.",
  },
  {
    image: "/assets/service-2.webp",
    title: "Commercial & residential",
    text: "Large or small, condo or mansion, we can find it and get it at the price that’s right. Fixer-uppers? Luxury? We can help with all of it. We live, work, and play in this community.",
  },
  {
    image: "/assets/service-3.webp",
    title: "Rely on expertise",
    text: "Questions about affordability, credit, or loan options? Trust us to connect you with the right people and make sure you feel confident and educated every step of the way.",
  },
];

export function Service() {
  return (
    <section className="py-24 md:py-32 bg-[#132322] text-white" id="services">
      <div className="w-full max-w-[1160px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[34px] h-[1px] bg-[#e2c99f]" />
              <div className="text-[#e2c99f] text-[0.72rem] font-bold tracking-[0.18em] uppercase">
                How we help
              </div>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em]">
              A better way to <em className="italic">move forward.</em>
            </h2>
          </div>
          <p className="text-[#bec9c4] max-w-[330px] leading-relaxed text-sm md:text-base">
            Local knowledge is not just a nice-to-have. It is how we make the
            process feel clear, calm, and personal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="relative group overflow-hidden rounded-xl border border-white/10 bg-[#20312f] min-h-[450px] md:min-h-[500px] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20"
            >
              {/* Background Image */}
              <Image
                fill
                sizes="(max-width: 800px) 100vw, 33vw"
                src={service.image}
                alt={service.title}
                priority={i === 0 || i === 1}
                className="absolute inset-0 object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700 ease-out"
              />

              {/* Modern Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#132322] via-[#132322]/80 to-transparent opacity-90" />

              {/* Top Left Corner Label */}
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[#e2c99f] text-xs font-bold tracking-[0.1em] uppercase shadow-sm">
                  0{i + 1} · Our service
                </span>
              </div>

              {/* Content (Bottom) */}
              <div className="absolute bottom-8 left-6 right-6 z-10">
                <h3 className="font-serif text-2xl md:text-3xl mb-3 leading-tight group-hover:text-[#e2c99f] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-[#d3dcda] text-sm md:text-[0.9rem] leading-relaxed opacity-90">
                  {service.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}