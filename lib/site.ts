/**
 * Alle oeffentlich sichtbaren Firmendaten hier pflegen.
 * Nicht in einzelnen Komponenten hardcoden.
 */

// --- Marke & Anzeige ---------------------------------------------------------
export const siteBrandName = "MB BAU WORKS";
export const siteDisplayName = "MB Bau Works";

// --- Domain & URL ------------------------------------------------------------
export const siteDomain = "mbbauworks.com";
export const siteWebsiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.mbbauworks.com";
export const siteWebsiteLabel = "www.mbbauworks.com";

// --- Rechtliche Firmierung ---------------------------------------------------
export const siteLegalName = "MB Bau Works UG (haftungsbeschränkt)";
export const siteLegalFormLine = "UG (haftungsbeschränkt)";

// --- Handelsregister ---------------------------------------------------------
export const siteRegisterCourt = "Amtsgericht Charlottenburg";
export const siteRegisterNumber = "HRB 289411 B";

// --- Geschaeftsfuehrung ------------------------------------------------------
export const siteManagingDirector = "Siraj Bettaieb";

// --- Kontakt -----------------------------------------------------------------
export const sitePhone =
  process.env.NEXT_PUBLIC_PHONE ?? "+49 176 83838626";
export const sitePhoneTel =
  (process.env.NEXT_PUBLIC_PHONE_TEL ?? "tel:+4917683838626").trim();
export const siteEmail = "info@mbbauworks.com";
export const siteWhatsAppUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/4917683838626";

// --- Anschrift ---------------------------------------------------------------
export const siteStreet = "Yorckstraße 12";
export const sitePostalCode = "10965";
export const siteCity = "Berlin";
export const siteCountry = "Deutschland";
export const siteCountryCode = "DE";
export const siteAddress = `${siteStreet}, ${sitePostalCode} ${siteCity}`;

// --- Einsatzgebiet & Geschaeftszeiten ----------------------------------------
export const siteRegion = "Berlin & Umgebung";
export const siteAreaServed = "Berlin und Umgebung";
export const siteBusinessHours = "Mo.–Fr. 07:00–18:00 Uhr";
/** Fuer schema.org openingHours */
export const siteBusinessHoursSchema = ["Mo-Fr 07:00-18:00"];