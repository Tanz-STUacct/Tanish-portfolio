/* ---------------------------------------------------------------
   All site copy lives here. Edit this file to change content —
   you should not need to touch the components.
   --------------------------------------------------------------- */

export const SITE = {
  name: "Tanish Sharma",
  role: "Final-year B.Tech Student",
  location: "Mumbai, India",
  email: "tanishsharma619@gmail.com",
  // Phone is intentionally NOT rendered anywhere on the page.
  // It reaches you through the contact form instead.
  resumeHref: "/Tanish-Sharma-Resume.pdf",
};

export const NAV = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  eyebrow: "Final-year B.Tech student · Mumbai, India",
  headline: "Tanish Sharma",
  taglineLead: "Building at the intersection of ",
  taglineAccent: "software and finance",
  intro:
    "Final-year Computer Engineering student building practical software across full-stack web, desktop applications and machine learning. Currently exploring how AI and automation apply to financial and business workflows.",
  dossierTitle: "Specification // Dossier",
  dossierMeta: "2026",
  dossier: [
    { key: "Now", value: "AI Intern, Adzeeny AI Solution" },
    { key: "Studying", value: "B.Tech Computer Engineering, MPSTME NMIMS" },
    {
      key: "Open to",
      value: "Internship & full-time roles, engineering + finance-adjacent",
      accent: true,
    },
    { key: "Location", value: "Mumbai, Maharashtra, India" },
  ],
  primaryCta: { label: "View my work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

export const EXPERIENCE = {
  index: "01",
  eyebrow: "Experience",
  heading: "Professional Experience",
  roles: [
    {
      title: "AI Intern",
      org: "Adzeeny AI Solution",
      period: "Jun 2026 – Jul 2026",
      kicker: "Role // AI Intern",
      bullets: [
        "Researched AI tools and technologies.",
        "Assisted in AI workflow development and testing.",
        "Created and optimised AI prompts.",
        "Supported automation and business AI projects.",
        "Prepared reports and documentation.",
      ],
    },
  ],
};

export const WORK = {
  index: "02",
  eyebrow: "Selected Work",
  heading: "Engineered Systems & Research",
  meta: "3 entries",
  projects: [
    {
      id: "SYS_01",
      kicker: "Machine Learning & NLP",
      title: "MARD",
      subtitle: "Capstone project — team of 4",
      description:
        "Trained the model and built the PDF parsing pipeline for multi-document ingestion.",
      // NOTE: add the ML framework tag once confirmed (PyTorch / TensorFlow / scikit-learn)
      tags: ["Python", "PyMuPDF", "PDF Parsing"],
      href: null as string | null,
    },
    {
      id: "SYS_02",
      kicker: "Desktop Application",
      title: "Code Cache",
      subtitle: "Modular code template repository",
      description:
        "Desktop GUI over a MySQL database for storing, retrieving and managing reusable code snippets across languages. Full CRUD operations, with templates organised by category, description and contributor metadata.",
      tags: ["Python", "Tkinter", "MySQL", "Database Design"],
      href: null as string | null,
    },
    {
      id: "SYS_03",
      kicker: "Full-stack Web Platform",
      title: "Real Estate Website",
      subtitle: "Property listings marketplace",
      description:
        "Responsive web platform for browsing properties to buy or rent, with structured listing displays and search built for clear navigation across devices.",
      tags: ["Angular", "JavaScript", "SQL", "Responsive UI"],
      href: null as string | null,
    },
  ],
};

export const ABOUT = {
  index: "03",
  eyebrow: "Background",
  heading: "Perspective & Objectives",
  meta: "Curriculum // Trajectory",
  quote:
    "Rigorous engineering is fundamentally an exercise in discipline: stripping away surplus complexity to reveal robust, verifiable systems.",
  quoteAttribution: "Tanish Sharma",
  quoteDetail: "MPSTME, NMIMS Mumbai · Class of 2027",
  body: [
    "Final-year B.Tech Computer Engineering student at MPSTME, NMIMS Mumbai, with a strong interest in the intersection of technology and finance. I enjoy building practical, well-engineered software and am actively exploring how AI and automation apply to financial and business workflows.",
    "Open to internship and full-time opportunities across engineering and finance-adjacent roles.",
  ],
  facts: [
    {
      index: "01",
      key: "Education",
      value: "B.Tech Computer Engineering, MPSTME NMIMS Mumbai · 2023–2027",
    },
    {
      index: "02",
      key: "Focus",
      value:
        "Software engineering, machine learning, and applications of both to financial and business problems.",
    },
  ],
};

export const STACK = {
  index: "04",
  eyebrow: "Technical Toolkit",
  heading: "Stack & Methods",
  meta: "Capability matrix",
  groups: [
    {
      index: "01",
      title: "Languages",
      items: ["Python", "C++", "Java", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      index: "02",
      title: "Frameworks & Tools",
      items: ["Node.js", "MySQL", "Pandas", "NumPy", "OpenCV", "Git", "Jupyter"],
    },
    {
      index: "03",
      title: "Web",
      items: ["AngularJS", "Responsive Design"],
    },
    {
      index: "04",
      title: "Data & Modelling",
      items: ["R", "Statistical Modelling", "Exploratory Data Analysis"],
    },
  ],
};

export const CONTACT = {
  index: "05",
  eyebrow: "Contact",
  headingLead: "Get ",
  headingAccent: "in",
  headingTail: " touch",
  intro:
    "Open to internship and full-time opportunities in software engineering and finance-adjacent technical roles. Send a note and I'll get back to you.",
  directLabel: "Direct communication",
  fields: [
    { key: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { key: "Location", value: "Mumbai, Maharashtra, India", href: null },
  ],
};
