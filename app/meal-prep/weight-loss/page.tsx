import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Weight Loss Meal Prep - Calorie-Controlled Plans 1,500 Calories | CalorieData',
  description: 'Weight loss meal prep with calorie-controlled meals around 1,500 calories per day. Includes filling recipes, portion control tips, and 6-day meal plan.',
  alternates: {
    canonical: `${SITE_URL}/meal-prep/weight-loss`,
  },
}

const weekPlan = [
  {
    day: 'Monday',
    breakfast: { name: 'Veggie Omelet with Toast', calories: 320, protein: 22, carbs: 28, fat: 14 },
    lunch: { name: 'Grilled Chicken Salad', calories: 380, protein: 38, carbs: 24, fat: 16 },
    dinner: { name: 'Baked Cod with Roasted Vegetables', calories: 340, protein: 36, carbs: 28, fat: 10 },
    snack: { name: 'Greek Yogurt with Berries', calories: 150, protein: 15, carbs: 18, fat: 2 },
  },
  {
    day: 'Tuesday',
    breakfast: { name: 'Oatmeal with Apple & Cinnamon', calories: 280, protein: 10, carbs: 48, fat: 6 },
    lunch: { name: 'Turkey & Avocado Wrap', calories: 420, protein: 32, carbs: 38, fat: 18 },
    dinner: { name: 'Chicken Stir-Fry with Cauliflower Rice', calories: 360, protein: 40, carbs: 22, fat: 12 },
    snack: { name: 'Carrots & Hummus', calories: 120, protein: 5, carbs: 16, fat: 5 },
  },
  {
    day: 'Wednesday',
    breakfast: { name: 'Veggie Omelet with Toast', calories: 320, protein: 22, carbs: 28, fat: 14 },
    lunch: { name: 'Tuna Salad Lettuce Wraps', calories: 340, protein: 36, carbs: 18, fat: 14 },
    dinner: { name: 'Turkey Meatballs with Zucchini Noodles', calories: 380, protein: 38, carbs: 24, fat: 16 },
    snack: { name: 'Apple with Almond Butter', calories: 180, protein: 4, carbs: 22, fat: 9 },
  },
  {
    day: 'Thursday',
    breakfast: { name: 'Oatmeal with Apple & Cinnamon', calories: 280, protein: 10, carbs: 48, fat: 6 },
    lunch: { name: 'Grilled Chicken Salad', calories: 380, protein: 38, carbs: 24, fat: 16 },
    dinner: { name: 'Baked Cod with Roasted Vegetables', calories: 340, protein: 36, carbs: 28, fat: 10 },
    snack: { name: 'Greek Yogurt with Berries', calories: 150, protein: 15, carbs: 18, fat: 2 },
  },
  {
    day: 'Friday',
    breakfast: { name: 'Veggie Omelet with Toast', calories: 320, protein: 22, carbs: 28, fat: 14 },
    lunch: { name: 'Turkey & Avocado Wrap', calories: 420, protein: 32, carbs: 38, fat: 18 },
    dinner: { name: 'Chicken Stir-Fry with Cauliflower Rice', calories: 360, protein: 40, carbs: 22, fat: 12 },
    snack: { name: 'Carrots & Hummus', calories: 120, protein: 5, carbs: 16, fat: 5 },
  },
  {
    day: 'Saturday',
    breakfast: { name: 'Oatmeal with Apple & Cinnamon', calories: 280, protein: 10, carbs: 48, fat: 6 },
    lunch: { name: 'Tuna Salad Lettuce Wraps', calories: 340, protein: 36, carbs: 18, fat: 14 },
    dinner: { name: 'Turkey Meatballs with Zucchini Noodles', calories: 380, protein: 38, carbs: 24, fat: 16 },
    snack: { name: 'Apple with Almond Butter', calories: 180, protein: 4, carbs: 22, fat: 9 },
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many calories should I eat for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most people need a 500 calorie deficit for 1 lb per week weight loss. This plan provides 1,190-1,220 calories per day, suitable for smaller individuals or those with sedentary lifestyles. Adjust portions based on your needs.',
      },
    },
  ],
}

export default function WeightLossMealPrepPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/meal-prep" className="text-indigo-100 hover:text-white mb-4 inline-block">← Back to Meal Prep Guides</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Weight Loss Meal Prep</h1>
            <p className="text-xl text-indigo-100 mb-6 max-w-3xl">Calorie-controlled meal plan designed for sustainable weight loss. High protein, filling meals around 1,200 calories per day with portion control tips.</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">6-Day Weight Loss Meal Plan</h2>
            <div className="space-y-6">
              {weekPlan.map((day, index) => {
                const total = day.breakfast.calories + day.lunch.calories + day.dinner.calories + day.snack.calories
                return (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{day.day}</h3>
                      <div className="text-lg font-bold text-indigo-600">{total} calories</div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4">
                      {[day.breakfast, day.lunch, day.dinner, day.snack].map((meal, idx) => (
                        <div key={idx}>
                          <div className="text-sm font-semibold text-gray-500 mb-1">{['Breakfast', 'Lunch', 'Dinner', 'Snack'][idx]}</div>
                          <div className="font-medium text-gray-900">{meal.name}</div>
                          <div className="text-sm text-gray-600">{meal.calories} cal</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Weight Loss Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">High-Volume Foods</h3>
                <p className="text-gray-700">Fill up on vegetables, which are low in calories but high in volume and fiber.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Protein Priority</h3>
                <p className="text-gray-700">Each meal has 30g+ protein to preserve muscle and increase satiety.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Portion Control</h3>
                <p className="text-gray-700">Use a food scale to ensure accurate portions and calorie counts.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Meal Timing</h3>
                <p className="text-gray-700">Space meals 3-4 hours apart to maintain stable blood sugar and energy.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Meal Prep Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/meal-prep/high-protein" className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">💪</div>
                <h3 className="font-semibold text-gray-900">High-Protein</h3>
              </Link>
              <Link href="/meal-prep/budget-meal-prep" className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-semibold text-gray-900">Budget</h3>
              </Link>
              <Link href="/meal-prep/family-meal-prep" className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="font-semibold text-gray-900">Family</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
