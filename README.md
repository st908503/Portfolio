# Shashank Tripathi — Portfolio

A resume-led portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS. The design uses white, graphite, a restrained blue accent, locally bundled Inter typography, and restrained motion. Body text is larger throughout the site, with responsive layouts and clearly separated content. Light and dark themes, mobile navigation, and reduced-motion preferences are supported.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production preview:

```sh
npm run build
npm start
```

Development uses Webpack to avoid the local Turbopack cache and concurrent manifest issues observed during verification. Production builds use the default Next.js compiler and include TypeScript validation. Fonts are bundled locally; no Google Fonts request is needed.

## Update content

Content follows the latest resume: Senior Technical Consultant at EY India (June 2026–present), Full Stack Developer at MobilePe (October 2023–June 2026), TCS, and Newgen. The profile is based in New Delhi. The previous 35% bundle-size and 30% defect metrics have been removed; the current resume supports a contribution to 25% fewer application crashes at MobilePe.

- `lib/data/profile.ts`: contact information, education, and resume path.
- `lib/data/experience.ts`: employment history and achievements.
- `lib/data/skills.ts`: grouped skills.
- `lib/data/projects.ts`: project collection. Entries generate cards, filters, and detail pages automatically.
- `lib/constants/blogs.ts`: existing engineering notes.
- `app/globals.css`: colors, layout, motion, and responsive styles.

The four initial project entries summarize professional contributions described in the supplied resume. Workflow illustrations are conceptual, and no public product demos or repositories are invented.

To add a personal project, add an entry to `lib/data/projects.ts` with a unique `slug`, `kind: "personal"`, a `category` of `"Web"` or `"Mobile"`, a `visual` of `"government"`, `"platform"`, `"mobile"`, or `"enterprise"`, plus the remaining fields from `types/project.ts`. Optional `link` and `repo` URLs appear on the project detail page. The future-projects placeholder disappears when the first personal project is added.

## Resume asset

The supplied `public/Shashank_Tripathi_Resume.pdf` is the preferred source. All resume links use `public/resume.pdf`, an exact copy of that source. Older PDFs can remain in `public/` without blocking deployment. If the preferred source is absent, the sync script uses a single differently named source, or preserves an existing valid `resume.pdf` when no source can be selected unambiguously. Replace the preferred source PDF and run:

```sh
npm run resume:sync
```

Development and production builds both synchronize it automatically. The original resume content is preserved.

Run the resume deployment regression checks with `node --test scripts/sync-resume.test.mjs`.

## Contact and deployment configuration

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` to enable contact-form delivery. Set `CONTACT_FROM_EMAIL` to a sender on a verified Resend domain for production. The default Resend onboarding sender is for development and is subject to Resend's account restrictions. Email sends are validated, use a text body and reply-to address, and report provider failures accurately. With no API key, the page provides direct email links and the form reports its unavailable state.

Set `NEXT_PUBLIC_SITE_URL` to the actual deployed origin (for example, `https://your-real-domain.example`). It is used for site metadata, robots, and the sitemap; no domain is invented when it is unset.

Deploy as a normal Next.js application using a Node.js runtime. The `/api/contact` endpoint requires server execution, so a static-only export will not support the form.
