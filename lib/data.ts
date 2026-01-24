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

  // Sample nutrition data based on food type (per 100g)
  const sampleNutrition: Record<string, NutritionData> = {
    // Original foods
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

    // New fruits
    'strawberry': { calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, fiber: 2, sugar: 4.9, sodium: 1 },
    'blueberry': { calories: 57, protein: 0.7, carbs: 14, fat: 0.3, fiber: 2.4, sugar: 10, sodium: 1 },
    'grape': { calories: 69, protein: 0.7, carbs: 18, fat: 0.2, fiber: 0.9, sugar: 16, sodium: 2 },
    'watermelon': { calories: 30, protein: 0.6, carbs: 8, fat: 0.2, fiber: 0.4, sugar: 6.2, sodium: 1 },
    'pineapple': { calories: 50, protein: 0.5, carbs: 13, fat: 0.1, fiber: 1.4, sugar: 10, sodium: 1 },
    'mango': { calories: 60, protein: 0.8, carbs: 15, fat: 0.4, fiber: 1.6, sugar: 14, sodium: 1 },
    'peach': { calories: 39, protein: 0.9, carbs: 10, fat: 0.3, fiber: 1.5, sugar: 8.4, sodium: 0 },
    'pear': { calories: 57, protein: 0.4, carbs: 15, fat: 0.1, fiber: 3.1, sugar: 10, sodium: 1 },
    'kiwi': { calories: 61, protein: 1.1, carbs: 15, fat: 0.5, fiber: 3, sugar: 9, sodium: 3 },
    'cherry': { calories: 63, protein: 1.1, carbs: 16, fat: 0.2, fiber: 2.1, sugar: 13, sodium: 0 },
    'raspberry': { calories: 52, protein: 1.2, carbs: 12, fat: 0.7, fiber: 6.5, sugar: 4.4, sodium: 1 },

    // New vegetables
    'carrot': { calories: 41, protein: 0.9, carbs: 10, fat: 0.2, fiber: 2.8, sugar: 4.7, sodium: 69 },
    'tomato': { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2, sugar: 2.6, sodium: 5 },
    'cucumber': { calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1, fiber: 0.5, sugar: 1.7, sodium: 2 },
    'lettuce': { calories: 15, protein: 1.4, carbs: 2.9, fat: 0.2, fiber: 1.3, sugar: 0.8, sodium: 28 },
    'onion': { calories: 40, protein: 1.1, carbs: 9, fat: 0.1, fiber: 1.7, sugar: 4.2, sodium: 4 },
    'bell-pepper': { calories: 26, protein: 1, carbs: 6, fat: 0.3, fiber: 2.1, sugar: 4.2, sodium: 4 },
    'cauliflower': { calories: 25, protein: 1.9, carbs: 5, fat: 0.3, fiber: 2, sugar: 1.9, sodium: 30 },
    'celery': { calories: 14, protein: 0.7, carbs: 3, fat: 0.2, fiber: 1.6, sugar: 1.3, sodium: 80 },
    'zucchini': { calories: 17, protein: 1.2, carbs: 3.1, fat: 0.3, fiber: 1, sugar: 2.5, sodium: 8 },
    'kale': { calories: 35, protein: 2.9, carbs: 4.4, fat: 1.5, fiber: 4.1, sugar: 0.8, sodium: 53 },
    'asparagus': { calories: 20, protein: 2.2, carbs: 3.9, fat: 0.1, fiber: 2.1, sugar: 1.9, sodium: 2 },
    'mushroom': { calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, fiber: 1, sugar: 2, sodium: 5 },

    // New proteins
    'ground-beef': { calories: 250, protein: 26, carbs: 0, fat: 17, fiber: 0, sugar: 0, sodium: 75 },
    'steak': { calories: 271, protein: 25, carbs: 0, fat: 19, fiber: 0, sugar: 0, sodium: 54 },
    'chicken-thigh': { calories: 209, protein: 26, carbs: 0, fat: 11, fiber: 0, sugar: 0, sodium: 82 },
    'turkey': { calories: 135, protein: 30, carbs: 0, fat: 1.7, fiber: 0, sugar: 0, sodium: 59 },
    'tuna': { calories: 144, protein: 30, carbs: 0, fat: 1, fiber: 0, sugar: 0, sodium: 47 },
    'shrimp': { calories: 99, protein: 24, carbs: 0.2, fat: 0.3, fiber: 0, sugar: 0, sodium: 111 },
    'bacon': { calories: 541, protein: 37, carbs: 1.4, fat: 42, fiber: 0, sugar: 1.2, sodium: 1717 },
    'pork-chop': { calories: 231, protein: 25, carbs: 0, fat: 14, fiber: 0, sugar: 0, sodium: 62 },
    'ham': { calories: 145, protein: 21, carbs: 1.5, fat: 6, fiber: 0, sugar: 1.5, sodium: 1203 },
    'cod': { calories: 82, protein: 18, carbs: 0, fat: 0.7, fiber: 0, sugar: 0, sodium: 54 },
    'tofu': { calories: 76, protein: 8, carbs: 1.9, fat: 4.8, fiber: 0.3, sugar: 0.6, sodium: 7 },
    'chicken-wings': { calories: 203, protein: 30, carbs: 0, fat: 8.1, fiber: 0, sugar: 0, sodium: 82 },

    // New grains
    'brown-rice': { calories: 111, protein: 2.6, carbs: 23, fat: 0.9, fiber: 1.8, sugar: 0.4, sodium: 5 },
    'whole-wheat-bread': { calories: 247, protein: 13, carbs: 41, fat: 4.2, fiber: 6.3, sugar: 6.8, sodium: 392 },
    'quinoa': { calories: 120, protein: 4.4, carbs: 21, fat: 1.9, fiber: 2.8, sugar: 0.9, sodium: 7 },
    'bagel': { calories: 257, protein: 10, carbs: 50, fat: 1.7, fiber: 2.1, sugar: 6.6, sodium: 430 },
    'tortilla': { calories: 218, protein: 6, carbs: 36, fat: 5.8, fiber: 2, sugar: 2.1, sodium: 391 },
    'cereal': { calories: 379, protein: 7, carbs: 84, fat: 1.9, fiber: 6, sugar: 24, sodium: 760 },
    'crackers': { calories: 503, protein: 9, carbs: 61, fat: 24, fiber: 2.1, sugar: 2.5, sodium: 698 },
    'granola': { calories: 471, protein: 12, carbs: 65, fat: 18, fiber: 7.5, sugar: 24, sodium: 254 },
    'couscous': { calories: 112, protein: 3.8, carbs: 23, fat: 0.2, fiber: 1.4, sugar: 0.1, sodium: 5 },
    'english-muffin': { calories: 227, protein: 8.9, carbs: 44, fat: 2.1, fiber: 2.7, sugar: 3.9, sodium: 386 },

    // New dairy
    'skim-milk': { calories: 34, protein: 3.4, carbs: 5, fat: 0.1, fiber: 0, sugar: 5, sodium: 42 },
    'yogurt': { calories: 59, protein: 3.5, carbs: 4.7, fat: 3.3, fiber: 0, sugar: 4.7, sodium: 46 },
    'mozzarella': { calories: 280, protein: 28, carbs: 3.1, fat: 17, fiber: 0, sugar: 1.2, sodium: 627 },
    'cottage-cheese': { calories: 98, protein: 11, carbs: 3.4, fat: 4.3, fiber: 0, sugar: 2.7, sodium: 364 },
    'cream-cheese': { calories: 342, protein: 6, carbs: 4.1, fat: 34, fiber: 0, sugar: 3.2, sodium: 321 },
    'butter': { calories: 717, protein: 0.9, carbs: 0.1, fat: 81, fiber: 0, sugar: 0.1, sodium: 11 },
    'sour-cream': { calories: 198, protein: 2.4, carbs: 4.6, fat: 19, fiber: 0, sugar: 2.5, sodium: 54 },
    'parmesan': { calories: 392, protein: 36, carbs: 3.2, fat: 26, fiber: 0, sugar: 0.8, sodium: 1529 },

    // New nuts & seeds
    'peanuts': { calories: 567, protein: 26, carbs: 16, fat: 49, fiber: 8.5, sugar: 4.7, sodium: 18 },
    'walnuts': { calories: 654, protein: 15, carbs: 14, fat: 65, fiber: 6.7, sugar: 2.6, sodium: 2 },
    'cashews': { calories: 553, protein: 18, carbs: 30, fat: 44, fiber: 3.3, sugar: 6, sodium: 12 },
    'pistachios': { calories: 560, protein: 20, carbs: 28, fat: 45, fiber: 10, sugar: 7.7, sodium: 1 },
    'sunflower-seeds': { calories: 584, protein: 21, carbs: 20, fat: 51, fiber: 8.6, sugar: 2.6, sodium: 9 },
    'chia-seeds': { calories: 486, protein: 17, carbs: 42, fat: 31, fiber: 34, sugar: 0, sodium: 16 },
    'flaxseed': { calories: 534, protein: 18, carbs: 29, fat: 42, fiber: 27, sugar: 1.6, sodium: 30 },
    'almond-butter': { calories: 614, protein: 21, carbs: 19, fat: 56, fiber: 10, sugar: 6, sodium: 7 },

    // New beverages
    'tea': { calories: 1, protein: 0, carbs: 0.3, fat: 0, fiber: 0, sugar: 0, sodium: 3 },
    'orange-juice': { calories: 45, protein: 0.7, carbs: 10, fat: 0.2, fiber: 0.2, sugar: 8.4, sodium: 1 },
    'apple-juice': { calories: 46, protein: 0.1, carbs: 11, fat: 0.1, fiber: 0.2, sugar: 10, sodium: 4 },
    'soda': { calories: 41, protein: 0, carbs: 11, fat: 0, fiber: 0, sugar: 11, sodium: 4 },
    'beer': { calories: 43, protein: 0.5, carbs: 3.6, fat: 0, fiber: 0, sugar: 0, sodium: 4 },
    'wine': { calories: 85, protein: 0.1, carbs: 2.6, fat: 0, fiber: 0, sugar: 0.6, sodium: 4 },
    'latte': { calories: 66, protein: 3.6, carbs: 5.5, fat: 3.4, fiber: 0, sugar: 5.3, sodium: 56 },
    'protein-shake': { calories: 103, protein: 20, carbs: 3.5, fat: 1.5, fiber: 1, sugar: 2, sodium: 100 },
    'almond-milk': { calories: 17, protein: 0.6, carbs: 1.5, fat: 1.2, fiber: 0.3, sugar: 0, sodium: 72 },

    // Fast food
    'pizza': { calories: 266, protein: 11, carbs: 33, fat: 10, fiber: 2.3, sugar: 3.6, sodium: 598 },
    'hamburger': { calories: 295, protein: 17, carbs: 30, fat: 11, fiber: 1.5, sugar: 6, sodium: 497 },
    'cheeseburger': { calories: 303, protein: 17, carbs: 28, fat: 14, fiber: 1.5, sugar: 5.7, sodium: 754 },
    'french-fries': { calories: 312, protein: 3.4, carbs: 41, fat: 15, fiber: 3.8, sugar: 0.2, sodium: 210 },
    'hot-dog': { calories: 290, protein: 11, carbs: 21, fat: 18, fiber: 0.9, sugar: 4.3, sodium: 810 },
    'taco': { calories: 226, protein: 10, carbs: 18, fat: 13, fiber: 3, sugar: 1.7, sodium: 369 },
    'burrito': { calories: 206, protein: 8, carbs: 29, fat: 6.6, fiber: 3, sugar: 0.9, sodium: 488 },
    'sub-sandwich': { calories: 260, protein: 12, carbs: 38, fat: 5.8, fiber: 2.4, sugar: 5.7, sodium: 670 },
    'chicken-nuggets': { calories: 296, protein: 15, carbs: 18, fat: 18, fiber: 1.2, sugar: 0.4, sodium: 541 },
    'nachos': { calories: 346, protein: 9.1, carbs: 36, fat: 19, fiber: 3.1, sugar: 1.5, sodium: 816 },

    // Snacks
    'potato-chips': { calories: 536, protein: 6.6, carbs: 53, fat: 34, fiber: 4.4, sugar: 0.4, sodium: 643 },
    'popcorn': { calories: 387, protein: 13, carbs: 78, fat: 4.5, fiber: 15, sugar: 0.9, sodium: 8 },
    'pretzels': { calories: 380, protein: 10, carbs: 79, fat: 2.9, fiber: 3.4, sugar: 2.6, sodium: 1266 },
    'granola-bar': { calories: 471, protein: 10, carbs: 64, fat: 20, fiber: 6.2, sugar: 28, sodium: 301 },
    'protein-bar': { calories: 374, protein: 23, carbs: 44, fat: 11, fiber: 4.6, sugar: 26, sodium: 336 },
    'trail-mix': { calories: 462, protein: 13, carbs: 45, fat: 29, fiber: 6.1, sugar: 27, sodium: 158 },

    // Desserts
    'chocolate': { calories: 546, protein: 4.9, carbs: 61, fat: 31, fiber: 7, sugar: 48, sodium: 79 },
    'ice-cream': { calories: 207, protein: 3.5, carbs: 24, fat: 11, fiber: 0.7, sugar: 21, sodium: 80 },
    'cookie': { calories: 488, protein: 5.3, carbs: 68, fat: 22, fiber: 2, sugar: 42, sodium: 390 },
    'brownie': { calories: 466, protein: 6.3, carbs: 63, fat: 22, fiber: 3, sugar: 48, sodium: 231 },
    'cake': { calories: 257, protein: 2.9, carbs: 42, fat: 9.3, fiber: 0.6, sugar: 27, sodium: 242 },
    'donut': { calories: 452, protein: 5.1, carbs: 51, fat: 25, fiber: 1.4, sugar: 26, sodium: 358 },
    'pie': { calories: 237, protein: 2, carbs: 34, fat: 11, fiber: 1.6, sugar: 16, sodium: 228 },
    'candy': { calories: 394, protein: 0, carbs: 98, fat: 0.2, fiber: 0, sugar: 88, sodium: 38 },
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
