import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Mediterranean Diet Guide - Complete Meal Plan & Food List | CalorieData',
  description: 'Complete Mediterranean diet guide with 7-day meal plan, 100+ approved foods, recipes, health benefits, and expert tips for heart health and longevity.',
  alternates: {
    canonical: `${SITE_URL}/diets/mediterranean-diet-guide`,
  },
  openGraph: {
    title: 'Mediterranean Diet Guide - Heart-Healthy Eating Made Simple',
    description: 'Complete Mediterranean diet guide with meal plans and food lists.',
    url: `${SITE_URL}/diets/mediterranean-diet-guide`,
  },
}

const weekPlan = [
  {
    day: 'Monday',
    breakfast: { name: 'Greek Yogurt with Honey, Walnuts & Berries', calories: 320, protein: 18, carbs: 38, fat: 12 },
    lunch: { name: 'Mediterranean Chickpea Salad with Feta', calories: 420, protein: 16, carbs: 48, fat: 18 },
    dinner: { name: 'Grilled Salmon with Lemon, Olive Oil & Roasted Vegetables', calories: 520, protein: 38, carbs: 32, fat: 28 },
    snack: { name: 'Hummus with Carrot Sticks', calories: 180, protein: 6, carbs: 20, fat: 9 },
  },
  {
    day: 'Tuesday',
    breakfast: { name: 'Whole Grain Toast with Avocado & Tomato', calories: 340, protein: 12, carbs: 42, fat: 16 },
    lunch: { name: 'Greek Salad with Grilled Chicken', calories: 460, protein: 32, carbs: 28, fat: 24 },
    dinner: { name: 'Baked White Fish with Tomatoes, Olives & Capers', calories: 380, protein: 36, carbs: 22, fat: 18 },
    snack: { name: 'Fresh Fruit with Almonds', calories: 200, protein: 6, carbs: 24, fat: 10 },
  },
  {
    day: 'Wednesday',
    breakfast: { name: 'Mediterranean Omelet with Spinach & Feta', calories: 360, protein: 24, carbs: 18, fat: 22 },
    lunch: { name: 'Lentil Soup with Whole Grain Bread', calories: 420, protein: 20, carbs: 64, fat: 8 },
    dinner: { name: 'Chicken Souvlaki with Tzatziki & Greek Salad', calories: 540, protein: 42, carbs: 38, fat: 24 },
    snack: { name: 'Greek Yogurt with Cucumber', calories: 120, protein: 12, carbs: 10, fat: 4 },
  },
  {
    day: 'Thursday',
    breakfast: { name: 'Overnight Oats with Figs & Walnuts', calories: 380, protein: 14, carbs: 56, fat: 14 },
    lunch: { name: 'Tuna Nicoise Salad', calories: 440, protein: 32, carbs: 28, fat: 22 },
    dinner: { name: 'Eggplant Moussaka with Greek Salad', calories: 480, protein: 24, carbs: 42, fat: 24 },
    snack: { name: 'Olives & Cherry Tomatoes', calories: 100, protein: 2, carbs: 8, fat: 8 },
  },
  {
    day: 'Friday',
    breakfast: { name: 'Greek Yogurt with Honey, Walnuts & Berries', calories: 320, protein: 18, carbs: 38, fat: 12 },
    lunch: { name: 'Grilled Vegetable & Halloumi Wrap', calories: 460, protein: 20, carbs: 48, fat: 22 },
    dinner: { name: 'Seafood Paella with Saffron Rice', calories: 560, protein: 36, carbs: 64, fat: 18 },
    snack: { name: 'Dates with Almonds', calories: 160, protein: 4, carbs: 22, fat: 8 },
  },
  {
    day: 'Saturday',
    breakfast: { name: 'Mediterranean Shakshuka', calories: 340, protein: 18, carbs: 28, fat: 18 },
    lunch: { name: 'Falafel Bowl with Tahini Dressing', calories: 520, protein: 18, carbs: 62, fat: 24 },
    dinner: { name: 'Lamb Kebabs with Couscous & Vegetables', calories: 580, protein: 38, carbs: 52, fat: 26 },
    snack: { name: 'Fresh Fruit Salad', calories: 140, protein: 2, carbs: 36, fat: 1 },
  },
  {
    day: 'Sunday',
    breakfast: { name: 'Whole Grain Toast with Avocado & Tomato', calories: 340, protein: 12, carbs: 42, fat: 16 },
    lunch: { name: 'Greek Lemon Chicken Soup', calories: 360, protein: 28, carbs: 32, fat: 14 },
    dinner: { name: 'Grilled Sea Bass with Roasted Potatoes & Greens', calories: 520, protein: 40, carbs: 44, fat: 20 },
    snack: { name: 'Hummus with Whole Wheat Pita', calories: 220, protein: 8, carbs: 30, fat: 8 },
  },
]

const foodList = [
  { category: 'Vegetables', items: ['Tomatoes', 'Cucumbers', 'Bell peppers', 'Eggplant', 'Zucchini', 'Spinach', 'Kale', 'Arugula', 'Broccoli', 'Cauliflower', 'Artichokes', 'Onions', 'Garlic', 'Leeks', 'Fennel', 'Asparagus', 'Green beans'] },
  { category: 'Fruits', items: ['Oranges', 'Lemons', 'Grapes', 'Figs', 'Dates', 'Pomegranates', 'Apples', 'Pears', 'Melons', 'Berries', 'Apricots', 'Peaches', 'Cherries'] },
  { category: 'Fish & Seafood', items: ['Salmon', 'Sardines', 'Mackerel', 'Tuna', 'Sea bass', 'Anchovies', 'Mussels', 'Clams', 'Shrimp', 'Squid', 'Octopus'] },
  { category: 'Poultry & Eggs', items: ['Chicken breast', 'Turkey', 'Eggs', 'Quail eggs'] },
  { category: 'Legumes', items: ['Chickpeas', 'Lentils', 'White beans', 'Kidney beans', 'Fava beans', 'Split peas', 'Black-eyed peas'] },
  { category: 'Whole Grains', items: ['Whole wheat bread', 'Whole wheat pasta', 'Barley', 'Bulgur', 'Farro', 'Couscous', 'Brown rice', 'Oats', 'Quinoa'] },
  { category: 'Nuts & Seeds', items: ['Almonds', 'Walnuts', 'Pine nuts', 'Pistachios', 'Hazelnuts', 'Sesame seeds', 'Pumpkin seeds', 'Sunflower seeds'] },
  { category: 'Healthy Fats', items: ['Extra virgin olive oil', 'Olives (green & black)', 'Avocados'] },
  { category: 'Dairy', items: ['Greek yogurt', 'Feta cheese', 'Halloumi', 'Mozzarella', 'Parmesan', 'Ricotta'] },
  { category: 'Herbs & Spices', items: ['Basil', 'Oregano', 'Thyme', 'Rosemary', 'Mint', 'Parsley', 'Cilantro', 'Cumin', 'Coriander', 'Paprika', 'Saffron', 'Cinnamon'] },
]

const shoppingList = [
  { category: 'Proteins', items: ['Salmon fillets (2 lbs)', 'White fish fillets (1 lb)', 'Chicken breast (2 lbs)', 'Lamb (1 lb)', 'Eggs (1 dozen)', 'Greek yogurt (32 oz)', 'Feta cheese (8 oz)', 'Halloumi (6 oz)'] },
  { category: 'Grains & Legumes', items: ['Whole wheat bread', 'Whole wheat pasta', 'Couscous', 'Lentils (1 bag)', 'Chickpeas (2 cans)', 'Oats'] },
  { category: 'Vegetables', items: ['Tomatoes (3 lbs)', 'Cucumbers (4)', 'Bell peppers (6)', 'Eggplant (2)', 'Spinach (2 bunches)', 'Mixed greens', 'Onions (3)', 'Garlic (1 head)', 'Zucchini (3)'] },
  { category: 'Fruits', items: ['Lemons (6)', 'Oranges (4)', 'Berries (2 pints)', 'Figs (8 oz)', 'Dates (8 oz)', 'Avocados (4)'] },
  { category: 'Pantry', items: ['Extra virgin olive oil', 'Olives (kalamata)', 'Capers', 'Tahini', 'Honey', 'Almonds', 'Walnuts', 'Hummus'] },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Mediterranean diet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Mediterranean diet is a heart-healthy eating pattern based on traditional foods from countries bordering the Mediterranean Sea. It emphasizes whole grains, fruits, vegetables, legumes, olive oil, fish, and moderate amounts of poultry and dairy, with limited red meat.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the health benefits of the Mediterranean diet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Mediterranean diet has been shown to reduce heart disease risk by 30%, lower stroke risk, support weight management, reduce diabetes risk, and may improve cognitive function and longevity. It is consistently ranked as one of the healthiest diets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I lose weight on the Mediterranean diet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Mediterranean diet can support healthy weight loss when combined with appropriate portion control. Studies show it is effective for long-term weight management while providing excellent nutrition and being easy to sustain.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical macronutrient ratio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Mediterranean diet typically consists of 35-40% fat (primarily from olive oil and nuts), 40-45% carbohydrates (from whole grains, fruits, and vegetables), and 15-20% protein (from fish, poultry, legumes, and dairy).',
      },
    },
  ],
}

export default function MediterraneanDietGuidePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/diets" className="text-blue-100 hover:text-white mb-4 inline-block">
              ← Back to Diet Guides
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mediterranean Diet Guide
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl">
              The world's healthiest diet for heart health and longevity. Complete 7-day meal plan with 100+ Mediterranean foods, recipes, and expert tips.
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">❤️</span>
                <span>Heart-Healthy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🫒</span>
                <span>Olive Oil Based</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🐟</span>
                <span>Rich in Omega-3</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Mediterranean Diet?</h2>
            <div className="prose max-w-4xl">
              <p className="text-lg text-gray-700 mb-4">
                The Mediterranean diet is inspired by the traditional eating patterns of countries bordering the Mediterranean Sea, including Greece, Italy, and Spain. It emphasizes plant-based foods, healthy fats from olive oil, and moderate amounts of fish and poultry.
              </p>
              <p className="text-lg text-gray-700">
                Recognized by the World Health Organization and consistently ranked as the #1 diet by U.S. News & World Report, it focuses on whole, minimally processed foods and has been extensively studied for its health benefits.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Principles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🫒</div>
                <h3 className="text-xl font-bold mb-2">Olive Oil First</h3>
                <p className="text-gray-700">Use extra virgin olive oil as your primary fat source for cooking and dressing.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🥗</div>
                <h3 className="text-xl font-bold mb-2">Plant-Based Focus</h3>
                <p className="text-gray-700">Fill your plate with vegetables, fruits, whole grains, legumes, nuts, and seeds.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🐟</div>
                <h3 className="text-xl font-bold mb-2">Fish Twice Weekly</h3>
                <p className="text-gray-700">Eat fish and seafood at least twice per week for omega-3 fatty acids.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🍷</div>
                <h3 className="text-xl font-bold mb-2">Moderate Wine</h3>
                <p className="text-gray-700">Optional moderate red wine consumption with meals (1 glass for women, 1-2 for men).</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🥩</div>
                <h3 className="text-xl font-bold mb-2">Limited Red Meat</h3>
                <p className="text-gray-700">Eat red meat only a few times per month, focusing on lean cuts.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="text-xl font-bold mb-2">Fresh Herbs</h3>
                <p className="text-gray-700">Use herbs and spices liberally for flavor instead of salt.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">7-Day Mediterranean Meal Plan</h2>
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
                        <div className="text-lg font-bold text-blue-600">{dailyTotals.calories} calories</div>
                        <div className="text-sm text-gray-600">P: {dailyTotals.protein}g • C: {dailyTotals.carbs}g • F: {dailyTotals.fat}g</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4">
                      {['breakfast', 'lunch', 'dinner', 'snack'].map(meal => {
                        const mealData = day[meal as keyof typeof day] as any
                        return (
                          <div key={meal}>
                            <div className="text-sm font-semibold text-gray-500 mb-1 capitalize">{meal}</div>
                            <div className="font-medium text-gray-900 text-sm">{mealData.name}</div>
                            <div className="text-xs text-blue-600 font-semibold">{mealData.calories} cal</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Mediterranean Food List (100+ Foods)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodList.map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <span className="text-blue-600 mr-2">✓</span>
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

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Macronutrient Ratios</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">35-40%</div>
                <div className="text-xl font-semibold mb-2">Fat</div>
                <div className="text-sm text-gray-600">Primarily from olive oil, nuts, and fatty fish</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-green-600 mb-2">40-45%</div>
                <div className="text-xl font-semibold mb-2">Carbs</div>
                <div className="text-sm text-gray-600">From whole grains, fruits, and vegetables</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-red-600 mb-2">15-20%</div>
                <div className="text-xl font-semibold mb-2">Protein</div>
                <div className="text-sm text-gray-600">Fish, poultry, legumes, and dairy</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Health Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">❤️ Heart Health</h3>
                <p className="text-gray-700">Reduces heart disease risk by up to 30% and lowers LDL cholesterol levels.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">🧠 Brain Function</h3>
                <p className="text-gray-700">May reduce cognitive decline and lower Alzheimer's disease risk.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">⚖️ Weight Management</h3>
                <p className="text-gray-700">Supports healthy, sustainable weight loss and long-term maintenance.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">🩸 Blood Sugar Control</h3>
                <p className="text-gray-700">Improves insulin sensitivity and reduces type 2 diabetes risk.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">💪 Longevity</h3>
                <p className="text-gray-700">Associated with increased lifespan and reduced all-cause mortality.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">🔥 Reduced Inflammation</h3>
                <p className="text-gray-700">Anti-inflammatory properties help reduce chronic disease risk.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Potential Considerations</h2>
            <div className="space-y-4 max-w-4xl">
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="font-bold text-yellow-900 mb-2">Higher in Calories from Fat</h3>
                <p className="text-gray-700">While healthy fats are emphasized, portion control is important for weight loss goals.</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="font-bold text-yellow-900 mb-2">Requires Meal Preparation</h3>
                <p className="text-gray-700">Focuses on fresh, whole foods which require more cooking time than processed options.</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="font-bold text-yellow-900 mb-2">Can Be More Expensive</h3>
                <p className="text-gray-700">Fresh fish, high-quality olive oil, and fresh produce may cost more than processed alternatives.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What is the Mediterranean diet?</h3>
                <p className="text-gray-700">The Mediterranean diet is a heart-healthy eating pattern based on traditional foods from countries bordering the Mediterranean Sea. It emphasizes whole grains, fruits, vegetables, legumes, olive oil, fish, and moderate amounts of poultry and dairy, with limited red meat.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What are the health benefits of the Mediterranean diet?</h3>
                <p className="text-gray-700">The Mediterranean diet has been shown to reduce heart disease risk by 30%, lower stroke risk, support weight management, reduce diabetes risk, and may improve cognitive function and longevity. It is consistently ranked as one of the healthiest diets.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can I lose weight on the Mediterranean diet?</h3>
                <p className="text-gray-700">Yes, the Mediterranean diet can support healthy weight loss when combined with appropriate portion control. Studies show it is effective for long-term weight management while providing excellent nutrition and being easy to sustain.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What is the typical macronutrient ratio?</h3>
                <p className="text-gray-700">The Mediterranean diet typically consists of 35-40% fat (primarily from olive oil and nuts), 40-45% carbohydrates (from whole grains, fruits, and vegetables), and 15-20% protein (from fish, poultry, legumes, and dairy).</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Is olive oil really that important?</h3>
                <p className="text-gray-700">Yes, extra virgin olive oil is a cornerstone of the Mediterranean diet. It provides healthy monounsaturated fats, antioxidants, and anti-inflammatory compounds. Use it as your primary cooking oil and for salad dressings.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How often should I eat fish?</h3>
                <p className="text-gray-700">Aim for at least 2-3 servings of fish per week, especially fatty fish like salmon, sardines, and mackerel, which are rich in omega-3 fatty acids that support heart and brain health.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Diet Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/diets/keto-diet-guide" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">🥑</div>
                <h3 className="font-semibold text-gray-900">Keto Diet</h3>
              </Link>
              <Link href="/diets/dash-diet-guide" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">❤️</div>
                <h3 className="font-semibold text-gray-900">DASH Diet</h3>
              </Link>
              <Link href="/diets/paleo-diet-guide" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-2">🥩</div>
                <h3 className="font-semibold text-gray-900">Paleo Diet</h3>
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
