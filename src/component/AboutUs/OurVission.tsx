import React from "react";
import { FaEye, FaBullseye, FaUsers } from "react-icons/fa";

const cards = [
  {
    icon: <FaEye className="text-2xl text-[#2474A5]" />,
    title: "Vision",
    desc: "To be a trusted global partner in responsible recycling and supply.",
  },
  {
    icon: <FaBullseye className="text-2xl text-[#2474A5]" />,
    title: "Mission",
    desc: "Deliver consistent quality, compliance and logistics excellence for customers.",
  },
  {
    icon: <FaUsers className="text-2xl text-[#2474A5]" />,
    title: "Values",
    desc: "Integrity, safety, sustainability and long‑term relationships.",
  },
];

const OurVission: React.FC = () => {
  return (
    <section aria-labelledby="vision" className="bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <h2 id="vision" className="text-2xl sm:text-3xl font-extrabold text-gray-900">Vision, Mission & Values</h2>
        <div className="mt-3 h-[3px] w-14 bg-[#2474A5]" />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article key={c.title} className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                {c.icon}
                <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVission;


