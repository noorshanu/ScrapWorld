import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OCTG Inventory",
  description: "Certified OCTG: casing, tubing, drill pipe with MTR verification.",
};

export default function OctgPage() {
  const items = [
    { title: "API 5CT Casing", details: '5 1/2" 23# N80Q R3, MTR included' },
    { title: "API 5CT Tubing", details: '2 7/8" J55, Premium connection, MTR available' },
    { title: "Drill Pipe", details: '4" S135, Tool joints, Inspected' },
  ];

  return (
    <main className="container mx-auto px-4 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">OCTG</h1>
      <div className="mt-3 h-[3px] w-14 bg-[#2474A5]" />
      <p className="mt-4 text-gray-700 max-w-2xl">Casing, tubing, and drill pipe with traceable MTRs and inspection records.</p>

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


