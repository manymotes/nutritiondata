'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

export default function CalorieCalculatorPage() {
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial')
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [heightFeet, setHeightFeet] = useState('')
  const [heightInches, setHeightInches] = useState('')
  const [activityLevel, setActivityLevel] = useState('1.2')
  const [bmr, setBmr] = useState<number | null>(null)
  const [tdee, setTdee] = useState<number | null>(null)
  const [error, setError] = useState<string>('')

  const activityLevels = [
    { value: '1.2', label: 'Sedentary', description: 'Little or no exercise' },
    { value: '1.375', label: 'Lightly Active', description: 'Light exercise 1-3 days/week' },
    { value: '1.55', label: 'Moderately Active', description: 'Moderate exercise 3-5 days/week' },
    { value: '1.725', label: 'Very Active', description: 'Hard exercise 6-7 days/week' },
    { value: '1.9', label: 'Extremely Active', description: 'Very hard exercise & physical job' },
  ]

  useEffect(() => {
    setWeight('')
    setHeight('')
    setHeightFeet('')
    setHeightInches('')
    setBmr(null)
    setTdee(null)
    setError('')
  }, [unit])

  const validateInputs = (): boolean => {
    setError('')

    const ageNum = parseFloat(age)
    if (!age) {
      setError('Please enter your age')
      return false
    }
    if (ageNum < 10 || ageNum > 120) {
      setError('Please enter a valid age (10-120 years)')
      return false
    }

    if (unit === 'metric') {
      const weightKg = parseFloat(weight)
      const heightCm = parseFloat(height)

      if (!weight || !height) {
        setError('Please enter both weight and height')
        return false
      }
      if (weightKg <= 0 || weightKg > 500) {
        setError('Please enter a valid weight (1-500 kg)')
        return false
      }
      if (heightCm <= 0 || heightCm > 300) {
        setError('Please enter a valid height (1-300 cm)')
        return false
      }
    } else {
      const weightLbs = parseFloat(weight)
      const feet = parseFloat(heightFeet) || 0
      const inches = parseFloat(heightInches) || 0

      if (!weight || (!heightFeet && !heightInches)) {
        setError('Please enter both weight and height')
        return false
      }
      if (weightLbs <= 0 || weightLbs > 1000) {
        setError('Please enter a valid weight (1-1000 lbs)')
        return false
      }
      if (feet < 0 || feet > 9) {
        setError('Please enter a valid height (0-9 feet)')
        return false
      }
      if (inches < 0 || inches >= 12) {
        setError('Please enter valid inches (0-11)')
        return false
      }
      if (feet === 0 && inches === 0) {
        setError('Please enter a valid height')
        return false
      }
    }

    return true
  }

  const calculateCalories = () => {
    if (!validateInputs()) return

    let weightKg: number
    let heightCm: number

    if (unit === 'metric') {
      weightKg = parseFloat(weight)
      heightCm = parseFloat(height)
    } else {
      const weightLbs = parseFloat(weight)
      const feet = parseFloat(heightFeet) || 0
      const inches = parseFloat(heightInches) || 0
      const totalInches = feet * 12 + inches

      weightKg = weightLbs * 0.453592
      heightCm = totalInches * 2.54
    }

    const ageNum = parseFloat(age)

    // Mifflin-St Jeor equation for BMR
    let bmrValue: number
    if (gender === 'male') {
      bmrValue = 10 * weightKg + 6.25 * heightCm - 5 * ageNum + 5
    } else {
      bmrValue = 10 * weightKg + 6.25 * heightCm - 5 * ageNum - 161
    }

    const tdeeValue = bmrValue * parseFloat(activityLevel)

    setBmr(Math.round(bmrValue))
    setTdee(Math.round(tdeeValue))
  }

  const handleReset = () => {
    setAge('')
    setWeight('')
    setHeight('')
    setHeightFeet('')
    setHeightInches('')
    setActivityLevel('1.2')
    setBmr(null)
    setTdee(null)
    setError('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateCalories()
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
          <li className="text-gray-900 font-medium">Calorie Calculator</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Calorie Calculator - TDEE & BMR Calculator
        </h1>
        <p className="text-lg text-gray-600">
          Calculate your Total Daily Energy Expenditure (TDEE) and Basal Metabolic Rate (BMR)
          to determine how many calories you need per day to maintain, lose, or gain weight.
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
            Imperial (lb, ft, in)
          </button>
          <button
            onClick={() => setUnit('metric')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              unit === 'metric'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Metric (kg, cm)
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
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <div className="flex gap-4">
              <button
                onClick={() => setGender('male')}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                  gender === 'male'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Male
              </button>
              <button
                onClick={() => setGender('female')}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                  gender === 'female'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Female
              </button>
            </div>
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
              Age (years)
            </label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g., 30"
              min="10"
              max="120"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

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

          {/* Height */}
          {unit === 'metric' ? (
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
                Height (cm)
              </label>
              <input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g., 170"
                min="1"
                max="300"
                step="0.1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="heightFeet" className="block text-sm font-medium text-gray-700 mb-2">
                  Height (feet)
                </label>
                <input
                  id="heightFeet"
                  type="number"
                  value={heightFeet}
                  onChange={(e) => setHeightFeet(e.target.value)}
                  placeholder="e.g., 5"
                  min="0"
                  max="9"
                  step="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="heightInches" className="block text-sm font-medium text-gray-700 mb-2">
                  Height (inches)
                </label>
                <input
                  id="heightInches"
                  type="number"
                  value={heightInches}
                  onChange={(e) => setHeightInches(e.target.value)}
                  placeholder="e.g., 8"
                  min="0"
                  max="11"
                  step="0.1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Activity Level */}
          <div>
            <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700 mb-2">
              Activity Level
            </label>
            <select
              id="activityLevel"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {activityLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label} - {level.description}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={calculateCalories}
              className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Calculate Calories
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
        {bmr !== null && tdee !== null && (
          <div className="mt-8 space-y-6">
            {/* BMR and TDEE */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Basal Metabolic Rate (BMR)</p>
                <p className="text-4xl font-bold text-gray-900">{bmr}</p>
                <p className="text-sm text-gray-600 mt-1">calories/day at rest</p>
              </div>
              <div className="p-6 bg-primary-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Total Daily Energy Expenditure (TDEE)</p>
                <p className="text-4xl font-bold text-primary-600">{tdee}</p>
                <p className="text-sm text-gray-600 mt-1">calories/day with activity</p>
              </div>
            </div>

            {/* Calorie Goals */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Calorie Targets</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Weight Loss</h4>
                  <p className="text-2xl font-bold text-red-600">{Math.round(tdee * 0.8)}</p>
                  <p className="text-sm text-gray-600 mt-1">cal/day (-20%)</p>
                  <p className="text-xs text-gray-500 mt-2">Lose ~1 lb/week</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Maintenance</h4>
                  <p className="text-2xl font-bold text-green-600">{tdee}</p>
                  <p className="text-sm text-gray-600 mt-1">cal/day</p>
                  <p className="text-xs text-gray-500 mt-2">Maintain current weight</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Muscle Gain</h4>
                  <p className="text-2xl font-bold text-blue-600">{Math.round(tdee * 1.1)}</p>
                  <p className="text-sm text-gray-600 mt-1">cal/day (+10%)</p>
                  <p className="text-xs text-gray-500 mt-2">Gain ~0.5 lb/week</p>
                </div>
              </div>
            </div>

            {/* Interpretation */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-semibold text-gray-900 mb-2">Understanding Your Results</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <strong>BMR ({bmr} cal/day):</strong> This is the number of calories your body burns
                  at complete rest just to maintain basic life functions like breathing and circulation.
                </p>
                <p>
                  <strong>TDEE ({tdee} cal/day):</strong> This is your total daily calorie burn including
                  your BMR plus calories burned through daily activities and exercise.
                </p>
                <p>
                  To lose weight, eat fewer calories than your TDEE. To gain weight or build muscle,
                  eat more calories than your TDEE. To maintain your current weight, eat around your TDEE.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="prose max-w-none mb-8">
        <h2>About the Calorie Calculator</h2>
        <p>
          This calculator determines your Total Daily Energy Expenditure (TDEE) and Basal Metabolic Rate (BMR)
          using the Mifflin-St Jeor equation, which is considered one of the most accurate formulas for estimating
          calorie needs. Understanding these numbers is crucial for achieving any weight or body composition goal.
        </p>

        <h3>What is BMR?</h3>
        <p>
          Basal Metabolic Rate (BMR) is the number of calories your body needs to perform basic life-sustaining
          functions like breathing, circulation, cell production, and nutrient processing. It represents about 60-75%
          of your total daily calorie burn. Even if you stayed in bed all day, your body would burn this many calories.
        </p>

        <h3>What is TDEE?</h3>
        <p>
          Total Daily Energy Expenditure (TDEE) is the total number of calories you burn in a 24-hour period.
          It includes your BMR plus calories burned through physical activity, exercise, and the thermic effect
          of food (calories used to digest food). TDEE is the number you should use when setting calorie targets
          for your goals.
        </p>

        <h3>How to Use Your Results</h3>
        <ul>
          <li>
            <strong>For Weight Loss:</strong> Create a calorie deficit by eating 15-20% below your TDEE.
            This typically results in 0.5-1 lb of weight loss per week, which is a healthy, sustainable pace.
          </li>
          <li>
            <strong>For Maintenance:</strong> Eat at your TDEE to maintain your current weight. This is useful
            for transitioning after a weight loss or gain phase.
          </li>
          <li>
            <strong>For Muscle Gain:</strong> Eat 5-10% above your TDEE combined with resistance training.
            This modest surplus supports muscle growth while minimizing fat gain.
          </li>
        </ul>

        <h3>Activity Level Guidelines</h3>
        <ul>
          <li><strong>Sedentary:</strong> Desk job with little to no exercise</li>
          <li><strong>Lightly Active:</strong> Light exercise or sports 1-3 days per week</li>
          <li><strong>Moderately Active:</strong> Moderate exercise 3-5 days per week</li>
          <li><strong>Very Active:</strong> Hard exercise 6-7 days per week</li>
          <li><strong>Extremely Active:</strong> Very hard daily exercise plus a physical job</li>
        </ul>

        <h3>Important Considerations</h3>
        <p>
          These calculations provide estimates based on population averages. Individual metabolic rates can vary
          due to factors like genetics, muscle mass, hormones, and medical conditions. Use these numbers as a
          starting point, then adjust based on your results after 2-3 weeks. If you are not seeing the expected
          changes, adjust your calorie intake by 100-200 calories and monitor for another few weeks.
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Calculate Your Macros Next
        </h3>
        <p className="text-gray-700 mb-4">
          Now that you know your calorie target, use our macro calculator to determine the ideal
          protein, carbs, and fat distribution for your goals.
        </p>
        <Link
          href="/calculators/macro-calculator"
          className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Calculate Macros
        </Link>
      </div>

      {/* Related Calculators */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Calculators</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/calculators/bmi-calculator"
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">BMI Calculator</h4>
            <p className="text-sm text-gray-600">Calculate your Body Mass Index</p>
          </Link>
          <Link
            href="/calculators/macro-calculator"
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Macro Calculator</h4>
            <p className="text-sm text-gray-600">Calculate protein, carbs, and fat targets</p>
          </Link>
          <Link
            href="/calculators/meal-planner"
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Meal Planner</h4>
            <p className="text-sm text-gray-600">Plan meals to hit your targets</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
