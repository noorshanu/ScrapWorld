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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Scrap World",
    url: siteUrl,
    logo: "/logo.png",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Scrap World",
    url: siteUrl,
  };
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Topbar />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
