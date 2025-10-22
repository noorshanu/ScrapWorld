"use client";

import React from "react";

type QA = { q: string; a: string };

const QA_LIST: QA[] = [
  {
    q: "Which metals do you trade?",
    a: "We trade both ferrous and non‑ferrous materials with strict grading standards.",
  },
  {
    q: "Do you handle export documentation?",
    a: "Yes. We handle customs, inspection coordination, and all export documentation.",
  },
  {
    q: "How fast can you ship?",
    a: "Lead times depend on destination and volume, typically within 2–4 weeks.",
  },
  {
    q: "What are your minimum order quantities (MOQ)?",
    a: "MOQ varies by material and destination. Typical container MOQ starts around 24–26 MT depending on the grade.",
  },
  {
    q: "Which Incoterms do you support?",
    a: "We commonly work with FOB, CFR, and CIF. Other terms can be arranged based on destination and partner requirements.",
  },
  {
    q: "What payment terms do you accept?",
    a: "Standard terms include LC at sight and TT advance/against documents, subject to KYC and compliance checks.",
  },
  {
    q: "Can I arrange third‑party inspection?",
    a: "Yes. We welcome third‑party inspection agencies and can coordinate yard access and documentation.",
  },
  {
    q: "How are materials packed?",
    a: "Materials are typically packed loose, baled, or bundled depending on grade and customer preference for optimal loading.",
  },
  {
    q: "Are there any restricted materials?",
    a: "We do not trade hazardous, radioactive, or prohibited materials. All shipments comply with local and international regulations.",
  },
  {
    q: "How do I request a quote?",
    a: "Share your required grade, quantity, destination port, and preferred terms via our contact page. We'll respond with availability and pricing.",
  },
];

const FAQ: React.FC = () => {
  // Inject FAQPage JSON‑LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QA_LIST.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center">Frequently Asked Questions</h2>
        <div className="mt-3 h-[3px] w-14 bg-[#2474A5] mx-auto" />

        <div className="mt-8 rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
          {QA_LIST.map((item, idx) => (
            <details key={item.q} className="group border-t first:border-t-0 border-gray-200">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-4 py-4 font-semibold text-gray-900 hover:bg-gray-50">
                <span>{item.q}</span>
                <svg
                  className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </summary>
              <div id={`faq-${idx}`} className="px-4 pb-4 text-gray-700 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


