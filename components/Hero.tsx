import { HERO } from "@/data/site";
import { CONTAINER } from "./SectionHeader";

export function Hero() {
  return (
    <section
      id="top"
      className="grid-lines relative overflow-hidden border-b border-rule py-16 md:py-24"
    >
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* ---- left: the pitch ---- */}
          <div className="lg:col-span-8">
            <div className="mb-3 flex items-center gap-2">
              <span
                className="inline-block size-2 bg-brass-bright"
                aria-hidden="true"
              />
              <span className="spec !text-brass">{HERO.eyebrow}</span>
            </div>

            <h1 className="font-display text-display-m tracking-tight md:text-display">
              {HERO.headline}
            </h1>

            <p className="mt-2 font-display text-title">
              {HERO.taglineLead}
              <em className="text-brass italic">{HERO.taglineAccent}</em>.
            </p>

            <p className="mt-5 max-w-2xl text-body-lg text-ink-soft">
              {HERO.intro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={HERO.primaryCta.href}
                className="tracked border border-transparent bg-ink px-6 py-3.5 text-canvas transition-opacity hover:opacity-90"
              >
                {HERO.primaryCta.label}
              </a>
              <a
                href={HERO.secondaryCta.href}
                className="tracked border border-ink px-6 py-3.5 text-ink transition-colors hover:bg-ink hover:text-canvas"
              >
                {HERO.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* ---- right: institutional spec sheet ---- */}
          <aside className="border border-rule bg-surface p-4 lg:col-span-4">
            <div className="mb-4 flex items-center justify-between border-b border-rule pb-1.5">
              <span className="spec">{HERO.dossierTitle}</span>
              <span className="spec !text-brass">{HERO.dossierMeta}</span>
            </div>
            <dl>
              {HERO.dossier.map((row, i) => (
                <div
                  key={row.key}
                  className={i > 0 ? "mt-4 border-t border-rule pt-3" : ""}
                >
                  <dt className="spec">{row.key}</dt>
                  <dd
                    className={`mt-1 text-body ${
                      row.accent
                        ? "font-semibold text-brass"
                        : "font-semibold text-ink"
                    }`}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
