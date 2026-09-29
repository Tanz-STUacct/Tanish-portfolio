import { STACK } from "@/data/site";
import { Section, SectionHeader } from "./SectionHeader";

export function Stack() {
  return (
    <Section id="stack" tinted>
      <SectionHeader
        index={STACK.index}
        eyebrow={STACK.eyebrow}
        heading={STACK.heading}
        meta={STACK.meta}
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {STACK.groups.map((group) => (
          <div key={group.index} className="border border-rule bg-canvas p-6">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-rule pb-1.5">
              <span className="spec !text-brass">Category // {group.index}</span>
              <h3 className="font-display text-subtitle">{group.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="spec border border-rule bg-surface px-3 py-1.5 !text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
