import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Family Meal Prep - Kid-Friendly Recipes for 4-6 Servings | CalorieData',
  description: 'Family meal prep guide with kid-friendly recipes serving 4-6 people. Includes batch cooking tips, family favorites, and 5-day meal plan.',
  alternates: {
    canonical: `${SITE_URL}/meal-prep/family-meal-prep`,
  },
}

const weekPlan = [
  {
    day: 'Monday',
    breakfast: { name: 'Pancakes with Fresh Fruit', calories: 380, protein: 12, carbs: 62, fat: 10, servings: 6 },
    lunch: { name: 'Mac & Cheese with Hidden Veggies', calories: 420, protein: 18, carbs: 52, fat: 16, servings: 6 },
    dinner: { name: 'Baked Chicken Tenders with Sweet Potato Fries', calories: 480, protein: 36, carbs: 48, fat: 16, servings: 6 },
  },
  {
    day: 'Tuesday',
    breakfast: { name: 'Scrambled Eggs with Toast & Fruit', calories: 340, protein: 20, carbs: 36, fat: 14, servings: 6 },
    lunch: { name: 'Turkey & Cheese Quesadillas', calories: 440, protein: 24, carbs: 42, fat: 20, servings: 6 },
    dinner: { name: 'Spaghetti with Turkey Meatballs', calories: 520, protein: 32, carbs: 62, fat: 16, servings: 6 },
  },
  {
    day: 'Wednesday',
    breakfast: { name: 'Oatmeal with Banana & Peanut Butter', calories: 350, protein: 12, carbs: 54, fat: 12, servings: 6 },
    lunch: { name: 'Homemade Pizza with Veggie Toppings', calories: 460, protein: 22, carbs: 52, fat: 18, servings: 6 },
    dinner: { name: 'Taco Tuesday: Ground Beef Tacos', calories: 480, protein: 28, carbs: 44, fat: 22, servings: 6 },
  },
  {
    day: 'Thursday',
    breakfast: { name: 'Pancakes with Fresh Fruit', calories: 380, protein: 12, carbs: 62, fat: 10, servings: 6 },
    lunch: { name: 'Mac & Cheese with Hidden Veggies', calories: 420, protein: 18, carbs: 52, fat: 16, servings: 6 },
    dinner: { name: 'Baked Salmon Nuggets with Roasted Potatoes', calories: 440, protein: 34, carbs: 42, fat: 16, servings: 6 },
  },
  {
    day: 'Friday',
    breakfast: { name: 'Scrambled Eggs with Toast & Fruit', calories: 340, protein: 20, carbs: 36, fat: 14, servings: 6 },
    lunch: { name: 'Turkey & Cheese Quesadillas', calories: 440, protein: 24, carbs: 42, fat: 20, servings: 6 },
    dinner: { name: 'Chicken Stir-Fry with Rice', calories: 460, protein: 38, carbs: 52, fat: 12, servings: 6 },
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I meal prep for a family?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Family meal prep focuses on batch cooking kid-friendly meals that serve 4-6 people. Choose recipes everyone likes, involve kids in prep, and make large batches that freeze well. This plan provides 5 days of family meals.',
      },
    },
  ],
}

export default function FamilyMealPrepPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/meal-prep" className="text-orange-100 hover:text-white mb-4 inline-block">← Back to Meal Prep Guides</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Family Meal Prep</h1>
            <p className="text-xl text-orange-100 mb-6 max-w-3xl">Kid-friendly meal prep recipes serving 4-6 people. Batch cook family favorites, sneak in vegetables, and save time during busy weeknights.</p>
            <div className="flex gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
                <span>Serves 4-6</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍽️</span>
                <span>15 family meals</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">5-Day Family Meal Plan</h2>
            <div className="space-y-6">
              {weekPlan.map((day, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{day.day}</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[day.breakfast, day.lunch, day.dinner].map((meal, idx) => (
                      <div key={idx} className="bg-orange-50 rounded-lg p-4">
                        <div className="text-sm font-semibold text-gray-500 mb-1">{['Breakfast', 'Lunch', 'Dinner'][idx]}</div>
                        <div className="font-medium text-gray-900 mb-2">{meal.name}</div>
                        <div className="text-sm text-gray-600">{meal.calories} cal per serving</div>
                        <div className="text-sm text-orange-600 font-semibold">Makes {meal.servings} servings</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Family Meal Prep Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Hide the Vegetables</h3>
                <p className="text-gray-700 text-sm">Blend veggies into sauces, mix into meatballs, or add to mac & cheese for nutrition kids will eat.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Make It Fun</h3>
                <p className="text-gray-700 text-sm">Use cookie cutters for sandwiches, arrange food in fun shapes, let kids help with prep.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Double Batch Everything</h3>
                <p className="text-gray-700 text-sm">Make twice as much and freeze half. Build up a freezer stash of family favorites.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">One-Pan Meals</h3>
                <p className="text-gray-700 text-sm">Sheet pan dinners and casseroles make cooking and cleanup easier with kids around.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Shopping List</h2>
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Proteins</h3>
              <p className="text-gray-700">Chicken breasts (4 lbs), Ground beef (2 lbs), Ground turkey (2 lbs), Salmon (2 lbs), Eggs (2 dozen), Cheese (2 lbs)</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 mt-4">
              <h3 className="font-semibold text-lg mb-3">Grains & Carbs</h3>
              <p className="text-gray-700">Pasta (3 boxes), Rice (2 lbs), Pancake mix, Bread, Tortillas, Pizza dough, Sweet potatoes, Regular potatoes</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 mt-4">
              <h3 className="font-semibold text-lg mb-3">Fruits & Vegetables</h3>
              <p className="text-gray-700">Bananas, Apples, Berries, Broccoli, Carrots, Bell peppers, Onions, Tomatoes, Frozen mixed vegetables</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Storage Tips</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Individual Portions</h3>
                <p className="text-gray-700">Portion into individual containers for easy grab-and-go school lunches.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Family-Size Containers</h3>
                <p className="text-gray-700">Store dinners in large containers to reheat all at once for family meals.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Freeze Extras</h3>
                <p className="text-gray-700">Most recipes freeze well for 2-3 months. Perfect for busy weeks or unexpected events.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Meal Prep Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/meal-prep/beginners-guide" className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-semibold text-gray-900">Beginner's Guide</h3>
              </Link>
              <Link href="/meal-prep/budget-meal-prep" className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-semibold text-gray-900">Budget</h3>
              </Link>
              <Link href="/meal-prep/sunday-meal-prep" className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">📅</div>
                <h3 className="font-semibold text-gray-900">Sunday Meal Prep</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
