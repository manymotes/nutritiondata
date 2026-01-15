import { Metadata } from 'next'
import Link from 'next/link'
import { POPULAR_FOODS, FOOD_CATEGORIES } from '@/lib/constants'
import { getFoodData } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Compare Foods - Side-by-Side Nutrition Comparison',
  description: 'Compare any two foods side-by-side. See which has fewer calories, more protein, and better nutrition. Make informed dietary choices.',
  openGraph: {
    title: 'Food Comparison Tool',
    description: 'Compare nutrition facts for any two foods instantly.',
  },
}

export default function ComparePage() {
  // Generate popular comparisons
  const popularComparisons = [
    ['banana', 'apple', 'Classic fruit comparison'],
    ['chicken-breast', 'salmon', 'Best protein source'],
    ['rice', 'pasta', 'Carb showdown'],
    ['avocado', 'banana', 'Healthy fats vs carbs'],
    ['egg', 'greek-yogurt', 'Breakfast protein'],
    ['almonds', 'peanut-butter', 'Nut nutrition'],
    ['oatmeal', 'bread', 'Morning carbs'],
    ['broccoli', 'spinach', 'Green vegetables'],
    ['sweet-potato', 'rice', 'Complex carbs'],
  ]

  // Get foods with calorie data
  const foodsWithData = POPULAR_FOODS.map((food) => {
    const data = getFoodData(food.slug)
    return {
      ...food,
      calories: data?.nutritionPer100g.calories || 0,
    }
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Compare Foods
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See nutrition facts side-by-side. Compare calories, protein, carbs, and more
          to make informed dietary choices.
        </p>
      </div>

      {/* Popular Comparisons */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Popular Comparisons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularComparisons.map(([food1, food2, description]) => {
            const f1 = getFoodData(food1)
            const f2 = getFoodData(food2)
            return (
              <Link
                key={`${food1}-${food2}`}
                href={`/compare/${food1}-vs-${food2}`}
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">
                    {f1?.name || food1} vs {f2?.name || food2}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{description}</p>
                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-primary-600">
                    {f1?.nutritionPer100g.calories || 0} cal
                  </span>
                  <span className="text-gray-400">vs</span>
                  <span className="text-primary-600">
                    {f2?.nutritionPer100g.calories || 0} cal
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Compare by Category */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Compare by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {FOOD_CATEGORIES.map((category) => {
            const categoryFoods = foodsWithData.filter(
              (f) => f.category === category.slug
            )
            if (categoryFoods.length < 2) return null
            return (
              <div
                key={category.slug}
                className="bg-white rounded-lg border border-gray-200 p-4"
              >
                <div className="text-center mb-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="font-semibold text-gray-900 mt-2">
                    {category.name}
                  </h3>
                </div>
                <ul className="space-y-1 text-sm">
                  {categoryFoods.slice(0, 3).map((food, idx) => {
                    const nextFood = categoryFoods[idx + 1]
                    if (!nextFood) return null
                    return (
                      <li key={food.slug}>
                        <Link
                          href={`/compare/${food.slug}-vs-${nextFood.slug}`}
                          className="text-primary-600 hover:text-primary-700"
                        >
                          {food.name} vs {nextFood.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* All Foods Grid for Custom Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Browse All Foods
        </h2>
        <p className="text-gray-600 mb-4">
          Click any food to see its nutrition, then compare from its page.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {foodsWithData.map((food) => (
            <Link
              key={food.slug}
              href={`/calories-in/${food.slug}`}
              className="bg-gray-50 rounded-lg p-3 hover:bg-primary-50 transition-colors text-center"
            >
              <span className="font-medium text-gray-900 block">{food.name}</span>
              <span className="text-sm text-primary-600">{food.calories} cal</span>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="prose max-w-none">
        <h2>How to Use Our Food Comparison Tool</h2>
        <p>
          Making healthy food choices is easier when you can compare nutrition facts
          side-by-side. Our food comparison tool helps you:
        </p>
        <ul>
          <li><strong>Compare calories</strong> - Find lower-calorie alternatives</li>
          <li><strong>Check protein content</strong> - Optimize for muscle building</li>
          <li><strong>Evaluate carbs and fiber</strong> - Make carb-conscious choices</li>
          <li><strong>Assess fat content</strong> - Balance your macros</li>
        </ul>
        <p>
          Simply select any two foods from our database of 300,000+ items to see
          a detailed nutrition comparison. Each comparison shows you which food
          wins in each category, making it easy to make informed decisions.
        </p>
      </section>
    </div>
  )
}
