# DEPLOYMENT GUIDE - CRITICAL RULES

## ⚠️ CRITICAL: PRODUCTION DEPLOYMENT ONLY

**When deploying with wrangler, using `--branch=main` deploys to PRODUCTION (caloriedata.org).**

The deployment URL shown (like `https://abc123.caloriedata-site.pages.dev`) is just a deployment ID. **The actual site is deployed to caloriedata.org in production.**

## Production Deployment Command

```bash
npx wrangler pages deploy out --project-name=caloriedata-site --branch=main --commit-dirty=true
```

### What This Command Does:
- Deploys to **production environment** (caloriedata.org)
- Uses the `main` branch = production
- The .pages.dev URL shown is just an alias/deployment ID
- **caloriedata.org is immediately updated**

## Complete Deployment Process

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy to production:**
   ```bash
   npx wrangler pages deploy out --project-name=caloriedata-site --branch=main --commit-dirty=true
   ```

3. **Verify production is updated:**
   ```bash
   curl -I https://caloriedata.org/
   ```

## Important Notes

- The URL shown after deployment (e.g., `https://abc123.caloriedata-site.pages.dev`) is NOT a test URL
- It's a deployment identifier that Cloudflare assigns
- **The production domain (caloriedata.org) is what gets updated**
- Using `--branch=main` = production deployment
- Using `--branch=preview` or other branches = preview deployments

## Manual Cloudflare Dashboard Step

After deployment, enable HTTPS redirect in Cloudflare dashboard:
1. Go to Cloudflare Dashboard
2. Select caloriedata.org domain
3. SSL/TLS → Edge Certificates
4. Enable "Always Use HTTPS"

## Project Information
- **Project Name:** caloriedata-site
- **Production Domain:** caloriedata.org
- **Production Branch:** main
- **Production Environment:** main branch deploys to caloriedata.org
