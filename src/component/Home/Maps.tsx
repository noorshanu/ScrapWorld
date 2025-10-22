"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  Graticule,
  Sphere,
} from "react-simple-maps";

type Location = { name: string; coordinates: [number, number] };

// Source: Natural Earth via world-atlas
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LOCATIONS: Location[] = [
  { name: "USA", coordinates: [-98.5795, 39.8283] },
  { name: "Canada", coordinates: [-106.3468, 56.1304] },
  { name: "Russia", coordinates: [105.3188, 61.524] },
  { name: "Spain", coordinates: [-3.7492, 40.4637] },
  { name: "Turkey", coordinates: [35.2433, 38.9637] },
  { name: "Saudi Arabia", coordinates: [45.0792, 23.8859] },
  { name: "Qatar", coordinates: [51.1839, 25.3548] },
  { name: "Oman", coordinates: [57.5836, 21.4735] },
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "Thailand", coordinates: [100.9925, 15.87] },
  { name: "South Korea", coordinates: [127.7669, 35.9078] },
  { name: "Australia", coordinates: [133.7751, -25.2744] },
];
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
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);
  return (
    <section
      aria-labelledby="map-heading"
      className="bg-white border-t-gray-200  border-t-1 border-b-gray-200 border-b-1 mt-4"
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

        <div className=" ">
          {isMounted ? (
            <ComposableMap
              projectionConfig={{ scale: 170 }}
              style={{ width: "100%", height: "50vh", minHeight: 520 }}
            >
              <ZoomableGroup
                center={[15, 15]}
                zoom={1}
                minZoom={0.8}
                maxZoom={5}
              >
                <Sphere fill="#F9FAFB" stroke="#2474A5" strokeWidth={1} />
                <Graticule
                  stroke="#E5E7EB"
                  strokeWidth={0.6}
                  strokeOpacity={0.7}
                />

                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: { fill: "#E7ECF3", outline: "none" },
                          hover: { fill: "#DDE5F0", outline: "none" },
                          pressed: { fill: "#CBD7E7", outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {LOCATIONS.map(({ name, coordinates }) => (
                  <Marker key={name} coordinates={coordinates}>
                    <g>
                      <circle
                        r={5}
                        fill="#2474A5"
                        stroke="#ffffff"
                        strokeWidth={2}
                      />
                    </g>
                    <g>
                      <text
                        textAnchor="start"
                        x={10}
                        y={4}
                        style={{
                          fontFamily: "system-ui, sans-serif",
                          fontSize: 11,
                          paintOrder: "stroke",
                          stroke: "#ffffff",
                          strokeWidth: 3,
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          fill: "#0F172A",
                        }}
                      >
                        {name}
                      </text>
                    </g>
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>
          ) : (
            <div
              className="h-[56vh] min-h-[520px] w-full animate-pulse rounded-xl bg-gray-100"
              aria-hidden="true"
            />
          )}
        </div>
     
      </div>
         {/* Countries marquee with flags */}
         <section aria-labelledby="countries-heading" className="rounded-md bg-gray-50 py-8">
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
