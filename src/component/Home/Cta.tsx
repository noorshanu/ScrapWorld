import React from "react";
import Link from "next/link";

const Cta: React.FC = () => {
  return (
    <section aria-labelledby="cta-heading" className="relative bg-[#2474A5] text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <header className="md:col-span-2">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl font-extrabold">
              Ready to source quality surplus metals?
            </h2>
            <p className="mt-2 text-white/90">
              Get quotes, check available stock, or discuss your logistics needs with our team.
            </p>
          </header>
          <div className="md:justify-self-end">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-semibold text-[#2474A5] shadow hover:bg-white/95"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;


