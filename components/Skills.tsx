import SectionTitle from "@/components/SectionTitle";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Skills({ skills }: { skills: Dictionary["skills"] }) {
  return (
    <section id="skills" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <SectionTitle>{skills.title}</SectionTitle>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {skills.groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-800"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
