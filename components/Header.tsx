"use client";

import { useState } from "react";
import LanguageSwitch from "@/components/LanguageSwitch";
import type { Dictionary } from "@/lib/i18n/vi";
import type { Locale } from "@/lib/metadata";

export default function Header({
  header,
  languageSwitch,
  locale,
}: {
  header: Dictionary["header"];
  languageSwitch: string;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="text-lg font-bold tracking-tight text-slate-900">
          {header.logo}
          <span className="text-blue-600">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitch locale={locale} label={languageSwitch} />
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {header.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? header.closeMenu : header.openMenu}
          className="-mr-2 rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col px-4 py-3">
            {header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-md px-2 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <LanguageSwitch locale={locale} label={languageSwitch} />
              <a
                href="#contact"
                onClick={close}
                className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                {header.cta}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
