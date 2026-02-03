export interface NutritionData {
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber: number
  sugar: number
  sodium: number
  saturatedFat?: number
  cholesterol?: number
  potassium?: number
  vitaminA?: number
  vitaminC?: number
  calcium?: number
  iron?: number
}

export interface ServingSize {
  amount: number
  unit: string
  grams: number
  label: string
}

export interface FoodData {
  fdcId: string
  slug: string
  name: string
  category: string
  description?: string
  servingSizes: ServingSize[]
  nutritionPer100g: NutritionData
  source: 'usda' | 'custom'
  updatedAt: string
}

export interface FoodComparison {
  food1: FoodData
  food2: FoodData
  winners: {
    lowerCalories: string
    higherProtein: string
    lowerCarbs: string
    lowerFat: string
    higherFiber: string
    lowerSugar: string
    lowerSodium: string
  }
  healthScore: {
    food1: number
    food2: number
    winner: string
  }
}
