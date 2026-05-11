/** Kontakt – in Produktion per .env setzen: NEXT_PUBLIC_PHONE, NEXT_PUBLIC_PHONE_TEL, NEXT_PUBLIC_WHATSAPP_URL */

/** Öffentliche Marke (Website, Logo-Text, Fließtext). */
export const siteBrandName = "MB BAU";

/** Eintrag im Handelsregister / Impressum. */
export const siteLegalName = "MB BAU UG (haftungsbeschränkt)";

export const sitePhone = process.env.NEXT_PUBLIC_PHONE ?? "+49 (0) 30 123 45 67";
export const sitePhoneTel = process.env.NEXT_PUBLIC_PHONE_TEL ?? "tel:+49301234567";
export const siteWhatsAppUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/49301234567";
export const siteEmail = "info@mb-bau.de";
export const siteRegion = "Berlin & Umgebung";
