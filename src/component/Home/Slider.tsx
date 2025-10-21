"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Slide = {
  src: string;
  alt: string;
  heading?: string;
  subheading?: string;
};

const SLIDES: Slide[] = [
  {
    src: "/Slider/banner_3.jpg",
    alt: "Scrap yard banner 3",
    heading: "WELCOME TO",
    subheading: "SCRAP WORLD",
  },
  {
    src: "/Slider/banner_4.jpg",
    alt: "Scrap yard banner 4",
    heading: "WELCOME TO",
    subheading: "SCRAP WORLD",
  },
];

const AUTOPLAY_MS = 5000;

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const goTo = React.useCallback((index: number) => {
    const next = (index + SLIDES.length) % SLIDES.length;
    setActiveIndex(next);
  }, []);

  const goNext = React.useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = React.useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Autoplay with pause on hover/focus
  React.useEffect(() => {
    if (isPaused || SLIDES.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPaused]);

  const slide = SLIDES[activeIndex];

  return (
    <section
      aria-label="Hero slider"
      className="relative w-full h-[50vh] sm:h-[62vh]  overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.4, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center select-none px-4">
              {slide.heading && (
                <motion.h2
                  key={`h-${activeIndex}`}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow"
                >
                  {slide.heading}
                </motion.h2>
              )}
              {slide.subheading && (
                <motion.h3
                  key={`sh-${activeIndex}`}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
                  className="mt-2 text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow"
                >
                  {slide.subheading}
                </motion.h3>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      {SLIDES.length > 1 && (
        <>
          <button
            aria-label="Previous slide"
            onClick={goPrev}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/85 text-gray-900 shadow hover:bg-white"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            aria-label="Next slide"
            onClick={goNext}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/85 text-gray-900 shadow hover:bg-white"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </>
      )}

      {/* Dots */}
      {SLIDES.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {SLIDES.map((_, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  isActive ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
                }`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Slider;