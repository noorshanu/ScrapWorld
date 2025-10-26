import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valves Inventory",
  description: "Surplus valves: gate, globe, check, ball and control valves.",
};

export default function ValvesPage() {
  const items = [
    { title: "Gate Valves", details: "API 600, 150#–600#, Flanged, New surplus" },
    { title: "Ball Valves", details: "Trunnion mounted, Fire safe, ISO 5211" },
    { title: "Control Valves", details: "Positioners included, Mfr test reports" },
  ];

  return (
    <main className="container mx-auto px-4 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Valves</h1>
      <div className="mt-3 h-[3px] w-14 bg-[#2474A5]" />
      <p className="mt-4 text-gray-700 max-w-2xl">Gate, globe, check, ball and control valves with test reports.</p>

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


