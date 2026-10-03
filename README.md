# Golden Mind Enterprize

The corporate portfolio site for [goldenmindenterprize.com](https://goldenmindenterprize.com), built with the Next.js App Router.

## Local development and verification

```sh
npm ci
npm run dev
```

Before deploying, run `npm run lint`, `npm run build`, and `npm audit --omit=dev`. Use `npm run start` to inspect the production build. Verify desktop and 320px/390px mobile layouts, menu keyboard operation, app links, scroll-driven video, animated reveals, and contact links in a browser.

## Content and assets

- `src/data/products.ts` holds the BioPoint and Omni details. The original wider portfolio remains in `PortfolioSection.tsx`. BioPoint and Omni have verified public websites and App Store destinations (checked October 3, 2026). Other projects are informational; lack of a URL is not a release-status claim.
- Existing company and product logos are preserved. BioPoint's icon and peptide-management preview come from the BioPoint project's release assets (`02-build-peptide-stacks.png`). BioPoint is a biohacker assistant centered on peptide and supplement management. Omni's preview is the image published on its App Store listing, asset `01-hero-1320x2868.png`.
- The original visual design and effects are intentional. Preserve the scroll-driven cosmic video, mobile autoplay, smooth scrolling, floating logo, moving ticker, reveal animations, gradients, spacing, and original page order. Do not redesign or remove effects without explicit approval.
- The approved BioPoint and Omni cards are in `AvailableApps.tsx`, with styles scoped in `available-apps.css` so they do not change the rest of the site.
- The original contact presentation and public mailto link are restored. There is no form submission service.
- Canonical metadata, Organization JSON-LD, `robots.txt`, and `sitemap.xml` are defined in `src/app`. Metadata uses the original logo's actual image dimensions.

## Deployment

The repository is linked to the existing Vercel project `goldenmindenterprize`. Deploy a production candidate with `vercel deploy --prod --skip-domain`, inspect it with authenticated Vercel tooling, then use `vercel promote <deployment-url> --scope team_I9oJppSgj6H5365xY2yqGptU` after checks. Keep credentials in the configured secret store, never in this repository.

The Vercel project owns both `goldenmindenterprize.com` and `www.goldenmindenterprize.com`; `www` redirects to the apex with HTTP 308. `next.config.ts` applies security headers. The CSP permits inline scripts for static App Router hydration; it is not a nonce-based strict CSP.

`graphify-out/` is a local index and is excluded from deployments.

## Known verification limits (October 3, 2026)

- Production dependencies pass npm audit. The full development dependency audit still flags the `braces` chain through Next's ESLint plugin; the suggested force fix would downgrade Next's lint configuration and is not applied.
- Mail delivery requires a real inbox test; no messages were sent.
- Performance figures from the temporary October 3 redesign do not describe the restored animated site.
- Manual keyboard and responsive checks are not a full assistive-technology certification.
