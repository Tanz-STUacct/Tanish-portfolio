import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanish Sharma — Software & Finance",
  description:
    "Final-year B.Tech Computer Engineering student at MPSTME, NMIMS Mumbai. Building practical software across full-stack web, desktop applications and machine learning.",
  openGraph: {
    title: "Tanish Sharma — Software & Finance",
    description:
      "Final-year B.Tech Computer Engineering student at MPSTME, NMIMS Mumbai.",
    type: "website",
  },
};

/* Set the theme before paint so there is no light/dark flash on load. */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
