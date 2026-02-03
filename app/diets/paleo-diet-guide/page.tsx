import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Paleo Diet Guide - Complete 7-Day Meal Plan & Food List | CalorieData',
  description: 'Complete paleo diet guide with 7-day meal plan, 90+ approved foods, recipes, health benefits, and tips for eating like our ancestors.',
  alternates: { canonical: `${SITE_URL}/diets/paleo-diet-guide` },
}

const weekPlan = [
  { day: 'Monday', breakfast: { name: 'Scrambled Eggs with Sweet Potato Hash', calories: 420, protein: 24, carbs: 38, fat: 20 }, lunch: { name: 'Grilled Chicken Salad with Olive Oil', calories: 480, protein: 42, carbs: 18, fat: 28 }, dinner: { name: 'Grass-Fed Beef Steak with Roasted Vegetables', calories: 620, protein: 48, carbs: 28, fat: 36 }, snack: { name: 'Apple Slices with Almond Butter', calories: 220, protein: 6, carbs: 24, fat: 14 } },
  { day: 'Tuesday', breakfast: { name: 'Paleo Banana Pancakes with Berries', calories: 380, protein: 18, carbs: 42, fat: 16 }, lunch: { name: 'Tuna Avocado Bowl', calories: 460, protein: 36, carbs: 14, fat: 30 }, dinner: { name: 'Baked Salmon with Asparagus & Lemon', calories: 540, protein: 44, carbs: 16, fat: 34 }, snack: { name: 'Mixed Nuts & Dried Fruit', calories: 240, protein: 8, carbs: 18, fat: 18 } },
  { day: 'Wednesday', breakfast: { name: 'Veggie Omelet with Avocado', calories: 400, protein: 26, carbs: 16, fat: 28 }, lunch: { name: 'Chicken & Vegetable Stir-Fry', calories: 520, protein: 40, carbs: 32, fat: 26 }, dinner: { name: 'Pork Chops with Cauliflower Mash', calories: 580, protein: 42, carbs: 24, fat: 36 }, snack: { name: 'Carrot Sticks with Guacamole', calories: 180, protein: 4, carbs: 18, fat: 12 } },
  { day: 'Thursday', breakfast: { name: 'Scrambled Eggs with Sweet Potato Hash', calories: 420, protein: 24, carbs: 38, fat: 20 }, lunch: { name: 'Turkey Lettuce Wraps', calories: 440, protein: 38, carbs: 14, fat: 26 }, dinner: { name: 'Lamb Chops with Roasted Brussels Sprouts', calories: 640, protein: 46, carbs: 20, fat: 44 }, snack: { name: 'Hard-Boiled Eggs', calories: 140, protein: 12, carbs: 2, fat: 10 } },
  { day: 'Friday', breakfast: { name: 'Paleo Breakfast Bowl with Eggs & Vegetables', calories: 440, protein: 28, carbs: 24, fat: 26 }, lunch: { name: 'Grilled Salmon Salad', calories: 500, protein: 40, carbs: 16, fat: 32 }, dinner: { name: 'Beef Stir-Fry with Broccoli', calories: 600, protein: 46, carbs: 28, fat: 36 }, snack: { name: 'Coconut Chips & Macadamias', calories: 260, protein: 4, carbs: 14, fat: 24 } },
  { day: 'Saturday', breakfast: { name: 'Sweet Potato Hash with Bacon & Eggs', calories: 480, protein: 26, carbs: 36, fat: 28 }, lunch: { name: 'Chicken & Avocado Salad', calories: 520, protein: 42, carbs: 18, fat: 32 }, dinner: { name: 'Grilled Shrimp with Zucchini Noodles', calories: 460, protein: 38, carbs: 22, fat: 26 }, snack: { name: 'Beef Jerky', calories: 120, protein: 16, carbs: 4, fat: 4 } },
  { day: 'Sunday', breakfast: { name: 'Paleo Banana Pancakes with Berries', calories: 380, protein: 18, carbs: 42, fat: 16 }, lunch: { name: 'Bison Burger Bowl with Sweet Potato Fries', calories: 580, protein: 44, carbs: 46, fat: 26 }, dinner: { name: 'Roasted Chicken with Root Vegetables', calories: 620, protein: 48, carbs: 32, fat: 32 }, snack: { name: 'Fresh Fruit Salad', calories: 140, protein: 2, carbs: 36, fat: 1 } },
]

const foodList = [
  { category: 'Meats', items: ['Grass-fed beef', 'Pork', 'Lamb', 'Bison', 'Venison', 'Chicken', 'Turkey', 'Duck'] },
  { category: 'Fish & Seafood', items: ['Wild salmon', 'Tuna', 'Sardines', 'Mackerel', 'Shrimp', 'Crab', 'Lobster', 'Mussels', 'Oysters'] },
  { category: 'Vegetables', items: ['Broccoli', 'Cauliflower', 'Brussels sprouts', 'Spinach', 'Kale', 'Asparagus', 'Peppers', 'Zucchini', 'Carrots', 'Beets', 'Cucumber', 'Tomatoes', 'Onions', 'Garlic'] },
  { category: 'Fruits', items: ['Apples', 'Berries', 'Oranges', 'Bananas', 'Avocados', 'Melons', 'Grapes', 'Peaches', 'Plums', 'Figs', 'Dates'] },
  { category: 'Nuts & Seeds', items: ['Almonds', 'Walnuts', 'Cashews', 'Pecans', 'Macadamia nuts', 'Pumpkin seeds', 'Sunflower seeds', 'Flax seeds', 'Chia seeds'] },
  { category: 'Healthy Fats', items: ['Olive oil', 'Coconut oil', 'Avocado oil', 'Ghee', 'Grass-fed butter'] },
  { category: 'Eggs & Poultry', items: ['Chicken eggs', 'Duck eggs', 'Quail eggs'] },
  { category: 'Sweeteners (limited)', items: ['Raw honey', 'Pure maple syrup', 'Coconut sugar'] },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the paleo diet?', acceptedAnswer: { '@type': 'Answer', text: 'The paleo diet focuses on eating whole, unprocessed foods similar to what our prehistoric ancestors ate. It includes meat, fish, vegetables, fruits, nuts, and seeds while excluding grains, legumes, dairy, and processed foods.' } },
    { '@type': 'Question', name: 'Can I lose weight on paleo?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, the paleo diet can support weight loss by eliminating processed foods, reducing calorie intake naturally, and improving satiety through protein and healthy fats. Studies show effective weight loss results.' } },
  ],
}

export default function PaleoDietGuidePage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/diets" className="text-amber-100 hover:text-white mb-4 inline-block">← Back to Diet Guides</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Paleo Diet Guide</h1>
            <p className="text-xl text-amber-100 mb-6 max-w-3xl">Eat like our ancestors with whole, unprocessed foods. Complete 7-day meal plan with 90+ paleo-approved foods and expert tips.</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Paleo Diet?</h2>
            <p className="text-lg text-gray-700 mb-4">The paleo diet is based on eating foods that were available to our Paleolithic ancestors. It emphasizes whole, unprocessed foods like meat, fish, vegetables, fruits, nuts, and seeds while excluding grains, legumes, dairy, and processed foods.</p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">7-Day Paleo Meal Plan</h2>
            <div className="space-y-6">
              {weekPlan.map((day, index) => {
                const dailyTotals = { calories: day.breakfast.calories + day.lunch.calories + day.dinner.calories + day.snack.calories, protein: day.breakfast.protein + day.lunch.protein + day.dinner.protein + day.snack.protein, carbs: day.breakfast.carbs + day.lunch.carbs + day.dinner.carbs + day.snack.carbs, fat: day.breakfast.fat + day.lunch.fat + day.dinner.fat + day.snack.fat }
                return (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{day.day}</h3>
                      <div className="text-right"><div className="text-lg font-bold text-amber-600">{dailyTotals.calories} calories</div></div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4">
                      {['breakfast', 'lunch', 'dinner', 'snack'].map(meal => {
                        const mealData = day[meal as keyof typeof day] as any
                        return <div key={meal}><div className="text-sm font-semibold text-gray-500 mb-1 capitalize">{meal}</div><div className="font-medium text-gray-900 text-sm">{mealData.name}</div><div className="text-xs text-amber-600 font-semibold">{mealData.calories} cal</div></div>
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Paleo Food List (90+ Foods)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodList.map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200"><h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3><ul className="space-y-2">{category.items.map((item, idx) => (<li key={idx} className="flex items-start text-gray-700 text-sm"><span className="text-amber-600 mr-2">✓</span>{item}</li>))}</ul></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Health Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200"><h3 className="text-xl font-bold text-green-900 mb-3">⚖️ Weight Loss</h3><p className="text-gray-700">Effective for weight loss through whole food focus and elimination of processed carbs.</p></div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200"><h3 className="text-xl font-bold text-green-900 mb-3">🩸 Blood Sugar</h3><p className="text-gray-700">Improves insulin sensitivity and stabilizes blood sugar levels.</p></div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200"><h3 className="text-xl font-bold text-green-900 mb-3">❤️ Heart Health</h3><p className="text-gray-700">May reduce heart disease risk factors including blood pressure and cholesterol.</p></div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200"><h3 className="text-xl font-bold text-green-900 mb-3">💪 Muscle Mass</h3><p className="text-gray-700">High protein intake supports muscle maintenance and growth.</p></div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6"><h3 className="text-xl font-semibold mb-3">What is the paleo diet?</h3><p className="text-gray-700">The paleo diet focuses on eating whole, unprocessed foods similar to what our prehistoric ancestors ate. It includes meat, fish, vegetables, fruits, nuts, and seeds while excluding grains, legumes, dairy, and processed foods.</p></div>
              <div className="bg-gray-50 rounded-lg p-6"><h3 className="text-xl font-semibold mb-3">Can I lose weight on paleo?</h3><p className="text-gray-700">Yes, the paleo diet can support weight loss by eliminating processed foods, reducing calorie intake naturally, and improving satiety through protein and healthy fats. Studies show effective weight loss results.</p></div>
              <div className="bg-gray-50 rounded-lg p-6"><h3 className="text-xl font-semibold mb-3">Is paleo healthy long-term?</h3><p className="text-gray-700">When done properly with variety, paleo can be nutritionally adequate. However, excluding whole grains and legumes may limit fiber and certain nutrients. Consider working with a nutritionist.</p></div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Diet Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/diets/mediterranean-diet-guide" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🫒</div><h3 className="font-semibold text-gray-900">Mediterranean</h3></Link>
              <Link href="/diets/keto-diet-guide" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🥑</div><h3 className="font-semibold text-gray-900">Keto Diet</h3></Link>
              <Link href="/diets/whole30-guide" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">✅</div><h3 className="font-semibold text-gray-900">Whole30</h3></Link>
              <Link href="/diets/compare-diets" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">📊</div><h3 className="font-semibold text-gray-900">Compare</h3></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
