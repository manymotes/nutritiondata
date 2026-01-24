import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Nutrition Calculators - BMI, TDEE & Calorie Counter',
  description: 'Free nutrition calculators including BMI calculator, TDEE calculator, and calorie counter. Calculate your daily calorie needs and track your nutrition goals.',
  openGraph: {
    title: 'Nutrition Calculators',
    description: 'Calculate BMI, TDEE, and daily calorie needs with our free nutrition calculators.',
  },
}

export default function CalculatorsPage() {
  const calculators = [
    {
      slug: 'bmi',
      title: 'BMI Calculator',
      description: 'Calculate your Body Mass Index (BMI) and find your weight category. Free, accurate calculator with imperial and metric units.',
      icon: '⚖️',
      features: ['Height & weight input', 'BMI category classification', 'Health recommendations'],
      available: true,
    },
    {
      slug: 'tdee',
      title: 'TDEE Calculator',
      description: 'Calculate Total Daily Energy Expenditure and BMR. Get personalized calorie targets for weight loss, maintenance, or muscle gain.',
      icon: '🔥',
      features: ['BMR calculation', 'Activity level adjustment', 'Goal-based recommendations'],
      available: true,
    },
    {
      slug: 'macros',
      title: 'Macro Calculator',
      description: 'Calculate ideal protein, carbs, and fat intake. Customized macro targets for your fitness goals.',
      icon: '🥗',
      features: ['Protein/carb/fat breakdown', 'Per-meal targets', 'Food examples'],
      available: true,
    },
    {
      slug: null,
      title: 'Calorie Counter',
      description: 'Track daily calorie intake and monitor your nutrition goals with our food diary.',
      icon: '📊',
      features: ['Food logging', 'Daily tracking', 'Progress charts'],
      available: false,
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
          <li className="text-gray-900 font-medium">Calculators</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nutrition Calculators
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Free tools to help you calculate your nutritional needs, track calories,
          and reach your health goals.
        </p>
      </div>

      {/* Calculators Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {calculators.map((calculator) => {
          const cardContent = (
            <>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{calculator.icon}</span>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {calculator.title}
                  </h2>
                </div>
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  calculator.available
                    ? 'text-green-700 bg-green-100'
                    : 'text-primary-600 bg-primary-50'
                }`}>
                  {calculator.available ? 'Available' : 'Coming Soon'}
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                {calculator.description}
              </p>
              <ul className="space-y-1 mb-4">
                {calculator.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {calculator.available && (
                <div className="text-primary-600 font-medium flex items-center gap-1">
                  Use Calculator
                  <span>→</span>
                </div>
              )}
            </>
          )

          if (calculator.available && calculator.slug) {
            return (
              <Link
                key={calculator.title}
                href={`/calculators/${calculator.slug}`}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                {cardContent}
              </Link>
            )
          }

          return (
            <div
              key={calculator.title}
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
          Meanwhile, Explore Our Food Database
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Browse nutrition information for over 300,000 foods and compare any
          foods side-by-side to make informed dietary choices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/category/fruits"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Browse Foods
          </Link>
          <Link
            href="/compare"
            className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Compare Foods
          </Link>
        </div>
      </div>

      {/* SEO Content */}
      <div className="mt-12 prose max-w-none">
        <h2>About Our Nutrition Calculators</h2>
        <p>
          Our suite of nutrition calculators is designed to help you understand your
          body&apos;s needs and make informed decisions about your diet. Whether you&apos;re
          trying to lose weight, gain muscle, or simply maintain a healthy lifestyle,
          these tools provide the data you need.
        </p>

        <h3>Why Use Nutrition Calculators?</h3>
        <p>
          Understanding your nutritional needs is the first step toward achieving your
          health goals. Our calculators help you determine your daily calorie requirements,
          optimal macronutrient ratios, and track your progress over time.
        </p>

        <h3>Coming Soon</h3>
        <p>
          We&apos;re working hard to bring you accurate, easy-to-use nutrition calculators.
          In the meantime, you can explore our comprehensive food database with nutrition
          information for over 300,000 foods.
        </p>
      </div>
    </div>
  )
}
