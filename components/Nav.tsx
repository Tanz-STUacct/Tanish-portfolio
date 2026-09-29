"use client";

import { useEffect, useState } from "react";
import { NAV, SITE } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";
import { CONTAINER } from "./SectionHeader";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Close the mobile menu when the viewport grows past the breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const close = () => setOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  // Underline the nav item for whichever section is currently in view.
  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-canvas">
      <nav className={`${CONTAINER} flex h-16 items-center justify-between gap-4`}>
        <a
          href="#top"
          className="font-display text-subtitle font-semibold tracking-tight whitespace-nowrap"
        >
          {SITE.name}
        </a>

        <ul className="hidden items-center gap-5 md:flex lg:gap-8">
          {NAV.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`tracked border-b transition-colors hover:text-brass ${
                    isActive
                      ? "border-brass-bright text-ink"
                      : "border-transparent text-ink-soft"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={SITE.resumeHref}
            className="tracked hidden items-center gap-2 border border-ink px-3 py-1.5 text-ink transition-colors hover:bg-ink hover:text-canvas sm:inline-flex"
          >
            Résumé
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-8 place-items-center border border-rule text-ink transition-colors hover:border-brass-bright md:hidden"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-rule bg-canvas md:hidden">
          <ul className={`${CONTAINER} flex flex-col py-2`}>
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="tracked block py-3 text-ink-soft"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={SITE.resumeHref}
                onClick={() => setOpen(false)}
                className="tracked block py-3 text-brass"
              >
                Résumé ↓
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
