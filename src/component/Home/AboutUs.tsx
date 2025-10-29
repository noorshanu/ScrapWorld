"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";



const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      itemScope
      itemType="https://schema.org/Organization"
      className="w-full bg-white"
    >
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <header className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900">
            ABOUT AL FARWANIA
          </h2>
          <div className="mt-3 h-[3px] w-16 bg-gray-800/80" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Text content */}
          <article className="lg:col-span-7 text-gray-700 leading-relaxed" itemProp="description">
            <p className="mb-4">
             <strong>Al Farwania </strong>has been a trusted buyer and supplier of
              certified <strong>oil & gas field surplus</strong> across the Middle East, Africa, and Asia.
              We specialize in <strong>OCTG</strong>, <strong>Valves</strong>, <strong>Drilling Equipment</strong>, and
              <strong> Instrumentation</strong>.
            </p>
            <p className="mb-4">
              Our priority is quality assurance and compliance: <strong>MTR verification</strong>, full
              <strong> traceability</strong>, and adherence to industry standards such as API / ASME / ISO.
              Inventory is inspected and documented to ensure reliable performance in the field.
            </p>
            <p className="mb-6">
              For sellers, we offer fair valuation, hassle‑free logistics, and rapid payment. For buyers,
              we provide <strong>MTR‑verified inventory</strong>, sub‑OEM pricing, and fast dispatch with complete
              export documentation.
              <Link href="/about-us" className="ml-2 text-[#2474A5] hover:underline font-semibold">Read more</Link>
            </p>
          </article>

          {/* Right slider */}
          <figure className="lg:col-span-5">
            <AboutSlider />
          </figure>
        </div>

 
      </div>
    </section>
  );
};

export default AboutUs;

// Local lightweight slider for About image panel
const SLIDES = [
  { src: "/pip.jpg", alt: "OCTG and valves prepared for export" },
  { src: "/fit.jpg", alt: "Logistics and export coordination" },
  { src: "/cable.jpg", alt: "Industrial surplus warehousing" },
];

const AUTOPLAY_MS = 4500;

const AboutSlider: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const goTo = React.useCallback((i: number) => {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  const next = React.useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = React.useCallback(() => goTo(index - 1), [index, goTo]);

  React.useEffect(() => {
    if (paused || SLIDES.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const slide = SLIDES[index];

  return (
    <section
      aria-label="About image slider"
      className="relative w-full aspect-[16/9] rounded-md overflow-hidden border border-gray-200"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.4, scale: 1.02 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {SLIDES.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            aria-label="Next image"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </>
      )}

      {SLIDES.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {SLIDES.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${active ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"}`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};