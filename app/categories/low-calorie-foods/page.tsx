import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { getAllFoods } from '@/lib/data'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Low Calorie Foods - Complete List Under 100 Calories | CalorieData',
  description: 'Browse 50+ low calorie foods under 100 calories per serving. Perfect for weight loss, dieting, and healthy eating with complete nutrition data.',
  alternates: {
    canonical: `${SITE_URL}/categories/low-calorie-foods`,
  },
  openGraph: {
    title: 'Low Calorie Foods - Complete List Under 100 Calories',
    description: 'Browse 50+ low calorie foods under 100 calories per serving. Perfect for weight loss, dieting, and healthy eating with complete nutrition data.',
    url: `${SITE_URL}/categories/low-calorie-foods`,
  },
}

export default function LowCalorieFoodsPage() {
  const allFoods = getAllFoods()

  // Filter foods with under 100 calories per 100g
  const lowCalorieFoods = allFoods
    .filter(food => food.nutritionPer100g.calories <= 100)
    .sort((a, b) => a.nutritionPer100g.calories - b.nutritionPer100g.calories)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the lowest calorie foods?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The lowest calorie foods include celery (14 cal/100g), cucumber (15 cal), lettuce (15 cal), zucchini (17 cal), tomato (18 cal), broccoli (34 cal), strawberries (32 cal), and watermelon (30 cal). Most non-starchy vegetables are very low in calories.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many calories should I eat to lose weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To lose weight, create a calorie deficit of 500-750 calories per day below your maintenance level, resulting in 1-1.5 lbs of weight loss per week. Most women need 1200-1500 calories and men 1500-1800 calories for safe weight loss, but individual needs vary.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I eat unlimited low calorie foods?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While low calorie vegetables can be eaten in large quantities, balance is important. Focus on nutrient density rather than just calories. Include adequate protein, healthy fats, and a variety of foods to meet all nutritional needs even when reducing calories.',
        },
      },
      {
        '@type': 'Question',
        name: 'What low calorie foods keep you full?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Low calorie foods that promote satiety include high-fiber vegetables (broccoli, cauliflower), high-protein foods (egg whites, shrimp, cod), and high-water content foods (cucumber, watermelon). Greek yogurt, berries, and leafy greens also help you feel full with few calories.',
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
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Low Calorie Foods
            </h1>
            <p className="text-xl text-green-100 mb-6 max-w-3xl">
              Discover {lowCalorieFoods.length} foods with 100 calories or less per 100g serving.
              Perfect for weight loss, calorie counting, and maintaining a healthy diet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/categories"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                All Categories
              </Link>
              <Link
                href="/calculators/calorie-calculator"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Calculate Your Calorie Needs
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Low Calorie Foods</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-3xl mb-3">📉</div>
                <h3 className="text-xl font-semibold mb-2">Weight Loss</h3>
                <p className="text-gray-700">
                  Low calorie foods help create the calorie deficit needed for weight loss while allowing larger portion sizes.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🥗</div>
                <h3 className="text-xl font-semibold mb-2">Nutrient Dense</h3>
                <p className="text-gray-700">
                  Many low calorie foods are packed with vitamins, minerals, and fiber while being naturally low in calories.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-3xl mb-3">😊</div>
                <h3 className="text-xl font-semibold mb-2">Eat More Volume</h3>
                <p className="text-gray-700">
                  Low calorie density allows you to eat satisfying portions without exceeding your daily calorie goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Foods Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {lowCalorieFoods.length} Low Calorie Foods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lowCalorieFoods.map((food) => (
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
                      <span className="font-bold text-green-600 text-lg">{food.nutritionPer100g.calories}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Protein</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.protein}g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Carbs</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.carbs}g</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Fiber</span>
                      <span className="font-semibold text-gray-900">{food.nutritionPer100g.fiber}g</span>
                    </div>
                  </div>

                  <div className="mt-4 text-green-600 text-sm font-medium">
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
                <h3 className="text-xl font-semibold mb-2">What are the lowest calorie foods?</h3>
                <p className="text-gray-700">
                  The lowest calorie foods include celery (14 cal/100g), cucumber (15 cal), lettuce (15 cal), zucchini (17 cal),
                  tomato (18 cal), broccoli (34 cal), strawberries (32 cal), and watermelon (30 cal). Most non-starchy vegetables
                  are very low in calories.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How many calories should I eat to lose weight?</h3>
                <p className="text-gray-700">
                  To lose weight, create a calorie deficit of 500-750 calories per day below your maintenance level, resulting
                  in 1-1.5 lbs of weight loss per week. Most women need 1200-1500 calories and men 1500-1800 calories for safe
                  weight loss, but individual needs vary.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I eat unlimited low calorie foods?</h3>
                <p className="text-gray-700">
                  While low calorie vegetables can be eaten in large quantities, balance is important. Focus on nutrient density
                  rather than just calories. Include adequate protein, healthy fats, and a variety of foods to meet all
                  nutritional needs even when reducing calories.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What low calorie foods keep you full?</h3>
                <p className="text-gray-700">
                  Low calorie foods that promote satiety include high-fiber vegetables (broccoli, cauliflower), high-protein
                  foods (egg whites, shrimp, cod), and high-water content foods (cucumber, watermelon). Greek yogurt, berries,
                  and leafy greens also help you feel full with few calories.
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
                href="/categories/high-fiber-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🌾</div>
                <h3 className="font-semibold text-gray-900">High Fiber Foods</h3>
              </Link>
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
                href="/categories/low-carb-foods"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🥑</div>
                <h3 className="font-semibold text-gray-900">Low Carb Foods</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
