import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { compareFoods, getFoodData, getStrategicComparisons } from '@/lib/data'
import { POPULAR_FOODS } from '@/lib/constants'

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

    // Combine both sets and remove duplicates
    const allComps = [...strategicComps, ...popularComps]
    const seen = new Set<string>()
    const comparisons: { comparison: string }[] = []

    for (const [food1, food2] of allComps) {
      const key = food1 < food2 ? `${food1}-${food2}` : `${food2}-${food1}`
      if (!seen.has(key)) {
        seen.add(key)
        comparisons.push({
          comparison: key.includes('-vs-') ? key : `${food1}-vs-${food2}`,
        })
      }
    }

    return comparisons.slice(0, 3000) // Limit to ~3000 comparisons for build performance
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

  return {
    title: `${food1.name} vs ${food2.name} - Calories & Nutrition Comparison`,
    description: `Compare ${food1.name} (${cal1} cal) vs ${food2.name} (${cal2} cal). ${lower} has ${diff} fewer calories per 100g. See full nutrition comparison.`,
    alternates: {
      canonical: `https://caloriedata.org/compare/${params.comparison}`,
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

  const { food1, food2, winners } = comparison
  const n1 = food1.nutritionPer100g
  const n2 = food2.nutritionPer100g

  const nutrients = [
    { key: 'calories', label: 'Calories', unit: 'kcal', winner: winners.lowerCalories, lowerBetter: true },
    { key: 'protein', label: 'Protein', unit: 'g', winner: winners.higherProtein, lowerBetter: false },
    { key: 'carbs', label: 'Carbohydrates', unit: 'g', winner: winners.lowerCarbs, lowerBetter: true },
    { key: 'fat', label: 'Fat', unit: 'g', winner: winners.lowerFat, lowerBetter: true },
    { key: 'fiber', label: 'Fiber', unit: 'g', winner: winners.higherFiber, lowerBetter: false },
    { key: 'sugar', label: 'Sugar', unit: 'g', winner: food1.slug, lowerBetter: true }, // Default
    { key: 'sodium', label: 'Sodium', unit: 'mg', winner: food1.slug, lowerBetter: true }, // Default
  ]

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
          Nutrition comparison per 100g serving
        </p>
      </div>

      {/* Quick Winner Summary */}
      <div className="bg-primary-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Summary</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">Fewer Calories</p>
            <p className="text-lg font-bold text-primary-600">
              {winners.lowerCalories === food1.slug ? food1.name : food2.name}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">More Protein</p>
            <p className="text-lg font-bold text-primary-600">
              {winners.higherProtein === food1.slug ? food1.name : food2.name}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">More Fiber</p>
            <p className="text-lg font-bold text-primary-600">
              {winners.higherFiber === food1.slug ? food1.name : food2.name}
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
          <div className="p-4 font-semibold text-gray-700">Nutrient</div>
          <div className="p-4 font-semibold text-gray-700 text-center">
            <Link href={`/calories-in/${food1.slug}`} className="text-primary-600 hover:text-primary-700">
              {food1.name}
            </Link>
          </div>
          <div className="p-4 font-semibold text-gray-700 text-center">
            <Link href={`/calories-in/${food2.slug}`} className="text-primary-600 hover:text-primary-700">
              {food2.name}
            </Link>
          </div>
          <div className="p-4 font-semibold text-gray-700 text-center">Difference</div>
        </div>

        {nutrients.map((nutrient) => {
          const val1 = n1[nutrient.key as keyof typeof n1] as number
          const val2 = n2[nutrient.key as keyof typeof n2] as number
          const diff = val1 - val2
          const isWinner1 = nutrient.lowerBetter ? val1 <= val2 : val1 >= val2

          return (
            <div key={nutrient.key} className="grid grid-cols-4 border-b border-gray-100 hover:bg-gray-50">
              <div className="p-4 font-medium text-gray-900">{nutrient.label}</div>
              <div className={`p-4 text-center text-lg font-semibold ${isWinner1 ? 'bg-green-50 text-green-700' : 'text-gray-900'}`}>
                {val1}{nutrient.unit}
                {isWinner1 && <span className="ml-2 text-xs">✓</span>}
              </div>
              <div className={`p-4 text-center text-lg font-semibold ${!isWinner1 ? 'bg-green-50 text-green-700' : 'text-gray-900'}`}>
                {val2}{nutrient.unit}
                {!isWinner1 && <span className="ml-2 text-xs">✓</span>}
              </div>
              <div className={`p-4 text-center font-medium ${diff > 0 ? 'text-red-600' : diff < 0 ? 'text-green-600' : 'text-gray-500'}`}>
                {diff > 0 ? '+' : ''}{diff.toFixed(1)}{nutrient.unit}
              </div>
            </div>
          )
        })}
      </div>

      {/* Analysis */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            When to Choose {food1.name}
          </h2>
          <ul className="space-y-2 text-gray-600">
            {winners.lowerCalories === food1.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Lower in calories ({n1.calories} vs {n2.calories})
              </li>
            )}
            {winners.higherProtein === food1.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Higher in protein ({n1.protein}g vs {n2.protein}g)
              </li>
            )}
            {winners.higherFiber === food1.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                More fiber ({n1.fiber}g vs {n2.fiber}g)
              </li>
            )}
          </ul>
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
          <ul className="space-y-2 text-gray-600">
            {winners.lowerCalories === food2.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Lower in calories ({n2.calories} vs {n1.calories})
              </li>
            )}
            {winners.higherProtein === food2.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Higher in protein ({n2.protein}g vs {n1.protein}g)
              </li>
            )}
            {winners.higherFiber === food2.slug && (
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                More fiber ({n2.fiber}g vs {n1.fiber}g)
              </li>
            )}
          </ul>
          <Link
            href={`/calories-in/${food2.slug}`}
            className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-medium"
          >
            View full {food2.name} nutrition →
          </Link>
        </div>
      </div>

      {/* Other Comparisons */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">More Comparisons</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {POPULAR_FOODS
            .filter(f => f.slug !== food1.slug && f.slug !== food2.slug)
            .slice(0, 8)
            .map((food) => (
              <Link
                key={food.slug}
                href={`/compare/${food1.slug}-vs-${food.slug}`}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                {food1.name} vs {food.name}
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
            '@type': 'Dataset',
            name: `Nutrition Comparison: ${food1.name} vs ${food2.name}`,
            description: `Side-by-side nutrition comparison of ${food1.name} and ${food2.name}`,
          }),
        }}
      />
    </div>
  )
}
