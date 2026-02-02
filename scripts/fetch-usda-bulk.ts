import * as fs from 'fs'
import * as path from 'path'

const USDA_API_KEY = process.env.USDA_API_KEY || ''
const USDA_API_BASE = 'https://api.nal.usda.gov/fdc/v1'
const DATA_DIR = path.join(process.cwd(), 'data', 'foods')

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

interface USDAFood {
  fdcId: number
  description: string
  dataType: string
  brandOwner?: string
  ingredients?: string
  foodNutrients: Array<{
    nutrientId: number
    nutrientName: string
    nutrientNumber: string
    unitName: string
    value: number
  }>
  foodCategory?: { description: string }
  servingSize?: number
  servingSizeUnit?: string
  householdServingFullText?: string
}

interface FoodTarget {
  searchTerm: string
  category: string
  minResults: number
  brandFilter?: string
}

// Priority food targets for Phase 1 (500 fast food + 500 branded products)
const FAST_FOOD_TARGETS: FoodTarget[] = [
  // McDonald's (50 items)
  { searchTerm: 'McDonald\'s', category: 'fast-food', minResults: 50, brandFilter: 'McDonald\'s' },

  // Burger King (40 items)
  { searchTerm: 'Burger King', category: 'fast-food', minResults: 40, brandFilter: 'Burger King' },

  // Taco Bell (40 items)
  { searchTerm: 'Taco Bell', category: 'fast-food', minResults: 40, brandFilter: 'Taco Bell' },

  // Subway (50 items)
  { searchTerm: 'Subway', category: 'fast-food', minResults: 50, brandFilter: 'Subway' },

  // Wendy's (40 items)
  { searchTerm: 'Wendy\'s', category: 'fast-food', minResults: 40, brandFilter: 'Wendy\'s' },

  // KFC (30 items)
  { searchTerm: 'KFC', category: 'fast-food', minResults: 30, brandFilter: 'KFC' },

  // Chick-fil-A (40 items)
  { searchTerm: 'Chick-fil-A', category: 'fast-food', minResults: 40, brandFilter: 'Chick-fil-A' },

  // Pizza Hut (30 items)
  { searchTerm: 'Pizza Hut', category: 'fast-food', minResults: 30, brandFilter: 'Pizza Hut' },

  // Domino's Pizza (30 items)
  { searchTerm: 'Domino\'s', category: 'fast-food', minResults: 30, brandFilter: 'Domino\'s' },

  // Chipotle (30 items)
  { searchTerm: 'Chipotle', category: 'fast-food', minResults: 30, brandFilter: 'Chipotle' },

  // Starbucks (50 items)
  { searchTerm: 'Starbucks', category: 'fast-food', minResults: 50, brandFilter: 'Starbucks' },

  // Panera Bread (30 items)
  { searchTerm: 'Panera Bread', category: 'fast-food', minResults: 30, brandFilter: 'Panera' },
]

const BRANDED_PRODUCT_TARGETS: FoodTarget[] = [
  // Breakfast cereals (80 items)
  { searchTerm: 'Cheerios', category: 'grains', minResults: 10, brandFilter: 'General Mills' },
  { searchTerm: 'Frosted Flakes', category: 'grains', minResults: 5, brandFilter: 'Kellogg\'s' },
  { searchTerm: 'Lucky Charms', category: 'grains', minResults: 5, brandFilter: 'General Mills' },
  { searchTerm: 'Fruit Loops', category: 'grains', minResults: 5, brandFilter: 'Kellogg\'s' },
  { searchTerm: 'Special K', category: 'grains', minResults: 8, brandFilter: 'Kellogg\'s' },
  { searchTerm: 'Raisin Bran', category: 'grains', minResults: 5, brandFilter: 'Kellogg\'s' },
  { searchTerm: 'Corn Flakes', category: 'grains', minResults: 5, brandFilter: 'Kellogg\'s' },
  { searchTerm: 'Rice Krispies', category: 'grains', minResults: 5, brandFilter: 'Kellogg\'s' },
  { searchTerm: 'Cinnamon Toast Crunch', category: 'grains', minResults: 5, brandFilter: 'General Mills' },
  { searchTerm: 'Honey Nut Cheerios', category: 'grains', minResults: 5, brandFilter: 'General Mills' },
  { searchTerm: 'Wheaties', category: 'grains', minResults: 5, brandFilter: 'General Mills' },
  { searchTerm: 'Life Cereal', category: 'grains', minResults: 5, brandFilter: 'Quaker' },

  // Snack foods (100 items)
  { searchTerm: 'Doritos', category: 'snacks', minResults: 15, brandFilter: 'Frito' },
  { searchTerm: 'Cheetos', category: 'snacks', minResults: 10, brandFilter: 'Frito' },
  { searchTerm: 'Lays', category: 'snacks', minResults: 15, brandFilter: 'Frito' },
  { searchTerm: 'Ruffles', category: 'snacks', minResults: 8, brandFilter: 'Frito' },
  { searchTerm: 'Tostitos', category: 'snacks', minResults: 8, brandFilter: 'Frito' },
  { searchTerm: 'Pringles', category: 'snacks', minResults: 10, brandFilter: 'Pringles' },
  { searchTerm: 'Oreo', category: 'desserts', minResults: 8, brandFilter: 'Nabisco' },
  { searchTerm: 'Chips Ahoy', category: 'desserts', minResults: 5, brandFilter: 'Nabisco' },
  { searchTerm: 'Ritz', category: 'snacks', minResults: 8, brandFilter: 'Nabisco' },
  { searchTerm: 'Triscuit', category: 'snacks', minResults: 5, brandFilter: 'Nabisco' },

  // Yogurts (80 items)
  { searchTerm: 'Chobani', category: 'dairy', minResults: 20, brandFilter: 'Chobani' },
  { searchTerm: 'Dannon', category: 'dairy', minResults: 15, brandFilter: 'Dannon' },
  { searchTerm: 'Yoplait', category: 'dairy', minResults: 15, brandFilter: 'Yoplait' },
  { searchTerm: 'Fage', category: 'dairy', minResults: 10, brandFilter: 'Fage' },
  { searchTerm: 'Oikos', category: 'dairy', minResults: 10, brandFilter: 'Dannon' },
  { searchTerm: 'Activia', category: 'dairy', minResults: 10, brandFilter: 'Dannon' },

  // Protein bars (60 items)
  { searchTerm: 'Quest Bar', category: 'snacks', minResults: 15, brandFilter: 'Quest' },
  { searchTerm: 'Clif Bar', category: 'snacks', minResults: 15, brandFilter: 'Clif' },
  { searchTerm: 'KIND Bar', category: 'snacks', minResults: 15, brandFilter: 'KIND' },
  { searchTerm: 'RXBAR', category: 'snacks', minResults: 10, brandFilter: 'RXBAR' },
  { searchTerm: 'Zone Perfect', category: 'snacks', minResults: 5, brandFilter: 'ZonePerfect' },

  // Beverages (60 items)
  { searchTerm: 'Gatorade', category: 'beverages', minResults: 15, brandFilter: 'Gatorade' },
  { searchTerm: 'Powerade', category: 'beverages', minResults: 10, brandFilter: 'Powerade' },
  { searchTerm: 'Red Bull', category: 'beverages', minResults: 8, brandFilter: 'Red Bull' },
  { searchTerm: 'Monster Energy', category: 'beverages', minResults: 10, brandFilter: 'Monster' },
  { searchTerm: 'Vitamin Water', category: 'beverages', minResults: 10, brandFilter: 'vitaminwater' },
  { searchTerm: 'Snapple', category: 'beverages', minResults: 7, brandFilter: 'Snapple' },

  // Frozen meals (80 items)
  { searchTerm: 'Lean Cuisine', category: 'fast-food', minResults: 20, brandFilter: 'Lean Cuisine' },
  { searchTerm: 'Stouffer\'s', category: 'fast-food', minResults: 15, brandFilter: 'Stouffer' },
  { searchTerm: 'Healthy Choice', category: 'fast-food', minResults: 15, brandFilter: 'Healthy Choice' },
  { searchTerm: 'Marie Callender\'s', category: 'fast-food', minResults: 10, brandFilter: 'Marie Callender' },
  { searchTerm: 'Amy\'s Kitchen', category: 'fast-food', minResults: 20, brandFilter: 'Amy\'s' },
]

// Create slug from food name
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/--+/g, '-')      // Replace multiple hyphens with single
    .trim()
}

// Map nutrient IDs to our schema
function mapNutrients(foodNutrients: USDAFood['foodNutrients']) {
  const nutrientMap: { [key: number]: keyof any } = {
    1008: 'calories',      // Energy (kcal)
    1003: 'protein',       // Protein
    1005: 'carbs',         // Carbohydrate
    1004: 'fat',           // Total lipid (fat)
    1079: 'fiber',         // Fiber, total dietary
    2000: 'sugar',         // Sugars, total
    1093: 'sodium',        // Sodium
    1258: 'saturatedFat',  // Saturated fatty acids
    1253: 'cholesterol',   // Cholesterol
    1092: 'potassium',     // Potassium
  }

  const nutrition: any = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
    sodium: 0,
  }

  foodNutrients.forEach(nutrient => {
    const key = nutrientMap[nutrient.nutrientId]
    if (key) {
      let value = nutrient.value
      // Convert sodium from mg to mg (already in mg)
      // Convert others from g to g (already in g for most)
      nutrition[key] = Math.round(value * 100) / 100
    }
  })

  return nutrition
}

// Fetch foods from USDA API
async function searchFoods(searchTerm: string, pageSize: number = 50): Promise<USDAFood[]> {
  const url = `${USDA_API_BASE}/foods/search?api_key=${USDA_API_KEY}&query=${encodeURIComponent(searchTerm)}&pageSize=${pageSize}&dataType=Branded`

  try {
    console.log(`Fetching: ${searchTerm}...`)
    const response = await fetch(url)

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`)
      return []
    }

    const data = await response.json()
    return data.foods || []
  } catch (error) {
    console.error(`Error fetching ${searchTerm}:`, error)
    return []
  }
}

// Save food data to JSON file
function saveFoodData(food: any) {
  const filePath = path.join(DATA_DIR, `${food.slug}.json`)

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`  ⏭️  Skipped: ${food.name} (already exists)`)
    return false
  }

  fs.writeFileSync(filePath, JSON.stringify(food, null, 2))
  console.log(`  ✅ Saved: ${food.name}`)
  return true
}

// Process USDA food data into our format
function processUSDAFood(usdaFood: USDAFood, category: string) {
  const slug = createSlug(usdaFood.description)
  const nutrition = mapNutrients(usdaFood.foodNutrients)

  // Generate serving sizes
  const servingSizes = [
    { amount: 100, unit: 'g', grams: 100, label: '100 grams' },
  ]

  if (usdaFood.servingSize && usdaFood.servingSizeUnit) {
    servingSizes.push({
      amount: 1,
      unit: 'serving',
      grams: usdaFood.servingSize,
      label: usdaFood.householdServingFullText || `1 serving (${usdaFood.servingSize}${usdaFood.servingSizeUnit})`
    })
  }

  return {
    fdcId: usdaFood.fdcId.toString(),
    slug,
    name: usdaFood.description,
    category,
    description: `${usdaFood.description}${usdaFood.brandOwner ? ` from ${usdaFood.brandOwner}` : ''}`,
    servingSizes,
    nutritionPer100g: nutrition,
    source: 'usda' as const,
    updatedAt: new Date().toISOString(),
  }
}

// Fetch and save foods for a target
async function fetchTarget(target: FoodTarget): Promise<number> {
  console.log(`\n🎯 Targeting: ${target.searchTerm} (${target.category})`)

  const foods = await searchFoods(target.searchTerm, Math.min(target.minResults * 2, 200))

  if (foods.length === 0) {
    console.log(`  ❌ No foods found`)
    return 0
  }

  let savedCount = 0
  let processedCount = 0

  for (const usdaFood of foods) {
    // Apply brand filter if specified
    if (target.brandFilter && usdaFood.brandOwner && !usdaFood.brandOwner.toLowerCase().includes(target.brandFilter.toLowerCase())) {
      continue
    }

    // Skip if missing critical nutrition data
    if (!usdaFood.foodNutrients || usdaFood.foodNutrients.length === 0) {
      continue
    }

    try {
      const food = processUSDAFood(usdaFood, target.category)

      // Skip if calories are 0 (likely incomplete data)
      if (food.nutritionPer100g.calories === 0) {
        continue
      }

      if (saveFoodData(food)) {
        savedCount++
      }
      processedCount++

      // Stop if we've saved enough
      if (savedCount >= target.minResults) {
        break
      }
    } catch (error) {
      console.error(`  ⚠️  Error processing ${usdaFood.description}:`, error)
    }
  }

  console.log(`  📊 Saved ${savedCount}/${processedCount} foods (target: ${target.minResults})`)
  return savedCount
}

// Main execution
async function main() {
  console.log('🚀 Starting USDA Bulk Food Data Fetch\n')
  console.log(`API Key: ${USDA_API_KEY ? '✅ Found' : '❌ Missing'}`)
  console.log(`Data Directory: ${DATA_DIR}\n`)

  if (!USDA_API_KEY) {
    console.error('❌ ERROR: USDA_API_KEY environment variable not set')
    console.error('Please set it in your .env.local file or environment')
    process.exit(1)
  }

  const args = process.argv.slice(2)
  const mode = args[0] || 'fastfood' // Default to fastfood

  let targets: FoodTarget[] = []

  if (mode === 'fastfood') {
    console.log('📍 Mode: Fast Food Items\n')
    targets = FAST_FOOD_TARGETS
  } else if (mode === 'branded') {
    console.log('📍 Mode: Branded Products\n')
    targets = BRANDED_PRODUCT_TARGETS
  } else if (mode === 'all') {
    console.log('📍 Mode: All (Fast Food + Branded)\n')
    targets = [...FAST_FOOD_TARGETS, ...BRANDED_PRODUCT_TARGETS]
  } else {
    console.log('Usage: npm run fetch-foods [mode]')
    console.log('  mode: fastfood | branded | all (default: fastfood)')
    process.exit(1)
  }

  let totalSaved = 0

  for (let i = 0; i < targets.length; i++) {
    const target = targets[i]
    const saved = await fetchTarget(target)
    totalSaved += saved

    // Rate limiting: wait 500ms between API calls
    if (i < targets.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }

  console.log(`\n✨ Complete! Saved ${totalSaved} total foods`)
  console.log(`📁 Files saved to: ${DATA_DIR}`)
}

main().catch(console.error)
