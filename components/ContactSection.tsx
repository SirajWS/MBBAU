"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  siteAddress,
  siteBusinessHours,
  siteEmail,
  sitePhone,
  sitePhoneTel,
  siteRegion,
  siteWebsiteLabel,
  siteWebsiteUrl,
} from "@/lib/site";

type ContactFormValues = {
  name: string;
  email: string;
  phone?: string;
  plz: string;
  service: string;
  message: string;
};

const services = [
  "Trockenbau",
  "Bodenarbeiten",
  "Einfache Abbrucharbeiten",
  "Montagearbeiten",
  "Innenausbau und Renovierung",
  "Gebäudeservice und Baustellenservice",
  "Kabelverlegung ohne Anschluss",
  "Bauleitung und Organisation",
  "Weitere Leistung (Partnergewerke)",
];

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error ?? "Serverfehler");
      }
      reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Ein unbekannter Fehler ist aufgetreten."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="bg-brand-offwhite px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        {/* Kontaktdaten */}
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-brand-gold">
            <span className="h-px w-10 bg-brand-gold" />
            Kontakt
          </p>
          <h2 className="heading-font text-4xl uppercase text-brand-black md:text-5xl">
            Lassen Sie uns Ihr Projekt besprechen
          </h2>
          <p className="mt-4 text-sm text-brand-black/70">Einsatzgebiet: {siteRegion}</p>

          <dl className="mt-8 space-y-4 text-brand-black/85">
            <div>
              <dt className="font-semibold">Telefon:</dt>
              <dd>
                <a href={sitePhoneTel} className="text-lg font-semibold hover:text-brand-gold">
                  {sitePhone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">E-Mail:</dt>
              <dd>
                <a href={`mailto:${siteEmail}`} className="hover:text-brand-gold">
                  {siteEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Website:</dt>
              <dd>
                <a
                  href={siteWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold"
                >
                  {siteWebsiteLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Adresse:</dt>
              <dd>{siteAddress}</dd>
            </div>
            <div>
              <dt className="font-semibold">Öffnungszeiten:</dt>
              <dd>{siteBusinessHours}</dd>
            </div>
          </dl>
        </div>

        {/* Formular */}
        <div className="rounded-md bg-brand-white p-6 shadow-sm">
          {isSubmitSuccessful && !submitError ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold text-brand-black text-2xl font-bold">
                &#10003;
              </div>
              <h3 className="heading-font text-2xl uppercase text-brand-black">
                Anfrage eingegangen
              </h3>
              <p className="mt-3 text-brand-black/70">
                Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-brand-black">
                  Name <span aria-hidden="true" className="text-red-600">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded border border-brand-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", { required: "Bitte geben Sie Ihren Namen an." })}
                />
                {errors.name && (
                  <p role="alert" className="mt-1 text-sm text-red-700">{errors.name.message}</p>
                )}
              </div>

              {/* E-Mail */}
              <div>
                <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-brand-black">
                  E-Mail <span aria-hidden="true" className="text-red-600">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded border border-brand-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "Bitte geben Sie Ihre E-Mail-Adresse an.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
                    },
                  })}
                />
                {errors.email && (
                  <p role="alert" className="mt-1 text-sm text-red-700">{errors.email.message}</p>
                )}
              </div>

              {/* Telefon (optional) */}
              <div>
                <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-brand-black">
                  Telefon <span className="text-brand-black/45 text-xs font-normal">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded border border-brand-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  {...register("phone")}
                />
              </div>

              {/* PLZ / Projektort */}
              <div>
                <label htmlFor="contact-plz" className="mb-1 block text-sm font-medium text-brand-black">
                  Projektort / PLZ <span aria-hidden="true" className="text-red-600">*</span>
                </label>
                <input
                  id="contact-plz"
                  type="text"
                  placeholder="z. B. Berlin 10965"
                  className="w-full rounded border border-brand-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  aria-invalid={errors.plz ? "true" : "false"}
                  {...register("plz", { required: "Bitte Projektort oder PLZ angeben." })}
                />
                {errors.plz && (
                  <p role="alert" className="mt-1 text-sm text-red-700">{errors.plz.message}</p>
                )}
              </div>

              {/* Leistung */}
              <div>
                <label htmlFor="contact-service" className="mb-1 block text-sm font-medium text-brand-black">
                  Gewünschte Leistung <span aria-hidden="true" className="text-red-600">*</span>
                </label>
                <select
                  id="contact-service"
                  className="w-full rounded border border-brand-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  defaultValue=""
                  aria-invalid={errors.service ? "true" : "false"}
                  {...register("service", { required: "Bitte eine Leistung auswählen." })}
                >
                  <option value="" disabled>Leistung auswählen</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && (
                  <p role="alert" className="mt-1 text-sm text-red-700">{errors.service.message}</p>
                )}
              </div>

              {/* Nachricht */}
              <div>
                <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-brand-black">
                  Projektbeschreibung <span aria-hidden="true" className="text-red-600">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Kurze Beschreibung des Projekts, Umfang, Wunschtermin ..."
                  className="w-full rounded border border-brand-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  aria-invalid={errors.message ? "true" : "false"}
                  {...register("message", { required: "Bitte Ihr Projekt kurz beschreiben." })}
                />
                {errors.message && (
                  <p role="alert" className="mt-1 text-sm text-red-700">{errors.message.message}</p>
                )}
              </div>

              {submitError && (
                <p role="alert" className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-black transition hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Wird gesendet ..." : "Angebot anfordern →"}
              </button>

              <p className="text-xs text-brand-black/55">
                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung
                Ihrer Anfrage zu.{" "}
                <a href="/datenschutz" className="underline hover:text-brand-gold">
                  Datenschutzerklärung
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
