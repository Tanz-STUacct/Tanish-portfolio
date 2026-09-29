import { EXPERIENCE } from "@/data/site";
import { Section, SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        index={EXPERIENCE.index}
        eyebrow={EXPERIENCE.eyebrow}
        heading={EXPERIENCE.heading}
      />

      <div className="space-y-6">
        {EXPERIENCE.roles.map((role) => (
          <article
            key={`${role.org}-${role.title}`}
            className="border border-l-4 border-rule border-l-brass-bright bg-surface p-6 md:p-8"
          >
            <div className="mb-4 flex flex-col justify-between border-b border-rule pb-3 md:flex-row md:items-baseline">
              <div>
                <h3 className="font-display text-subtitle">
                  {role.title} — {role.org}
                </h3>
                <span className="spec !text-brass">{role.kicker}</span>
              </div>
              <span className="spec mt-2 shrink-0 border border-rule bg-surface-alt px-2.5 py-1 !text-ink md:mt-0">
                {role.period}
              </span>
            </div>

            <ul className="space-y-2">
              {role.bullets.map((bullet, i) => (
                <li key={bullet} className="flex items-start text-body text-ink-soft">
                  <span className="spec mr-3 shrink-0 pt-1 !text-brass select-none">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
