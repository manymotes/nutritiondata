import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getFoodsByCategory, getFoodData } from '@/lib/data'
import { FOOD_CATEGORIES, POPULAR_FOODS } from '@/lib/constants'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate static params for all categories
export async function generateStaticParams() {
  return FOOD_CATEGORIES.map((category) => ({
    slug: category.slug,
  }))
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = FOOD_CATEGORIES.find((c) => c.slug === params.slug)
  if (!category) {
    return { title: 'Category Not Found' }
  }

  return {
    title: `${category.name} Nutrition - Calories & Nutrition Facts`,
    description: `Browse calorie counts and nutrition facts for ${category.name.toLowerCase()}. Compare ${category.name.toLowerCase()} to find the healthiest options.`,
    openGraph: {
      title: `${category.name} Nutrition Guide`,
      description: `Complete nutrition information for ${category.name.toLowerCase()}.`,
    },
  }
}

export default function CategoryPage({ params }: PageProps) {
  const category = FOOD_CATEGORIES.find((c) => c.slug === params.slug)

  if (!category) {
    notFound()
  }

  // Get foods in this category
  const categoryFoods = POPULAR_FOODS
    .filter((f) => f.category === params.slug)
    .map((food) => {
      const data = getFoodData(food.slug)
      return {
        ...food,
        calories: data?.nutritionPer100g.calories || 0,
        protein: data?.nutritionPer100g.protein || 0,
      }
    })

  // Get other categories for navigation
  const otherCategories = FOOD_CATEGORIES.filter((c) => c.slug !== params.slug)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-700">Home</Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{category.name}</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-6xl mb-4 block">{category.icon}</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {category.name} Nutrition
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore calorie counts, protein content, and complete nutrition facts
          for popular {category.name.toLowerCase()}.
        </p>
      </div>

      {/* Foods Grid */}
      {categoryFoods.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categoryFoods.map((food) => (
            <Link
              key={food.slug}
              href={`/calories-in/${food.slug}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {food.name}
              </h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-primary-600">
                    {food.calories} cal
                  </p>
                  <p className="text-sm text-gray-500">per 100g</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-700">
                    {food.protein}g
                  </p>
                  <p className="text-sm text-gray-500">protein</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg mb-12">
          <p className="text-gray-600">
            No foods found in this category yet. Check back soon!
          </p>
        </div>
      )}

      {/* Category Navigation */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Browse Other Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {otherCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600"
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* SEO Content */}
      <div className="mt-12 prose max-w-none">
        <h2>About {category.name}</h2>
        <p>
          Understanding the nutritional content of {category.name.toLowerCase()} helps you
          make informed dietary choices. Each food in this category has unique nutritional
          properties that can support different health goals.
        </p>
        <p>
          Use our comparison tool to see how different {category.name.toLowerCase()} stack
          up against each other, or browse individual pages for detailed nutrition facts
          including calories, protein, carbohydrates, and more.
        </p>
      </div>
    </div>
  )
}
