import { LOCALE_PATHS, type Locale } from "@/lib/metadata";

const LABELS: Record<Locale, string> = { vi: "VI", en: "EN" };

export default function LanguageSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-slate-200 p-0.5 text-xs font-semibold"
    >
      {(Object.keys(LABELS) as Locale[]).map((l) =>
        l === locale ? (
          <span
            key={l}
            aria-current="true"
            className="rounded-full bg-slate-900 px-2.5 py-1 text-white"
          >
            {LABELS[l]}
          </span>
        ) : (
          // Plain <a>: each locale has its own root layout, so a full reload is expected.
          <a
            key={l}
            href={LOCALE_PATHS[l]}
            hrefLang={l}
            className="rounded-full px-2.5 py-1 text-slate-500 hover:text-slate-900"
          >
            {LABELS[l]}
          </a>
        ),
      )}
    </div>
  );
}
