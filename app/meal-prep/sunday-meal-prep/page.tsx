import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sunday Meal Prep Plan - Complete 5-Day Batch Cooking Guide | CalorieData',
  description: 'Complete Sunday meal prep plan with timeline, shopping list, and 5 days of meals. Batch cook everything in 3 hours for the entire week.',
  alternates: {
    canonical: `${SITE_URL}/meal-prep/sunday-meal-prep`,
  },
  openGraph: {
    title: 'Sunday Meal Prep Plan - Batch Cook Your Week in 3 Hours',
    description: 'Complete Sunday meal prep with timeline and 5 days of healthy meals.',
    url: `${SITE_URL}/meal-prep/sunday-meal-prep`,
  },
}

const weekPlan = [
  {
    day: 'Monday',
    breakfast: { name: 'Egg Muffins with Spinach & Cheese', calories: 280, protein: 22, carbs: 12, fat: 16 },
    lunch: { name: 'Teriyaki Chicken with Brown Rice', calories: 480, protein: 45, carbs: 52, fat: 10 },
    dinner: { name: 'Baked Salmon with Roasted Vegetables', calories: 420, protein: 40, carbs: 22, fat: 20 },
    snack: { name: 'Greek Yogurt with Almonds', calories: 220, protein: 18, carbs: 16, fat: 10 },
  },
  {
    day: 'Tuesday',
    breakfast: { name: 'Egg Muffins with Spinach & Cheese', calories: 280, protein: 22, carbs: 12, fat: 16 },
    lunch: { name: 'Turkey Chili with Quinoa', calories: 450, protein: 42, carbs: 45, fat: 12 },
    dinner: { name: 'Teriyaki Chicken with Stir-Fry Veggies', calories: 440, protein: 42, carbs: 35, fat: 14 },
    snack: { name: 'Apple Slices with Peanut Butter', calories: 200, protein: 7, carbs: 24, fat: 10 },
  },
  {
    day: 'Wednesday',
    breakfast: { name: 'Protein Overnight Oats', calories: 350, protein: 24, carbs: 48, fat: 9 },
    lunch: { name: 'Teriyaki Chicken with Brown Rice', calories: 480, protein: 45, carbs: 52, fat: 10 },
    dinner: { name: 'Baked Salmon with Roasted Vegetables', calories: 420, protein: 40, carbs: 22, fat: 20 },
    snack: { name: 'Hard-Boiled Eggs (2)', calories: 140, protein: 12, carbs: 2, fat: 10 },
  },
  {
    day: 'Thursday',
    breakfast: { name: 'Protein Overnight Oats', calories: 350, protein: 24, carbs: 48, fat: 9 },
    lunch: { name: 'Turkey Chili with Quinoa', calories: 450, protein: 42, carbs: 45, fat: 12 },
    dinner: { name: 'Sheet Pan Chicken Fajitas', calories: 410, protein: 38, carbs: 35, fat: 14 },
    snack: { name: 'Carrots & Hummus', calories: 150, protein: 6, carbs: 18, fat: 7 },
  },
  {
    day: 'Friday',
    breakfast: { name: 'Egg Muffins with Spinach & Cheese', calories: 280, protein: 22, carbs: 12, fat: 16 },
    lunch: { name: 'Sheet Pan Chicken Fajitas with Rice', calories: 460, protein: 40, carbs: 48, fat: 12 },
    dinner: { name: 'Turkey Chili with Quinoa', calories: 450, protein: 42, carbs: 45, fat: 12 },
    snack: { name: 'Protein Shake', calories: 160, protein: 24, carbs: 12, fat: 3 },
  },
]

const shoppingList = [
  { category: 'Proteins', items: ['Chicken breasts (2.5 lbs)', 'Salmon fillets (1 lb)', 'Ground turkey (1.5 lbs)', 'Eggs (18)', 'Greek yogurt (32 oz)', 'Protein powder'] },
  { category: 'Grains', items: ['Brown rice (3 cups uncooked)', 'Quinoa (2 cups uncooked)', 'Rolled oats (2 cups)'] },
  { category: 'Vegetables', items: ['Spinach (16 oz)', 'Bell peppers (6)', 'Broccoli (2 heads)', 'Cauliflower (1 head)', 'Onions (3)', 'Cherry tomatoes (2 pints)', 'Carrots (1 lb)'] },
  { category: 'Fruits', items: ['Apples (4)', 'Bananas (5)', 'Blueberries (12 oz)'] },
  { category: 'Pantry', items: ['Teriyaki sauce', 'Olive oil', 'Peanut butter', 'Almonds (8 oz)', 'Hummus', 'Canned tomatoes (28 oz)', 'Black beans (2 cans)', 'Taco seasoning', 'Garlic', 'Honey'] },
]

const timeline = [
  { time: '0:00', task: 'Preheat oven to 375°F. Gather all ingredients and containers.' },
  { time: '0:10', task: 'Prep egg muffins: whisk eggs, add spinach and cheese, pour into muffin tins. Bake 20 mins.' },
  { time: '0:15', task: 'Season chicken breasts with teriyaki sauce. Place on baking sheet.' },
  { time: '0:20', task: 'Season salmon fillets. Chop broccoli and cauliflower, toss with olive oil. Add to sheet pan.' },
  { time: '0:25', task: 'Put chicken and salmon sheet pans in oven (375°F for 20-25 mins).' },
  { time: '0:30', task: 'Start brown rice and quinoa on stovetop (follow package directions).' },
  { time: '0:35', task: 'Brown ground turkey in large pot. Add taco seasoning, tomatoes, beans for chili.' },
  { time: '0:45', task: 'Check and remove egg muffins from oven. Let cool.' },
  { time: '0:50', task: 'Remove chicken and salmon from oven. Set aside to cool.' },
  { time: '0:55', task: 'Prep overnight oats: mix oats, protein powder, milk in mason jars. Refrigerate.' },
  { time: '1:00', task: 'Chop bell peppers and onions for fajitas. Slice cooked chicken into strips.' },
  { time: '1:10', task: 'Make fajitas: cook chicken strips with peppers and onions in skillet.' },
  { time: '1:20', task: 'Hard-boil eggs (12 mins). Portion Greek yogurt into containers.' },
  { time: '1:30', task: 'Check rice and quinoa. Turn off heat when done, let sit covered.' },
  { time: '1:40', task: 'Start portioning: divide proteins, grains, and vegetables into meal containers.' },
  { time: '2:00', task: 'Label all containers with meal name and day. Refrigerate first 3 days, freeze rest.' },
  { time: '2:15', task: 'Clean up kitchen. Store extra ingredients. Done!' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does Sunday meal prep take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This Sunday meal prep plan takes approximately 2-3 hours from start to finish. The first time may take closer to 3 hours, but with practice you can complete it in 2 hours by multitasking efficiently.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I modify this meal plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! Swap proteins, vegetables, or grains based on your preferences or what is on sale. The key is to batch cook similar items together and maintain balanced macros for each meal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I freeze some meals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, freeze meals for Thursday and Friday to maintain freshness. Most cooked proteins, grains, and vegetables freeze well for up to 3 months. Thaw overnight in the refrigerator before reheating.',
      },
    },
  ],
}

export default function SundayMealPrepPage() {
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
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/meal-prep" className="text-purple-100 hover:text-white mb-4 inline-block">
              ← Back to Meal Prep Guides
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sunday Meal Prep Plan
            </h1>
            <p className="text-xl text-purple-100 mb-6 max-w-3xl">
              Complete weekly batch cooking plan. Spend 2-3 hours on Sunday to prepare all meals for
              Monday through Friday. Includes timeline, shopping list, and step-by-step instructions.
            </p>
            <div className="flex gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏰</span>
                <span>2-3 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍱</span>
                <span>15 meals + snacks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span>~$60-70</span>
              </div>
            </div>
          </div>
        </section>

        {/* Prep Timeline */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Prep Timeline & Instructions</h2>
            <div className="space-y-4">
              {timeline.map((step, index) => (
                <div key={index} className="flex gap-4 bg-purple-50 rounded-lg p-4">
                  <div className="flex-shrink-0 w-16 text-purple-600 font-bold">{step.time}</div>
                  <div className="text-gray-700">{step.task}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Meal Plan */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">5-Day Meal Plan</h2>
            <div className="space-y-6">
              {weekPlan.map((day, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{day.day}</h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">{totalDaily[index].calories} cal</div>
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
                <div key={index} className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-purple-600 mr-2">□</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recipe Variations */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recipe Variations</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Protein Swaps</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Swap chicken for turkey breast or pork tenderloin</li>
                  <li>• Replace salmon with cod, tilapia, or shrimp</li>
                  <li>• Use ground chicken instead of ground turkey</li>
                  <li>• Try tofu or tempeh for vegetarian option</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Grain Alternatives</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Replace brown rice with cauliflower rice for low-carb</li>
                  <li>• Use wild rice, farro, or barley instead of quinoa</li>
                  <li>• Try sweet potato as a grain alternative</li>
                  <li>• Use whole wheat pasta for variety</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Vegetable Switches</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Swap broccoli for green beans or asparagus</li>
                  <li>• Use zucchini instead of bell peppers</li>
                  <li>• Try Brussels sprouts instead of cauliflower</li>
                  <li>• Replace spinach with kale or Swiss chard</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Storage Tips */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Storage Tips & Shelf Life</h2>
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                <h3 className="text-lg font-semibold mb-2">Days 1-3 (Mon-Wed)</h3>
                <p className="text-gray-700 mb-2">Store in refrigerator:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Keep Monday through Wednesday meals in the fridge</li>
                  <li>• Egg muffins stay fresh for 4-5 days</li>
                  <li>• Cooked chicken and salmon are best consumed within 3-4 days</li>
                </ul>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                <h3 className="text-lg font-semibold mb-2">Days 4-5 (Thu-Fri)</h3>
                <p className="text-gray-700 mb-2">Freeze immediately after prep:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Freeze Thursday and Friday meals right after prep</li>
                  <li>• Move to refrigerator night before to thaw</li>
                  <li>• Alternatively, defrost in microwave on low power</li>
                </ul>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                <h3 className="text-lg font-semibold mb-2">Overnight Oats</h3>
                <p className="text-gray-700">
                  Prepare 2-3 servings at a time. They last 4-5 days in the fridge but taste best within 3 days.
                  Make fresh batch mid-week if needed.
                </p>
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
                <h3 className="font-semibold text-lg mb-3">🔥 Use Multiple Heat Sources</h3>
                <p className="text-gray-700">
                  Oven for proteins and veggies, stovetop for grains, slow cooker for chili.
                  Cook everything simultaneously.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">📋 Prep in Batches</h3>
                <p className="text-gray-700">
                  Chop all vegetables at once. Season all proteins together. Cook all grains
                  in one session.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">🎵 Make It Fun</h3>
                <p className="text-gray-700">
                  Play music, listen to podcasts, or meal prep with family. Make it an enjoyable
                  Sunday ritual.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">📦 Line Up Containers</h3>
                <p className="text-gray-700">
                  Have all containers open and ready. Assembly-line style portioning is much
                  faster than one at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Needed */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Equipment Needed</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-gray-700">15 meal prep containers with lids</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-gray-700">2 large baking sheets</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-gray-700">2 large pots for grains</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-gray-700">Large pot or slow cooker for chili</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-gray-700">Muffin tin for egg muffins</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-gray-700">Mason jars for overnight oats</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-gray-700">Sharp knife and cutting board</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">○</span>
                <span className="text-gray-700">Food scale (optional)</span>
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
                <h3 className="text-xl font-semibold mb-3">How long does Sunday meal prep take?</h3>
                <p className="text-gray-700">
                  This Sunday meal prep plan takes approximately 2-3 hours from start to finish. The first time may
                  take closer to 3 hours, but with practice you can complete it in 2 hours by multitasking efficiently.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can I modify this meal plan?</h3>
                <p className="text-gray-700">
                  Absolutely! Swap proteins, vegetables, or grains based on your preferences or what is on sale.
                  The key is to batch cook similar items together and maintain balanced macros for each meal.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Should I freeze some meals?</h3>
                <p className="text-gray-700">
                  Yes, freeze meals for Thursday and Friday to maintain freshness. Most cooked proteins, grains,
                  and vegetables freeze well for up to 3 months. Thaw overnight in the refrigerator before reheating.
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
                href="/meal-prep/beginners-guide"
                className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-semibold text-gray-900">Beginner's Guide</h3>
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
