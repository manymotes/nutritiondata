import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us - Our Mission & Data Sources',
  description: `Learn about ${SITE_NAME} and our mission to provide free, accurate nutrition information. Data sourced from USDA FoodData Central.`,
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        About {SITE_NAME}
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2>Our Mission</h2>
          <p>
            {SITE_NAME} provides free, accurate nutrition information to help people
            make informed dietary choices. We believe everyone deserves access to
            comprehensive food data without paywalls or required signups.
          </p>
        </section>

        <section className="mb-12">
          <h2>Our Data Sources</h2>
          <p>
            All nutrition data on {SITE_NAME} comes from the{' '}
            <a
              href="https://fdc.nal.usda.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700"
            >
              USDA FoodData Central
            </a>
            , the official database maintained by the U.S. Department of Agriculture.
            This ensures our information is accurate, reliable, and regularly updated.
          </p>
          <p>
            FoodData Central integrates data from multiple sources including:
          </p>
          <ul>
            <li>SR Legacy - Standard Reference data</li>
            <li>Foundation Foods - Enhanced nutrient profiles</li>
            <li>FNDDS - Food and Nutrient Database for Dietary Studies</li>
            <li>Branded Foods - Data from food manufacturers</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>How We Present Data</h2>
          <p>
            We standardize all nutrition information to per 100 gram servings,
            making it easy to compare different foods. We also provide common
            serving sizes (cups, tablespoons, pieces) to help you understand
            real-world portions.
          </p>
          <p>
            Our comparison tool lets you evaluate any two foods side-by-side,
            highlighting which option is better for specific nutrients like
            calories, protein, or fiber.
          </p>
        </section>

        <section className="mb-12">
          <h2>Disclaimer</h2>
          <p>
            The information provided on {SITE_NAME} is for general informational
            purposes only. It is not intended as medical or nutritional advice.
            Always consult with a qualified healthcare professional before making
            changes to your diet, especially if you have health conditions or
            dietary restrictions.
          </p>
          <p>
            While we strive to provide accurate information, nutrition data can
            vary based on growing conditions, preparation methods, and other
            factors. Use our data as a general guide rather than absolute values.
          </p>
        </section>

        <section className="mb-12">
          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or found an error? We&apos;d love to hear
            from you. Reach out to us at{' '}
            <a
              href="mailto:contact@caloriedata.io"
              className="text-primary-600 hover:text-primary-700"
            >
              contact@caloriedata.io
            </a>
            .
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Start Exploring
        </h3>
        <p className="text-gray-600 mb-6">
          Ready to find nutrition information for your favorite foods?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/category/fruits"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Browse Foods
          </Link>
          <Link
            href="/compare"
            className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium border border-primary-600 hover:bg-primary-50 transition-colors"
          >
            Compare Foods
          </Link>
        </div>
      </div>
    </div>
  )
}
