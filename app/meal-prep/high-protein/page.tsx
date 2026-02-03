import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'High-Protein Meal Prep - 150g+ Protein Daily for Muscle Building | CalorieData',
  description: 'High-protein meal prep plan with 150g+ protein per day. Optimized for muscle building with lean recipes, macro tracking, and 6-day meal plan.',
  alternates: {
    canonical: `${SITE_URL}/meal-prep/high-protein`,
  },
  openGraph: {
    title: 'High-Protein Meal Prep - Build Muscle with 150g+ Protein Daily',
    description: 'Complete high-protein meal prep guide for muscle building.',
    url: `${SITE_URL}/meal-prep/high-protein`,
  },
}

const weekPlan = [
  {
    day: 'Monday',
    breakfast: { name: 'Protein Pancakes with Greek Yogurt', calories: 480, protein: 42, carbs: 48, fat: 14 },
    lunch: { name: 'Grilled Chicken & Quinoa Bowl', calories: 520, protein: 52, carbs: 45, fat: 12 },
    dinner: { name: 'Baked Salmon with Sweet Potato', calories: 540, protein: 46, carbs: 42, fat: 20 },
    snack: { name: 'Protein Shake with Banana', calories: 280, protein: 32, carbs: 28, fat: 5 },
  },
  {
    day: 'Tuesday',
    breakfast: { name: 'Egg White Scramble with Turkey Bacon', calories: 360, protein: 40, carbs: 18, fat: 14 },
    lunch: { name: 'Turkey Meatballs with Pasta', calories: 560, protein: 48, carbs: 54, fat: 16 },
    dinner: { name: 'Sirloin Steak with Asparagus', calories: 520, protein: 52, carbs: 22, fat: 24 },
    snack: { name: 'Cottage Cheese with Berries', calories: 240, protein: 28, carbs: 24, fat: 4 },
  },
  {
    day: 'Wednesday',
    breakfast: { name: 'Protein Pancakes with Greek Yogurt', calories: 480, protein: 42, carbs: 48, fat: 14 },
    lunch: { name: 'Tuna Salad with Chickpeas', calories: 480, protein: 48, carbs: 38, fat: 12 },
    dinner: { name: 'Chicken Breast with Brown Rice & Broccoli', calories: 520, protein: 54, carbs: 48, fat: 10 },
    snack: { name: 'Hard-Boiled Eggs (3) with Almonds', calories: 300, protein: 24, carbs: 8, fat: 20 },
  },
  {
    day: 'Thursday',
    breakfast: { name: 'Egg White Scramble with Turkey Bacon', calories: 360, protein: 40, carbs: 18, fat: 14 },
    lunch: { name: 'Grilled Chicken & Quinoa Bowl', calories: 520, protein: 52, carbs: 45, fat: 12 },
    dinner: { name: 'Baked Salmon with Sweet Potato', calories: 540, protein: 46, carbs: 42, fat: 20 },
    snack: { name: 'Protein Shake with Banana', calories: 280, protein: 32, carbs: 28, fat: 5 },
  },
  {
    day: 'Friday',
    breakfast: { name: 'Protein Oats with Peanut Butter', calories: 520, protein: 38, carbs: 58, fat: 16 },
    lunch: { name: 'Turkey Meatballs with Pasta', calories: 560, protein: 48, carbs: 54, fat: 16 },
    dinner: { name: 'Sirloin Steak with Asparagus', calories: 520, protein: 52, carbs: 22, fat: 24 },
    snack: { name: 'Cottage Cheese with Berries', calories: 240, protein: 28, carbs: 24, fat: 4 },
  },
  {
    day: 'Saturday',
    breakfast: { name: 'Protein Oats with Peanut Butter', calories: 520, protein: 38, carbs: 58, fat: 16 },
    lunch: { name: 'Tuna Salad with Chickpeas', calories: 480, protein: 48, carbs: 38, fat: 12 },
    dinner: { name: 'Chicken Breast with Brown Rice & Broccoli', calories: 520, protein: 54, carbs: 48, fat: 10 },
    snack: { name: 'Hard-Boiled Eggs (3) with Almonds', calories: 300, protein: 24, carbs: 8, fat: 20 },
  },
]

const shoppingList = [
  { category: 'Proteins', items: ['Chicken breasts (3 lbs)', 'Salmon fillets (1.5 lbs)', 'Sirloin steak (1.5 lbs)', 'Ground turkey (2 lbs)', 'Eggs (2 dozen)', 'Egg whites (64 oz carton)', 'Canned tuna (4 cans)', 'Greek yogurt (32 oz)', 'Cottage cheese (32 oz)', 'Protein powder (2 lbs)', 'Turkey bacon (1 pack)'] },
  { category: 'Grains', items: ['Quinoa (2 cups uncooked)', 'Brown rice (2 cups uncooked)', 'Rolled oats (16 oz)', 'Whole wheat pasta (1 box)'] },
  { category: 'Vegetables', items: ['Broccoli (3 heads)', 'Asparagus (2 bunches)', 'Spinach (16 oz)', 'Sweet potatoes (4 large)', 'Mixed salad greens (2 bags)'] },
  { category: 'Fruits', items: ['Bananas (6)', 'Blueberries (12 oz)', 'Strawberries (12 oz)'] },
  { category: 'Other', items: ['Chickpeas (2 cans)', 'Almonds (8 oz)', 'Peanut butter', 'Olive oil', 'Seasonings'] },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much protein do I need for muscle building?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For muscle building, aim for 0.8-1g of protein per pound of body weight. A 180lb person needs 144-180g protein daily. This meal plan provides 150-170g protein per day, perfect for most muscle building goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best high-protein foods for meal prep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best high-protein foods are chicken breast (31g per 4oz), salmon (25g per 4oz), eggs (6g each), Greek yogurt (17g per cup), cottage cheese (28g per cup), and lean beef. These protein sources meal prep well and stay fresh for days.',
      },
    },
  ],
}

export default function HighProteinMealPrepPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/meal-prep" className="text-red-100 hover:text-white mb-4 inline-block">
              ← Back to Meal Prep Guides
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              High-Protein Meal Prep
            </h1>
            <p className="text-xl text-red-100 mb-6 max-w-3xl">
              Build muscle with 150g+ protein daily. Complete 6-day meal prep plan optimized for muscle building
              with lean proteins, macro tracking, and detailed prep instructions.
            </p>
            <div className="flex gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💪</span>
                <span>150-170g protein/day</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <span>1,800-1,900 cal/day</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">6-Day High-Protein Meal Plan</h2>
            <div className="space-y-6">
              {weekPlan.map((day, index) => {
                const dailyTotals = {
                  calories: day.breakfast.calories + day.lunch.calories + day.dinner.calories + day.snack.calories,
                  protein: day.breakfast.protein + day.lunch.protein + day.dinner.protein + day.snack.protein,
                  carbs: day.breakfast.carbs + day.lunch.carbs + day.dinner.carbs + day.snack.carbs,
                  fat: day.breakfast.fat + day.lunch.fat + day.dinner.fat + day.snack.fat,
                }
                return (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{day.day}</h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-red-600">{dailyTotals.protein}g protein</div>
                        <div className="text-sm text-gray-600">{dailyTotals.calories} cal • C: {dailyTotals.carbs}g • F: {dailyTotals.fat}g</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4">
                      {['breakfast', 'lunch', 'dinner', 'snack'].map(meal => {
                        const mealData = day[meal as keyof typeof day] as any
                        return (
                          <div key={meal}>
                            <div className="text-sm font-semibold text-gray-500 mb-1 capitalize">{meal}</div>
                            <div className="font-medium text-gray-900">{mealData.name}</div>
                            <div className="text-sm text-red-600 font-semibold">{mealData.protein}g protein</div>
                            <div className="text-xs text-gray-600">{mealData.calories} cal</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Shopping List</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {shoppingList.map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <span className="text-red-600 mr-2">□</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Prep Instructions & Timeline</h2>
            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-4">
                <div className="font-bold">Hour 1: Proteins</div>
                <p className="text-gray-700 text-sm mt-1">Season and bake all chicken, salmon, and steak. Cook turkey meatballs. Hard-boil 12 eggs.</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="font-bold">Hour 2: Grains & Vegetables</div>
                <p className="text-gray-700 text-sm mt-1">Cook quinoa, rice, and pasta. Roast sweet potatoes. Steam broccoli and asparagus.</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="font-bold">Hour 3: Portioning</div>
                <p className="text-gray-700 text-sm mt-1">Portion all meals into containers. Prepare overnight oats. Mix protein shakes. Label everything.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Storage Tips & Shelf Life</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Refrigerator (Days 1-3)</h3>
                <p className="text-gray-700">Store first 3 days of meals in refrigerator. Chicken and fish stay fresh 3-4 days.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Freezer (Days 4-6)</h3>
                <p className="text-gray-700">Freeze remaining meals immediately. Thaw overnight in fridge before consuming.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How much protein do I need for muscle building?</h3>
                <p className="text-gray-700">For muscle building, aim for 0.8-1g of protein per pound of body weight. A 180lb person needs 144-180g protein daily. This meal plan provides 150-170g protein per day.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What are the best high-protein foods for meal prep?</h3>
                <p className="text-gray-700">The best are chicken breast (31g per 4oz), salmon (25g per 4oz), eggs (6g each), Greek yogurt (17g per cup), and cottage cheese (28g per cup).</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Meal Prep Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/meal-prep/weight-loss" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">⚖️</div>
                <h3 className="font-semibold text-gray-900">Weight Loss</h3>
              </Link>
              <Link href="/meal-prep/budget-meal-prep" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-semibold text-gray-900">Budget</h3>
              </Link>
              <Link href="/meal-prep/sunday-meal-prep" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
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
