import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-offwhite px-4 text-center">
      <p className="heading-font text-[8rem] leading-none text-brand-gold opacity-30 select-none">
        404
      </p>
      <h1 className="heading-font mt-4 text-4xl uppercase text-brand-black">
        Seite nicht gefunden
      </h1>
      <p className="mt-4 text-brand-black/65">
        Diese Seite existiert nicht oder wurde verschoben.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-brand-gold px-6 py-3 font-semibold text-brand-black transition hover:-translate-y-0.5"
      >
        Zur Startseite
      </Link>
    </div>
  );
}
