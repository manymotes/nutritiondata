# Google Indexing API Setup Guide

Setup instructions to enable programmatic URL re-indexing for any site.

## Prerequisites

- Google Cloud account
- Google Search Console access (as Owner) for the target site

## Step 1: Enable the API

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select or create a project
3. Go to **APIs & Services** → **Library**
4. Search for "Web Search Indexing API"
5. Click **Enable**

## Step 2: Create a Service Account

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **Service Account**
3. Name it (e.g., `indexing-bot`)
4. Click **Create and Continue** → **Done**
5. Click on the service account you just created
6. Go to **Keys** tab → **Add Key** → **Create new key**
7. Select **JSON** and click **Create**
8. Save the downloaded file as `google-service-account.json` in your project root

## Step 3: Add Service Account to Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Go to **Settings** → **Users and permissions**
4. Click **Add User**
5. Enter the service account email (found in your JSON file, looks like `name@project-id.iam.gserviceaccount.com`)
6. Set permission to **Owner**
7. Click **Add**

## Step 4: Install Dependencies

```bash
npm install googleapis
```

## Step 5: Create the Script

Copy `request-indexing.ts` to your project and update:

- `SITE_URL` - your site's base URL
- `URLS_TO_INDEX` - array of URL paths to re-index

## Step 6: Run

```bash
npx tsx scripts/request-indexing.ts
```

## Rate Limits

- 200 requests per day per project
- Changes appear in search results within 1-2 days

## Security Notes

- Add `google-service-account.json` to `.gitignore`
- Never commit credentials to version control
- Service account only needs Owner permission in Search Console, not in Google Cloud

## Reusing Across Sites

You can use the same service account for multiple sites:
1. Add the service account email as Owner in each site's Search Console
2. Copy the script to each project
3. Update `SITE_URL` and `URLS_TO_INDEX` for each site
