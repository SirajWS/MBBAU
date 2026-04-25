import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "700"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "MB Bau GmbH – Ihr Bauunternehmen in der Region",
  description:
    "MB Bau GmbH bietet Neubau, Sanierung, Trockenbau, Fliesenarbeiten, Stahl- und Betonbau sowie Abbrucharbeiten. Zuverlässig, präzise, professionell.",
  keywords: [
    "Bauunternehmen",
    "Neubau",
    "Sanierung",
    "Trockenbau",
    "Fliesenarbeiten",
    "Stahlbau",
    "Abbruch",
  ],
  openGraph: {
    title: "MB Bau GmbH – Ihr Bauunternehmen in der Region",
    description:
      "Zuverlässig. Präzise. Professionell. MB Bau GmbH für Neubau und Sanierung.",
    images: ["/og-image-placeholder.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
