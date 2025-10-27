import type { Metadata } from "next";
import InventoryCatalog from "../../component/Home/InventoryCatalog";

export const metadata: Metadata = {
  title: "Inventory",
  description: "Browse certified oil & gas surplus categories: OCTG, Valves, Drilling Equipment, Instrumentation.",
};

export default function InventoryIndexPage() {
  return (
    <main>
      <InventoryCatalog />
    </main>
  );
}


