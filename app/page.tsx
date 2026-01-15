import Link from 'next/link'
import { SITE_NAME, FOOD_CATEGORIES, POPULAR_FOODS } from '@/lib/constants'
import { getFoodData } from '@/lib/data'

export default function HomePage() {
  // Get nutrition data for popular foods
  const popularFoodsWithData = POPULAR_FOODS.slice(0, 12).map((food) => {
    const data = getFoodData(food.slug)
    return {
      ...food,
      calories: data?.nutritionPer100g.calories || 0,
    }
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nutrition Data for 300,000+ Foods
          </h1>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Free calorie counts, macros, and nutrition facts. Compare foods instantly.
            Data from USDA FoodData Central.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/category/fruits"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Browse Foods
            </Link>
            <Link
              href="/compare"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Compare Foods
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Foods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Foods
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularFoodsWithData.map((food) => (
              <Link
                key={food.slug}
                href={`/calories-in/${food.slug}`}
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900">{food.name}</h3>
                <p className="text-primary-600 font-bold text-lg">
                  {food.calories} cal
                </p>
                <p className="text-sm text-gray-500">per 100g</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/category/fruits"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View all foods →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {FOOD_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
              >
                <span className="text-4xl mb-2">{category.icon}</span>
                <span className="font-medium text-gray-900">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Comparisons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Comparisons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ['banana', 'apple'],
              ['chicken-breast', 'salmon'],
              ['rice', 'pasta'],
              ['avocado', 'banana'],
              ['egg', 'greek-yogurt'],
              ['almonds', 'peanut-butter'],
            ].map(([food1, food2]) => (
              <Link
                key={`${food1}-${food2}`}
                href={`/compare/${food1}-vs-${food2}`}
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow flex items-center justify-between"
              >
                <span className="font-medium text-gray-900">
                  {food1.replace('-', ' ')} vs {food2.replace('-', ' ')}
                </span>
                <span className="text-primary-600">Compare →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Use {SITE_NAME}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">300,000+ Foods</h3>
              <p className="text-gray-600">
                Comprehensive database from USDA FoodData Central with verified nutrition data.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Instant Comparisons</h3>
              <p className="text-gray-600">
                Compare any two foods side-by-side to make informed dietary choices.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="text-xl font-semibold mb-2">100% Free</h3>
              <p className="text-gray-600">
                No signup required. Access all nutrition data instantly, forever free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
          <h2>About Our Nutrition Database</h2>
          <p>
            {SITE_NAME} provides free access to nutrition information for over 300,000 foods.
            Our data comes directly from the USDA FoodData Central database, ensuring accuracy
            and reliability for your dietary planning needs.
          </p>
          <h3>What Information Do We Provide?</h3>
          <ul>
            <li><strong>Calories</strong> - Energy content per serving and per 100g</li>
            <li><strong>Macronutrients</strong> - Protein, carbohydrates, and fat</li>
            <li><strong>Micronutrients</strong> - Vitamins, minerals, and more</li>
            <li><strong>Serving sizes</strong> - Multiple portion options</li>
          </ul>
          <h3>Food Comparison Tool</h3>
          <p>
            Our comparison feature lets you evaluate any two foods side-by-side.
            See which has fewer calories, more protein, or better fits your nutrition goals.
            Perfect for meal planning and making healthier food choices.
          </p>
        </div>
      </section>
    </div>
  )
}
