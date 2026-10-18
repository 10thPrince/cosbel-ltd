# COSBEL Ltd website (Next.js + Tailwind CSS 4.3)
1. `npm install`, then `cp .env.example .env.local` and set NEXT_PUBLIC_SITE_URL (your real domain) and RESEND_API_KEY.
2. `npm run dev` or `npm run build`.
3. Official logo: add to public/ and swap into components/Header.tsx (Logo).
4. Images in public/images are DEMO ILLUSTRATIONS. Replace them with real COSBEL photos (same file names, or edit lib/data.ts). Never present demo images as real projects.
5. Services: set confirmed: true in lib/data.ts only once COSBEL confirms them.
6. Projects: add real entries in lib/data.ts. /projects is noindex and out of the sitemap until you do.
7. Mission/vision on /about are drafts awaiting approval.

## SEO checklist after launch
- Set NEXT_PUBLIC_SITE_URL, deploy, then submit https://your-domain/sitemap.xml in Google Search Console and Bing Webmaster Tools.
- Create and verify a Google Business Profile for COSBEL Ltd (Kimironko, Kigali) with the same name, phone and email as the site.
- Replace demo illustrations with real photos with descriptive alt text; add real projects and customer reviews over time.
