import SectionTitle from "@/components/SectionTitle";
import type { Dictionary } from "@/lib/i18n/vi";

export default function About({ about }: { about: Dictionary["about"] }) {
  return (
    <section id="about" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <SectionTitle>{about.title}</SectionTitle>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {about.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-slate-700"
            >
              <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
