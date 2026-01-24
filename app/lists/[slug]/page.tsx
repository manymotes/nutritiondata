import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { POPULAR_FOODS, SITE_NAME } from '@/lib/constants'
import { getFoodData } from '@/lib/data'

interface PageProps {
  params: {
    slug: string
  }
}

// Define list configurations
const LISTS = {
  'low-calorie-foods': {
    title: 'Low Calorie Foods',
    description: 'Top 30 foods under 50 calories per 100g. Perfect for weight loss and calorie-conscious eating.',
    icon: '🥬',
    filter: (food: any) => food.nutritionPer100g.calories <= 50,
    sortBy: 'calories' as const,
    sortOrder: 'asc' as const,
  },
  'high-protein-foods': {
    title: 'High Protein Foods',
    description: 'Top 30 foods with the highest protein content. Perfect for muscle building and satiety.',
    icon: '💪',
    filter: (food: any) => food.nutritionPer100g.protein >= 15,
    sortBy: 'protein' as const,
    sortOrder: 'desc' as const,
  },
  'low-carb-foods': {
    title: 'Low Carb Foods',
    description: 'Top 30 foods with under 10g carbs per 100g. Perfect for keto and low-carb diets.',
    icon: '🥑',
    filter: (food: any) => food.nutritionPer100g.carbs <= 10,
    sortBy: 'carbs' as const,
    sortOrder: 'asc' as const,
  },
  'weight-loss-foods': {
    title: 'Best Foods for Weight Loss',
    description: 'Top 30 nutrient-dense, low-calorie foods that support healthy weight loss.',
    icon: '⚖️',
    filter: (food: any) => food.nutritionPer100g.calories <= 100 && food.nutritionPer100g.fiber >= 2,
    sortBy: 'calories' as const,
    sortOrder: 'asc' as const,
  },
  'high-fiber-foods': {
    title: 'High Fiber Foods',
    description: 'Top 30 foods richest in dietary fiber. Perfect for digestive health.',
    icon: '🌾',
    filter: (food: any) => food.nutritionPer100g.fiber >= 3,
    sortBy: 'fiber' as const,
    sortOrder: 'desc' as const,
  },
  'low-fat-foods': {
    title: 'Low Fat Foods',
    description: 'Top 30 foods with minimal fat content. Perfect for heart health and low-fat diets.',
    icon: '❤️',
    filter: (food: any) => food.nutritionPer100g.fat <= 5,
    sortBy: 'fat' as const,
    sortOrder: 'asc' as const,
  },
}

type ListSlug = keyof typeof LISTS

// Generate static params
export async function generateStaticParams() {
  return Object.keys(LISTS).map((slug) => ({ slug }))
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const listConfig = LISTS[params.slug as ListSlug]

  if (!listConfig) {
    return { title: 'List Not Found' }
  }

  return {
    title: `${listConfig.title} - Complete Nutrition Guide | ${SITE_NAME}`,
    description: listConfig.description,
    openGraph: {
      title: listConfig.title,
      description: listConfig.description,
    },
  }
}

export default function ListPage({ params }: PageProps) {
  const listConfig = LISTS[params.slug as ListSlug]

  if (!listConfig) {
    notFound()
  }

  // Get all foods with nutrition data
  const allFoods = POPULAR_FOODS.map((food) => {
    const data = getFoodData(food.slug)
    return data ? { ...food, ...data } : null
  }).filter((food): food is NonNullable<typeof food> => food !== null)

  // Filter and sort foods
  const filteredFoods = allFoods
    .filter(listConfig.filter)
    .sort((a, b) => {
      const aVal = a.nutritionPer100g[listConfig.sortBy]
      const bVal = b.nutritionPer100g[listConfig.sortBy]
      return listConfig.sortOrder === 'asc' ? aVal - bVal : bVal - aVal
    })
    .slice(0, 30)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
          <li>/</li>
          <li><Link href="/lists" className="hover:text-gray-700">Lists</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{listConfig.title}</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-5xl mb-4">{listConfig.icon}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {listConfig.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {listConfig.description}
        </p>
      </div>

      {/* Food List */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-12">
        <div className="grid grid-cols-5 bg-gray-50 border-b border-gray-200 p-4 font-semibold text-gray-700 text-sm">
          <div className="col-span-2">Food</div>
          <div className="text-center">Calories</div>
          <div className="text-center">Protein</div>
          <div className="text-center">Carbs</div>
        </div>

        {filteredFoods.map((food, index) => (
          <Link
            key={food.slug}
            href={`/calories-in/${food.slug}`}
            className="grid grid-cols-5 border-b border-gray-100 p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="col-span-2 flex items-center gap-3">
              <span className="text-gray-400 font-medium text-sm w-6">{index + 1}.</span>
              <span className="font-medium text-gray-900">{food.name}</span>
            </div>
            <div className="text-center text-gray-700">
              {food.nutritionPer100g.calories} kcal
            </div>
            <div className="text-center text-gray-700">
              {food.nutritionPer100g.protein}g
            </div>
            <div className="text-center text-gray-700">
              {food.nutritionPer100g.carbs}g
            </div>
          </Link>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-primary-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Nutrition Information
        </h2>
        <p className="text-gray-700">
          All values shown are per 100g serving. Click any food to see complete
          nutrition facts, serving sizes, and detailed micronutrient information.
          Data sourced from USDA FoodData Central.
        </p>
      </div>

      {/* Related Lists */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">More Food Lists</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(LISTS)
            .filter(([slug]) => slug !== params.slug)
            .slice(0, 6)
            .map(([slug, config]) => (
              <Link
                key={slug}
                href={`/lists/${slug}`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                {config.icon} {config.title} →
              </Link>
            ))}
        </div>
      </div>

      {/* SEO Content */}
      <div className="mt-12 prose max-w-none">
        <h2>About This List</h2>
        <p>
          This curated list of {listConfig.title.toLowerCase()} is based on verified
          nutrition data from the USDA FoodData Central database. We've analyzed
          thousands of foods to bring you the top options in this category.
        </p>

        <h3>How to Use This List</h3>
        <p>
          Browse the foods above to find options that fit your dietary needs. Click
          any food to see complete nutrition information including vitamins, minerals,
          and serving size options. Use our comparison tool to evaluate foods side-by-side.
        </p>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: listConfig.title,
            description: listConfig.description,
            numberOfItems: filteredFoods.length,
            itemListElement: filteredFoods.slice(0, 10).map((food, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Thing',
                name: food.name,
                url: `https://caloriedata.org/calories-in/${food.slug}`,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
