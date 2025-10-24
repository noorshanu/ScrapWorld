import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/component/Topbar";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alfarwania.example";



export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Al Farwania | Surplus Assets & Materials",
    template: "%s | Al Farwania",
  },
  description:
    "Al Farwania supplies and trades surplus assets and materials worldwide. Explore surplus categories, available inventory, and export‑ready logistics.",
  keywords: [
    "surplus",
    "surplus inventory",
    "liquidation",
    "industrial surplus",
    "asset recovery",
    "export",
    "global logistics",
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
    siteName: "Al Farwania",
    title: "Al Farwania | Surplus Assets & Materials",
    description:
      "Supplier and trader of surplus assets and materials. Check surplus categories and available stock.",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Al Farwania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@alfarwania",
    creator: "@alfarwania",
    title: "Al Farwania | Surplus Assets & Materials",
    description:
      "Supplier and trader of surplus assets and materials. Check surplus categories and available stock.",
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
    name: "Al Farwania",
    url: siteUrl,
    logo: "/logo.jpg",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Al Farwania",
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
