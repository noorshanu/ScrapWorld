"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type CountryChip = { name: string; flag: string };
const countries: CountryChip[] = [
  { name: "USA", flag: "🇺🇸" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Oman", flag: "🇴🇲" },
  { name: "India", flag: "🇮🇳" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Russia", flag: "🇷🇺" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Spain", flag: "🇪🇸" },
];
const Maps: React.FC = () => {
  return (
    <section
      aria-labelledby="map-heading"
      className=" "
    >
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <h2
          id="map-heading"
          className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center"
        >
          Our Global Reach
        </h2>
        <h3
          id="countries-heading"
          className=" text-2xl sm:text-xl font-medium text-gray-900 text-center"
        >
          COUNTRIES WE DEAL IN APART FROM UAE
        </h3>
        <div className="mt-3 h-[3px] w-14 bg-[#2474A5] mx-auto" />

        <div className="mt-8">
          <div className="relative h-full w-full=">
            <img src="/map2.png" alt="Global reach map"   className="w-full h-full "  />

          </div>
        </div>
     
      </div>
         {/* Countries marquee with flags */}
         <section aria-labelledby="countries-heading" className="rounded-md bg-[#2373a4] py-8">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent" />

            <div className="flex gap-8">
              <motion.div
                className="flex min-w-max items-center gap-4 pr-8"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              >
                {countries.map(({ name, flag }) => (
                  <div
                    key={`track1-${name}`}
                    className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-800 shadow-sm"
                  >
                    <span className="text-base" aria-hidden>
                      {flag}
                    </span>
                    <span className="font-medium">{name}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex min-w-max items-center gap-4 pr-8"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                aria-hidden
              >
                {countries.map(({ name, flag }) => (
                  <div
                    key={`track2-${name}`}
                    className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-800 shadow-sm"
                  >
                    <span className="text-base" aria-hidden>
                      {flag}
                    </span>
                    <span className="font-medium">{name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
    </section>
  );
};

export default Maps;
