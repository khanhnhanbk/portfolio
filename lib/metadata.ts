import type { Metadata } from "next";
import { SITE_URL } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/vi";

export type Locale = "vi" | "en";

export const LOCALE_PATHS: Record<Locale, string> = { vi: "/", en: "/en" };

export function buildMetadata(dict: Dictionary, locale: Locale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: LOCALE_PATHS[locale],
      languages: { vi: LOCALE_PATHS.vi, en: LOCALE_PATHS.en },
    },
    openGraph: {
      type: "website",
      title: dict.meta.title,
      description: dict.meta.description,
      locale: dict.meta.ogLocale,
      url: LOCALE_PATHS[locale],
    },
  };
}
