import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { getAllFoods } from '@/lib/data'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'High Protein Foods - Complete List with Nutrition Data | CalorieData',
  description: 'Discover 50+ high protein foods with 20g+ protein per serving. Complete nutrition data for meats, fish, eggs, dairy, plant proteins, and more.',
  alternates: {
    canonical: `${SITE_URL}/categories/high-protein-foods`,
  },
  openGraph: {
    title: 'High Protein Foods - Complete List with Nutrition Data',
    description: 'Discover 50+ high protein foods with 20g+ protein per serving. Complete nutrition data for meats, fish, eggs, dairy, plant proteins, and more.',
    url: `${SITE_URL}/categories/high-protein-foods`,
  },
}

export default function HighProteinFoodsPage() {
  const allFoods = getAllFoods()

  // Filter foods with 20g+ protein per 100g
  const highProteinFoods = allFoods
    .filter(food => food.nutritionPer100g.protein >= 20)
    .sort((a, b) => b.nutritionPer100g.protein - a.nutritionPer100g.protein)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What foods are highest in protein?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The highest protein foods include chicken breast (31g per 100g), tuna (30g), turkey (30g), shrimp (24g), Greek yogurt (10g), eggs (13g), and plant-based options like tofu (8g). Protein bars and shakes can contain 20-25g per serving.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much protein do I need per day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The recommended daily protein intake is 0.8g per kg of body weight for sedentary adults. Active individuals and athletes may need 1.2-2.0g per kg. For a 70kg person, this equals 56-140g of protein daily depending on activity level.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are good plant-based high protein foods?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'High protein plant-based foods include tofu (8g per 100g), tempeh (19g), lentils (9g), chickpeas (9g), quinoa (4.4g), almonds (21g), peanut butter (25g), chia seeds (17g), and protein-fortified plant milks and meat alternatives.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are high protein foods good for weight loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, high protein foods support weight loss by increasing satiety, preserving muscle mass during calorie restriction, and having a higher thermic effect (burning more calories during digestion). Aim for 25-30% of daily calories from protein for optimal weight loss results.',
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              High Protein Foods
            </h1>
            <p className="text-xl text-red-100 mb-6 max-w-3xl">
              Complete list of {highProteinFoods.length} foods with 20g+ protein per 100g serving.
              Perfect for muscle building, weight loss, and meeting your daily protein needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/categories"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                All Categories
              </Link>
              <Link
                href="/calculators/macro-calculator"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Calculate Your Protein Needs
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of High Protein Foods</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-6">
                <div className="text-3xl mb-3">💪</div>
                <h3 className="text-xl font-semibold mb-2">Builds Muscle</h3>
                <p className="text-gray-700">
                  Protein provides essential amino acids for muscle growth and repair, crucial for athletes and strength training.
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-xl font-semibold mb-2">Supports Weight Loss</h3>
                <p className="text-gray-700">
                  High protein foods increase satiety, reduce hunger, and help preserve muscle mass during calorie restriction.
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🔥</div>
                <h3 className="text-xl font-semibold mb-2">Boosts Metabolism</h3>
                <p className="text-gray-700">
                  Protein has the highest thermic effect, burning 20-30% of calories during digestion compared to 5-10% for carbs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Foods Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {highProteinFoods.length} High Protein Foods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highProteinFoods.map((food) => (
                <Link
                  key={food.slug}
                  href={`/calories-in/${food.slug}`}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {food.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 capitalize">{food.category.replace('-', ' ')}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Protein</span>
                      <span className="font-bold text-red-600 text-lg">{food.nutritionPer100g.protein}g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Calories</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.calories}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Carbs</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.carbs}g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Fat</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.fat}g</span>
                    </div>
                  </div>

                  <div className="mt-4 text-red-600 text-sm font-medium">
                    View full nutrition →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What foods are highest in protein?</h3>
                <p className="text-gray-700">
                  The highest protein foods include chicken breast (31g per 100g), tuna (30g), turkey (30g), shrimp (24g),
                  Greek yogurt (10g), eggs (13g), and plant-based options like tofu (8g). Protein bars and shakes can contain
                  20-25g per serving.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How much protein do I need per day?</h3>
                <p className="text-gray-700">
                  The recommended daily protein intake is 0.8g per kg of body weight for sedentary adults. Active individuals
                  and athletes may need 1.2-2.0g per kg. For a 70kg person, this equals 56-140g of protein daily depending on
                  activity level.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What are good plant-based high protein foods?</h3>
                <p className="text-gray-700">
                  High protein plant-based foods include tofu (8g per 100g), tempeh (19g), lentils (9g), chickpeas (9g),
                  quinoa (4.4g), almonds (21g), peanut butter (25g), chia seeds (17g), and protein-fortified plant milks
                  and meat alternatives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Are high protein foods good for weight loss?</h3>
                <p className="text-gray-700">
                  Yes, high protein foods support weight loss by increasing satiety, preserving muscle mass during calorie
                  restriction, and having a higher thermic effect (burning more calories during digestion). Aim for 25-30%
                  of daily calories from protein for optimal weight loss results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/categories/low-calorie-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🥬</div>
                <h3 className="font-semibold text-gray-900">Low Calorie Foods</h3>
              </Link>
              <Link
                href="/categories/low-carb-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🥑</div>
                <h3 className="font-semibold text-gray-900">Low Carb Foods</h3>
              </Link>
              <Link
                href="/categories/high-fiber-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🌾</div>
                <h3 className="font-semibold text-gray-900">High Fiber Foods</h3>
              </Link>
              <Link
                href="/categories/iron-rich-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🩸</div>
                <h3 className="font-semibold text-gray-900">Iron Rich Foods</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
