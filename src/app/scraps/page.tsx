import type { Metadata } from "next";
import Banner from "@/component/ScrapsSection/Banner";

export const metadata: Metadata = {
  title: "Scraps",
  description: "Browse recyclable metal scrap grades available for export.",
};

export default function ScrapsPage() {
  return (
    <>
      <Banner />
    </>
  );
}