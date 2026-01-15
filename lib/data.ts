import * as fs from 'fs'
import * as path from 'path'
import { FoodData, NutritionData } from '@/types/food'
import { POPULAR_FOODS } from './constants'

// Load food data from JSON file
export function getFoodData(slug: string): FoodData | null {
  try {
    const filePath = path.join(process.cwd(), 'data', 'foods', `${slug}.json`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch {
    // Return sample data if file doesn't exist
    return generateSampleFoodData(slug)
  }
}

// Get all foods
export function getAllFoods(): FoodData[] {
  try {
    const foodsDir = path.join(process.cwd(), 'data', 'foods')
    const files = fs.readdirSync(foodsDir).filter(f => f.endsWith('.json') && f !== 'index.json')
    return files.map(file => {
      const content = fs.readFileSync(path.join(foodsDir, file), 'utf-8')
      return JSON.parse(content)
    })
  } catch {
    // Return sample data for popular foods
    return POPULAR_FOODS.map(food => generateSampleFoodData(food.slug)!)
  }
}

// Get foods by category
export function getFoodsByCategory(category: string): FoodData[] {
  const allFoods = getAllFoods()
  return allFoods.filter(food => food.category === category)
}

// Generate sample data for development
function generateSampleFoodData(slug: string): FoodData | null {
  const foodInfo = POPULAR_FOODS.find(f => f.slug === slug)
  if (!foodInfo) return null

  // Sample nutrition data based on food type
  const sampleNutrition: Record<string, NutritionData> = {
    'banana': { calories: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6, sugar: 12, sodium: 1 },
    'apple': { calories: 52, protein: 0.3, carbs: 14, fat: 0.2, fiber: 2.4, sugar: 10, sodium: 1 },
    'chicken-breast': { calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, sugar: 0, sodium: 74 },
    'rice': { calories: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4, sugar: 0, sodium: 1 },
    'egg': { calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0, sugar: 1.1, sodium: 124 },
    'avocado': { calories: 160, protein: 2, carbs: 9, fat: 15, fiber: 7, sugar: 0.7, sodium: 7 },
    'salmon': { calories: 208, protein: 20, carbs: 0, fat: 13, fiber: 0, sugar: 0, sodium: 59 },
    'broccoli': { calories: 34, protein: 2.8, carbs: 7, fat: 0.4, fiber: 2.6, sugar: 1.7, sodium: 33 },
    'oatmeal': { calories: 389, protein: 17, carbs: 66, fat: 7, fiber: 11, sugar: 0, sodium: 2 },
    'greek-yogurt': { calories: 59, protein: 10, carbs: 3.6, fat: 0.7, fiber: 0, sugar: 3.2, sodium: 36 },
    'almonds': { calories: 579, protein: 21, carbs: 22, fat: 50, fiber: 13, sugar: 4.4, sodium: 1 },
    'sweet-potato': { calories: 86, protein: 1.6, carbs: 20, fat: 0.1, fiber: 3, sugar: 4.2, sodium: 55 },
    'pasta': { calories: 131, protein: 5, carbs: 25, fat: 1.1, fiber: 1.8, sugar: 0.6, sodium: 1 },
    'orange': { calories: 47, protein: 0.9, carbs: 12, fat: 0.1, fiber: 2.4, sugar: 9.4, sodium: 0 },
    'spinach': { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, sugar: 0.4, sodium: 79 },
    'bread': { calories: 265, protein: 9, carbs: 49, fat: 3.2, fiber: 2.7, sugar: 5, sodium: 491 },
    'milk': { calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3, fiber: 0, sugar: 5, sodium: 43 },
    'cheese': { calories: 403, protein: 25, carbs: 1.3, fat: 33, fiber: 0, sugar: 0.5, sodium: 621 },
    'peanut-butter': { calories: 588, protein: 25, carbs: 20, fat: 50, fiber: 6, sugar: 9.4, sodium: 459 },
    'coffee': { calories: 2, protein: 0.3, carbs: 0, fat: 0, fiber: 0, sugar: 0, sodium: 5 },
  }

  const nutrition = sampleNutrition[slug] || {
    calories: 100, protein: 5, carbs: 15, fat: 3, fiber: 2, sugar: 5, sodium: 50
  }

  return {
    fdcId: `sample-${slug}`,
    slug,
    name: foodInfo.name,
    category: foodInfo.category,
    description: `Nutrition information for ${foodInfo.name}`,
    servingSizes: [
      { amount: 100, unit: 'g', grams: 100, label: '100 grams' },
      { amount: 1, unit: 'cup', grams: 150, label: '1 cup' },
      { amount: 1, unit: 'serving', grams: 85, label: '1 serving (85g)' },
    ],
    nutritionPer100g: nutrition,
    source: 'usda',
    updatedAt: new Date().toISOString(),
  }
}

// Compare two foods
export function compareFoods(slug1: string, slug2: string) {
  const food1 = getFoodData(slug1)
  const food2 = getFoodData(slug2)

  if (!food1 || !food2) return null

  const n1 = food1.nutritionPer100g
  const n2 = food2.nutritionPer100g

  return {
    food1,
    food2,
    winners: {
      lowerCalories: n1.calories <= n2.calories ? food1.slug : food2.slug,
      higherProtein: n1.protein >= n2.protein ? food1.slug : food2.slug,
      lowerCarbs: n1.carbs <= n2.carbs ? food1.slug : food2.slug,
      lowerFat: n1.fat <= n2.fat ? food1.slug : food2.slug,
      higherFiber: n1.fiber >= n2.fiber ? food1.slug : food2.slug,
    },
  }
}
