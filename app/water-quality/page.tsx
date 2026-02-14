import { Metadata } from 'next'
import Link from 'next/link'
import { getAllWaterQualityData, getGradeColor, getGradeBackgroundColor } from '@/lib/waterQualityData'

export const metadata: Metadata = {
  title: 'US Water Quality by City - 2024 Water Grades & Safety Reports',
  description: 'Comprehensive water quality reports for major US cities. View water grades, contamination levels, sources, and safety information for your city.',
  alternates: {
    canonical: 'https://uswatergrade.com/water-quality/',
  },
  openGraph: {
    title: 'US Water Quality Reports by City',
    description: 'Detailed water quality grades and reports for major US cities. Find out how safe your tap water is.',
    type: 'website',
    url: 'https://uswatergrade.com/water-quality/',
  },
}

export default function WaterQualityIndexPage() {
  const allCities = getAllWaterQualityData()

  // Group cities by state
  const citiesByState = allCities.reduce((acc, city) => {
    if (!acc[city.state]) {
      acc[city.state] = []
    }
    acc[city.state].push(city)
    return acc
  }, {} as Record<string, typeof allCities>)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold mb-4">US Water Quality Reports</h1>
          <p className="text-xl text-blue-100 mb-6">
            Comprehensive water quality data for major US cities. Find detailed reports on water sources,
            contaminants, treatment facilities, and safety information.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold">{allCities.length}</div>
              <div className="text-sm text-blue-100">Cities Covered</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold">
                {allCities.filter(c => c.waterGrade.startsWith('A')).length}
              </div>
              <div className="text-sm text-blue-100">Grade A Cities</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold">
                {allCities.reduce((sum, c) => sum + c.population, 0).toLocaleString()}
              </div>
              <div className="text-sm text-blue-100">Total Population</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold">2024</div>
              <div className="text-sm text-blue-100">Latest Data</div>
            </div>
          </div>
        </div>

        {/* Grade Distribution */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Water Quality Grade Distribution</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['A', 'B', 'C', 'D', 'F'].map(grade => {
              const count = allCities.filter(c => c.waterGrade.startsWith(grade)).length
              const percentage = allCities.length > 0 ? (count / allCities.length * 100).toFixed(1) : 0
              return (
                <div key={grade} className={`border-2 rounded-lg p-4 text-center ${getGradeBackgroundColor(grade + '-')}`}>
                  <div className={`text-4xl font-bold ${getGradeColor(grade + '-')}`}>{grade}</div>
                  <div className="text-2xl font-semibold text-gray-900 mt-2">{count}</div>
                  <div className="text-sm text-gray-600">cities ({percentage}%)</div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Search/Filter Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Find Your City</h2>
          <p className="text-gray-600 mb-4">
            Browse water quality reports by state or search for your city below.
          </p>
          {/* Note: In a real implementation, you'd add a search input here */}
        </section>

        {/* Cities by State */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Cities by State</h2>
          {Object.entries(citiesByState)
            .sort(([stateA], [stateB]) => stateA.localeCompare(stateB))
            .map(([state, cities]) => (
              <div key={state} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{state}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {cities
                    .sort((a, b) => b.population - a.population)
                    .map(city => (
                      <Link
                        key={city.slug}
                        href={`/water-quality/${city.slug}`}
                        className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-lg transition-all group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600">
                              {city.city}, {city.stateCode}
                            </h4>
                            <p className="text-sm text-gray-600">
                              Population: {city.population.toLocaleString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className={`text-2xl font-bold ${getGradeColor(city.waterGrade)}`}>
                              {city.waterGrade}
                            </div>
                            <div className="text-sm text-gray-600">{city.overallScore}/100</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                          <div className="text-center">
                            <div className="font-semibold text-gray-900">{city.qualityMetrics.leadCompliance}%</div>
                            <div className="text-gray-600">Lead</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-gray-900">{city.qualityMetrics.bacterialCompliance}%</div>
                            <div className="text-gray-600">Bacterial</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-gray-900">{city.qualityMetrics.chemicalCompliance}%</div>
                            <div className="text-gray-600">Chemical</div>
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-blue-600 group-hover:text-blue-800 font-medium">
                          View Full Report →
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
        </section>

        {/* Information Section */}
        <section className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">About Water Quality Grades</h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700 mb-4">
              Our water quality grades are calculated based on multiple factors including compliance with
              federal and state drinking water standards, contaminant levels compared to health goals,
              treatment effectiveness, and historical water quality trends.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Grading Criteria:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>EPA and state compliance rates</li>
                  <li>Contaminant levels vs. health goals</li>
                  <li>Water source quality and protection</li>
                  <li>Treatment facility technology</li>
                  <li>Historical contamination incidents</li>
                  <li>Overall trend improvements</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Grade Meanings:</h3>
                <ul className="space-y-1 text-sm">
                  <li><span className="font-semibold text-green-600">A:</span> <span className="text-gray-700">Excellent water quality, exceeds standards</span></li>
                  <li><span className="font-semibold text-blue-600">B:</span> <span className="text-gray-700">Good quality, meets all standards</span></li>
                  <li><span className="font-semibold text-yellow-600">C:</span> <span className="text-gray-700">Adequate, meets legal limits</span></li>
                  <li><span className="font-semibold text-orange-600">D:</span> <span className="text-gray-700">Concerns present, monitoring needed</span></li>
                  <li><span className="font-semibold text-red-600">F:</span> <span className="text-gray-700">Significant issues, action required</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8 text-sm text-gray-700">
          <p className="font-semibold mb-2">Important Notice</p>
          <p>
            Water quality data is compiled from publicly available sources including EPA reports, state
            environmental agencies, and municipal water quality reports. For the most current and detailed
            information about your local water quality, please contact your water utility directly or visit
            their official website.
          </p>
        </div>
      </div>
    </div>
  )
}
