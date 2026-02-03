import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Meal Prep Guides - Weekly Meal Planning with Calorie Counts | CalorieData',
  description: 'Complete meal prep guides with shopping lists, calorie counts, and macro breakdowns. Learn how to meal prep for weight loss, muscle building, and busy schedules.',
  alternates: {
    canonical: `${SITE_URL}/meal-prep`,
  },
  openGraph: {
    title: 'Meal Prep Guides - Save Time & Eat Healthy All Week',
    description: 'Complete meal prep guides with shopping lists, calorie counts, and step-by-step instructions.',
    url: `${SITE_URL}/meal-prep`,
  },
}

const guides = [
  {
    title: "Beginner's Guide to Meal Prepping",
    description: 'Learn the basics of meal prep including planning, containers, safety, and storage tips.',
    icon: '📚',
    slug: 'beginners-guide',
    features: ['Meal prep basics', 'Container guide', 'Food safety', 'Storage tips'],
  },
  {
    title: 'Sunday Meal Prep Plan',
    description: 'Complete weekly batch cooking plan to prepare all your meals on Sunday.',
    icon: '📅',
    slug: 'sunday-meal-prep',
    features: ['5-day meal plan', 'Batch cooking', 'Time schedule', 'Prep tips'],
  },
  {
    title: 'Budget Meal Prep',
    description: 'Affordable meal prep recipes and plans under $50 per week.',
    icon: '💰',
    slug: 'budget-meal-prep',
    features: ['Under $50/week', 'Cheap recipes', 'Shopping tips', 'Bulk buying'],
  },
  {
    title: 'High-Protein Meal Prep',
    description: 'Meal prep plan optimized for muscle building with 150g+ protein daily.',
    icon: '💪',
    slug: 'high-protein',
    features: ['150g+ protein/day', 'Muscle building', 'Lean recipes', 'Macro tracking'],
  },
  {
    title: 'Weight Loss Meal Prep',
    description: 'Calorie-controlled meal prep plans designed for sustainable weight loss.',
    icon: '⚖️',
    slug: 'weight-loss',
    features: ['Calorie controlled', 'Filling meals', 'Portion sizes', 'Weight loss tips'],
  },
  {
    title: 'Family Meal Prep',
    description: 'Kid-friendly meal prep recipes with 4-6 servings per meal.',
    icon: '👨‍👩‍👧‍👦',
    slug: 'family-meal-prep',
    features: ['4-6 servings', 'Kid-friendly', 'Family favorites', 'Batch cooking'],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is meal prepping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meal prepping is the practice of preparing meals or meal components in advance, typically for the week ahead. This saves time, money, and helps you maintain a healthy diet by having nutritious meals ready to eat.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does meal prepped food last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most meal prepped foods last 3-5 days in the refrigerator when stored properly in airtight containers. Cooked grains and proteins typically last 4-5 days, while fresh vegetables may only last 2-3 days. For longer storage, freeze meals for up to 3 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much time does meal prep take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical meal prep session takes 2-3 hours to prepare meals for 5 days. Beginners may take longer initially, but with practice, you can streamline the process. Batch cooking and multitasking help save time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What containers are best for meal prep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Glass containers with airtight lids are ideal for meal prep as they are microwave-safe, dishwasher-safe, and do not retain odors. BPA-free plastic containers are a lighter, more affordable option. Look for compartmentalized containers to keep foods separated.',
      },
    },
  ],
}

export default function MealPrepPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Meal Prep Guides
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto text-center">
              Save time, eat healthy, and reach your nutrition goals with complete meal prep plans.
              Each guide includes shopping lists, calorie counts, prep instructions, and storage tips.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Meal Prep?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-xl font-semibold mb-3">Save Time</h3>
                <p className="text-gray-600">
                  Spend 2-3 hours on prep day, save 10+ hours during the week. No more daily cooking or meal decisions.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💵</div>
                <h3 className="text-xl font-semibold mb-3">Save Money</h3>
                <p className="text-gray-600">
                  Reduce food waste, avoid impulse buys, and cut restaurant spending by having meals ready at home.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Hit Your Goals</h3>
                <p className="text-gray-600">
                  Control portions, track calories accurately, and stay consistent with your nutrition plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Choose Your Meal Prep Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/meal-prep/${guide.slug}`}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl mb-4">{guide.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <ul className="space-y-2">
                    {guide.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="text-emerald-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Getting Started with Meal Prep</h2>
            <div className="space-y-6 prose max-w-none">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Choose Your Meals</h3>
                <p className="text-gray-700">
                  Start by selecting 3-5 recipes you enjoy that align with your nutrition goals. Begin with simple recipes
                  that reheat well, like grilled proteins, roasted vegetables, and cooked grains.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">2. Create a Shopping List</h3>
                <p className="text-gray-700">
                  Write down all ingredients needed for your chosen recipes. Check your pantry first to avoid buying duplicates.
                  Shop once for the entire week to save time and stick to your list to avoid impulse purchases.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">3. Set Aside Prep Time</h3>
                <p className="text-gray-700">
                  Block out 2-4 hours on your chosen prep day (Sunday works for most people). This dedicated time lets you
                  batch cook efficiently without rushing. Play music or a podcast to make it enjoyable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">4. Cook and Portion</h3>
                <p className="text-gray-700">
                  Cook all proteins together, prep all vegetables at once, and batch cook grains. Portion everything into
                  individual containers while food is fresh. Label containers with contents and date.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">5. Store Properly</h3>
                <p className="text-gray-700">
                  Refrigerate meals you will eat in the next 3-4 days. Freeze the rest for later in the week or next week.
                  Let hot food cool to room temperature before sealing containers to prevent condensation.
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
                <h3 className="text-xl font-semibold mb-3">What is meal prepping?</h3>
                <p className="text-gray-700">
                  Meal prepping is the practice of preparing meals or meal components in advance, typically for the week ahead.
                  This saves time, money, and helps you maintain a healthy diet by having nutritious meals ready to eat.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How long does meal prepped food last?</h3>
                <p className="text-gray-700">
                  Most meal prepped foods last 3-5 days in the refrigerator when stored properly in airtight containers.
                  Cooked grains and proteins typically last 4-5 days, while fresh vegetables may only last 2-3 days.
                  For longer storage, freeze meals for up to 3 months.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How much time does meal prep take?</h3>
                <p className="text-gray-700">
                  A typical meal prep session takes 2-3 hours to prepare meals for 5 days. Beginners may take longer initially,
                  but with practice, you can streamline the process. Batch cooking and multitasking help save time.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What containers are best for meal prep?</h3>
                <p className="text-gray-700">
                  Glass containers with airtight lids are ideal for meal prep as they are microwave-safe, dishwasher-safe,
                  and do not retain odors. BPA-free plastic containers are a lighter, more affordable option. Look for
                  compartmentalized containers to keep foods separated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Resources</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/recipes/high-protein"
                className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">💪</div>
                <h3 className="font-semibold text-gray-900">High-Protein Recipes</h3>
              </Link>
              <Link
                href="/calculators/macro-calculator"
                className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🥗</div>
                <h3 className="font-semibold text-gray-900">Macro Calculator</h3>
              </Link>
              <Link
                href="/calculators/meal-planner"
                className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">📋</div>
                <h3 className="font-semibold text-gray-900">Meal Planner</h3>
              </Link>
              <Link
                href="/lists/high-protein-foods"
                className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🍗</div>
                <h3 className="font-semibold text-gray-900">Protein Foods</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
