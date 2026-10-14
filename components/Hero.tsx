import Avatar from "@/components/Avatar";
import { EMAIL, ZALO_URL } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Hero({ hero }: { hero: Dictionary["hero"] }) {
  return (
    <section className="bg-gradient-to-b from-blue-50/70 to-white">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-4 py-16 sm:px-6 md:flex-row md:py-24">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            {hero.badge}
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {hero.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-blue-600 sm:text-xl">{hero.role}</p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg md:mx-0">
            {hero.pitch}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-800 hover:border-slate-400"
            >
              {hero.ctaSecondary}
            </a>
          </div>
          <ul className="mt-10 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
            {hero.facts.map((fact) => (
              <li key={fact} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                {fact}
              </li>
            ))}
          </ul>
        </div>
        <Avatar alt={hero.avatarAlt} />
      </div>
    </section>
  );
}
