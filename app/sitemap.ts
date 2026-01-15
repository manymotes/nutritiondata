import { MetadataRoute } from 'next'
import { SITE_URL, POPULAR_FOODS, FOOD_CATEGORIES } from '@/lib/constants'

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
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Food pages
  const foodPages: MetadataRoute.Sitemap = POPULAR_FOODS.map((food) => ({
    url: `${baseUrl}/calories-in/${food.slug}`,
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

  // Comparison pages (generate for popular food pairs)
  const comparisonPages: MetadataRoute.Sitemap = []
  for (let i = 0; i < POPULAR_FOODS.length; i++) {
    for (let j = i + 1; j < POPULAR_FOODS.length; j++) {
      comparisonPages.push({
        url: `${baseUrl}/compare/${POPULAR_FOODS[i].slug}-vs-${POPULAR_FOODS[j].slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    }
  }

  return [...staticPages, ...foodPages, ...categoryPages, ...comparisonPages]
}
