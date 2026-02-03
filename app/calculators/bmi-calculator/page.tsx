'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

export default function BMICalculatorPage() {
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [heightFeet, setHeightFeet] = useState('')
  const [heightInches, setHeightInches] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState<string>('')
  const [error, setError] = useState<string>('')

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
      const heightM = parseFloat(height) / 100
      bmiValue = weightKg / (heightM * heightM)
    } else {
      const weightLbs = parseFloat(weight)
      const feet = parseFloat(heightFeet) || 0
      const inches = parseFloat(heightInches) || 0
      const totalInches = feet * 12 + inches
      bmiValue = (weightLbs / (totalInches * totalInches)) * 703
    }

    setBmi(parseFloat(bmiValue.toFixed(1)))

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
          <li>/</li>
          <li><Link href="/calculators" className="hover:text-gray-700">Calculators</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">BMI Calculator</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          BMI Calculator - Body Mass Index Calculator
        </h1>
        <p className="text-lg text-gray-600">
          Calculate your Body Mass Index (BMI) and determine if you are underweight, normal weight,
          overweight, or obese. Free, accurate BMI calculator with imperial and metric units.
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
                  provider about healthy weight gain strategies and ensure you are eating a
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

      {/* Educational Content */}
      <div className="prose max-w-none mb-8">
        <h2>About BMI (Body Mass Index)</h2>
        <p>
          Body Mass Index (BMI) is a simple calculation using your height and weight to determine if your
          weight falls within a healthy range. The formula was developed in the 1800s by Belgian statistician
          Adolphe Quetelet and has become a widely-used screening tool by healthcare professionals worldwide.
        </p>

        <h3>How is BMI Calculated?</h3>
        <p>
          BMI is calculated using the formula: <strong>weight (kg) / height (m)²</strong> for metric units,
          or <strong>(weight (lbs) / height (in)²) × 703</strong> for imperial units. The resulting number
          is then classified into categories:
        </p>
        <ul>
          <li><strong>Underweight:</strong> BMI less than 18.5</li>
          <li><strong>Normal weight:</strong> BMI between 18.5 and 24.9</li>
          <li><strong>Overweight:</strong> BMI between 25 and 29.9</li>
          <li><strong>Obese:</strong> BMI of 30 or greater</li>
        </ul>

        <h3>Limitations of BMI</h3>
        <p>
          While BMI is a useful screening tool, it has important limitations that you should be aware of:
        </p>
        <ul>
          <li>
            <strong>Doesn't distinguish between muscle and fat:</strong> Athletes and very muscular individuals
            may have high BMIs despite being healthy and having low body fat.
          </li>
          <li>
            <strong>Doesn't account for body fat distribution:</strong> BMI doesn't tell you where fat is stored.
            Abdominal fat carries higher health risks than fat stored elsewhere.
          </li>
          <li>
            <strong>Age and sex differences:</strong> BMI doesn't account for natural variations in body
            composition between men and women, or changes that occur with aging.
          </li>
          <li>
            <strong>Ethnic variations:</strong> Some research suggests different BMI thresholds may be more
            appropriate for certain ethnic groups.
          </li>
        </ul>

        <h3>What is a Healthy BMI?</h3>
        <p>
          For most adults, a BMI between 18.5 and 24.9 is considered healthy. However, optimal BMI can vary
          based on factors like age, sex, ethnicity, and individual body composition. Some research suggests
          slightly different ranges may be healthier for certain populations. For example, Asian populations
          may have higher health risks at lower BMI levels.
        </p>

        <h3>Beyond BMI: Other Health Measures</h3>
        <p>
          BMI is just one tool for assessing health. Consider these additional measures for a more complete picture:
        </p>
        <ul>
          <li><strong>Waist circumference:</strong> A better indicator of abdominal fat and health risks</li>
          <li><strong>Body fat percentage:</strong> More accurate than BMI for assessing body composition</li>
          <li><strong>Waist-to-hip ratio:</strong> Helpful for assessing fat distribution patterns</li>
          <li><strong>Blood pressure and cholesterol:</strong> Direct measures of cardiovascular health</li>
          <li><strong>Physical fitness:</strong> Strength, endurance, and flexibility are important health markers</li>
        </ul>

        <h3>When to See a Healthcare Provider</h3>
        <p>
          Always consult healthcare professionals for comprehensive health assessments. BMI is a screening tool,
          not a diagnostic tool. If your BMI suggests you may be underweight or overweight, talk to your doctor
          about whether you should make changes and how to do so safely. They can consider your full health picture,
          including family history, lifestyle factors, and other health markers.
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Calculate Your Calorie Needs
        </h3>
        <p className="text-gray-700 mb-4">
          Now that you know your BMI, use our calorie calculator to determine how many calories you
          need per day to reach your goals.
        </p>
        <Link
          href="/calculators/calorie-calculator"
          className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Calculate Calories
        </Link>
      </div>

      {/* Related Calculators */}
      <div className="border-t border-gray-200 pt-8">
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
