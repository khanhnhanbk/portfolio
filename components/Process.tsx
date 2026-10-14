import SectionTitle from "@/components/SectionTitle";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Process({ process }: { process: Dictionary["process"] }) {
  return (
    <section id="process" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionTitle>{process.title}</SectionTitle>
      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, i) => (
          <li key={step} className="rounded-2xl border border-slate-200 p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
              {i + 1}
            </span>
            <p className="mt-4 font-medium text-slate-800">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
