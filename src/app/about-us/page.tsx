import type { Metadata } from "next";
import Banner from "@/component/AboutUs/Banner";
import AboutCom from "@/component/AboutUs/AboutCom";
import AboutWhyUs from "@/component/AboutUs/WhyUs";
import OurVission from "@/component/AboutUs/OurVission";
import AboutCTA from "@/component/AboutUs/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Scrap World — operating since 1983, supplying recyclable ferrous and non‑ferrous metals with quality and reliable export logistics.",
};

export default function AboutPage() {
  return (
    <>
      <Banner />
      <AboutCom />
      <AboutWhyUs />
      <OurVission />
      <AboutCTA />
    </>
  );
}


