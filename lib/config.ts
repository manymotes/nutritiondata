// Site configuration for ads and analytics
// Update these values with your actual IDs

export const siteConfig = {
  // Google Analytics ID (optional)
  // Get this from: https://analytics.google.com/
  // Format: G-XXXXXXXXXX
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'G-361QWD4MK0',

  // AdSense Client ID (required for ads)
  // Get this from: https://www.google.com/adsense/
  // Format: ca-pub-XXXXXXXXXX
  adSenseClientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-6061225328031066',
}
