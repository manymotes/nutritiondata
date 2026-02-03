import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Lunch Recipes - 15 Midday Meals with Nutrition Data | CalorieData',
  description: 'Discover 15 satisfying lunch recipes with complete nutrition data. Healthy lunches with calorie counts, macros, and prep times.',
  alternates: { canonical: `${SITE_URL}/recipes/lunch` },
}

const recipes = [
  {name: 'Chicken Caesar Salad', description: 'Classic Caesar with grilled chicken and parmesan.', servings: 1, prepTime: '10 min', cookTime: '12 min', calories: 385, protein: 38, carbs: 18, fat: 20, ingredients: [{name: 'Chicken breast', amount: '150g', calories: 248, link: '/calories-in/chicken-breast'}, {name: 'Romaine lettuce', amount: '150g', calories: 25, link: '/calories-in/lettuce'}, {name: 'Parmesan', amount: '30g', calories: 129, link: '/calories-in/parmesan'}, {name: 'Caesar dressing', amount: '2 tbsp', calories: 150, link: '/calories-in/caesar-dressing'}]},
  {name: 'Turkey & Avocado Sandwich', description: 'Whole grain sandwich with lean turkey and avocado.', servings: 1, prepTime: '8 min', cookTime: '0 min', calories: 425, protein: 32, carbs: 42, fat: 14, ingredients: [{name: 'Whole wheat bread', amount: '2 slices', calories: 160, link: '/calories-in/whole-wheat-bread'}, {name: 'Turkey breast', amount: '100g', calories: 150, link: '/calories-in/turkey'}, {name: 'Avocado', amount: '50g', calories: 80, link: '/calories-in/avocado'}, {name: 'Lettuce & tomato', amount: '80g', calories: 18, link: '/calories-in/tomato'}]},
  {name: 'Quinoa Power Bowl', description: 'Quinoa bowl with roasted vegetables and chickpeas.', servings: 1, prepTime: '15 min', cookTime: '25 min', calories: 465, protein: 18, carbs: 68, fat: 14, ingredients: [{name: 'Quinoa (cooked)', amount: '150g', calories: 180, link: '/calories-in/quinoa'}, {name: 'Chickpeas', amount: '100g', calories: 164, link: '/calories-in/chickpeas'}, {name: 'Sweet potato', amount: '150g', calories: 129, link: '/calories-in/sweet-potato'}, {name: 'Tahini dressing', amount: '2 tbsp', calories: 178, link: '/calories-in/tahini'}]},
  {name: 'Tuna Salad Wrap', description: 'Whole wheat wrap with protein-packed tuna salad.', servings: 1, prepTime: '10 min', cookTime: '0 min', calories: 385, protein: 34, carbs: 38, fat: 12, ingredients: [{name: 'Tuna (canned)', amount: '150g', calories: 165, link: '/calories-in/tuna'}, {name: 'Whole wheat tortilla', amount: '1 large', calories: 170, link: '/calories-in/tortilla'}, {name: 'Greek yogurt', amount: '50g', calories: 30, link: '/calories-in/greek-yogurt'}, {name: 'Mixed greens', amount: '80g', calories: 20, link: '/calories-in/lettuce'}]},
  {name: 'Grain Bowl with Chicken', description: 'Brown rice bowl with grilled chicken and vegetables.', servings: 1, prepTime: '12 min', cookTime: '20 min', calories: 445, protein: 36, carbs: 52, fat: 11, ingredients: [{name: 'Brown rice (cooked)', amount: '150g', calories: 164, link: '/calories-in/brown-rice'}, {name: 'Chicken breast', amount: '120g', calories: 198, link: '/calories-in/chicken-breast'}, {name: 'Broccoli', amount: '150g', calories: 51, link: '/calories-in/broccoli'}, {name: 'Teriyaki sauce', amount: '2 tbsp', calories: 60, link: '/calories-in/teriyaki-sauce'}]},
  {name: 'Mediterranean Wrap', description: 'Hummus wrap with feta, cucumber, and tomatoes.', servings: 1, prepTime: '8 min', cookTime: '0 min', calories: 365, protein: 16, carbs: 48, fat: 13, ingredients: [{name: 'Whole wheat tortilla', amount: '1 large', calories: 170, link: '/calories-in/tortilla'}, {name: 'Hummus', amount: '80g', calories: 140, link: '/calories-in/hummus'}, {name: 'Feta cheese', amount: '40g', calories: 107, link: '/calories-in/feta-cheese'}, {name: 'Vegetables', amount: '150g', calories: 40, link: '/calories-in/cucumber'}]},
  {name: 'Salmon Salad', description: 'Mixed greens with baked salmon and lemon vinaigrette.', servings: 1, prepTime: '10 min', cookTime: '15 min', calories: 385, protein: 38, carbs: 16, fat: 20, ingredients: [{name: 'Salmon fillet', amount: '150g', calories: 275, link: '/calories-in/salmon'}, {name: 'Mixed greens', amount: '150g', calories: 38, link: '/calories-in/lettuce'}, {name: 'Cherry tomatoes', amount: '100g', calories: 18, link: '/calories-in/tomato'}, {name: 'Olive oil dressing', amount: '1 tbsp', calories: 120, link: '/calories-in/olive-oil'}]},
  {name: 'Veggie Burger', description: 'Plant-based burger with whole wheat bun and toppings.', servings: 1, prepTime: '10 min', cookTime: '12 min', calories: 385, protein: 20, carbs: 52, fat: 12, ingredients: [{name: 'Veggie patty', amount: '1 patty', calories: 180, link: '/calories-in/veggie-burger'}, {name: 'Whole wheat bun', amount: '1 bun', calories: 140, link: '/calories-in/whole-wheat-bread'}, {name: 'Avocado', amount: '40g', calories: 64, link: '/calories-in/avocado'}, {name: 'Lettuce & tomato', amount: '80g', calories: 18, link: '/calories-in/lettuce'}]},
  {name: 'Egg Salad Sandwich', description: 'Protein-rich egg salad on whole grain bread.', servings: 1, prepTime: '10 min', cookTime: '12 min', calories: 385, protein: 22, carbs: 38, fat: 16, ingredients: [{name: 'Eggs (hard-boiled)', amount: '3 large', calories: 216, link: '/calories-in/egg'}, {name: 'Whole wheat bread', amount: '2 slices', calories: 160, link: '/calories-in/whole-wheat-bread'}, {name: 'Greek yogurt', amount: '40g', calories: 24, link: '/calories-in/greek-yogurt'}, {name: 'Lettuce', amount: '50g', calories: 8, link: '/calories-in/lettuce'}]},
  {name: 'Chicken Pesto Pasta', description: 'Whole wheat pasta with chicken and basil pesto.', servings: 1, prepTime: '10 min', cookTime: '15 min', calories: 485, protein: 38, carbs: 52, fat: 16, ingredients: [{name: 'Whole wheat pasta', amount: '80g', calories: 280, link: '/calories-in/pasta'}, {name: 'Chicken breast', amount: '120g', calories: 198, link: '/calories-in/chicken-breast'}, {name: 'Pesto sauce', amount: '3 tbsp', calories: 180, link: '/calories-in/pesto'}, {name: 'Cherry tomatoes', amount: '100g', calories: 18, link: '/calories-in/tomato'}]},
  {name: 'Greek Salad with Chicken', description: 'Traditional Greek salad topped with grilled chicken.', servings: 1, prepTime: '12 min', cookTime: '12 min', calories: 365, protein: 34, carbs: 18, fat: 19, ingredients: [{name: 'Chicken breast', amount: '120g', calories: 198, link: '/calories-in/chicken-breast'}, {name: 'Mixed greens', amount: '150g', calories: 38, link: '/calories-in/lettuce'}, {name: 'Feta cheese', amount: '40g', calories: 107, link: '/calories-in/feta-cheese'}, {name: 'Olives & dressing', amount: '50g', calories: 80, link: '/calories-in/olives'}]},
  {name: 'Burrito Bowl', description: 'Deconstructed burrito with rice, beans, and toppings.', servings: 1, prepTime: '12 min', cookTime: '15 min', calories: 465, protein: 24, carbs: 68, fat: 12, ingredients: [{name: 'Brown rice (cooked)', amount: '150g', calories: 164, link: '/calories-in/brown-rice'}, {name: 'Black beans', amount: '150g', calories: 180, link: '/calories-in/black-beans'}, {name: 'Chicken breast', amount: '80g', calories: 132, link: '/calories-in/chicken-breast'}, {name: 'Avocado & salsa', amount: '80g', calories: 80, link: '/calories-in/avocado'}]},
  {name: 'Caprese Sandwich', description: 'Fresh mozzarella, tomato, and basil on ciabatta.', servings: 1, prepTime: '8 min', cookTime: '0 min', calories: 385, protein: 20, carbs: 42, fat: 16, ingredients: [{name: 'Ciabatta bread', amount: '100g', calories: 260, link: '/calories-in/bread'}, {name: 'Fresh mozzarella', amount: '80g', calories: 224, link: '/calories-in/mozzarella'}, {name: 'Tomato', amount: '150g', calories: 27, link: '/calories-in/tomato'}, {name: 'Basil & balsamic', amount: '20g', calories: 15, link: '/calories-in/balsamic-vinegar'}]},
  {name: 'Shrimp Salad', description: 'Light salad with grilled shrimp and citrus dressing.', servings: 1, prepTime: '10 min', cookTime: '8 min', calories: 285, protein: 34, carbs: 18, fat: 9, ingredients: [{name: 'Shrimp', amount: '180g', calories: 180, link: '/calories-in/shrimp'}, {name: 'Mixed greens', amount: '150g', calories: 38, link: '/calories-in/lettuce'}, {name: 'Avocado', amount: '40g', calories: 64, link: '/calories-in/avocado'}, {name: 'Citrus dressing', amount: '2 tbsp', calories: 60, link: '/calories-in/lemon'}]},
  {name: 'Falafel Pita', description: 'Whole wheat pita stuffed with falafel and tahini.', servings: 1, prepTime: '10 min', cookTime: '15 min', calories: 425, protein: 18, carbs: 58, fat: 14, ingredients: [{name: 'Whole wheat pita', amount: '1 large', calories: 170, link: '/calories-in/pita-bread'}, {name: 'Falafel', amount: '4 pieces', calories: 240, link: '/calories-in/falafel'}, {name: 'Tahini', amount: '2 tbsp', calories: 178, link: '/calories-in/tahini'}, {name: 'Vegetables', amount: '100g', calories: 30, link: '/calories-in/cucumber'}]}
]

const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How many calories should lunch have?", "acceptedAnswer": {"@type": "Answer", "text": "A healthy lunch typically contains 400-600 calories, depending on your daily needs. These recipes range from 285-485 calories, perfect for balanced midday nutrition."}}, {"@type": "Question", "name": "Can I meal prep these lunch recipes?", "acceptedAnswer": {"@type": "Answer", "text": "Yes! Most lunch recipes store well. Grain bowls, salads (dressing separate), and wraps can be prepped for 3-4 days. Keep ingredients separate when possible for best freshness."}}]}

export default function LunchRecipesPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/recipes" className="text-blue-100 hover:text-white mb-4 inline-block">← Back to Recipes</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Lunch Recipes</h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl">15 satisfying lunch recipes to power through your day. Each recipe includes complete nutrition data, prep times, and ingredient breakdowns.</p>
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
                  <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-blue-50 rounded-lg">
                    <div className="text-center"><div className="text-2xl font-bold text-blue-600">{recipe.calories}</div><div className="text-xs text-gray-600">Calories</div></div>
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
              <Link href="/recipes/dinner" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🍽️</div><h3 className="font-semibold text-gray-900">Dinner</h3></Link>
              <Link href="/recipes/high-protein" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">💪</div><h3 className="font-semibold text-gray-900">High-Protein</h3></Link>
              <Link href="/recipes/snacks" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🍪</div><h3 className="font-semibold text-gray-900">Snacks</h3></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
