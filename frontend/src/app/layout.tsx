import type { Metadata } from "next";
import "./globals.css";
import { ebGaramond, fraunces, inter } from "./fonts";
import { SiteFooter, SiteHeader } from "@/components/site/SiteChrome";
import { StructuredData } from "@/components/site/StructuredData";
import { discoveryTopics, publisherName, siteName, siteUrl } from "@/lib/discovery";

export const metadata: Metadata = {
  metadataBase: new URL("https://whydive.org"),
  applicationName: siteName,
  title: {
    default: "WhyDive | Evidence, Reasoning, Judgment",
    template: "%s | WhyDive",
  },
  description:
    "WhyDive is a framework for understanding and improving how human beings move from evidence to action.",
  keywords: discoveryTopics,
  authors: [{ name: "Elvis Agard" }],
  creator: "Elvis Agard",
  publisher: publisherName,
  category: "Ideas, research, education, reasoning, judgment",
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
  openGraph: {
    title: "WhyDive | Evidence, Reasoning, Judgment",
    description:
      "WhyDive is a framework for understanding and improving how human beings move from evidence to action.",
    url: "https://whydive.org",
    siteName: "WhyDive",
    type: "website",
    images: [
      {
        url: "/images/whydive/hero-threshold-water-desktop.png",
        width: 1600,
        height: 768,
        alt: "A lone figure standing near a reflective pool at a bright architectural threshold.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhyDive | Evidence, Reasoning, Judgment",
    description:
      "WhyDive is a framework for understanding and improving how human beings move from evidence to action.",
    images: ["/images/whydive/hero-threshold-water-desktop.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: publisherName,
    url: siteUrl,
    brand: {
      "@type": "Brand",
      name: siteName,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    about: discoveryTopics.map((topic) => ({
      "@type": "Thing",
      name: topic,
    })),
  };

  return (
    <html data-theme="fantasy" lang="en">
      <body className={`${fraunces.variable} ${ebGaramond.variable} ${inter.variable} antialiased`}>
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
