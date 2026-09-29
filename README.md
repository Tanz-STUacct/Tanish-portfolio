# Tanish Sharma — Portfolio

Personal portfolio site. Next.js 16 (App Router) + React 19 + Tailwind CSS v4.
Statically prerendered, so it deploys anywhere and costs nothing to host.

---

## Running it locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Other commands:

```bash
npm run build        # production build
npm start            # serve the production build
npm run lint         # eslint
```

---

## Editing content

**All copy lives in `data/site.ts`.** Change text there — you should not need to
touch any component to update wording, add a project, or change a stack tag.

| What you want to change | Where |
| --- | --- |
| Name, email, résumé link | `SITE` |
| Nav items | `NAV` |
| Hero headline, intro, spec-sheet rows | `HERO` |
| Internship / roles | `EXPERIENCE` |
| Projects (title, description, tags, links) | `WORK` |
| Quote and about paragraphs | `ABOUT` |
| Skill categories | `STACK` |
| Contact intro and details | `CONTACT` |

Colours and fonts are defined as CSS variables at the top of `app/globals.css`
(`:root` for light, `.dark` for dark). Change them in one place and the whole
site follows.

### Adding a link to a project

Each project in `WORK.projects` has an `href` field, currently `null`. Set it to
a GitHub or live-demo URL and that card becomes clickable automatically:

```ts
href: "https://github.com/yourname/code-cache",
```

### Replacing the résumé

Drop the new PDF at `public/Tanish-Sharma-Resume.pdf`, overwriting the existing
file. The nav button points there already.

---

## Contact form

The form works out of the box with **no setup** — it opens the visitor's mail
client with the message pre-filled.

To make it send straight to your inbox instead:

1. Go to [web3forms.com](https://web3forms.com), enter your email, and they'll
   email you a free access key. No account required.
2. Create `.env.local` in the project root:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here
   ```
3. In Vercel, add the same variable under **Settings → Environment Variables**,
   then redeploy.

Your phone number is deliberately not printed anywhere on the page — it reaches
you through form submissions only.

---

## Deploying to Vercel

See `DEPLOY.md` for the full step-by-step, including connecting the free `.tech`
domain from the GitHub Student Developer Pack.

---

## Project structure

```
app/
  layout.tsx      fonts, metadata, no-flash theme script
  page.tsx        composes the sections in order
  globals.css     design tokens (colours, fonts) + base styles
components/
  Nav.tsx         sticky header, mobile menu, theme toggle
  Hero.tsx        headline + spec-sheet panel
  Experience.tsx  roles
  Work.tsx        project cards
  About.tsx       quote + background
  Stack.tsx       skill categories
  Contact.tsx     details + form
  Footer.tsx
  SectionHeader.tsx   shared section shell and heading
data/
  site.ts         ← all content
public/
  Tanish-Sharma-Resume.pdf
```

---

## Notes

- Dark mode is set before first paint by a small inline script in `layout.tsx`,
  so there's no flash. The choice is saved to `localStorage`.
- Fonts (Newsreader, Inter, IBM Plex Mono) load from Google Fonts via a
  stylesheet link in `layout.tsx`.
- `prefers-reduced-motion` is respected.
