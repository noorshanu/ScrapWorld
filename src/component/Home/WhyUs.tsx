import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const items = [
"Decades of industry experience (Al Farwania)",
  "Strict grading and quality assurance",
  "On‑time documentation and compliance",
  "Global export with reliable logistics",
];

const WhyUs: React.FC = () => {
  return (
    <section aria-labelledby="whyus-heading" className="bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <h2 id="whyus-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Why Choose Al Farwania
        </h2>
        <div className="mt-3 h-[3px] w-14 bg-[#2474A5]" />

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((text) => (
            <li key={text} className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 text-[#2474A5]" />
              <span className="text-gray-800">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;