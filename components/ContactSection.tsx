"use client";

import { useForm } from "react-hook-form";
import { siteAddress, siteEmail, sitePhone, sitePhoneTel, siteRegion } from "@/lib/site";

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    console.log("Kontaktanfrage", data);
    reset();
  };

  return (
    <section id="kontakt" className="bg-brand-offwhite px-4 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-brand-gold">
            <span className="h-px w-10 bg-brand-gold" />
            Kontakt
          </p>
          <h2 className="heading-font text-4xl uppercase text-brand-black md:text-5xl">
            Lassen Sie uns Ihr Projekt besprechen
          </h2>
          <p className="mt-4 text-sm text-brand-black/70">Einsatzgebiet: {siteRegion}</p>
          <dl className="mt-8 space-y-3 text-brand-black/85">
            <div>
              <dt className="font-semibold">Telefon:</dt>
              <dd>
                {sitePhoneTel ? (
                  <a href={sitePhoneTel} className="text-lg font-semibold hover:text-brand-gold">
                    {sitePhone}
                  </a>
                ) : (
                  <span className="text-lg font-semibold text-brand-black">{sitePhone}</span>
                )}
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
              <dt className="font-semibold">Adresse:</dt>
              <dd>{siteAddress}</dd>
            </div>
            <div>
              <dt className="font-semibold">Öffnungszeiten:</dt>
              <dd>Mo–Fr 07:00–18:00 Uhr</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-md bg-brand-white p-6 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded border border-brand-black/20 px-4 py-3"
                {...register("name", { required: "Bitte Namen eingeben." })}
              />
              {errors.name && <p className="mt-1 text-sm text-red-700">{errors.name.message}</p>}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Telefon"
                className="w-full rounded border border-brand-black/20 px-4 py-3"
                {...register("phone", { required: "Bitte Telefonnummer eingeben." })}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-700">{errors.phone.message}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="E-Mail"
                className="w-full rounded border border-brand-black/20 px-4 py-3"
                {...register("email", {
                  required: "Bitte E-Mail eingeben.",
                  pattern: { value: /\S+@\S+\.\S+/, message: "Bitte gültige E-Mail angeben." },
                })}
              />
              {errors.email && <p className="mt-1 text-sm text-red-700">{errors.email.message}</p>}
            </div>

            <div>
              <select
                className="w-full rounded border border-brand-black/20 px-4 py-3"
                defaultValue=""
                {...register("service", { required: "Bitte Leistung auswählen." })}
              >
                <option value="" disabled>
                  Leistung auswählen
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-700">{errors.service.message}</p>
              )}
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Nachricht"
                className="w-full rounded border border-brand-black/20 px-4 py-3"
                {...register("message", { required: "Bitte Nachricht eingeben." })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-700">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-black transition hover:-translate-y-0.5"
            >
              Angebot anfordern →
            </button>

            {isSubmitSuccessful && (
              <p className="text-sm text-green-700">
                Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.
              </p>
            )}
          </form>

          <p className="mt-4 text-xs text-brand-black/65">
            Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß DSGVO zur Bearbeitung
            Ihrer Anfrage zu.
          </p>
        </div>
      </div>
    </section>
  );
}
