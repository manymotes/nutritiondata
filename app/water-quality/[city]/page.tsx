import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getWaterQualityData,
  getAllWaterQualitySlugs,
  getGradeColor,
  getGradeBackgroundColor,
  getTrendIndicator,
  getTrendColor,
  type WaterQualityData
} from '@/lib/waterQualityData'

interface PageProps {
  params: {
    city: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllWaterQualitySlugs()
  return slugs.map((slug) => ({
    city: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getWaterQualityData(params.city)

  if (!data) {
    return {
      title: 'City Not Found',
    }
  }

  const title = `${data.city}, ${data.stateCode} Water Quality Report ${new Date().getFullYear()} | Grade: ${data.waterGrade}`
  const description = `Comprehensive water quality report for ${data.city}, ${data.state}. Grade: ${data.waterGrade}. Detailed analysis of water sources, contaminants, treatment facilities, and safety information.`
  const canonicalUrl = `https://uswatergrade.com/water-quality/${params.city}/`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonicalUrl,
    },
  }
}

function WaterSourcesSection({ data }: { data: WaterQualityData }) {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Water Sources</h2>
      <p className="text-gray-600 mb-6">
        {data.city} receives its drinking water from {data.waterSources.length === 1 ? 'one primary source' : 'multiple sources'}:
      </p>
      <div className="space-y-4">
        {data.waterSources.map((source, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg text-gray-900">{source.name}</h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {source.percentage}%
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-2">{source.type}</p>
            <p className="text-gray-700">{source.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ContaminantsSection({ data }: { data: WaterQualityData }) {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Detected Contaminants</h2>
      <p className="text-gray-600 mb-6">
        All contaminants listed below are within legal limits, but some may exceed health guidelines.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contaminant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Detected Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Legal Limit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Health Goal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trend
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.contaminants.map((contaminant, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {contaminant.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {contaminant.level} {contaminant.unit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {contaminant.legalLimit} {contaminant.unit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {contaminant.healthGoal} {contaminant.unit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    contaminant.status === 'Below Legal Limit' || contaminant.status === 'Optimal'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {contaminant.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={getTrendColor(contaminant.trend)}>
                    {getTrendIndicator(contaminant.trend)} {contaminant.trend}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function ContaminationHistorySection({ data }: { data: WaterQualityData }) {
  if (data.contaminationHistory.length === 0) {
    return null
  }

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Contamination History</h2>
      <div className="space-y-6">
        {data.contaminationHistory.map((incident, index) => (
          <div key={index} className="border-l-4 border-orange-500 pl-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                {incident.year}
              </span>
              <h3 className="font-semibold text-lg text-gray-900">{incident.incident}</h3>
            </div>
            <p className="text-gray-700 mb-3">{incident.description}</p>
            <div className="bg-green-50 border-l-4 border-green-500 p-3">
              <p className="text-sm font-medium text-green-900 mb-1">Resolution:</p>
              <p className="text-sm text-green-800">{incident.resolution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function StateComparisonSection({ data }: { data: WaterQualityData }) {
  const comparisons = [
    { label: 'Lead Compliance', city: data.qualityMetrics.leadCompliance, state: data.stateAverages.leadCompliance },
    { label: 'Bacterial Compliance', city: data.qualityMetrics.bacterialCompliance, state: data.stateAverages.bacterialCompliance },
    { label: 'Chemical Compliance', city: data.qualityMetrics.chemicalCompliance, state: data.stateAverages.chemicalCompliance },
    { label: 'Overall Score', city: data.overallScore, state: data.stateAverages.overallScore },
  ]

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Comparison with {data.state} State Average
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {comparisons.map((comparison, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">{comparison.label}</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{data.city}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${comparison.city}%` }}
                    ></div>
                  </div>
                  <span className="font-semibold text-blue-600 w-12 text-right">{comparison.city}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{data.state} Avg</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gray-400 h-2 rounded-full"
                      style={{ width: `${comparison.state}%` }}
                    ></div>
                  </div>
                  <span className="font-semibold text-gray-600 w-12 text-right">{comparison.state}%</span>
                </div>
              </div>
            </div>
            {comparison.city > comparison.state && (
              <p className="text-xs text-green-600 mt-2">
                {(comparison.city - comparison.state).toFixed(1)} points above state average
              </p>
            )}
            {comparison.city < comparison.state && (
              <p className="text-xs text-orange-600 mt-2">
                {(comparison.state - comparison.city).toFixed(1)} points below state average
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function TrendsChart({ data }: { data: WaterQualityData }) {
  const maxScore = Math.max(...data.trends.map(t => t.overallScore))
  const minScore = Math.min(...data.trends.map(t => t.overallScore))

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Water Quality Trends</h2>
      <p className="text-gray-600 mb-6">
        Overall water quality score over the past {data.trends.length} years
      </p>
      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between gap-2 pb-8">
          {data.trends.map((trend, index) => {
            const heightPercent = ((trend.overallScore - minScore) / (maxScore - minScore + 10)) * 100
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="text-sm font-semibold text-gray-900 mb-2">
                  {trend.overallScore}
                </div>
                <div
                  className="w-full bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600"
                  style={{ height: `${heightPercent}%` }}
                ></div>
                <div className="text-xs text-gray-600 mt-2">{trend.year}</div>
              </div>
            )
          })}
        </div>
      </div>
      {data.trends[data.trends.length - 1].overallScore > data.trends[0].overallScore ? (
        <p className="text-green-600 text-sm mt-4">
          Water quality has improved by {(data.trends[data.trends.length - 1].overallScore - data.trends[0].overallScore).toFixed(1)} points since {data.trends[0].year}
        </p>
      ) : data.trends[data.trends.length - 1].overallScore < data.trends[0].overallScore ? (
        <p className="text-orange-600 text-sm mt-4">
          Water quality has decreased by {(data.trends[0].overallScore - data.trends[data.trends.length - 1].overallScore).toFixed(1)} points since {data.trends[0].year}
        </p>
      ) : (
        <p className="text-gray-600 text-sm mt-4">
          Water quality has remained stable since {data.trends[0].year}
        </p>
      )}
    </section>
  )
}

function FAQSection({ data }: { data: WaterQualityData }) {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Frequently Asked Questions - {data.city} Water Quality
      </h2>
      <div className="space-y-6">
        {data.faq.map((item, index) => (
          <div key={index} className="border-b last:border-b-0 pb-6 last:pb-0">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function RelatedCitiesSection({ data }: { data: WaterQualityData }) {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Nearby Water Utilities</h2>
      <p className="text-gray-600 mb-4">
        Compare water quality in nearby cities:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.nearbyUtilities.map((city, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 hover:shadow-md transition-all text-center"
          >
            <p className="text-sm font-medium text-gray-900">{city}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function WaterQualityPage({ params }: PageProps) {
  const data = getWaterQualityData(params.city)

  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {' > '}
            <Link href="/water-quality" className="hover:text-blue-600">Water Quality</Link>
            {' > '}
            <span className="text-gray-900">{data.city}, {data.stateCode}</span>
          </nav>

          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {data.city}, {data.state} Water Quality Report
          </h1>
          <p className="text-gray-600">
            Population: {data.population.toLocaleString()} | Last Updated: {new Date(data.lastUpdated).toLocaleDateString()}
          </p>
        </div>

        {/* Grade Card */}
        <div className={`rounded-lg border-2 p-8 mb-8 ${getGradeBackgroundColor(data.waterGrade)}`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Overall Water Quality Grade</h2>
              <p className="text-gray-700">
                Based on compliance rates, contaminant levels, and treatment effectiveness
              </p>
            </div>
            <div className="text-center">
              <div className={`text-6xl font-bold ${getGradeColor(data.waterGrade)}`}>
                {data.waterGrade}
              </div>
              <div className="text-2xl font-semibold text-gray-700 mt-2">
                {data.overallScore}/100
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl font-bold text-green-600">{data.qualityMetrics.leadCompliance}%</div>
            <div className="text-sm text-gray-600 mt-1">Lead Compliance</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">{data.qualityMetrics.bacterialCompliance}%</div>
            <div className="text-sm text-gray-600 mt-1">Bacterial Compliance</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">{data.qualityMetrics.chemicalCompliance}%</div>
            <div className="text-sm text-gray-600 mt-1">Chemical Compliance</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl font-bold text-orange-600">{data.qualityMetrics.pH}</div>
            <div className="text-sm text-gray-600 mt-1">pH Level</div>
          </div>
        </div>

        {/* Main Content Sections */}
        <WaterSourcesSection data={data} />
        <ContaminantsSection data={data} />
        <StateComparisonSection data={data} />
        <TrendsChart data={data} />
        <ContaminationHistorySection data={data} />
        <FAQSection data={data} />
        <RelatedCitiesSection data={data} />

        {/* Utility Information */}
        <section className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Utility Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Water Provider</h3>
              <p className="text-gray-700">{data.additionalInfo.waterUtility}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
              <p className="text-gray-700">Customer Service: {data.additionalInfo.customerServicePhone}</p>
              <p className="text-gray-700">Emergency: {data.additionalInfo.emergencyPhone}</p>
            </div>
          </div>
          <div className="mt-4">
            <a
              href={data.additionalInfo.annualWaterReport}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Official Annual Water Quality Report →
            </a>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-gray-700">
          <p className="font-semibold mb-2">Data Disclaimer</p>
          <p>
            This water quality report is compiled from publicly available data and annual water quality reports.
            For the most current information, please contact your local water utility or visit their official website.
            Last updated: {new Date(data.lastUpdated).toLocaleDateString()}.
          </p>
        </div>
      </div>
    </div>
  )
}
