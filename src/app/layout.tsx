import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/component/Topbar";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.scrapworld.example";



export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Scrap World | Recyclable Metals & Materials",
    template: "%s | Scrap World",
  },
  description:
    "Scrap World supplies and trades recyclable ferrous and non‑ferrous metals worldwide. Explore products, available stock, and export-ready logistics.",
  keywords: [
    "scrap",
    "scrap metal",
    "ferrous",
    "non‑ferrous",
    "recycling",
    "export",
    "metal trading",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Scrap World",
    title: "Scrap World | Recyclable Metals & Materials",
    description:
      "Supplier and trader of recyclable ferrous and non‑ferrous metals. Check products and available stock.",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Scrap World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@scrapworld",
    creator: "@scrapworld",
    title: "Scrap World | Recyclable Metals & Materials",
    description:
      "Supplier and trader of recyclable ferrous and non‑ferrous metals. Check products and available stock.",
    images: ["/globe.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
