/** Kontakt – in Produktion per .env setzen: NEXT_PUBLIC_PHONE, NEXT_PUBLIC_PHONE_TEL, NEXT_PUBLIC_WHATSAPP_URL */

/** Öffentliche Marke (Website, Logo-Text, Fließtext). */
export const siteBrandName = "MB BAU WORKS";

/** Öffentliche Domain (Vorschau / später canonical & Links). */
export const siteDomain = "mbbauworks.com";

/** Öffentliche Website (Kontakt, später ggf. canonical). */
export const siteWebsiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.mbbauworks.com";
export const siteWebsiteLabel = "www.mbbauworks.com";

/** Eintrag im Handelsregister / Impressum. */
export const siteLegalName = "MB BAU UG (haftungsbeschränkt)";

export type SitePhoneContact = {
  role: string;
  /** z. B. Name in Klammern — optional */
  name?: string;
  label: string;
  tel: string;
};

/** Feste Kontaktnummern (können per NEXT_PUBLIC_PHONE / NEXT_PUBLIC_PHONE_TEL nur die primäre Zeile überschreiben). */
export const sitePhoneContacts: readonly SitePhoneContact[] = [
  {
    role: "Operative Leitung",
    name: "Mohamed Bagdadi (MB)",
    label: "+49 163 5863436",
    tel: "tel:+491635863436",
  },
  {
    role: "Geschäftsführer",
    label: "+49 176 83838626",
    tel: "tel:+4917683838626",
  },
] as const;

const primaryPhone = sitePhoneContacts[0];

/** Primäre Anzeige (z. B. Footer) — per Env überschreibbar. */
export const sitePhone = process.env.NEXT_PUBLIC_PHONE ?? primaryPhone.label;
export const sitePhoneTel = (process.env.NEXT_PUBLIC_PHONE_TEL ?? primaryPhone.tel).trim();

/** WhatsApp: operative Leitung (Mobil), per Env überschreibbar. */
export const siteWhatsAppUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/491635863436";

export const siteEmail = "info@mbbauworks.com";
export const siteRegion = "Berlin & Umgebung";
export const siteAddress = "Yorckstraße 12, 10965 Berlin";
