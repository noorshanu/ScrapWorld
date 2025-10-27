import React from "react";
import Image from "next/image";

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
     <strong>Al Farwania</strong> has been a trusted buyer and supplier of certified
              <strong> oil & gas field surplus</strong> across the Middle East, Africa, and Asia. We specialize in
              <strong> OCTG</strong>, <strong> Valves</strong>, <strong> Drilling Equipment</strong>, and
              <strong> Instrumentation</strong>.
            </p>
            <p className="mb-4">
              Our quality program centers on <strong>MTR verification</strong>, <strong>traceability</strong>, and compliance
              with industry standards (API / ASME / ISO). Inventory is inspected and documented to ensure reliable
              performance in the field.
            </p>
            <p className="mb-6">
              Sellers benefit from fair valuation, hassle‑free logistics, and rapid payment. Buyers get
              <strong> MTR‑verified inventory</strong>, sub‑OEM pricing, and fast dispatch with complete export documentation.
            </p>
          </article>

          <figure className="lg:col-span-5">
            <div className="relative aspect-[16/10] w-full rounded-md border border-gray-200 overflow-hidden">
              <Image
                src="/about2.jpeg"
                alt="Oil & gas surplus materials (OCTG, valves) organized for export"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutCom;


