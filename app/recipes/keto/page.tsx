import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Keto Recipes - 15 Low-Carb High-Fat Recipes | CalorieData',
  description: 'Discover 15 keto-friendly recipes perfect for ketogenic diets. Each recipe under 10g net carbs with complete nutrition data and prep times.',
  alternates: {
    canonical: `${SITE_URL}/recipes/keto`,
  },
  openGraph: {
    title: 'Keto Recipes - 15 Low-Carb High-Fat Recipes',
    description: 'Discover 15 keto-friendly recipes under 10g net carbs with detailed nutrition data.',
    url: `${SITE_URL}/recipes/keto`,
  },
}

const recipes = [
  {
    name: 'Cauliflower Pizza Crust',
    description: 'Low-carb pizza crust made with cauliflower and cheese.',
    servings: 2,
    prepTime: '15 min',
    cookTime: '25 min',
    calories: 185,
    protein: 14,
    carbs: 8,
    fat: 12,
    ingredients: [
      { name: 'Cauliflower (riced)', amount: '300g', calories: 75, link: '/calories-in/cauliflower' },
      { name: 'Mozzarella cheese', amount: '100g', calories: 280, link: '/calories-in/mozzarella' },
      { name: 'Egg', amount: '1 large', calories: 72, link: '/calories-in/egg' },
      { name: 'Parmesan', amount: '20g', calories: 86, link: '/calories-in/parmesan' },
    ],
  },
  {
    name: 'Zucchini Noodles with Pesto',
    description: 'Spiralized zucchini tossed in homemade basil pesto.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '5 min',
    calories: 285,
    protein: 9,
    carbs: 12,
    fat: 24,
    ingredients: [
      { name: 'Zucchini (spiralized)', amount: '300g', calories: 51, link: '/calories-in/zucchini' },
      { name: 'Basil pesto', amount: '3 tbsp', calories: 180, link: '/calories-in/pesto' },
      { name: 'Parmesan cheese', amount: '20g', calories: 86, link: '/calories-in/parmesan' },
      { name: 'Pine nuts', amount: '10g', calories: 67, link: '/calories-in/pine-nuts' },
    ],
  },
  {
    name: 'Keto Fat Bombs',
    description: 'Chocolate coconut fat bombs for sustained energy.',
    servings: 4,
    prepTime: '10 min (+ 2 hrs chill)',
    cookTime: '0 min',
    calories: 195,
    protein: 3,
    carbs: 3,
    fat: 20,
    ingredients: [
      { name: 'Coconut oil', amount: '60g', calories: 540, link: '/calories-in/coconut-oil' },
      { name: 'Cream cheese', amount: '60g', calories: 200, link: '/calories-in/cream-cheese' },
      { name: 'Cocoa powder', amount: '2 tbsp', calories: 24, link: '/calories-in/cocoa-powder' },
      { name: 'Stevia', amount: 'to taste', calories: 0, link: '/calories-in/stevia' },
    ],
  },
  {
    name: 'Avocado Egg Boats',
    description: 'Baked avocado halves filled with eggs and cheese.',
    servings: 1,
    prepTime: '5 min',
    cookTime: '15 min',
    calories: 385,
    protein: 18,
    carbs: 14,
    fat: 31,
    ingredients: [
      { name: 'Avocado', amount: '1 medium (150g)', calories: 240, link: '/calories-in/avocado' },
      { name: 'Eggs', amount: '2 medium', calories: 126, link: '/calories-in/egg' },
      { name: 'Cheddar cheese', amount: '20g', calories: 80, link: '/calories-in/cheese' },
      { name: 'Bacon bits', amount: '1 tbsp', calories: 30, link: '/calories-in/bacon' },
    ],
  },
  {
    name: 'Keto Chicken Thighs',
    description: 'Crispy skin chicken thighs with garlic butter.',
    servings: 1,
    prepTime: '5 min',
    cookTime: '25 min',
    calories: 485,
    protein: 38,
    carbs: 2,
    fat: 36,
    ingredients: [
      { name: 'Chicken thighs (skin-on)', amount: '200g', calories: 440, link: '/calories-in/chicken-thigh' },
      { name: 'Butter', amount: '1 tbsp', calories: 102, link: '/calories-in/butter' },
      { name: 'Garlic', amount: '2 cloves', calories: 10, link: '/calories-in/garlic' },
    ],
  },
  {
    name: 'Salmon with Asparagus',
    description: 'Omega-3 rich salmon with butter-roasted asparagus.',
    servings: 1,
    prepTime: '8 min',
    cookTime: '15 min',
    calories: 425,
    protein: 42,
    carbs: 6,
    fat: 26,
    ingredients: [
      { name: 'Salmon fillet', amount: '180g', calories: 330, link: '/calories-in/salmon' },
      { name: 'Asparagus', amount: '150g', calories: 30, link: '/calories-in/asparagus' },
      { name: 'Butter', amount: '1 tbsp', calories: 102, link: '/calories-in/butter' },
    ],
  },
  {
    name: 'Keto Egg Muffins',
    description: 'Portable egg muffins with cheese and vegetables.',
    servings: 3,
    prepTime: '10 min',
    cookTime: '20 min',
    calories: 165,
    protein: 13,
    carbs: 4,
    fat: 11,
    ingredients: [
      { name: 'Eggs', amount: '4 large', calories: 288, link: '/calories-in/egg' },
      { name: 'Cheddar cheese', amount: '60g', calories: 240, link: '/calories-in/cheese' },
      { name: 'Spinach', amount: '100g', calories: 23, link: '/calories-in/spinach' },
      { name: 'Bell peppers', amount: '100g', calories: 26, link: '/calories-in/bell-pepper' },
    ],
  },
  {
    name: 'Bacon-Wrapped Chicken',
    description: 'Juicy chicken breast wrapped in crispy bacon.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '25 min',
    calories: 465,
    protein: 52,
    carbs: 1,
    fat: 28,
    ingredients: [
      { name: 'Chicken breast', amount: '180g', calories: 297, link: '/calories-in/chicken-breast' },
      { name: 'Bacon', amount: '3 slices (60g)', calories: 180, link: '/calories-in/bacon' },
      { name: 'Cream cheese', amount: '30g', calories: 100, link: '/calories-in/cream-cheese' },
    ],
  },
  {
    name: 'Keto Taco Bowl',
    description: 'Deconstructed taco with seasoned beef and toppings.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '12 min',
    calories: 485,
    protein: 38,
    carbs: 9,
    fat: 34,
    ingredients: [
      { name: 'Ground beef (80/20)', amount: '150g', calories: 330, link: '/calories-in/ground-beef' },
      { name: 'Cheddar cheese', amount: '40g', calories: 160, link: '/calories-in/cheese' },
      { name: 'Avocado', amount: '50g', calories: 80, link: '/calories-in/avocado' },
      { name: 'Sour cream', amount: '30g', calories: 60, link: '/calories-in/sour-cream' },
      { name: 'Lettuce', amount: '50g', calories: 8, link: '/calories-in/lettuce' },
    ],
  },
  {
    name: 'Keto Cheeseburger Casserole',
    description: 'All the flavors of a cheeseburger without the bun.',
    servings: 2,
    prepTime: '15 min',
    cookTime: '30 min',
    calories: 465,
    protein: 36,
    carbs: 6,
    fat: 34,
    ingredients: [
      { name: 'Ground beef', amount: '250g', calories: 550, link: '/calories-in/ground-beef' },
      { name: 'Cheddar cheese', amount: '100g', calories: 400, link: '/calories-in/cheese' },
      { name: 'Cream cheese', amount: '60g', calories: 200, link: '/calories-in/cream-cheese' },
      { name: 'Pickles & onion', amount: '50g', calories: 15, link: '/calories-in/pickles' },
    ],
  },
  {
    name: 'Keto Buffalo Wings',
    description: 'Crispy baked chicken wings tossed in buffalo sauce.',
    servings: 2,
    prepTime: '10 min',
    cookTime: '40 min',
    calories: 385,
    protein: 34,
    carbs: 2,
    fat: 27,
    ingredients: [
      { name: 'Chicken wings', amount: '300g', calories: 660, link: '/calories-in/chicken-wings' },
      { name: 'Buffalo sauce', amount: '3 tbsp', calories: 45, link: '/calories-in/buffalo-sauce' },
      { name: 'Butter', amount: '1 tbsp', calories: 102, link: '/calories-in/butter' },
    ],
  },
  {
    name: 'Keto Coconut Curry',
    description: 'Creamy coconut curry with chicken and vegetables.',
    servings: 2,
    prepTime: '12 min',
    cookTime: '20 min',
    calories: 425,
    protein: 32,
    carbs: 9,
    fat: 30,
    ingredients: [
      { name: 'Chicken breast', amount: '200g', calories: 330, link: '/calories-in/chicken-breast' },
      { name: 'Coconut milk (full-fat)', amount: '200ml', calories: 380, link: '/calories-in/coconut-milk' },
      { name: 'Bell peppers', amount: '150g', calories: 39, link: '/calories-in/bell-pepper' },
      { name: 'Curry paste', amount: '2 tbsp', calories: 40, link: '/calories-in/curry-paste' },
    ],
  },
  {
    name: 'Keto Pulled Pork',
    description: 'Slow-cooked pork shoulder with sugar-free BBQ sauce.',
    servings: 4,
    prepTime: '15 min',
    cookTime: '6 hours',
    calories: 395,
    protein: 42,
    carbs: 4,
    fat: 23,
    ingredients: [
      { name: 'Pork shoulder', amount: '600g', calories: 1320, link: '/calories-in/pork-shoulder' },
      { name: 'Sugar-free BBQ sauce', amount: '100ml', calories: 60, link: '/calories-in/bbq-sauce' },
      { name: 'Spices & seasonings', amount: '2 tbsp', calories: 20, link: '/calories-in/spices' },
    ],
  },
  {
    name: 'Keto Beef Stir-Fry',
    description: 'Quick stir-fry with tender beef and low-carb veggies.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '10 min',
    calories: 435,
    protein: 44,
    carbs: 8,
    fat: 25,
    ingredients: [
      { name: 'Sirloin steak', amount: '180g', calories: 320, link: '/calories-in/steak' },
      { name: 'Broccoli', amount: '150g', calories: 51, link: '/calories-in/broccoli' },
      { name: 'Bell peppers', amount: '100g', calories: 26, link: '/calories-in/bell-pepper' },
      { name: 'Sesame oil', amount: '1 tbsp', calories: 120, link: '/calories-in/sesame-oil' },
    ],
  },
  {
    name: 'Keto Cheese Crisps',
    description: 'Crispy baked cheese snacks, perfect for dipping.',
    servings: 2,
    prepTime: '5 min',
    cookTime: '8 min',
    calories: 225,
    protein: 16,
    carbs: 1,
    fat: 18,
    ingredients: [
      { name: 'Cheddar cheese (shredded)', amount: '100g', calories: 400, link: '/calories-in/cheese' },
      { name: 'Parmesan', amount: '20g', calories: 86, link: '/calories-in/parmesan' },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many carbs should I eat on keto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most people maintain ketosis with 20-50g net carbs per day. These keto recipes are designed to keep you under 10g net carbs per serving, making it easy to stay in ketosis.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are keto macros?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical keto macros are 70-75% fat, 20-25% protein, and 5-10% carbs. These recipes are formulated to fit keto macro requirements with high fat, moderate protein, and very low carbs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I meal prep keto recipes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Most keto recipes store well. Chicken, beef, and egg-based dishes can be refrigerated for 3-4 days. Fat bombs and cheese crisps can be stored for up to a week.',
      },
    },
  ],
}

export default function KetoRecipesPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/recipes" className="text-emerald-100 hover:text-white mb-4 inline-block">
              ← Back to Recipes
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Keto Recipes
            </h1>
            <p className="text-xl text-emerald-100 mb-6 max-w-3xl">
              15 keto-friendly recipes with less than 10g net carbs per serving. Perfect for ketogenic diets.
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
                  <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-emerald-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{recipe.calories}</div>
                      <div className="text-xs text-gray-600">Calories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{recipe.protein}g</div>
                      <div className="text-xs text-gray-600">Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{recipe.carbs}g</div>
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
                <h3 className="text-xl font-semibold mb-2">How many carbs should I eat on keto?</h3>
                <p className="text-gray-700">
                  Most people maintain ketosis with 20-50g net carbs per day. These keto recipes are designed to keep
                  you under 10g net carbs per serving, making it easy to stay in ketosis while enjoying delicious meals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What are keto macros?</h3>
                <p className="text-gray-700">
                  Typical keto macros are 70-75% fat, 20-25% protein, and 5-10% carbs. These recipes are formulated to
                  fit keto macro requirements with high fat, moderate protein, and very low carbs to support ketosis.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I meal prep keto recipes?</h3>
                <p className="text-gray-700">
                  Yes! Most keto recipes store well. Chicken, beef, and egg-based dishes can be refrigerated for 3-4
                  days. Fat bombs and cheese crisps can be stored in airtight containers for up to a week.
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
                href="/recipes/high-protein"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">💪</div>
                <h3 className="font-semibold text-gray-900">High-Protein</h3>
              </Link>
              <Link
                href="/recipes/low-calorie"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🥬</div>
                <h3 className="font-semibold text-gray-900">Low-Calorie</h3>
              </Link>
              <Link
                href="/recipes/dinner"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🍽️</div>
                <h3 className="font-semibold text-gray-900">Dinner</h3>
              </Link>
              <Link
                href="/recipes/snacks"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🍪</div>
                <h3 className="font-semibold text-gray-900">Snacks</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
