#!/usr/bin/env node
/**
 * Generate additional meals to reach 50 total
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

// Additional meals
const meals = [
  // More Breakfast
  {
    name: 'Protein Pancakes',
    type: 'breakfast' as const,
    servings: 2,
    prepTime: 5,
    cookTime: 10,
    ingredients: [
      { name: 'Eggs', amount: 2, unit: 'large', grams: 100, slug: 'eggs' },
      { name: 'Banana', amount: 1, unit: 'medium', grams: 118, slug: 'banana' },
      { name: 'Oats', amount: 40, unit: 'g', grams: 40, slug: 'oats' },
      { name: 'Honey', amount: 20, unit: 'g', grams: 20, slug: 'honey' },
    ],
    instructions: [
      'Mash banana in a bowl',
      'Add eggs and oats, mix well',
      'Cook on griddle until golden brown on both sides',
      'Serve with honey drizzle',
    ],
    nutrition: { calories: 280, protein: 14, carbs: 40, fat: 6, fiber: 3, sugar: 16, sodium: 45 },
    benefits: ['High protein breakfast', 'Simple recipe', 'Filling meal'],
  },
  {
    name: 'Cottage Cheese Bowl',
    type: 'breakfast' as const,
    servings: 1,
    prepTime: 3,
    cookTime: 0,
    ingredients: [
      { name: 'Cottage Cheese', amount: 200, unit: 'g', grams: 200, slug: 'cottage-cheese' },
      { name: 'Peaches', amount: 100, unit: 'g', grams: 100, slug: 'peaches' },
      { name: 'Walnuts', amount: 25, unit: 'g', grams: 25, slug: 'walnuts' },
      { name: 'Honey', amount: 10, unit: 'g', grams: 10, slug: 'honey' },
    ],
    instructions: [
      'Add cottage cheese to bowl',
      'Top with sliced peaches',
      'Add walnuts',
      'Drizzle with honey',
    ],
    nutrition: { calories: 290, protein: 28, carbs: 20, fat: 10, fiber: 2, sugar: 15, sodium: 380 },
    benefits: ['Very high protein', 'Gut-friendly probiotics', 'Satisfying'],
  },
  {
    name: 'Chia Seed Pudding',
    type: 'breakfast' as const,
    servings: 1,
    prepTime: 10,
    cookTime: 0,
    ingredients: [
      { name: 'Chia Seeds', amount: 30, unit: 'g', grams: 30, slug: 'chia-seeds' },
      { name: 'Almond Milk', amount: 240, unit: 'ml', grams: 240, slug: 'almond-milk' },
      { name: 'Maple Syrup', amount: 15, unit: 'ml', grams: 15, slug: 'maple-syrup' },
      { name: 'Blueberries', amount: 50, unit: 'g', grams: 50, slug: 'blueberries' },
    ],
    instructions: [
      'Mix chia seeds with almond milk',
      'Add maple syrup',
      'Let sit for 30 minutes or overnight',
      'Top with blueberries before serving',
    ],
    nutrition: { calories: 240, protein: 7, carbs: 22, fat: 13, fiber: 10, sugar: 10, sodium: 180 },
    benefits: ['Omega-3 rich', 'High fiber', 'Make-ahead friendly'],
  },

  // More Lunch
  {
    name: 'Mediterranean Chickpea Salad',
    type: 'lunch' as const,
    servings: 1,
    prepTime: 10,
    cookTime: 0,
    ingredients: [
      { name: 'Chickpeas', amount: 150, unit: 'g', grams: 150, slug: 'chickpeas' },
      { name: 'Cherry Tomatoes', amount: 100, unit: 'g', grams: 100, slug: 'cherry-tomatoes' },
      { name: 'Cucumber', amount: 100, unit: 'g', grams: 100, slug: 'cucumber' },
      { name: 'Red Onion', amount: 30, unit: 'g', grams: 30, slug: 'red-onion' },
      { name: 'Feta Cheese', amount: 40, unit: 'g', grams: 40, slug: 'feta-cheese' },
      { name: 'Olive Oil', amount: 15, unit: 'ml', grams: 15, slug: 'olive-oil' },
    ],
    instructions: [
      'Drain and rinse chickpeas',
      'Chop tomatoes, cucumber, and onion',
      'Combine vegetables with chickpeas',
      'Crumble feta on top',
      'Drizzle with olive oil and serve',
    ],
    nutrition: { calories: 360, protein: 15, carbs: 45, fat: 12, fiber: 12, sugar: 6, sodium: 520 },
    benefits: ['Plant-based protein', 'Mediterranean diet', 'High fiber'],
  },
  {
    name: 'Caprese Sandwich',
    type: 'lunch' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    ingredients: [
      { name: 'Whole Grain Bread', amount: 2, unit: 'slices', grams: 60, slug: 'whole-grain-bread' },
      { name: 'Fresh Mozzarella', amount: 100, unit: 'g', grams: 100, slug: 'fresh-mozzarella' },
      { name: 'Tomato', amount: 1, unit: 'medium', grams: 150, slug: 'tomato' },
      { name: 'Basil Leaves', amount: 10, unit: 'g', grams: 10, slug: 'basil' },
      { name: 'Balsamic Vinegar', amount: 15, unit: 'ml', grams: 15, slug: 'balsamic-vinegar' },
    ],
    instructions: [
      'Slice bread and toast lightly',
      'Layer mozzarella and tomato slices',
      'Add fresh basil leaves',
      'Drizzle with balsamic vinegar',
      'Top with second bread slice and cut',
    ],
    nutrition: { calories: 380, protein: 18, carbs: 35, fat: 18, fiber: 4, sugar: 4, sodium: 450 },
    benefits: ['Fresh ingredients', 'Italian-inspired', 'Good calcium'],
  },
  {
    name: 'Lentil Soup',
    type: 'lunch' as const,
    servings: 2,
    prepTime: 5,
    cookTime: 30,
    ingredients: [
      { name: 'Red Lentils', amount: 100, unit: 'g', grams: 100, slug: 'red-lentils' },
      { name: 'Vegetable Broth', amount: 500, unit: 'ml', grams: 500, slug: 'vegetable-broth' },
      { name: 'Carrot', amount: 1, unit: 'medium', grams: 120, slug: 'carrot' },
      { name: 'Celery', amount: 50, unit: 'g', grams: 50, slug: 'celery' },
      { name: 'Onion', amount: 75, unit: 'g', grams: 75, slug: 'onion' },
    ],
    instructions: [
      'Dice vegetables',
      'Add broth to pot and bring to boil',
      'Add lentils and vegetables',
      'Simmer for 25-30 minutes until lentils are soft',
      'Season and serve hot',
    ],
    nutrition: { calories: 220, protein: 18, carbs: 38, fat: 1, fiber: 8, sugar: 4, sodium: 480 },
    benefits: ['High protein legume', 'Comfort food', 'Budget-friendly'],
  },

  // More Dinner
  {
    name: 'Baked Chicken Breast with Rice',
    type: 'dinner' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 25,
    ingredients: [
      { name: 'Chicken Breast', amount: 150, unit: 'g', grams: 150, slug: 'chicken-breast' },
      { name: 'Brown Rice', amount: 75, unit: 'g', grams: 75, slug: 'brown-rice' },
      { name: 'Green Beans', amount: 100, unit: 'g', grams: 100, slug: 'green-beans' },
      { name: 'Olive Oil', amount: 10, unit: 'ml', grams: 10, slug: 'olive-oil' },
    ],
    instructions: [
      'Cook rice according to package directions',
      'Season chicken and bake at 375F for 20-25 minutes',
      'Steam green beans until tender',
      'Drizzle with olive oil and serve',
    ],
    nutrition: { calories: 410, protein: 42, carbs: 38, fat: 8, fiber: 4, sugar: 2, sodium: 65 },
    benefits: ['Clean protein', 'Balanced meal', 'Easy weeknight dinner'],
  },
  {
    name: 'Beef Stir-Fry',
    type: 'dinner' as const,
    servings: 1,
    prepTime: 15,
    cookTime: 12,
    ingredients: [
      { name: 'Lean Beef', amount: 150, unit: 'g', grams: 150, slug: 'lean-beef' },
      { name: 'Broccoli', amount: 100, unit: 'g', grams: 100, slug: 'broccoli' },
      { name: 'Bell Pepper', amount: 75, unit: 'g', grams: 75, slug: 'bell-pepper' },
      { name: 'Garlic', amount: 10, unit: 'g', grams: 10, slug: 'garlic' },
      { name: 'Low Sodium Soy Sauce', amount: 15, unit: 'ml', grams: 15, slug: 'low-sodium-soy-sauce' },
    ],
    instructions: [
      'Slice beef thinly against the grain',
      'Heat wok or large skillet',
      'Stir-fry beef until cooked through',
      'Add vegetables and garlic, stir-fry until tender-crisp',
      'Add soy sauce and toss to combine',
    ],
    nutrition: { calories: 320, protein: 38, carbs: 14, fat: 12, fiber: 2, sugar: 3, sodium: 420 },
    benefits: ['Lean protein', 'Iron-rich beef', 'Quick and healthy'],
  },
  {
    name: 'Zucchini Noodles with Pesto',
    type: 'dinner' as const,
    servings: 1,
    prepTime: 10,
    cookTime: 5,
    ingredients: [
      { name: 'Zucchini', amount: 200, unit: 'g', grams: 200, slug: 'zucchini' },
      { name: 'Pesto Sauce', amount: 40, unit: 'g', grams: 40, slug: 'pesto-sauce' },
      { name: 'Cherry Tomatoes', amount: 100, unit: 'g', grams: 100, slug: 'cherry-tomatoes' },
      { name: 'Pine Nuts', amount: 20, unit: 'g', grams: 20, slug: 'pine-nuts' },
    ],
    instructions: [
      'Use spiralizer to create zucchini noodles',
      'Lightly sauté noodles for 2-3 minutes',
      'Toss with pesto sauce',
      'Top with cherry tomatoes and pine nuts',
      'Serve immediately',
    ],
    nutrition: { calories: 240, protein: 12, carbs: 18, fat: 14, fiber: 4, sugar: 4, sodium: 380 },
    benefits: ['Low carb option', 'Vegetable-based', 'Light and fresh'],
  },

  // More Snacks
  {
    name: 'Cheese and Crackers',
    type: 'snack' as const,
    servings: 1,
    prepTime: 2,
    cookTime: 0,
    ingredients: [
      { name: 'Cheddar Cheese', amount: 40, unit: 'g', grams: 40, slug: 'cheddar-cheese' },
      { name: 'Whole Grain Crackers', amount: 30, unit: 'g', grams: 30, slug: 'whole-grain-crackers' },
    ],
    instructions: [
      'Slice or cut cheese',
      'Arrange on plate with crackers',
      'Enjoy',
    ],
    nutrition: { calories: 220, protein: 12, carbs: 18, fat: 10, fiber: 2, sugar: 1, sodium: 380 },
    benefits: ['Quick snack', 'Protein and calcium', 'Satisfying'],
  },
  {
    name: 'String Cheese and Almonds',
    type: 'snack' as const,
    servings: 1,
    prepTime: 1,
    cookTime: 0,
    ingredients: [
      { name: 'String Cheese', amount: 28, unit: 'g', grams: 28, slug: 'string-cheese' },
      { name: 'Almonds', amount: 30, unit: 'g', grams: 30, slug: 'almonds' },
    ],
    instructions: [
      'Pack string cheese and almonds in container',
      'Eat as on-the-go snack',
    ],
    nutrition: { calories: 220, protein: 10, carbs: 6, fat: 17, fiber: 3, sugar: 0, sodium: 280 },
    benefits: ['Portable', 'High protein', 'Good healthy fats'],
  },
  {
    name: 'Protein Bar',
    type: 'snack' as const,
    servings: 1,
    prepTime: 0,
    cookTime: 0,
    ingredients: [
      { name: 'Protein Bar', amount: 1, unit: 'bar', grams: 65, slug: 'protein-bar' },
    ],
    instructions: [
      'Remove from packaging',
      'Enjoy as convenient snack',
    ],
    nutrition: { calories: 200, protein: 20, carbs: 22, fat: 5, fiber: 3, sugar: 1, sodium: 150 },
    benefits: ['Convenient', 'Quick energy', 'Portable'],
  },
  {
    name: 'Cottage Cheese with Berries',
    type: 'snack' as const,
    servings: 1,
    prepTime: 2,
    cookTime: 0,
    ingredients: [
      { name: 'Cottage Cheese', amount: 150, unit: 'g', grams: 150, slug: 'cottage-cheese' },
      { name: 'Raspberries', amount: 75, unit: 'g', grams: 75, slug: 'raspberries' },
      { name: 'Honey', amount: 10, unit: 'g', grams: 10, slug: 'honey' },
    ],
    instructions: [
      'Pour cottage cheese into bowl',
      'Top with fresh raspberries',
      'Drizzle with honey',
      'Mix and enjoy',
    ],
    nutrition: { calories: 180, protein: 22, carbs: 18, fat: 2, fiber: 3, sugar: 12, sodium: 350 },
    benefits: ['High protein', 'Low fat option', 'Filling'],
  },

  // Lunch variations
  {
    name: 'Greek Salad with Grilled Chicken',
    type: 'lunch' as const,
    servings: 1,
    prepTime: 10,
    cookTime: 12,
    ingredients: [
      { name: 'Chicken Breast', amount: 100, unit: 'g', grams: 100, slug: 'chicken-breast' },
      { name: 'Romaine Lettuce', amount: 100, unit: 'g', grams: 100, slug: 'romaine-lettuce' },
      { name: 'Tomato', amount: 1, unit: 'medium', grams: 150, slug: 'tomato' },
      { name: 'Cucumber', amount: 100, unit: 'g', grams: 100, slug: 'cucumber' },
      { name: 'Feta Cheese', amount: 40, unit: 'g', grams: 40, slug: 'feta-cheese' },
      { name: 'Kalamata Olives', amount: 30, unit: 'g', grams: 30, slug: 'kalamata-olives' },
    ],
    instructions: [
      'Grill chicken breast until cooked through',
      'Chop lettuce, tomato, and cucumber',
      'Combine vegetables',
      'Top with sliced chicken, feta, and olives',
      'Dress with olive oil and lemon juice',
    ],
    nutrition: { calories: 340, protein: 32, carbs: 16, fat: 16, fiber: 4, sugar: 6, sodium: 580 },
    benefits: ['Mediterranean diet', 'High protein', 'Fresh vegetables'],
  },
  {
    name: 'Veggie Wrap',
    type: 'lunch' as const,
    servings: 1,
    prepTime: 8,
    cookTime: 0,
    ingredients: [
      { name: 'Whole Wheat Tortilla', amount: 1, unit: 'large', grams: 75, slug: 'whole-wheat-tortilla' },
      { name: 'Hummus', amount: 40, unit: 'g', grams: 40, slug: 'hummus' },
      { name: 'Spinach', amount: 50, unit: 'g', grams: 50, slug: 'spinach' },
      { name: 'Bell Pepper', amount: 75, unit: 'g', grams: 75, slug: 'bell-pepper' },
      { name: 'Cucumber', amount: 75, unit: 'g', grams: 75, slug: 'cucumber' },
      { name: 'Avocado', amount: 75, unit: 'g', grams: 75, slug: 'avocado' },
    ],
    instructions: [
      'Spread hummus on tortilla',
      'Layer spinach, bell pepper, cucumber, and avocado',
      'Roll tightly',
      'Cut in half and serve',
    ],
    nutrition: { calories: 310, protein: 11, carbs: 36, fat: 14, fiber: 8, sugar: 2, sodium: 380 },
    benefits: ['Plant-based', 'High fiber', 'Easy to prepare'],
  },

  // Dinner variations
  {
    name: 'Turkey Meatballs with Marinara',
    type: 'dinner' as const,
    servings: 2,
    prepTime: 10,
    cookTime: 20,
    ingredients: [
      { name: 'Ground Turkey', amount: 250, unit: 'g', grams: 250, slug: 'ground-turkey' },
      { name: 'Breadcrumbs', amount: 25, unit: 'g', grams: 25, slug: 'breadcrumbs' },
      { name: 'Egg', amount: 1, unit: 'large', grams: 50, slug: 'egg' },
      { name: 'Marinara Sauce', amount: 200, unit: 'ml', grams: 200, slug: 'marinara-sauce' },
      { name: 'Zucchini Noodles', amount: 150, unit: 'g', grams: 150, slug: 'zucchini-noodles' },
    ],
    instructions: [
      'Mix ground turkey, breadcrumbs, and egg',
      'Form into balls and place on baking sheet',
      'Bake at 400F for 15-20 minutes',
      'Heat marinara sauce',
      'Serve meatballs over zucchini noodles with sauce',
    ],
    nutrition: { calories: 280, protein: 32, carbs: 18, fat: 9, fiber: 3, sugar: 4, sodium: 520 },
    benefits: ['Low carb option', 'High protein', 'Freezer-friendly'],
  },
  {
    name: 'Baked Cod with Asparagus',
    type: 'dinner' as const,
    servings: 1,
    prepTime: 5,
    cookTime: 15,
    ingredients: [
      { name: 'Cod Fillet', amount: 150, unit: 'g', grams: 150, slug: 'cod-fillet' },
      { name: 'Asparagus', amount: 150, unit: 'g', grams: 150, slug: 'asparagus' },
      { name: 'Lemon', amount: 1, unit: 'medium', grams: 60, slug: 'lemon' },
      { name: 'Olive Oil', amount: 10, unit: 'ml', grams: 10, slug: 'olive-oil' },
    ],
    instructions: [
      'Preheat oven to 400F',
      'Place cod on sheet pan',
      'Toss asparagus with olive oil and arrange around cod',
      'Season with salt, pepper, and lemon juice',
      'Bake for 12-15 minutes until fish flakes easily',
    ],
    nutrition: { calories: 220, protein: 30, carbs: 8, fat: 8, fiber: 2, sugar: 1, sodium: 90 },
    benefits: ['Lean white fish', 'Low calorie', 'High protein'],
  },
  {
    name: 'Vegetable Curry',
    type: 'dinner' as const,
    servings: 2,
    prepTime: 15,
    cookTime: 20,
    ingredients: [
      { name: 'Chickpeas', amount: 200, unit: 'g', grams: 200, slug: 'chickpeas' },
      { name: 'Coconut Milk', amount: 200, unit: 'ml', grams: 200, slug: 'coconut-milk' },
      { name: 'Spinach', amount: 100, unit: 'g', grams: 100, slug: 'spinach' },
      { name: 'Bell Pepper', amount: 100, unit: 'g', grams: 100, slug: 'bell-pepper' },
      { name: 'Curry Paste', amount: 15, unit: 'g', grams: 15, slug: 'curry-paste' },
    ],
    instructions: [
      'Heat oil in pot and add curry paste',
      'Add coconut milk and bring to simmer',
      'Add chickpeas and bell pepper',
      'Simmer for 15 minutes',
      'Stir in spinach and cook for 2 minutes',
      'Serve over rice',
    ],
    nutrition: { calories: 350, protein: 14, carbs: 42, fat: 14, fiber: 10, sugar: 6, sodium: 480 },
    benefits: ['Vegetarian protein', 'Anti-inflammatory spices', 'Comfort food'],
  },

  // More Snacks
  {
    name: 'Edamame',
    type: 'snack' as const,
    servings: 1,
    prepTime: 0,
    cookTime: 5,
    ingredients: [
      { name: 'Frozen Edamame', amount: 150, unit: 'g', grams: 150, slug: 'frozen-edamame' },
      { name: 'Sea Salt', amount: 1, unit: 'pinch', grams: 1, slug: 'sea-salt' },
    ],
    instructions: [
      'Boil water and cook frozen edamame for 3-5 minutes',
      'Drain and sprinkle with sea salt',
      'Serve warm or cold',
    ],
    nutrition: { calories: 190, protein: 18, carbs: 14, fat: 8, fiber: 5, sugar: 2, sodium: 190 },
    benefits: ['Plant-based protein', 'Complete amino acids', 'Fiber-rich'],
  },
  {
    name: 'Mixed Nuts',
    type: 'snack' as const,
    servings: 1,
    prepTime: 0,
    cookTime: 0,
    ingredients: [
      { name: 'Unsalted Mixed Nuts', amount: 30, unit: 'g', grams: 30, slug: 'unsalted-mixed-nuts' },
    ],
    instructions: [
      'Portion nuts into small container',
      'Enjoy as snack',
    ],
    nutrition: { calories: 180, protein: 5, carbs: 7, fat: 16, fiber: 4, sugar: 1, sodium: 0 },
    benefits: ['Heart healthy', 'Portable', 'Sustained energy'],
  },
  {
    name: 'Dark Chocolate and Almonds',
    type: 'snack' as const,
    servings: 1,
    prepTime: 0,
    cookTime: 0,
    ingredients: [
      { name: 'Dark Chocolate', amount: 20, unit: 'g', grams: 20, slug: 'dark-chocolate' },
      { name: 'Almonds', amount: 30, unit: 'g', grams: 30, slug: 'almonds' },
    ],
    instructions: [
      'Combine dark chocolate pieces and almonds',
      'Enjoy as satisfying snack',
    ],
    nutrition: { calories: 240, protein: 7, carbs: 20, fat: 16, fiber: 4, sugar: 12, sodium: 5 },
    benefits: ['Antioxidants', 'Healthy fats', 'Mood boosting'],
  },
]

async function generateExtendedMeals() {
  const mealsDir = path.join(process.cwd(), 'data', 'meals')

  if (!fs.existsSync(mealsDir)) {
    fs.mkdirSync(mealsDir, { recursive: true })
  }

  let created = 0
  let mealIndex = 100

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
      console.log(`Created ${created} extended meals...`)
    }
  }

  console.log(`\n✅ Extended meal generation complete!`)
  console.log(`   Created: ${created} meal files`)
}

generateExtendedMeals().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
