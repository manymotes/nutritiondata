import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { compareFoods, getFoodData, getStrategicComparisons, getRelatedComparisons } from '@/lib/data'
import { POPULAR_FOODS } from '@/lib/constants'
import { getComparisonContent, hasCustomComparisonContent } from '@/lib/comparison-content'

interface PageProps {
  params: {
    comparison: string
  }
}

// Parse comparison slug
function parseComparison(comparison: string): { food1: string; food2: string } | null {
  const parts = comparison.split('-vs-')
  if (parts.length !== 2) return null
  return { food1: parts[0], food2: parts[1] }
}

// Generate static params for strategic comparisons
export async function generateStaticParams() {
  try {
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
    const comparisons: { comparison: string }[] = []

    // First, add priority comparisons
    for (const [food1, food2] of priorityComps) {
      const key = food1 < food2 ? `${food1}-${food2}` : `${food2}-${food1}`
      if (!seen.has(key)) {
        seen.add(key)
        // Generate both orders to handle legacy URLs indexed by Google
        comparisons.push({
          comparison: `${food1}-vs-${food2}`,
        })
        comparisons.push({
          comparison: `${food2}-vs-${food1}`,
        })
      }
    }

    // Then add the rest
    for (const [food1, food2] of allComps) {
      const key = food1 < food2 ? `${food1}-${food2}` : `${food2}-${food1}`
      if (!seen.has(key)) {
        seen.add(key)
        // Generate both orders to handle legacy URLs indexed by Google
        comparisons.push({
          comparison: `${food1}-vs-${food2}`,
        })
        comparisons.push({
          comparison: `${food2}-vs-${food1}`,
        })
      }
    }

    return comparisons.slice(0, 8000) // Limit to 8000 comparisons (4000 pairs × 2 orders)
  } catch (error) {
    console.error('Error generating comparison params:', error)
    // Fallback to popular foods only
    const comparisons: { comparison: string }[] = []
    for (let i = 0; i < POPULAR_FOODS.length; i++) {
      for (let j = i + 1; j < POPULAR_FOODS.length; j++) {
        comparisons.push({
          comparison: `${POPULAR_FOODS[i].slug}-vs-${POPULAR_FOODS[j].slug}`,
        })
      }
    }
    return comparisons
  }
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const parsed = parseComparison(params.comparison)
  if (!parsed) return { title: 'Comparison Not Found' }

  const food1 = getFoodData(parsed.food1)
  const food2 = getFoodData(parsed.food2)

  if (!food1 || !food2) return { title: 'Comparison Not Found' }

  const cal1 = food1.nutritionPer100g.calories
  const cal2 = food2.nutritionPer100g.calories
  const diff = Math.abs(cal1 - cal2)
  const lower = cal1 < cal2 ? food1.name : food2.name

  // Normalize canonical URL to alphabetical order to avoid duplicate content
  const canonicalSlug = parsed.food1 < parsed.food2
    ? `${parsed.food1}-vs-${parsed.food2}`
    : `${parsed.food2}-vs-${parsed.food1}`

  return {
    title: `${food1.name} vs ${food2.name} - Calories & Nutrition Comparison`,
    description: `Compare ${food1.name} (${cal1} cal) vs ${food2.name} (${cal2} cal). ${lower} has ${diff} fewer calories per 100g. See which is healthier with full nutrition comparison.`,
    alternates: {
      canonical: `https://caloriedata.org/compare/${canonicalSlug}`,
    },
    openGraph: {
      title: `${food1.name} vs ${food2.name} Nutrition`,
      description: `Which is healthier? Compare calories, protein, carbs, and more.`,
    },
  }
}

export default function ComparisonPage({ params }: PageProps) {
  const parsed = parseComparison(params.comparison)

  if (!parsed) {
    notFound()
  }

  const comparison = compareFoods(parsed.food1, parsed.food2)

  if (!comparison) {
    notFound()
  }

  const { food1, food2, winners, healthScore } = comparison
  const n1 = food1.nutritionPer100g
  const n2 = food2.nutritionPer100g

  // Get custom comparison content (FAQs, etc.)
  const comparisonContent = getComparisonContent(food1.slug, food2.slug)
  const hasCustomContent = hasCustomComparisonContent(food1.slug, food2.slug)

  // Get related comparisons
  const relatedComps = getRelatedComparisons(food1.slug, food2.slug, 6)

  // Determine healthier food
  const healthierFood = healthScore.winner === 'tie'
    ? null
    : healthScore.winner === food1.slug ? food1 : food2
  const lessHealthyFood = healthScore.winner === 'tie'
    ? null
    : healthScore.winner === food1.slug ? food2 : food1

  // Generate verdict
  const verdict = healthierFood
    ? `${healthierFood.name} is generally healthier`
    : 'Both foods have similar nutritional profiles'

  // Calculate percentage differences
  const calorieDiff = n1.calories - n2.calories
  const caloriePercent = n2.calories > 0 ? ((calorieDiff / n2.calories) * 100).toFixed(0) : 0
  const proteinDiff = n1.protein - n2.protein
  const proteinPercent = n2.protein > 0 ? ((proteinDiff / n2.protein) * 100).toFixed(0) : 0

  const nutrients = [
    { key: 'calories', label: 'Calories', unit: 'kcal', winner: winners.lowerCalories, lowerBetter: true },
    { key: 'protein', label: 'Protein', unit: 'g', winner: winners.higherProtein, lowerBetter: false },
    { key: 'carbs', label: 'Carbohydrates', unit: 'g', winner: winners.lowerCarbs, lowerBetter: true },
    { key: 'fat', label: 'Fat', unit: 'g', winner: winners.lowerFat, lowerBetter: true },
    { key: 'fiber', label: 'Fiber', unit: 'g', winner: winners.higherFiber, lowerBetter: false },
    { key: 'sugar', label: 'Sugar', unit: 'g', winner: winners.lowerSugar, lowerBetter: true },
    { key: 'sodium', label: 'Sodium', unit: 'mg', winner: winners.lowerSodium, lowerBetter: true },
  ]

  // Common uses data
  const commonUses: Record<string, string[]> = {
    'fruits': ['Fresh snacks', 'Smoothies', 'Desserts', 'Breakfast bowls'],
    'vegetables': ['Salads', 'Stir-fries', 'Roasted sides', 'Soups'],
    'proteins': ['Main dishes', 'Meal prep', 'Grilling', 'High-protein meals'],
    'grains': ['Side dishes', 'Breakfast', 'Meal base', 'Energy food'],
    'dairy': ['Breakfast', 'Snacks', 'Cooking ingredient', 'Post-workout'],
    'nuts-seeds': ['Snacking', 'Toppings', 'Trail mix', 'Baking'],
    'beverages': ['Hydration', 'Morning ritual', 'Social occasions', 'Energy boost'],
    'fast-food': ['Quick meals', 'Dining out', 'Social eating', 'Convenience'],
    'snacks': ['Between meals', 'Movie nights', 'Parties', 'Travel food'],
    'desserts': ['Treats', 'Celebrations', 'Comfort food', 'Social occasions'],
  }

  // Diet compatibility function
  const getDietCompatibility = (food: typeof food1): string[] => {
    const diets: string[] = []
    const n = food.nutritionPer100g

    // Keto: Low carb (<=5g), high fat (>=10g)
    if (n.carbs <= 5 && n.fat >= 10) diets.push('Keto')

    // Low-carb: <=10g carbs
    if (n.carbs <= 10) diets.push('Low-Carb')

    // High-protein: >=15g protein
    if (n.protein >= 15) diets.push('High-Protein')

    // Low-calorie: <=100 cal
    if (n.calories <= 100) diets.push('Low-Calorie')

    // Vegan: Exclude meat, dairy, eggs
    if (!['proteins', 'dairy', 'fast-food'].includes(food.category) || food.slug === 'tofu') {
      diets.push('Vegan')
    }

    // Vegetarian: Exclude meat but allow dairy/eggs
    if (!['proteins', 'fast-food'].includes(food.category) || ['egg', 'tofu'].includes(food.slug) || food.category === 'dairy') {
      diets.push('Vegetarian')
    }

    // Paleo: Whole foods (fruits, vegetables, proteins, nuts)
    if (['fruits', 'vegetables', 'proteins', 'nuts-seeds'].includes(food.category)) {
      diets.push('Paleo')
    }

    // Low-sodium: <=200mg sodium
    if (n.sodium <= 200) diets.push('Low-Sodium')

    return diets
  }

  const food1Diets = getDietCompatibility(food1)
  const food2Diets = getDietCompatibility(food2)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
          <li>/</li>
          <li><Link href="/compare" className="hover:text-gray-700">Compare</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{food1.name} vs {food2.name}</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {food1.name} vs {food2.name}
        </h1>
        <p className="text-lg text-gray-600">
          Complete nutrition comparison per 100g serving
        </p>
      </div>

      {/* Healthier Verdict Section */}
      <div className="bg-gradient-to-r from-green-50 to-primary-50 rounded-lg p-8 mb-8 border-2 border-green-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Which is Healthier?
          </h2>
          <p className="text-3xl font-bold text-green-700 mb-4">
            {verdict}
          </p>
          <div className="max-w-3xl mx-auto text-gray-700">
            {healthierFood ? (
              <p className="text-base leading-relaxed">
                <strong>{healthierFood.name}</strong> comes out ahead in this comparison, winning in{' '}
                <strong>{healthScore[healthierFood.slug === food1.slug ? 'food1' : 'food2']} out of 5</strong> key nutritional categories.
                It has {winners.lowerCalories === healthierFood.slug && `fewer calories (${healthierFood.nutritionPer100g.calories} vs ${lessHealthyFood?.nutritionPer100g.calories}), `}
                {winners.higherProtein === healthierFood.slug && `more protein (${healthierFood.nutritionPer100g.protein}g vs ${lessHealthyFood?.nutritionPer100g.protein}g), `}
                {winners.higherFiber === healthierFood.slug && `more fiber (${healthierFood.nutritionPer100g.fiber}g vs ${lessHealthyFood?.nutritionPer100g.fiber}g), `}
                {winners.lowerSugar === healthierFood.slug && `less sugar (${healthierFood.nutritionPer100g.sugar}g vs ${lessHealthyFood?.nutritionPer100g.sugar}g), `}
                {winners.lowerSodium === healthierFood.slug && `less sodium (${healthierFood.nutritionPer100g.sodium}mg vs ${lessHealthyFood?.nutritionPer100g.sodium}mg)`}
                making it the better choice for most health goals.
              </p>
            ) : (
              <p className="text-base leading-relaxed">
                Both foods have similar nutritional profiles with each winning in different categories. Your choice should depend on your specific dietary goals
                and preferences. {food1.name} has {n1.calories} calories while {food2.name} has {n2.calories} calories per 100g.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Winner Summary */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Summary</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Fewer Calories</p>
            <p className="text-lg font-bold text-primary-600">
              {winners.lowerCalories === food1.slug ? food1.name : food2.name}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {winners.lowerCalories === food1.slug ? n1.calories : n2.calories} kcal
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">More Protein</p>
            <p className="text-lg font-bold text-primary-600">
              {winners.higherProtein === food1.slug ? food1.name : food2.name}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {winners.higherProtein === food1.slug ? n1.protein : n2.protein}g
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">More Fiber</p>
            <p className="text-lg font-bold text-primary-600">
              {winners.higherFiber === food1.slug ? food1.name : food2.name}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {winners.higherFiber === food1.slug ? n1.fiber : n2.fiber}g
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Less Sugar</p>
            <p className="text-lg font-bold text-primary-600">
              {winners.lowerSugar === food1.slug ? food1.name : food2.name}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {winners.lowerSugar === food1.slug ? n1.sugar : n2.sugar}g
            </p>
          </div>
        </div>
      </div>

      {/* Visual Comparison Charts */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Visual Comparison</h2>
        <div className="space-y-6">
          {/* Calories Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Calories</span>
              <span className="text-xs text-gray-500">per 100g</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-900 w-32">{food1.name}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="bg-orange-500 h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${Math.min((n1.calories / Math.max(n1.calories, n2.calories)) * 100, 100)}%` }}
                  >
                    <span className="text-white text-sm font-semibold">{n1.calories}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-900 w-32">{food2.name}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="bg-orange-400 h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${Math.min((n2.calories / Math.max(n1.calories, n2.calories)) * 100, 100)}%` }}
                  >
                    <span className="text-white text-sm font-semibold">{n2.calories}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Protein Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Protein</span>
              <span className="text-xs text-gray-500">per 100g</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-900 w-32">{food1.name}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${Math.min((n1.protein / Math.max(n1.protein, n2.protein)) * 100, 100)}%` }}
                  >
                    <span className="text-white text-sm font-semibold">{n1.protein}g</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-900 w-32">{food2.name}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="bg-red-400 h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${Math.min((n2.protein / Math.max(n1.protein, n2.protein)) * 100, 100)}%` }}
                  >
                    <span className="text-white text-sm font-semibold">{n2.protein}g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carbs Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Carbohydrates</span>
              <span className="text-xs text-gray-500">per 100g</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-900 w-32">{food1.name}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="bg-blue-500 h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${Math.min((n1.carbs / Math.max(n1.carbs, n2.carbs)) * 100, 100)}%` }}
                  >
                    <span className="text-white text-sm font-semibold">{n1.carbs}g</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-900 w-32">{food2.name}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="bg-blue-400 h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${Math.min((n2.carbs / Math.max(n1.carbs, n2.carbs)) * 100, 100)}%` }}
                  >
                    <span className="text-white text-sm font-semibold">{n2.carbs}g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fat Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Fat</span>
              <span className="text-xs text-gray-500">per 100g</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-900 w-32">{food1.name}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="bg-yellow-500 h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${Math.min((n1.fat / Math.max(n1.fat, n2.fat)) * 100, 100)}%` }}
                  >
                    <span className="text-white text-sm font-semibold">{n1.fat}g</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-900 w-32">{food2.name}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="bg-yellow-400 h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${Math.min((n2.fat / Math.max(n1.fat, n2.fat)) * 100, 100)}%` }}
                  >
                    <span className="text-white text-sm font-semibold">{n2.fat}g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Comparison Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Side-by-Side Nutrition Table</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nutrient</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  <Link href={`/calories-in/${food1.slug}`} className="text-primary-600 hover:text-primary-700">
                    {food1.name}
                  </Link>
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  <Link href={`/calories-in/${food2.slug}`} className="text-primary-600 hover:text-primary-700">
                    {food2.name}
                  </Link>
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Difference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {nutrients.map((nutrient) => {
                const val1 = n1[nutrient.key as keyof typeof n1] as number
                const val2 = n2[nutrient.key as keyof typeof n2] as number
                const diff = val1 - val2
                const isWinner1 = nutrient.lowerBetter ? val1 <= val2 : val1 >= val2

                return (
                  <tr key={nutrient.key} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{nutrient.label}</td>
                    <td className={`px-6 py-4 text-center text-lg font-semibold ${isWinner1 ? 'bg-green-50 text-green-700' : 'text-gray-900'}`}>
                      {val1}{nutrient.unit}
                      {isWinner1 && val1 !== val2 && <span className="ml-2 text-xs">✓</span>}
                    </td>
                    <td className={`px-6 py-4 text-center text-lg font-semibold ${!isWinner1 ? 'bg-green-50 text-green-700' : 'text-gray-900'}`}>
                      {val2}{nutrient.unit}
                      {!isWinner1 && val1 !== val2 && <span className="ml-2 text-xs">✓</span>}
                    </td>
                    <td className={`px-6 py-4 text-center font-medium ${diff > 0 ? 'text-red-600' : diff < 0 ? 'text-green-600' : 'text-gray-500'}`}>
                      {diff > 0 ? '+' : ''}{diff.toFixed(1)}{nutrient.unit}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Serving Size Comparison */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Serving Size Comparison</h2>
        <p className="text-gray-600 mb-4">
          All values above are per 100g. Here's how they compare in common serving sizes:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">{food1.name}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Per 100g:</span>
                <span className="font-medium text-gray-900">{n1.calories} calories</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Per cup (150g):</span>
                <span className="font-medium text-gray-900">{Math.round(n1.calories * 1.5)} calories</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Per serving (85g):</span>
                <span className="font-medium text-gray-900">{Math.round(n1.calories * 0.85)} calories</span>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">{food2.name}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Per 100g:</span>
                <span className="font-medium text-gray-900">{n2.calories} calories</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Per cup (150g):</span>
                <span className="font-medium text-gray-900">{Math.round(n2.calories * 1.5)} calories</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Per serving (85g):</span>
                <span className="font-medium text-gray-900">{Math.round(n2.calories * 0.85)} calories</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diet Compatibility */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Diet Compatibility</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">{food1.name}</h3>
            <div className="flex flex-wrap gap-2">
              {food1Diets.length > 0 ? (
                food1Diets.map((diet) => (
                  <span key={diet} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                    {diet}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 text-sm">No specific diet tags</span>
              )}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">{food2.name}</h3>
            <div className="flex flex-wrap gap-2">
              {food2Diets.length > 0 ? (
                food2Diets.map((diet) => (
                  <span key={diet} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                    {diet}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 text-sm">No specific diet tags</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* When to Choose Each Food */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            When to Choose {food1.name}
          </h2>
          <ul className="space-y-2 text-gray-600 mb-4">
            {winners.lowerCalories === food1.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Lower in calories ({n1.calories} vs {n2.calories})</span>
              </li>
            )}
            {winners.higherProtein === food1.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Higher in protein ({n1.protein}g vs {n2.protein}g)</span>
              </li>
            )}
            {winners.higherFiber === food1.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>More fiber ({n1.fiber}g vs {n2.fiber}g)</span>
              </li>
            )}
            {winners.lowerCarbs === food1.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Lower in carbs ({n1.carbs}g vs {n2.carbs}g)</span>
              </li>
            )}
            {winners.lowerSugar === food1.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Less sugar ({n1.sugar}g vs {n2.sugar}g)</span>
              </li>
            )}
            {winners.lowerSodium === food1.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Lower sodium ({n1.sodium}mg vs {n2.sodium}mg)</span>
              </li>
            )}
          </ul>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Common Uses</h3>
            <div className="flex flex-wrap gap-2">
              {(commonUses[food1.category] || ['Cooking', 'Snacking', 'Meal prep', 'Recipes']).map((use) => (
                <span key={use} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {use}
                </span>
              ))}
            </div>
          </div>
          <Link
            href={`/calories-in/${food1.slug}`}
            className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-medium"
          >
            View full {food1.name} nutrition →
          </Link>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            When to Choose {food2.name}
          </h2>
          <ul className="space-y-2 text-gray-600 mb-4">
            {winners.lowerCalories === food2.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Lower in calories ({n2.calories} vs {n1.calories})</span>
              </li>
            )}
            {winners.higherProtein === food2.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Higher in protein ({n2.protein}g vs {n1.protein}g)</span>
              </li>
            )}
            {winners.higherFiber === food2.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>More fiber ({n2.fiber}g vs {n1.fiber}g)</span>
              </li>
            )}
            {winners.lowerCarbs === food2.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Lower in carbs ({n2.carbs}g vs {n1.carbs}g)</span>
              </li>
            )}
            {winners.lowerSugar === food2.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Less sugar ({n2.sugar}g vs {n1.sugar}g)</span>
              </li>
            )}
            {winners.lowerSodium === food2.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Lower sodium ({n2.sodium}mg vs {n1.sodium}mg)</span>
              </li>
            )}
          </ul>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Common Uses</h3>
            <div className="flex flex-wrap gap-2">
              {(commonUses[food2.category] || ['Cooking', 'Snacking', 'Meal prep', 'Recipes']).map((use) => (
                <span key={use} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {use}
                </span>
              ))}
            </div>
          </div>
          <Link
            href={`/calories-in/${food2.slug}`}
            className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-medium"
          >
            View full {food2.name} nutrition →
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      {comparisonContent.faqs.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {comparisonContent.faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Comparisons */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Comparisons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {relatedComps.map(([slug1, slug2, label]) => (
            <Link
              key={`${slug1}-${slug2}`}
              href={`/compare/${slug1}-vs-${slug2}`}
              className="text-primary-600 hover:text-primary-700 hover:bg-white px-4 py-2 rounded-lg transition-colors border border-transparent hover:border-primary-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `${food1.name} vs ${food2.name} - Nutrition Comparison`,
            description: `Compare the nutritional content of ${food1.name} and ${food2.name}. See calories, protein, carbs, fat, fiber and more.`,
            author: {
              '@type': 'Organization',
              name: 'CalorieData',
            },
            publisher: {
              '@type': 'Organization',
              name: 'CalorieData',
            },
            datePublished: new Date().toISOString(),
            dateModified: new Date().toISOString(),
          }),
        }}
      />

      {/* FAQ Schema.org structured data */}
      {comparisonContent.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: comparisonContent.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    </div>
  )
}
