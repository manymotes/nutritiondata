import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { getAllFoods } from '@/lib/data'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'High Calcium Foods - Complete List for Bone Health | CalorieData',
  description: 'Discover foods high in calcium for strong bones and teeth. Dairy, leafy greens, fortified foods, and more with complete nutrition data.',
  alternates: {
    canonical: `${SITE_URL}/categories/calcium-foods`,
  },
  openGraph: {
    title: 'High Calcium Foods - Complete List for Bone Health',
    description: 'Discover foods high in calcium for strong bones and teeth. Dairy, leafy greens, fortified foods, and more with complete nutrition data.',
    url: `${SITE_URL}/categories/calcium-foods`,
  },
}

export default function CalciumFoodsPage() {
  const allFoods = getAllFoods()

  // Filter foods high in calcium (dairy, leafy greens, high-fiber vegetables)
  const calciumFoods = allFoods
    .filter(food =>
      food.category === 'dairy' ||
      ['spinach', 'kale', 'broccoli', 'collard-greens'].includes(food.slug) ||
      (food.category === 'vegetables' && food.nutritionPer100g.fiber >= 2)
    )
    .sort((a, b) => b.nutritionPer100g.protein - a.nutritionPer100g.protein)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What foods are highest in calcium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The highest calcium foods include dairy products (milk, cheese, yogurt), fortified plant milks, sardines with bones, tofu (calcium-set), dark leafy greens (kale, collards, bok choy), and fortified cereals. Dairy provides the most bioavailable calcium.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much calcium do I need daily?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Adults need 1000-1200mg of calcium daily (1000mg ages 19-50, 1200mg for women 51+ and men 71+). Teenagers need 1300mg. Most Americans do not meet daily calcium requirements, increasing osteoporosis risk.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the benefits of calcium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Calcium builds and maintains strong bones and teeth, prevents osteoporosis, supports muscle function, enables nerve transmission, aids blood clotting, and helps maintain normal blood pressure. 99% of body calcium is stored in bones.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are non-dairy sources of calcium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Non-dairy calcium sources include fortified plant milks (almond, soy, oat), leafy greens (kale, collards), calcium-set tofu, fortified orange juice, sardines, almonds, white beans, and chia seeds. Pair with vitamin D for better absorption.',
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
        <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              High Calcium Foods
            </h1>
            <p className="text-xl text-indigo-100 mb-6 max-w-3xl">
              Complete guide to {calciumFoods.length} calcium-rich foods for bone health, teeth strength, and overall wellness.
              Dairy products, leafy greens, and fortified foods.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/categories"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                All Categories
              </Link>
              <Link
                href="/categories/vitamin-c-foods"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Vitamin C Foods
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Calcium</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-indigo-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🦴</div>
                <h3 className="text-xl font-semibold mb-2">Strong Bones</h3>
                <p className="text-gray-700">
                  Calcium builds and maintains bone density, preventing osteoporosis and fractures as you age.
                </p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🦷</div>
                <h3 className="text-xl font-semibold mb-2">Healthy Teeth</h3>
                <p className="text-gray-700">
                  Essential for tooth formation and maintenance, calcium protects against tooth decay and gum disease.
                </p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6">
                <div className="text-3xl mb-3">💪</div>
                <h3 className="text-xl font-semibold mb-2">Muscle Function</h3>
                <p className="text-gray-700">
                  Calcium enables muscle contraction, nerve transmission, and helps maintain normal blood pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Foods Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {calciumFoods.length} Calcium Rich Foods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calciumFoods.map((food) => (
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
                      <span className="font-bold text-indigo-600 text-lg">{food.nutritionPer100g.protein}g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Calories</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.calories}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Fat</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.fat}g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Carbs</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.carbs}g</span>
                    </div>
                  </div>

                  <div className="mt-4 text-indigo-600 text-sm font-medium">
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
                <h3 className="text-xl font-semibold mb-2">What foods are highest in calcium?</h3>
                <p className="text-gray-700">
                  The highest calcium foods include dairy products (milk, cheese, yogurt), fortified plant milks, sardines
                  with bones, tofu (calcium-set), dark leafy greens (kale, collards, bok choy), and fortified cereals. Dairy
                  provides the most bioavailable calcium.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How much calcium do I need daily?</h3>
                <p className="text-gray-700">
                  Adults need 1000-1200mg of calcium daily (1000mg ages 19-50, 1200mg for women 51+ and men 71+). Teenagers
                  need 1300mg. Most Americans do not meet daily calcium requirements, increasing osteoporosis risk.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What are the benefits of calcium?</h3>
                <p className="text-gray-700">
                  Calcium builds and maintains strong bones and teeth, prevents osteoporosis, supports muscle function, enables
                  nerve transmission, aids blood clotting, and helps maintain normal blood pressure. 99% of body calcium is
                  stored in bones.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What are non-dairy sources of calcium?</h3>
                <p className="text-gray-700">
                  Non-dairy calcium sources include fortified plant milks (almond, soy, oat), leafy greens (kale, collards),
                  calcium-set tofu, fortified orange juice, sardines, almonds, white beans, and chia seeds. Pair with vitamin D
                  for better absorption.
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
                href="/categories/vitamin-c-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🍊</div>
                <h3 className="font-semibold text-gray-900">Vitamin C Foods</h3>
              </Link>
              <Link
                href="/categories/iron-rich-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🩸</div>
                <h3 className="font-semibold text-gray-900">Iron Rich Foods</h3>
              </Link>
              <Link
                href="/categories/low-calorie-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🥬</div>
                <h3 className="font-semibold text-gray-900">Low Calorie Foods</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
