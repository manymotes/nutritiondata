import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'High-Protein Recipes - 15 Recipes with Calorie & Macro Data | CalorieData',
  description: 'Discover 15 high-protein recipes perfect for muscle building. Each recipe includes complete calorie counts, macros, ingredients, and prep times.',
  alternates: {
    canonical: `${SITE_URL}/recipes/high-protein`,
  },
  openGraph: {
    title: 'High-Protein Recipes - 15 Recipes with Complete Nutrition Data',
    description: 'Discover 15 high-protein recipes perfect for muscle building with detailed calorie counts and macronutrients.',
    url: `${SITE_URL}/recipes/high-protein`,
  },
}

const recipes = [
  {
    name: 'Grilled Chicken Breast with Quinoa',
    description: 'Classic high-protein meal with lean chicken and complete protein from quinoa.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '20 min',
    calories: 425,
    protein: 48,
    carbs: 38,
    fat: 8,
    ingredients: [
      { name: 'Chicken breast', amount: '200g', calories: 330, link: '/calories-in/chicken-breast' },
      { name: 'Quinoa (cooked)', amount: '150g', calories: 180, link: '/calories-in/quinoa' },
      { name: 'Olive oil', amount: '1 tsp', calories: 40, link: '/calories-in/olive-oil' },
      { name: 'Lemon juice', amount: '2 tbsp', calories: 5, link: '/calories-in/lemon' },
    ],
  },
  {
    name: 'Greek Yogurt Protein Bowl',
    description: 'High-protein breakfast bowl with Greek yogurt, berries, and nuts.',
    servings: 1,
    prepTime: '5 min',
    cookTime: '0 min',
    calories: 385,
    protein: 32,
    carbs: 42,
    fat: 12,
    ingredients: [
      { name: 'Greek yogurt (nonfat)', amount: '250g', calories: 150, link: '/calories-in/greek-yogurt' },
      { name: 'Blueberries', amount: '100g', calories: 57, link: '/calories-in/blueberry' },
      { name: 'Almonds', amount: '20g', calories: 116, link: '/calories-in/almonds' },
      { name: 'Honey', amount: '1 tbsp', calories: 64, link: '/calories-in/honey' },
    ],
  },
  {
    name: 'Salmon with Asparagus',
    description: 'Omega-3 rich salmon paired with fiber-rich asparagus.',
    servings: 1,
    prepTime: '8 min',
    cookTime: '15 min',
    calories: 380,
    protein: 42,
    carbs: 12,
    fat: 18,
    ingredients: [
      { name: 'Salmon fillet', amount: '180g', calories: 330, link: '/calories-in/salmon' },
      { name: 'Asparagus', amount: '150g', calories: 30, link: '/calories-in/asparagus' },
      { name: 'Olive oil', amount: '1 tsp', calories: 40, link: '/calories-in/olive-oil' },
    ],
  },
  {
    name: 'Protein Smoothie with Banana',
    description: 'Quick post-workout smoothie packed with 35g protein.',
    servings: 1,
    prepTime: '5 min',
    cookTime: '0 min',
    calories: 340,
    protein: 35,
    carbs: 45,
    fat: 4,
    ingredients: [
      { name: 'Protein powder', amount: '1 scoop (30g)', calories: 120, link: '/calories-in/protein-shake' },
      { name: 'Banana', amount: '1 medium', calories: 105, link: '/calories-in/banana' },
      { name: 'Skim milk', amount: '250ml', calories: 85, link: '/calories-in/skim-milk' },
      { name: 'Spinach', amount: '50g', calories: 12, link: '/calories-in/spinach' },
      { name: 'Chia seeds', amount: '1 tbsp', calories: 58, link: '/calories-in/chia-seeds' },
    ],
  },
  {
    name: 'Turkey & Egg White Scramble',
    description: 'High-protein breakfast with lean turkey and egg whites.',
    servings: 1,
    prepTime: '5 min',
    cookTime: '8 min',
    calories: 295,
    protein: 45,
    carbs: 8,
    fat: 9,
    ingredients: [
      { name: 'Turkey breast (ground)', amount: '100g', calories: 150, link: '/calories-in/turkey' },
      { name: 'Egg whites', amount: '4 large', calories: 68, link: '/calories-in/egg' },
      { name: 'Whole egg', amount: '1 large', calories: 72, link: '/calories-in/egg' },
      { name: 'Spinach', amount: '50g', calories: 12, link: '/calories-in/spinach' },
    ],
  },
  {
    name: 'Tuna Salad with Chickpeas',
    description: 'Protein-packed tuna salad with added plant protein from chickpeas.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '0 min',
    calories: 365,
    protein: 42,
    carbs: 32,
    fat: 8,
    ingredients: [
      { name: 'Tuna (canned in water)', amount: '150g', calories: 165, link: '/calories-in/tuna' },
      { name: 'Chickpeas', amount: '100g', calories: 164, link: '/calories-in/chickpeas' },
      { name: 'Mixed greens', amount: '100g', calories: 25, link: '/calories-in/lettuce' },
      { name: 'Lemon juice', amount: '2 tbsp', calories: 10, link: '/calories-in/lemon' },
    ],
  },
  {
    name: 'Beef and Broccoli Stir-Fry',
    description: 'High-protein stir-fry with lean beef and nutrient-rich broccoli.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '12 min',
    calories: 420,
    protein: 46,
    carbs: 22,
    fat: 16,
    ingredients: [
      { name: 'Lean beef (sirloin)', amount: '180g', calories: 320, link: '/calories-in/steak' },
      { name: 'Broccoli', amount: '200g', calories: 68, link: '/calories-in/broccoli' },
      { name: 'Soy sauce', amount: '2 tbsp', calories: 20, link: '/calories-in/soy-sauce' },
      { name: 'Sesame oil', amount: '1 tsp', calories: 40, link: '/calories-in/sesame-oil' },
    ],
  },
  {
    name: 'Cottage Cheese Pancakes',
    description: 'Protein-rich pancakes made with cottage cheese and oats.',
    servings: 2,
    prepTime: '5 min',
    cookTime: '10 min',
    calories: 320,
    protein: 28,
    carbs: 38,
    fat: 7,
    ingredients: [
      { name: 'Cottage cheese (low-fat)', amount: '150g', calories: 120, link: '/calories-in/cottage-cheese' },
      { name: 'Oats', amount: '50g', calories: 190, link: '/calories-in/oatmeal' },
      { name: 'Eggs', amount: '2 large', calories: 144, link: '/calories-in/egg' },
      { name: 'Blueberries', amount: '50g', calories: 29, link: '/calories-in/blueberry' },
    ],
  },
  {
    name: 'Shrimp and Zoodles',
    description: 'Low-carb, high-protein meal with shrimp and zucchini noodles.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '8 min',
    calories: 285,
    protein: 38,
    carbs: 18,
    fat: 7,
    ingredients: [
      { name: 'Shrimp', amount: '200g', calories: 200, link: '/calories-in/shrimp' },
      { name: 'Zucchini (spiralized)', amount: '300g', calories: 51, link: '/calories-in/zucchini' },
      { name: 'Cherry tomatoes', amount: '100g', calories: 18, link: '/calories-in/tomato' },
      { name: 'Garlic & olive oil', amount: '1 tsp', calories: 45, link: '/calories-in/olive-oil' },
    ],
  },
  {
    name: 'Protein-Packed Chili',
    description: 'Hearty chili loaded with lean ground turkey and beans.',
    servings: 2,
    prepTime: '15 min',
    cookTime: '30 min',
    calories: 395,
    protein: 42,
    carbs: 38,
    fat: 9,
    ingredients: [
      { name: 'Ground turkey (lean)', amount: '200g', calories: 300, link: '/calories-in/turkey' },
      { name: 'Black beans', amount: '150g', calories: 180, link: '/calories-in/black-beans' },
      { name: 'Diced tomatoes', amount: '200g', calories: 36, link: '/calories-in/tomato' },
      { name: 'Onion & spices', amount: '100g', calories: 40, link: '/calories-in/onion' },
    ],
  },
  {
    name: 'Tofu Scramble with Veggies',
    description: 'Plant-based high-protein breakfast with seasoned tofu.',
    servings: 1,
    prepTime: '8 min',
    cookTime: '10 min',
    calories: 285,
    protein: 24,
    carbs: 18,
    fat: 15,
    ingredients: [
      { name: 'Firm tofu', amount: '200g', calories: 160, link: '/calories-in/tofu' },
      { name: 'Bell peppers', amount: '100g', calories: 26, link: '/calories-in/bell-pepper' },
      { name: 'Spinach', amount: '50g', calories: 12, link: '/calories-in/spinach' },
      { name: 'Olive oil', amount: '1 tsp', calories: 40, link: '/calories-in/olive-oil' },
      { name: 'Nutritional yeast', amount: '2 tbsp', calories: 40, link: '/calories-in/nutritional-yeast' },
    ],
  },
  {
    name: 'Chicken & Lentil Bowl',
    description: 'Complete protein meal combining chicken with fiber-rich lentils.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '25 min',
    calories: 445,
    protein: 48,
    carbs: 42,
    fat: 10,
    ingredients: [
      { name: 'Chicken breast', amount: '150g', calories: 248, link: '/calories-in/chicken-breast' },
      { name: 'Lentils (cooked)', amount: '150g', calories: 165, link: '/calories-in/lentils' },
      { name: 'Kale', amount: '100g', calories: 35, link: '/calories-in/kale' },
      { name: 'Olive oil', amount: '1 tsp', calories: 40, link: '/calories-in/olive-oil' },
    ],
  },
  {
    name: 'Protein Oatmeal Bowl',
    description: 'Overnight oats boosted with protein powder and nut butter.',
    servings: 1,
    prepTime: '5 min (+ overnight)',
    cookTime: '0 min',
    calories: 425,
    protein: 32,
    carbs: 52,
    fat: 12,
    ingredients: [
      { name: 'Rolled oats', amount: '60g', calories: 228, link: '/calories-in/oatmeal' },
      { name: 'Protein powder', amount: '1 scoop (30g)', calories: 120, link: '/calories-in/protein-shake' },
      { name: 'Almond butter', amount: '1 tbsp', calories: 98, link: '/calories-in/almond-butter' },
      { name: 'Skim milk', amount: '200ml', calories: 68, link: '/calories-in/skim-milk' },
    ],
  },
  {
    name: 'Steak with Sweet Potato',
    description: 'Premium protein meal with grass-fed steak and complex carbs.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '18 min',
    calories: 485,
    protein: 46,
    carbs: 38,
    fat: 16,
    ingredients: [
      { name: 'Sirloin steak', amount: '180g', calories: 320, link: '/calories-in/steak' },
      { name: 'Sweet potato', amount: '200g', calories: 172, link: '/calories-in/sweet-potato' },
      { name: 'Asparagus', amount: '100g', calories: 20, link: '/calories-in/asparagus' },
    ],
  },
  {
    name: 'Egg & Avocado Toast',
    description: 'High-protein breakfast with eggs and healthy fats from avocado.',
    servings: 1,
    prepTime: '5 min',
    cookTime: '8 min',
    calories: 395,
    protein: 24,
    carbs: 32,
    fat: 20,
    ingredients: [
      { name: 'Whole wheat bread', amount: '2 slices', calories: 160, link: '/calories-in/whole-wheat-bread' },
      { name: 'Eggs', amount: '2 large', calories: 144, link: '/calories-in/egg' },
      { name: 'Avocado', amount: '50g', calories: 80, link: '/calories-in/avocado' },
      { name: 'Cherry tomatoes', amount: '50g', calories: 9, link: '/calories-in/tomato' },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much protein should I eat per meal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most people benefit from 20-40g of protein per meal. Athletes and those building muscle may need 30-50g per meal. These recipes provide 24-48g protein per serving.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are high-protein recipes good for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, high-protein recipes help with weight loss by increasing satiety, preserving muscle mass, and boosting metabolism. Protein has a higher thermic effect than carbs or fats.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I meal prep these high-protein recipes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of these recipes work great for meal prep. Grilled chicken, protein bowls, and chili store well for 3-4 days. Smoothies and scrambles are best made fresh.',
      },
    },
  ],
}

export default function HighProteinRecipesPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/recipes" className="text-red-100 hover:text-white mb-4 inline-block">
              ← Back to Recipes
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              High-Protein Recipes
            </h1>
            <p className="text-xl text-red-100 mb-6 max-w-3xl">
              15 protein-packed recipes perfect for muscle building, weight loss, and staying satisfied.
              Each recipe includes complete nutrition data, prep times, and ingredient calorie breakdowns.
            </p>
          </div>
        </section>

        {/* Recipes Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {recipes.map((recipe, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {recipe.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{recipe.description}</p>

                  {/* Time & Servings */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <span>⏱️ Prep: {recipe.prepTime}</span>
                    <span>🔥 Cook: {recipe.cookTime}</span>
                    <span>🍽️ Servings: {recipe.servings}</span>
                  </div>

                  {/* Macros */}
                  <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-red-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{recipe.calories}</div>
                      <div className="text-xs text-gray-600">Calories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{recipe.protein}g</div>
                      <div className="text-xs text-gray-600">Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{recipe.carbs}g</div>
                      <div className="text-xs text-gray-600">Carbs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{recipe.fat}g</div>
                      <div className="text-xs text-gray-600">Fat</div>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Ingredients:</h4>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="flex justify-between items-start text-sm">
                          <span>
                            <Link
                              href={ingredient.link}
                              className="text-primary-600 hover:text-primary-700 hover:underline"
                            >
                              {ingredient.name}
                            </Link>
                            <span className="text-gray-600 ml-1">- {ingredient.amount}</span>
                          </span>
                          <span className="text-gray-900 font-medium ml-2">{ingredient.calories} cal</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">How much protein should I eat per meal?</h3>
                <p className="text-gray-700">
                  Most people benefit from 20-40g of protein per meal. Athletes and those building muscle may need
                  30-50g per meal. These recipes provide 24-48g protein per serving, perfect for meeting your daily needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Are high-protein recipes good for weight loss?</h3>
                <p className="text-gray-700">
                  Yes, high-protein recipes help with weight loss by increasing satiety, preserving muscle mass during
                  calorie restriction, and boosting metabolism. Protein has a higher thermic effect than carbs or fats,
                  meaning your body burns more calories digesting it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I meal prep these high-protein recipes?</h3>
                <p className="text-gray-700">
                  Most of these recipes work great for meal prep. Grilled chicken dishes, protein bowls, and chili store
                  well in the refrigerator for 3-4 days. Smoothies and scrambles are best made fresh for optimal taste
                  and texture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Recipe Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/recipes/low-calorie"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🥬</div>
                <h3 className="font-semibold text-gray-900">Low-Calorie</h3>
              </Link>
              <Link
                href="/recipes/breakfast"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🍳</div>
                <h3 className="font-semibold text-gray-900">Breakfast</h3>
              </Link>
              <Link
                href="/recipes/keto"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🥑</div>
                <h3 className="font-semibold text-gray-900">Keto</h3>
              </Link>
              <Link
                href="/recipes/dinner"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🍽️</div>
                <h3 className="font-semibold text-gray-900">Dinner</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
