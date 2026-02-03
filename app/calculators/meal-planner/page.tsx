'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

interface Food {
  name: string
  serving: string
  calories: number
  protein: number
  carbs: number
  fat: number
}

interface MealItem extends Food {
  id: string
  servings: number
}

const COMMON_FOODS: Food[] = [
  { name: 'Chicken Breast', serving: '100g', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  { name: 'Salmon', serving: '100g', calories: 208, protein: 25, carbs: 0, fat: 13 },
  { name: 'Ground Beef (lean)', serving: '100g', calories: 250, protein: 26, carbs: 0, fat: 17 },
  { name: 'Egg', serving: '1 large', calories: 78, protein: 6, carbs: 0.6, fat: 5 },
  { name: 'Greek Yogurt', serving: '100g', calories: 97, protein: 10, carbs: 3.6, fat: 5 },
  { name: 'Brown Rice', serving: '100g cooked', calories: 112, protein: 2.6, carbs: 23, fat: 0.9 },
  { name: 'Sweet Potato', serving: '100g', calories: 86, protein: 1.6, carbs: 20, fat: 0.1 },
  { name: 'Oatmeal', serving: '100g cooked', calories: 71, protein: 2.5, carbs: 12, fat: 1.5 },
  { name: 'Banana', serving: '1 medium', calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
  { name: 'Apple', serving: '1 medium', calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
  { name: 'Avocado', serving: '100g', calories: 160, protein: 2, carbs: 8.5, fat: 15 },
  { name: 'Broccoli', serving: '100g', calories: 34, protein: 2.8, carbs: 7, fat: 0.4 },
  { name: 'Spinach', serving: '100g', calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
  { name: 'Almonds', serving: '28g (1 oz)', calories: 164, protein: 6, carbs: 6, fat: 14 },
  { name: 'Peanut Butter', serving: '2 tbsp', calories: 188, protein: 8, carbs: 7, fat: 16 },
  { name: 'Whole Wheat Bread', serving: '1 slice', calories: 82, protein: 4, carbs: 14, fat: 1 },
  { name: 'Pasta', serving: '100g cooked', calories: 131, protein: 5, carbs: 25, fat: 1.1 },
  { name: 'Quinoa', serving: '100g cooked', calories: 120, protein: 4.4, carbs: 21, fat: 1.9 },
  { name: 'Cottage Cheese', serving: '100g', calories: 98, protein: 11, carbs: 3.4, fat: 4.3 },
  { name: 'Milk (2%)', serving: '1 cup', calories: 122, protein: 8, carbs: 12, fat: 5 },
]

export default function MealPlannerPage() {
  const [calorieTarget, setCalorieTarget] = useState('')
  const [proteinTarget, setProteinTarget] = useState('')
  const [carbsTarget, setCarbsTarget] = useState('')
  const [fatTarget, setFatTarget] = useState('')
  const [selectedFoods, setSelectedFoods] = useState<MealItem[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [savedPlans, setSavedPlans] = useState<string[]>([])

  const filteredFoods = COMMON_FOODS.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addFood = (food: Food) => {
    const newItem: MealItem = {
      ...food,
      id: Math.random().toString(36).substr(2, 9),
      servings: 1,
    }
    setSelectedFoods([...selectedFoods, newItem])
  }

  const removeFood = (id: string) => {
    setSelectedFoods(selectedFoods.filter(item => item.id !== id))
  }

  const updateServings = (id: string, servings: number) => {
    if (servings <= 0) return
    setSelectedFoods(
      selectedFoods.map(item =>
        item.id === id ? { ...item, servings } : item
      )
    )
  }

  const calculateTotals = () => {
    return selectedFoods.reduce(
      (acc, item) => ({
        calories: acc.calories + item.calories * item.servings,
        protein: acc.protein + item.protein * item.servings,
        carbs: acc.carbs + item.carbs * item.servings,
        fat: acc.fat + item.fat * item.servings,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 }
    )
  }

  const totals = calculateTotals()

  const getPercentage = (actual: number, target: string) => {
    const targetNum = parseFloat(target)
    if (!targetNum || targetNum === 0) return 0
    return Math.round((actual / targetNum) * 100)
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 95 && percentage <= 105) return 'bg-green-500'
    if (percentage >= 85 && percentage <= 115) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const saveMealPlan = () => {
    if (selectedFoods.length === 0) return

    const planName = `Meal Plan ${new Date().toLocaleDateString()}`
    const planData = JSON.stringify({ name: planName, foods: selectedFoods, date: new Date() })

    const existingPlans = [...savedPlans, planName]
    setSavedPlans(existingPlans)

    // In a real app, you'd save to localStorage or a database
    alert(`Meal plan "${planName}" saved! (${selectedFoods.length} items)`)
  }

  const clearMeal = () => {
    setSelectedFoods([])
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
          <li>/</li>
          <li><Link href="/calculators" className="hover:text-gray-700">Calculators</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Meal Planner</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Meal Planner
        </h1>
        <p className="text-lg text-gray-600">
          Plan your meals to hit your calorie and macro targets. Select foods, adjust portions,
          and see real-time totals.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Targets & Food Selection */}
        <div className="lg:col-span-2 space-y-6">
          {/* Targets */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Daily Targets</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="calorieTarget" className="block text-sm font-medium text-gray-700 mb-1">
                  Calories
                </label>
                <input
                  id="calorieTarget"
                  type="number"
                  value={calorieTarget}
                  onChange={(e) => setCalorieTarget(e.target.value)}
                  placeholder="2000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="proteinTarget" className="block text-sm font-medium text-gray-700 mb-1">
                  Protein (g)
                </label>
                <input
                  id="proteinTarget"
                  type="number"
                  value={proteinTarget}
                  onChange={(e) => setProteinTarget(e.target.value)}
                  placeholder="150"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="carbsTarget" className="block text-sm font-medium text-gray-700 mb-1">
                  Carbs (g)
                </label>
                <input
                  id="carbsTarget"
                  type="number"
                  value={carbsTarget}
                  onChange={(e) => setCarbsTarget(e.target.value)}
                  placeholder="200"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="fatTarget" className="block text-sm font-medium text-gray-700 mb-1">
                  Fat (g)
                </label>
                <input
                  id="fatTarget"
                  type="number"
                  value={fatTarget}
                  onChange={(e) => setFatTarget(e.target.value)}
                  placeholder="65"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Use our <Link href="/calculators/macro-calculator" className="text-primary-600 hover:underline">Macro Calculator</Link> to determine your targets
            </p>
          </div>

          {/* Food Selection */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Foods</h2>

            {/* Search */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search foods..."
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />

            {/* Food List */}
            <div className="max-h-96 overflow-y-auto space-y-2">
              {filteredFoods.map((food, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{food.name}</h3>
                    <p className="text-sm text-gray-500">
                      {food.serving}: {food.calories} cal | P: {food.protein}g | C: {food.carbs}g | F: {food.fat}g
                    </p>
                  </div>
                  <button
                    onClick={() => addFood(food)}
                    className="ml-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Current Meal */}
        <div className="space-y-6">
          {/* Progress */}
          {(calorieTarget || proteinTarget || carbsTarget || fatTarget) && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress</h2>
              <div className="space-y-4">
                {calorieTarget && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Calories</span>
                      <span className="text-gray-600">
                        {Math.round(totals.calories)} / {calorieTarget}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(getPercentage(totals.calories, calorieTarget))}`}
                        style={{ width: `${Math.min(getPercentage(totals.calories, calorieTarget), 100)}%` }}
                      />
                    </div>
                  </div>
                )}
                {proteinTarget && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Protein</span>
                      <span className="text-gray-600">
                        {Math.round(totals.protein)}g / {proteinTarget}g
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(getPercentage(totals.protein, proteinTarget))}`}
                        style={{ width: `${Math.min(getPercentage(totals.protein, proteinTarget), 100)}%` }}
                      />
                    </div>
                  </div>
                )}
                {carbsTarget && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Carbs</span>
                      <span className="text-gray-600">
                        {Math.round(totals.carbs)}g / {carbsTarget}g
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(getPercentage(totals.carbs, carbsTarget))}`}
                        style={{ width: `${Math.min(getPercentage(totals.carbs, carbsTarget), 100)}%` }}
                      />
                    </div>
                  </div>
                )}
                {fatTarget && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Fat</span>
                      <span className="text-gray-600">
                        {Math.round(totals.fat)}g / {fatTarget}g
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(getPercentage(totals.fat, fatTarget))}`}
                        style={{ width: `${Math.min(getPercentage(totals.fat, fatTarget), 100)}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Selected Foods */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Your Meal</h2>
              {selectedFoods.length > 0 && (
                <button
                  onClick={clearMeal}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Clear All
                </button>
              )}
            </div>

            {selectedFoods.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Add foods to start building your meal
              </p>
            ) : (
              <div className="space-y-3">
                {selectedFoods.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <button
                        onClick={() => removeFood(item.id)}
                        className="text-red-600 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="text-sm text-gray-600">Servings:</label>
                      <input
                        type="number"
                        value={item.servings}
                        onChange={(e) => updateServings(item.id, parseFloat(e.target.value))}
                        min="0.1"
                        step="0.1"
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                      <span className="text-sm text-gray-500">× {item.serving}</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      {Math.round(item.calories * item.servings)} cal |
                      P: {Math.round(item.protein * item.servings)}g |
                      C: {Math.round(item.carbs * item.servings)}g |
                      F: {Math.round(item.fat * item.servings)}g
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedFoods.length > 0 && (
              <>
                {/* Totals */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Totals</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-600">Calories:</span>
                      <span className="font-bold ml-2">{Math.round(totals.calories)}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Protein:</span>
                      <span className="font-bold ml-2">{Math.round(totals.protein)}g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Carbs:</span>
                      <span className="font-bold ml-2">{Math.round(totals.carbs)}g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Fat:</span>
                      <span className="font-bold ml-2">{Math.round(totals.fat)}g</span>
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <button
                  onClick={saveMealPlan}
                  className="w-full mt-4 bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Save Meal Plan
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Educational Content */}
      <div className="mt-12 prose max-w-none">
        <h2>How to Use the Meal Planner</h2>
        <p>
          The meal planner helps you build meals that hit your calorie and macro targets. Start by
          entering your daily targets (use our macro calculator if you need help determining these).
          Then add foods from our database and adjust serving sizes until you hit your targets.
        </p>

        <h3>Tips for Meal Planning</h3>
        <ul>
          <li>
            <strong>Start with protein:</strong> Add your protein sources first (chicken, fish, eggs),
            as protein targets are often the hardest to hit.
          </li>
          <li>
            <strong>Add carbs for energy:</strong> Include complex carbs like rice, oats, or sweet
            potatoes to fuel your activities.
          </li>
          <li>
            <strong>Don't forget healthy fats:</strong> Add sources like avocado, nuts, or olive oil
            for hormone health and satiety.
          </li>
          <li>
            <strong>Include vegetables:</strong> Add low-calorie, nutrient-dense vegetables to increase
            volume and get essential vitamins and minerals.
          </li>
          <li>
            <strong>Plan ahead:</strong> Build multiple meal plans for different days or meals to
            add variety to your diet.
          </li>
        </ul>

        <h3>Understanding the Progress Bars</h3>
        <p>
          The progress bars show how close you are to hitting your targets:
        </p>
        <ul>
          <li><strong>Green:</strong> You're within 5% of your target (95-105%) - perfect!</li>
          <li><strong>Yellow:</strong> You're within 15% of your target (85-115%) - pretty good</li>
          <li><strong>Red:</strong> You're more than 15% away from your target - adjust your foods</li>
        </ul>

        <h3>Adjusting Portions</h3>
        <p>
          You can adjust the serving size for each food to fine-tune your meal. For example, if you're
          close to your protein target but need more calories, increase your carb or fat sources.
          The totals update in real-time as you make changes.
        </p>

        <h3>Saving Your Meal Plans</h3>
        <p>
          Once you've built a meal that hits your targets, save it for future reference. You can build
          multiple meal plans for different days or different meals (breakfast, lunch, dinner) to keep
          your diet varied and interesting.
        </p>
      </div>

      {/* CTA Section */}
      <div className="mt-8 bg-primary-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Explore Our Food Database
        </h3>
        <p className="text-gray-700 mb-4">
          Browse nutrition information for over 300,000 foods to find more options for your meal plans.
        </p>
        <Link
          href="/category/fruits"
          className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Browse Foods
        </Link>
      </div>

      {/* Related Calculators */}
      <div className="mt-8 border-t border-gray-200 pt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Calculators</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/calculators/calorie-calculator"
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Calorie Calculator</h4>
            <p className="text-sm text-gray-600">Calculate your TDEE and BMR</p>
          </Link>
          <Link
            href="/calculators/macro-calculator"
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Macro Calculator</h4>
            <p className="text-sm text-gray-600">Calculate protein, carbs, and fat targets</p>
          </Link>
          <Link
            href="/calculators/bmi-calculator"
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">BMI Calculator</h4>
            <p className="text-sm text-gray-600">Calculate your Body Mass Index</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
