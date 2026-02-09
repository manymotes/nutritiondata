#!/usr/bin/env node
import { execSync } from 'child_process';
import https from 'https';

const ACCOUNT_ID = '2bb2365f7f5bbaa5919310174792aef9';
const PROJECT_NAME = 'caloriedata-site';
const DOMAIN = 'caloriedata.org';

// Try to extract OAuth token from wrangler
const tokenPath = process.env.HOME + '/Library/Application Support/Cloudflare/wrangler/';

// Alternative: Use wrangler config directory
try {
  const configDirs = [
    process.env.HOME + '/.wrangler',
    process.env.HOME + '/.cloudflare/wrangler',
    process.env.HOME + '/.config/wrangler',
    process.env.HOME + '/Library/Preferences/wrangler'
  ];

  console.log('Attempting to add domain via Cloudflare API...');
  console.log(`Domain: ${DOMAIN}`);
  console.log(`Project: ${PROJECT_NAME}`);

  // The OAuth token is stored securely by wrangler
  // We need to use an API token instead
  console.log('\nTo add the custom domain, you need to:');
  console.log('1. Go to: https://dash.cloudflare.com/' + ACCOUNT_ID + '/pages/view/' + PROJECT_NAME);
  console.log('2. Click on "Custom domains" tab');
  console.log('3. Add: ' + DOMAIN);

  process.exit(1);

} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
