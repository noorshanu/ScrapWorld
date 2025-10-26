import React from "react";
import Image from "next/image";
import Link from "next/link";



const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      itemScope
      itemType="https://schema.org/Organization"
      className="w-full bg-white"
    >
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <header className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900">
            ABOUT AL FARWANIA
          </h2>
          <div className="mt-3 h-[3px] w-16 bg-gray-800/80" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Text content */}
          <article className="lg:col-span-7 text-gray-700 leading-relaxed" itemProp="description">
            <p className="mb-4">
              Since <strong>1983</strong>, Al Farwania has been a trusted buyer and supplier of
              certified <strong>oil & gas field surplus</strong> across the Middle East, Africa, and Asia.
              We specialize in <strong>OCTG</strong>, <strong>Valves</strong>, <strong>Drilling Equipment</strong>, and
              <strong> Instrumentation</strong>.
            </p>
            <p className="mb-4">
              Our priority is quality assurance and compliance: <strong>MTR verification</strong>, full
              <strong> traceability</strong>, and adherence to industry standards such as API / ASME / ISO.
              Inventory is inspected and documented to ensure reliable performance in the field.
            </p>
            <p className="mb-6">
              For sellers, we offer fair valuation, hassle‑free logistics, and rapid payment. For buyers,
              we provide <strong>MTR‑verified inventory</strong>, sub‑OEM pricing, and fast dispatch with complete
              export documentation.
              <Link href="/about-us" className="ml-2 text-[#2474A5] hover:underline font-semibold">Read more</Link>
            </p>
          </article>

          {/* Right image */}
          <figure className="lg:col-span-5">
            <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden border border-gray-200">
              <Image
                src="/bg-about.jpg"
                alt="Oil & gas surplus materials (OCTG, valves) prepared for export"
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

export default AboutUs;