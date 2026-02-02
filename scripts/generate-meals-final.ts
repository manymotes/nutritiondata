#!/usr/bin/env node
/**
 * Generate final meals to reach 50 total
 */

import * as fs from 'fs'
import * as path from 'path'

interface Ingredient {
  name: string
  amount: number
  unit: string
  grams: number
  slug: string
}

interface Meal {
  fdcId: string
  slug: string
  name: string
  category: string
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack'
  description: string
  servings: number
  prepTime: number
  cookTime: number
  ingredients: Ingredient[]
  instructions: string[]
  nutrition: {
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
    sugar: number
    sodium: number
  }
  healthBenefits: string[]
  source: string
  updatedAt: string
}

// Final batch of meals
const meals = [
  // Breakfast variations
  {
    name: 'Smoothie Bowl',
    type: 'breakfast' as const,
    servings: 1,
    prepTime: 8,
    cookTime: 0,
    ingredients: [
      { name: 'Greek Yogurt', amount: 150, unit: 'g', grams: 150, slug: 'greek-yogurt' },
      { name: 'Frozen Berries', amount: 100, unit: 'g', grams: 100, slug: 'frozen-berries' },
      { name: 'Banana', amount: 1, unit: 'medium', grams: 118, slug: 'banana' },
      { name: 'Granola', amount: 30, unit: 'g', grams: 30, slug: 'granola' },
      { name: 'Coconut Flakes', amount: 15, unit: 'g', grams: 15, slug: 'coconut-flakes' },
    ],
    instructions: [
      'Blend yogurt, frozen berries, and banana until thick',
      'Pour into bowl',
      'Top with granola and coconut flakes',
      'Serve immediately',
    ],
    nutrition: { calories: 340, protein: 18, carbs: 48, fat: 6, fiber: 5, sugar: 24, sodium: 50 },
    benefits: ['Thick creamy texture', 'High protein', 'Customizable toppings'],
  },

  // Lunch variations
  {
    name: 'Sushi Bowl',
    type: 'lunch' as const,
    servings: 1,
    prepTime: 15,
    cookTime: 20,
    ingredients: [
      { name: 'Sushi Rice', amount: 100, unit: 'g', grams: 100, slug: 'sushi-rice' },
      { name: 'Salmon', amount: 100, unit: 'g', grams: 100, slug: 'salmon' },
      { name: 'Cucumber', amount: 75, unit: 'g', grams: 75, slug: 'cucumber' },
      { name: 'Avocado', amount: 75, unit: 'g', grams: 75, slug: 'avocado' },
      { name: 'Nori Seaweed', amount: 5, unit: 'g', grams: 5, slug: 'nori-seaweed' },
    ],
    instructions: [
      'Cook sushi rice and let cool',
      'Dice salmon, cucumber, and avocado',
      'Layer rice in bowl',
      'Top with salmon, cucumber, avocado, and torn nori',
      'Serve with soy sauce',
    ],
    nutrition: { calories: 380, protein: 22, carbs: 42, fat: 12, fiber: 4, sugar: 2, sodium: 580 },
    benefits: ['Omega-3 rich', 'Japanese-inspired', 'Restaurant quality'],
  },

  // Dinner variations
  {
    name: 'Sheet Pan Fajitas',
    type: 'dinner' as const,
    servings: 2,
    prepTime: 10,
    cookTime: 20,
    ingredients: [
      { name: 'Chicken Breast', amount: 250, unit: 'g', grams: 250, slug: 'chicken-breast' },
      { name: 'Bell Pepper', amount: 150, unit: 'g', grams: 150, slug: 'bell-pepper' },
      { name: 'Onion', amount: 100, unit: 'g', grams: 100, slug: 'onion' },
      { name: 'Corn Tortillas', amount: 4, unit: 'pieces', grams: 120, slug: 'corn-tortillas' },
      { name: 'Lime', amount: 1, unit: 'medium', grams: 50, slug: 'lime' },
    ],
    instructions: [
      'Slice chicken and peppers',
      'Toss with spices and arrange on sheet pan',
      'Bake at 425F for 15-20 minutes',
      'Warm tortillas',
      'Serve with lime wedges',
    ],
    nutrition: { calories: 320, protein: 35, carbs: 28, fat: 7, fiber: 3, sugar: 4, sodium: 320 },
    benefits: ['One pan meal', 'Easy cleanup', 'Customizable'],
  },
  {
    name: 'Buddha Bowl with Tahini Dressing',
    type: 'lunch' as const,
    servings: 1,
    prepTime: 15,
    cookTime: 0,
    ingredients: [
      { name: 'Spinach', amount: 100, unit: 'g', grams: 100, slug: 'spinach' },
      { name: 'Roasted Chickpeas', amount: 80, unit: 'g', grams: 80, slug: 'roasted-chickpeas' },
      { name: 'Roasted Beets', amount: 75, unit: 'g', grams: 75, slug: 'roasted-beets' },
      { name: 'Quinoa', amount: 50, unit: 'g', grams: 50, slug: 'quinoa' },
      { name: 'Tahini Dressing', amount: 40, unit: 'ml', grams: 40, slug: 'tahini-dressing' },
    ],
    instructions: [
      'Layer spinach in bowl',
      'Add cooked quinoa, chickpeas, and beets',
      'Drizzle with tahini dressing',
      'Toss gently and serve',
    ],
    nutrition: { calories: 380, protein: 15, carbs: 50, fat: 14, fiber: 12, sugar: 8, sodium: 280 },
    benefits: ['Earthy flavors', 'Plant-based', 'Very high fiber'],
  },

  // Light meals
  {
    name: 'Egg White Omelet',
    type: 'breakfast' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 8,
    ingredients: [
      { name: 'Egg Whites', amount: 3, unit: 'large', grams: 90, slug: 'egg-whites' },
      { name: 'Bell Pepper', amount: 75, unit: 'g', grams: 75, slug: 'bell-pepper' },
      { name: 'Mushroom', amount: 50, unit: 'g', grams: 50, slug: 'mushroom' },
      { name: 'Low Fat Cheese', amount: 20, unit: 'g', grams: 20, slug: 'low-fat-cheese' },
    ],
    instructions: [
      'Heat non-stick pan',
      'Pour egg whites and cook until set',
      'Add peppers and mushrooms',
      'Fold in half and top with cheese',
      'Serve immediately',
    ],
    nutrition: { calories: 140, protein: 22, carbs: 6, fat: 2, fiber: 1, sugar: 2, sodium: 180 },
    benefits: ['Very low fat', 'High protein', 'Suitable for diets'],
  },

  // Comfort meals
  {
    name: 'Mac and Cheese',
    type: 'lunch' as const,
    servings: 2,
    prepTime: 5,
    cookTime: 20,
    ingredients: [
      { name: 'Whole Wheat Pasta', amount: 150, unit: 'g', grams: 150, slug: 'whole-wheat-pasta' },
      { name: 'Cheddar Cheese', amount: 100, unit: 'g', grams: 100, slug: 'cheddar-cheese' },
      { name: 'Butter', amount: 20, unit: 'g', grams: 20, slug: 'butter' },
      { name: 'Milk', amount: 200, unit: 'ml', grams: 200, slug: 'milk' },
      { name: 'Breadcrumbs', amount: 30, unit: 'g', grams: 30, slug: 'breadcrumbs' },
    ],
    instructions: [
      'Cook pasta according to package',
      'Make cheese sauce with butter, milk, and cheese',
      'Toss pasta with sauce',
      'Top with breadcrumbs and bake at 350F for 10 minutes',
      'Serve hot',
    ],
    nutrition: { calories: 420, protein: 18, carbs: 52, fat: 14, fiber: 7, sugar: 4, sodium: 480 },
    benefits: ['Comfort food', 'Family favorite', 'Kid-approved'],
  },

  // More light dinners
  {
    name: 'Grilled Vegetables with Couscous',
    type: 'dinner' as const,
    servings: 1,
    prepTime: 10,
    cookTime: 15,
    ingredients: [
      { name: 'Couscous', amount: 60, unit: 'g', grams: 60, slug: 'couscous' },
      { name: 'Zucchini', amount: 100, unit: 'g', grams: 100, slug: 'zucchini' },
      { name: 'Eggplant', amount: 100, unit: 'g', grams: 100, slug: 'eggplant' },
      { name: 'Cherry Tomatoes', amount: 75, unit: 'g', grams: 75, slug: 'cherry-tomatoes' },
      { name: 'Olive Oil', amount: 15, unit: 'ml', grams: 15, slug: 'olive-oil' },
    ],
    instructions: [
      'Toss vegetables with olive oil and herbs',
      'Grill at medium-high heat for 10-12 minutes',
      'Prepare couscous according to package',
      'Arrange grilled vegetables over couscous',
      'Serve warm',
    ],
    nutrition: { calories: 280, protein: 9, carbs: 42, fat: 8, fiber: 6, sugar: 4, sodium: 120 },
    benefits: ['Light and fresh', 'Vegetarian', 'Summer favorite'],
  },

  // Energy snacks
  {
    name: 'Banana with Peanut Butter',
    type: 'snack' as const,
    servings: 1,
    prepTime: 2,
    cookTime: 0,
    ingredients: [
      { name: 'Banana', amount: 1, unit: 'medium', grams: 118, slug: 'banana' },
      { name: 'Peanut Butter', amount: 30, unit: 'g', grams: 30, slug: 'peanut-butter' },
    ],
    instructions: [
      'Slice banana into rounds',
      'Serve with peanut butter for dipping',
      'Enjoy',
    ],
    nutrition: { calories: 270, protein: 8, carbs: 28, fat: 12, fiber: 3, sugar: 16, sodium: 95 },
    benefits: ['Quick energy', 'Satisfying', 'Classic combo'],
  },

  // More snacks
  {
    name: 'Yogurt Parfait with Granola',
    type: 'snack' as const,
    servings: 1,
    prepTime: 3,
    cookTime: 0,
    ingredients: [
      { name: 'Plain Yogurt', amount: 150, unit: 'g', grams: 150, slug: 'plain-yogurt' },
      { name: 'Granola', amount: 35, unit: 'g', grams: 35, slug: 'granola' },
      { name: 'Mixed Berries', amount: 75, unit: 'g', grams: 75, slug: 'mixed-berries' },
    ],
    instructions: [
      'Layer yogurt in a glass or bowl',
      'Add berries',
      'Top with granola',
      'Serve immediately',
    ],
    nutrition: { calories: 260, protein: 10, carbs: 42, fat: 5, fiber: 2, sugar: 20, sodium: 80 },
    benefits: ['Probiotic-rich', 'Satisfying crunch', 'Customizable'],
  },

  // Quick meals
  {
    name: 'Poke Bowl',
    type: 'lunch' as const,
    servings: 1,
    prepTime: 10,
    cookTime: 0,
    ingredients: [
      { name: 'Ahi Tuna', amount: 150, unit: 'g', grams: 150, slug: 'ahi-tuna' },
      { name: 'Sushi Rice', amount: 100, unit: 'g', grams: 100, slug: 'sushi-rice' },
      { name: 'Seaweed Salad', amount: 75, unit: 'g', grams: 75, slug: 'seaweed-salad' },
      { name: 'Edamame', amount: 50, unit: 'g', grams: 50, slug: 'edamame' },
      { name: 'Poke Sauce', amount: 30, unit: 'ml', grams: 30, slug: 'poke-sauce' },
    ],
    instructions: [
      'Marinate diced tuna in poke sauce',
      'Prepare rice bowl',
      'Top with marinated tuna, seaweed, and edamame',
      'Serve immediately',
    ],
    nutrition: { calories: 380, protein: 36, carbs: 38, fat: 6, fiber: 2, sugar: 2, sodium: 680 },
    benefits: ['Restaurant quality', 'High protein', 'Quick preparation'],
  },
]

async function generateFinalMeals() {
  const mealsDir = path.join(process.cwd(), 'data', 'meals')

  if (!fs.existsSync(mealsDir)) {
    fs.mkdirSync(mealsDir, { recursive: true })
  }

  let created = 0
  let mealIndex = 200

  for (const mealData of meals) {
    const slug = mealData.name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '')
      .replace(/-+/g, '-')

    const filePath = path.join(mealsDir, `${slug}.json`)

    if (fs.existsSync(filePath)) {
      continue
    }

    const meal: Meal = {
      fdcId: `meal-${mealIndex}`,
      slug,
      name: mealData.name,
      category: 'meals',
      mealType: mealData.type,
      description: `${mealData.name} - A delicious and nutritious ${mealData.type} option.`,
      servings: mealData.servings,
      prepTime: mealData.prepTime,
      cookTime: mealData.cookTime,
      ingredients: mealData.ingredients,
      instructions: mealData.instructions,
      nutrition: mealData.nutrition,
      healthBenefits: mealData.benefits,
      source: 'calorie-data',
      updatedAt: new Date().toISOString(),
    }

    fs.writeFileSync(filePath, JSON.stringify(meal, null, 2))
    created++
    mealIndex++

    if (created % 5 === 0) {
      console.log(`Created ${created} final meals...`)
    }
  }

  console.log(`\n✅ Final meal batch complete!`)
  console.log(`   Created: ${created} new meal files`)
  console.log(`   Total meals should now be ~50`)
}

generateFinalMeals().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
