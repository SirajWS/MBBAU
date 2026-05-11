/** Kontakt – in Produktion per .env setzen: NEXT_PUBLIC_PHONE, NEXT_PUBLIC_PHONE_TEL, NEXT_PUBLIC_WHATSAPP_URL */

/** Öffentliche Marke (Website, Logo-Text, Fließtext). */
export const siteBrandName = "MB BAU WORKS";

/** Öffentliche Domain (Vorschau / später canonical & Links). */
export const siteDomain = "mbbauworks.com";

/** Eintrag im Handelsregister / Impressum. */
export const siteLegalName = "MB BAU UG (haftungsbeschränkt)";

export const sitePhone = process.env.NEXT_PUBLIC_PHONE ?? "+49 (0) 30 123 45 67";
export const sitePhoneTel = process.env.NEXT_PUBLIC_PHONE_TEL ?? "tel:+49301234567";
export const siteWhatsAppUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/49301234567";
export const siteEmail = "info@mbbauworks.com";
export const siteRegion = "Berlin & Umgebung";
export const siteAddress = "Yorckstraße 12, 10965 Berlin";
