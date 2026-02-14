import { MetadataRoute } from 'next'
import { SITE_URL, FEATURED_FOODS, FOOD_CATEGORIES, POPULAR_FOODS } from '@/lib/constants'
import { getAllFoodSlugs, getStrategicComparisons, getFoodData } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/compare/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lists/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about/`,
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
    url: `${baseUrl}/lists/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Blog article pages
  const blogPages: MetadataRoute.Sitemap = [
    'low-calorie-foods-for-weight-loss',
    'high-protein-foods-for-muscle-building',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}/`,
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
    url: `${baseUrl}/calculators/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Food pages (all 200+ foods from /data/foods/)
  const allFoodSlugs = getAllFoodSlugs()
  const foodPages: MetadataRoute.Sitemap = allFoodSlugs.map((slug) => ({
    url: `${baseUrl}/calories-in/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Category pages (food type categories)
  const categoryPages: MetadataRoute.Sitemap = FOOD_CATEGORIES.map((category) => ({
    url: `${baseUrl}/category/${category.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Nutrition category pages
  const nutritionCategoryPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/categories/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/high-protein-foods/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/low-calorie-foods/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/high-fiber-foods/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/low-carb-foods/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/healthy-fats/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/vitamin-c-foods/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/iron-rich-foods/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories/calcium-foods/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Comparison pages - MUST match generateStaticParams() logic exactly to avoid 404s
  // Uses the same algorithm as app/compare/[comparison]/page.tsx generateStaticParams()
  const comparisonPages: MetadataRoute.Sitemap = []

  // Helper function to validate that both foods exist
  const isValidComparison = (food1: string, food2: string): boolean => {
    return getFoodData(food1) !== null && getFoodData(food2) !== null
  }

  // Get strategic comparisons which includes popular and cross-category pairings
  const strategicComps = getStrategicComparisons()

  // Also keep some popular food comparisons for familiarity
  const popularComps: Array<[string, string]> = []
  for (let i = 0; i < POPULAR_FOODS.length; i++) {
    for (let j = i + 1; j < Math.min(i + 5, POPULAR_FOODS.length); j++) {
      popularComps.push([POPULAR_FOODS[i].slug, POPULAR_FOODS[j].slug])
    }
  }

  // Combine strategic and popular comparisons
  const allComps = [...strategicComps, ...popularComps]

  // Add high-priority comparisons that must be included (indexed by Google)
  const priorityComps: Array<[string, string]> = [
    ['french-fries', 'pizza'],
    ['french-fries', 'blueberry'],
    ['french-fries', 'avocado'],
    ['french-fries', 'grape'],
  ]

  const seen = new Set<string>()

  // First, add priority comparisons (both orders)
  for (const [food1, food2] of priorityComps) {
    if (!isValidComparison(food1, food2)) continue

    const key = food1 < food2 ? `${food1}-${food2}` : `${food2}-${food1}`
    if (!seen.has(key)) {
      seen.add(key)
      const isFeatured = FEATURED_FOODS.some(f => f.slug === food1 || f.slug === food2)
      // Generate both orders to match generateStaticParams
      comparisonPages.push({
        url: `${baseUrl}/compare/${food1}-vs-${food2}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: isFeatured ? 0.7 : 0.6,
      })
      comparisonPages.push({
        url: `${baseUrl}/compare/${food2}-vs-${food1}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: isFeatured ? 0.7 : 0.6,
      })
    }
  }

  // Then add the rest (both orders)
  for (const [food1, food2] of allComps) {
    if (!isValidComparison(food1, food2)) continue

    const key = food1 < food2 ? `${food1}-${food2}` : `${food2}-${food1}`
    if (!seen.has(key)) {
      seen.add(key)
      const isFeatured = FEATURED_FOODS.some(f => f.slug === food1 || f.slug === food2)
      // Generate both orders to match generateStaticParams
      comparisonPages.push({
        url: `${baseUrl}/compare/${food1}-vs-${food2}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: isFeatured ? 0.7 : 0.6,
      })
      comparisonPages.push({
        url: `${baseUrl}/compare/${food2}-vs-${food1}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: isFeatured ? 0.7 : 0.6,
      })
    }
  }

  // Limit to 8000 comparisons to match generateStaticParams
  const limitedComparisonPages = comparisonPages.slice(0, 8000)


  // Meal Prep pages (6 guides + landing page)
  const mealPrepPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/meal-prep/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meal-prep/beginners-guide/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meal-prep/sunday-meal-prep/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meal-prep/budget-meal-prep/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meal-prep/high-protein/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meal-prep/weight-loss/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/meal-prep/family-meal-prep/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Recipe pages (8 categories + landing page)
  const recipePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/recipes/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recipes/high-protein/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/low-calorie/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/keto/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/vegan/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/breakfast/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/lunch/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/dinner/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/recipes/snacks/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
  ]

  return [...staticPages, ...foodPages, ...categoryPages, ...nutritionCategoryPages, ...listPages, ...blogPages, ...calculatorPages, ...limitedComparisonPages, ...recipePages, ...mealPrepPages]
}
