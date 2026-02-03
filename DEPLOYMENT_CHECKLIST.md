# GA4 Tracking - Deployment Checklist

## Pre-Deployment ✅

- [x] GA4 measurement ID configured (G-361QWD4MK0)
- [x] GoogleAnalytics component enhanced with useEffect initialization
- [x] RouteTracker component created and added to layout
- [x] Analytics utilities created for custom events
- [x] TypeScript declarations added
- [x] Environment variables updated
- [x] Build completed successfully (verified with verify-ga4.sh)
- [x] All verification checks passed

## Deployment Steps

### 1. Deploy to Hosting
```bash
# The 'out' directory contains your static files
# Deploy this directory to your hosting provider

# For Cloudflare Pages:
# - Upload the 'out' directory
# - Set build command: npm run build
# - Set output directory: out

# For Netlify:
# - Build command: npm run build
# - Publish directory: out

# For Vercel:
# - Vercel will detect Next.js automatically
# - Ensure output: 'export' is in next.config.js (already set)
```

### 2. Immediate Post-Deployment (0-5 minutes)
- [ ] Visit your deployed site
- [ ] Open browser DevTools
- [ ] Check Console for errors
- [ ] Check Network tab:
  - [ ] Look for request to `googletagmanager.com/gtag/js?id=G-361QWD4MK0`
  - [ ] Look for requests to `www.google-analytics.com/g/collect`
- [ ] Navigate between 2-3 pages to test route tracking

### 3. GA4 Realtime Verification (5-10 minutes)
- [ ] Go to https://analytics.google.com/
- [ ] Navigate to Reports > Realtime
- [ ] Open your site in another tab
- [ ] Within 60 seconds, verify:
  - [ ] Active users count increases
  - [ ] Your page views appear
  - [ ] Events are being logged
  - [ ] Geography shows correctly

### 4. First 24 Hours
- [ ] Check GA4 multiple times throughout the day
- [ ] Verify user count is increasing
- [ ] Check that different pages are being tracked
- [ ] Monitor for any console errors in production

### 5. After 48 Hours
- [ ] Check GA4 Reports > Engagement > Pages and screens
- [ ] Verify all major pages are showing traffic
- [ ] Check Reports > Acquisition > Traffic acquisition
- [ ] Review User retention data

## Troubleshooting

### If GA4 shows 0 users after deployment:

1. **Check ad blockers**
   ```
   - Test in incognito mode
   - Disable any ad blockers
   - Try different browser
   ```

2. **Verify scripts are loading**
   ```
   - Open DevTools Network tab
   - Filter for "google-analytics" or "gtag"
   - Refresh page
   - Should see requests to googletagmanager.com
   ```

3. **Check for JavaScript errors**
   ```
   - Open DevTools Console
   - Look for any red errors
   - Particularly check for errors related to gtag or dataLayer
   ```

4. **Verify measurement ID in production**
   ```bash
   # Check the deployed HTML source
   # Search for G-361QWD4MK0
   # It should appear in script tags
   ```

5. **Check GA4 property settings**
   ```
   - Go to GA4 Admin
   - Check Data Streams
   - Verify stream is active
   - Confirm measurement ID matches
   ```

### If events aren't tracking:

1. **Check RouteTracker is mounted**
   - View page source
   - Look for RouteTracker in React DevTools (if using)

2. **Test custom events**
   ```typescript
   // Add to any page temporarily
   import { event } from '@/lib/analytics'
   
   event({
     action: 'test_event',
     category: 'test',
     label: 'deployment_test'
   })
   ```

## Verification Commands

### Run these locally before deploying:
```bash
# 1. Verify GA4 implementation
./verify-ga4.sh

# 2. Check environment variables
grep "NEXT_PUBLIC_GA_ID" .env

# 3. Build the site
npm run build

# 4. Test locally
npx serve out
# Then visit http://localhost:3000
```

## Optional Enhancements

### Add Custom Event Tracking

After confirming basic tracking works, add custom events:

1. **Track food views** (in food detail pages):
```tsx
import { trackFoodView } from '@/lib/analytics'

useEffect(() => {
  trackFoodView(foodName)
}, [foodName])
```

2. **Track searches** (in search component):
```tsx
import { trackSearch } from '@/lib/analytics'

const handleSearch = (query: string) => {
  trackSearch(query)
  // ... rest of search logic
}
```

3. **Track comparisons** (in comparison pages):
```tsx
import { trackComparison } from '@/lib/analytics'

useEffect(() => {
  trackComparison(food1, food2)
}, [food1, food2])
```

## Success Criteria

✅ **Tracking is working if you see:**
- Active users in GA4 Realtime (within 60 seconds)
- Page views incrementing as you navigate
- Events appearing in Realtime > Events
- No JavaScript errors in console
- Network requests to google-analytics.com/g/collect

❌ **Action needed if:**
- No users showing after 5 minutes
- JavaScript errors in console
- No network requests to GA4
- Measurement ID missing from page source

## Support Resources

- **GA4 Documentation**: https://developers.google.com/analytics/devguides/collection/ga4
- **GA4 Debugger Extension**: https://chrome.google.com/webstore/detail/google-analytics-debugger/
- **Next.js Analytics Guide**: https://nextjs.org/docs/app/building-your-application/optimizing/analytics
- **Project Documentation**: See GA4_TRACKING_FIXES.md

## Contact Info

If you need to verify tracking is working:
1. Visit GA4 Realtime report: https://analytics.google.com/
2. Keep browser DevTools open while testing
3. Check both Network and Console tabs
4. Test in both desktop and mobile browsers

---

**Ready to Deploy!** 🚀

The site is fully configured with GA4 tracking. Deploy the `out/` directory and monitor the GA4 Realtime report to confirm everything is working.
