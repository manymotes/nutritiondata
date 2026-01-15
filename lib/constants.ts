// Site-wide constants

export const SITE_NAME = 'CalorieData'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://caloriedata.io'
export const SITE_DESCRIPTION = 'Free nutrition data for 300,000+ foods. Find calories, macros, and compare any foods instantly.'

export const USDA_API_KEY = process.env.USDA_API_KEY || ''
export const USDA_API_BASE = 'https://api.nal.usda.gov/fdc/v1'

// Food categories
export const FOOD_CATEGORIES = [
  { slug: 'fruits', name: 'Fruits', icon: '🍎' },
  { slug: 'vegetables', name: 'Vegetables', icon: '🥦' },
  { slug: 'grains', name: 'Grains & Cereals', icon: '🌾' },
  { slug: 'proteins', name: 'Proteins & Meats', icon: '🥩' },
  { slug: 'dairy', name: 'Dairy', icon: '🥛' },
  { slug: 'nuts-seeds', name: 'Nuts & Seeds', icon: '🥜' },
  { slug: 'beverages', name: 'Beverages', icon: '🥤' },
  { slug: 'snacks', name: 'Snacks', icon: '🍿' },
  { slug: 'fast-food', name: 'Fast Food', icon: '🍔' },
  { slug: 'desserts', name: 'Desserts', icon: '🍰' },
] as const

// Popular foods for homepage and initial data
export const POPULAR_FOODS = [
  { slug: 'banana', name: 'Banana', category: 'fruits' },
  { slug: 'apple', name: 'Apple', category: 'fruits' },
  { slug: 'chicken-breast', name: 'Chicken Breast', category: 'proteins' },
  { slug: 'rice', name: 'White Rice', category: 'grains' },
  { slug: 'egg', name: 'Egg', category: 'proteins' },
  { slug: 'avocado', name: 'Avocado', category: 'fruits' },
  { slug: 'salmon', name: 'Salmon', category: 'proteins' },
  { slug: 'broccoli', name: 'Broccoli', category: 'vegetables' },
  { slug: 'oatmeal', name: 'Oatmeal', category: 'grains' },
  { slug: 'greek-yogurt', name: 'Greek Yogurt', category: 'dairy' },
  { slug: 'almonds', name: 'Almonds', category: 'nuts-seeds' },
  { slug: 'sweet-potato', name: 'Sweet Potato', category: 'vegetables' },
  { slug: 'pasta', name: 'Pasta', category: 'grains' },
  { slug: 'orange', name: 'Orange', category: 'fruits' },
  { slug: 'spinach', name: 'Spinach', category: 'vegetables' },
  { slug: 'bread', name: 'White Bread', category: 'grains' },
  { slug: 'milk', name: 'Whole Milk', category: 'dairy' },
  { slug: 'cheese', name: 'Cheddar Cheese', category: 'dairy' },
  { slug: 'peanut-butter', name: 'Peanut Butter', category: 'nuts-seeds' },
  { slug: 'coffee', name: 'Coffee', category: 'beverages' },
] as const

// Nutrient display configuration
export const NUTRIENTS = {
  calories: { name: 'Calories', unit: 'kcal', color: 'orange' },
  protein: { name: 'Protein', unit: 'g', color: 'red' },
  carbs: { name: 'Carbohydrates', unit: 'g', color: 'blue' },
  fat: { name: 'Fat', unit: 'g', color: 'yellow' },
  fiber: { name: 'Fiber', unit: 'g', color: 'green' },
  sugar: { name: 'Sugar', unit: 'g', color: 'pink' },
  sodium: { name: 'Sodium', unit: 'mg', color: 'purple' },
} as const
