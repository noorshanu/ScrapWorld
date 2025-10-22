import type { Metadata } from "next";
import AboutUs from "@/component/Home/AboutUs";
import Hero from "@/component/Home/Hero";
import Slider from "@/component/Home/Slider";
import WhyUs from "@/component/Home/WhyUs";
import Services from "@/component/Home/Services";
import Cta from "@/component/Home/Cta";
import FAQ from "@/component/Home/FAQ";
import Maps from "@/component/Home/Maps";

export default function Home() {
  return (
  <>

  <Slider />
  <Hero />
  <Services />
  <AboutUs />
  <WhyUs />
  <Cta />
  <Maps />
  <FAQ />
  </>
  );
}

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover Scrap World — a trusted supplier and trader of recyclable ferrous and non‑ferrous metals. Browse products and check available stock.",
  keywords: [
    "scrap world",
    "scrap supplier",
    "metal recycling",
    "ferrous",
    "non‑ferrous",
    "available stock",
  ],
};
