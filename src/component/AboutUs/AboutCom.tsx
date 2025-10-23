import React from "react";

const AboutCom: React.FC = () => {
  return (
    <section aria-labelledby="about-overview" className="bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <header className="mb-8 sm:mb-10">
          <h2 id="about-overview" className="text-2xl sm:text-3xl font-extrabold text-gray-900">Who We Are</h2>
          <div className="mt-3 h-[3px] w-14 bg-[#2474A5]" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <article className="lg:col-span-7 text-gray-700 leading-relaxed">
            <p className="mb-4">
              Scrap World has operated in the UAE since <strong>1983</strong>, supplying recyclable ferrous and non‑ferrous
              materials with a commitment to quality, compliance and safety.
            </p>
            <p className="mb-6">
              We maintain long‑term partnerships and provide dependable export logistics, documentation and inspection
              coordination across key global markets.
            </p>
          </article>

          <figure className="lg:col-span-5">
            {/* Placeholder visual — replace with real image later */}
            <div className="relative aspect-[16/10] w-full rounded-md border border-gray-200 bg-gray-100" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutCom;


