import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Dinner Recipes - 15 Evening Meals with Nutrition Data | CalorieData',
  description: 'Discover 15 wholesome dinner recipes with complete nutrition data. Healthy dinners with calorie counts, macros, and prep times.',
  alternates: { canonical: `${SITE_URL}/recipes/dinner` },
}

const recipes = [
  {name: 'Baked Salmon with Veggies', description: 'Oven-baked salmon with roasted vegetables.', servings: 1, prepTime: '10 min', cookTime: '20 min', calories: 425, protein: 42, carbs: 24, fat: 20, ingredients: [{name: 'Salmon fillet', amount: '180g', calories: 330, link: '/calories-in/salmon'}, {name: 'Broccoli', amount: '150g', calories: 51, link: '/calories-in/broccoli'}, {name: 'Sweet potato', amount: '150g', calories: 129, link: '/calories-in/sweet-potato'}, {name: 'Olive oil', amount: '1 tbsp', calories: 120, link: '/calories-in/olive-oil'}]},
  {name: 'Chicken Stir-Fry', description: 'Quick stir-fry with chicken and colorful vegetables.', servings: 1, prepTime: '12 min', cookTime: '10 min', calories: 385, protein: 38, carbs: 32, fat: 12, ingredients: [{name: 'Chicken breast', amount: '150g', calories: 248, link: '/calories-in/chicken-breast'}, {name: 'Mixed vegetables', amount: '250g', calories: 88, link: '/calories-in/broccoli'}, {name: 'Brown rice', amount: '100g cooked', calories: 109, link: '/calories-in/brown-rice'}, {name: 'Soy sauce', amount: '2 tbsp', calories: 20, link: '/calories-in/soy-sauce'}]},
  {name: 'One-Pot Pasta Primavera', description: 'Easy one-pot pasta loaded with spring vegetables.', servings: 2, prepTime: '10 min', cookTime: '15 min', calories: 385, protein: 16, carbs: 62, fat: 9, ingredients: [{name: 'Whole wheat pasta', amount: '160g', calories: 560, link: '/calories-in/pasta'}, {name: 'Mixed vegetables', amount: '300g', calories: 105, link: '/calories-in/bell-pepper'}, {name: 'Tomatoes', amount: '200g', calories: 36, link: '/calories-in/tomato'}, {name: 'Parmesan', amount: '40g', calories: 172, link: '/calories-in/parmesan'}]},
  {name: 'Sheet Pan Chicken & Veggies', description: 'Easy sheet pan dinner with chicken and vegetables.', servings: 2, prepTime: '15 min', cookTime: '30 min', calories: 385, protein: 36, carbs: 28, fat: 14, ingredients: [{name: 'Chicken thighs', amount: '250g', calories: 550, link: '/calories-in/chicken-thigh'}, {name: 'Brussels sprouts', amount: '200g', calories: 86, link: '/calories-in/brussels-sprouts'}, {name: 'Carrots', amount: '150g', calories: 62, link: '/calories-in/carrot'}, {name: 'Olive oil', amount: '1 tbsp', calories: 120, link: '/calories-in/olive-oil'}]},
  {name: 'Slow Cooker Beef Stew', description: 'Hearty beef stew with vegetables and herbs.', servings: 4, prepTime: '20 min', cookTime: '6 hours', calories: 385, protein: 32, carbs: 38, fat: 12, ingredients: [{name: 'Beef chuck', amount: '400g', calories: 880, link: '/calories-in/beef'}, {name: 'Potatoes', amount: '300g', calories: 231, link: '/calories-in/potato'}, {name: 'Carrots', amount: '200g', calories: 82, link: '/calories-in/carrot'}, {name: 'Beef broth', amount: '800ml', calories: 64, link: '/calories-in/beef-broth'}]},
  {name: 'Grilled Steak with Asparagus', description: 'Perfectly grilled steak with tender asparagus.', servings: 1, prepTime: '10 min', cookTime: '15 min', calories: 465, protein: 46, carbs: 12, fat: 26, ingredients: [{name: 'Sirloin steak', amount: '200g', calories: 356, link: '/calories-in/steak'}, {name: 'Asparagus', amount: '200g', calories: 40, link: '/calories-in/asparagus'}, {name: 'Butter', amount: '1 tbsp', calories: 102, link: '/calories-in/butter'}]},
  {name: 'Lemon Herb Chicken', description: 'Baked chicken breast with lemon and fresh herbs.', servings: 1, prepTime: '8 min', cookTime: '25 min', calories: 325, protein: 48, carbs: 8, fat: 11, ingredients: [{name: 'Chicken breast', amount: '200g', calories: 330, link: '/calories-in/chicken-breast'}, {name: 'Lemon', amount: '1 whole', calories: 17, link: '/calories-in/lemon'}, {name: 'Green beans', amount: '200g', calories: 62, link: '/calories-in/green-beans'}, {name: 'Olive oil', amount: '1 tsp', calories: 40, link: '/calories-in/olive-oil'}]},
  {name: 'Turkey Meatballs & Zoodles', description: 'Lean turkey meatballs over zucchini noodles.', servings: 2, prepTime: '15 min', cookTime: '20 min', calories: 325, protein: 38, carbs: 18, fat: 12, ingredients: [{name: 'Ground turkey', amount: '250g', calories: 375, link: '/calories-in/turkey'}, {name: 'Zucchini noodles', amount: '400g', calories: 68, link: '/calories-in/zucchini'}, {name: 'Marinara sauce', amount: '200g', calories: 100, link: '/calories-in/marinara-sauce'}, {name: 'Parmesan', amount: '30g', calories: 129, link: '/calories-in/parmesan'}]},
  {name: 'Shrimp Scampi', description: 'Garlicky shrimp in white wine butter sauce over pasta.', servings: 1, prepTime: '10 min', cookTime: '12 min', calories: 465, protein: 38, carbs: 48, fat: 14, ingredients: [{name: 'Shrimp', amount: '200g', calories: 200, link: '/calories-in/shrimp'}, {name: 'Whole wheat pasta', amount: '80g', calories: 280, link: '/calories-in/pasta'}, {name: 'Butter', amount: '1 tbsp', calories: 102, link: '/calories-in/butter'}, {name: 'Garlic & lemon', amount: '3 cloves', calories: 20, link: '/calories-in/garlic'}]},
  {name: 'Vegetarian Chili', description: 'Hearty three-bean chili loaded with vegetables.', servings: 3, prepTime: '15 min', cookTime: '35 min', calories: 325, protein: 16, carbs: 58, fat: 5, ingredients: [{name: 'Mixed beans', amount: '400g', calories: 480, link: '/calories-in/black-beans'}, {name: 'Diced tomatoes', amount: '400g', calories: 72, link: '/calories-in/tomato'}, {name: 'Bell peppers', amount: '200g', calories: 52, link: '/calories-in/bell-pepper'}, {name: 'Onion & spices', amount: '150g', calories: 60, link: '/calories-in/onion'}]},
  {name: 'Teriyaki Salmon Bowl', description: 'Teriyaki-glazed salmon over rice with edamame.', servings: 1, prepTime: '10 min', cookTime: '15 min', calories: 485, protein: 42, carbs: 52, fat: 14, ingredients: [{name: 'Salmon fillet', amount: '150g', calories: 275, link: '/calories-in/salmon'}, {name: 'Brown rice', amount: '150g cooked', calories: 164, link: '/calories-in/brown-rice'}, {name: 'Edamame', amount: '100g', calories: 125, link: '/calories-in/edamame'}, {name: 'Teriyaki sauce', amount: '3 tbsp', calories: 90, link: '/calories-in/teriyaki-sauce'}]},
  {name: 'Stuffed Bell Peppers', description: 'Bell peppers stuffed with ground turkey and quinoa.', servings: 2, prepTime: '15 min', cookTime: '35 min', calories: 365, protein: 32, carbs: 38, fat: 11, ingredients: [{name: 'Bell peppers', amount: '2 large', calories: 52, link: '/calories-in/bell-pepper'}, {name: 'Ground turkey', amount: '200g', calories: 300, link: '/calories-in/turkey'}, {name: 'Quinoa cooked', amount: '150g', calories: 180, link: '/calories-in/quinoa'}, {name: 'Tomato sauce', amount: '150g', calories: 36, link: '/calories-in/tomato'}]},
  {name: 'Pork Tenderloin with Apples', description: 'Roasted pork tenderloin with caramelized apples.', servings: 2, prepTime: '12 min', cookTime: '25 min', calories: 385, protein: 42, carbs: 28, fat: 12, ingredients: [{name: 'Pork tenderloin', amount: '300g', calories: 390, link: '/calories-in/pork-tenderloin'}, {name: 'Apples', amount: '200g', calories: 104, link: '/calories-in/apple'}, {name: 'Brussels sprouts', amount: '200g', calories: 86, link: '/calories-in/brussels-sprouts'}, {name: 'Olive oil', amount: '1 tbsp', calories: 120, link: '/calories-in/olive-oil'}]},
  {name: 'Cod with Tomatoes & Olives', description: 'Mediterranean-style baked cod with tomatoes.', servings: 1, prepTime: '10 min', cookTime: '18 min', calories: 285, protein: 38, carbs: 18, fat: 7, ingredients: [{name: 'Cod fillet', amount: '180g', calories: 162, link: '/calories-in/cod'}, {name: 'Cherry tomatoes', amount: '200g', calories: 36, link: '/calories-in/tomato'}, {name: 'Olives', amount: '40g', calories: 46, link: '/calories-in/olives'}, {name: 'Olive oil', amount: '1 tsp', calories: 40, link: '/calories-in/olive-oil'}]},
  {name: 'Chicken Fajitas', description: 'Sizzling chicken fajitas with peppers and onions.', servings: 2, prepTime: '15 min', cookTime: '15 min', calories: 385, protein: 36, carbs: 38, fat: 11, ingredients: [{name: 'Chicken breast', amount: '250g', calories: 413, link: '/calories-in/chicken-breast'}, {name: 'Bell peppers', amount: '200g', calories: 52, link: '/calories-in/bell-pepper'}, {name: 'Onion', amount: '150g', calories: 60, link: '/calories-in/onion'}, {name: 'Tortillas', amount: '4 small', calories: 200, link: '/calories-in/tortilla'}]}
]

const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is a healthy dinner calorie range?", "acceptedAnswer": {"@type": "Answer", "text": "A healthy dinner typically contains 400-600 calories. These recipes range from 285-485 calories, leaving room for sides or dessert while maintaining balanced nutrition."}}, {"@type": "Question", "name": "Can I make these dinner recipes ahead?", "acceptedAnswer": {"@type": "Answer", "text": "Yes! Many dinners work great for meal prep. Slow cooker meals, sheet pan dinners, and grain bowls can be prepared in advance and reheated throughout the week."}}]}

export default function DinnerRecipesPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/recipes" className="text-purple-100 hover:text-white mb-4 inline-block">← Back to Recipes</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dinner Recipes</h1>
            <p className="text-xl text-purple-100 mb-6 max-w-3xl">15 wholesome dinner recipes for the whole family. Each recipe includes complete nutrition data, prep times, and ingredient breakdowns.</p>
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
                  <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-purple-50 rounded-lg">
                    <div className="text-center"><div className="text-2xl font-bold text-purple-600">{recipe.calories}</div><div className="text-xs text-gray-600">Calories</div></div>
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
              <Link href="/recipes/high-protein" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">💪</div><h3 className="font-semibold text-gray-900">High-Protein</h3></Link>
              <Link href="/recipes/snacks" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🍪</div><h3 className="font-semibold text-gray-900">Snacks</h3></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
