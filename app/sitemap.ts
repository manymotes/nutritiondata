import { MetadataRoute } from 'next'
import { SITE_URL, FEATURED_FOODS, FOOD_CATEGORIES } from '@/lib/constants'
import { getAllFoodSlugs, getStrategicComparisons } from '@/lib/data'
import { getAllWaterQualitySlugs } from '@/lib/waterQualityData'

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
    {
      url: `${baseUrl}/water-quality`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
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
    'bmi-calculator',
    'calorie-calculator',
    'macro-calculator',
    'meal-planner',
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

  // Category pages (food type categories)
  const categoryPages: MetadataRoute.Sitemap = FOOD_CATEGORIES.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Nutrition category pages
  const nutritionCategoryPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/high-protein-foods`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/low-calorie-foods`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/high-fiber-foods`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/low-carb-foods`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/healthy-fats`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/vitamin-c-foods`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/iron-rich-foods`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/calcium-foods`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Comparison pages (strategic comparisons - 1,000+ pages)
  // Uses getStrategicComparisons which generates within-category and cross-category comparisons
  const strategicComps = getStrategicComparisons()
  const comparisonPages: MetadataRoute.Sitemap = []

  // Add strategic comparisons (high-value SEO comparisons)
  for (const [food1, food2] of strategicComps) {
    const slug = `${food1}-vs-${food2}`
    comparisonPages.push({
      url: `${baseUrl}/compare/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })
  }

  // Also add featured food comparisons for high-traffic terms
  for (let i = 0; i < Math.min(50, FEATURED_FOODS.length); i++) {
    for (let j = i + 1; j < Math.min(i + 10, FEATURED_FOODS.length); j++) {
      const slug = `${FEATURED_FOODS[i].slug}-vs-${FEATURED_FOODS[j].slug}`
      // Only add if not already in strategic comparisons
      if (!comparisonPages.find(p => p.url.endsWith(slug))) {
        comparisonPages.push({
          url: `${baseUrl}/compare/${slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7, // Higher priority for featured foods
        })
      }
    }
  }

  // Water Quality pages (all cities)
  const allWaterQualitySlugs = getAllWaterQualitySlugs()
  const waterQualityPages: MetadataRoute.Sitemap = allWaterQualitySlugs.map((slug) => ({
    url: `${baseUrl}/water-quality/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...foodPages, ...categoryPages, ...nutritionCategoryPages, ...listPages, ...blogPages, ...calculatorPages, ...comparisonPages, ...waterQualityPages]
}
