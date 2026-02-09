import { getStrategicComparisons, getAllFoodSlugs } from '../lib/data'
import { FEATURED_FOODS } from '../lib/constants'

// Count and categorize food comparisons
function analyzeComparisons() {
  console.log('\n=== Food Comparison Analysis ===\n')

  // Get all available foods
  const allFoodSlugs = getAllFoodSlugs()
  console.log(`Total foods in database: ${allFoodSlugs.length}`)
  console.log(`Featured foods: ${FEATURED_FOODS.length}`)

  // Get strategic comparisons
  const strategicComps = getStrategicComparisons()
  console.log(`\nTotal strategic comparisons: ${strategicComps.length}`)

  // Analyze by food popularity
  const foodComparisonCount: Record<string, number> = {}
  for (const [food1, food2] of strategicComps) {
    foodComparisonCount[food1] = (foodComparisonCount[food1] || 0) + 1
    foodComparisonCount[food2] = (foodComparisonCount[food2] || 0) + 1
  }

  // Top 10 most compared foods
  const topFoods = Object.entries(foodComparisonCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)

  console.log('\nTop 10 most compared foods:')
  topFoods.forEach(([food, count], idx) => {
    console.log(`${idx + 1}. ${food}: ${count} comparisons`)
  })

  // Calculate theoretical maximum
  const maxPossible = (allFoodSlugs.length * (allFoodSlugs.length - 1)) / 2
  const coverage = ((strategicComps.length / maxPossible) * 100).toFixed(2)

  console.log(`\nTheoretical maximum comparisons: ${maxPossible.toLocaleString()}`)
  console.log(`Strategic comparison coverage: ${coverage}%`)

  // Sample comparisons
  console.log('\nSample comparisons (first 20):')
  strategicComps.slice(0, 20).forEach(([food1, food2], idx) => {
    console.log(`${idx + 1}. ${food1} vs ${food2}`)
  })

  console.log('\n=== Analysis Complete ===\n')
}

analyzeComparisons()
