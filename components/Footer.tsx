import LanguageSwitch from "@/components/LanguageSwitch";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Locale } from "@/lib/metadata";

export default function Footer({
  footer,
  languageSwitch,
  locale,
}: {
  footer: Dictionary["footer"];
  languageSwitch: string;
  locale: Locale;
}) {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {footer.copyright}
        </p>
        <LanguageSwitch locale={locale} label={languageSwitch} />
      </div>
    </footer>
  );
}
