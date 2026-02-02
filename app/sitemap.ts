import { MetadataRoute } from 'next'
import { SITE_URL, FEATURED_FOODS, FOOD_CATEGORIES } from '@/lib/constants'
import { getAllFoodSlugs } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lists`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // List pages
  const listPages: MetadataRoute.Sitemap = [
    'low-calorie-foods',
    'high-protein-foods',
    'low-carb-foods',
    'weight-loss-foods',
    'high-fiber-foods',
    'low-fat-foods',
  ].map((slug) => ({
    url: `${baseUrl}/lists/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Blog article pages
  const blogPages: MetadataRoute.Sitemap = [
    'low-calorie-foods-for-weight-loss',
    'high-protein-foods-for-muscle-building',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Calculator pages
  const calculatorPages: MetadataRoute.Sitemap = [
    'bmi',
    'tdee',
    'macros',
  ].map((slug) => ({
    url: `${baseUrl}/calculators/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Food pages (all 200+ foods from /data/foods/)
  const allFoodSlugs = getAllFoodSlugs()
  const foodPages: MetadataRoute.Sitemap = allFoodSlugs.map((slug) => ({
    url: `${baseUrl}/calories-in/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = FOOD_CATEGORIES.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Comparison pages (generate for featured food pairs only - 7,626 comparisons)
  // Note: Compare page supports all 200 foods, but we only add featured ones to sitemap
  const comparisonPages: MetadataRoute.Sitemap = []
  for (let i = 0; i < FEATURED_FOODS.length; i++) {
    for (let j = i + 1; j < FEATURED_FOODS.length; j++) {
      comparisonPages.push({
        url: `${baseUrl}/compare/${FEATURED_FOODS[i].slug}-vs-${FEATURED_FOODS[j].slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    }
  }

  return [...staticPages, ...foodPages, ...categoryPages, ...listPages, ...blogPages, ...calculatorPages, ...comparisonPages]
}
