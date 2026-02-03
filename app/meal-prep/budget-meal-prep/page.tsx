import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Budget Meal Prep - Cheap Recipes Under $50 Per Week | CalorieData',
  description: 'Affordable meal prep guide with recipes under $50 per week. Includes budget shopping tips, cheap protein sources, and 7 days of meals.',
  alternates: {
    canonical: `${SITE_URL}/meal-prep/budget-meal-prep`,
  },
  openGraph: {
    title: 'Budget Meal Prep - Eat Healthy for Under $50/Week',
    description: 'Complete budget meal prep guide with cheap recipes and shopping tips.',
    url: `${SITE_URL}/meal-prep/budget-meal-prep`,
  },
}

const weekPlan = [
  {
    day: 'Monday',
    breakfast: { name: 'Oatmeal with Banana & Peanut Butter', calories: 340, protein: 12, carbs: 54, fat: 10, cost: 1.20 },
    lunch: { name: 'Black Bean & Rice Bowl', calories: 420, protein: 18, carbs: 72, fat: 6, cost: 1.50 },
    dinner: { name: 'Baked Chicken Thighs with Roasted Potatoes', calories: 480, protein: 35, carbs: 42, fat: 18, cost: 2.80 },
    snack: { name: 'Hard-Boiled Eggs (2)', calories: 140, protein: 12, carbs: 2, fat: 10, cost: 0.50 },
  },
  {
    day: 'Tuesday',
    breakfast: { name: 'Scrambled Eggs with Toast', calories: 320, protein: 18, carbs: 32, fat: 14, cost: 0.90 },
    lunch: { name: 'Tuna Pasta Salad', calories: 450, protein: 28, carbs: 52, fat: 14, cost: 1.80 },
    dinner: { name: 'Ground Turkey Tacos with Rice', calories: 490, protein: 32, carbs: 48, fat: 18, cost: 2.40 },
    snack: { name: 'Apple with Peanut Butter', calories: 200, protein: 5, carbs: 24, fat: 10, cost: 0.70 },
  },
  {
    day: 'Wednesday',
    breakfast: { name: 'Oatmeal with Banana & Peanut Butter', calories: 340, protein: 12, carbs: 54, fat: 10, cost: 1.20 },
    lunch: { name: 'Black Bean & Rice Bowl', calories: 420, protein: 18, carbs: 72, fat: 6, cost: 1.50 },
    dinner: { name: 'Spaghetti with Meat Sauce', calories: 510, protein: 28, carbs: 62, fat: 16, cost: 2.20 },
    snack: { name: 'Carrots with Hummus', calories: 150, protein: 6, carbs: 18, fat: 7, cost: 0.80 },
  },
  {
    day: 'Thursday',
    breakfast: { name: 'Scrambled Eggs with Toast', calories: 320, protein: 18, carbs: 32, fat: 14, cost: 0.90 },
    lunch: { name: 'Chicken & Veggie Stir-Fry with Rice', calories: 460, protein: 36, carbs: 52, fat: 10, cost: 2.00 },
    dinner: { name: 'Ground Turkey Tacos with Rice', calories: 490, protein: 32, carbs: 48, fat: 18, cost: 2.40 },
    snack: { name: 'Banana', calories: 105, protein: 1, carbs: 27, fat: 0, cost: 0.30 },
  },
  {
    day: 'Friday',
    breakfast: { name: 'Oatmeal with Banana & Peanut Butter', calories: 340, protein: 12, carbs: 54, fat: 10, cost: 1.20 },
    lunch: { name: 'Tuna Pasta Salad', calories: 450, protein: 28, carbs: 52, fat: 14, cost: 1.80 },
    dinner: { name: 'Baked Chicken Thighs with Roasted Potatoes', calories: 480, protein: 35, carbs: 42, fat: 18, cost: 2.80 },
    snack: { name: 'Hard-Boiled Eggs (2)', calories: 140, protein: 12, carbs: 2, fat: 10, cost: 0.50 },
  },
  {
    day: 'Saturday',
    breakfast: { name: 'Scrambled Eggs with Toast', calories: 320, protein: 18, carbs: 32, fat: 14, cost: 0.90 },
    lunch: { name: 'Chicken & Veggie Stir-Fry with Rice', calories: 460, protein: 36, carbs: 52, fat: 10, cost: 2.00 },
    dinner: { name: 'Spaghetti with Meat Sauce', calories: 510, protein: 28, carbs: 62, fat: 16, cost: 2.20 },
    snack: { name: 'Carrots with Hummus', calories: 150, protein: 6, carbs: 18, fat: 7, cost: 0.80 },
  },
  {
    day: 'Sunday',
    breakfast: { name: 'Oatmeal with Banana & Peanut Butter', calories: 340, protein: 12, carbs: 54, fat: 10, cost: 1.20 },
    lunch: { name: 'Black Bean & Rice Bowl', calories: 420, protein: 18, carbs: 72, fat: 6, cost: 1.50 },
    dinner: { name: 'Ground Turkey Tacos with Rice', calories: 490, protein: 32, carbs: 48, fat: 18, cost: 2.40 },
    snack: { name: 'Apple with Peanut Butter', calories: 200, protein: 5, carbs: 24, fat: 10, cost: 0.70 },
  },
]

const shoppingList = [
  { category: 'Proteins ($18)', items: ['Chicken thighs (2 lbs) - $6', 'Ground turkey (1.5 lbs) - $7', 'Eggs (18 pack) - $3', 'Canned tuna (3 cans) - $2'] },
  { category: 'Grains ($8)', items: ['White rice (2 lbs) - $3', 'Pasta (2 boxes) - $2', 'Rolled oats (32 oz) - $2', 'Whole wheat bread (1 loaf) - $1'] },
  { category: 'Vegetables ($10)', items: ['Potatoes (5 lbs) - $3', 'Onions (2 lbs) - $2', 'Carrots (2 lbs) - $2', 'Frozen mixed vegetables (2 bags) - $3'] },
  { category: 'Fruits ($4)', items: ['Bananas (7) - $2', 'Apples (5) - $2'] },
  { category: 'Pantry ($8)', items: ['Black beans (3 cans) - $2', 'Pasta sauce (1 jar) - $2', 'Peanut butter - $2', 'Hummus - $2'] },
  { category: 'Seasonings (from pantry)', items: ['Olive oil', 'Salt & pepper', 'Garlic powder', 'Taco seasoning', 'Soy sauce'] },
]

const budgetTips = [
  {
    title: 'Buy Store Brands',
    description: 'Store brands are typically 20-40% cheaper than name brands with identical quality. Choose generic for staples like rice, pasta, canned goods, and frozen vegetables.',
  },
  {
    title: 'Buy in Bulk',
    description: 'Purchase rice, oats, pasta, and dried beans in bulk. Cost per pound drops significantly. Store in airtight containers to maintain freshness.',
  },
  {
    title: 'Choose Cheaper Protein Cuts',
    description: 'Chicken thighs cost half the price of breasts. Ground turkey is cheaper than ground beef. Eggs and canned tuna are the most affordable proteins.',
  },
  {
    title: 'Shop Sales & Use Coupons',
    description: 'Plan meals around weekly sales. Stock up on protein when on sale and freeze. Use store apps for digital coupons and loyalty rewards.',
  },
  {
    title: 'Use Frozen Vegetables',
    description: 'Frozen vegetables are just as nutritious as fresh, often cheaper, and last longer. No waste from spoilage. Buy large bags for better value.',
  },
  {
    title: 'Minimize Food Waste',
    description: 'Use everything you buy. Freeze extras immediately. Repurpose leftovers into new meals. Vegetable scraps make broth.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I meal prep on a budget?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget meal prep focuses on affordable proteins like chicken thighs, ground turkey, eggs, and canned tuna. Buy grains in bulk, use frozen vegetables, shop sales, and choose store brands. This meal plan provides complete nutrition for under $50 per week.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the cheapest proteins for meal prep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cheapest proteins are eggs ($0.25 each), canned tuna ($0.60/can), chicken thighs ($2-3/lb), ground turkey ($3-4/lb), and dried beans ($1/lb). These provide excellent nutrition at low cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is meal prepping cheaper than eating out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, significantly. This budget meal prep plan costs about $7 per day versus $15-20 for restaurant meals. You save $50-90 per week by meal prepping instead of eating out.',
      },
    },
  ],
}

export default function BudgetMealPrepPage() {
  const totalWeeklyCost = weekPlan.reduce((sum, day) =>
    sum + day.breakfast.cost + day.lunch.cost + day.dinner.cost + day.snack.cost, 0
  )

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/meal-prep" className="text-green-100 hover:text-white mb-4 inline-block">
              ← Back to Meal Prep Guides
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Budget Meal Prep Under $50/Week
            </h1>
            <p className="text-xl text-green-100 mb-6 max-w-3xl">
              Complete 7-day meal prep plan for under $50. Includes budget shopping tips, cheap protein sources,
              and affordable recipes that do not compromise on nutrition or taste.
            </p>
            <div className="flex gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span>${totalWeeklyCost.toFixed(2)}/week</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍱</span>
                <span>21 meals + snacks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💪</span>
                <span>Avg 1,350 cal/day</span>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Meal Plan */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">7-Day Budget Meal Plan</h2>
            <div className="space-y-6">
              {weekPlan.map((day, index) => {
                const dailyCost = day.breakfast.cost + day.lunch.cost + day.dinner.cost + day.snack.cost
                const dailyCalories = day.breakfast.calories + day.lunch.calories + day.dinner.calories + day.snack.calories
                return (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{day.day}</h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">${dailyCost.toFixed(2)}</div>
                        <div className="text-sm text-gray-600">{dailyCalories} calories</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">Breakfast</div>
                        <div className="font-medium text-gray-900">{day.breakfast.name}</div>
                        <div className="text-sm text-gray-600">{day.breakfast.calories} cal • ${day.breakfast.cost.toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">Lunch</div>
                        <div className="font-medium text-gray-900">{day.lunch.name}</div>
                        <div className="text-sm text-gray-600">{day.lunch.calories} cal • ${day.lunch.cost.toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">Dinner</div>
                        <div className="font-medium text-gray-900">{day.dinner.name}</div>
                        <div className="text-sm text-gray-600">{day.dinner.calories} cal • ${day.dinner.cost.toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">Snack</div>
                        <div className="font-medium text-gray-900">{day.snack.name}</div>
                        <div className="text-sm text-gray-600">{day.snack.calories} cal • ${day.snack.cost.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Shopping List */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Shopping List (Total: ~$48)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {shoppingList.map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
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

        {/* Budget Tips */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Budget Shopping Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {budgetTips.map((tip, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-700 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cheap Proteins */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cheap Protein Sources</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Eggs</h3>
                  <p className="text-gray-600 text-sm">6g protein per egg</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">$0.25</div>
                  <div className="text-xs text-gray-600">per egg</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Canned Tuna</h3>
                  <p className="text-gray-600 text-sm">20g protein per can</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">$0.60</div>
                  <div className="text-xs text-gray-600">per can</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Chicken Thighs</h3>
                  <p className="text-gray-600 text-sm">25g protein per 4 oz</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">$3.00</div>
                  <div className="text-xs text-gray-600">per pound</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Ground Turkey</h3>
                  <p className="text-gray-600 text-sm">22g protein per 4 oz</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">$4.00</div>
                  <div className="text-xs text-gray-600">per pound</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Black Beans (canned)</h3>
                  <p className="text-gray-600 text-sm">15g protein per cup</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">$0.70</div>
                  <div className="text-xs text-gray-600">per can</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Storage Tips */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Storage Tips</h2>
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-600 p-6">
                <h3 className="text-lg font-semibold mb-2">Days 1-4</h3>
                <p className="text-gray-700">Store meals in refrigerator. Chicken thighs and ground turkey stay fresh for 4 days when properly stored.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-6">
                <h3 className="text-lg font-semibold mb-2">Days 5-7</h3>
                <p className="text-gray-700">Freeze meals for later in the week. Move to fridge night before to thaw. All recipes freeze well for up to 2 months.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-6">
                <h3 className="text-lg font-semibold mb-2">Batch Cooking</h3>
                <p className="text-gray-700">Cook all proteins at once. Make double portions and freeze extras. Build a freezer stash for emergency meals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Variations */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Budget-Friendly Variations</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Swap Chicken for Drumsticks</h3>
                <p className="text-gray-700 text-sm">Even cheaper than thighs at $1.50-2/lb. Bake same way, just add 5-10 minutes cook time.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Use Dried Beans</h3>
                <p className="text-gray-700 text-sm">Dried beans cost $1/lb versus $2/lb canned. Soak overnight and cook in batches to save even more.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Buy Whole Chickens</h3>
                <p className="text-gray-700 text-sm">Rotisserie or whole raw chickens provide more meat per dollar. Use bones for broth.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Seasonal Produce</h3>
                <p className="text-gray-700 text-sm">Buy vegetables in season for lower prices. Frozen is always budget-friendly year-round.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Time-Saving Tips */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Time-Saving Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">🔥 Sheet Pan Meals</h3>
                <p className="text-gray-700">Cook protein and vegetables on one pan. Minimal cleanup and everything cooks together.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">🍚 Rice Cooker</h3>
                <p className="text-gray-700">Set it and forget it. Cook large batches of rice while prepping other items.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">🥚 Batch Boil Eggs</h3>
                <p className="text-gray-700">Boil a dozen eggs at once. Perfect for quick breakfast or snacks all week.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">🧊 Freeze in Portions</h3>
                <p className="text-gray-700">Portion before freezing. Grab single servings without thawing entire batch.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Equipment Needed</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-gray-700">15-20 reusable containers (BPA-free plastic for budget)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-gray-700">2 large baking sheets</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-gray-700">Large pot for pasta and rice</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-gray-700">Large skillet</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How can I meal prep on a budget?</h3>
                <p className="text-gray-700">
                  Budget meal prep focuses on affordable proteins like chicken thighs, ground turkey, eggs, and canned tuna.
                  Buy grains in bulk, use frozen vegetables, shop sales, and choose store brands. This meal plan provides
                  complete nutrition for under $50 per week.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What are the cheapest proteins for meal prep?</h3>
                <p className="text-gray-700">
                  The cheapest proteins are eggs ($0.25 each), canned tuna ($0.60/can), chicken thighs ($2-3/lb),
                  ground turkey ($3-4/lb), and dried beans ($1/lb). These provide excellent nutrition at low cost.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Is meal prepping cheaper than eating out?</h3>
                <p className="text-gray-700">
                  Yes, significantly. This budget meal prep plan costs about $7 per day versus $15-20 for restaurant meals.
                  You save $50-90 per week by meal prepping instead of eating out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Meal Prep Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="/meal-prep/beginners-guide"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-semibold text-gray-900">Beginner's Guide</h3>
              </Link>
              <Link
                href="/meal-prep/sunday-meal-prep"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">📅</div>
                <h3 className="font-semibold text-gray-900">Sunday Meal Prep</h3>
              </Link>
              <Link
                href="/meal-prep/high-protein"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
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
