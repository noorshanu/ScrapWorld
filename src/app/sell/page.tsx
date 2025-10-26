import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sell Your Surplus",
  description: "Liquidate oil & gas surplus with fair valuation, hassle‑free logistics, and rapid payment.",
};

export default function SellPage() {
  const steps = [
    { title: "1) Share Details", text: "Send skus/specs, photos, quantities, and location." },
    { title: "2) Fair Valuation", text: "We review certifications/MTRs and provide a firm offer." },
    { title: "3) Logistics", text: "Pickup, export docs, and HAZMAT handled by our team." },
    { title: "4) Rapid Payment", text: "Swift settlement via agreed method upon pickup or delivery." },
  ];

  return (
    <main className="container mx-auto px-4 py-10 sm:py-14">
      <header className="max-w-3xl text-center mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Sell Your Surplus</h1>
        <div className="mx-auto mt-3 h-[3px] w-14 bg-[#2474A5]" />
        <p className="mt-4 text-gray-700">Turn idle oil & gas inventory into cash with a certified buyer.</p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((s) => (
          <article key={s.title} className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">{s.title}</h2>
            <p className="mt-2 text-sm text-gray-700">{s.text}</p>
          </article>
        ))}
      </section>

      <div className="mt-10 text-center">
        <Link href="/contact-us" className="inline-flex items-center justify-center rounded-md bg-[#2474A5] px-6 py-3 font-semibold text-white shadow hover:bg-[#1f6792]">
          Start Selling
        </Link>
      </div>
    </main>
  );
}


