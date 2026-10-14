import SectionTitle from "@/components/SectionTitle";
import type { Dictionary } from "@/lib/i18n/vi";

const ICONS = [
  // Website
  <path key="0" d="M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01" />,
  // Web app / dashboard
  <path key="1" d="M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z" />,
  // Tools / automation
  <path key="2" d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />,
  // Maintenance
  <path key="3" d="M4 12a8 8 0 0 1 14-5.3M20 4v4h-4M20 12a8 8 0 0 1-14 5.3M4 20v-4h4" />,
];

export default function Services({ services }: { services: Dictionary["services"] }) {
  return (
    <section id="services" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionTitle>{services.title}</SectionTitle>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {services.items.map((item, i) => (
          <li
            key={item.title}
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-sm"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {ICONS[i % ICONS.length]}
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-slate-600">{item.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 rounded-2xl bg-blue-50 px-6 py-4 text-center font-medium text-blue-900">
        {services.note}
      </p>
    </section>
  );
}
