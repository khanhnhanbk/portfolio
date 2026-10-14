import { EMAIL, PHONE, PHONE_DISPLAY, ZALO_URL } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Contact({ contact }: { contact: Dictionary["contact"] }) {
  const channels = [
    {
      label: contact.zalo,
      value: PHONE_DISPLAY,
      href: ZALO_URL,
      external: true,
      icon: <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5z" />,
    },
    {
      label: contact.phone,
      value: PHONE_DISPLAY,
      href: `tel:${PHONE}`,
      external: false,
      icon: (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
      ),
    },
    {
      label: contact.email,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      external: false,
      icon: <path d="M4 4h16v16H4zM4 6l8 7 8-7" />,
    },
  ];

  return (
    <section id="contact" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{contact.title}</h2>
        <p className="mt-4 text-slate-300">{contact.subtitle}</p>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
                className="flex h-full flex-col items-center gap-3 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-blue-600 hover:ring-blue-500"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {c.icon}
                </svg>
                <span className="text-lg font-semibold">{c.label}</span>
                <span className="break-all text-sm text-slate-300">{c.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
