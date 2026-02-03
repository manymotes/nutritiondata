import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Healthy Snack Recipes - 15 Snacks with Nutrition Data | CalorieData',
  description: 'Discover 15 healthy snack recipes with complete nutrition data. Perfect for between meals with calorie counts, macros, and prep times.',
  alternates: { canonical: `${SITE_URL}/recipes/snacks` },
}

const recipes = [
  {name: 'Energy Balls', description: 'No-bake energy balls with dates, nuts, and oats.', servings: 4, prepTime: '10 min', cookTime: '0 min', calories: 165, protein: 5, carbs: 22, fat: 8, ingredients: [{name: 'Dates', amount: '100g', calories: 282, link: '/calories-in/dates'}, {name: 'Almonds', amount: '60g', calories: 348, link: '/calories-in/almonds'}, {name: 'Oats', amount: '50g', calories: 190, link: '/calories-in/oatmeal'}, {name: 'Cocoa powder', amount: '2 tbsp', calories: 24, link: '/calories-in/cocoa-powder'}]},
  {name: 'Roasted Chickpeas', description: 'Crispy roasted chickpeas with spices.', servings: 2, prepTime: '5 min', cookTime: '30 min', calories: 185, protein: 9, carbs: 30, fat: 3, ingredients: [{name: 'Chickpeas', amount: '200g', calories: 328, link: '/calories-in/chickpeas'}, {name: 'Olive oil', amount: '1 tsp', calories: 40, link: '/calories-in/olive-oil'}, {name: 'Spices', amount: '1 tsp', calories: 6, link: '/calories-in/spices'}]},
  {name: 'Yogurt Parfait', description: 'Greek yogurt layered with berries and granola.', servings: 1, prepTime: '5 min', cookTime: '0 min', calories: 285, protein: 18, carbs: 42, fat: 6, ingredients: [{name: 'Greek yogurt', amount: '150g', calories: 90, link: '/calories-in/greek-yogurt'}, {name: 'Berries', amount: '100g', calories: 57, link: '/calories-in/blueberry'}, {name: 'Granola', amount: '30g', calories: 135, link: '/calories-in/granola'}, {name: 'Honey', amount: '1 tsp', calories: 21, link: '/calories-in/honey'}]},
  {name: 'Apple Slices with Almond Butter', description: 'Crisp apple slices paired with creamy almond butter.', servings: 1, prepTime: '3 min', cookTime: '0 min', calories: 245, protein: 6, carbs: 32, fat: 12, ingredients: [{name: 'Apple', amount: '1 medium', calories: 95, link: '/calories-in/apple'}, {name: 'Almond butter', amount: '2 tbsp', calories: 196, link: '/calories-in/almond-butter'}]},
  {name: 'Hummus & Veggies', description: 'Fresh vegetable sticks with creamy hummus dip.', servings: 1, prepTime: '8 min', cookTime: '0 min', calories: 215, protein: 9, carbs: 28, fat: 8, ingredients: [{name: 'Hummus', amount: '100g', calories: 175, link: '/calories-in/hummus'}, {name: 'Carrots', amount: '100g', calories: 41, link: '/calories-in/carrot'}, {name: 'Cucumber', amount: '100g', calories: 16, link: '/calories-in/cucumber'}, {name: 'Bell peppers', amount: '80g', calories: 21, link: '/calories-in/bell-pepper'}]},
  {name: 'Trail Mix', description: 'Custom trail mix with nuts, seeds, and dried fruit.', servings: 4, prepTime: '5 min', cookTime: '0 min', calories: 225, protein: 7, carbs: 22, fat: 14, ingredients: [{name: 'Almonds', amount: '60g', calories: 348, link: '/calories-in/almonds'}, {name: 'Walnuts', amount: '40g', calories: 262, link: '/calories-in/walnuts'}, {name: 'Raisins', amount: '60g', calories: 180, link: '/calories-in/raisins'}, {name: 'Dark chocolate chips', amount: '40g', calories: 214, link: '/calories-in/dark-chocolate'}]},
  {name: 'Rice Cakes with Avocado', description: 'Crispy rice cakes topped with mashed avocado.', servings: 1, prepTime: '5 min', cookTime: '0 min', calories: 195, protein: 5, carbs: 24, fat: 10, ingredients: [{name: 'Rice cakes', amount: '2 cakes', calories: 70, link: '/calories-in/rice-cakes'}, {name: 'Avocado', amount: '60g', calories: 96, link: '/calories-in/avocado'}, {name: 'Cherry tomatoes', amount: '60g', calories: 11, link: '/calories-in/tomato'}]},
  {name: 'Protein Smoothie', description: 'Quick protein shake with banana and berries.', servings: 1, prepTime: '5 min', cookTime: '0 min', calories: 285, protein: 28, carbs: 38, fat: 3, ingredients: [{name: 'Protein powder', amount: '30g', calories: 120, link: '/calories-in/protein-shake'}, {name: 'Banana', amount: '1 medium', calories: 105, link: '/calories-in/banana'}, {name: 'Berries', amount: '80g', calories: 46, link: '/calories-in/blueberry'}, {name: 'Almond milk', amount: '250ml', calories: 50, link: '/calories-in/almond-milk'}]},
  {name: 'Cheese & Crackers', description: 'Whole grain crackers with cheese slices.', servings: 1, prepTime: '3 min', cookTime: '0 min', calories: 245, protein: 12, carbs: 24, fat: 12, ingredients: [{name: 'Whole grain crackers', amount: '30g', calories: 120, link: '/calories-in/crackers'}, {name: 'Cheddar cheese', amount: '40g', calories: 160, link: '/calories-in/cheese'}, {name: 'Grapes', amount: '80g', calories: 55, link: '/calories-in/grape'}]},
  {name: 'Edamame', description: 'Steamed edamame pods with sea salt.', servings: 1, prepTime: '2 min', cookTime: '5 min', calories: 125, protein: 11, carbs: 10, fat: 5, ingredients: [{name: 'Edamame (in pods)', amount: '150g', calories: 188, link: '/calories-in/edamame'}, {name: 'Sea salt', amount: 'to taste', calories: 0, link: '/calories-in/salt'}]},
  {name: 'Cottage Cheese & Fruit', description: 'Low-fat cottage cheese with fresh pineapple.', servings: 1, prepTime: '3 min', cookTime: '0 min', calories: 205, protein: 22, carbs: 26, fat: 2, ingredients: [{name: 'Cottage cheese (low-fat)', amount: '150g', calories: 120, link: '/calories-in/cottage-cheese'}, {name: 'Pineapple', amount: '150g', calories: 75, link: '/calories-in/pineapple'}, {name: 'Cinnamon', amount: '1 tsp', calories: 6, link: '/calories-in/cinnamon'}]},
  {name: 'Dark Chocolate & Almonds', description: 'Antioxidant-rich dark chocolate with almonds.', servings: 1, prepTime: '1 min', cookTime: '0 min', calories: 245, protein: 6, carbs: 22, fat: 16, ingredients: [{name: 'Dark chocolate (70%)', amount: '30g', calories: 161, link: '/calories-in/dark-chocolate'}, {name: 'Almonds', amount: '20g', calories: 116, link: '/calories-in/almonds'}]},
  {name: 'Protein Bars (homemade)', description: 'No-bake protein bars with oats and peanut butter.', servings: 6, prepTime: '15 min', cookTime: '0 min', calories: 225, protein: 12, carbs: 28, fat: 8, ingredients: [{name: 'Oats', amount: '200g', calories: 760, link: '/calories-in/oatmeal'}, {name: 'Protein powder', amount: '90g', calories: 360, link: '/calories-in/protein-shake'}, {name: 'Peanut butter', amount: '100g', calories: 588, link: '/calories-in/peanut-butter'}, {name: 'Honey', amount: '80g', calories: 256, link: '/calories-in/honey'}]},
  {name: 'Banana with Peanut Butter', description: 'Simple snack with banana and natural peanut butter.', servings: 1, prepTime: '2 min', cookTime: '0 min', calories: 265, protein: 8, carbs: 32, fat: 14, ingredients: [{name: 'Banana', amount: '1 medium', calories: 105, link: '/calories-in/banana'}, {name: 'Peanut butter', amount: '2 tbsp', calories: 190, link: '/calories-in/peanut-butter'}]},
  {name: 'Veggie Chips', description: 'Baked vegetable chips with kale and sweet potato.', servings: 2, prepTime: '10 min', cookTime: '20 min', calories: 145, protein: 3, carbs: 26, fat: 4, ingredients: [{name: 'Kale', amount: '100g', calories: 35, link: '/calories-in/kale'}, {name: 'Sweet potato', amount: '150g', calories: 129, link: '/calories-in/sweet-potato'}, {name: 'Olive oil', amount: '1 tbsp', calories: 120, link: '/calories-in/olive-oil'}]}
]

const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How many calories should a snack have?", "acceptedAnswer": {"@type": "Answer", "text": "A healthy snack typically contains 150-250 calories. These snack recipes range from 125-285 calories, perfect for keeping you satisfied between meals without overeating."}}, {"@type": "Question", "name": "Can I meal prep snacks?", "acceptedAnswer": {"@type": "Answer", "text": "Yes! Energy balls, roasted chickpeas, protein bars, and trail mix can be prepared in advance and stored for up to a week. Prep snacks on Sunday for the entire week."}}]}

export default function SnacksRecipesPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="bg-gradient-to-br from-pink-600 to-pink-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/recipes" className="text-pink-100 hover:text-white mb-4 inline-block">← Back to Recipes</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Healthy Snack Recipes</h1>
            <p className="text-xl text-pink-100 mb-6 max-w-3xl">15 healthy snack recipes to keep you satisfied between meals. Each recipe includes complete nutrition data, prep times, and ingredient breakdowns.</p>
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
                  <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-pink-50 rounded-lg">
                    <div className="text-center"><div className="text-2xl font-bold text-pink-600">{recipe.calories}</div><div className="text-xs text-gray-600">Calories</div></div>
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
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index}><h3 className="text-xl font-semibold mb-2">{faq.name}</h3><p className="text-gray-700">{faq.acceptedAnswer.text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Recipe Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/recipes/breakfast" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🍳</div><h3 className="font-semibold text-gray-900">Breakfast</h3></Link>
              <Link href="/recipes/lunch" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🥗</div><h3 className="font-semibold text-gray-900">Lunch</h3></Link>
              <Link href="/recipes/dinner" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🍽️</div><h3 className="font-semibold text-gray-900">Dinner</h3></Link>
              <Link href="/recipes/high-protein" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">💪</div><h3 className="font-semibold text-gray-900">High-Protein</h3></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
