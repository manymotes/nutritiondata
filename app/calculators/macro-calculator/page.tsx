'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'
import EmailCapture from '@/components/EmailCapture'
import WhatNext from '@/components/WhatNext'
import RelatedTools from '@/components/RelatedTools'
import QuickActions from '@/components/QuickActions'

export default function MacroCalculatorPage() {
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial')
  const [calories, setCalories] = useState('')
  const [goal, setGoal] = useState<'loss' | 'maintenance' | 'gain'>('maintenance')
  const [dietType, setDietType] = useState<'balanced' | 'high-protein' | 'low-carb' | 'keto'>('balanced')
  const [results, setResults] = useState<{
    protein: { grams: number; calories: number; percentage: number }
    carbs: { grams: number; calories: number; percentage: number }
    fat: { grams: number; calories: number; percentage: number }
  } | null>(null)
  const [error, setError] = useState<string>('')

  const validateInputs = (): boolean => {
    setError('')

    const weightNum = parseFloat(weight)
    const caloriesNum = parseFloat(calories)

    if (!weight) {
      setError('Please enter your weight')
      return false
    }
    if (!calories) {
      setError('Please enter your daily calorie target')
      return false
    }
    if (unit === 'imperial' && (weightNum <= 0 || weightNum > 1000)) {
      setError('Please enter a valid weight (1-1000 lbs)')
      return false
    }
    if (unit === 'metric' && (weightNum <= 0 || weightNum > 500)) {
      setError('Please enter a valid weight (1-500 kg)')
      return false
    }
    if (caloriesNum < 1000 || caloriesNum > 10000) {
      setError('Please enter a valid calorie target (1000-10000 cal)')
      return false
    }

    return true
  }

  const calculateMacros = () => {
    if (!validateInputs()) return

    const caloriesNum = parseFloat(calories)
    let weightKg = parseFloat(weight)

    if (unit === 'imperial') {
      weightKg = weightKg * 0.453592 // Convert lbs to kg
    }

    let proteinPercentage: number
    let carbsPercentage: number
    let fatPercentage: number

    // Define macro ratios based on goal and diet type
    if (dietType === 'keto') {
      proteinPercentage = 25
      carbsPercentage = 5
      fatPercentage = 70
    } else if (dietType === 'low-carb') {
      proteinPercentage = 35
      carbsPercentage = 25
      fatPercentage = 40
    } else if (dietType === 'high-protein') {
      proteinPercentage = 40
      carbsPercentage = 30
      fatPercentage = 30
    } else {
      // Balanced approach with goal adjustments
      if (goal === 'loss') {
        proteinPercentage = 35
        carbsPercentage = 35
        fatPercentage = 30
      } else if (goal === 'gain') {
        proteinPercentage = 30
        carbsPercentage = 45
        fatPercentage = 25
      } else {
        proteinPercentage = 30
        carbsPercentage = 40
        fatPercentage = 30
      }
    }

    // Calculate calories for each macro
    const proteinCalories = (caloriesNum * proteinPercentage) / 100
    const carbsCalories = (caloriesNum * carbsPercentage) / 100
    const fatCalories = (caloriesNum * fatPercentage) / 100

    // Convert to grams (protein: 4 cal/g, carbs: 4 cal/g, fat: 9 cal/g)
    const proteinGrams = Math.round(proteinCalories / 4)
    const carbsGrams = Math.round(carbsCalories / 4)
    const fatGrams = Math.round(fatCalories / 9)

    setResults({
      protein: {
        grams: proteinGrams,
        calories: Math.round(proteinCalories),
        percentage: proteinPercentage,
      },
      carbs: {
        grams: carbsGrams,
        calories: Math.round(carbsCalories),
        percentage: carbsPercentage,
      },
      fat: {
        grams: fatGrams,
        calories: Math.round(fatCalories),
        percentage: fatPercentage,
      },
    })
  }

  const handleReset = () => {
    setWeight('')
    setCalories('')
    setGoal('maintenance')
    setDietType('balanced')
    setResults(null)
    setError('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateMacros()
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
          <li>/</li>
          <li><Link href="/calculators" className="hover:text-gray-700">Calculators</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Macro Calculator</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Macro Calculator - Macronutrient Calculator
        </h1>
        <p className="text-lg text-gray-600">
          Calculate your ideal daily protein, carbohydrates, and fat intake based on your
          calorie goals and dietary preferences. Perfect for weight loss, maintenance, or muscle building.
        </p>
      </div>

      {/* Calculator */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-8">
        {/* Unit Toggle */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setUnit('imperial')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              unit === 'imperial'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Imperial (lb)
          </button>
          <button
            onClick={() => setUnit('metric')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              unit === 'metric'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Metric (kg)
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Input Form */}
        <div className="space-y-4" onKeyPress={handleKeyPress}>
          {/* Weight */}
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
              Weight {unit === 'imperial' ? '(lbs)' : '(kg)'}
            </label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === 'imperial' ? 'e.g., 150' : 'e.g., 70'}
              min="1"
              max={unit === 'imperial' ? '1000' : '500'}
              step="0.1"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

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
              min="1000"
              max="10000"
              step="50"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <p className="mt-1 text-sm text-gray-500">
              Use our <Link href="/calculators/calorie-calculator" className="text-primary-600 hover:underline">Calorie Calculator</Link> if you need help determining this
            </p>
          </div>

          {/* Goal */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Goal</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setGoal('loss')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  goal === 'loss'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Weight Loss
              </button>
              <button
                onClick={() => setGoal('maintenance')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  goal === 'maintenance'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Maintenance
              </button>
              <button
                onClick={() => setGoal('gain')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  goal === 'gain'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Muscle Gain
              </button>
            </div>
          </div>

          {/* Diet Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Diet Type</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setDietType('balanced')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  dietType === 'balanced'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Balanced
              </button>
              <button
                onClick={() => setDietType('high-protein')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  dietType === 'high-protein'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                High Protein
              </button>
              <button
                onClick={() => setDietType('low-carb')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  dietType === 'low-carb'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Low Carb
              </button>
              <button
                onClick={() => setDietType('keto')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  dietType === 'keto'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Keto
              </button>
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
        {results && (
          <div className="mt-8 space-y-6">
            {/* Daily Macro Targets */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Daily Macro Targets</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Protein */}
                <div className="p-6 bg-red-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Protein</h4>
                    <span className="text-sm text-gray-600">{results.protein.percentage}%</span>
                  </div>
                  <p className="text-4xl font-bold text-red-600">{results.protein.grams}g</p>
                  <p className="text-sm text-gray-600 mt-1">{results.protein.calories} calories</p>
                </div>

                {/* Carbs */}
                <div className="p-6 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Carbs</h4>
                    <span className="text-sm text-gray-600">{results.carbs.percentage}%</span>
                  </div>
                  <p className="text-4xl font-bold text-blue-600">{results.carbs.grams}g</p>
                  <p className="text-sm text-gray-600 mt-1">{results.carbs.calories} calories</p>
                </div>

                {/* Fat */}
                <div className="p-6 bg-yellow-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Fat</h4>
                    <span className="text-sm text-gray-600">{results.fat.percentage}%</span>
                  </div>
                  <p className="text-4xl font-bold text-yellow-600">{results.fat.grams}g</p>
                  <p className="text-sm text-gray-600 mt-1">{results.fat.calories} calories</p>
                </div>
              </div>
            </div>

            {/* Per-Meal Breakdown */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Per-Meal Targets (3 meals)</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Protein/meal</p>
                  <p className="text-2xl font-bold text-red-600">{Math.round(results.protein.grams / 3)}g</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Carbs/meal</p>
                  <p className="text-2xl font-bold text-blue-600">{Math.round(results.carbs.grams / 3)}g</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Fat/meal</p>
                  <p className="text-2xl font-bold text-yellow-600">{Math.round(results.fat.grams / 3)}g</p>
                </div>
              </div>
            </div>

            {/* Food Examples */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Example Foods</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Protein Sources</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Chicken breast (31g per 100g)</li>
                    <li>Greek yogurt (10g per 100g)</li>
                    <li>Eggs (13g per 100g)</li>
                    <li>Salmon (25g per 100g)</li>
                    <li>Tofu (8g per 100g)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Carb Sources</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Brown rice (23g per 100g)</li>
                    <li>Oatmeal (12g per 100g)</li>
                    <li>Sweet potato (20g per 100g)</li>
                    <li>Quinoa (21g per 100g)</li>
                    <li>Banana (23g per 100g)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-600 mb-2">Fat Sources</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Avocado (15g per 100g)</li>
                    <li>Almonds (49g per 100g)</li>
                    <li>Olive oil (100g per 100g)</li>
                    <li>Salmon (13g per 100g)</li>
                    <li>Peanut butter (50g per 100g)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-semibold text-gray-900 mb-2">Tips for Hitting Your Macros</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Track your food intake using a food diary or app to ensure you hit your targets</li>
                <li>Weigh your food for accuracy, especially calorie-dense items like nuts and oils</li>
                <li>Plan your meals in advance to make hitting your macros easier</li>
                <li>Adjust your targets after 2-3 weeks based on your results and how you feel</li>
                <li>Focus on whole, minimally processed foods for better satiety and nutrition</li>
              </ul>
            </div>

            {/* Email Capture */}
            <div className="border-t border-gray-200 pt-6">
              <EmailCapture
                title="Save Your Macro Targets"
                description="Get your personalized macros emailed to you, plus weekly meal planning tips."
                buttonText="Email My Macros"
                source="macro_calculator"
                resultData={{
                  protein: results.protein,
                  carbs: results.carbs,
                  fat: results.fat,
                  totalCalories: calories,
                  goal,
                  dietType,
                }}
              />
            </div>

            {/* What's Next - Personalized recommendations */}
            <WhatNext
              title="What's Next?"
              description="Put your macros into action"
              variant="highlight"
              suggestions={[
                {
                  title: 'Plan Your Meals',
                  description: 'Build meals that hit your macro targets',
                  href: '/calculators/meal-planner',
                  emoji: '📋',
                  highlight: true,
                },
                {
                  title: 'High-Protein Foods',
                  description: 'Best foods to reach your protein goals',
                  href: '/lists/high-protein-foods',
                  emoji: '💪',
                },
                {
                  title: 'Take the Diet Quiz',
                  description: 'Find the best eating style for you',
                  href: '/quiz/diet-personality',
                  emoji: '🎯',
                },
              ]}
            />
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="prose max-w-none mb-8">
        <h2>Understanding Macronutrients</h2>
        <p>
          Macronutrients (macros) are the three main nutrients your body needs in large amounts:
          protein, carbohydrates, and fats. Each plays unique roles in your health and body composition,
          and the ideal balance depends on your goals.
        </p>

        <h3>Protein</h3>
        <p>
          Protein is essential for building and repairing tissues, especially muscle. It has 4 calories
          per gram and the highest thermic effect, meaning your body burns about 30% of protein calories
          during digestion. Adequate protein also increases satiety and helps preserve muscle mass during
          weight loss. Aim for 0.7-1.0g per pound of body weight for active individuals.
        </p>

        <h3>Carbohydrates</h3>
        <p>
          Carbohydrates are your body's preferred energy source, especially for high-intensity exercise.
          They have 4 calories per gram and are stored as glycogen in muscles and liver. Complex carbs
          from whole grains, fruits, and vegetables provide sustained energy and important fiber. While
          low-carb diets are popular, most people perform better with moderate carb intake.
        </p>

        <h3>Fats</h3>
        <p>
          Dietary fat is essential for hormone production, brain health, and vitamin absorption. It has
          9 calories per gram, making it very calorie-dense. Focus on unsaturated fats from sources like
          avocados, nuts, seeds, olive oil, and fatty fish. Limit saturated fats and avoid trans fats.
          Even when cutting calories, don't go below 20% of calories from fat.
        </p>

        <h3>Choosing Your Diet Type</h3>
        <ul>
          <li>
            <strong>Balanced:</strong> A moderate approach suitable for most people, with adjustments
            based on your goal (loss/maintenance/gain).
          </li>
          <li>
            <strong>High Protein:</strong> Emphasizes protein for muscle building or preservation.
            Great for weight loss or body recomposition.
          </li>
          <li>
            <strong>Low Carb:</strong> Reduces carbs to 25% of calories. Can help with appetite control
            and stable blood sugar, but may reduce exercise performance.
          </li>
          <li>
            <strong>Keto:</strong> Very low carb (5%) and high fat (70%). Puts body in ketosis.
            Requires strict adherence and isn't necessary for most people.
          </li>
        </ul>

        <h3>Tracking Your Progress</h3>
        <p>
          Use a food tracking app to log your meals and monitor macro intake. After 2-3 weeks, assess
          your progress. If you're not seeing expected results, adjust your calorie target by 100-200
          calories and continue monitoring. Remember that consistency matters more than perfection.
        </p>
      </div>

      {/* Quick Actions for easy navigation */}
      <QuickActions />

      {/* Related Tools - Smart recommendations */}
      <RelatedTools current="macro" title="Continue Your Journey" />

      {/* Sticky Mobile Navigation */}
      <QuickActions variant="sticky" />
    </div>
  )
}
