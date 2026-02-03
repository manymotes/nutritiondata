import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { getAllFoods } from '@/lib/data'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'High Vitamin C Foods - Complete List for Immune Health | CalorieData',
  description: 'Browse foods rich in vitamin C for immune health. Citrus fruits, berries, peppers, and more with complete nutrition data.',
  alternates: {
    canonical: `${SITE_URL}/categories/vitamin-c-foods`,
  },
  openGraph: {
    title: 'High Vitamin C Foods - Complete List for Immune Health',
    description: 'Browse foods rich in vitamin C for immune health. Citrus fruits, berries, peppers, and more with complete nutrition data.',
    url: `${SITE_URL}/categories/vitamin-c-foods`,
  },
}

export default function VitaminCFoodsPage() {
  const allFoods = getAllFoods()

  // Filter foods high in vitamin C (citrus, berries, peppers, cruciferous vegetables)
  const vitaminCFoods = allFoods
    .filter(food =>
      ['fruits', 'vegetables'].includes(food.category) &&
      ['orange', 'strawberry', 'kiwi', 'bell-pepper', 'broccoli', 'cauliflower', 'spinach', 'kale', 'tomato', 'raspberry', 'blueberry', 'cherry', 'pineapple', 'mango'].includes(food.slug)
    )
    .sort((a, b) => b.nutritionPer100g.calories - a.nutritionPer100g.calories)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What foods are highest in vitamin C?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The highest vitamin C foods include bell peppers (128mg per 100g), kiwi (93mg), broccoli (89mg), strawberries (59mg), oranges (53mg), kale (120mg), and Brussels sprouts (85mg). Many vegetables contain more vitamin C than citrus fruits.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much vitamin C do I need daily?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Adults need 75-90mg of vitamin C daily (75mg for women, 90mg for men). Smokers need an additional 35mg. Upper limit is 2000mg daily. Most people can meet needs through diet alone without supplements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the benefits of vitamin C?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vitamin C supports immune function, acts as a powerful antioxidant, aids collagen production for skin health, enhances iron absorption, and may reduce duration of common colds. It is also essential for wound healing and tissue repair.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you get too much vitamin C?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Excess vitamin C from food is rare and excreted in urine. High-dose supplements (over 2000mg daily) may cause digestive upset, diarrhea, and kidney stones in susceptible individuals. Getting vitamin C from whole foods is safest.',
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
        <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              High Vitamin C Foods
            </h1>
            <p className="text-xl text-orange-100 mb-6 max-w-3xl">
              Discover {vitaminCFoods.length} foods rich in vitamin C for immune health, skin health, and antioxidant protection.
              Citrus fruits, berries, peppers, and cruciferous vegetables.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/categories"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                All Categories
              </Link>
              <Link
                href="/categories/iron-rich-foods"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Iron Rich Foods
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Vitamin C</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-xl font-semibold mb-2">Immune Support</h3>
                <p className="text-gray-700">
                  Vitamin C strengthens immune function, helps fight infections, and may reduce severity and duration of colds.
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-xl font-semibold mb-2">Skin Health</h3>
                <p className="text-gray-700">
                  Essential for collagen production, vitamin C supports skin elasticity, wound healing, and protects against sun damage.
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="text-3xl mb-3">💊</div>
                <h3 className="text-xl font-semibold mb-2">Antioxidant Power</h3>
                <p className="text-gray-700">
                  As a powerful antioxidant, vitamin C neutralizes free radicals, reduces oxidative stress, and protects cells.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Foods Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {vitaminCFoods.length} Vitamin C Rich Foods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vitaminCFoods.map((food) => (
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
                      <span className="text-sm text-gray-600">Calories</span>
                      <span className="font-bold text-orange-600 text-lg">{food.nutritionPer100g.calories}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Fiber</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.fiber}g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Sugar</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.sugar}g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Carbs</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.carbs}g</span>
                    </div>
                  </div>

                  <div className="mt-4 text-orange-600 text-sm font-medium">
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
                <h3 className="text-xl font-semibold mb-2">What foods are highest in vitamin C?</h3>
                <p className="text-gray-700">
                  The highest vitamin C foods include bell peppers (128mg per 100g), kiwi (93mg), broccoli (89mg),
                  strawberries (59mg), oranges (53mg), kale (120mg), and Brussels sprouts (85mg). Many vegetables contain
                  more vitamin C than citrus fruits.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How much vitamin C do I need daily?</h3>
                <p className="text-gray-700">
                  Adults need 75-90mg of vitamin C daily (75mg for women, 90mg for men). Smokers need an additional 35mg.
                  Upper limit is 2000mg daily. Most people can meet needs through diet alone without supplements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What are the benefits of vitamin C?</h3>
                <p className="text-gray-700">
                  Vitamin C supports immune function, acts as a powerful antioxidant, aids collagen production for skin
                  health, enhances iron absorption, and may reduce duration of common colds. It is also essential for wound
                  healing and tissue repair.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can you get too much vitamin C?</h3>
                <p className="text-gray-700">
                  Excess vitamin C from food is rare and excreted in urine. High-dose supplements (over 2000mg daily) may
                  cause digestive upset, diarrhea, and kidney stones in susceptible individuals. Getting vitamin C from
                  whole foods is safest.
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
                href="/categories/iron-rich-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🩸</div>
                <h3 className="font-semibold text-gray-900">Iron Rich Foods</h3>
              </Link>
              <Link
                href="/categories/calcium-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🦴</div>
                <h3 className="font-semibold text-gray-900">Calcium Foods</h3>
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
