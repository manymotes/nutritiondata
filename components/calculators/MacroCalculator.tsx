'use client'

import { useState } from 'react'

export default function MacroCalculator() {
  const [calories, setCalories] = useState('')
  const [goal, setGoal] = useState<'loss' | 'maintain' | 'gain'>('maintain')
  const [proteinGrams, setProteinGrams] = useState<number | null>(null)
  const [carbsGrams, setCarbsGrams] = useState<number | null>(null)
  const [fatGrams, setFatGrams] = useState<number | null>(null)
  const [error, setError] = useState<string>('')

  const goals = [
    { value: 'loss', label: 'Weight Loss', protein: 35, carbs: 35, fat: 30 },
    { value: 'maintain', label: 'Maintain Weight', protein: 30, carbs: 40, fat: 30 },
    { value: 'gain', label: 'Muscle Gain', protein: 30, carbs: 45, fat: 25 },
  ]

  const validateInputs = (): boolean => {
    setError('')

    const cals = parseFloat(calories)
    if (!calories) {
      setError('Please enter your daily calorie target')
      return false
    }
    if (cals < 500 || cals > 10000) {
      setError('Please enter a valid calorie amount (500-10,000 calories)')
      return false
    }

    return true
  }

  const calculateMacros = () => {
    if (!validateInputs()) return

    const cals = parseFloat(calories)
    const currentGoal = goals.find((g) => g.value === goal)!

    // Calculate grams based on percentages
    // Protein: 4 cal/g, Carbs: 4 cal/g, Fat: 9 cal/g
    const proteinCals = (cals * currentGoal.protein) / 100
    const carbsCals = (cals * currentGoal.carbs) / 100
    const fatCals = (cals * currentGoal.fat) / 100

    setProteinGrams(Math.round(proteinCals / 4))
    setCarbsGrams(Math.round(carbsCals / 4))
    setFatGrams(Math.round(fatCals / 9))
  }

  const handleReset = () => {
    setCalories('')
    setGoal('maintain')
    setProteinGrams(null)
    setCarbsGrams(null)
    setFatGrams(null)
    setError('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateMacros()
    }
  }

  return (
    <div>
      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Input Form */}
      <div className="space-y-4" onKeyPress={handleKeyPress}>
        {/* Daily Calorie Target */}
        <div>
          <label htmlFor="calories" className="block text-sm font-medium text-gray-700 mb-2">
            Daily Calorie Target
          </label>
          <input
            id="calories"
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="e.g., 2000"
            min="500"
            max="10000"
            step="1"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            aria-label="Daily calorie target"
          />
          <p className="text-xs text-gray-500 mt-1">
            Use our <a href="/calculators/tdee" className="text-primary-600 hover:underline">TDEE Calculator</a> to determine your daily calorie needs
          </p>
        </div>

        {/* Goal Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fitness Goal
          </label>
          <div className="grid grid-cols-1 gap-3">
            {goals.map((g) => (
              <button
                key={g.value}
                onClick={() => setGoal(g.value as any)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  goal === g.value
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                aria-label={`Select ${g.label} goal`}
                aria-pressed={goal === g.value}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{g.label}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Protein: {g.protein}% • Carbs: {g.carbs}% • Fat: {g.fat}%
                    </p>
                  </div>
                  {goal === g.value && (
                    <span className="text-primary-600 text-xl">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculateMacros}
            className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Calculate Macros
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Results */}
      {proteinGrams !== null && carbsGrams !== null && fatGrams !== null && (
        <div className="mt-8 space-y-6">
          {/* Summary */}
          <div className="p-6 bg-primary-50 rounded-lg border-2 border-primary-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Your Daily Macro Targets
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Based on {calories} calories for {goals.find(g => g.value === goal)?.label}
            </p>
          </div>

          {/* Macro Breakdown */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Protein */}
            <div className="p-6 bg-red-50 rounded-lg border border-red-200">
              <div className="text-center">
                <p className="text-sm font-medium text-red-700 mb-2">PROTEIN</p>
                <p className="text-4xl font-bold text-red-900">{proteinGrams}g</p>
                <p className="text-sm text-red-700 mt-2">
                  {goals.find(g => g.value === goal)?.protein}% of calories
                </p>
                <p className="text-xs text-red-600 mt-1">
                  {proteinGrams * 4} calories
                </p>
              </div>
            </div>

            {/* Carbs */}
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-center">
                <p className="text-sm font-medium text-blue-700 mb-2">CARBS</p>
                <p className="text-4xl font-bold text-blue-900">{carbsGrams}g</p>
                <p className="text-sm text-blue-700 mt-2">
                  {goals.find(g => g.value === goal)?.carbs}% of calories
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  {carbsGrams * 4} calories
                </p>
              </div>
            </div>

            {/* Fat */}
            <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="text-center">
                <p className="text-sm font-medium text-yellow-700 mb-2">FAT</p>
                <p className="text-4xl font-bold text-yellow-900">{fatGrams}g</p>
                <p className="text-sm text-yellow-700 mt-2">
                  {goals.find(g => g.value === goal)?.fat}% of calories
                </p>
                <p className="text-xs text-yellow-600 mt-1">
                  {fatGrams * 9} calories
                </p>
              </div>
            </div>
          </div>

          {/* Meal Distribution */}
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">Macros Per Meal (4 meals/day)</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-700">Protein per meal</p>
                <p className="text-lg font-bold text-red-600">{Math.round(proteinGrams / 4)}g</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-700">Carbs per meal</p>
                <p className="text-lg font-bold text-blue-600">{Math.round(carbsGrams / 4)}g</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-700">Fat per meal</p>
                <p className="text-lg font-bold text-yellow-600">{Math.round(fatGrams / 4)}g</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                Approximately {Math.round(parseFloat(calories) / 4)} calories per meal
              </p>
            </div>
          </div>

          {/* Food Examples */}
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4">Example Foods to Hit Your Macros</h4>

            <div className="space-y-4">
              {/* Protein Sources */}
              <div>
                <p className="text-sm font-semibold text-red-700 mb-2">High Protein Foods:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                    Chicken breast (31g/100g)
                  </span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                    Greek yogurt (10g/100g)
                  </span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                    Eggs (13g/egg)
                  </span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                    Salmon (25g/100g)
                  </span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                    Tofu (17g/100g)
                  </span>
                </div>
              </div>

              {/* Carb Sources */}
              <div>
                <p className="text-sm font-semibold text-blue-700 mb-2">Good Carb Sources:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    Brown rice (23g/100g)
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    Sweet potato (20g/100g)
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    Oatmeal (12g/100g)
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    Quinoa (21g/100g)
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    Banana (23g/100g)
                  </span>
                </div>
              </div>

              {/* Fat Sources */}
              <div>
                <p className="text-sm font-semibold text-yellow-700 mb-2">Healthy Fat Sources:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                    Avocado (15g/100g)
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                    Almonds (49g/100g)
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                    Olive oil (14g/tbsp)
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                    Peanut butter (16g/2tbsp)
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                    Salmon (13g/100g)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Understanding Macronutrients</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong className="text-red-700">Protein (4 calories/gram):</strong> Essential for building
                and repairing muscle tissue, supporting immune function, and maintaining hormones. Aim to
                distribute protein evenly across meals for optimal muscle protein synthesis.
              </p>
              <p>
                <strong className="text-blue-700">Carbohydrates (4 calories/gram):</strong> Your body's
                primary energy source, especially for high-intensity exercise. Carbs replenish muscle
                glycogen and support workout performance. Choose complex carbs like whole grains, fruits,
                and vegetables.
              </p>
              <p>
                <strong className="text-yellow-700">Fats (9 calories/gram):</strong> Critical for hormone
                production, vitamin absorption, and cellular health. Focus on unsaturated fats from nuts,
                seeds, avocados, and fatty fish. Fats are calorie-dense, so measure portions carefully.
              </p>
              <p className="pt-2 border-t border-gray-200">
                <strong>Tip:</strong> Track your macros using a food diary app. Weigh food for accuracy,
                especially calorie-dense items like nuts and oils. Adjust based on your progress after
                2-3 weeks.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
