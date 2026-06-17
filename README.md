# Peter Nguyen — Portfolio

A high-end, dark-themed portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**. Inspired by the Vercel / Linear aesthetic: deep dark backgrounds, crisp typography, minimal borders, and smooth micro-interactions.

## Features

- **Hero** — bold typography with on-load fade-in animations (no avatar).
- **Technical Arsenal** — interactive skill badges that lift and glow on hover.
- **Project grid** — four plug-and-play glassmorphism cards with a staggered entrance animation.
- **Contact form** — wired to a Next.js API route with loading / success / error states.
- **Email delivery** — `app/api/contact/route.ts` sends mail via [Resend](https://resend.com).

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

### Email (contact form)

1. Create a [Resend](https://resend.com) account and grab an API key.
2. Copy `.env.example` to `.env.local` and fill in:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=you@yourdomain.com        # where messages are delivered
CONTACT_FROM="Peter Nguyen <hello@yourdomain.com>"   # a verified sender (optional)
```

> The route works out of the box with Resend's `onboarding@resend.dev` sandbox sender. To send from your own domain, verify it in Resend and set `CONTACT_FROM`.

### Personalization

- Update your name, role, email, and links in `app/lib/site.ts`.
- The GitHub icon points to [`https://github.com/pe-gif`](https://github.com/pe-gif).
- Drop your résumé PDF at `public/resume.pdf` to wire the **Download Résumé** button.
- Fill in the four project cards in `app/components/Projects.tsx`.

## Deploy

Deploy to [Vercel](https://vercel.com/new). Add `RESEND_API_KEY` (and optionally `CONTACT_EMAIL` / `CONTACT_FROM`) as environment variables in the project settings.
