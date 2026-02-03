import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Vegan Recipes - 15 Plant-Based Recipes with Nutrition Data | CalorieData',
  description: 'Discover 15 delicious vegan recipes with complete nutrition data. Plant-based meals with calorie counts, macros, and prep times.',
  alternates: { canonical: `${SITE_URL}/recipes/vegan` },
  openGraph: {
    title: 'Vegan Recipes - 15 Plant-Based Recipes',
    description: 'Discover 15 delicious vegan recipes with complete nutrition data.',
    url: `${SITE_URL}/recipes/vegan`,
  },
}

const recipes = [
  {
    name: 'Tofu Scramble', description: 'Protein-packed vegan breakfast scramble with turmeric.',
    servings: 1, prepTime: '5 min', cookTime: '8 min', calories: 285, protein: 24, carbs: 18, fat: 15,
    ingredients: [
      { name: 'Firm tofu', amount: '200g', calories: 160, link: '/calories-in/tofu' },
      { name: 'Spinach', amount: '100g', calories: 23, link: '/calories-in/spinach' },
      { name: 'Bell peppers', amount: '100g', calories: 26, link: '/calories-in/bell-pepper' },
      { name: 'Olive oil', amount: '1 tbsp', calories: 120, link: '/calories-in/olive-oil' },
    ],
  },
  {
    name: 'Buddha Bowl', description: 'Colorful bowl with quinoa, chickpeas, and tahini dressing.',
    servings: 1, prepTime: '15 min', cookTime: '20 min', calories: 465, protein: 18, carbs: 62, fat: 16,
    ingredients: [
      { name: 'Quinoa (cooked)', amount: '150g', calories: 180, link: '/calories-in/quinoa' },
      { name: 'Chickpeas', amount: '100g', calories: 164, link: '/calories-in/chickpeas' },
      { name: 'Sweet potato', amount: '150g', calories: 129, link: '/calories-in/sweet-potato' },
      { name: 'Tahini dressing', amount: '2 tbsp', calories: 178, link: '/calories-in/tahini' },
    ],
  },
  {
    name: 'Lentil Soup', description: 'Hearty and protein-rich lentil soup with vegetables.',
    servings: 2, prepTime: '10 min', cookTime: '30 min', calories: 295, protein: 16, carbs: 48, fat: 4,
    ingredients: [
      { name: 'Red lentils', amount: '150g', calories: 330, link: '/calories-in/lentils' },
      { name: 'Carrots', amount: '150g', calories: 62, link: '/calories-in/carrot' },
      { name: 'Celery', amount: '100g', calories: 16, link: '/calories-in/celery' },
      { name: 'Vegetable broth', amount: '600ml', calories: 30, link: '/calories-in/vegetable-broth' },
    ],
  },
  {
    name: 'Vegan Burger', description: 'Plant-based burger with black beans and quinoa.',
    servings: 2, prepTime: '15 min', cookTime: '12 min', calories: 325, protein: 16, carbs: 48, fat: 8,
    ingredients: [
      { name: 'Black beans', amount: '200g', calories: 240, link: '/calories-in/black-beans' },
      { name: 'Quinoa (cooked)', amount: '100g', calories: 120, link: '/calories-in/quinoa' },
      { name: 'Oats', amount: '50g', calories: 190, link: '/calories-in/oatmeal' },
      { name: 'Whole wheat bun', amount: '1 bun', calories: 140, link: '/calories-in/whole-wheat-bread' },
    ],
  },
  {
    name: 'Smoothie Bowl', description: 'Thick berry smoothie bowl with granola and seeds.',
    servings: 1, prepTime: '8 min', cookTime: '0 min', calories: 385, protein: 12, carbs: 68, fat: 9,
    ingredients: [
      { name: 'Mixed berries (frozen)', amount: '200g', calories: 114, link: '/calories-in/blueberry' },
      { name: 'Banana', amount: '1 medium', calories: 105, link: '/calories-in/banana' },
      { name: 'Almond milk', amount: '150ml', calories: 30, link: '/calories-in/almond-milk' },
      { name: 'Granola', amount: '40g', calories: 180, link: '/calories-in/granola' },
    ],
  },
  {
    name: 'Chickpea Curry', description: 'Creamy coconut chickpea curry with spinach.',
    servings: 2, prepTime: '10 min', cookTime: '25 min', calories: 385, protein: 14, carbs: 52, fat: 14,
    ingredients: [
      { name: 'Chickpeas', amount: '300g', calories: 492, link: '/calories-in/chickpeas' },
      { name: 'Coconut milk', amount: '200ml', calories: 380, link: '/calories-in/coconut-milk' },
      { name: 'Spinach', amount: '150g', calories: 35, link: '/calories-in/spinach' },
      { name: 'Curry spices', amount: '2 tbsp', calories: 40, link: '/calories-in/curry-paste' },
    ],
  },
  {
    name: 'Vegan Pad Thai', description: 'Rice noodles with tofu and peanut sauce.',
    servings: 1, prepTime: '12 min', cookTime: '10 min', calories: 465, protein: 22, carbs: 62, fat: 15,
    ingredients: [
      { name: 'Rice noodles', amount: '100g', calories: 192, link: '/calories-in/rice-noodles' },
      { name: 'Tofu', amount: '150g', calories: 120, link: '/calories-in/tofu' },
      { name: 'Peanut sauce', amount: '3 tbsp', calories: 180, link: '/calories-in/peanut-butter' },
      { name: 'Bean sprouts', amount: '100g', calories: 31, link: '/calories-in/bean-sprouts' },
    ],
  },
  {
    name: 'Stuffed Bell Peppers', description: 'Bell peppers stuffed with rice and beans.',
    servings: 2, prepTime: '15 min', cookTime: '30 min', calories: 285, protein: 12, carbs: 52, fat: 4,
    ingredients: [
      { name: 'Bell peppers', amount: '2 large', calories: 52, link: '/calories-in/bell-pepper' },
      { name: 'Brown rice (cooked)', amount: '200g', calories: 218, link: '/calories-in/brown-rice' },
      { name: 'Black beans', amount: '150g', calories: 180, link: '/calories-in/black-beans' },
      { name: 'Tomato sauce', amount: '100g', calories: 24, link: '/calories-in/tomato' },
    ],
  },
  {
    name: 'Tempeh Stir-Fry', description: 'Marinated tempeh with colorful vegetables.',
    servings: 1, prepTime: '10 min', cookTime: '12 min', calories: 365, protein: 26, carbs: 32, fat: 16,
    ingredients: [
      { name: 'Tempeh', amount: '150g', calories: 285, link: '/calories-in/tempeh' },
      { name: 'Broccoli', amount: '150g', calories: 51, link: '/calories-in/broccoli' },
      { name: 'Carrots', amount: '100g', calories: 41, link: '/calories-in/carrot' },
      { name: 'Soy sauce', amount: '2 tbsp', calories: 20, link: '/calories-in/soy-sauce' },
    ],
  },
  {
    name: 'Vegan Chili', description: 'Hearty three-bean chili with vegetables.',
    servings: 3, prepTime: '15 min', cookTime: '35 min', calories: 315, protein: 16, carbs: 56, fat: 4,
    ingredients: [
      { name: 'Mixed beans', amount: '300g', calories: 360, link: '/calories-in/black-beans' },
      { name: 'Diced tomatoes', amount: '400g', calories: 72, link: '/calories-in/tomato' },
      { name: 'Bell peppers', amount: '200g', calories: 52, link: '/calories-in/bell-pepper' },
      { name: 'Onion & spices', amount: '150g', calories: 60, link: '/calories-in/onion' },
    ],
  },
  {
    name: 'Hummus & Veggie Wrap', description: 'Whole wheat wrap with hummus and fresh vegetables.',
    servings: 1, prepTime: '8 min', cookTime: '0 min', calories: 345, protein: 14, carbs: 52, fat: 11,
    ingredients: [
      { name: 'Whole wheat tortilla', amount: '1 large', calories: 170, link: '/calories-in/tortilla' },
      { name: 'Hummus', amount: '80g', calories: 140, link: '/calories-in/hummus' },
      { name: 'Mixed vegetables', amount: '150g', calories: 45, link: '/calories-in/lettuce' },
    ],
  },
  {
    name: 'Avocado Toast', description: 'Whole grain toast with mashed avocado and tomatoes.',
    servings: 1, prepTime: '5 min', cookTime: '2 min', calories: 325, protein: 12, carbs: 38, fat: 16,
    ingredients: [
      { name: 'Whole wheat bread', amount: '2 slices', calories: 160, link: '/calories-in/whole-wheat-bread' },
      { name: 'Avocado', amount: '80g', calories: 128, link: '/calories-in/avocado' },
      { name: 'Cherry tomatoes', amount: '100g', calories: 18, link: '/calories-in/tomato' },
    ],
  },
  {
    name: 'Vegan Protein Pancakes', description: 'Fluffy pancakes made with protein powder.',
    servings: 2, prepTime: '8 min', cookTime: '10 min', calories: 285, protein: 18, carbs: 42, fat: 6,
    ingredients: [
      { name: 'Oat flour', amount: '100g', calories: 380, link: '/calories-in/oatmeal' },
      { name: 'Vegan protein powder', amount: '30g', calories: 110, link: '/calories-in/protein-shake' },
      { name: 'Banana', amount: '1 medium', calories: 105, link: '/calories-in/banana' },
      { name: 'Almond milk', amount: '150ml', calories: 30, link: '/calories-in/almond-milk' },
    ],
  },
  {
    name: 'Quinoa Tabbouleh', description: 'Fresh Middle Eastern salad with quinoa instead of bulgur.',
    servings: 2, prepTime: '15 min', cookTime: '15 min', calories: 265, protein: 10, carbs: 42, fat: 7,
    ingredients: [
      { name: 'Quinoa (cooked)', amount: '200g', calories: 240, link: '/calories-in/quinoa' },
      { name: 'Tomatoes', amount: '150g', calories: 27, link: '/calories-in/tomato' },
      { name: 'Cucumber', amount: '150g', calories: 24, link: '/calories-in/cucumber' },
      { name: 'Fresh herbs & lemon', amount: '50g', calories: 15, link: '/calories-in/lemon' },
    ],
  },
  {
    name: 'Vegan Tacos', description: 'Seasoned walnut "meat" tacos with fresh toppings.',
    servings: 2, prepTime: '12 min', cookTime: '8 min', calories: 385, protein: 14, carbs: 42, fat: 18,
    ingredients: [
      { name: 'Walnuts', amount: '100g', calories: 654, link: '/calories-in/walnuts' },
      { name: 'Corn tortillas', amount: '4 small', calories: 200, link: '/calories-in/tortilla' },
      { name: 'Lettuce & tomatoes', amount: '150g', calories: 35, link: '/calories-in/lettuce' },
      { name: 'Avocado', amount: '50g', calories: 80, link: '/calories-in/avocado' },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question', name: 'Do vegan recipes provide enough protein?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes! These vegan recipes contain 10-26g protein per serving from sources like tofu, tempeh, lentils, chickpeas, and quinoa. Combining different plant proteins ensures complete amino acid profiles.' },
    },
    {
      '@type': 'Question', name: 'Are vegan recipes good for weight loss?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, plant-based diets are associated with healthy weight management. These recipes are naturally high in fiber and nutrients while being moderate in calories.' },
    },
  ],
}

export default function VeganRecipesPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="bg-gradient-to-br from-lime-600 to-lime-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/recipes" className="text-lime-100 hover:text-white mb-4 inline-block">← Back to Recipes</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vegan Recipes</h1>
            <p className="text-xl text-lime-100 mb-6 max-w-3xl">15 plant-based recipes with complete nutrition data. Each recipe includes calorie counts, macros, and prep times.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {recipes.map((recipe, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{recipe.name}</h3>
                  <p className="text-gray-600 mb-4">{recipe.description}</p>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <span>⏱️ Prep: {recipe.prepTime}</span>
                    <span>🔥 Cook: {recipe.cookTime}</span>
                    <span>🍽️ Servings: {recipe.servings}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-lime-50 rounded-lg">
                    <div className="text-center"><div className="text-2xl font-bold text-lime-600">{recipe.calories}</div><div className="text-xs text-gray-600">Calories</div></div>
                    <div className="text-center"><div className="text-2xl font-bold text-gray-900">{recipe.protein}g</div><div className="text-xs text-gray-600">Protein</div></div>
                    <div className="text-center"><div className="text-2xl font-bold text-gray-900">{recipe.carbs}g</div><div className="text-xs text-gray-600">Carbs</div></div>
                    <div className="text-center"><div className="text-2xl font-bold text-gray-900">{recipe.fat}g</div><div className="text-xs text-gray-600">Fat</div></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Ingredients:</h4>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="flex justify-between items-start text-sm">
                          <span><Link href={ingredient.link} className="text-primary-600 hover:text-primary-700 hover:underline">{ingredient.name}</Link><span className="text-gray-600 ml-1">- {ingredient.amount}</span></span>
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

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl font-semibold mb-2">Do vegan recipes provide enough protein?</h3><p className="text-gray-700">Yes! These vegan recipes contain 10-26g protein per serving from sources like tofu, tempeh, lentils, chickpeas, and quinoa.</p></div>
              <div><h3 className="text-xl font-semibold mb-2">Are vegan recipes good for weight loss?</h3><p className="text-gray-700">Yes, plant-based diets are associated with healthy weight management. These recipes are naturally high in fiber and nutrients.</p></div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Recipe Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/recipes/high-protein" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">💪</div><h3 className="font-semibold text-gray-900">High-Protein</h3></Link>
              <Link href="/recipes/breakfast" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🍳</div><h3 className="font-semibold text-gray-900">Breakfast</h3></Link>
              <Link href="/recipes/lunch" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🥗</div><h3 className="font-semibold text-gray-900">Lunch</h3></Link>
              <Link href="/recipes/dinner" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🍽️</div><h3 className="font-semibold text-gray-900">Dinner</h3></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
