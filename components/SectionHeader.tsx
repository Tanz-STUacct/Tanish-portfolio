export const CONTAINER = "mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-16";

export function SectionHeader({
  index,
  eyebrow,
  heading,
  meta,
  headingNode,
}: {
  index: string;
  eyebrow: string;
  heading?: string;
  meta?: string;
  headingNode?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-2 border-b border-rule pb-3 md:flex-row md:items-end">
      <div>
        <span className="spec mb-1.5 block !text-brass">
          {index} / {eyebrow}
        </span>
        <h2 className="font-display text-headline-m md:text-headline">
          {headingNode ?? heading}
        </h2>
      </div>
      {meta ? <span className="spec shrink-0 pb-1">{meta}</span> : null}
    </div>
  );
}

export function Section({
  id,
  children,
  tinted = false,
}: {
  id: string;
  children: React.ReactNode;
  tinted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`border-b border-rule py-16 md:py-20 ${
        tinted ? "bg-surface-alt" : ""
      }`}
    >
      <div className={CONTAINER}>{children}</div>
    </section>
  );
}
