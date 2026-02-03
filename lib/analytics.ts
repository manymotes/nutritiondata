// Google Analytics utilities
import { siteConfig } from './config'

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && siteConfig.googleAnalyticsId) {
    window.gtag('config', siteConfig.googleAnalyticsId, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track search queries
export const trackSearch = (searchTerm: string) => {
  event({
    action: 'search',
    category: 'engagement',
    label: searchTerm,
  })
}

// Track food views
export const trackFoodView = (foodName: string) => {
  event({
    action: 'view_food',
    category: 'engagement',
    label: foodName,
  })
}

// Track comparisons
export const trackComparison = (food1: string, food2: string) => {
  event({
    action: 'compare_foods',
    category: 'engagement',
    label: `${food1} vs ${food2}`,
  })
}
