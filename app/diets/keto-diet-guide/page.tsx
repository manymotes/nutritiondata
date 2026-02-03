import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Keto Diet Guide - Complete 7-Day Meal Plan & Food List | CalorieData',
  description: 'Complete ketogenic diet guide with 7-day meal plan, 80+ keto foods, macros, recipes, and tips for entering ketosis and fat loss.',
  alternates: {
    canonical: `${SITE_URL}/diets/keto-diet-guide`,
  },
  openGraph: {
    title: 'Keto Diet Guide - Low-Carb High-Fat Eating for Fat Loss',
    description: 'Complete keto diet guide with meal plans and food lists.',
    url: `${SITE_URL}/diets/keto-diet-guide`,
  },
}

const weekPlan = [
  {
    day: 'Monday',
    breakfast: { name: 'Eggs & Bacon with Avocado', calories: 520, protein: 28, carbs: 8, fat: 42 },
    lunch: { name: 'Caesar Salad with Grilled Chicken & Parmesan', calories: 480, protein: 36, carbs: 6, fat: 36 },
    dinner: { name: 'Ribeye Steak with Butter & Roasted Broccoli', calories: 680, protein: 48, carbs: 10, fat: 52 },
    snack: { name: 'Cheese Cubes & Macadamia Nuts', calories: 320, protein: 12, carbs: 4, fat: 30 },
  },
  {
    day: 'Tuesday',
    breakfast: { name: 'Keto Coffee & Almond Flour Pancakes', calories: 440, protein: 18, carbs: 8, fat: 38 },
    lunch: { name: 'Tuna Salad Lettuce Wraps with Mayo', calories: 420, protein: 32, carbs: 4, fat: 32 },
    dinner: { name: 'Salmon with Lemon Butter & Asparagus', calories: 560, protein: 42, carbs: 8, fat: 42 },
    snack: { name: 'Pork Rinds with Guacamole', calories: 280, protein: 16, carbs: 6, fat: 22 },
  },
  {
    day: 'Wednesday',
    breakfast: { name: 'Cheese Omelet with Spinach & Mushrooms', calories: 460, protein: 32, carbs: 6, fat: 36 },
    lunch: { name: 'Cobb Salad with Blue Cheese Dressing', calories: 520, protein: 38, carbs: 8, fat: 40 },
    dinner: { name: 'Chicken Thighs with Creamy Garlic Sauce', calories: 620, protein: 44, carbs: 6, fat: 48 },
    snack: { name: 'Full-Fat Greek Yogurt with Walnuts', calories: 240, protein: 14, carbs: 8, fat: 18 },
  },
  {
    day: 'Thursday',
    breakfast: { name: 'Eggs & Bacon with Avocado', calories: 520, protein: 28, carbs: 8, fat: 42 },
    lunch: { name: 'Bunless Burger with Cheese & Mayo', calories: 540, protein: 36, carbs: 4, fat: 44 },
    dinner: { name: 'Pork Chops with Cauliflower Mash', calories: 580, protein: 42, carbs: 12, fat: 42 },
    snack: { name: 'Celery with Almond Butter', calories: 200, protein: 6, carbs: 8, fat: 16 },
  },
  {
    day: 'Friday',
    breakfast: { name: 'Keto Smoothie with MCT Oil & Berries', calories: 380, protein: 20, carbs: 10, fat: 32 },
    lunch: { name: 'Shrimp Avocado Salad with Olive Oil', calories: 460, protein: 34, carbs: 8, fat: 34 },
    dinner: { name: 'Lamb Chops with Roasted Brussels Sprouts', calories: 640, protein: 46, carbs: 10, fat: 48 },
    snack: { name: 'Pepperoni & Mozzarella', calories: 280, protein: 18, carbs: 2, fat: 22 },
  },
  {
    day: 'Saturday',
    breakfast: { name: 'Cheese Omelet with Spinach & Mushrooms', calories: 460, protein: 32, carbs: 6, fat: 36 },
    lunch: { name: 'Chicken Wings with Ranch Dressing', calories: 580, protein: 42, carbs: 4, fat: 44 },
    dinner: { name: 'Grilled Salmon with Garlic Butter & Zucchini', calories: 540, protein: 44, carbs: 8, fat: 40 },
    snack: { name: 'Keto Fat Bombs', calories: 220, protein: 4, carbs: 4, fat: 22 },
  },
  {
    day: 'Sunday',
    breakfast: { name: 'Bacon & Eggs with Sausage', calories: 580, protein: 32, carbs: 4, fat: 48 },
    lunch: { name: 'BLT Salad with Mayo Dressing', calories: 480, protein: 28, carbs: 8, fat: 40 },
    dinner: { name: 'Ribeye Steak with Compound Butter & Green Beans', calories: 700, protein: 50, carbs: 10, fat: 54 },
    snack: { name: 'Hard-Boiled Eggs with Mayo', calories: 240, protein: 14, carbs: 2, fat: 20 },
  },
]

const foodList = [
  { category: 'Proteins', items: ['Beef (ribeye, ground beef)', 'Pork (chops, bacon)', 'Chicken (thighs, wings)', 'Salmon', 'Tuna', 'Sardines', 'Shrimp', 'Eggs', 'Lamb', 'Duck'] },
  { category: 'Fats & Oils', items: ['Butter', 'Ghee', 'Coconut oil', 'MCT oil', 'Olive oil', 'Avocado oil', 'Heavy cream', 'Lard', 'Tallow'] },
  { category: 'Low-Carb Vegetables', items: ['Spinach', 'Kale', 'Lettuce', 'Arugula', 'Broccoli', 'Cauliflower', 'Zucchini', 'Asparagus', 'Brussels sprouts', 'Green beans', 'Cabbage', 'Cucumber', 'Celery', 'Bell peppers', 'Mushrooms'] },
  { category: 'Dairy', items: ['Cheddar cheese', 'Mozzarella', 'Parmesan', 'Cream cheese', 'Sour cream', 'Full-fat Greek yogurt', 'Heavy whipping cream', 'Blue cheese', 'Goat cheese'] },
  { category: 'Nuts & Seeds', items: ['Macadamia nuts', 'Pecans', 'Walnuts', 'Almonds', 'Brazil nuts', 'Chia seeds', 'Flax seeds', 'Pumpkin seeds', 'Sunflower seeds'] },
  { category: 'Fruits (limited)', items: ['Avocado', 'Blackberries', 'Raspberries', 'Strawberries', 'Coconut', 'Lemon', 'Lime'] },
  { category: 'Condiments', items: ['Mayonnaise', 'Mustard', 'Hot sauce', 'Sugar-free ketchup', 'Ranch dressing', 'Blue cheese dressing', 'Pesto', 'Sugar-free BBQ sauce'] },
  { category: 'Beverages', items: ['Water', 'Coffee', 'Tea', 'Bone broth', 'Electrolyte drinks (sugar-free)', 'Almond milk (unsweetened)', 'Coconut milk (unsweetened)'] },
]

const shoppingList = [
  { category: 'Proteins', items: ['Ribeye steaks (2 lbs)', 'Chicken thighs (3 lbs)', 'Ground beef (2 lbs)', 'Bacon (2 packs)', 'Salmon fillets (1.5 lbs)', 'Eggs (2 dozen)', 'Pork chops (1.5 lbs)'] },
  { category: 'Fats', items: ['Butter (2 sticks)', 'Heavy cream (1 pint)', 'Avocado oil', 'MCT oil', 'Mayonnaise'] },
  { category: 'Vegetables', items: ['Spinach (2 bags)', 'Broccoli (2 heads)', 'Cauliflower (2 heads)', 'Asparagus (2 bunches)', 'Zucchini (4)', 'Lettuce (2 heads)', 'Avocados (8)'] },
  { category: 'Dairy & Cheese', items: ['Cheddar cheese (1 lb)', 'Mozzarella (8 oz)', 'Cream cheese (8 oz)', 'Full-fat Greek yogurt (16 oz)', 'Parmesan (4 oz)'] },
  { category: 'Pantry', items: ['Macadamia nuts', 'Almonds', 'Almond butter', 'Ranch dressing', 'Sugar-free sweetener', 'Bone broth', 'Electrolyte powder'] },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the keto diet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ketogenic diet is a very low-carb, high-fat diet that puts your body into ketosis, a metabolic state where it burns fat for fuel instead of carbohydrates. Typically involves eating 70-75% fat, 20-25% protein, and 5-10% carbs (under 50g daily).',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to enter ketosis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It typically takes 2-7 days to enter ketosis when restricting carbs to under 50g per day. Factors include your metabolism, activity level, and previous diet. You can test ketone levels with urine strips, breath meters, or blood meters.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the side effects of keto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The keto flu is common in the first week, causing fatigue, headache, and irritability. Other side effects may include bad breath, constipation, and reduced athletic performance initially. Most symptoms resolve within 1-2 weeks as your body adapts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I lose weight on keto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, keto is effective for weight loss. Studies show people lose more weight on keto compared to low-fat diets in the short term. Weight loss occurs through reduced appetite, water loss, and increased fat burning in ketosis.',
      },
    },
  ],
}

export default function KetoDietGuidePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/diets" className="text-green-100 hover:text-white mb-4 inline-block">
              ← Back to Diet Guides
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Keto Diet Guide
            </h1>
            <p className="text-xl text-green-100 mb-6 max-w-3xl">
              Master the ketogenic diet with complete 7-day meal plan, 80+ keto-friendly foods, and expert tips for entering ketosis and maximizing fat loss.
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🥑</span>
                <span>70-75% Fat</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🥩</span>
                <span>20-25% Protein</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚫</span>
                <span>5-10% Carbs</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Keto Diet?</h2>
            <div className="prose max-w-4xl">
              <p className="text-lg text-gray-700 mb-4">
                The ketogenic diet is a very low-carbohydrate, high-fat diet that shifts your body into a metabolic state called ketosis. In ketosis, your body becomes incredibly efficient at burning fat for energy instead of glucose from carbohydrates.
              </p>
              <p className="text-lg text-gray-700">
                By drastically reducing carb intake to typically under 50 grams per day and increasing fat consumption to 70-75% of calories, your liver produces ketones from fat, which become your body's primary fuel source.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Principles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🥑</div>
                <h3 className="text-xl font-bold mb-2">High Fat</h3>
                <p className="text-gray-700">70-75% of calories from healthy fats like butter, oils, avocados, and fatty meats.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🥩</div>
                <h3 className="text-xl font-bold mb-2">Moderate Protein</h3>
                <p className="text-gray-700">20-25% of calories from protein. Too much can kick you out of ketosis.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🚫</div>
                <h3 className="text-xl font-bold mb-2">Very Low Carb</h3>
                <p className="text-gray-700">Under 50g carbs daily, often 20-30g net carbs to maintain ketosis.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">💧</div>
                <h3 className="text-xl font-bold mb-2">Stay Hydrated</h3>
                <p className="text-gray-700">Drink plenty of water and replenish electrolytes (sodium, potassium, magnesium).</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-xl font-bold mb-2">Track Macros</h3>
                <p className="text-gray-700">Monitor carb, fat, and protein intake to stay in ketosis.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🔬</div>
                <h3 className="text-xl font-bold mb-2">Test Ketones</h3>
                <p className="text-gray-700">Use strips or meters to verify you are in ketosis (0.5-3.0 mmol/L).</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">7-Day Keto Meal Plan</h2>
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
                        <div className="text-lg font-bold text-green-600">{dailyTotals.carbs}g carbs</div>
                        <div className="text-sm text-gray-600">{dailyTotals.calories} cal • P: {dailyTotals.protein}g • F: {dailyTotals.fat}g</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4">
                      {['breakfast', 'lunch', 'dinner', 'snack'].map(meal => {
                        const mealData = day[meal as keyof typeof day] as any
                        return (
                          <div key={meal}>
                            <div className="text-sm font-semibold text-gray-500 mb-1 capitalize">{meal}</div>
                            <div className="font-medium text-gray-900 text-sm">{mealData.name}</div>
                            <div className="text-xs text-green-600 font-semibold">{mealData.carbs}g carbs</div>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Keto Food List (80+ Foods)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodList.map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <span className="text-green-600 mr-2">✓</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Weekly Shopping List</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {shoppingList.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <span className="text-green-600 mr-2">□</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Macronutrient Ratios</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-green-600 mb-2">70-75%</div>
                <div className="text-xl font-semibold mb-2">Fat</div>
                <div className="text-sm text-gray-600">Primary energy source on keto</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-red-600 mb-2">20-25%</div>
                <div className="text-xl font-semibold mb-2">Protein</div>
                <div className="text-sm text-gray-600">Moderate intake to preserve muscle</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-orange-600 mb-2">5-10%</div>
                <div className="text-xl font-semibold mb-2">Carbs</div>
                <div className="text-sm text-gray-600">Under 50g daily (often 20-30g net)</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Health Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">⚖️ Rapid Weight Loss</h3>
                <p className="text-gray-700">Effective for quick fat loss through reduced appetite and increased fat burning.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">🩸 Blood Sugar Control</h3>
                <p className="text-gray-700">Dramatically lowers blood sugar and insulin levels, beneficial for type 2 diabetes.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">🧠 Mental Clarity</h3>
                <p className="text-gray-700">Many report improved focus and cognitive function from ketone energy.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">⚡ Sustained Energy</h3>
                <p className="text-gray-700">No blood sugar crashes, stable energy throughout the day.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">❤️ Heart Health Markers</h3>
                <p className="text-gray-700">Can improve HDL cholesterol and triglyceride levels.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">🍽️ Reduced Appetite</h3>
                <p className="text-gray-700">Ketones and fat naturally suppress hunger hormones.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Potential Drawbacks</h2>
            <div className="space-y-4 max-w-4xl">
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="font-bold text-yellow-900 mb-2">Keto Flu</h3>
                <p className="text-gray-700">First 1-2 weeks can cause fatigue, headaches, nausea, and irritability as your body adapts. Manage with electrolytes and hydration.</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="font-bold text-yellow-900 mb-2">Nutrient Deficiencies</h3>
                <p className="text-gray-700">Restricting fruits and whole grains may lead to fiber, vitamin, and mineral deficiencies. Supplementation may be needed.</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="font-bold text-yellow-900 mb-2">Difficult to Sustain</h3>
                <p className="text-gray-700">Very restrictive, challenging for social situations, and hard to maintain long-term.</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="font-bold text-yellow-900 mb-2">Reduced Athletic Performance</h3>
                <p className="text-gray-700">High-intensity exercise performance may suffer initially during adaptation (2-4 weeks).</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What is the keto diet?</h3>
                <p className="text-gray-700">The ketogenic diet is a very low-carb, high-fat diet that puts your body into ketosis, a metabolic state where it burns fat for fuel instead of carbohydrates. Typically involves eating 70-75% fat, 20-25% protein, and 5-10% carbs (under 50g daily).</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How long does it take to enter ketosis?</h3>
                <p className="text-gray-700">It typically takes 2-7 days to enter ketosis when restricting carbs to under 50g per day. Factors include your metabolism, activity level, and previous diet. You can test ketone levels with urine strips, breath meters, or blood meters.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What are the side effects of keto?</h3>
                <p className="text-gray-700">The keto flu is common in the first week, causing fatigue, headache, and irritability. Other side effects may include bad breath, constipation, and reduced athletic performance initially. Most symptoms resolve within 1-2 weeks as your body adapts.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can I lose weight on keto?</h3>
                <p className="text-gray-700">Yes, keto is effective for weight loss. Studies show people lose more weight on keto compared to low-fat diets in the short term. Weight loss occurs through reduced appetite, water loss, and increased fat burning in ketosis.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What can I eat on keto?</h3>
                <p className="text-gray-700">Eat high-fat foods like meat, fish, eggs, butter, oils, avocados, cheese, nuts, and low-carb vegetables. Avoid grains, sugar, fruit (except berries), beans, and starchy vegetables.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do I need to count calories on keto?</h3>
                <p className="text-gray-700">While keto naturally reduces appetite, calories still matter for weight loss. Track your intake initially to ensure you are in a calorie deficit. Many people find they eat less naturally on keto due to increased satiety.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Diet Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/diets/mediterranean-diet-guide" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">🫒</div>
                <h3 className="font-semibold text-gray-900">Mediterranean</h3>
              </Link>
              <Link href="/diets/paleo-diet-guide" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">🥩</div>
                <h3 className="font-semibold text-gray-900">Paleo Diet</h3>
              </Link>
              <Link href="/diets/low-carb-diet-guide" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">🥦</div>
                <h3 className="font-semibold text-gray-900">Low-Carb</h3>
              </Link>
              <Link href="/diets/compare-diets" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-semibold text-gray-900">Compare Diets</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
