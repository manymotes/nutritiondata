#!/bin/bash
# Fix caloriedata.org domain connection

ACCOUNT_ID="2bb2365f7f5bbaa5919310174792aef9"
PROJECT_NAME="caloriedata"
DOMAIN="caloriedata.org"

echo "Attempting to connect $DOMAIN to Pages project: $PROJECT_NAME"

# List current domains
echo "Current domains for project:"
npx wrangler pages project list | grep -A 1 "$PROJECT_NAME"

# The wrangler CLI doesn't support adding custom domains
# We need to use the Cloudflare API, but wrangler uses OAuth which can't be easily extracted

echo ""
echo "================================"
echo "SOLUTION: The domain needs to be connected via Cloudflare dashboard"
echo "URL: https://dash.cloudflare.com/$ACCOUNT_ID/pages/view/$PROJECT_NAME"
echo "1. Go to the URL above"
echo "2. Click 'Custom domains' tab"
echo "3. If caloriedata.org is listed, remove it and re-add it"
echo "4. If not listed, click 'Set up a custom domain' and add: $DOMAIN"
echo "================================"
