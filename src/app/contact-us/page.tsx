import type { Metadata } from "next";
import Banner from "@/component/ContactUs/Banner";
import ContactForm from "@/component/ContactUs/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Scrap World for quotes and availability.",
};

export default function ContactPage() {
  return (
    <>
      <Banner />
      <ContactForm />
    </>
  );
}