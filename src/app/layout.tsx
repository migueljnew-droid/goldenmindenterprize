import type { Metadata } from "next";
import { Cinzel, Jost } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldenmindenterprize.com"),
  title: "Golden Mind Enterprize | Apps, AI & Creative Technology",
  description:
    "Explore BioPoint and Omni, plus AI infrastructure and creative tools from Golden Mind Enterprize LLC, founded by Miguel Louis Jiminez.",
  alternates: { canonical: "/" },
  keywords: [
    "Golden Mind Enterprize",
    "technology holding company",
    "AI",
    "innovation",
    "Miguel Jiminez",
    "software",
    "enterprise",
  ],
  openGraph: {
    title: "Golden Mind Enterprize LLC",
    description:
      "The holding company powering next-generation apps, AI systems, and creative technology.",
    url: "https://goldenmindenterprize.com",
    siteName: "Golden Mind Enterprize",
    type: "website",
    images: [{ url: "/logos/GMEBLACK.png", width: 1536, height: 1024, alt: "Golden Mind Enterprize" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Mind Enterprize LLC",
    description: "Technology & Innovation Holding Company",
    images: ["/logos/GMEBLACK.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${cinzel.variable} ${jost.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Golden Mind Enterprize LLC",
          url: "https://goldenmindenterprize.com",
          logo: "https://goldenmindenterprize.com/logos/GMECOINNOBG.png",
          email: "contact@goldenmindenterprize.com",
          founder: { "@type": "Person", name: "Miguel Louis Jiminez" },
        }).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
