"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutHero: React.FC = () => {
  return (
    <section aria-label="About banner" className="relative w-full overflow-hidden">
      <div className="relative h-[36vh] sm:h-[46vh] md:h-[56vh]">
        {/* Placeholder background (user will replace with image) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b3d59] via-[#2474A5] to-[#51a6d9]" />
        {/* Animated shapes */}
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/10 blur-2xl"
          animate={{ y: [0, -16, 0], x: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              About Scrap World
            </motion.h1>
            <motion.p
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              className="mt-3 max-w-2xl text-white/90"
            >
              Since 1983, delivering reliable scrap metal sourcing, quality, and export logistics.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;


