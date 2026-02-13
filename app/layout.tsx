import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { RouteTracker } from '@/components/analytics/RouteTracker'
import ReadingProgress from '@/components/ReadingProgress'
import BackToTop from '@/components/BackToTop'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'
import { siteConfig } from '@/lib/config'

// Sitelinks Search Box schema for Google search results
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  name: SITE_NAME,
  alternateName: ['CalorieData.io', 'CalorieData Nutrition Database', 'Calorie Data'],
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  potentialAction: [
    {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  ],
  publisher: {
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
  },
}

// Organization schema for knowledge panel
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  description: SITE_DESCRIPTION,
  sameAs: [
    // Add social media links here when available
  ],
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Calories & Nutrition for 300,000+ Foods`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['calories', 'nutrition', 'food database', 'nutritional information', 'macros', 'diet', 'weight loss', 'nutrition facts', 'calorie counter', 'food calories'],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: 'dUWF37Rv6F-YRfhwVa2Q5SoGbgyEuQ-t2MEMxI_w7Y4',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        {/* Sitelinks Search Box and Organization Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="beforeInteractive"
        />
        <GoogleAnalytics />
        <RouteTracker />
        {/* AdSense Script */}
        {siteConfig.adSenseClientId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adSenseClientId}`}
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        )}
        <ReadingProgress />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <BackToTop />
          <Footer />
        </div>
      </body>
    </html>
  )
}
