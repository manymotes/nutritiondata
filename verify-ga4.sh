#!/bin/bash

# GA4 Verification Script for Baby Names Scout (CalorieData)
# This script checks if GA4 tracking is properly configured in the built output

echo "================================"
echo "GA4 Tracking Verification"
echo "================================"
echo ""

# Check if out directory exists
if [ ! -d "out" ]; then
  echo "❌ Error: 'out' directory not found. Run 'npm run build' first."
  exit 1
fi

echo "✓ Output directory exists"
echo ""

# Check for GA4 measurement ID in environment
GA_ID=$(grep "NEXT_PUBLIC_GA_ID" .env | cut -d '=' -f2)
echo "📊 GA4 Measurement ID from .env: $GA_ID"
echo ""

# Check if GA4 ID exists in built JavaScript files
echo "🔍 Checking for GA4 ID in built files..."
if grep -r "$GA_ID" out/_next/static/chunks/app/*.js > /dev/null 2>&1; then
  echo "✓ GA4 ID found in JavaScript bundles"
else
  echo "❌ GA4 ID NOT found in JavaScript bundles"
  exit 1
fi
echo ""

# Check if gtag script is preloaded in HTML
echo "🔍 Checking for Google Tag Manager script in HTML..."
if grep -l "googletagmanager.com/gtag/js" out/index.html > /dev/null 2>&1; then
  echo "✓ gtag.js script found in HTML"
else
  echo "❌ gtag.js script NOT found in HTML"
  exit 1
fi
echo ""

# Check if dataLayer is initialized
echo "🔍 Checking for dataLayer initialization..."
if grep -l "window.dataLayer" out/_next/static/chunks/app/*.js > /dev/null 2>&1; then
  echo "✓ dataLayer initialization found"
else
  echo "❌ dataLayer initialization NOT found"
  exit 1
fi
echo ""

# Check if gtag config is present
echo "🔍 Checking for gtag config..."
if grep -l "gtag.*config.*$GA_ID" out/_next/static/chunks/app/*.js > /dev/null 2>&1; then
  echo "✓ gtag config found with measurement ID"
else
  echo "❌ gtag config NOT found"
  exit 1
fi
echo ""

echo "================================"
echo "✅ All GA4 checks passed!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Deploy the 'out' directory to your hosting provider"
echo "2. Visit your site in a browser"
echo "3. Check GA4 Realtime report at https://analytics.google.com/"
echo "4. Open browser DevTools and check:"
echo "   - Network tab for requests to googletagmanager.com"
echo "   - Network tab for requests to google-analytics.com/g/collect"
echo "   - Console for any JavaScript errors"
echo ""
echo "For local testing:"
echo "  npx serve out"
echo "  Then visit http://localhost:3000"
echo ""
