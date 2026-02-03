import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { getAllFoods } from '@/lib/data'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Iron Rich Foods - Complete List for Energy & Health | CalorieData',
  description: 'Discover foods high in iron for energy, blood health, and preventing anemia. Red meat, leafy greens, legumes, and more with complete nutrition data.',
  alternates: {
    canonical: `${SITE_URL}/categories/iron-rich-foods`,
  },
  openGraph: {
    title: 'Iron Rich Foods - Complete List for Energy & Health',
    description: 'Discover foods high in iron for energy, blood health, and preventing anemia. Red meat, leafy greens, legumes, and more with complete nutrition data.',
    url: `${SITE_URL}/categories/iron-rich-foods`,
  },
}

export default function IronRichFoodsPage() {
  const allFoods = getAllFoods()

  // Filter foods high in iron (red meats, leafy greens, high-protein foods)
  const ironRichFoods = allFoods
    .filter(food =>
      food.category === 'proteins' ||
      ['spinach', 'kale', 'broccoli'].includes(food.slug) ||
      (food.nutritionPer100g.protein >= 15)
    )
    .sort((a, b) => b.nutritionPer100g.protein - a.nutritionPer100g.protein)
    .slice(0, 60)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What foods are highest in iron?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The highest iron foods include red meat (beef, lamb), liver, oysters, dark leafy greens (spinach, kale), legumes (lentils, beans), tofu, quinoa, and fortified cereals. Heme iron from animal sources is better absorbed than non-heme iron from plants.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much iron do I need daily?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Adult men and postmenopausal women need 8mg of iron daily. Premenopausal women need 18mg due to menstrual blood loss. Pregnant women need 27mg. Athletes and vegetarians may need more due to increased needs or lower absorption.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are symptoms of iron deficiency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Iron deficiency symptoms include fatigue, weakness, pale skin, shortness of breath, dizziness, cold hands and feet, brittle nails, and frequent infections. Severe deficiency causes anemia. Women, vegetarians, and athletes are at higher risk.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I increase iron absorption?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Increase iron absorption by pairing iron-rich foods with vitamin C sources (citrus, peppers), avoiding tea and coffee with meals (which inhibit absorption), and cooking in cast iron. Heme iron from meat is absorbed better than non-heme iron from plants.',
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
        <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Iron Rich Foods
            </h1>
            <p className="text-xl text-red-100 mb-6 max-w-3xl">
              Complete guide to {ironRichFoods.length} iron-rich foods for energy, blood health, and preventing anemia.
              Red meat, leafy greens, legumes, and protein-rich foods.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/categories"
                className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Iron</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Energy Production</h3>
                <p className="text-gray-700">
                  Iron is essential for oxygen transport in blood, preventing fatigue and supporting cellular energy production.
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🩸</div>
                <h3 className="text-xl font-semibold mb-2">Prevents Anemia</h3>
                <p className="text-gray-700">
                  Adequate iron prevents iron-deficiency anemia, the most common nutritional deficiency worldwide.
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Brain Function</h3>
                <p className="text-gray-700">
                  Iron supports cognitive function, concentration, and neurological development, especially important for children.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Foods Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {ironRichFoods.length} Iron Rich Foods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ironRichFoods.map((food) => (
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
                      <span className="font-bold text-red-700 text-lg">{food.nutritionPer100g.protein}g</span>
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

                  <div className="mt-4 text-red-700 text-sm font-medium">
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
                <h3 className="text-xl font-semibold mb-2">What foods are highest in iron?</h3>
                <p className="text-gray-700">
                  The highest iron foods include red meat (beef, lamb), liver, oysters, dark leafy greens (spinach, kale),
                  legumes (lentils, beans), tofu, quinoa, and fortified cereals. Heme iron from animal sources is better
                  absorbed than non-heme iron from plants.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How much iron do I need daily?</h3>
                <p className="text-gray-700">
                  Adult men and postmenopausal women need 8mg of iron daily. Premenopausal women need 18mg due to menstrual
                  blood loss. Pregnant women need 27mg. Athletes and vegetarians may need more due to increased needs or
                  lower absorption.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What are symptoms of iron deficiency?</h3>
                <p className="text-gray-700">
                  Iron deficiency symptoms include fatigue, weakness, pale skin, shortness of breath, dizziness, cold hands
                  and feet, brittle nails, and frequent infections. Severe deficiency causes anemia. Women, vegetarians, and
                  athletes are at higher risk.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How can I increase iron absorption?</h3>
                <p className="text-gray-700">
                  Increase iron absorption by pairing iron-rich foods with vitamin C sources (citrus, peppers), avoiding tea
                  and coffee with meals (which inhibit absorption), and cooking in cast iron. Heme iron from meat is absorbed
                  better than non-heme iron from plants.
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
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
