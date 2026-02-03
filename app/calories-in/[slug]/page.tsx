import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { getFoodData, getAllFoods, getAllFoodSlugs } from '@/lib/data'
import { SITE_NAME, SITE_URL, POPULAR_FOODS, FOOD_CATEGORIES } from '@/lib/constants'
import { getFoodContent } from '@/lib/food-content'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate static params for all foods (now reading from /data/foods/*.json)
export async function generateStaticParams() {
  const allSlugs = getAllFoodSlugs()
  return allSlugs.map((slug) => ({
    slug,
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
    alternates: {
      canonical: `https://caloriedata.org/calories-in/${params.slug}`,
    },
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
  const foodContent = getFoodContent(food.slug)

  // Get related foods from same category for internal linking (5-8 foods)
  const relatedFoods = POPULAR_FOODS
    .filter(f => f.category === food.category && f.slug !== food.slug)
    .slice(0, 8)

  // Get comparison foods from same category
  const comparisonFoods = POPULAR_FOODS
    .filter(f => f.category === food.category && f.slug !== food.slug)
    .slice(0, 6)

  // Get other popular foods for sidebar
  const otherFoods = POPULAR_FOODS
    .filter(f => f.slug !== food.slug)
    .slice(0, 5)

  // Helper function to get nutritional highlights
  const getNutritionalHighlights = () => {
    const highlights = []
    if (nutrition.calories < 50) highlights.push({ icon: '⚡', text: 'Very Low Calorie', desc: `Only ${nutrition.calories} calories per 100g` })
    else if (nutrition.calories < 100) highlights.push({ icon: '🎯', text: 'Low Calorie', desc: `Just ${nutrition.calories} calories per 100g` })

    if (nutrition.protein >= 20) highlights.push({ icon: '💪', text: 'High Protein', desc: `${nutrition.protein}g protein per 100g` })
    else if (nutrition.protein >= 10) highlights.push({ icon: '🥩', text: 'Good Protein Source', desc: `${nutrition.protein}g protein per 100g` })

    if (nutrition.fiber >= 5) highlights.push({ icon: '🌾', text: 'High Fiber', desc: `${nutrition.fiber}g fiber per 100g` })
    else if (nutrition.fiber >= 3) highlights.push({ icon: '🌿', text: 'Good Fiber Source', desc: `${nutrition.fiber}g fiber per 100g` })

    if (nutrition.fat < 3) highlights.push({ icon: '✨', text: 'Low Fat', desc: `Only ${nutrition.fat}g fat per 100g` })

    if (nutrition.carbs < 5) highlights.push({ icon: '🥑', text: 'Low Carb', desc: `Just ${nutrition.carbs}g carbs per 100g` })

    if (nutrition.sugar < 5) highlights.push({ icon: '🍬', text: 'Low Sugar', desc: `Only ${nutrition.sugar}g sugar per 100g` })

    return highlights.slice(0, 4)
  }

  const nutritionalHighlights = getNutritionalHighlights()

  // Generate NutritionInformation schema
  const nutritionSchema = {
    '@context': 'https://schema.org',
    '@type': 'NutritionInformation',
    name: food.name,
    calories: `${nutrition.calories} calories`,
    proteinContent: `${nutrition.protein}g`,
    carbohydrateContent: `${nutrition.carbs}g`,
    fatContent: `${nutrition.fat}g`,
    fiberContent: `${nutrition.fiber}g`,
    sugarContent: `${nutrition.sugar}g`,
    sodiumContent: `${nutrition.sodium}mg`,
    servingSize: '100g',
  }

  // Generate WebPage schema with breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      category && {
        '@type': 'ListItem',
        position: 2,
        name: category.name,
        item: `${SITE_URL}/category/${category.slug}`,
      },
      {
        '@type': 'ListItem',
        position: category ? 3 : 2,
        name: food.name,
        item: `${SITE_URL}/calories-in/${params.slug}`,
      },
    ].filter(Boolean),
  }

  return (
    <>
      <Script
        id="nutrition-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nutritionSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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

          {/* Nutritional Highlights */}
          {nutritionalHighlights.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nutritional Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nutritionalHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-5 border-l-4 border-primary-600 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-3xl">{highlight.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{highlight.text}</h3>
                        <p className="text-gray-600 text-sm mt-1">{highlight.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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

          {/* Macro Breakdown Visual */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Macronutrient Distribution</h3>
            <div className="space-y-4">
              {/* Protein Bar */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Protein</span>
                  <span className="text-sm font-semibold text-red-600">
                    {nutrition.protein}g ({Math.round((nutrition.protein * 4 / nutrition.calories) * 100)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-red-500 h-3 rounded-full transition-all"
                    style={{ width: `${Math.min((nutrition.protein * 4 / nutrition.calories) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Carbs Bar */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Carbohydrates</span>
                  <span className="text-sm font-semibold text-blue-600">
                    {nutrition.carbs}g ({Math.round((nutrition.carbs * 4 / nutrition.calories) * 100)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all"
                    style={{ width: `${Math.min((nutrition.carbs * 4 / nutrition.calories) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Fat Bar */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Fat</span>
                  <span className="text-sm font-semibold text-yellow-600">
                    {nutrition.fat}g ({Math.round((nutrition.fat * 9 / nutrition.calories) * 100)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-yellow-500 h-3 rounded-full transition-all"
                    style={{ width: `${Math.min((nutrition.fat * 9 / nutrition.calories) * 100, 100)}%` }}
                  ></div>
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

          {/* Related Foods Section */}
          {relatedFoods.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Related Foods in {category?.name || food.category}
              </h2>
              <p className="text-gray-600 mb-4">
                Explore other foods in the {category?.name || food.category} category:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {relatedFoods.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/calories-in/${related.slug}`}
                    className="group block bg-gray-50 hover:bg-primary-50 rounded-lg p-4 border border-gray-200 hover:border-primary-300 transition-all"
                  >
                    <div className="text-center">
                      <p className="font-medium text-gray-900 group-hover:text-primary-700 text-sm mb-1">
                        {related.name}
                      </p>
                      <p className="text-xs text-gray-500">View Nutrition →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Compare with Similar Foods */}
          {comparisonFoods.length > 0 && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Compare {food.name} with Similar Foods
              </h2>
              <p className="text-gray-700 mb-4">
                See how {food.name} stacks up against other foods in nutritional value:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {comparisonFoods.map((compareFood) => (
                  <Link
                    key={compareFood.slug}
                    href={`/compare/${food.slug}-vs-${compareFood.slug}`}
                    className="flex items-center justify-between bg-white hover:bg-blue-50 rounded-lg p-4 border border-blue-200 hover:border-blue-400 transition-all group"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">⚖️</span>
                      <span className="font-medium text-gray-900 group-hover:text-blue-700">
                        {food.name} vs {compareFood.name}
                      </span>
                    </div>
                    <span className="text-blue-600 group-hover:text-blue-700 font-medium">
                      Compare →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* About Section */}
          <div className="prose max-w-none">
            <h2>About {food.name} Nutrition</h2>
            <p>
              {foodContent.description}
            </p>
            <p>
              With {nutrition.calories} calories per 100 grams, {food.name} provides {nutrition.protein}g of protein,
              {nutrition.carbs}g of carbohydrates, and {nutrition.fat}g of fat.
            </p>

            <h3>Macronutrient Breakdown</h3>
            <ul>
              <li><strong>Protein:</strong> {nutrition.protein}g - {Math.round((nutrition.protein * 4 / nutrition.calories) * 100)}% of calories</li>
              <li><strong>Carbohydrates:</strong> {nutrition.carbs}g - {Math.round((nutrition.carbs * 4 / nutrition.calories) * 100)}% of calories</li>
              <li><strong>Fat:</strong> {nutrition.fat}g - {Math.round((nutrition.fat * 9 / nutrition.calories) * 100)}% of calories</li>
            </ul>

            <h3>Health Benefits of {food.name}</h3>
            <ul>
              {foodContent.healthBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h3>How to Eat {food.name}</h3>
            <p>{foodContent.howToEat}</p>

            <h3>Selection and Storage</h3>
            <p>{foodContent.storageAndSelection}</p>

            <h3>Dietary Considerations</h3>
            <p>{foodContent.dietaryConsiderations}</p>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About {food.name} Calories
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How many calories are in {food.name}?
                </h3>
                <p className="text-gray-700">
                  {food.name} contains {nutrition.calories} calories per 100 grams. A typical serving
                  may contain more or fewer calories depending on the portion size. For example,
                  a {food.servingSizes[2]?.label || 'standard serving'} contains approximately{' '}
                  {Math.round((nutrition.calories * (food.servingSizes[2]?.grams || 85)) / 100)} calories.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is {food.name} good for weight loss?
                </h3>
                <p className="text-gray-700">
                  {nutrition.calories < 100
                    ? `Yes, ${food.name} is relatively low in calories with only ${nutrition.calories} calories per 100g, making it a good choice for weight loss diets when consumed as part of a balanced eating plan.`
                    : nutrition.calories < 200
                    ? `${food.name} has a moderate calorie content of ${nutrition.calories} calories per 100g. It can be part of a weight loss diet when consumed in appropriate portions.`
                    : `${food.name} contains ${nutrition.calories} calories per 100g, which is relatively calorie-dense. While it can be enjoyed as part of a weight loss diet, portion control is important.`
                  }
                  {nutrition.protein > 10 && ` The ${nutrition.protein}g of protein per 100g helps promote satiety and can support weight management.`}
                  {nutrition.fiber > 3 && ` With ${nutrition.fiber}g of fiber per 100g, it also helps keep you feeling full longer.`}
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is {food.name} high in protein?
                </h3>
                <p className="text-gray-700">
                  {nutrition.protein >= 20
                    ? `Yes, ${food.name} is an excellent source of protein with ${nutrition.protein}g per 100g. This makes it a great choice for building muscle, supporting recovery after exercise, and maintaining overall health.`
                    : nutrition.protein >= 10
                    ? `${food.name} is a good source of protein with ${nutrition.protein}g per 100g. While not the highest protein food, it contributes meaningfully to daily protein needs.`
                    : `${food.name} contains ${nutrition.protein}g of protein per 100g, which is relatively modest. Consider pairing it with higher-protein foods to meet your protein goals.`
                  }
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What vitamins and nutrients are in {food.name}?
                </h3>
                <p className="text-gray-700">
                  {food.name} provides several important nutrients including {nutrition.protein}g of protein,
                  {nutrition.carbs}g of carbohydrates (including {nutrition.fiber}g of fiber and {nutrition.sugar}g of sugar),
                  and {nutrition.fat}g of fat per 100g. It also contains {nutrition.sodium}mg of sodium.
                  The specific vitamin and mineral content varies, but {food.name.toLowerCase()} can contribute
                  to a balanced, nutritious diet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 border-2 border-primary-200">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Quick Nutrition Facts</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Category</span>
                  <span className="font-semibold text-primary-700">{category?.name || food.category}</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Calories/100g</span>
                  <span className="font-bold text-2xl text-primary-600">{nutrition.calories}</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Protein</span>
                  <span className="font-semibold text-gray-900">{nutrition.protein}g</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Carbs</span>
                  <span className="font-semibold text-gray-900">{nutrition.carbs}g</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Fat</span>
                  <span className="font-semibold text-gray-900">{nutrition.fat}g</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Comparisons */}
          {comparisonFoods.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Quick Comparisons
              </h3>
              <ul className="space-y-2">
                {comparisonFoods.slice(0, 4).map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/compare/${food.slug}-vs-${related.slug}`}
                      className="text-primary-600 hover:text-primary-700 text-sm flex items-center space-x-1"
                    >
                      <span>vs {related.name}</span>
                      <span>→</span>
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

          {/* Explore More Foods */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border-2 border-green-200 p-6">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Explore More Foods</h3>
            <p className="text-sm text-gray-700 mb-4">
              Discover nutrition data for thousands of foods
            </p>
            <Link
              href="/category"
              className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Browse Categories
            </Link>
          </div>

          {/* CTA */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Track Your Nutrition</h3>
            <p className="text-sm text-gray-600 mb-4">
              Monitor your daily intake to reach your health goals
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
    </div>
    </>
  )
}
