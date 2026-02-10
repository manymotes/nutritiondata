# CalorieData Deployment Guide

## Overview

This site deploys to Cloudflare Pages with a custom domain at https://caloriedata.org

## ⚠️ CRITICAL: Workers Route Issue

**NEVER configure a Workers Route for `caloriedata.org/*`**

Previously, a Workers Route was intercepting ALL requests to the domain, causing the Pages deployment to be unreachable and returning 404 errors. Always verify no Workers Routes exist before deployment:

1. Go to Cloudflare Dashboard → caloriedata.org zone → Workers Routes
2. Verify the Routes table shows "You do not have any routes configured"
3. If any routes exist for `caloriedata.org/*`, DELETE them

## Project Configuration

- **Project Name**: `caloriedata` (in Cloudflare Pages)
- **Custom Domain**: caloriedata.org
- **Build Command**: `npm run build`
- **Build Output**: `out/`
- **Framework**: Next.js (Static Export)

## Deployment Steps

### 1. Build Locally (Optional - for verification)

```bash
npm run build
```

This generates 8,565+ static pages in the `out/` directory.

### 2. Deploy to Cloudflare Pages

```bash
npx wrangler pages deploy
```

Or with uncommitted changes:

```bash
npx wrangler pages deploy --commit-dirty=true
```

### 3. Verify Deployment

The deployment will provide a URL like `https://[hash].caloriedata.pages.dev`

Test the deployment URL first:
```bash
curl -I https://[hash].caloriedata.pages.dev/compare/french-fries-vs-pizza/
```

Should return HTTP 200.

### 4. Verify Custom Domain

After a few minutes, test the production domain:
```bash
curl -I https://caloriedata.org/compare/french-fries-vs-pizza/
```

Should return HTTP 200.

## Troubleshooting

### Domain Returns 404 but Deployment URL Works

**Most likely cause**: Workers Route is intercepting requests.

**Fix**:
1. Go to Cloudflare Dashboard
2. Navigate to caloriedata.org zone → Workers Routes
3. Delete any routes matching `caloriedata.org/*`

### Domain Not Connected

1. Go to Cloudflare Pages dashboard
2. Click on the `caloriedata` project
3. Go to Custom domains tab
4. Verify `caloriedata.org` is listed as "Active" with SSL enabled
5. If not, add it and wait for DNS propagation (usually 5-10 minutes)

### Wrong Project Deployment

There are TWO projects in Cloudflare:
- ✅ `caloriedata` - CORRECT project (has caloriedata.org domain)
- ❌ `caloriedata-site` - OLD project (do not use)

Always verify `wrangler.toml` has:
```toml
name = "caloriedata"
```

### Comparison Pages 404

This site generates comparison pages in BOTH URL orders:
- `/compare/french-fries-vs-pizza/`
- `/compare/pizza-vs-french-fries/`

This ensures Google-indexed URLs work regardless of order.

To verify pages are generated:
```bash
ls out/compare/ | head -20
```

## DNS Configuration

CNAME record in Cloudflare DNS:
- Name: `caloriedata.org` (or `@`)
- Content: `caloriedata.pages.dev`
- Proxy: Enabled (orange cloud)

## Cache Purging

If changes don't appear:

1. Go to Cloudflare Dashboard → caloriedata.org zone
2. Navigate to Caching → Configuration
3. Click "Purge Everything"

## Key Files

- `wrangler.toml` - Project configuration (must have `name = "caloriedata"`)
- `next.config.mjs` - Next.js static export configuration
- `out/` - Build output directory (gitignored)
- `out/_redirects` - Cloudflare redirects (HTTPS enforcement)
- `out/_headers` - Security headers

## Comparison Page Generation

The site generates ~8,000 comparison pages. Key implementation:

**File**: `app/compare/[comparison]/page.tsx`

The `generateStaticParams` function creates both URL orders to handle legacy Google-indexed URLs:

```typescript
export async function generateStaticParams() {
  // Generates both:
  // - french-fries-vs-pizza
  // - pizza-vs-french-fries
  // ...
}
```

Limit is 8,000 comparisons (max 16,000 pages with both orders) to stay under Cloudflare's 20,000 file limit.
