import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { getAllFoods } from '@/lib/data'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Healthy Fats Foods - Omega-3 & Monounsaturated Fats | CalorieData',
  description: 'Discover foods rich in healthy fats including omega-3s and monounsaturated fats. Essential for heart health, brain function, and overall wellness.',
  alternates: {
    canonical: `${SITE_URL}/categories/healthy-fats`,
  },
  openGraph: {
    title: 'Healthy Fats Foods - Omega-3 & Monounsaturated Fats',
    description: 'Discover foods rich in healthy fats including omega-3s and monounsaturated fats. Essential for heart health, brain function, and overall wellness.',
    url: `${SITE_URL}/categories/healthy-fats`,
  },
}

export default function HealthyFatsPage() {
  const allFoods = getAllFoods()

  // Filter foods high in healthy fats (fatty fish, avocado, nuts, seeds, oils)
  const healthyFatFoods = allFoods
    .filter(food =>
      food.nutritionPer100g.fat >= 10 &&
      ['nuts-seeds', 'proteins'].includes(food.category) ||
      ['avocado', 'salmon', 'tuna', 'cod'].includes(food.slug)
    )
    .sort((a, b) => b.nutritionPer100g.fat - a.nutritionPer100g.fat)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are healthy fats?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Healthy fats include monounsaturated fats (olive oil, avocados, nuts) and polyunsaturated fats, especially omega-3s (fatty fish, flaxseeds, walnuts). These fats support heart health, reduce inflammation, and are essential for brain function and hormone production.',
        },
      },
      {
        '@type': 'Question',
        name: 'What foods are highest in omega-3 fatty acids?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The highest omega-3 foods include fatty fish (salmon, mackerel, sardines), flaxseeds, chia seeds, walnuts, and fish oil. Plant sources provide ALA omega-3s while fish provide EPA and DHA, which are more readily used by the body.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much healthy fat should I eat daily?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Healthy fats should comprise 20-35% of daily calories. For a 2000 calorie diet, this equals 44-78g of fat daily. Focus on unsaturated fats from fish, nuts, seeds, and plant oils while limiting saturated fats and avoiding trans fats.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are high fat foods good for weight loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, healthy fats support weight loss by increasing satiety, stabilizing blood sugar, and reducing cravings. While calorie-dense, fats help you feel satisfied longer. Low-carb, higher-fat diets like keto have proven effective for weight loss in many people.',
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
        <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Healthy Fats Foods
            </h1>
            <p className="text-xl text-emerald-100 mb-6 max-w-3xl">
              Complete guide to {healthyFatFoods.length} foods rich in omega-3s, monounsaturated, and polyunsaturated fats.
              Essential for heart health, brain function, and overall wellness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/categories"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Healthy Fats</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-emerald-50 rounded-lg p-6">
                <div className="text-3xl mb-3">❤️</div>
                <h3 className="text-xl font-semibold mb-2">Heart Health</h3>
                <p className="text-gray-700">
                  Unsaturated fats lower bad cholesterol, reduce inflammation, and decrease risk of cardiovascular disease.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Brain Function</h3>
                <p className="text-gray-700">
                  Omega-3 fatty acids support cognitive function, memory, and may reduce risk of cognitive decline.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-6">
                <div className="text-3xl mb-3">💊</div>
                <h3 className="text-xl font-semibold mb-2">Reduces Inflammation</h3>
                <p className="text-gray-700">
                  Healthy fats have anti-inflammatory properties, beneficial for joint health and chronic disease prevention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Foods Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {healthyFatFoods.length} Healthy Fat Foods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthyFatFoods.map((food) => (
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
                      <span className="text-sm text-gray-600">Fat</span>
                      <span className="font-bold text-emerald-600 text-lg">{food.nutritionPer100g.fat}g</span>
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

                  <div className="mt-4 text-emerald-600 text-sm font-medium">
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
                <h3 className="text-xl font-semibold mb-2">What are healthy fats?</h3>
                <p className="text-gray-700">
                  Healthy fats include monounsaturated fats (olive oil, avocados, nuts) and polyunsaturated fats, especially
                  omega-3s (fatty fish, flaxseeds, walnuts). These fats support heart health, reduce inflammation, and are
                  essential for brain function and hormone production.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What foods are highest in omega-3 fatty acids?</h3>
                <p className="text-gray-700">
                  The highest omega-3 foods include fatty fish (salmon, mackerel, sardines), flaxseeds, chia seeds, walnuts,
                  and fish oil. Plant sources provide ALA omega-3s while fish provide EPA and DHA, which are more readily
                  used by the body.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How much healthy fat should I eat daily?</h3>
                <p className="text-gray-700">
                  Healthy fats should comprise 20-35% of daily calories. For a 2000 calorie diet, this equals 44-78g of fat
                  daily. Focus on unsaturated fats from fish, nuts, seeds, and plant oils while limiting saturated fats and
                  avoiding trans fats.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Are high fat foods good for weight loss?</h3>
                <p className="text-gray-700">
                  Yes, healthy fats support weight loss by increasing satiety, stabilizing blood sugar, and reducing cravings.
                  While calorie-dense, fats help you feel satisfied longer. Low-carb, higher-fat diets like keto have proven
                  effective for weight loss in many people.
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
                href="/categories/low-carb-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🥑</div>
                <h3 className="font-semibold text-gray-900">Low Carb Foods</h3>
              </Link>
              <Link
                href="/categories/high-protein-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">💪</div>
                <h3 className="font-semibold text-gray-900">High Protein Foods</h3>
              </Link>
              <Link
                href="/categories/iron-rich-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🩸</div>
                <h3 className="font-semibold text-gray-900">Iron Rich Foods</h3>
              </Link>
              <Link
                href="/categories/vitamin-c-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🍊</div>
                <h3 className="font-semibold text-gray-900">Vitamin C Foods</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
