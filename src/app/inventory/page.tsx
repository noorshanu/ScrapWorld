import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inventory",
  description: "Browse certified oil & gas surplus categories: OCTG, Valves, Drilling Equipment, Instrumentation.",
};

export default function InventoryIndexPage() {
  const categories = [
    { name: "OCTG", href: "/inventory/octg", description: "Casing, tubing, drill pipe with MTRs." },
    { name: "Valves", href: "/inventory/valves", description: "Gate, globe, check, ball and control valves." },
    { name: "Drilling Equipment", href: "/inventory/drilling-equipment", description: "Handling tools, BOP spares, down‑hole equipment." },
    { name: "Instrumentation", href: "/inventory/instrumentation", description: "Gauges, transmitters, fittings and accessories." },
  ];

  return (
    <main className="container mx-auto px-4 py-10 sm:py-14">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Buy Surplus Inventory</h1>
        <div className="mx-auto mt-3 h-[3px] w-14 bg-[#2474A5]" />
        <p className="mt-4 text-gray-700">Certified categories with traceable documentation and fast dispatch.</p>
      </header>

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c) => (
          <Link key={c.name} href={c.href} className="rounded-md border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
            <h2 className="text-lg font-bold text-gray-900">{c.name}</h2>
            <p className="mt-2 text-sm text-gray-700">{c.description}</p>
            <span className="mt-4 inline-block text-[#2474A5] font-semibold">Explore →</span>
          </Link>
        ))}
      </section>
    </main>
  );
}


