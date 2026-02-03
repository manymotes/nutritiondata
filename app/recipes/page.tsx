import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Healthy Recipes with Calorie Counts & Nutrition Data | CalorieData',
  description: 'Discover 100+ healthy recipes with complete calorie counts, macronutrients, and ingredient breakdowns. Perfect for weight loss, meal planning, and healthy eating.',
  alternates: {
    canonical: `${SITE_URL}/recipes`,
  },
  openGraph: {
    title: 'Healthy Recipes with Calorie Counts & Nutrition Data',
    description: 'Discover 100+ healthy recipes with complete calorie counts, macronutrients, and ingredient breakdowns.',
    url: `${SITE_URL}/recipes`,
  },
}

const recipeCategories = [
  {
    slug: 'high-protein',
    name: 'High-Protein Recipes',
    icon: '💪',
    description: 'Protein-packed meals for muscle building and satiety',
    color: 'from-red-600 to-red-800',
  },
  {
    slug: 'low-calorie',
    name: 'Low-Calorie Recipes',
    icon: '🥬',
    description: 'Light, nutritious meals under 400 calories',
    color: 'from-green-600 to-green-800',
  },
  {
    slug: 'keto',
    name: 'Keto Recipes',
    icon: '🥑',
    description: 'Low-carb, high-fat recipes for ketogenic diets',
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    slug: 'vegan',
    name: 'Vegan Recipes',
    icon: '🌱',
    description: 'Plant-based recipes with complete nutrition data',
    color: 'from-lime-600 to-lime-800',
  },
  {
    slug: 'breakfast',
    name: 'Breakfast Recipes',
    icon: '🍳',
    description: 'Energizing morning meals to start your day',
    color: 'from-amber-600 to-amber-800',
  },
  {
    slug: 'lunch',
    name: 'Lunch Recipes',
    icon: '🥗',
    description: 'Satisfying midday meals for sustained energy',
    color: 'from-blue-600 to-blue-800',
  },
  {
    slug: 'dinner',
    name: 'Dinner Recipes',
    icon: '🍽️',
    description: 'Wholesome evening meals for the whole family',
    color: 'from-purple-600 to-purple-800',
  },
  {
    slug: 'snacks',
    name: 'Snack Recipes',
    icon: '🍪',
    description: 'Healthy snacks to keep you satisfied between meals',
    color: 'from-pink-600 to-pink-800',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are these recipes nutritionally accurate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all recipes include detailed nutrition data based on USDA FoodData Central. Each recipe shows calories per serving, macronutrients (protein, carbs, fat), and ingredient-level calorie breakdowns.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of recipes do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer recipes across 8 categories: high-protein, low-calorie, keto, vegan, breakfast, lunch, dinner, and snacks. Each category includes 10-15 recipes with complete nutrition information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use these recipes for meal planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! Each recipe includes serving sizes, prep/cook times, and detailed calorie counts. This makes it easy to plan meals that fit your daily calorie and macro goals.',
      },
    },
  ],
}

export default function RecipesPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Healthy Recipes with Complete Nutrition Data
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Browse 100+ recipes with detailed calorie counts, macronutrients, and ingredient breakdowns.
              Perfect for meal planning, weight loss, and healthy eating goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/recipes/high-protein"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Browse Recipes
              </Link>
              <Link
                href="/calculators/meal-planner"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Plan Your Meals
              </Link>
            </div>
          </div>
        </section>

        {/* Recipe Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Browse by Category
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Each recipe includes calorie counts, macros, prep time, and links to ingredient nutrition data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recipeCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/recipes/${category.slug}`}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <span className="text-primary-600 text-sm font-medium">
                    View recipes →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Our Recipes?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">Complete Nutrition Data</h3>
                <p className="text-gray-600">
                  Every recipe includes calories, protein, carbs, and fat per serving with ingredient-level breakdowns.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-semibold mb-2">Time Estimates</h3>
                <p className="text-gray-600">
                  All recipes show prep time and cook time so you can plan your meals efficiently.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold mb-2">Linked Ingredients</h3>
                <p className="text-gray-600">
                  Click any ingredient to see its full nutrition profile from our 300,000+ food database.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Are these recipes nutritionally accurate?</h3>
                <p className="text-gray-700">
                  Yes, all recipes include detailed nutrition data based on USDA FoodData Central. Each recipe shows
                  calories per serving, macronutrients (protein, carbs, fat), and ingredient-level calorie breakdowns.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">What types of recipes do you offer?</h3>
                <p className="text-gray-700">
                  We offer recipes across 8 categories: high-protein, low-calorie, keto, vegan, breakfast, lunch,
                  dinner, and snacks. Each category includes 10-15 recipes with complete nutrition information.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Can I use these recipes for meal planning?</h3>
                <p className="text-gray-700">
                  Absolutely! Each recipe includes serving sizes, prep/cook times, and detailed calorie counts. This
                  makes it easy to plan meals that fit your daily calorie and macro goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start Cooking Healthier Today
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Browse our complete collection of recipes and find your next favorite meal.
            </p>
            <Link
              href="/recipes/breakfast"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              View Breakfast Recipes
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
