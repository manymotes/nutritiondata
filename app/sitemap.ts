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

  // Comparison pages (strategic comparisons - 5,000+ pages)
  // Uses getStrategicComparisons which generates:
  // - Within-category comparisons (apple vs banana)
  // - Cross-category comparisons (chicken vs salmon)
  // - Calorie-based comparisons (similar calorie foods)
  // - Protein-based comparisons (high-protein foods)
  // - Healthy vs unhealthy alternatives (sweet-potato vs fries)
  const strategicComps = getStrategicComparisons()
  const comparisonPages: MetadataRoute.Sitemap = []

  // Add all strategic comparisons (optimized algorithm generates 5,800+ comparisons)
  // Featured foods get higher priority automatically since they appear in more comparisons
  for (const [food1, food2] of strategicComps) {
    const slug = `${food1}-vs-${food2}`

    // Check if this involves featured foods for priority boost
    const isFeatured = FEATURED_FOODS.some(f => f.slug === food1 || f.slug === food2)

    comparisonPages.push({
      url: `${baseUrl}/compare/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: isFeatured ? 0.7 : 0.6,
    })
  }

  // Water Quality pages (all cities)
  const allWaterQualitySlugs = getAllWaterQualitySlugs()
  const waterQualityPages: MetadataRoute.Sitemap = allWaterQualitySlugs.map((slug) => ({
    url: `${baseUrl}/water-quality/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Meal Prep pages (6 guides + landing page)
  const mealPrepPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/meal-prep`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meal-prep/beginners-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meal-prep/sunday-meal-prep`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meal-prep/budget-meal-prep`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meal-prep/high-protein`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meal-prep/weight-loss`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meal-prep/family-meal-prep`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Recipe pages (8 categories + landing page)
  const recipePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/recipes`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recipes/high-protein`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/low-calorie`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/keto`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/vegan`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/breakfast`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/lunch`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/dinner`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/snacks`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
  ]

  return [...staticPages, ...foodPages, ...categoryPages, ...nutritionCategoryPages, ...listPages, ...blogPages, ...calculatorPages, ...comparisonPages, ...waterQualityPages, ...recipePages, ...mealPrepPages]
}
