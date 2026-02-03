import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { getAllFoods } from '@/lib/data'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'High Fiber Foods - Complete List with 5g+ Fiber | CalorieData',
  description: 'Discover 50+ high fiber foods with 5g+ fiber per serving. Essential for digestive health, weight management, and heart health with complete nutrition data.',
  alternates: {
    canonical: `${SITE_URL}/categories/high-fiber-foods`,
  },
  openGraph: {
    title: 'High Fiber Foods - Complete List with 5g+ Fiber',
    description: 'Discover 50+ high fiber foods with 5g+ fiber per serving. Essential for digestive health, weight management, and heart health with complete nutrition data.',
    url: `${SITE_URL}/categories/high-fiber-foods`,
  },
}

export default function HighFiberFoodsPage() {
  const allFoods = getAllFoods()

  // Filter foods with 5g+ fiber per 100g
  const highFiberFoods = allFoods
    .filter(food => food.nutritionPer100g.fiber >= 5)
    .sort((a, b) => b.nutritionPer100g.fiber - a.nutritionPer100g.fiber)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What foods are highest in fiber?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The highest fiber foods include chia seeds (34g per 100g), flaxseed (27g), popcorn (15g), almonds (13g), oatmeal (11g), raspberries (6.5g), avocado (7g), and whole grains like quinoa. Beans, lentils, and vegetables like kale and broccoli are also excellent sources.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much fiber do I need per day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Adults should consume 25-38g of fiber daily. Women need about 25g and men need 38g. Most Americans only get 15g daily, well below recommendations. Gradually increase fiber intake and drink plenty of water to avoid digestive discomfort.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the health benefits of fiber?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fiber promotes digestive health, prevents constipation, helps control blood sugar, lowers cholesterol, supports weight loss by increasing satiety, and may reduce risk of heart disease, diabetes, and certain cancers. Both soluble and insoluble fiber are important.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between soluble and insoluble fiber?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Soluble fiber dissolves in water, forming a gel that slows digestion, lowers cholesterol, and stabilizes blood sugar. Found in oats, beans, and fruits. Insoluble fiber does not dissolve, adds bulk to stool, and promotes regularity. Found in whole grains, nuts, and vegetables.',
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
        <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              High Fiber Foods
            </h1>
            <p className="text-xl text-amber-100 mb-6 max-w-3xl">
              Complete list of {highFiberFoods.length} foods with 5g+ fiber per 100g serving.
              Essential for digestive health, weight management, and overall wellness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/categories"
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                All Categories
              </Link>
              <Link
                href="/calculators/macro-calculator"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Calculate Your Nutrition Needs
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of High Fiber Foods</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-amber-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🫃</div>
                <h3 className="text-xl font-semibold mb-2">Digestive Health</h3>
                <p className="text-gray-700">
                  Fiber promotes regular bowel movements, prevents constipation, and supports a healthy gut microbiome.
                </p>
              </div>
              <div className="bg-amber-50 rounded-lg p-6">
                <div className="text-3xl mb-3">❤️</div>
                <h3 className="text-xl font-semibold mb-2">Heart Health</h3>
                <p className="text-gray-700">
                  Soluble fiber helps lower cholesterol and blood pressure, reducing risk of cardiovascular disease.
                </p>
              </div>
              <div className="bg-amber-50 rounded-lg p-6">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-xl font-semibold mb-2">Weight Management</h3>
                <p className="text-gray-700">
                  Fiber increases satiety and slows digestion, helping you feel full longer and eat fewer calories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Foods Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {highFiberFoods.length} High Fiber Foods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highFiberFoods.map((food) => (
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
                      <span className="text-sm text-gray-600">Fiber</span>
                      <span className="font-bold text-amber-600 text-lg">{food.nutritionPer100g.fiber}g</span>
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
                      <span className="text-sm text-gray-600">Carbs</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.carbs}g</span>
                    </div>
                  </div>

                  <div className="mt-4 text-amber-600 text-sm font-medium">
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
                <h3 className="text-xl font-semibold mb-2">What foods are highest in fiber?</h3>
                <p className="text-gray-700">
                  The highest fiber foods include chia seeds (34g per 100g), flaxseed (27g), popcorn (15g), almonds (13g),
                  oatmeal (11g), raspberries (6.5g), avocado (7g), and whole grains like quinoa. Beans, lentils, and
                  vegetables like kale and broccoli are also excellent sources.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How much fiber do I need per day?</h3>
                <p className="text-gray-700">
                  Adults should consume 25-38g of fiber daily. Women need about 25g and men need 38g. Most Americans only
                  get 15g daily, well below recommendations. Gradually increase fiber intake and drink plenty of water to
                  avoid digestive discomfort.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What are the health benefits of fiber?</h3>
                <p className="text-gray-700">
                  Fiber promotes digestive health, prevents constipation, helps control blood sugar, lowers cholesterol,
                  supports weight loss by increasing satiety, and may reduce risk of heart disease, diabetes, and certain
                  cancers. Both soluble and insoluble fiber are important.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What is the difference between soluble and insoluble fiber?</h3>
                <p className="text-gray-700">
                  Soluble fiber dissolves in water, forming a gel that slows digestion, lowers cholesterol, and stabilizes
                  blood sugar. Found in oats, beans, and fruits. Insoluble fiber does not dissolve, adds bulk to stool, and
                  promotes regularity. Found in whole grains, nuts, and vegetables.
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
                href="/categories/calcium-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🦴</div>
                <h3 className="font-semibold text-gray-900">Calcium Foods</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
