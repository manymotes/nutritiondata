import Link from 'next/link'
import { SITE_NAME, FOOD_CATEGORIES } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🥗</span>
              <span className="text-xl font-bold text-white">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-gray-400">
              Free nutrition data for 300,000+ foods. Data sourced from USDA FoodData Central.
            </p>
          </div>

          {/* Food Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Food Categories</h3>
            <ul className="space-y-2 text-sm">
              {FOOD_CATEGORIES.slice(0, 5).map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {category.icon} {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">More Categories</h3>
            <ul className="space-y-2 text-sm">
              {FOOD_CATEGORIES.slice(5).map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {category.icon} {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/compare" className="hover:text-white transition-colors">
                  Compare Foods
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="hover:text-white transition-colors">
                  Calorie Calculator
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://fdc.nal.usda.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  USDA Data Source
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Data provided by USDA FoodData Central. Not medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
