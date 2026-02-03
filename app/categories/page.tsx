import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Food Categories - Browse by Nutrition Profile | CalorieData',
  description: 'Browse foods by nutrition category. High protein, low calorie, high fiber, low carb, healthy fats, vitamins, and minerals.',
  alternates: {
    canonical: `${SITE_URL}/categories`,
  },
  openGraph: {
    title: 'Food Categories - Browse by Nutrition Profile',
    description: 'Browse foods by nutrition category. High protein, low calorie, high fiber, low carb, healthy fats, vitamins, and minerals.',
    url: `${SITE_URL}/categories`,
  },
}

const categories = [
  {
    slug: 'high-protein-foods',
    name: 'High Protein Foods',
    icon: '💪',
    description: 'Foods with 20g+ protein per serving for muscle building and satiety',
    color: 'red',
  },
  {
    slug: 'low-calorie-foods',
    name: 'Low Calorie Foods',
    icon: '🥬',
    description: 'Foods under 100 calories per serving for weight loss',
    color: 'green',
  },
  {
    slug: 'high-fiber-foods',
    name: 'High Fiber Foods',
    icon: '🌾',
    description: 'Foods with 5g+ fiber for digestive health',
    color: 'amber',
  },
  {
    slug: 'low-carb-foods',
    name: 'Low Carb Foods',
    icon: '🥑',
    description: 'Foods under 10g carbs per serving for keto and low-carb diets',
    color: 'blue',
  },
  {
    slug: 'healthy-fats',
    name: 'Healthy Fats Foods',
    icon: '🐟',
    description: 'Foods rich in omega-3s and monounsaturated fats',
    color: 'emerald',
  },
  {
    slug: 'vitamin-c-foods',
    name: 'Vitamin C Foods',
    icon: '🍊',
    description: 'Foods high in vitamin C for immune health',
    color: 'orange',
  },
  {
    slug: 'iron-rich-foods',
    name: 'Iron Rich Foods',
    icon: '🩸',
    description: 'Foods high in iron for energy and blood health',
    color: 'red',
  },
  {
    slug: 'calcium-foods',
    name: 'Calcium Foods',
    icon: '🦴',
    description: 'Foods high in calcium for bone strength',
    color: 'indigo',
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Food Categories
          </h1>
          <p className="text-xl text-primary-100 mb-6 max-w-3xl">
            Browse foods by nutrition profile. Find high protein foods, low calorie options, foods rich in
            vitamins and minerals, and more to meet your health goals.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Browse by Nutrition Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
                <div className="mt-4 text-primary-600 text-sm font-medium">
                  Browse foods →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Macronutrient Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Macronutrient Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Protein</h3>
              <p className="text-gray-700 mb-4">
                Essential for muscle building, repair, and satiety. Includes meats, fish, eggs, dairy, and plant proteins.
              </p>
              <Link
                href="/categories/high-protein-foods"
                className="text-red-600 font-semibold hover:text-red-700"
              >
                View High Protein Foods →
              </Link>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Carbohydrates</h3>
              <p className="text-gray-700 mb-4">
                Primary energy source. Choose complex carbs and fiber-rich options for sustained energy.
              </p>
              <Link
                href="/categories/low-carb-foods"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                View Low Carb Foods →
              </Link>
            </div>
            <div className="bg-emerald-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">Fats</h3>
              <p className="text-gray-700 mb-4">
                Important for hormone production and nutrient absorption. Focus on healthy unsaturated fats.
              </p>
              <Link
                href="/categories/healthy-fats"
                className="text-emerald-600 font-semibold hover:text-emerald-700"
              >
                View Healthy Fats →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Micronutrient Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vitamin & Mineral Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-4xl mb-3">🍊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vitamin C</h3>
              <p className="text-gray-700 mb-4">
                Boosts immune system, supports collagen production, and acts as antioxidant.
              </p>
              <Link
                href="/categories/vitamin-c-foods"
                className="text-orange-600 font-semibold hover:text-orange-700"
              >
                View Foods →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-4xl mb-3">🩸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Iron</h3>
              <p className="text-gray-700 mb-4">
                Essential for oxygen transport, energy production, and preventing anemia.
              </p>
              <Link
                href="/categories/iron-rich-foods"
                className="text-red-600 font-semibold hover:text-red-700"
              >
                View Foods →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-4xl mb-3">🦴</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Calcium</h3>
              <p className="text-gray-700 mb-4">
                Builds strong bones and teeth, supports muscle function and nerve transmission.
              </p>
              <Link
                href="/categories/calcium-foods"
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                View Foods →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Browse */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other Ways to Browse</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/category/fruits"
              className="bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition-colors text-center"
            >
              <div className="text-3xl mb-2">🍎</div>
              <h3 className="font-semibold text-gray-900">Fruits</h3>
            </Link>
            <Link
              href="/category/vegetables"
              className="bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition-colors text-center"
            >
              <div className="text-3xl mb-2">🥦</div>
              <h3 className="font-semibold text-gray-900">Vegetables</h3>
            </Link>
            <Link
              href="/category/proteins"
              className="bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition-colors text-center"
            >
              <div className="text-3xl mb-2">🥩</div>
              <h3 className="font-semibold text-gray-900">Proteins</h3>
            </Link>
            <Link
              href="/category/dairy"
              className="bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition-colors text-center"
            >
              <div className="text-3xl mb-2">🥛</div>
              <h3 className="font-semibold text-gray-900">Dairy</h3>
            </Link>
            <Link
              href="/category/grains"
              className="bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition-colors text-center"
            >
              <div className="text-3xl mb-2">🌾</div>
              <h3 className="font-semibold text-gray-900">Grains</h3>
            </Link>
            <Link
              href="/category/nuts-seeds"
              className="bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition-colors text-center"
            >
              <div className="text-3xl mb-2">🥜</div>
              <h3 className="font-semibold text-gray-900">Nuts & Seeds</h3>
            </Link>
            <Link
              href="/diets"
              className="bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition-colors text-center"
            >
              <div className="text-3xl mb-2">🥗</div>
              <h3 className="font-semibold text-gray-900">Diet Types</h3>
            </Link>
            <Link
              href="/calculators"
              className="bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition-colors text-center"
            >
              <div className="text-3xl mb-2">🧮</div>
              <h3 className="font-semibold text-gray-900">Calculators</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
