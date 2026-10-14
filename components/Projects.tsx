import SectionTitle from "@/components/SectionTitle";
import Tag from "@/components/Tag";
import { PROJECT_LINKS } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n/vi";

export default function Projects({ projects }: { projects: Dictionary["projects"] }) {
  return (
    <section id="projects" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <SectionTitle>{projects.title}</SectionTitle>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.items.map((project) => {
            const href = PROJECT_LINKS[project.id];
            return (
              <li
                key={project.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ul>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className="mt-6 inline-flex w-fit items-center gap-1 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
                  >
                    {projects.viewLive} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
