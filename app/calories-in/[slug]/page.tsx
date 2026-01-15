import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getFoodData, getAllFoods } from '@/lib/data'
import { SITE_NAME, POPULAR_FOODS, FOOD_CATEGORIES } from '@/lib/constants'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate static params for all foods
export async function generateStaticParams() {
  return POPULAR_FOODS.map((food) => ({
    slug: food.slug,
  }))
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const food = getFoodData(params.slug)
  if (!food) {
    return { title: 'Food Not Found' }
  }

  const calories = food.nutritionPer100g.calories

  return {
    title: `Calories in ${food.name} - ${calories} kcal per 100g`,
    description: `${food.name} has ${calories} calories per 100g. Get full nutrition facts including protein (${food.nutritionPer100g.protein}g), carbs (${food.nutritionPer100g.carbs}g), and fat (${food.nutritionPer100g.fat}g). Compare with similar foods.`,
    openGraph: {
      title: `Calories in ${food.name}`,
      description: `${calories} calories per 100g. Full nutrition facts and comparisons.`,
    },
  }
}

export default function FoodPage({ params }: PageProps) {
  const food = getFoodData(params.slug)

  if (!food) {
    notFound()
  }

  const { nutritionPer100g: nutrition } = food
  const category = FOOD_CATEGORIES.find(c => c.slug === food.category)

  // Get related foods for comparison
  const relatedFoods = POPULAR_FOODS
    .filter(f => f.category === food.category && f.slug !== food.slug)
    .slice(0, 4)

  // Get other popular foods for comparison
  const otherFoods = POPULAR_FOODS
    .filter(f => f.slug !== food.slug)
    .slice(0, 5)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-700">Home</Link>
          </li>
          <li>/</li>
          {category && (
            <>
              <li>
                <Link href={`/category/${category.slug}`} className="hover:text-gray-700">
                  {category.name}
                </Link>
              </li>
              <li>/</li>
            </>
          )}
          <li className="text-gray-900 font-medium">{food.name}</li>
        </ol>
      </nav>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Calories in {food.name}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {food.name} contains <strong>{nutrition.calories} calories</strong> per 100 grams.
            Here&apos;s the complete nutrition breakdown.
          </p>

          {/* Main Nutrition Card */}
          <div className="bg-white rounded-lg border-2 border-gray-900 overflow-hidden mb-8">
            <div className="bg-gray-900 text-white px-6 py-4">
              <h2 className="text-xl font-bold">Nutrition Facts</h2>
              <p className="text-gray-300 text-sm">Per 100g serving</p>
            </div>

            <div className="p-6">
              {/* Calories */}
              <div className="flex justify-between items-center py-3 border-b-4 border-gray-900">
                <span className="text-2xl font-bold">Calories</span>
                <span className="text-3xl font-bold text-primary-600">{nutrition.calories}</span>
              </div>

              {/* Macros */}
              <div className="py-4 space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold">Total Fat</span>
                  <span className="font-bold">{nutrition.fat}g</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold">Total Carbohydrate</span>
                  <span className="font-bold">{nutrition.carbs}g</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 pl-4">
                  <span className="text-gray-600">Dietary Fiber</span>
                  <span>{nutrition.fiber}g</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 pl-4">
                  <span className="text-gray-600">Sugars</span>
                  <span>{nutrition.sugar}g</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold">Protein</span>
                  <span className="font-bold">{nutrition.protein}g</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold">Sodium</span>
                  <span className="font-bold">{nutrition.sodium}mg</span>
                </div>
              </div>
            </div>
          </div>

          {/* Serving Sizes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Calories by Serving Size</h3>
            <div className="space-y-3">
              {food.servingSizes.map((serving) => {
                const servingCalories = Math.round((nutrition.calories * serving.grams) / 100)
                return (
                  <div key={serving.label} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">{serving.label}</span>
                    <span className="font-semibold text-primary-600">{servingCalories} cal</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* About Section */}
          <div className="prose max-w-none">
            <h2>About {food.name} Nutrition</h2>
            <p>
              {food.name} is a nutritious food containing {nutrition.calories} calories per 100 grams.
              With {nutrition.protein}g of protein, {nutrition.carbs}g of carbohydrates, and {nutrition.fat}g of fat,
              it can be part of a balanced diet.
            </p>

            <h3>Macronutrient Breakdown</h3>
            <ul>
              <li><strong>Protein:</strong> {nutrition.protein}g - {Math.round((nutrition.protein * 4 / nutrition.calories) * 100)}% of calories</li>
              <li><strong>Carbohydrates:</strong> {nutrition.carbs}g - {Math.round((nutrition.carbs * 4 / nutrition.calories) * 100)}% of calories</li>
              <li><strong>Fat:</strong> {nutrition.fat}g - {Math.round((nutrition.fat * 9 / nutrition.calories) * 100)}% of calories</li>
            </ul>

            <h3>Health Considerations</h3>
            <p>
              {nutrition.fiber > 3
                ? `${food.name} is a good source of dietary fiber with ${nutrition.fiber}g per 100g, which supports digestive health.`
                : `${food.name} contains ${nutrition.fiber}g of fiber per 100g.`
              }
              {nutrition.protein > 15
                ? ` It's also high in protein, making it a great choice for muscle building and satiety.`
                : ''
              }
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Facts</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Category</span>
                <span className="font-medium">{category?.name || food.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Calories/100g</span>
                <span className="font-medium">{nutrition.calories}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Protein/100g</span>
                <span className="font-medium">{nutrition.protein}g</span>
              </div>
            </div>
          </div>

          {/* Compare with similar foods */}
          {relatedFoods.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Compare {food.name} to:
              </h3>
              <ul className="space-y-2">
                {relatedFoods.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/compare/${food.slug}-vs-${related.slug}`}
                      className="text-primary-600 hover:text-primary-700 text-sm"
                    >
                      {related.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Other comparisons */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Popular Comparisons</h3>
            <ul className="space-y-2">
              {otherFoods.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/compare/${food.slug}-vs-${other.slug}`}
                    className="text-primary-600 hover:text-primary-700 text-sm"
                  >
                    vs {other.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Track Your Calories</h3>
            <p className="text-sm text-gray-600 mb-4">
              Use a calorie tracking app to monitor your daily intake.
            </p>
            <a
              href="https://www.myfitnesspal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary-600 text-white text-center py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Try MyFitnessPal
            </a>
          </div>
        </div>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NutritionInformation',
            name: food.name,
            calories: `${nutrition.calories} calories`,
            servingSize: '100g',
            proteinContent: `${nutrition.protein}g`,
            carbohydrateContent: `${nutrition.carbs}g`,
            fatContent: `${nutrition.fat}g`,
            fiberContent: `${nutrition.fiber}g`,
            sugarContent: `${nutrition.sugar}g`,
            sodiumContent: `${nutrition.sodium}mg`,
          }),
        }}
      />
    </div>
  )
}
