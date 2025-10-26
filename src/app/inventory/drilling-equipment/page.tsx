import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drilling Equipment Inventory",
  description: "Surplus drilling equipment: handling tools, BOP spares, down‑hole tools.",
};

export default function DrillingEquipmentPage() {
  const items = [
    { title: "Elevators & Slips", details: "API certified, various sizes, inspected" },
    { title: "BOP Spares", details: "Annular elements, control components, documentation available" },
    { title: "Down‑hole Tools", details: "Stabilizers, jars, subs with inspection records" },
  ];

  return (
    <main className="container mx-auto px-4 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Drilling Equipment</h1>
      <div className="mt-3 h-[3px] w-14 bg-[#2474A5]" />
      <p className="mt-4 text-gray-700 max-w-2xl">Handling tools, BOP spares, and down‑hole tools ready for deployment.</p>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <article key={it.title} className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">{it.title}</h2>
            <p className="mt-2 text-sm text-gray-700">{it.details}</p>
          </article>
        ))}
      </section>
    </main>
  );
}


