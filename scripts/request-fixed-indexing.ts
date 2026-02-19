/**
 * Request reindexing for fixed 404 pages
 */

import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';

const SITE_URL = 'https://caloriedata.org';

// All URLs needing reindexing (404s, duplicates, canonical issues)
const URLS_TO_INDEX = [
  // Fixed 404 pages (now exist or redirect)
  '/compare/orange-juice-vs-soda/',
  '/compare/kale-vs-apple/',
  '/compare/french-fries-vs-pizza/',
  '/compare/french-fries-vs-blueberry/',
  '/compare/french-fries-vs-avocado/',
  '/compare/french-fries-vs-grape/',
  '/compare/potato-chips-vs-trail-mix/',
  '/compare/',  // redirect target for invalid comparisons

  // Duplicate without user-selected canonical (fixed canonicals)
  '/blog/',
  '/compare/chicken-breast-vs-egg/',
  '/calories-in/cherry/',
  '/calories-in/orange/',
  '/calories-in/taco/',
  '/calories-in/steak/',
  '/compare/rice-vs-brown-rice/',
  '/calories-in/flaxseed/',
  '/calories-in/ice-cream/',
  '/compare/apple-vs-avocado/',

  // Alternate page with proper canonical tag (fixed canonicals)
  '/calories-in/kale/',
  '/compare/french-fries-vs-hot-dog/',
  '/compare/banana-vs-blueberry/',
  '/compare/yogurt-vs-cheese/',
  '/calories-in/hot-dog/',
];

async function requestIndexing() {
  const keyPath = path.join(process.cwd(), 'google-service-account.json');

  if (!fs.existsSync(keyPath)) {
    console.error('Missing google-service-account.json');
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing({ version: 'v3', auth });

  console.log(`Requesting indexing for ${URLS_TO_INDEX.length} fixed URLs...\n`);

  let success = 0;
  let failed = 0;

  for (const urlPath of URLS_TO_INDEX) {
    const fullUrl = `${SITE_URL}${urlPath}`;

    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: fullUrl,
          type: 'URL_UPDATED',
        },
      });
      console.log(`Success: ${fullUrl}`);
      success++;

      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error: any) {
      console.log(`Failed: ${fullUrl} - ${error.message}`);
      failed++;
    }
  }

  console.log(`\nResults: ${success} succeeded, ${failed} failed`);
}

requestIndexing().catch(console.error);
