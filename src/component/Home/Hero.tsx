"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="container mx-auto px-4 py-10 sm:py-14">
        <header className="max-w-3xl text-center mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-center">
            Recyclable Ferrous & Non‑Ferrous Metals — Export Ready
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed text-center">
            Scrap World supplies quality scrap metals with reliable logistics and global shipping.
            Explore our products and check currently available stock.
          </p>
        </header>

        <div className="mt-6 flex flex-wrap items-center gap-3 justify-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-md bg-[#2474A5] px-5 py-3 font-semibold text-white shadow hover:bg-[#1f6792]"
            >
              View Services
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 font-semibold text-gray-800 hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;