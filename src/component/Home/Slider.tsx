"use client";

import React from "react";
import { motion } from "framer-motion";

// Background video hero

const Slider: React.FC = () => {
  const [isPaused, setIsPaused] = React.useState(false);
 

  return (
    <section
      aria-label="Hero video"
      className="relative w-full h-[62vh] sm:h-[78vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bgvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Background video"
      />
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center select-none px-4">
          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow"
          >
            WELCOME TO AL FARWANIA
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default Slider;