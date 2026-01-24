'use client'

import { useState, useEffect } from 'react'

export default function TDEECalculator() {
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

  // Clear inputs and results when switching units
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

  const calculateTDEE = () => {
    if (!validateInputs()) return

    let weightKg: number
    let heightCm: number

    if (unit === 'metric') {
      weightKg = parseFloat(weight)
      heightCm = parseFloat(height)
    } else {
      weightKg = parseFloat(weight) * 0.453592 // lbs to kg
      const feet = parseFloat(heightFeet) || 0
      const inches = parseFloat(heightInches) || 0
      heightCm = (feet * 12 + inches) * 2.54 // inches to cm
    }

    const ageNum = parseFloat(age)

    // Mifflin-St Jeor Equation
    let bmrValue: number
    if (gender === 'male') {
      bmrValue = 10 * weightKg + 6.25 * heightCm - 5 * ageNum + 5
    } else {
      bmrValue = 10 * weightKg + 6.25 * heightCm - 5 * ageNum - 161
    }

    setBmr(Math.round(bmrValue))
    setTdee(Math.round(bmrValue * parseFloat(activityLevel)))
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
      calculateTDEE()
    }
  }

  return (
    <div>
      {/* Unit Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setUnit('imperial')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            unit === 'imperial'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label="Switch to imperial units"
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
          aria-label="Switch to metric units"
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Biological Sex <span className="text-xs text-gray-500">(for BMR calculation)</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setGender('male')}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                gender === 'male'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-label="Select male for BMR calculation"
            >
              Male
            </button>
            <button
              onClick={() => setGender('female')}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                gender === 'female'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-label="Select female for BMR calculation"
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
            step="1"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            aria-label="Age in years"
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
            aria-label={`Weight in ${unit === 'imperial' ? 'pounds' : 'kilograms'}`}
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
              aria-label="Height in centimeters"
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
                aria-label="Height in feet"
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
                aria-label="Height in inches"
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
            aria-label="Select your activity level"
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
            onClick={calculateTDEE}
            className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Calculate TDEE
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
      {tdee !== null && bmr !== null && (
        <div className="mt-8 space-y-6">
          {/* BMR Result */}
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 mb-2">Basal Metabolic Rate (BMR)</p>
              <p className="text-4xl font-bold text-gray-900">{bmr} <span className="text-xl">cal/day</span></p>
              <p className="text-sm text-gray-600 mt-2">
                Calories your body burns at rest
              </p>
            </div>
          </div>

          {/* TDEE Result */}
          <div className="p-6 bg-primary-50 rounded-lg border-2 border-primary-200">
            <div className="text-center mb-4">
              <p className="text-sm text-primary-700 mb-2 font-medium">Total Daily Energy Expenditure (TDEE)</p>
              <p className="text-5xl font-bold text-primary-900">{tdee} <span className="text-2xl">cal/day</span></p>
              <p className="text-sm text-primary-700 mt-2">
                Total calories needed to maintain current weight
              </p>
            </div>
          </div>

          {/* Goal-Based Recommendations */}
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">Calorie Goals by Objective</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                <div>
                  <p className="font-medium text-gray-900">Weight Loss</p>
                  <p className="text-xs text-gray-600">Lose ~1 lb per week</p>
                </div>
                <p className="text-xl font-bold text-red-600">{tdee - 500} cal</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                <div>
                  <p className="font-medium text-gray-900">Moderate Weight Loss</p>
                  <p className="text-xs text-gray-600">Lose ~0.5 lb per week</p>
                </div>
                <p className="text-xl font-bold text-orange-600">{tdee - 250} cal</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <div>
                  <p className="font-medium text-gray-900">Maintain Weight</p>
                  <p className="text-xs text-gray-600">Stay at current weight</p>
                </div>
                <p className="text-xl font-bold text-green-600">{tdee} cal</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                <div>
                  <p className="font-medium text-gray-900">Weight Gain</p>
                  <p className="text-xs text-gray-600">Gain ~0.5 lb per week</p>
                </div>
                <p className="text-xl font-bold text-blue-600">{tdee + 250} cal</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                <div>
                  <p className="font-medium text-gray-900">Muscle Building</p>
                  <p className="text-xs text-gray-600">Gain ~1 lb per week</p>
                </div>
                <p className="text-xl font-bold text-purple-600">{tdee + 500} cal</p>
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Understanding Your Results</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>BMR (Basal Metabolic Rate):</strong> The number of calories your body needs
                to perform basic functions like breathing, circulation, and cell production while at
                complete rest. This represents about 60-75% of your daily calorie burn.
              </p>
              <p>
                <strong>TDEE (Total Daily Energy Expenditure):</strong> Your BMR multiplied by your
                activity level. This is the total number of calories you burn per day, including
                exercise and daily activities. Eat this amount to maintain your current weight.
              </p>
              <p>
                <strong>Calorie Deficit:</strong> To lose weight, consume 250-500 calories below your
                TDEE. A 500-calorie deficit typically results in losing 1 pound per week (3,500
                calories = 1 pound of fat).
              </p>
              <p>
                <strong>Calorie Surplus:</strong> To gain weight or build muscle, consume 250-500
                calories above your TDEE. Combine with strength training to ensure gains are
                primarily muscle rather than fat.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
