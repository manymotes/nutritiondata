import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Food Lists - Low Calorie, High Protein & More',
  description: 'Discover the best foods for your diet with our curated lists. Find low calorie foods, high protein options, and foods perfect for weight loss.',
  openGraph: {
    title: 'Food Lists - Low Calorie, High Protein & More',
    description: 'Curated food lists to help you reach your nutrition goals.',
  },
}

export default function ListsPage() {
  const lists = [
    {
      slug: 'low-calorie-foods',
      title: 'Low Calorie Foods',
      description: 'Top foods under 50 calories per 100g. Perfect for weight loss and calorie-conscious eating.',
      icon: '🥬',
    },
    {
      slug: 'high-protein-foods',
      title: 'High Protein Foods',
      description: 'Best high-protein foods for muscle building and satiety. Over 20g protein per 100g.',
      icon: '💪',
    },
    {
      slug: 'low-carb-foods',
      title: 'Low Carb Foods',
      description: 'Top low-carb foods for keto and low-carb diets. Under 10g carbs per 100g.',
      icon: '🥑',
    },
    {
      slug: 'weight-loss-foods',
      title: 'Best Foods for Weight Loss',
      description: 'Nutrient-dense, filling foods that support healthy weight loss goals.',
      icon: '⚖️',
    },
    {
      slug: 'high-fiber-foods',
      title: 'High Fiber Foods',
      description: 'Top fiber-rich foods for digestive health. Over 5g fiber per 100g.',
      icon: '🌾',
    },
    {
      slug: 'low-fat-foods',
      title: 'Low Fat Foods',
      description: 'Best low-fat options for heart health. Under 3g fat per 100g.',
      icon: '❤️',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-700">Home</Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Food Lists</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Curated Food Lists
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the best foods for your health goals. Browse our curated lists
          of low calorie foods, high protein options, and more.
        </p>
      </div>

      {/* Lists Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {lists.map((list) => (
          <Link
            key={list.slug}
            href={`/lists/${list.slug}`}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-3">{list.icon}</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {list.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {list.description}
            </p>
            <span className="text-primary-600 font-medium">View list →</span>
          </Link>
        ))}
      </div>

      {/* SEO Content */}
      <div className="mt-12 prose max-w-none">
        <h2>Why Use Our Food Lists?</h2>
        <p>
          Our curated food lists make it easy to find the right foods for your diet.
          Whether you're tracking calories, building muscle, or following a specific
          diet plan, these lists help you make informed choices quickly.
        </p>

        <h3>Data-Driven Recommendations</h3>
        <p>
          All our food lists are based on verified USDA nutrition data. We analyze
          thousands of foods to bring you the top options in each category, helping
          you reach your health and fitness goals faster.
        </p>
      </div>
    </div>
  )
}
