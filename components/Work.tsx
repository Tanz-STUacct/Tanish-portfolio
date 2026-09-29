import { WORK } from "@/data/site";
import { Section, SectionHeader } from "./SectionHeader";

export function Work() {
  return (
    <Section id="work">
      <SectionHeader
        index={WORK.index}
        eyebrow={WORK.eyebrow}
        heading={WORK.heading}
        meta={WORK.meta}
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {WORK.projects.map((project) => {
          const inner = (
            <>
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="spec font-semibold !text-brass">
                    {project.kicker}
                  </span>
                  <span className="spec shrink-0">{project.id}</span>
                </div>

                <h3 className="font-display text-subtitle">{project.title}</h3>
                <p className="tracked mt-1 mb-3 !text-ink-faint">
                  {project.subtitle}
                </p>

                <p className="mb-4 text-body text-ink">{project.description}</p>
              </div>

              <ul className="flex flex-wrap gap-1.5 border-t border-rule pt-3">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="spec border border-rule bg-canvas px-2 py-0.5 !text-ink"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </>
          );

          const base =
            "flex h-full flex-col justify-between border border-rule bg-surface p-6 transition-colors hover:border-brass-bright";

          return project.href ? (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={base}
            >
              {inner}
            </a>
          ) : (
            <article key={project.id} className={base}>
              {inner}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
