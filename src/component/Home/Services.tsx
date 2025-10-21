import React from "react";
import { FaShip, FaIndustry, FaRecycle, FaWarehouse } from "react-icons/fa";

type Service = { icon: React.ReactNode; title: string; description: string };

const SERVICES: Service[] = [
  {
    icon: <FaIndustry className="text-2xl text-[#2474A5]" />,
    title: "Ferrous & Non‑Ferrous Trading",
    description:
      "Sourcing and supply of quality recyclable metals with strict grading and documentation.",
  },
  {
    icon: <FaWarehouse className="text-2xl text-[#2474A5]" />,
    title: "Stock & Yard Management",
    description:
      "Well‑organized yards and inventory processes to ensure consistent availability.",
  },
  {
    icon: <FaRecycle className="text-2xl text-[#2474A5]" />,
    title: "Sustainable Practices",
    description:
      "Environmentally responsible handling aligned with global recycling standards.",
  },
  {
    icon: <FaShip className="text-2xl text-[#2474A5]" />,
    title: "Export & Logistics",
    description:
      "Container stuffing, customs, and global shipping with reliable lead times.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <header className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Our Services</h2>
          <div className="mx-auto mt-3 h-[3px] w-14 bg-[#2474A5]" />
          <p className="mt-4 text-gray-700">Everything you need for dependable scrap metal supply.</p>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <article key={s.title} className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                {s.icon}
                <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


