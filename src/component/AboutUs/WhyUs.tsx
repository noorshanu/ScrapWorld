import React from "react";
import { FaShieldAlt, FaHandshake, FaTruckLoading, FaLeaf } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-2xl text-[#2474A5]" />,
    title: "Quality & Compliance",
    desc: "Strict grading, documentation and safety across our operations.",
  },
  {
    icon: <FaHandshake className="text-2xl text-[#2474A5]" />,
    title: "Trusted Partnerships",
    desc: "Decades‑long relationships driven by transparency and delivery.",
  },
  {
    icon: <FaTruckLoading className="text-2xl text-[#2474A5]" />,
    title: "Export Logistics",
    desc: "Timely container stuffing, customs and global shipping.",
  },
  {
    icon: <FaLeaf className="text-2xl text-[#2474A5]" />,
    title: "Sustainability",
    desc: "Responsible recycling aligned with environmental best practices.",
  },
];

const AboutWhyUs: React.FC = () => {
  return (
    <section aria-labelledby="about-why" className="bg-gray-50">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <h2 id="about-why" className="text-2xl sm:text-3xl font-extrabold text-gray-900">Why Choose Us</h2>
        <div className="mt-3 h-[3px] w-14 bg-[#2474A5]" />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <article key={f.title} className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                {f.icon}
                <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyUs;


