import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Breakfast Recipes - 15 Morning Meals with Nutrition Data | CalorieData',
  description: 'Discover 15 healthy breakfast recipes with complete nutrition data. Start your day right with balanced meals including calorie counts and prep times.',
  alternates: { canonical: `${SITE_URL}/recipes/breakfast` },
  openGraph: {
    title: 'Breakfast Recipes - 15 Morning Meals',
    description: 'Discover 15 healthy breakfast recipes with complete nutrition data. Start your day right with balanced meals including calorie counts and prep times.',
    url: `${SITE_URL}/recipes/breakfast`,
  },
}

const recipes = [
  {
    "name": "Overnight Oats",
    "description": "Creamy oats soaked overnight with berries and nuts.",
    "servings": 1,
    "prepTime": "5 min (+ overnight)",
    "cookTime": "0 min",
    "calories": 385,
    "protein": 14,
    "carbs": 58,
    "fat": 12,
    "ingredients": [
      {
        "name": "Rolled oats",
        "amount": "60g",
        "calories": 228,
        "link": "/calories-in/oatmeal"
      },
      {
        "name": "Skim milk",
        "amount": "200ml",
        "calories": 68,
        "link": "/calories-in/skim-milk"
      },
      {
        "name": "Blueberries",
        "amount": "80g",
        "calories": 46,
        "link": "/calories-in/blueberry"
      },
      {
        "name": "Almonds",
        "amount": "15g",
        "calories": 87,
        "link": "/calories-in/almonds"
      }
    ]
  },
  {
    "name": "Veggie Omelet",
    "description": "Fluffy 3-egg omelet packed with vegetables and cheese.",
    "servings": 1,
    "prepTime": "8 min",
    "cookTime": "8 min",
    "calories": 325,
    "protein": 24,
    "carbs": 12,
    "fat": 21,
    "ingredients": [
      {
        "name": "Eggs",
        "amount": "3 large",
        "calories": 216,
        "link": "/calories-in/egg"
      },
      {
        "name": "Bell peppers",
        "amount": "100g",
        "calories": 26,
        "link": "/calories-in/bell-pepper"
      },
      {
        "name": "Spinach",
        "amount": "50g",
        "calories": 12,
        "link": "/calories-in/spinach"
      },
      {
        "name": "Cheddar cheese",
        "amount": "30g",
        "calories": 120,
        "link": "/calories-in/cheese"
      }
    ]
  },
  {
    "name": "Avocado Toast with Egg",
    "description": "Whole grain toast topped with avocado and poached egg.",
    "servings": 1,
    "prepTime": "5 min",
    "cookTime": "5 min",
    "calories": 385,
    "protein": 18,
    "carbs": 32,
    "fat": 22,
    "ingredients": [
      {
        "name": "Whole wheat bread",
        "amount": "2 slices",
        "calories": 160,
        "link": "/calories-in/whole-wheat-bread"
      },
      {
        "name": "Avocado",
        "amount": "60g",
        "calories": 96,
        "link": "/calories-in/avocado"
      },
      {
        "name": "Eggs",
        "amount": "2 large",
        "calories": 144,
        "link": "/calories-in/egg"
      }
    ]
  },
  {
    "name": "Greek Yogurt Parfait",
    "description": "Layered yogurt with granola, berries, and honey.",
    "servings": 1,
    "prepTime": "5 min",
    "cookTime": "0 min",
    "calories": 365,
    "protein": 22,
    "carbs": 54,
    "fat": 9,
    "ingredients": [
      {
        "name": "Greek yogurt",
        "amount": "200g",
        "calories": 120,
        "link": "/calories-in/greek-yogurt"
      },
      {
        "name": "Granola",
        "amount": "40g",
        "calories": 180,
        "link": "/calories-in/granola"
      },
      {
        "name": "Mixed berries",
        "amount": "100g",
        "calories": 57,
        "link": "/calories-in/blueberry"
      },
      {
        "name": "Honey",
        "amount": "1 tbsp",
        "calories": 64,
        "link": "/calories-in/honey"
      }
    ]
  },
  {
    "name": "Protein Pancakes",
    "description": "Fluffy pancakes boosted with protein powder.",
    "servings": 2,
    "prepTime": "8 min",
    "cookTime": "10 min",
    "calories": 325,
    "protein": 24,
    "carbs": 42,
    "fat": 8,
    "ingredients": [
      {
        "name": "Oat flour",
        "amount": "100g",
        "calories": 380,
        "link": "/calories-in/oatmeal"
      },
      {
        "name": "Protein powder",
        "amount": "30g",
        "calories": 120,
        "link": "/calories-in/protein-shake"
      },
      {
        "name": "Eggs",
        "amount": "2 large",
        "calories": 144,
        "link": "/calories-in/egg"
      },
      {
        "name": "Banana",
        "amount": "1 medium",
        "calories": 105,
        "link": "/calories-in/banana"
      }
    ]
  },
  {
    "name": "Breakfast Burrito",
    "description": "Scrambled eggs with beans, cheese, and salsa wrapped in tortilla.",
    "servings": 1,
    "prepTime": "10 min",
    "cookTime": "10 min",
    "calories": 465,
    "protein": 26,
    "carbs": 48,
    "fat": 18,
    "ingredients": [
      {
        "name": "Whole wheat tortilla",
        "amount": "1 large",
        "calories": 170,
        "link": "/calories-in/tortilla"
      },
      {
        "name": "Eggs",
        "amount": "2 large",
        "calories": 144,
        "link": "/calories-in/egg"
      },
      {
        "name": "Black beans",
        "amount": "80g",
        "calories": 96,
        "link": "/calories-in/black-beans"
      },
      {
        "name": "Cheddar cheese",
        "amount": "30g",
        "calories": 120,
        "link": "/calories-in/cheese"
      }
    ]
  },
  {
    "name": "Smoothie Bowl",
    "description": "Thick berry smoothie topped with granola and seeds.",
    "servings": 1,
    "prepTime": "8 min",
    "cookTime": "0 min",
    "calories": 385,
    "protein": 16,
    "carbs": 62,
    "fat": 10,
    "ingredients": [
      {
        "name": "Mixed berries (frozen)",
        "amount": "200g",
        "calories": 114,
        "link": "/calories-in/blueberry"
      },
      {
        "name": "Greek yogurt",
        "amount": "150g",
        "calories": 90,
        "link": "/calories-in/greek-yogurt"
      },
      {
        "name": "Banana",
        "amount": "1 medium",
        "calories": 105,
        "link": "/calories-in/banana"
      },
      {
        "name": "Granola",
        "amount": "30g",
        "calories": 135,
        "link": "/calories-in/granola"
      }
    ]
  },
  {
    "name": "Egg Muffins",
    "description": "Portable egg muffins with vegetables and cheese.",
    "servings": 3,
    "prepTime": "10 min",
    "cookTime": "20 min",
    "calories": 185,
    "protein": 14,
    "carbs": 6,
    "fat": 12,
    "ingredients": [
      {
        "name": "Eggs",
        "amount": "5 large",
        "calories": 360,
        "link": "/calories-in/egg"
      },
      {
        "name": "Bell peppers",
        "amount": "100g",
        "calories": 26,
        "link": "/calories-in/bell-pepper"
      },
      {
        "name": "Spinach",
        "amount": "80g",
        "calories": 18,
        "link": "/calories-in/spinach"
      },
      {
        "name": "Cheddar cheese",
        "amount": "60g",
        "calories": 240,
        "link": "/calories-in/cheese"
      }
    ]
  },
  {
    "name": "Peanut Butter Banana Toast",
    "description": "Whole grain toast with peanut butter and banana slices.",
    "servings": 1,
    "prepTime": "5 min",
    "cookTime": "2 min",
    "calories": 385,
    "protein": 14,
    "carbs": 52,
    "fat": 14,
    "ingredients": [
      {
        "name": "Whole wheat bread",
        "amount": "2 slices",
        "calories": 160,
        "link": "/calories-in/whole-wheat-bread"
      },
      {
        "name": "Peanut butter",
        "amount": "2 tbsp",
        "calories": 190,
        "link": "/calories-in/peanut-butter"
      },
      {
        "name": "Banana",
        "amount": "1 medium",
        "calories": 105,
        "link": "/calories-in/banana"
      }
    ]
  },
  {
    "name": "Chia Pudding",
    "description": "Creamy chia seed pudding with almond milk and fruit.",
    "servings": 1,
    "prepTime": "5 min (+ 4 hrs)",
    "cookTime": "0 min",
    "calories": 285,
    "protein": 10,
    "carbs": 38,
    "fat": 12,
    "ingredients": [
      {
        "name": "Chia seeds",
        "amount": "30g",
        "calories": 146,
        "link": "/calories-in/chia-seeds"
      },
      {
        "name": "Almond milk",
        "amount": "250ml",
        "calories": 50,
        "link": "/calories-in/almond-milk"
      },
      {
        "name": "Berries",
        "amount": "100g",
        "calories": 57,
        "link": "/calories-in/blueberry"
      },
      {
        "name": "Honey",
        "amount": "1 tbsp",
        "calories": 64,
        "link": "/calories-in/honey"
      }
    ]
  },
  {
    "name": "Veggie Scramble",
    "description": "Scrambled eggs with saut\u00e9ed vegetables.",
    "servings": 1,
    "prepTime": "8 min",
    "cookTime": "8 min",
    "calories": 265,
    "protein": 20,
    "carbs": 14,
    "fat": 15,
    "ingredients": [
      {
        "name": "Eggs",
        "amount": "3 large",
        "calories": 216,
        "link": "/calories-in/egg"
      },
      {
        "name": "Tomatoes",
        "amount": "100g",
        "calories": 18,
        "link": "/calories-in/tomato"
      },
      {
        "name": "Spinach",
        "amount": "80g",
        "calories": 18,
        "link": "/calories-in/spinach"
      },
      {
        "name": "Mushrooms",
        "amount": "80g",
        "calories": 22,
        "link": "/calories-in/mushroom"
      }
    ]
  },
  {
    "name": "Breakfast Quinoa Bowl",
    "description": "Warm quinoa with cinnamon, nuts, and dried fruit.",
    "servings": 1,
    "prepTime": "5 min",
    "cookTime": "15 min",
    "calories": 385,
    "protein": 14,
    "carbs": 58,
    "fat": 12,
    "ingredients": [
      {
        "name": "Quinoa (cooked)",
        "amount": "150g",
        "calories": 180,
        "link": "/calories-in/quinoa"
      },
      {
        "name": "Almond milk",
        "amount": "150ml",
        "calories": 30,
        "link": "/calories-in/almond-milk"
      },
      {
        "name": "Almonds",
        "amount": "20g",
        "calories": 116,
        "link": "/calories-in/almonds"
      },
      {
        "name": "Raisins",
        "amount": "30g",
        "calories": 90,
        "link": "/calories-in/raisins"
      }
    ]
  },
  {
    "name": "Cottage Cheese Bowl",
    "description": "High-protein cottage cheese with fruit and nuts.",
    "servings": 1,
    "prepTime": "5 min",
    "cookTime": "0 min",
    "calories": 325,
    "protein": 28,
    "carbs": 38,
    "fat": 9,
    "ingredients": [
      {
        "name": "Cottage cheese",
        "amount": "200g",
        "calories": 160,
        "link": "/calories-in/cottage-cheese"
      },
      {
        "name": "Pineapple",
        "amount": "150g",
        "calories": 75,
        "link": "/calories-in/pineapple"
      },
      {
        "name": "Walnuts",
        "amount": "15g",
        "calories": 98,
        "link": "/calories-in/walnuts"
      }
    ]
  },
  {
    "name": "French Toast",
    "description": "Whole wheat French toast with berries and maple syrup.",
    "servings": 2,
    "prepTime": "8 min",
    "cookTime": "10 min",
    "calories": 365,
    "protein": 16,
    "carbs": 58,
    "fat": 9,
    "ingredients": [
      {
        "name": "Whole wheat bread",
        "amount": "4 slices",
        "calories": 320,
        "link": "/calories-in/whole-wheat-bread"
      },
      {
        "name": "Eggs",
        "amount": "2 large",
        "calories": 144,
        "link": "/calories-in/egg"
      },
      {
        "name": "Milk",
        "amount": "100ml",
        "calories": 64,
        "link": "/calories-in/milk"
      },
      {
        "name": "Berries & syrup",
        "amount": "100g",
        "calories": 120,
        "link": "/calories-in/blueberry"
      }
    ]
  },
  {
    "name": "Breakfast Smoothie",
    "description": "Quick protein smoothie with banana and berries.",
    "servings": 1,
    "prepTime": "5 min",
    "cookTime": "0 min",
    "calories": 325,
    "protein": 32,
    "carbs": 45,
    "fat": 4,
    "ingredients": [
      {
        "name": "Protein powder",
        "amount": "30g",
        "calories": 120,
        "link": "/calories-in/protein-shake"
      },
      {
        "name": "Banana",
        "amount": "1 medium",
        "calories": 105,
        "link": "/calories-in/banana"
      },
      {
        "name": "Berries",
        "amount": "100g",
        "calories": 57,
        "link": "/calories-in/blueberry"
      },
      {
        "name": "Skim milk",
        "amount": "250ml",
        "calories": 85,
        "link": "/calories-in/skim-milk"
      }
    ]
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes a healthy breakfast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A healthy breakfast includes protein (15-25g), complex carbs, and healthy fats. These recipes balance all three macronutrients to provide sustained energy throughout the morning."
      }
    },
    {
      "@type": "Question",
      "name": "Can I meal prep breakfast recipes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Egg muffins, overnight oats, and breakfast burritos can be prepared in advance. Store in the refrigerator for 3-4 days or freeze for longer storage."
      }
    }
  ]
}

export default function BreakfastRecipesPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/recipes" className="text-amber-100 hover:text-white mb-4 inline-block">← Back to Recipes</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Breakfast Recipes</h1>
            <p className="text-xl text-amber-100 mb-6 max-w-3xl">15 energizing breakfast recipes to start your day. Each recipe includes complete nutrition data, prep times, and ingredient breakdowns.</p>
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
                  <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-amber-50 rounded-lg">
                    <div className="text-center"><div className="text-2xl font-bold text-amber-600">{recipe.calories}</div><div className="text-xs text-gray-600">Calories</div></div>
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
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2">{faq.name}</h3>
                  <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Recipe Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/recipes/high-protein" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">💪</div><h3 className="font-semibold text-gray-900">High-Protein</h3></Link><Link href="/recipes/low-calorie" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🥬</div><h3 className="font-semibold text-gray-900">Low-Calorie</h3></Link><Link href="/recipes/vegan" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🌱</div><h3 className="font-semibold text-gray-900">Vegan</h3></Link><Link href="/recipes/snacks" className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow text-center"><div className="text-3xl mb-2">🍪</div><h3 className="font-semibold text-gray-900">Snacks</h3></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
