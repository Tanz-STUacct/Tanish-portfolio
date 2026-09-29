import { ABOUT } from "@/data/site";
import { Section, SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        index={ABOUT.index}
        eyebrow={ABOUT.eyebrow}
        heading={ABOUT.heading}
        meta={ABOUT.meta}
      />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
        {/* ---- editorial pull quote ---- */}
        <figure className="border-l-2 border-brass-bright py-2 pl-6 lg:col-span-5">
          <blockquote className="mb-4 font-display text-title leading-snug italic">
            “{ABOUT.quote}”
          </blockquote>
          <figcaption>
            <p className="spec font-semibold !text-ink">
              {ABOUT.quoteAttribution}
            </p>
            <p className="spec mt-1">{ABOUT.quoteDetail}</p>
          </figcaption>
        </figure>

        {/* ---- narrative ---- */}
        <div className="border-t border-rule pt-6 lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          {ABOUT.body.map((para, i) => (
            <p
              key={para.slice(0, 32)}
              className={
                i === 0
                  ? "mb-4 text-body-lg text-ink"
                  : "mb-4 text-body text-ink-soft"
              }
            >
              {para}
            </p>
          ))}

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ABOUT.facts.map((fact) => (
              <div
                key={fact.index}
                className="border border-rule bg-surface p-4"
              >
                <span className="spec !text-brass">
                  {fact.index} // {fact.key}
                </span>
                <p className="mt-1 text-body-sm text-ink">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
