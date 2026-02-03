'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { siteConfig } from '@/lib/config'

export function GoogleAnalytics() {
  const GA_ID = siteConfig.googleAnalyticsId

  useEffect(() => {
    // Ensure gtag is available globally for tracking
    if (typeof window !== 'undefined' && GA_ID) {
      // Initialize dataLayer if not already present
      window.dataLayer = window.dataLayer || [];

      // Define gtag function using arrow syntax for ES5 compatibility
      const gtag = (...args: any[]) => {
        window.dataLayer.push(args);
      };

      // Make gtag available globally
      (window as any).gtag = gtag;

      // Initialize GA4
      gtag('js', new Date());
      gtag('config', GA_ID, {
        page_path: window.location.pathname,
        send_page_view: true
      });
    }
  }, [GA_ID])

  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        async
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
    </>
  )
}
