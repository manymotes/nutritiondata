import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: "Beginner's Guide to Meal Prepping - Complete Starter Guide | CalorieData",
  description: 'Learn how to meal prep with this complete beginner guide. Includes container recommendations, food safety tips, storage guidelines, and a simple 5-day meal plan.',
  alternates: {
    canonical: `${SITE_URL}/meal-prep/beginners-guide`,
  },
  openGraph: {
    title: "Beginner's Guide to Meal Prepping - Start Meal Prep Today",
    description: 'Complete beginner guide to meal prepping with containers, safety tips, and a simple 5-day plan.',
    url: `${SITE_URL}/meal-prep/beginners-guide`,
  },
}

const weekPlan = [
  {
    day: 'Monday',
    breakfast: { name: 'Overnight Oats with Berries', calories: 320, protein: 12, carbs: 52, fat: 8 },
    lunch: { name: 'Grilled Chicken & Rice Bowl', calories: 450, protein: 42, carbs: 48, fat: 10 },
    dinner: { name: 'Baked Salmon with Broccoli', calories: 380, protein: 38, carbs: 15, fat: 18 },
    snack: { name: 'Apple with Almond Butter', calories: 200, protein: 5, carbs: 24, fat: 10 },
  },
  {
    day: 'Tuesday',
    breakfast: { name: 'Overnight Oats with Berries', calories: 320, protein: 12, carbs: 52, fat: 8 },
    lunch: { name: 'Grilled Chicken & Rice Bowl', calories: 450, protein: 42, carbs: 48, fat: 10 },
    dinner: { name: 'Turkey Meatballs with Pasta', calories: 420, protein: 36, carbs: 45, fat: 12 },
    snack: { name: 'Greek Yogurt with Honey', calories: 180, protein: 18, carbs: 24, fat: 3 },
  },
  {
    day: 'Wednesday',
    breakfast: { name: 'Egg Muffins with Veggies', calories: 280, protein: 22, carbs: 12, fat: 16 },
    lunch: { name: 'Grilled Chicken & Rice Bowl', calories: 450, protein: 42, carbs: 48, fat: 10 },
    dinner: { name: 'Baked Salmon with Broccoli', calories: 380, protein: 38, carbs: 15, fat: 18 },
    snack: { name: 'Carrots with Hummus', calories: 150, protein: 6, carbs: 18, fat: 7 },
  },
  {
    day: 'Thursday',
    breakfast: { name: 'Egg Muffins with Veggies', calories: 280, protein: 22, carbs: 12, fat: 16 },
    lunch: { name: 'Turkey Meatballs with Pasta', calories: 420, protein: 36, carbs: 45, fat: 12 },
    dinner: { name: 'Chicken Stir-Fry with Vegetables', calories: 400, protein: 40, carbs: 35, fat: 12 },
    snack: { name: 'Protein Shake', calories: 160, protein: 24, carbs: 12, fat: 3 },
  },
  {
    day: 'Friday',
    breakfast: { name: 'Overnight Oats with Berries', calories: 320, protein: 12, carbs: 52, fat: 8 },
    lunch: { name: 'Turkey Meatballs with Pasta', calories: 420, protein: 36, carbs: 45, fat: 12 },
    dinner: { name: 'Chicken Stir-Fry with Vegetables', calories: 400, protein: 40, carbs: 35, fat: 12 },
    snack: { name: 'Mixed Nuts', calories: 170, protein: 6, carbs: 8, fat: 15 },
  },
]

const shoppingList = [
  { category: 'Proteins', items: ['Chicken breasts (1.5 lbs)', 'Salmon fillets (12 oz)', 'Ground turkey (1 lb)', 'Eggs (1 dozen)', 'Greek yogurt (32 oz)', 'Protein powder'] },
  { category: 'Grains', items: ['Brown rice (2 cups uncooked)', 'Whole wheat pasta (12 oz)', 'Rolled oats (2 cups)'] },
  { category: 'Vegetables', items: ['Broccoli (2 heads)', 'Bell peppers (4)', 'Spinach (8 oz)', 'Carrots (1 lb)', 'Onions (2)', 'Mixed stir-fry vegetables (16 oz)'] },
  { category: 'Fruits', items: ['Blueberries (12 oz)', 'Bananas (5)', 'Apples (3)'] },
  { category: 'Pantry', items: ['Olive oil', 'Almond butter', 'Honey', 'Hummus', 'Soy sauce', 'Garlic', 'Italian seasoning', 'Salt & pepper'] },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What containers should I buy for meal prep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For beginners, start with 10-12 containers with 2-3 compartments. Glass containers (28-32 oz) are best for reheating and durability. BPA-free plastic containers are more affordable. Choose containers that are microwave-safe, dishwasher-safe, and have airtight lids.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I keep meal prepped food fresh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Store cooked food in airtight containers in the refrigerator within 2 hours of cooking. Keep proteins and cooked grains for 3-4 days, and fresher items like salads for 2-3 days. Freeze meals beyond 4 days. Let food cool before sealing to prevent condensation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I freeze meal prepped meals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most meal prepped foods freeze well for up to 3 months. Cooked proteins, grains, and soups freeze excellently. Avoid freezing lettuce, cucumbers, or dishes with high water content. Use freezer-safe containers and label with contents and date.',
      },
    },
  ],
}

export default function BeginnersGuidePage() {
  const totalDaily = weekPlan.map(day => ({
    day: day.day,
    calories: day.breakfast.calories + day.lunch.calories + day.dinner.calories + day.snack.calories,
    protein: day.breakfast.protein + day.lunch.protein + day.dinner.protein + day.snack.protein,
    carbs: day.breakfast.carbs + day.lunch.carbs + day.dinner.carbs + day.snack.carbs,
    fat: day.breakfast.fat + day.lunch.fat + day.dinner.fat + day.snack.fat,
  }))

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/meal-prep" className="text-blue-100 hover:text-white mb-4 inline-block">
              ← Back to Meal Prep Guides
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Beginner's Guide to Meal Prepping
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl">
              Learn everything you need to start meal prepping: containers, food safety, storage tips,
              and a simple 5-day meal plan to get you started.
            </p>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-Step Meal Prep Process</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Plan Your Meals</h3>
                  <p className="text-gray-700">
                    Choose 3-5 simple recipes that reheat well. Start with familiar dishes you already enjoy.
                    Use our meal plan below as a starting template. Aim for a balance of protein, carbs, and vegetables.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Make Your Shopping List</h3>
                  <p className="text-gray-700">
                    Write down all ingredients needed. Check your pantry first to avoid duplicates. Shop once for the
                    entire week. Stick to your list to avoid impulse purchases and save money.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Set Up Your Workspace</h3>
                  <p className="text-gray-700">
                    Clear your kitchen counters and have all containers ready. Set out cutting boards, knives, and cooking
                    utensils. Preheat your oven if needed. Play music or a podcast to make the time enjoyable.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Batch Cook Everything</h3>
                  <p className="text-gray-700">
                    Cook similar items together: all proteins at once, all grains together, all vegetables together.
                    Use your oven, stovetop, and slow cooker simultaneously to save time. Multitasking is key.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Portion and Store</h3>
                  <p className="text-gray-700">
                    Divide food into individual portions while still fresh. Use a food scale for accuracy if tracking calories.
                    Label containers with contents and date. Refrigerate meals for the first 3 days, freeze the rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Day Meal Plan */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">5-Day Beginner Meal Plan</h2>
            <div className="space-y-6">
              {weekPlan.map((day, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{day.day}</h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{totalDaily[index].calories} cal</div>
                      <div className="text-sm text-gray-600">
                        P: {totalDaily[index].protein}g | C: {totalDaily[index].carbs}g | F: {totalDaily[index].fat}g
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm font-semibold text-gray-500 mb-1">Breakfast</div>
                      <div className="font-medium text-gray-900">{day.breakfast.name}</div>
                      <div className="text-sm text-gray-600">{day.breakfast.calories} cal</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-500 mb-1">Lunch</div>
                      <div className="font-medium text-gray-900">{day.lunch.name}</div>
                      <div className="text-sm text-gray-600">{day.lunch.calories} cal</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-500 mb-1">Dinner</div>
                      <div className="font-medium text-gray-900">{day.dinner.name}</div>
                      <div className="text-sm text-gray-600">{day.dinner.calories} cal</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-500 mb-1">Snack</div>
                      <div className="font-medium text-gray-900">{day.snack.name}</div>
                      <div className="text-sm text-gray-600">{day.snack.calories} cal</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shopping List */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Shopping List</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {shoppingList.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2">□</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Container Guide */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Container Guide</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Glass Containers (Recommended)</h3>
                <p className="text-gray-700 mb-3">
                  Best for beginners. Microwave-safe, dishwasher-safe, and do not retain odors or stains.
                  More expensive upfront but last for years.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Best for:</strong> Everything, especially meals that need reheating
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">BPA-Free Plastic Containers</h3>
                <p className="text-gray-700 mb-3">
                  Budget-friendly and lightweight. Make sure they are BPA-free and microwave-safe.
                  Replace every 6-12 months as they can warp or stain.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Best for:</strong> Cold meals, snacks, and foods that do not need reheating
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Compartmentalized Containers</h3>
                <p className="text-gray-700 mb-3">
                  Containers with 2-3 sections keep foods separated. Great for meals with protein, grain, and vegetables.
                  Prevents soggy food and keeps flavors distinct.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Best for:</strong> Complete meals with multiple components
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Mason Jars</h3>
                <p className="text-gray-700 mb-3">
                  Perfect for overnight oats, salads, and smoothies. Layer ingredients to keep them fresh.
                  Wide-mouth jars are easier to eat from.
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Best for:</strong> Salads, overnight oats, parfaits
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Food Safety & Storage */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Food Safety & Storage Tips</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                <h3 className="text-lg font-semibold mb-2">Refrigerator Storage Times</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cooked proteins (chicken, beef, fish): 3-4 days</li>
                  <li>• Cooked grains (rice, pasta, quinoa): 4-5 days</li>
                  <li>• Cooked vegetables: 3-4 days</li>
                  <li>• Fresh salads: 2-3 days</li>
                  <li>• Egg-based dishes: 3-4 days</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                <h3 className="text-lg font-semibold mb-2">Freezer Storage Times</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cooked proteins: 2-3 months</li>
                  <li>• Soups and stews: 3 months</li>
                  <li>• Cooked grains: 3 months</li>
                  <li>• Cooked vegetables: 2-3 months</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                <h3 className="text-lg font-semibold mb-2">Safety Guidelines</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cool food to room temperature before sealing and storing</li>
                  <li>• Store food within 2 hours of cooking</li>
                  <li>• Keep refrigerator at 40°F (4°C) or below</li>
                  <li>• Reheat food to 165°F (74°C) before eating</li>
                  <li>• Never refreeze previously frozen food</li>
                  <li>• Label containers with date and contents</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Time-Saving Tips */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Time-Saving Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">🔪 Prep Work First</h3>
                <p className="text-gray-700">
                  Wash, chop, and measure all ingredients before you start cooking. This makes the cooking
                  process much smoother and faster.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">🍳 Multitask</h3>
                <p className="text-gray-700">
                  Use your oven, stovetop, and slow cooker at the same time. While proteins bake,
                  cook grains on the stovetop.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">📦 Buy Pre-Cut</h3>
                <p className="text-gray-700">
                  Pre-cut vegetables, pre-cooked grains, and rotisserie chicken save time. Slightly more
                  expensive but worth it when starting out.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">🔁 Repeat Recipes</h3>
                <p className="text-gray-700">
                  Use the same proteins and grains for multiple meals with different seasonings.
                  One batch of chicken becomes 3 different meals.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">📝 Follow a Timeline</h3>
                <p className="text-gray-700">
                  Start with items that take longest to cook (proteins, grains). While they cook,
                  prep vegetables and portion containers.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">🧊 Use Your Freezer</h3>
                <p className="text-gray-700">
                  Make double batches and freeze half. Build up a freezer stash for busy weeks
                  when you cannot meal prep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Needed */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Equipment Needed</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold">10-12 meal prep containers with lids</h3>
                  <p className="text-gray-600 text-sm">Glass or BPA-free plastic, various sizes</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold">Large baking sheets (2-3)</h3>
                  <p className="text-gray-600 text-sm">For batch roasting proteins and vegetables</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold">Large pots (2) and skillets (2)</h3>
                  <p className="text-gray-600 text-sm">For cooking grains and proteins simultaneously</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold">Good chef's knife and cutting board</h3>
                  <p className="text-gray-600 text-sm">Sharp knife makes prep work faster and safer</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">○</span>
                <div>
                  <h3 className="font-semibold">Food scale (optional but helpful)</h3>
                  <p className="text-gray-600 text-sm">For accurate portion sizes and calorie tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">○</span>
                <div>
                  <h3 className="font-semibold">Slow cooker or Instant Pot (optional)</h3>
                  <p className="text-gray-600 text-sm">Makes hands-off cooking easier</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What containers should I buy for meal prep?</h3>
                <p className="text-gray-700">
                  For beginners, start with 10-12 containers with 2-3 compartments. Glass containers (28-32 oz) are best
                  for reheating and durability. BPA-free plastic containers are more affordable. Choose containers that
                  are microwave-safe, dishwasher-safe, and have airtight lids.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How do I keep meal prepped food fresh?</h3>
                <p className="text-gray-700">
                  Store cooked food in airtight containers in the refrigerator within 2 hours of cooking. Keep proteins
                  and cooked grains for 3-4 days, and fresher items like salads for 2-3 days. Freeze meals beyond 4 days.
                  Let food cool before sealing to prevent condensation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can I freeze meal prepped meals?</h3>
                <p className="text-gray-700">
                  Yes, most meal prepped foods freeze well for up to 3 months. Cooked proteins, grains, and soups freeze
                  excellently. Avoid freezing lettuce, cucumbers, or dishes with high water content. Use freezer-safe
                  containers and label with contents and date.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Meal Prep Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="/meal-prep/sunday-meal-prep"
                className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">📅</div>
                <h3 className="font-semibold text-gray-900">Sunday Meal Prep</h3>
              </Link>
              <Link
                href="/meal-prep/budget-meal-prep"
                className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-semibold text-gray-900">Budget Meal Prep</h3>
              </Link>
              <Link
                href="/meal-prep/high-protein"
                className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">💪</div>
                <h3 className="font-semibold text-gray-900">High-Protein</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
