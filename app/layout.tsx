import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import {
  siteBrandName,
  siteWebsiteUrl,
  siteLegalName,
  sitePhone,
  siteEmail,
  siteStreet,
  sitePostalCode,
  siteCity,
  siteCountryCode,
  siteAreaServed,
  siteRegisterCourt,
  siteRegisterNumber,
  siteManagingDirector,
  siteBusinessHoursSchema,
} from "@/lib/site";
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
  metadataBase: new URL(siteWebsiteUrl),
  title: {
    default: "MB Bau Works | Ausbau & Renovierung in Berlin",
    template: "%s | MB Bau Works Berlin",
  },
  description:
    "MB Bau Works in Berlin: Trockenbau, Innenausbau, Renovierung und Baukoordination. Zulassungsfreie Leistungen aus einer Hand, weitere Gewerke mit qualifizierten Fachpartnern.",
  keywords: [
    "Trockenbau Berlin",
    "Renovierung Berlin",
    "Innenausbau Berlin",
    "Baukoordination Berlin",
    "Ausbau Berlin",
    "MB Bau Works",
    "Handwerker Berlin",
    "Umbau Berlin",
  ],
  authors: [{ name: siteLegalName }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteWebsiteUrl,
    siteName: "MB Bau Works",
    title: "MB Bau Works | Ausbau & Renovierung in Berlin",
    description:
      "Trockenbau, Innenausbau, Renovierung und Baukoordination in Berlin und Umgebung. Eigene Leistungen und qualifizierte Fachpartner.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MB Bau Works – Ausbau & Renovierung in Berlin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MB Bau Works | Ausbau & Renovierung in Berlin",
    description:
      "Trockenbau, Innenausbau, Renovierung und Baukoordination in Berlin und Umgebung.",
    images: ["/og-image.jpg"],
  },
};

// JSON-LD Structured Data: LocalBusiness / GeneralContractor
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  name: siteLegalName,
  legalName: siteLegalName,
  url: siteWebsiteUrl,
  telephone: sitePhone,
  email: siteEmail,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteStreet,
    postalCode: sitePostalCode,
    addressLocality: siteCity,
    addressCountry: siteCountryCode,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 52.488,
      longitude: 13.368,
    },
    geoRadius: "50000",
  },
  description:
    "Trockenbau, Innenausbau, Renovierung und Baukoordination in Berlin und Umgebung.",
  openingHoursSpecification: siteBusinessHoursSchema.map((hours) => {
    const [days, time] = hours.split(" ");
    const [opens, closes] = time.split("-");
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days,
      opens,
      closes,
    };
  }),
  // TODO: logo eintragen, sobald ein favicon/logo als Datei vorliegt
  // logo: `${siteWebsiteUrl}/logo.png`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
