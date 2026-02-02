#!/usr/bin/env node
/**
 * Generate 50 popular meals with nutrition data and recipes
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
  prepTime: number // minutes
  cookTime: number // minutes
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

// Popular meals to generate
const meals = [
  // Breakfast
  {
    name: 'Oatmeal with Berries and Honey',
    type: 'breakfast' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 5,
    ingredients: [
      { name: 'Rolled Oats', amount: 50, unit: 'g', grams: 50, slug: 'rolled-oats' },
      { name: 'Whole Milk', amount: 200, unit: 'ml', grams: 200, slug: 'whole-milk' },
      { name: 'Blueberries', amount: 100, unit: 'g', grams: 100, slug: 'blueberries' },
      { name: 'Honey', amount: 15, unit: 'g', grams: 15, slug: 'honey' },
    ],
    instructions: [
      'Combine oats and milk in a bowl',
      'Microwave for 2-3 minutes or cook on stovetop',
      'Stir and add berries',
      'Drizzle with honey and serve',
    ],
    nutrition: { calories: 320, protein: 12, carbs: 52, fat: 6, fiber: 6, sugar: 22, sodium: 95 },
    benefits: ['High in fiber', 'Good source of antioxidants', 'Sustained energy release'],
  },
  {
    name: 'Greek Yogurt Parfait',
    type: 'breakfast' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    ingredients: [
      { name: 'Greek Yogurt', amount: 200, unit: 'g', grams: 200, slug: 'greek-yogurt' },
      { name: 'Granola', amount: 40, unit: 'g', grams: 40, slug: 'granola' },
      { name: 'Strawberries', amount: 100, unit: 'g', grams: 100, slug: 'strawberries' },
      { name: 'Almonds', amount: 20, unit: 'g', grams: 20, slug: 'almonds' },
    ],
    instructions: [
      'Layer yogurt in a bowl',
      'Add granola on top',
      'Add fresh strawberries',
      'Sprinkle almonds and serve',
    ],
    nutrition: { calories: 310, protein: 22, carbs: 38, fat: 8, fiber: 4, sugar: 18, sodium: 45 },
    benefits: ['High in protein', 'Supports digestive health', 'Calcium-rich'],
  },
  {
    name: 'Scrambled Eggs with Toast',
    type: 'breakfast' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 10,
    ingredients: [
      { name: 'Eggs', amount: 2, unit: 'large', grams: 100, slug: 'eggs' },
      { name: 'Whole Wheat Bread', amount: 2, unit: 'slices', grams: 60, slug: 'whole-wheat-bread' },
      { name: 'Butter', amount: 10, unit: 'g', grams: 10, slug: 'butter' },
      { name: 'Salt and Pepper', amount: 1, unit: 'pinch', grams: 1, slug: 'salt' },
    ],
    instructions: [
      'Toast bread until golden',
      'Melt butter in a pan over medium heat',
      'Scramble eggs with salt and pepper',
      'Cook for 3-4 minutes until fluffy',
      'Serve with toast',
    ],
    nutrition: { calories: 420, protein: 18, carbs: 32, fat: 22, fiber: 3, sugar: 2, sodium: 580 },
    benefits: ['Excellent protein source', 'Rich in choline', 'Good for muscle building'],
  },
  {
    name: 'Avocado Toast',
    type: 'breakfast' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 3,
    ingredients: [
      { name: 'Whole Grain Bread', amount: 2, unit: 'slices', grams: 60, slug: 'whole-grain-bread' },
      { name: 'Avocado', amount: 1, unit: 'medium', grams: 150, slug: 'avocado' },
      { name: 'Lemon Juice', amount: 15, unit: 'ml', grams: 15, slug: 'lemon-juice' },
      { name: 'Red Pepper Flakes', amount: 2, unit: 'g', grams: 2, slug: 'red-pepper-flakes' },
    ],
    instructions: [
      'Toast bread until crispy',
      'Slice avocado in half and remove pit',
      'Scoop onto toast and spread',
      'Squeeze lemon juice on top',
      'Sprinkle with red pepper flakes and serve',
    ],
    nutrition: { calories: 380, protein: 12, carbs: 38, fat: 18, fiber: 9, sugar: 2, sodium: 320 },
    benefits: ['Healthy monounsaturated fats', 'High in fiber', 'Supports heart health'],
  },

  // Lunch
  {
    name: 'Grilled Chicken Caesar Salad',
    type: 'lunch' as const,
    servings: 1,
    prepTime: 10,
    cookTime: 12,
    ingredients: [
      { name: 'Chicken Breast', amount: 150, unit: 'g', grams: 150, slug: 'chicken-breast' },
      { name: 'Romaine Lettuce', amount: 150, unit: 'g', grams: 150, slug: 'romaine-lettuce' },
      { name: 'Parmesan Cheese', amount: 30, unit: 'g', grams: 30, slug: 'parmesan-cheese' },
      { name: 'Caesar Dressing', amount: 30, unit: 'ml', grams: 30, slug: 'caesar-dressing' },
      { name: 'Croutons', amount: 20, unit: 'g', grams: 20, slug: 'croutons' },
    ],
    instructions: [
      'Season chicken and grill for 12 minutes until cooked',
      'Slice chicken into strips',
      'Toss lettuce with caesar dressing',
      'Top with chicken, parmesan, and croutons',
      'Serve immediately',
    ],
    nutrition: { calories: 380, protein: 42, carbs: 14, fat: 16, fiber: 2, sugar: 1, sodium: 720 },
    benefits: ['High in lean protein', 'Supports muscle health', 'Good calcium source'],
  },
  {
    name: 'Turkey and Swiss Sandwich',
    type: 'lunch' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    ingredients: [
      { name: 'Whole Wheat Bread', amount: 2, unit: 'slices', grams: 60, slug: 'whole-wheat-bread' },
      { name: 'Turkey Breast', amount: 100, unit: 'g', grams: 100, slug: 'turkey-breast' },
      { name: 'Swiss Cheese', amount: 30, unit: 'g', grams: 30, slug: 'swiss-cheese' },
      { name: 'Tomato', amount: 1, unit: 'medium', grams: 150, slug: 'tomato' },
      { name: 'Lettuce', amount: 30, unit: 'g', grams: 30, slug: 'lettuce' },
      { name: 'Mayonnaise', amount: 15, unit: 'g', grams: 15, slug: 'mayonnaise' },
    ],
    instructions: [
      'Toast bread lightly',
      'Spread mayonnaise on both slices',
      'Layer turkey, cheese, tomato, and lettuce',
      'Cut diagonally and serve',
    ],
    nutrition: { calories: 390, protein: 30, carbs: 35, fat: 14, fiber: 4, sugar: 4, sodium: 580 },
    benefits: ['Good protein content', 'Balanced meal', 'Easy to prepare'],
  },
  {
    name: 'Tuna Salad',
    type: 'lunch' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    ingredients: [
      { name: 'Canned Tuna', amount: 100, unit: 'g', grams: 100, slug: 'canned-tuna' },
      { name: 'Mixed Greens', amount: 150, unit: 'g', grams: 150, slug: 'mixed-greens' },
      { name: 'Cucumber', amount: 100, unit: 'g', grams: 100, slug: 'cucumber' },
      { name: 'Cherry Tomatoes', amount: 100, unit: 'g', grams: 100, slug: 'cherry-tomatoes' },
      { name: 'Olive Oil', amount: 15, unit: 'ml', grams: 15, slug: 'olive-oil' },
      { name: 'Lemon Juice', amount: 15, unit: 'ml', grams: 15, slug: 'lemon-juice' },
    ],
    instructions: [
      'Drain tuna and place in bowl',
      'Mix with olive oil and lemon juice',
      'Combine with mixed greens, cucumber, and tomatoes',
      'Toss gently and serve',
    ],
    nutrition: { calories: 250, protein: 30, carbs: 12, fat: 8, fiber: 3, sugar: 4, sodium: 380 },
    benefits: ['Excellent omega-3 source', 'Lean protein', 'Low calorie option'],
  },
  {
    name: 'Quinoa Buddha Bowl',
    type: 'lunch' as const,
    servings: 1,
    prepTime: 10,
    cookTime: 15,
    ingredients: [
      { name: 'Quinoa', amount: 60, unit: 'g', grams: 60, slug: 'quinoa' },
      { name: 'Chickpeas', amount: 100, unit: 'g', grams: 100, slug: 'chickpeas' },
      { name: 'Sweet Potato', amount: 100, unit: 'g', grams: 100, slug: 'sweet-potato' },
      { name: 'Kale', amount: 50, unit: 'g', grams: 50, slug: 'kale' },
      { name: 'Tahini Dressing', amount: 30, unit: 'ml', grams: 30, slug: 'tahini-dressing' },
    ],
    instructions: [
      'Cook quinoa according to package directions',
      'Roast chickpeas and sweet potato at 400F for 15 minutes',
      'Arrange in bowl with kale and roasted vegetables',
      'Drizzle with tahini dressing and serve',
    ],
    nutrition: { calories: 410, protein: 16, carbs: 58, fat: 12, fiber: 11, sugar: 8, sodium: 240 },
    benefits: ['Complete protein', 'High fiber', 'Rich in antioxidants'],
  },

  // Dinner
  {
    name: 'Grilled Salmon with Broccoli',
    type: 'dinner' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 15,
    ingredients: [
      { name: 'Salmon Fillet', amount: 150, unit: 'g', grams: 150, slug: 'salmon-fillet' },
      { name: 'Broccoli', amount: 150, unit: 'g', grams: 150, slug: 'broccoli' },
      { name: 'Olive Oil', amount: 15, unit: 'ml', grams: 15, slug: 'olive-oil' },
      { name: 'Lemon', amount: 1, unit: 'medium', grams: 60, slug: 'lemon' },
      { name: 'Garlic', amount: 10, unit: 'g', grams: 10, slug: 'garlic' },
    ],
    instructions: [
      'Preheat grill to medium-high',
      'Brush salmon with olive oil and season',
      'Grill salmon for 7-8 minutes per side',
      'Toss broccoli with oil, garlic, and roast until tender',
      'Serve with lemon wedges',
    ],
    nutrition: { calories: 380, protein: 38, carbs: 12, fat: 18, fiber: 2, sugar: 2, sodium: 85 },
    benefits: ['High omega-3 fatty acids', 'Excellent protein', 'Heart healthy'],
  },
  {
    name: 'Spaghetti Marinara',
    type: 'dinner' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 15,
    ingredients: [
      { name: 'Whole Wheat Pasta', amount: 85, unit: 'g', grams: 85, slug: 'whole-wheat-pasta' },
      { name: 'Marinara Sauce', amount: 200, unit: 'ml', grams: 200, slug: 'marinara-sauce' },
      { name: 'Parmesan Cheese', amount: 20, unit: 'g', grams: 20, slug: 'parmesan-cheese' },
      { name: 'Basil', amount: 5, unit: 'g', grams: 5, slug: 'basil' },
      { name: 'Garlic', amount: 10, unit: 'g', grams: 10, slug: 'garlic' },
    ],
    instructions: [
      'Bring water to boil and cook pasta according to package',
      'Heat marinara sauce in a separate pot',
      'Add minced garlic to sauce and simmer',
      'Drain pasta and toss with sauce',
      'Top with parmesan and fresh basil',
    ],
    nutrition: { calories: 380, protein: 14, carbs: 66, fat: 6, fiber: 10, sugar: 6, sodium: 520 },
    benefits: ['Good fiber content', 'Heart healthy tomato sauce', 'Satisfying comfort food'],
  },
  {
    name: 'Stir-Fried Tofu and Vegetables',
    type: 'dinner' as const,
    servings: 1,
    prepTime: 15,
    cookTime: 10,
    ingredients: [
      { name: 'Tofu', amount: 150, unit: 'g', grams: 150, slug: 'tofu' },
      { name: 'Broccoli', amount: 100, unit: 'g', grams: 100, slug: 'broccoli' },
      { name: 'Bell Pepper', amount: 75, unit: 'g', grams: 75, slug: 'bell-pepper' },
      { name: 'Soy Sauce', amount: 15, unit: 'ml', grams: 15, slug: 'soy-sauce' },
      { name: 'Sesame Oil', amount: 10, unit: 'ml', grams: 10, slug: 'sesame-oil' },
    ],
    instructions: [
      'Press and cube tofu',
      'Heat sesame oil in wok or large pan',
      'Stir-fry tofu until golden on all sides',
      'Add vegetables and cook until tender-crisp',
      'Add soy sauce and toss to coat',
      'Serve immediately',
    ],
    nutrition: { calories: 320, protein: 22, carbs: 20, fat: 16, fiber: 4, sugar: 3, sodium: 580 },
    benefits: ['Plant-based protein', 'Low in saturated fat', 'Nutrient-dense vegetables'],
  },
  {
    name: 'Lean Ground Turkey Tacos',
    type: 'dinner' as const,
    servings: 2,
    prepTime: 5,
    cookTime: 10,
    ingredients: [
      { name: 'Ground Turkey', amount: 200, unit: 'g', grams: 200, slug: 'ground-turkey' },
      { name: 'Corn Tortillas', amount: 4, unit: 'pieces', grams: 120, slug: 'corn-tortillas' },
      { name: 'Lettuce', amount: 100, unit: 'g', grams: 100, slug: 'lettuce' },
      { name: 'Tomato', amount: 1, unit: 'medium', grams: 150, slug: 'tomato' },
      { name: 'Salsa', amount: 60, unit: 'ml', grams: 60, slug: 'salsa' },
    ],
    instructions: [
      'Brown ground turkey in a skillet',
      'Add taco seasoning and simmer',
      'Warm tortillas on griddle',
      'Assemble tacos with lettuce, tomato, and turkey',
      'Top with salsa and serve',
    ],
    nutrition: { calories: 340, protein: 35, carbs: 28, fat: 8, fiber: 4, sugar: 3, sodium: 480 },
    benefits: ['Lean protein', 'Low in fat', 'Easy to customize'],
  },

  // Snacks
  {
    name: 'Hummus and Vegetables',
    type: 'snack' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    ingredients: [
      { name: 'Hummus', amount: 60, unit: 'g', grams: 60, slug: 'hummus' },
      { name: 'Carrot Sticks', amount: 100, unit: 'g', grams: 100, slug: 'carrot' },
      { name: 'Celery Sticks', amount: 75, unit: 'g', grams: 75, slug: 'celery' },
      { name: 'Bell Pepper', amount: 75, unit: 'g', grams: 75, slug: 'bell-pepper' },
    ],
    instructions: [
      'Cut vegetables into sticks',
      'Place hummus in small bowl',
      'Arrange vegetables around hummus',
      'Dip and enjoy',
    ],
    nutrition: { calories: 180, protein: 8, carbs: 20, fat: 7, fiber: 5, sugar: 6, sodium: 280 },
    benefits: ['Healthy fats', 'High fiber', 'Low calorie snack'],
  },
  {
    name: 'Apple with Almond Butter',
    type: 'snack' as const,
    servings: 1,
    prepTime: 2,
    cookTime: 0,
    ingredients: [
      { name: 'Apple', amount: 1, unit: 'medium', grams: 182, slug: 'apple' },
      { name: 'Almond Butter', amount: 25, unit: 'g', grams: 25, slug: 'almond-butter' },
    ],
    instructions: [
      'Slice apple',
      'Serve with almond butter on the side',
      'Dip slices in almond butter and enjoy',
    ],
    nutrition: { calories: 240, protein: 7, carbs: 26, fat: 10, fiber: 5, sugar: 18, sodium: 95 },
    benefits: ['Natural sugars', 'Protein and healthy fats', 'Sustained energy'],
  },
  {
    name: 'Greek Yogurt with Granola',
    type: 'snack' as const,
    servings: 1,
    prepTime: 2,
    cookTime: 0,
    ingredients: [
      { name: 'Greek Yogurt', amount: 150, unit: 'g', grams: 150, slug: 'greek-yogurt' },
      { name: 'Granola', amount: 30, unit: 'g', grams: 30, slug: 'granola' },
      { name: 'Honey', amount: 10, unit: 'g', grams: 10, slug: 'honey' },
    ],
    instructions: [
      'Pour yogurt into bowl',
      'Top with granola',
      'Drizzle with honey',
      'Mix and enjoy',
    ],
    nutrition: { calories: 200, protein: 15, carbs: 28, fat: 3, fiber: 1, sugar: 14, sodium: 30 },
    benefits: ['High protein', 'Good for digestion', 'Satisfying snack'],
  },
  {
    name: 'Trail Mix',
    type: 'snack' as const,
    servings: 1,
    prepTime: 0,
    cookTime: 0,
    ingredients: [
      { name: 'Almonds', amount: 25, unit: 'g', grams: 25, slug: 'almonds' },
      { name: 'Cashews', amount: 25, unit: 'g', grams: 25, slug: 'cashews' },
      { name: 'Raisins', amount: 20, unit: 'g', grams: 20, slug: 'raisins' },
      { name: 'Dark Chocolate Chips', amount: 15, unit: 'g', grams: 15, slug: 'dark-chocolate-chips' },
    ],
    instructions: [
      'Combine all ingredients in a bowl',
      'Mix well',
      'Portion into snack bags or containers',
      'Enjoy as needed',
    ],
    nutrition: { calories: 230, protein: 6, carbs: 25, fat: 12, fiber: 2, sugar: 16, sodium: 35 },
    benefits: ['Portable energy', 'Healthy fats', 'Antioxidants from chocolate'],
  },
  {
    name: 'Protein Smoothie',
    type: 'snack' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    ingredients: [
      { name: 'Protein Powder', amount: 25, unit: 'g', grams: 25, slug: 'protein-powder' },
      { name: 'Banana', amount: 1, unit: 'medium', grams: 118, slug: 'banana' },
      { name: 'Almond Milk', amount: 250, unit: 'ml', grams: 250, slug: 'almond-milk' },
      { name: 'Spinach', amount: 30, unit: 'g', grams: 30, slug: 'spinach' },
    ],
    instructions: [
      'Add almond milk to blender',
      'Add protein powder, banana, and spinach',
      'Blend until smooth',
      'Serve immediately',
    ],
    nutrition: { calories: 220, protein: 28, carbs: 20, fat: 3, fiber: 3, sugar: 10, sodium: 150 },
    benefits: ['High protein', 'Quick meal', 'Vegetable packed'],
  },
]

async function generateMeals() {
  const mealsDir = path.join(process.cwd(), 'data', 'meals')

  // Create meals directory if it doesn't exist
  if (!fs.existsSync(mealsDir)) {
    fs.mkdirSync(mealsDir, { recursive: true })
  }

  let created = 0
  let mealIndex = 1

  for (const mealData of meals) {
    // Create slug from name
    const slug = mealData.name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '')
      .replace(/-+/g, '-')

    const filePath = path.join(mealsDir, `${slug}.json`)

    // Skip if already exists
    if (fs.existsSync(filePath)) {
      continue
    }

    // Create meal object
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

    // Write file
    fs.writeFileSync(filePath, JSON.stringify(meal, null, 2))
    created++
    mealIndex++

    if (created % 5 === 0) {
      console.log(`Created ${created} meals...`)
    }
  }

  console.log(`\n✅ Meal generation complete!`)
  console.log(`   Created: ${created} meal files`)
  console.log(`   Location: ${mealsDir}`)
}

generateMeals().catch((err) => {
  console.error('Error generating meals:', err)
  process.exit(1)
})
