import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getFoodsByNutrient, getAllFoods } from '@/lib/data'
import { NUTRIENT_FILTERS, SITE_URL, SITE_NAME } from '@/lib/constants'

interface PageProps {
  params: {
    nutrient: string
  }
}

// Generate static params for all nutrients
export async function generateStaticParams() {
  return NUTRIENT_FILTERS.map((nutrient) => ({
    nutrient: nutrient.slug,
  }))
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const filter = NUTRIENT_FILTERS.find((n) => n.slug === params.nutrient)
  if (!filter) {
    return { title: 'Nutrient Not Found' }
  }

  return {
    title: `${filter.name} - ${SITE_NAME}`,
    description: filter.description,
    alternates: {
      canonical: `${SITE_URL}/nutrients/${params.nutrient}`,
    },
    openGraph: {
      title: filter.name,
      description: filter.description,
      url: `${SITE_URL}/nutrients/${params.nutrient}`,
    },
  }
}

export default function NutrientPage({ params }: PageProps) {
  const filter = NUTRIENT_FILTERS.find((n) => n.slug === params.nutrient)

  if (!filter) {
    notFound()
  }

  const foods = getFoodsByNutrient(params.nutrient)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{filter.name}</h1>
          <p className="text-xl text-slate-600 mb-4">{filter.description}</p>
          <p className="text-slate-500">
            Showing {foods.length} {foods.length === 1 ? 'food' : 'foods'} matching this nutrient profile
          </p>
        </div>

        {/* Foods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {foods.map((food) => (
            <Link
              key={food.slug}
              href={`/calories-in/${food.slug}`}
              className="group bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                {food.name}
              </h3>
              <p className="text-sm text-slate-500 mb-3 capitalize">{food.category}</p>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Calories</span>
                  <span className="font-semibold text-slate-900">{food.nutritionPer100g.calories}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Protein</span>
                  <span className="font-semibold text-slate-900">{food.nutritionPer100g.protein}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Carbs</span>
                  <span className="font-semibold text-slate-900">{food.nutritionPer100g.carbs}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Fat</span>
                  <span className="font-semibold text-slate-900">{food.nutritionPer100g.fat}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Fiber</span>
                  <span className="font-semibold text-slate-900">{food.nutritionPer100g.fiber}g</span>
                </div>
              </div>

              <div className="mt-4 inline-block text-blue-600 text-sm font-medium group-hover:underline">
                View details →
              </div>
            </Link>
          ))}
        </div>

        {foods.length === 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <p className="text-blue-900 text-lg">No foods found matching this nutrient profile.</p>
          </div>
        )}

        {/* Related Nutrients */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Other Nutrient Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {NUTRIENT_FILTERS.filter((n) => n.slug !== params.nutrient).map((nutrient) => (
              <Link
                key={nutrient.slug}
                href={`/nutrients/${nutrient.slug}`}
                className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-4 hover:bg-blue-50"
              >
                <h3 className="font-semibold text-slate-900 mb-1">{nutrient.name}</h3>
                <p className="text-sm text-slate-600">{nutrient.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
