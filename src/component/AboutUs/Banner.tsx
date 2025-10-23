"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner: React.FC = () => {
  return (
    <section aria-label="About banner" className="relative w-full overflow-hidden">
      <div className="relative h-[36vh] sm:h-[44vh] md:h-[54vh]">
        <Image
          src="/bg-about.jpg"
          alt="About Scrap World background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              ABOUT US
            </motion.h1>
            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
              className="mt-3 max-w-2xl text-white/90"
            >
              Operating since 1983 — quality scrap metals and dependable export logistics.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;