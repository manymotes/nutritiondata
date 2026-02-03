# GA4 Quick Reference

## Key Information
- **Site**: CalorieData.org (Baby Names Scout)
- **GA4 ID**: G-361QWD4MK0
- **Type**: Static Export (Next.js)
- **Build Output**: `/out` directory

## Quick Commands

```bash
# Verify GA4 setup
./verify-ga4.sh

# Clean rebuild
rm -rf .next out && npm run build

# Test locally
npx serve out

# Check environment
grep NEXT_PUBLIC_GA_ID .env
```

## Files You Modified

1. `/Users/kendallmotes/seo/nutritiondata/components/analytics/GoogleAnalytics.tsx`
2. `/Users/kendallmotes/seo/nutritiondata/components/analytics/RouteTracker.tsx` (NEW)
3. `/Users/kendallmotes/seo/nutritiondata/lib/analytics.ts` (NEW)
4. `/Users/kendallmotes/seo/nutritiondata/types/analytics.d.ts` (NEW)
5. `/Users/kendallmotes/seo/nutritiondata/app/layout.tsx`
6. `/Users/kendallmotes/seo/nutritiondata/.env`

## Quick Test in Browser

1. Open DevTools (F12)
2. Console tab - Type: `window.dataLayer`
   - Should see array of events
3. Network tab - Filter: `google-analytics`
   - Should see requests to `/g/collect`

## GA4 Dashboard Access

1. Go to: https://analytics.google.com/
2. Navigate to: Reports > Realtime
3. Should see users within 60 seconds of visiting site

## Troubleshooting One-Liners

```bash
# Check if GA ID is in build
grep -r "G-361QWD4MK0" out/_next/static/chunks/app/*.js

# Check if gtag script is in HTML
grep "googletagmanager" out/index.html

# Check environment variables
cat .env | grep NEXT_PUBLIC
```

## What Was Fixed

### Before
- Static export not initializing GA4 properly
- No route change tracking
- Missing client-side initialization

### After
- Dual initialization (useEffect + Script component)
- RouteTracker monitors all page changes
- Proper client-side gtag setup
- Analytics utilities for custom events

## Expected Behavior

1. **Page Load**: gtag.js loads → dataLayer initializes → pageview sent
2. **Route Change**: RouteTracker detects → pageview sent
3. **Custom Event**: Use analytics utilities → event sent

## Common Issues

| Issue | Solution |
|-------|----------|
| 0 users in GA4 | Wait 24-48 hrs, test in Realtime |
| No requests to GA4 | Check ad blockers, rebuild site |
| gtag undefined | Clear cache, hard reload (Cmd+Shift+R) |
| Routes not tracked | Verify RouteTracker in layout.tsx |

## Next Actions

1. ✅ Deploy `out/` directory
2. ⏳ Monitor GA4 Realtime (within 60 seconds)
3. ⏳ Check data after 24 hours
4. ⏳ Add custom event tracking (optional)

## Documentation Files

- `SUMMARY_GA4_FIXES.md` - Overview of all changes
- `GA4_TRACKING_FIXES.md` - Detailed implementation guide
- `DEPLOYMENT_CHECKLIST.md` - Step-by-step deployment
- `verify-ga4.sh` - Automated verification script
- `test-ga4.html` - Standalone test page

---
**Status**: ✅ Ready for deployment
**Build**: ✅ Passed all checks
**Next**: Deploy and monitor GA4 Realtime
