'use client'

import { useState, useEffect } from 'react'

export default function BMICalculator() {
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [heightFeet, setHeightFeet] = useState('')
  const [heightInches, setHeightInches] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState<string>('')
  const [error, setError] = useState<string>('')

  // Clear inputs and results when switching units
  useEffect(() => {
    setWeight('')
    setHeight('')
    setHeightFeet('')
    setHeightInches('')
    setBmi(null)
    setCategory('')
    setError('')
  }, [unit])

  const validateInputs = (): boolean => {
    setError('')

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

  const calculateBMI = () => {
    if (!validateInputs()) return

    let bmiValue: number

    if (unit === 'metric') {
      const weightKg = parseFloat(weight)
      const heightM = parseFloat(height) / 100 // convert cm to m
      bmiValue = weightKg / (heightM * heightM)
    } else {
      const weightLbs = parseFloat(weight)
      const feet = parseFloat(heightFeet) || 0
      const inches = parseFloat(heightInches) || 0
      const totalInches = feet * 12 + inches
      bmiValue = (weightLbs / (totalInches * totalInches)) * 703
    }

    setBmi(parseFloat(bmiValue.toFixed(1)))

    // Determine category
    if (bmiValue < 18.5) {
      setCategory('Underweight')
    } else if (bmiValue < 25) {
      setCategory('Normal weight')
    } else if (bmiValue < 30) {
      setCategory('Overweight')
    } else {
      setCategory('Obese')
    }
  }

  const handleReset = () => {
    setWeight('')
    setHeight('')
    setHeightFeet('')
    setHeightInches('')
    setBmi(null)
    setCategory('')
    setError('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateBMI()
    }
  }

  const getCategoryColor = () => {
    if (category === 'Normal weight') return 'text-green-600 bg-green-50'
    if (category === 'Underweight') return 'text-blue-600 bg-blue-50'
    if (category === 'Overweight') return 'text-orange-600 bg-orange-50'
    if (category === 'Obese') return 'text-red-600 bg-red-50'
    return ''
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
        {/* Weight Input */}
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

        {/* Height Input */}
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

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculateBMI}
            className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Calculate BMI
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
      {bmi !== null && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-2">Your BMI</p>
            <p className="text-5xl font-bold text-gray-900">{bmi}</p>
          </div>

          <div className="text-center mb-6">
            <span className={`inline-block px-4 py-2 rounded-full font-semibold ${getCategoryColor()}`}>
              {category}
            </span>
          </div>

          {/* BMI Scale */}
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className={bmi < 18.5 ? 'font-bold text-blue-600' : 'text-gray-600'}>
                Underweight (&lt; 18.5)
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className={bmi >= 18.5 && bmi < 25 ? 'font-bold text-green-600' : 'text-gray-600'}>
                Normal weight (18.5 - 24.9)
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className={bmi >= 25 && bmi < 30 ? 'font-bold text-orange-600' : 'text-gray-600'}>
                Overweight (25 - 29.9)
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className={bmi >= 30 ? 'font-bold text-red-600' : 'text-gray-600'}>
                Obese (≥ 30)
              </span>
            </div>
          </div>

          {/* Interpretation */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold text-gray-900 mb-2">What does this mean?</h4>
            {category === 'Underweight' && (
              <p className="text-sm text-gray-600">
                Your BMI suggests you may be underweight. Consider consulting with a healthcare
                provider about healthy weight gain strategies and ensure you're eating a
                nutrient-dense diet with adequate calories.
              </p>
            )}
            {category === 'Normal weight' && (
              <p className="text-sm text-gray-600">
                Great! Your BMI falls within the normal range. Maintain your healthy weight
                through balanced nutrition and regular physical activity. Continue monitoring
                your diet and exercise habits.
              </p>
            )}
            {category === 'Overweight' && (
              <p className="text-sm text-gray-600">
                Your BMI suggests you may be overweight. Consider adopting a balanced diet with
                a moderate calorie deficit and increasing physical activity. Small, sustainable
                changes can lead to meaningful improvements.
              </p>
            )}
            {category === 'Obese' && (
              <p className="text-sm text-gray-600">
                Your BMI falls in the obese range, which may increase health risks. We recommend
                consulting with a healthcare provider for personalized advice. Focus on gradual,
                sustainable lifestyle changes including diet and exercise.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
