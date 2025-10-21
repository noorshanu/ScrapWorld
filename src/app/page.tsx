import type { Metadata } from "next";
import AboutUs from "@/component/Home/AboutUs";
import Hero from "@/component/Home/Hero";
import Slider from "@/component/Home/Slider";
import WhyUs from "@/component/Home/WhyUs";

export default function Home() {
  return (
  <>
  <Hero />
  <AboutUs />
  <Slider />
  <WhyUs />
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
