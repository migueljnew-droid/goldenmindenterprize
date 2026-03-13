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
  title: "Golden Mind Enterprize LLC | Technology & Innovation Holding",
  description:
    "Golden Mind Enterprize LLC — technology holding company powering next-generation applications, AI systems, and creative technology platforms.",
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
    images: [{ url: "/logos/GMEBLACK.png", width: 1200, height: 630, alt: "Golden Mind Enterprize" }],
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
        {children}
      </body>
    </html>
  );
}
