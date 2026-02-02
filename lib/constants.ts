// Site-wide constants

export const SITE_NAME = 'CalorieData'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://caloriedata.org'
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

// Featured foods for homepage (top 124 most popular)
// Note: Full food database is in /data/foods/*.json (200+ foods)
// Use getAllFoodSlugs() from lib/data.ts to get complete list
export const FEATURED_FOODS = [
  // Fruits (High search volume)
  { slug: 'banana', name: 'Banana', category: 'fruits' },
  { slug: 'apple', name: 'Apple', category: 'fruits' },
  { slug: 'orange', name: 'Orange', category: 'fruits' },
  { slug: 'avocado', name: 'Avocado', category: 'fruits' },
  { slug: 'strawberry', name: 'Strawberry', category: 'fruits' },
  { slug: 'blueberry', name: 'Blueberry', category: 'fruits' },
  { slug: 'grape', name: 'Grapes', category: 'fruits' },
  { slug: 'watermelon', name: 'Watermelon', category: 'fruits' },
  { slug: 'pineapple', name: 'Pineapple', category: 'fruits' },
  { slug: 'mango', name: 'Mango', category: 'fruits' },
  { slug: 'peach', name: 'Peach', category: 'fruits' },
  { slug: 'pear', name: 'Pear', category: 'fruits' },
  { slug: 'kiwi', name: 'Kiwi', category: 'fruits' },
  { slug: 'cherry', name: 'Cherry', category: 'fruits' },
  { slug: 'raspberry', name: 'Raspberry', category: 'fruits' },

  // Vegetables (High search volume)
  { slug: 'broccoli', name: 'Broccoli', category: 'vegetables' },
  { slug: 'spinach', name: 'Spinach', category: 'vegetables' },
  { slug: 'sweet-potato', name: 'Sweet Potato', category: 'vegetables' },
  { slug: 'carrot', name: 'Carrot', category: 'vegetables' },
  { slug: 'tomato', name: 'Tomato', category: 'vegetables' },
  { slug: 'cucumber', name: 'Cucumber', category: 'vegetables' },
  { slug: 'lettuce', name: 'Lettuce', category: 'vegetables' },
  { slug: 'onion', name: 'Onion', category: 'vegetables' },
  { slug: 'bell-pepper', name: 'Bell Pepper', category: 'vegetables' },
  { slug: 'cauliflower', name: 'Cauliflower', category: 'vegetables' },
  { slug: 'celery', name: 'Celery', category: 'vegetables' },
  { slug: 'zucchini', name: 'Zucchini', category: 'vegetables' },
  { slug: 'kale', name: 'Kale', category: 'vegetables' },
  { slug: 'asparagus', name: 'Asparagus', category: 'vegetables' },
  { slug: 'mushroom', name: 'Mushrooms', category: 'vegetables' },

  // Proteins (High search volume)
  { slug: 'chicken-breast', name: 'Chicken Breast', category: 'proteins' },
  { slug: 'egg', name: 'Egg', category: 'proteins' },
  { slug: 'salmon', name: 'Salmon', category: 'proteins' },
  { slug: 'ground-beef', name: 'Ground Beef', category: 'proteins' },
  { slug: 'steak', name: 'Steak', category: 'proteins' },
  { slug: 'chicken-thigh', name: 'Chicken Thigh', category: 'proteins' },
  { slug: 'turkey', name: 'Turkey Breast', category: 'proteins' },
  { slug: 'tuna', name: 'Tuna', category: 'proteins' },
  { slug: 'shrimp', name: 'Shrimp', category: 'proteins' },
  { slug: 'bacon', name: 'Bacon', category: 'proteins' },
  { slug: 'pork-chop', name: 'Pork Chop', category: 'proteins' },
  { slug: 'ham', name: 'Ham', category: 'proteins' },
  { slug: 'cod', name: 'Cod', category: 'proteins' },
  { slug: 'tofu', name: 'Tofu', category: 'proteins' },
  { slug: 'chicken-wings', name: 'Chicken Wings', category: 'proteins' },

  // Grains & Cereals (High search volume)
  { slug: 'rice', name: 'White Rice', category: 'grains' },
  { slug: 'brown-rice', name: 'Brown Rice', category: 'grains' },
  { slug: 'pasta', name: 'Pasta', category: 'grains' },
  { slug: 'bread', name: 'White Bread', category: 'grains' },
  { slug: 'whole-wheat-bread', name: 'Whole Wheat Bread', category: 'grains' },
  { slug: 'oatmeal', name: 'Oatmeal', category: 'grains' },
  { slug: 'quinoa', name: 'Quinoa', category: 'grains' },
  { slug: 'bagel', name: 'Bagel', category: 'grains' },
  { slug: 'tortilla', name: 'Tortilla', category: 'grains' },
  { slug: 'cereal', name: 'Breakfast Cereal', category: 'grains' },
  { slug: 'crackers', name: 'Crackers', category: 'grains' },
  { slug: 'granola', name: 'Granola', category: 'grains' },
  { slug: 'couscous', name: 'Couscous', category: 'grains' },
  { slug: 'english-muffin', name: 'English Muffin', category: 'grains' },

  // Dairy (High search volume)
  { slug: 'milk', name: 'Whole Milk', category: 'dairy' },
  { slug: 'skim-milk', name: 'Skim Milk', category: 'dairy' },
  { slug: 'greek-yogurt', name: 'Greek Yogurt', category: 'dairy' },
  { slug: 'yogurt', name: 'Yogurt', category: 'dairy' },
  { slug: 'cheese', name: 'Cheddar Cheese', category: 'dairy' },
  { slug: 'mozzarella', name: 'Mozzarella Cheese', category: 'dairy' },
  { slug: 'cottage-cheese', name: 'Cottage Cheese', category: 'dairy' },
  { slug: 'cream-cheese', name: 'Cream Cheese', category: 'dairy' },
  { slug: 'butter', name: 'Butter', category: 'dairy' },
  { slug: 'sour-cream', name: 'Sour Cream', category: 'dairy' },
  { slug: 'parmesan', name: 'Parmesan Cheese', category: 'dairy' },

  // Nuts & Seeds (High search volume)
  { slug: 'almonds', name: 'Almonds', category: 'nuts-seeds' },
  { slug: 'peanut-butter', name: 'Peanut Butter', category: 'nuts-seeds' },
  { slug: 'peanuts', name: 'Peanuts', category: 'nuts-seeds' },
  { slug: 'walnuts', name: 'Walnuts', category: 'nuts-seeds' },
  { slug: 'cashews', name: 'Cashews', category: 'nuts-seeds' },
  { slug: 'pistachios', name: 'Pistachios', category: 'nuts-seeds' },
  { slug: 'sunflower-seeds', name: 'Sunflower Seeds', category: 'nuts-seeds' },
  { slug: 'chia-seeds', name: 'Chia Seeds', category: 'nuts-seeds' },
  { slug: 'flaxseed', name: 'Flaxseed', category: 'nuts-seeds' },
  { slug: 'almond-butter', name: 'Almond Butter', category: 'nuts-seeds' },

  // Beverages (High search volume)
  { slug: 'coffee', name: 'Coffee', category: 'beverages' },
  { slug: 'tea', name: 'Tea', category: 'beverages' },
  { slug: 'orange-juice', name: 'Orange Juice', category: 'beverages' },
  { slug: 'apple-juice', name: 'Apple Juice', category: 'beverages' },
  { slug: 'soda', name: 'Soda', category: 'beverages' },
  { slug: 'beer', name: 'Beer', category: 'beverages' },
  { slug: 'wine', name: 'Red Wine', category: 'beverages' },
  { slug: 'latte', name: 'Latte', category: 'beverages' },
  { slug: 'protein-shake', name: 'Protein Shake', category: 'beverages' },
  { slug: 'almond-milk', name: 'Almond Milk', category: 'beverages' },

  // Fast Food (MASSIVE search volume)
  { slug: 'pizza', name: 'Pizza', category: 'fast-food' },
  { slug: 'hamburger', name: 'Hamburger', category: 'fast-food' },
  { slug: 'cheeseburger', name: 'Cheeseburger', category: 'fast-food' },
  { slug: 'french-fries', name: 'French Fries', category: 'fast-food' },
  { slug: 'hot-dog', name: 'Hot Dog', category: 'fast-food' },
  { slug: 'taco', name: 'Taco', category: 'fast-food' },
  { slug: 'burrito', name: 'Burrito', category: 'fast-food' },
  { slug: 'sub-sandwich', name: 'Sub Sandwich', category: 'fast-food' },
  { slug: 'chicken-nuggets', name: 'Chicken Nuggets', category: 'fast-food' },
  { slug: 'nachos', name: 'Nachos', category: 'fast-food' },

  // Snacks (High search volume)
  { slug: 'potato-chips', name: 'Potato Chips', category: 'snacks' },
  { slug: 'popcorn', name: 'Popcorn', category: 'snacks' },
  { slug: 'pretzels', name: 'Pretzels', category: 'snacks' },
  { slug: 'granola-bar', name: 'Granola Bar', category: 'snacks' },
  { slug: 'protein-bar', name: 'Protein Bar', category: 'snacks' },
  { slug: 'trail-mix', name: 'Trail Mix', category: 'snacks' },

  // Desserts (High search volume)
  { slug: 'chocolate', name: 'Chocolate', category: 'desserts' },
  { slug: 'ice-cream', name: 'Ice Cream', category: 'desserts' },
  { slug: 'cookie', name: 'Chocolate Chip Cookie', category: 'desserts' },
  { slug: 'brownie', name: 'Brownie', category: 'desserts' },
  { slug: 'cake', name: 'Cake', category: 'desserts' },
  { slug: 'donut', name: 'Donut', category: 'desserts' },
  { slug: 'pie', name: 'Apple Pie', category: 'desserts' },
  { slug: 'candy', name: 'Candy', category: 'desserts' },
] as const

// Backward compatibility: keep POPULAR_FOODS as alias
export const POPULAR_FOODS = FEATURED_FOODS

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

// Nutrient filter pages
export const NUTRIENT_FILTERS = [
  { slug: 'high-protein', name: 'High Protein Foods', description: 'Foods with 15g+ protein per 100g' },
  { slug: 'high-fiber', name: 'High Fiber Foods', description: 'Foods with 3g+ fiber per 100g' },
  { slug: 'low-carb', name: 'Low Carb Foods', description: 'Foods with 10g or less carbs per 100g' },
  { slug: 'low-calorie', name: 'Low Calorie Foods', description: 'Foods with 100 calories or less per 100g' },
  { slug: 'high-iron', name: 'High Iron Foods', description: 'Iron-rich foods for energy and health' },
  { slug: 'high-calcium', name: 'High Calcium Foods', description: 'Foods rich in calcium for strong bones' },
] as const

// Diet type filter pages
export const DIET_FILTERS = [
  { slug: 'keto', name: 'Keto Diet', description: 'Low-carb, high-fat foods for ketogenic diets' },
  { slug: 'vegan', name: 'Vegan Diet', description: 'Plant-based foods for vegan diets' },
  { slug: 'vegetarian', name: 'Vegetarian Diet', description: 'Meat-free foods for vegetarian diets' },
  { slug: 'paleo', name: 'Paleo Diet', description: 'Whole foods for paleo and ancestral diets' },
  { slug: 'gluten-free', name: 'Gluten Free', description: 'Foods naturally gluten-free' },
  { slug: 'low-sodium', name: 'Low Sodium', description: 'Foods with 200mg sodium or less per 100g' },
] as const
