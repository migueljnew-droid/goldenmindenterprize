# Golden Mind Enterprize

The corporate portfolio site for [goldenmindenterprize.com](https://goldenmindenterprize.com), built with the Next.js App Router.

## Local development and verification

```sh
npm ci
npm run dev
```

Before deploying, run `npm run lint`, `npm run build`, and `npm audit --omit=dev`. Use `npm run start` to inspect the production build. Verify desktop and 320px/390px mobile layouts, menu keyboard operation, app links, background play/pause, and copy-email behavior in a browser.

## Content and assets

- `src/data/products.ts` holds the portfolio. BioPoint and Omni have verified public websites and App Store destinations (checked October 3, 2026). Other projects are informational; lack of a URL is not a release-status claim.
- Existing company and product logos are preserved. BioPoint's icon and fasting preview come from the BioPoint project's release assets. Omni's preview is the image published on its App Store listing, asset `01-hero-1320x2868.png`.
- The cosmic background is still by default. Its smaller video is requested only after a visitor selects Play. Reduced-motion preferences prevent playback; switching tabs pauses it. The original source video remains preserved in `public/video`.
- Contact offers the existing public mailbox, copy, and Gmail compose. There is no form submission service or claim that a message was sent.
- Canonical metadata, Organization JSON-LD, `robots.txt`, and `sitemap.xml` are defined in `src/app`. Metadata uses the original logo's actual image dimensions.

## Deployment

The repository is linked to the existing Vercel project `goldenmindenterprize`. Deploy a production candidate with `vercel deploy --prod --skip-domain`, inspect it with authenticated Vercel tooling, then use `vercel promote <deployment-url>` after checks. Keep credentials in the configured secret store, never in this repository.

The Vercel project owns both `goldenmindenterprize.com` and `www.goldenmindenterprize.com`; `www` redirects to the apex with HTTP 308. `next.config.ts` applies security headers. The CSP permits inline scripts for static App Router hydration; it is not a nonce-based strict CSP.

`graphify-out/` is a local index and is excluded from deployments.

## Known verification limits (October 3, 2026)

- Production dependencies pass npm audit. The full development dependency audit still flags the `braces` chain through Next's ESLint plugin; the suggested force fix would downgrade Next's lint configuration and is not applied.
- Mail delivery requires a real inbox test; browser checks cover composing and copying only.
- Manual keyboard and responsive checks are not a full assistive-technology certification.
