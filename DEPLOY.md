# Deploying — step by step

Follow these in order. Nothing here costs money.

---

## Step 1 — Get the project onto your computer

Unzip `tanish-portfolio.zip` somewhere sensible (e.g. `Documents/`), open a
terminal in that folder, and install dependencies:

```bash
cd tanish-portfolio
npm install
npm run dev
```

Open <http://localhost:3000>. You should see the site. Press `Ctrl+C` in the
terminal to stop it.

> If `npm` isn't recognised, install Node.js LTS from <https://nodejs.org> first,
> then close and reopen the terminal.

---

## Step 2 — Put it on GitHub

1. Go to <https://github.com/new>.
2. Repository name: `portfolio` (or anything you like).
3. **Leave "Add a README" unchecked** — the project already has one.
4. Keep it Public (or Private — Vercel works with both).
5. Click **Create repository**.

GitHub will show you a page of commands. Ignore it and run these instead, from
inside the project folder:

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

Refresh the GitHub page — your files should be there.

---

## Step 3 — Deploy on Vercel

1. Go to <https://vercel.com/signup> and **sign up with GitHub**.
2. On your Vercel dashboard, click **Add New → Project**.
3. Find your `portfolio` repo and click **Import**.
4. Vercel auto-detects Next.js. **Change nothing.** Click **Deploy**.
5. Wait ~1 minute.

You'll get a live URL like `portfolio-xyz.vercel.app`. The site is now online.

From here, every `git push` to `main` automatically redeploys. To update the
site later:

```bash
git add .
git commit -m "Update project descriptions"
git push
```

---

## Step 4 — Claim your free .tech domain

1. Go to <https://education.github.com/pack> and sign in.
2. Search the offers for **`.TECH`**.
3. Click **Get access** — it redirects you to get.tech with a student discount
   applied.
4. Search for `tanishsharma.tech` (or whatever you want).
5. Add it to the cart. The first year should come to **₹0 / $0** — if it doesn't,
   stop and check that the student offer was applied before paying anything.
6. Complete the registration and create your get.tech account.

> The free year does not auto-renew for free. Set a calendar reminder ~11 months
> out so you either renew deliberately or let it lapse on purpose.

---

## Step 5 — Connect the domain to Vercel

**In Vercel:**

1. Open your project → **Settings** → **Domains**.
2. Type `tanishsharma.tech` and click **Add**.
3. Vercel will display the exact DNS records you need. It's usually:
   - An **A record** for the root domain (`@`) pointing to an IP
   - A **CNAME record** for `www` pointing to a `.vercel-dns.com` address

   **Use exactly the values Vercel shows you** — don't copy values from any
   tutorial, including this one, as they change.

**In get.tech:**

4. Log in → find your domain → open **DNS Management** (sometimes under
   "Manage DNS" or "DNS Records").
5. Delete any default parking/placeholder records.
6. Add the records exactly as Vercel listed them.
7. Save.

**Back in Vercel:**

8. The Domains page will show "Invalid Configuration" for a while — that's
   normal. DNS takes anywhere from 10 minutes to a few hours to propagate.
9. Once it flips to **Valid**, your site is live at `tanishsharma.tech`.

Vercel issues the HTTPS certificate automatically. You don't need to do anything
for SSL.

---

## Step 6 — Turn on the contact form (optional)

By default the form opens the visitor's email client. To have messages delivered
straight to your inbox:

1. Go to <https://web3forms.com>, enter your email, and they'll send you a free
   access key. No account needed.
2. In Vercel: **Settings → Environment Variables** → add:
   - Name: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - Value: the key they emailed you
   - Apply to: Production, Preview, Development
3. Go to **Deployments**, click the `…` menu on the latest one, and hit
   **Redeploy**.

Test it by submitting the form on the live site.

---

## Troubleshooting

**Build fails on Vercel but works locally**
Check the build log for the first red error. Usually a TypeScript error — run
`npm run build` locally to reproduce it.

**Domain shows "Invalid Configuration" after several hours**
Re-check the DNS records in get.tech character by character against what Vercel
shows. A trailing dot or a missing `www` is the usual culprit.

**Fonts look wrong**
The site loads fonts from Google Fonts. If you're on a network that blocks them,
they'll fall back to Georgia / system sans. This won't affect visitors.
