import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Low-Calorie Recipes - 15 Recipes Under 400 Calories | CalorieData',
  description: 'Discover 15 delicious low-calorie recipes under 400 calories. Perfect for weight loss with complete nutrition data, ingredients, and prep times.',
  alternates: {
    canonical: `${SITE_URL}/recipes/low-calorie`,
  },
  openGraph: {
    title: 'Low-Calorie Recipes - 15 Recipes Under 400 Calories',
    description: 'Discover 15 delicious low-calorie recipes perfect for weight loss with detailed calorie counts.',
    url: `${SITE_URL}/recipes/low-calorie`,
  },
}

const recipes = [
  {
    name: 'Veggie Stir-Fry with Tofu',
    description: 'Colorful vegetable stir-fry with protein-rich tofu in a light sauce.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '10 min',
    calories: 285,
    protein: 18,
    carbs: 32,
    fat: 11,
    ingredients: [
      { name: 'Firm tofu', amount: '120g', calories: 96, link: '/calories-in/tofu' },
      { name: 'Broccoli', amount: '150g', calories: 51, link: '/calories-in/broccoli' },
      { name: 'Bell peppers', amount: '100g', calories: 26, link: '/calories-in/bell-pepper' },
      { name: 'Carrots', amount: '80g', calories: 33, link: '/calories-in/carrot' },
      { name: 'Soy sauce & ginger', amount: '2 tbsp', calories: 20, link: '/calories-in/soy-sauce' },
      { name: 'Sesame oil', amount: '1 tsp', calories: 40, link: '/calories-in/sesame-oil' },
    ],
  },
  {
    name: 'Mediterranean Salad Bowl',
    description: 'Fresh Greek-inspired salad with chickpeas and feta.',
    servings: 1,
    prepTime: '8 min',
    cookTime: '0 min',
    calories: 295,
    protein: 14,
    carbs: 36,
    fat: 11,
    ingredients: [
      { name: 'Mixed greens', amount: '100g', calories: 25, link: '/calories-in/lettuce' },
      { name: 'Chickpeas', amount: '80g', calories: 131, link: '/calories-in/chickpeas' },
      { name: 'Cherry tomatoes', amount: '100g', calories: 18, link: '/calories-in/tomato' },
      { name: 'Cucumber', amount: '100g', calories: 16, link: '/calories-in/cucumber' },
      { name: 'Feta cheese', amount: '30g', calories: 80, link: '/calories-in/feta-cheese' },
      { name: 'Olive oil & lemon', amount: '1 tsp', calories: 45, link: '/calories-in/olive-oil' },
    ],
  },
  {
    name: 'Zucchini Noodle Soup',
    description: 'Light and comforting soup with zucchini noodles and vegetables.',
    servings: 2,
    prepTime: '10 min',
    cookTime: '15 min',
    calories: 145,
    protein: 8,
    carbs: 22,
    fat: 3,
    ingredients: [
      { name: 'Zucchini (spiralized)', amount: '300g', calories: 51, link: '/calories-in/zucchini' },
      { name: 'Chicken broth', amount: '500ml', calories: 40, link: '/calories-in/chicken-broth' },
      { name: 'Carrots', amount: '100g', calories: 41, link: '/calories-in/carrot' },
      { name: 'Celery', amount: '100g', calories: 16, link: '/calories-in/celery' },
      { name: 'Onion & garlic', amount: '50g', calories: 20, link: '/calories-in/onion' },
    ],
  },
  {
    name: 'Grilled Chicken Salad',
    description: 'Lean grilled chicken over fresh greens with balsamic vinaigrette.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '12 min',
    calories: 285,
    protein: 36,
    carbs: 18,
    fat: 8,
    ingredients: [
      { name: 'Chicken breast', amount: '120g', calories: 198, link: '/calories-in/chicken-breast' },
      { name: 'Mixed greens', amount: '150g', calories: 38, link: '/calories-in/lettuce' },
      { name: 'Cherry tomatoes', amount: '100g', calories: 18, link: '/calories-in/tomato' },
      { name: 'Cucumber', amount: '100g', calories: 16, link: '/calories-in/cucumber' },
      { name: 'Balsamic vinegar', amount: '2 tbsp', calories: 28, link: '/calories-in/balsamic-vinegar' },
    ],
  },
  {
    name: 'Cauliflower Fried Rice',
    description: 'Low-carb alternative to fried rice with riced cauliflower.',
    servings: 1,
    prepTime: '8 min',
    cookTime: '10 min',
    calories: 195,
    protein: 12,
    carbs: 22,
    fat: 7,
    ingredients: [
      { name: 'Cauliflower rice', amount: '250g', calories: 63, link: '/calories-in/cauliflower' },
      { name: 'Egg', amount: '1 large', calories: 72, link: '/calories-in/egg' },
      { name: 'Peas & carrots', amount: '100g', calories: 50, link: '/calories-in/peas' },
      { name: 'Soy sauce', amount: '1 tbsp', calories: 10, link: '/calories-in/soy-sauce' },
      { name: 'Sesame oil', amount: '1/2 tsp', calories: 20, link: '/calories-in/sesame-oil' },
    ],
  },
  {
    name: 'Shrimp & Asparagus',
    description: 'Light and elegant shrimp sautéed with tender asparagus.',
    servings: 1,
    prepTime: '8 min',
    cookTime: '8 min',
    calories: 220,
    protein: 32,
    carbs: 12,
    fat: 5,
    ingredients: [
      { name: 'Shrimp', amount: '150g', calories: 150, link: '/calories-in/shrimp' },
      { name: 'Asparagus', amount: '200g', calories: 40, link: '/calories-in/asparagus' },
      { name: 'Garlic & lemon', amount: '2 cloves', calories: 10, link: '/calories-in/garlic' },
      { name: 'Olive oil', amount: '1/2 tsp', calories: 20, link: '/calories-in/olive-oil' },
    ],
  },
  {
    name: 'Egg White Veggie Omelet',
    description: 'Fluffy egg white omelet loaded with colorful vegetables.',
    servings: 1,
    prepTime: '5 min',
    cookTime: '6 min',
    calories: 165,
    protein: 22,
    carbs: 14,
    fat: 3,
    ingredients: [
      { name: 'Egg whites', amount: '5 large', calories: 85, link: '/calories-in/egg' },
      { name: 'Spinach', amount: '100g', calories: 23, link: '/calories-in/spinach' },
      { name: 'Mushrooms', amount: '80g', calories: 22, link: '/calories-in/mushroom' },
      { name: 'Tomatoes', amount: '80g', calories: 14, link: '/calories-in/tomato' },
      { name: 'Bell peppers', amount: '50g', calories: 13, link: '/calories-in/bell-pepper' },
    ],
  },
  {
    name: 'Baked Cod with Veggies',
    description: 'Flaky white fish baked with colorful Mediterranean vegetables.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '15 min',
    calories: 265,
    protein: 38,
    carbs: 18,
    fat: 5,
    ingredients: [
      { name: 'Cod fillet', amount: '180g', calories: 162, link: '/calories-in/cod' },
      { name: 'Cherry tomatoes', amount: '150g', calories: 27, link: '/calories-in/tomato' },
      { name: 'Zucchini', amount: '150g', calories: 26, link: '/calories-in/zucchini' },
      { name: 'Lemon & herbs', amount: '1 lemon', calories: 12, link: '/calories-in/lemon' },
      { name: 'Olive oil', amount: '1 tsp', calories: 40, link: '/calories-in/olive-oil' },
    ],
  },
  {
    name: 'Turkey Lettuce Wraps',
    description: 'Low-carb lettuce wraps filled with seasoned ground turkey.',
    servings: 2,
    prepTime: '8 min',
    cookTime: '10 min',
    calories: 245,
    protein: 28,
    carbs: 12,
    fat: 9,
    ingredients: [
      { name: 'Ground turkey (lean)', amount: '150g', calories: 225, link: '/calories-in/turkey' },
      { name: 'Lettuce leaves', amount: '100g', calories: 15, link: '/calories-in/lettuce' },
      { name: 'Bell peppers', amount: '100g', calories: 26, link: '/calories-in/bell-pepper' },
      { name: 'Onion', amount: '50g', calories: 20, link: '/calories-in/onion' },
      { name: 'Asian sauce', amount: '2 tbsp', calories: 30, link: '/calories-in/soy-sauce' },
    ],
  },
  {
    name: 'Spinach & Mushroom Frittata',
    description: 'Light Italian-style egg dish packed with vegetables.',
    servings: 2,
    prepTime: '8 min',
    cookTime: '12 min',
    calories: 185,
    protein: 16,
    carbs: 8,
    fat: 11,
    ingredients: [
      { name: 'Eggs', amount: '3 large', calories: 216, link: '/calories-in/egg' },
      { name: 'Spinach', amount: '150g', calories: 35, link: '/calories-in/spinach' },
      { name: 'Mushrooms', amount: '100g', calories: 22, link: '/calories-in/mushroom' },
      { name: 'Onion', amount: '50g', calories: 20, link: '/calories-in/onion' },
      { name: 'Olive oil', amount: '1 tsp', calories: 40, link: '/calories-in/olive-oil' },
    ],
  },
  {
    name: 'Cucumber & Avocado Rolls',
    description: 'Refreshing sushi-inspired rolls with creamy avocado.',
    servings: 1,
    prepTime: '12 min',
    cookTime: '0 min',
    calories: 195,
    protein: 4,
    carbs: 22,
    fat: 11,
    ingredients: [
      { name: 'Cucumber', amount: '200g', calories: 32, link: '/calories-in/cucumber' },
      { name: 'Avocado', amount: '60g', calories: 96, link: '/calories-in/avocado' },
      { name: 'Carrot (julienned)', amount: '50g', calories: 21, link: '/calories-in/carrot' },
      { name: 'Nori seaweed', amount: '2 sheets', calories: 10, link: '/calories-in/seaweed' },
      { name: 'Rice vinegar', amount: '1 tbsp', calories: 3, link: '/calories-in/rice-vinegar' },
    ],
  },
  {
    name: 'Tomato Basil Soup',
    description: 'Creamy tomato soup without the cream - naturally light.',
    servings: 2,
    prepTime: '10 min',
    cookTime: '20 min',
    calories: 125,
    protein: 5,
    carbs: 24,
    fat: 2,
    ingredients: [
      { name: 'Tomatoes', amount: '400g', calories: 72, link: '/calories-in/tomato' },
      { name: 'Vegetable broth', amount: '500ml', calories: 25, link: '/calories-in/vegetable-broth' },
      { name: 'Onion', amount: '100g', calories: 40, link: '/calories-in/onion' },
      { name: 'Garlic & basil', amount: '3 cloves', calories: 15, link: '/calories-in/garlic' },
      { name: 'Olive oil', amount: '1/2 tsp', calories: 20, link: '/calories-in/olive-oil' },
    ],
  },
  {
    name: 'Lemon Herb Tilapia',
    description: 'Delicate white fish with bright citrus and herb flavors.',
    servings: 1,
    prepTime: '5 min',
    cookTime: '10 min',
    calories: 235,
    protein: 36,
    carbs: 6,
    fat: 7,
    ingredients: [
      { name: 'Tilapia fillet', amount: '180g', calories: 180, link: '/calories-in/tilapia' },
      { name: 'Lemon', amount: '1 whole', calories: 17, link: '/calories-in/lemon' },
      { name: 'Fresh herbs', amount: '2 tbsp', calories: 5, link: '/calories-in/herbs' },
      { name: 'Olive oil', amount: '1 tsp', calories: 40, link: '/calories-in/olive-oil' },
    ],
  },
  {
    name: 'Cabbage Slaw Bowl',
    description: 'Crunchy Asian-inspired slaw with lean protein.',
    servings: 1,
    prepTime: '10 min',
    cookTime: '0 min',
    calories: 215,
    protein: 14,
    carbs: 28,
    fat: 6,
    ingredients: [
      { name: 'Cabbage (shredded)', amount: '200g', calories: 50, link: '/calories-in/cabbage' },
      { name: 'Edamame', amount: '80g', calories: 100, link: '/calories-in/edamame' },
      { name: 'Carrots', amount: '80g', calories: 33, link: '/calories-in/carrot' },
      { name: 'Rice vinegar dressing', amount: '2 tbsp', calories: 30, link: '/calories-in/rice-vinegar' },
      { name: 'Sesame seeds', amount: '1 tsp', calories: 17, link: '/calories-in/sesame-seeds' },
    ],
  },
  {
    name: 'Berry Smoothie Bowl',
    description: 'Thick and creamy smoothie bowl topped with fresh fruit.',
    servings: 1,
    prepTime: '5 min',
    cookTime: '0 min',
    calories: 265,
    protein: 12,
    carbs: 48,
    fat: 4,
    ingredients: [
      { name: 'Mixed berries (frozen)', amount: '200g', calories: 114, link: '/calories-in/blueberry' },
      { name: 'Greek yogurt (nonfat)', amount: '150g', calories: 90, link: '/calories-in/greek-yogurt' },
      { name: 'Banana', amount: '1/2 medium', calories: 53, link: '/calories-in/banana' },
      { name: 'Chia seeds', amount: '1 tsp', calories: 20, link: '/calories-in/chia-seeds' },
      { name: 'Honey', amount: '1/2 tbsp', calories: 32, link: '/calories-in/honey' },
    ],
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
        text: 'Most people need a 500-750 calorie deficit for healthy weight loss of 1-1.5 lbs per week. These low-calorie recipes help you stay satisfied while maintaining a calorie deficit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will low-calorie meals keep me full?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! These recipes are designed with high-volume, low-calorie foods like vegetables and lean proteins that keep you satisfied. Adding fiber and protein helps maintain fullness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I eat low-calorie recipes every day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but ensure you\'re meeting your minimum calorie needs (typically 1,200+ for women, 1,500+ for men). Mix these recipes with higher-calorie options to meet your total daily needs.',
      },
    },
  ],
}

export default function LowCalorieRecipesPage() {
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
            <Link href="/recipes" className="text-green-100 hover:text-white mb-4 inline-block">
              ← Back to Recipes
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Low-Calorie Recipes
            </h1>
            <p className="text-xl text-green-100 mb-6 max-w-3xl">
              15 delicious low-calorie recipes under 400 calories. Perfect for weight loss while staying satisfied.
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
                  <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-green-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{recipe.calories}</div>
                      <div className="text-xs text-gray-600">Calories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{recipe.protein}g</div>
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
                <h3 className="text-xl font-semibold mb-2">How many calories should I eat for weight loss?</h3>
                <p className="text-gray-700">
                  Most people need a 500-750 calorie deficit for healthy weight loss of 1-1.5 lbs per week. These
                  low-calorie recipes help you stay satisfied while maintaining a calorie deficit. Use our calorie
                  calculator to determine your specific needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Will low-calorie meals keep me full?</h3>
                <p className="text-gray-700">
                  Yes! These recipes are designed with high-volume, low-calorie foods like vegetables and lean proteins
                  that keep you satisfied. The combination of fiber, protein, and water content helps maintain fullness
                  between meals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I eat low-calorie recipes every day?</h3>
                <p className="text-gray-700">
                  Yes, but ensure you're meeting your minimum calorie needs (typically 1,200+ for women, 1,500+ for
                  men). Mix these recipes with higher-calorie options throughout the day to meet your total daily
                  calorie and nutrient requirements.
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
                href="/recipes/vegan"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🌱</div>
                <h3 className="font-semibold text-gray-900">Vegan</h3>
              </Link>
              <Link
                href="/recipes/lunch"
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-2">🥗</div>
                <h3 className="font-semibold text-gray-900">Lunch</h3>
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
