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
    "Discover Al Farwania — a trusted supplier and trader of surplus assets and materials. Browse categories and check available stock.",
  keywords: [
    "al farwania",
    "surplus supplier",
    "industrial surplus",
    "asset liquidation",
    "surplus inventory",
    "available stock",
  ],
};
