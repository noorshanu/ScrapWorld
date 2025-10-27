"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Background video hero

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
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
      </motion.div>
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center">
        <section className="relative w-full">
          <div className="container mx-auto px-4 py-10 sm:py-14">
            <motion.header
              className="max-w-3xl text-center mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center"
              >
                Certified Oil & Gas Surplus: Buy, Sell, and Manage Your Assets.
              </motion.h1>
              <motion.p variants={itemVariants} className="mt-4 text-white/90 leading-relaxed text-center">
                Your trusted partner for certified OCTG, Valves, Drilling Equipment, and Industrial Surplus.
              </motion.p>
            </motion.header>

            <motion.div
              className="mt-6 flex flex-wrap items-center gap-3 justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/inventory"
                  className="inline-flex items-center justify-center rounded-md bg-[#2474A5] px-5 py-3 font-semibold text-white shadow hover:bg-[#1f6792]"
                >
                  Browse Inventory
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/sell"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 font-semibold text-white hover:bg-gray-50"
                >
                  Sell Your Assets
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Slider;