import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'
import BMICalculator from '@/components/calculators/BMICalculator'
import TDEECalculator from '@/components/calculators/TDEECalculator'
import MacroCalculator from '@/components/calculators/MacroCalculator'

interface PageProps {
  params: {
    calculator: string
  }
}

interface Calculator {
  slug: string
  title: string
  description: string
  longDescription: string
  component: React.ComponentType
}

const CALCULATORS: Record<string, Calculator> = {
  'bmi': {
    slug: 'bmi',
    title: 'BMI Calculator - Body Mass Index Calculator',
    description: 'Calculate your Body Mass Index (BMI) and determine if you are underweight, normal weight, overweight, or obese. Free, accurate BMI calculator with imperial and metric units.',
    longDescription: 'Body Mass Index (BMI) is a simple calculation using your height and weight to determine if your weight falls within a healthy range. While BMI has limitations (it doesn\'t account for muscle mass or body composition), it\'s a useful screening tool recommended by the CDC and WHO for assessing weight-related health risks.',
    component: BMICalculator,
  },
  'tdee': {
    slug: 'tdee',
    title: 'TDEE Calculator - Total Daily Energy Expenditure',
    description: 'Calculate your Total Daily Energy Expenditure (TDEE) and BMR to determine how many calories you need per day. Includes weight loss, maintenance, and muscle gain recommendations.',
    longDescription: 'Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns in a day, including your Basal Metabolic Rate (BMR) plus calories burned through activity and exercise. Knowing your TDEE is essential for setting calorie targets whether you want to lose weight, maintain your current weight, or build muscle.',
    component: TDEECalculator,
  },
  'macros': {
    slug: 'macros',
    title: 'Macro Calculator - Macronutrient Calculator',
    description: 'Calculate your ideal daily macronutrient intake (protein, carbs, fat) based on your calorie goals. Perfect for weight loss, maintenance, or muscle building.',
    longDescription: 'Macronutrient (macro) distribution determines how your daily calories are split between protein, carbohydrates, and fats. The ideal macro ratio depends on your fitness goals: higher protein for muscle building, moderate carbs for energy, and adequate fats for hormonal health. This calculator provides science-backed macro targets for weight loss, maintenance, and muscle gain.',
    component: MacroCalculator,
  },
}

export async function generateStaticParams() {
  return Object.keys(CALCULATORS).map((slug) => ({ calculator: slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const calc = CALCULATORS[params.calculator]

  if (!calc) {
    return { title: 'Calculator Not Found' }
  }

  return {
    title: `${calc.title} | ${SITE_NAME}`,
    description: calc.description,
    openGraph: {
      title: calc.title,
      description: calc.description,
    },
  }
}

export default function CalculatorPage({ params }: PageProps) {
  const calc = CALCULATORS[params.calculator]

  if (!calc) {
    notFound()
  }

  const CalculatorComponent = calc.component

  // Get related calculators
  const relatedCalcs = Object.values(CALCULATORS).filter(c => c.slug !== params.calculator)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
          <li>/</li>
          <li><Link href="/calculators" className="hover:text-gray-700">Calculators</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{calc.title.split(' - ')[0]}</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {calc.title}
        </h1>
        <p className="text-lg text-gray-600">
          {calc.description}
        </p>
      </div>

      {/* Calculator Component */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-8">
        <CalculatorComponent />
      </div>

      {/* Educational Content */}
      <div className="prose max-w-none mb-8">
        <h2>About This Calculator</h2>
        <p>{calc.longDescription}</p>

        {params.calculator === 'bmi' && (
          <>
            <h3>How is BMI Calculated?</h3>
            <p>
              BMI is calculated using the formula: <strong>weight (kg) / height (m)²</strong> for
              metric units, or <strong>(weight (lbs) / height (in)²) × 703</strong> for imperial
              units. The resulting number is then classified into categories: underweight (&lt;18.5),
              normal weight (18.5-24.9), overweight (25-29.9), or obese (≥30).
            </p>

            <h3>BMI Limitations</h3>
            <p>
              While BMI is a useful screening tool, it has limitations. It doesn't distinguish
              between muscle and fat mass, so athletes or very muscular individuals may have high
              BMIs despite being healthy. It also doesn't account for body fat distribution or other
              health markers. Always consult healthcare professionals for comprehensive health
              assessments.
            </p>

            <h3>What is a Healthy BMI?</h3>
            <p>
              For most adults, a BMI between 18.5 and 24.9 is considered healthy. However, optimal
              BMI can vary based on factors like age, sex, ethnicity, and individual body composition.
              Some research suggests slightly different ranges may be healthier for certain populations.
            </p>
          </>
        )}

        {params.calculator === 'tdee' && (
          <>
            <h3>How is TDEE Calculated?</h3>
            <p>
              TDEE is calculated in two steps. First, your Basal Metabolic Rate (BMR) is determined
              using the Mifflin-St Jeor equation, which considers your weight, height, age, and sex.
              Then, BMR is multiplied by an activity multiplier (1.2 for sedentary up to 1.9 for
              extremely active) to get your TDEE.
            </p>

            <h3>Creating a Calorie Deficit for Weight Loss</h3>
            <p>
              To lose weight, you need to consume fewer calories than your TDEE. A deficit of 500
              calories per day typically results in losing about 1 pound per week (since 3,500
              calories equals approximately 1 pound of fat). For sustainable weight loss, aim for
              a deficit of 300-750 calories per day, which translates to 0.5-1.5 pounds per week.
            </p>

            <h3>Calorie Surplus for Muscle Building</h3>
            <p>
              Building muscle requires eating in a calorie surplus (more than your TDEE) combined
              with progressive resistance training. A surplus of 250-500 calories per day supports
              muscle growth while minimizing fat gain. Ensure adequate protein intake (0.7-1g per
              pound of body weight) for optimal muscle protein synthesis.
            </p>

            <h3>Activity Level Guidance</h3>
            <ul>
              <li><strong>Sedentary:</strong> Desk job, minimal walking, no exercise</li>
              <li><strong>Lightly Active:</strong> Light exercise or sports 1-3 days/week</li>
              <li><strong>Moderately Active:</strong> Moderate exercise 3-5 days/week</li>
              <li><strong>Very Active:</strong> Hard exercise 6-7 days/week</li>
              <li><strong>Extremely Active:</strong> Very hard exercise daily + physical job</li>
            </ul>
          </>
        )}

        {params.calculator === 'macros' && (
          <>
            <h3>Macro Ratios by Goal</h3>
            <p>
              The ideal macronutrient distribution depends on your fitness goal:
            </p>
            <ul>
              <li>
                <strong>Weight Loss:</strong> Higher protein (35%) helps preserve muscle during a
                calorie deficit, moderate carbs (35%) provide energy, and adequate fat (30%)
                supports hormones and satiety.
              </li>
              <li>
                <strong>Maintenance:</strong> Balanced distribution with 30% protein, 40% carbs,
                and 30% fat supports overall health while maintaining current body composition.
              </li>
              <li>
                <strong>Muscle Gain:</strong> Adequate protein (30%) for muscle synthesis, higher
                carbs (45%) to fuel intense training and recovery, and moderate fat (25%) for
                hormonal support.
              </li>
            </ul>

            <h3>Why Protein Matters</h3>
            <p>
              Protein is essential for building and repairing tissues, especially muscle. It also
              has the highest thermic effect (your body burns ~30% of protein calories during
              digestion) and increases satiety. For active individuals or those in a calorie deficit,
              aim for 0.7-1.0g of protein per pound of body weight daily.
            </p>

            <h3>Carbohydrate Timing</h3>
            <p>
              While total daily carb intake matters most, timing can optimize performance. Consume
              carbs before workouts for energy and after workouts to replenish glycogen stores.
              Choose complex carbs (whole grains, sweet potatoes) over simple sugars for sustained
              energy.
            </p>

            <h3>Healthy Fat Sources</h3>
            <p>
              Focus on unsaturated fats from sources like avocados, nuts, seeds, olive oil, and
              fatty fish. These support hormone production, brain health, and vitamin absorption.
              Limit saturated fats and avoid trans fats. Remember that fat is calorie-dense (9
              cal/g), so measure portions carefully.
            </p>

            <h3>Tracking Your Macros</h3>
            <p>
              Use a food tracking app to log meals and monitor your macro intake. Weigh food for
              accuracy, especially calorie-dense items. After 2-3 weeks, assess your progress and
              adjust macros if needed. Consistency matters more than perfection—aim to hit your
              targets within ±5g daily.
            </p>
          </>
        )}
      </div>

      {/* Related Food Lists CTA */}
      <div className="bg-primary-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Find Foods That Fit Your Goals
        </h3>
        <p className="text-gray-700 mb-4">
          Now that you know your targets, explore our food database to find meals that match
          your calorie and macro goals.
        </p>
        <div className="flex flex-wrap gap-3">
          {params.calculator === 'bmi' && (
            <>
              <Link
                href="/lists/low-calorie-foods"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Low Calorie Foods
              </Link>
              <Link
                href="/blog/low-calorie-foods-for-weight-loss"
                className="border-2 border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Weight Loss Guide
              </Link>
            </>
          )}
          {params.calculator === 'tdee' && (
            <>
              <Link
                href="/lists/high-protein-foods"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                High Protein Foods
              </Link>
              <Link
                href="/compare"
                className="border-2 border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Compare Foods
              </Link>
            </>
          )}
          {params.calculator === 'macros' && (
            <>
              <Link
                href="/lists/high-protein-foods"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                High Protein Foods
              </Link>
              <Link
                href="/blog/high-protein-foods-for-muscle-building"
                className="border-2 border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Muscle Building Guide
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Related Calculators */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Calculators</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {relatedCalcs.map((relatedCalc) => (
            <Link
              key={relatedCalc.slug}
              href={`/calculators/${relatedCalc.slug}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {relatedCalc.title.split(' - ')[0]}
              </h4>
              <p className="text-sm text-gray-600">
                {relatedCalc.description.split('.')[0]}.
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: calc.title,
            description: calc.description,
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />
    </div>
  )
}
