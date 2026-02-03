import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { getAllFoods } from '@/lib/data'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Low Carb Foods - Complete List Under 10g Carbs | CalorieData',
  description: 'Browse 50+ low carb foods with under 10g carbs per serving. Perfect for keto, Atkins, and low-carb diets with complete nutrition data.',
  alternates: {
    canonical: `${SITE_URL}/categories/low-carb-foods`,
  },
  openGraph: {
    title: 'Low Carb Foods - Complete List Under 10g Carbs',
    description: 'Browse 50+ low carb foods with under 10g carbs per serving. Perfect for keto, Atkins, and low-carb diets with complete nutrition data.',
    url: `${SITE_URL}/categories/low-carb-foods`,
  },
}

export default function LowCarbFoodsPage() {
  const allFoods = getAllFoods()

  // Filter foods with under 10g carbs per 100g
  const lowCarbFoods = allFoods
    .filter(food => food.nutritionPer100g.carbs <= 10)
    .sort((a, b) => a.nutritionPer100g.carbs - b.nutritionPer100g.carbs)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the best low carb foods?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best low carb foods include meats (0g carbs), fish, eggs, cheese, leafy greens, cruciferous vegetables (broccoli, cauliflower), avocados, nuts, and seeds. Most animal proteins contain zero carbs, while non-starchy vegetables have 3-7g per 100g.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many carbs should I eat on a low carb diet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Low carb diets typically limit carbs to 20-150g daily. Keto diets restrict to 20-50g for ketosis. Moderate low-carb allows 50-100g, while liberal low-carb permits 100-150g. Individual needs vary based on activity level, metabolic health, and goals.',
        },
      },
      {
        '@type': 'Question',
        name: 'What foods have zero carbs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zero carb foods include all meats (beef, chicken, pork, lamb), fish and seafood, eggs, most cheeses, butter, oils, and animal fats. Black coffee and tea also have zero carbs. These form the foundation of very low carb and ketogenic diets.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I lose weight on a low carb diet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, low carb diets are effective for weight loss by reducing insulin levels, increasing satiety, and promoting fat burning. Studies show low carb diets often produce faster initial weight loss than low-fat diets, especially in the first 6 months.',
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
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Low Carb Foods
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl">
              Comprehensive list of {lowCarbFoods.length} foods with 10g or less carbs per 100g.
              Perfect for keto, Atkins, and low-carb diets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/categories"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                All Categories
              </Link>
              <Link
                href="/diets/keto"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Keto Diet Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Low Carb Foods</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-3xl mb-3">📉</div>
                <h3 className="text-xl font-semibold mb-2">Blood Sugar Control</h3>
                <p className="text-gray-700">
                  Low carb foods help stabilize blood sugar and insulin levels, beneficial for diabetes management and prevention.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🔥</div>
                <h3 className="text-xl font-semibold mb-2">Fat Burning</h3>
                <p className="text-gray-700">
                  Reducing carbs forces your body to burn fat for fuel, accelerating weight loss and improving metabolic health.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-3xl mb-3">😊</div>
                <h3 className="text-xl font-semibold mb-2">Reduced Cravings</h3>
                <p className="text-gray-700">
                  Low carb eating reduces hunger hormones and blood sugar spikes, leading to fewer cravings and better appetite control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Foods Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {lowCarbFoods.length} Low Carb Foods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lowCarbFoods.map((food) => (
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
                      <span className="text-sm text-gray-600">Carbs</span>
                      <span className="font-bold text-blue-600 text-lg">{food.nutritionPer100g.carbs}g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Calories</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.calories}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Protein</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.protein}g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Fat</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.fat}g</span>
                    </div>
                  </div>

                  <div className="mt-4 text-blue-600 text-sm font-medium">
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
                <h3 className="text-xl font-semibold mb-2">What are the best low carb foods?</h3>
                <p className="text-gray-700">
                  The best low carb foods include meats (0g carbs), fish, eggs, cheese, leafy greens, cruciferous vegetables
                  (broccoli, cauliflower), avocados, nuts, and seeds. Most animal proteins contain zero carbs, while
                  non-starchy vegetables have 3-7g per 100g.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How many carbs should I eat on a low carb diet?</h3>
                <p className="text-gray-700">
                  Low carb diets typically limit carbs to 20-150g daily. Keto diets restrict to 20-50g for ketosis. Moderate
                  low-carb allows 50-100g, while liberal low-carb permits 100-150g. Individual needs vary based on activity
                  level, metabolic health, and goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What foods have zero carbs?</h3>
                <p className="text-gray-700">
                  Zero carb foods include all meats (beef, chicken, pork, lamb), fish and seafood, eggs, most cheeses, butter,
                  oils, and animal fats. Black coffee and tea also have zero carbs. These form the foundation of very low carb
                  and ketogenic diets.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I lose weight on a low carb diet?</h3>
                <p className="text-gray-700">
                  Yes, low carb diets are effective for weight loss by reducing insulin levels, increasing satiety, and
                  promoting fat burning. Studies show low carb diets often produce faster initial weight loss than low-fat
                  diets, especially in the first 6 months.
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
                href="/categories/high-protein-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">💪</div>
                <h3 className="font-semibold text-gray-900">High Protein Foods</h3>
              </Link>
              <Link
                href="/categories/healthy-fats"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🥑</div>
                <h3 className="font-semibold text-gray-900">Healthy Fats</h3>
              </Link>
              <Link
                href="/categories/low-calorie-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🥬</div>
                <h3 className="font-semibold text-gray-900">Low Calorie Foods</h3>
              </Link>
              <Link
                href="/categories/high-fiber-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🌾</div>
                <h3 className="font-semibold text-gray-900">High Fiber Foods</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
