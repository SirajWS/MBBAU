import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { siteBrandName, siteDomain, siteLegalName } from "@/lib/site";
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
  title: `${siteBrandName} – Trockenbau, Renovierung & Innenausbau`,
  description: `${siteBrandName}: Ausbau, Renovierung, Trockenbau, Baustellenservice und Projektkoordination. Transparent und professionell. Rechtlich: ${siteLegalName}.`,
  keywords: [
    siteBrandName,
    siteDomain,
    "MB BAU UG",
    "Trockenbau",
    "Renovierung",
    "Innenausbau",
    "Baukoordination",
  ],
  openGraph: {
    title: `${siteBrandName} – Bauen. Sanieren. Vertrauen.`,
    description:
      "Ausbau, Renovierung und Baukoordination – eigene Leistungen und qualifizierte Partner.",
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
