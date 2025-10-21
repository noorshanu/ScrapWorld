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
        <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
        <div className="mt-3 h-[3px] w-14 bg-[#2474A5]" />

        <div className="mt-8 divide-y divide-gray-200 rounded-md border border-gray-200">
          {QA_LIST.map((item) => (
            <details key={item.q} className="group open:bg-gray-50">
              <summary className="cursor-pointer list-none px-4 py-4 font-semibold text-gray-900">
                {item.q}
              </summary>
              <div className="px-4 pb-4 text-gray-700">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


