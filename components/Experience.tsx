import SectionTitle from "@/components/SectionTitle";
import Tag from "@/components/Tag";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Experience({ experience }: { experience: Dictionary["experience"] }) {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionTitle>{experience.title}</SectionTitle>
      <ol className="relative mt-10 space-y-10 border-l-2 border-slate-200 pl-6 sm:pl-8">
        {experience.items.map((item) => (
          <li key={item.company} className="relative">
            <span
              className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-blue-600 ring-2 ring-blue-200 sm:-left-[41px]"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-slate-900">
                {item.company}
                <span className="font-normal text-slate-500"> · {item.role}</span>
              </h3>
              <p className="text-sm font-medium text-slate-500">{item.dates}</p>
            </div>
            <p className="mt-2 leading-relaxed text-slate-600">{item.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
