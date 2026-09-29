import { SITE } from "@/data/site";
import { CONTAINER } from "./SectionHeader";

export function Footer() {
  return (
    <footer className="w-full bg-surface">
      <div
        className={`${CONTAINER} flex flex-col items-center justify-between gap-4 py-8 md:flex-row`}
      >
        <span className="spec text-center md:text-left">
          © {new Date().getFullYear()} {SITE.name}. MPSTME NMIMS Mumbai. All
          rights reserved.
        </span>
        <a
          href={`mailto:${SITE.email}`}
          className="spec transition-colors hover:!text-brass"
        >
          {SITE.email}
        </a>
      </div>
    </footer>
  );
}
