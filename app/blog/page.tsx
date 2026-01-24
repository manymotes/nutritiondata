import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Nutrition Blog - Tips, Guides & Food Facts',
  description: 'Expert nutrition advice, diet tips, and food facts. Learn about calories, macros, weight loss, and healthy eating.',
  openGraph: {
    title: 'Nutrition Blog - Tips & Guides',
    description: 'Expert nutrition advice and healthy eating tips.',
  },
}

export default function BlogPage() {
  const articles = [
    {
      slug: 'low-calorie-foods-for-weight-loss',
      title: 'Low Calorie Foods for Weight Loss: 30 Best Options',
      excerpt: 'Discover the best low calorie foods that help you lose weight while staying full and satisfied. Science-backed nutrition guide.',
      category: 'Weight Loss',
      readTime: '8 min read',
      status: 'Published',
    },
    {
      slug: 'high-protein-foods-for-muscle-building',
      title: 'High Protein Foods for Muscle Building: Complete Guide',
      excerpt: 'Build muscle faster with the best high protein foods. Complete guide with protein content, meal plans, and science-backed tips.',
      category: 'Nutrition',
      readTime: '10 min read',
      status: 'Published',
    },
    {
      slug: 'understanding-calories',
      title: 'Understanding Calories: A Complete Guide',
      excerpt: 'Learn what calories are, how they work, and why they matter for weight management.',
      category: 'Basics',
      readTime: '5 min read',
      status: 'Coming Soon',
    },
    {
      slug: 'low-carb-diet-guide',
      title: 'Low Carb Diet Guide for Beginners',
      excerpt: 'Start your low-carb journey with this comprehensive beginner-friendly guide.',
      category: 'Diets',
      readTime: '10 min read',
      status: 'Coming Soon',
    },
    {
      slug: 'meal-prep-tips',
      title: '10 Meal Prep Tips for Weight Loss',
      excerpt: 'Save time and stay on track with these proven meal prep strategies.',
      category: 'Tips',
      readTime: '6 min read',
      status: 'Coming Soon',
    },
    {
      slug: 'calorie-deficit',
      title: 'How to Create a Calorie Deficit Safely',
      excerpt: 'The science-based approach to sustainable weight loss through calorie management.',
      category: 'Weight Loss',
      readTime: '9 min read',
      status: 'Coming Soon',
    },
  ]

  const categories = ['All', 'Basics', 'Nutrition', 'Diets', 'Tips', 'Weight Loss']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-700">Home</Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Blog</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nutrition Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Expert nutrition advice, diet tips, and food facts to help you make
          informed decisions about your health.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {articles.map((article) => {
          const isPublished = article.status === 'Published'

          const cardContent = (
            <>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">{article.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${
                  isPublished ? 'text-green-600' : 'text-primary-600'
                }`}>
                  {article.status} {isPublished && '→'}
                </span>
              </div>
            </>
          )

          if (isPublished) {
            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                {cardContent}
              </Link>
            )
          }

          return (
            <div
              key={article.slug}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              {cardContent}
            </div>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Explore Our Food Database
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          While we're working on blog content, explore nutrition data for over
          300,000 foods and compare any foods side-by-side.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/category/fruits"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Browse Foods
          </Link>
          <Link
            href="/lists"
            className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            View Food Lists
          </Link>
        </div>
      </div>

      {/* SEO Content */}
      <div className="mt-12 prose max-w-none">
        <h2>About Our Nutrition Blog</h2>
        <p>
          Our nutrition blog provides evidence-based information about diet, nutrition,
          and healthy eating. We cover everything from basic nutrition concepts to
          advanced diet strategies, helping you make informed decisions about your food choices.
        </p>

        <h3>Topics We Cover</h3>
        <ul>
          <li><strong>Nutrition Basics</strong> - Understanding calories, macros, and micronutrients</li>
          <li><strong>Diet Guides</strong> - In-depth guides for popular diets like keto, low-carb, and more</li>
          <li><strong>Weight Loss</strong> - Science-based strategies for healthy, sustainable weight loss</li>
          <li><strong>Meal Planning</strong> - Tips and tricks for efficient meal prep and planning</li>
          <li><strong>Food Comparisons</strong> - Detailed comparisons to help you choose better options</li>
        </ul>

        <h3>Coming Soon</h3>
        <p>
          We're actively developing high-quality nutrition content. Check back soon for
          comprehensive guides and expert advice on all things nutrition.
        </p>
      </div>
    </div>
  )
}
