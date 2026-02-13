import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { getFoodData, getAllFoods, getAllFoodSlugs } from '@/lib/data'
import { SITE_NAME, SITE_URL, POPULAR_FOODS, FOOD_CATEGORIES } from '@/lib/constants'
import { getFoodContent } from '@/lib/food-content'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate static params for all foods (now reading from /data/foods/*.json)
export async function generateStaticParams() {
  const allSlugs = getAllFoodSlugs()
  return allSlugs.map((slug) => ({
    slug,
  }))
}

// Generate metadata with SEO-optimized titles and descriptions
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const food = getFoodData(params.slug)
  if (!food) {
    return { title: 'Food Not Found' }
  }

  const { nutritionPer100g: nutrition } = food
  const calories = nutrition.calories

  // Generate compelling, keyword-rich title
  const getOptimizedTitle = () => {
    if (nutrition.protein >= 15) {
      return `${food.name} Calories: ${calories} per 100g | High Protein (${nutrition.protein}g)`
    }
    if (nutrition.fiber >= 5) {
      return `${food.name} Calories: ${calories} per 100g | High Fiber (${nutrition.fiber}g)`
    }
    if (calories < 50) {
      return `${food.name} Calories: Only ${calories} per 100g | Low Calorie Facts`
    }
    return `${food.name} Calories: ${calories} per 100g | Full Nutrition Facts`
  }

  // Generate CTA-focused description
  const getOptimizedDescription = () => {
    const highlights: string[] = []
    if (nutrition.protein >= 10) highlights.push(`${nutrition.protein}g protein`)
    if (nutrition.fiber >= 3) highlights.push(`${nutrition.fiber}g fiber`)
    if (calories < 100) highlights.push('low calorie')

    const highlightText = highlights.length > 0 ? ` Rich in ${highlights.join(' & ')}.` : ''

    return `How many calories in ${food.name.toLowerCase()}? ${calories} calories per 100g.${highlightText} View complete nutrition breakdown, macros, serving sizes & compare with similar foods. Free nutrition database.`
  }

  return {
    title: getOptimizedTitle(),
    description: getOptimizedDescription(),
    alternates: {
      canonical: `https://caloriedata.org/calories-in/${params.slug}`,
    },
    openGraph: {
      title: `${food.name} Nutrition Facts - ${calories} Calories per 100g`,
      description: `Complete nutrition info for ${food.name}: ${calories} cal, ${nutrition.protein}g protein, ${nutrition.carbs}g carbs, ${nutrition.fat}g fat. Compare with similar foods.`,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: `${food.name}: ${calories} Calories per 100g`,
      description: `Full nutrition facts for ${food.name}. Protein: ${nutrition.protein}g | Carbs: ${nutrition.carbs}g | Fat: ${nutrition.fat}g`,
    },
  }
}

export default function FoodPage({ params }: PageProps) {
  const food = getFoodData(params.slug)

  if (!food) {
    notFound()
  }

  const { nutritionPer100g: nutrition } = food
  const category = FOOD_CATEGORIES.find(c => c.slug === food.category)
  const foodContent = getFoodContent(food.slug)

  // Get related foods from same category for internal linking (5-8 foods)
  const relatedFoods = POPULAR_FOODS
    .filter(f => f.category === food.category && f.slug !== food.slug)
    .slice(0, 8)

  // Get comparison foods from same category
  const comparisonFoods = POPULAR_FOODS
    .filter(f => f.category === food.category && f.slug !== food.slug)
    .slice(0, 6)

  // Get other popular foods for sidebar
  const otherFoods = POPULAR_FOODS
    .filter(f => f.slug !== food.slug)
    .slice(0, 5)

  // Helper function to get nutritional highlights
  const getNutritionalHighlights = () => {
    const highlights = []
    if (nutrition.calories < 50) highlights.push({ icon: '⚡', text: 'Very Low Calorie', desc: `Only ${nutrition.calories} calories per 100g` })
    else if (nutrition.calories < 100) highlights.push({ icon: '🎯', text: 'Low Calorie', desc: `Just ${nutrition.calories} calories per 100g` })

    if (nutrition.protein >= 20) highlights.push({ icon: '💪', text: 'High Protein', desc: `${nutrition.protein}g protein per 100g` })
    else if (nutrition.protein >= 10) highlights.push({ icon: '🥩', text: 'Good Protein Source', desc: `${nutrition.protein}g protein per 100g` })

    if (nutrition.fiber >= 5) highlights.push({ icon: '🌾', text: 'High Fiber', desc: `${nutrition.fiber}g fiber per 100g` })
    else if (nutrition.fiber >= 3) highlights.push({ icon: '🌿', text: 'Good Fiber Source', desc: `${nutrition.fiber}g fiber per 100g` })

    if (nutrition.fat < 3) highlights.push({ icon: '✨', text: 'Low Fat', desc: `Only ${nutrition.fat}g fat per 100g` })

    if (nutrition.carbs < 5) highlights.push({ icon: '🥑', text: 'Low Carb', desc: `Just ${nutrition.carbs}g carbs per 100g` })

    if (nutrition.sugar < 5) highlights.push({ icon: '🍬', text: 'Low Sugar', desc: `Only ${nutrition.sugar}g sugar per 100g` })

    return highlights.slice(0, 4)
  }

  const nutritionalHighlights = getNutritionalHighlights()

  // Generate enhanced NutritionInformation schema (Google-recommended format)
  // Extended with micronutrients for richer structured data
  const nutritionSchema = {
    '@context': 'https://schema.org',
    '@type': 'NutritionInformation',
    '@id': `${SITE_URL}/calories-in/${params.slug}#nutrition-100g`,
    name: `${food.name} Nutrition Facts (per 100g)`,
    description: `Nutrition information for ${food.name} per 100g serving`,
    calories: `${nutrition.calories} calories`,
    proteinContent: `${nutrition.protein} g`,
    carbohydrateContent: `${nutrition.carbs} g`,
    fatContent: `${nutrition.fat} g`,
    saturatedFatContent: food.nutritionPer100g.saturatedFat ? `${food.nutritionPer100g.saturatedFat} g` : undefined,
    transFatContent: (food.nutritionPer100g as any).transFat ? `${(food.nutritionPer100g as any).transFat} g` : '0 g',
    fiberContent: `${nutrition.fiber} g`,
    sugarContent: `${nutrition.sugar} g`,
    sodiumContent: `${nutrition.sodium} mg`,
    cholesterolContent: food.nutritionPer100g.cholesterol !== undefined ? `${food.nutritionPer100g.cholesterol} mg` : undefined,
    potassiumContent: food.nutritionPer100g.potassium ? `${food.nutritionPer100g.potassium} mg` : undefined,
    vitaminAContent: (food.nutritionPer100g as any).vitaminA ? `${(food.nutritionPer100g as any).vitaminA} IU` : undefined,
    vitaminCContent: (food.nutritionPer100g as any).vitaminC ? `${(food.nutritionPer100g as any).vitaminC} mg` : undefined,
    calciumContent: (food.nutritionPer100g as any).calcium ? `${(food.nutritionPer100g as any).calcium} mg` : undefined,
    ironContent: (food.nutritionPer100g as any).iron ? `${(food.nutritionPer100g as any).iron} mg` : undefined,
    servingSize: '100 g',
  }

  // Generate NutritionInformation schema for each serving size (Task 2)
  const servingSizeSchemas = food.servingSizes.map((serving, index) => {
    const multiplier = serving.grams / 100
    return {
      '@context': 'https://schema.org',
      '@type': 'NutritionInformation',
      '@id': `${SITE_URL}/calories-in/${params.slug}#nutrition-serving-${index}`,
      name: `${food.name} Nutrition Facts (${serving.label})`,
      description: `Nutrition information for ${food.name} per ${serving.label}`,
      calories: `${Math.round(nutrition.calories * multiplier)} calories`,
      proteinContent: `${(nutrition.protein * multiplier).toFixed(1)} g`,
      carbohydrateContent: `${(nutrition.carbs * multiplier).toFixed(1)} g`,
      fatContent: `${(nutrition.fat * multiplier).toFixed(1)} g`,
      saturatedFatContent: food.nutritionPer100g.saturatedFat ? `${(food.nutritionPer100g.saturatedFat * multiplier).toFixed(1)} g` : undefined,
      fiberContent: `${(nutrition.fiber * multiplier).toFixed(1)} g`,
      sugarContent: `${(nutrition.sugar * multiplier).toFixed(1)} g`,
      sodiumContent: `${Math.round(nutrition.sodium * multiplier)} mg`,
      cholesterolContent: food.nutritionPer100g.cholesterol !== undefined ? `${Math.round(food.nutritionPer100g.cholesterol * multiplier)} mg` : undefined,
      potassiumContent: food.nutritionPer100g.potassium ? `${Math.round(food.nutritionPer100g.potassium * multiplier)} mg` : undefined,
      servingSize: serving.label,
    }
  })

  // Generate enhanced BreadcrumbList schema with category icons and dynamic positions
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: {
        '@type': 'WebPage',
        '@id': SITE_URL,
        name: 'Home',
        url: SITE_URL,
      },
    },
  ]

  if (category) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: category.name,
      item: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/category/${category.slug}`,
        name: category.name,
        url: `${SITE_URL}/category/${category.slug}`,
        // Category icon as data URL for schema (emoji representation)
        image: `${SITE_URL}/icons/${category.slug}.svg`,
      } as any,
    })
  }

  breadcrumbItems.push({
    '@type': 'ListItem',
    position: breadcrumbItems.length + 1,
    name: food.name,
    item: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/calories-in/${params.slug}`,
      name: food.name,
      url: `${SITE_URL}/calories-in/${params.slug}`,
    },
  })

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  }

  // Generate enhanced FAQPage schema with specific nutritional FAQs
  const customFaqs = foodContent.faqs || []

  // Determine diet suitability based on nutrition
  const isLowCarb = nutrition.carbs < 10
  const isHighProtein = nutrition.protein >= 15
  const isLowFat = nutrition.fat < 5
  const isHighFiber = nutrition.fiber >= 5
  const isLowCalorie = nutrition.calories < 100

  // Build comprehensive default FAQs with specific nutritional questions
  const defaultFaqs = [
    {
      question: `How many calories are in ${food.name}?`,
      answer: `${food.name} contains ${nutrition.calories} calories per 100 grams. A typical serving may contain more or fewer calories depending on the portion size.${food.servingSizes.length > 1 ? ` For example, ${food.servingSizes[1]?.label || 'one serving'} contains approximately ${Math.round((nutrition.calories * (food.servingSizes[1]?.grams || 100)) / 100)} calories.` : ''}`
    },
    {
      question: `How much protein is in ${food.name}?`,
      answer: nutrition.protein >= 20
        ? `${food.name} is an excellent high-protein food with ${nutrition.protein}g of protein per 100g. This makes it ideal for muscle building, post-workout recovery, and maintaining satiety throughout the day.`
        : nutrition.protein >= 10
        ? `${food.name} contains ${nutrition.protein}g of protein per 100g, making it a good source of protein that can contribute meaningfully to your daily protein intake.`
        : `${food.name} provides ${nutrition.protein}g of protein per 100g. While not a high-protein food, it can be combined with other protein sources for a balanced meal.`
    },
    {
      question: `Is ${food.name} high in ${nutrition.protein >= 15 ? 'protein' : nutrition.fiber >= 5 ? 'fiber' : nutrition.carbs >= 20 ? 'carbohydrates' : 'nutrients'}?`,
      answer: nutrition.protein >= 15
        ? `Yes, ${food.name} is high in protein with ${nutrition.protein}g per 100g, exceeding the threshold for high-protein foods. This makes it excellent for muscle maintenance, weight management, and overall nutrition.`
        : nutrition.fiber >= 5
        ? `Yes, ${food.name} is high in fiber with ${nutrition.fiber}g per 100g. High-fiber foods support digestive health, help maintain healthy cholesterol levels, and promote feelings of fullness.`
        : `${food.name} provides a balanced nutritional profile with ${nutrition.protein}g protein, ${nutrition.carbs}g carbs, and ${nutrition.fat}g fat per 100g.`
    },
    {
      question: `Is ${food.name} good for a ${isLowCarb ? 'keto' : isHighProtein ? 'high-protein' : isLowCalorie ? 'weight loss' : 'balanced'} diet?`,
      answer: isLowCarb
        ? `Yes, ${food.name} is suitable for keto and low-carb diets with only ${nutrition.carbs}g of carbohydrates per 100g. It fits well within daily carb limits for ketogenic eating plans.`
        : isHighProtein
        ? `Yes, ${food.name} is excellent for high-protein diets with ${nutrition.protein}g of protein per 100g. It supports muscle building, satiety, and metabolic health.`
        : isLowCalorie
        ? `Yes, ${food.name} is ideal for weight loss diets with only ${nutrition.calories} calories per 100g. Its low calorie density allows for satisfying portions while maintaining a caloric deficit.`
        : `${food.name} can be part of a balanced diet. With ${nutrition.calories} calories, ${nutrition.protein}g protein, ${nutrition.carbs}g carbs, and ${nutrition.fat}g fat per 100g, it provides a mix of macronutrients.`
    },
    {
      question: `Is ${food.name} good for weight loss?`,
      answer: nutrition.calories < 100
        ? `Yes, ${food.name} is relatively low in calories with only ${nutrition.calories} calories per 100g, making it a good choice for weight loss diets when consumed as part of a balanced eating plan.${nutrition.fiber >= 3 ? ` The ${nutrition.fiber}g of fiber helps keep you feeling full longer.` : ''}`
        : nutrition.calories < 200
        ? `${food.name} has a moderate calorie content of ${nutrition.calories} calories per 100g. It can be part of a weight loss diet when consumed in appropriate portions.${nutrition.protein >= 10 ? ` The ${nutrition.protein}g of protein helps maintain muscle mass during weight loss.` : ''}`
        : `${food.name} contains ${nutrition.calories} calories per 100g, which is relatively calorie-dense. While it can be enjoyed as part of a weight loss diet, portion control is important.`
    },
    {
      question: `What nutrients are in ${food.name}?`,
      answer: `${food.name} provides ${nutrition.protein}g of protein, ${nutrition.carbs}g of carbohydrates (including ${nutrition.fiber}g of fiber and ${nutrition.sugar}g of sugar), and ${nutrition.fat}g of fat per 100g. It also contains ${nutrition.sodium}mg of sodium${food.nutritionPer100g.potassium ? ` and ${food.nutritionPer100g.potassium}mg of potassium` : ''}${food.nutritionPer100g.cholesterol !== undefined ? `, with ${food.nutritionPer100g.cholesterol}mg of cholesterol` : ''}.`
    },
    {
      question: `Is ${food.name} keto-friendly?`,
      answer: isLowCarb
        ? `Yes, ${food.name} is keto-friendly with only ${nutrition.carbs}g net carbs per 100g (${nutrition.carbs}g total carbs minus ${nutrition.fiber}g fiber). It can be included in a ketogenic diet without exceeding daily carb limits.`
        : `${food.name} contains ${nutrition.carbs}g of carbohydrates per 100g, which may be too high for strict keto diets (typically under 20-50g carbs daily). Consider portion sizes carefully if following a ketogenic eating plan.`
    },
    {
      question: `Is ${food.name} vegan?`,
      answer: food.category === 'proteins' || food.category === 'dairy'
        ? `${food.name} is typically not vegan as it comes from ${food.category === 'dairy' ? 'dairy (animal milk products)' : 'animal sources'}. Vegans should look for plant-based alternatives.`
        : food.category === 'fruits' || food.category === 'vegetables' || food.category === 'grains' || food.category === 'nuts-seeds'
        ? `Yes, ${food.name} is vegan-friendly as it is a plant-based food. It can be freely included in vegan and vegetarian diets.`
        : `${food.name} may or may not be vegan depending on its specific ingredients. Check the product label for any animal-derived ingredients.`
    }
  ]

  const faqsForSchema = customFaqs.length > 0 ? customFaqs : defaultFaqs

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/calories-in/${params.slug}#faq`,
    mainEntity: faqsForSchema.map((faq, index) => ({
      '@type': 'Question',
      '@id': `${SITE_URL}/calories-in/${params.slug}#faq-${index}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        '@id': `${SITE_URL}/calories-in/${params.slug}#answer-${index}`,
        text: faq.answer
      }
    }))
  }

  // Generate Article schema for better rich results
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${food.name} Calories and Nutrition Facts`,
    description: `Complete nutrition information for ${food.name}: ${nutrition.calories} calories, ${nutrition.protein}g protein, ${nutrition.carbs}g carbs, ${nutrition.fat}g fat per 100g.`,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/calories-in/${params.slug}`
    },
    about: {
      '@type': 'Thing',
      name: food.name
    }
  }

  return (
    <>
      <Script
        id="nutrition-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nutritionSchema) }}
      />
      {/* Multiple serving size schemas for richer structured data */}
      {servingSizeSchemas.map((schema, index) => (
        <Script
          key={`serving-schema-${index}`}
          id={`serving-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-700">Home</Link>
          </li>
          <li>/</li>
          {category && (
            <>
              <li>
                <Link href={`/category/${category.slug}`} className="hover:text-gray-700">
                  {category.name}
                </Link>
              </li>
              <li>/</li>
            </>
          )}
          <li className="text-gray-900 font-medium">{food.name}</li>
        </ol>
      </nav>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Calories in {food.name}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {food.name} contains <strong>{nutrition.calories} calories</strong> per 100 grams.
            Here&apos;s the complete nutrition breakdown.
          </p>

          {/* Nutritional Highlights */}
          {nutritionalHighlights.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nutritional Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nutritionalHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-5 border-l-4 border-primary-600 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-3xl">{highlight.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{highlight.text}</h3>
                        <p className="text-gray-600 text-sm mt-1">{highlight.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Nutrition Card */}
          <div className="bg-white rounded-lg border-2 border-gray-900 overflow-hidden mb-8">
            <div className="bg-gray-900 text-white px-6 py-4">
              <h2 className="text-xl font-bold">Nutrition Facts</h2>
              <p className="text-gray-300 text-sm">Per 100g serving</p>
            </div>

            <div className="p-6">
              {/* Calories */}
              <div className="flex justify-between items-center py-3 border-b-4 border-gray-900">
                <span className="text-2xl font-bold">Calories</span>
                <span className="text-3xl font-bold text-primary-600">{nutrition.calories}</span>
              </div>

              {/* Macros */}
              <div className="py-4 space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold">Total Fat</span>
                  <span className="font-bold">{nutrition.fat}g</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold">Total Carbohydrate</span>
                  <span className="font-bold">{nutrition.carbs}g</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 pl-4">
                  <span className="text-gray-600">Dietary Fiber</span>
                  <span>{nutrition.fiber}g</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 pl-4">
                  <span className="text-gray-600">Sugars</span>
                  <span>{nutrition.sugar}g</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold">Protein</span>
                  <span className="font-bold">{nutrition.protein}g</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold">Sodium</span>
                  <span className="font-bold">{nutrition.sodium}mg</span>
                </div>
              </div>
            </div>
          </div>

          {/* Macro Breakdown Visual */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Macronutrient Distribution</h3>
            <div className="space-y-4">
              {/* Protein Bar */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Protein</span>
                  <span className="text-sm font-semibold text-red-600">
                    {nutrition.protein}g ({Math.round((nutrition.protein * 4 / nutrition.calories) * 100)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-red-500 h-3 rounded-full transition-all"
                    style={{ width: `${Math.min((nutrition.protein * 4 / nutrition.calories) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Carbs Bar */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Carbohydrates</span>
                  <span className="text-sm font-semibold text-blue-600">
                    {nutrition.carbs}g ({Math.round((nutrition.carbs * 4 / nutrition.calories) * 100)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all"
                    style={{ width: `${Math.min((nutrition.carbs * 4 / nutrition.calories) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Fat Bar */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Fat</span>
                  <span className="text-sm font-semibold text-yellow-600">
                    {nutrition.fat}g ({Math.round((nutrition.fat * 9 / nutrition.calories) * 100)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-yellow-500 h-3 rounded-full transition-all"
                    style={{ width: `${Math.min((nutrition.fat * 9 / nutrition.calories) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Serving Sizes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Calories by Serving Size</h3>
            <div className="space-y-3">
              {food.servingSizes.map((serving) => {
                const servingCalories = Math.round((nutrition.calories * serving.grams) / 100)
                return (
                  <div key={serving.label} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">{serving.label}</span>
                    <span className="font-semibold text-primary-600">{servingCalories} cal</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Related Foods Section */}
          {relatedFoods.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Related Foods in {category?.name || food.category}
              </h2>
              <p className="text-gray-600 mb-4">
                Explore other foods in the {category?.name || food.category} category:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {relatedFoods.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/calories-in/${related.slug}`}
                    className="group block bg-gray-50 hover:bg-primary-50 rounded-lg p-4 border border-gray-200 hover:border-primary-300 transition-all"
                  >
                    <div className="text-center">
                      <p className="font-medium text-gray-900 group-hover:text-primary-700 text-sm mb-1">
                        {related.name}
                      </p>
                      <p className="text-xs text-gray-500">View Nutrition →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Compare with Similar Foods */}
          {comparisonFoods.length > 0 && (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Compare {food.name} with Similar Foods
              </h2>
              <p className="text-gray-700 mb-4">
                See how {food.name} stacks up against other foods in nutritional value:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {comparisonFoods.map((compareFood) => (
                  <Link
                    key={compareFood.slug}
                    href={`/compare/${food.slug}-vs-${compareFood.slug}`}
                    className="flex items-center justify-between bg-white hover:bg-blue-50 rounded-lg p-4 border border-blue-200 hover:border-blue-400 transition-all group"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">⚖️</span>
                      <span className="font-medium text-gray-900 group-hover:text-blue-700">
                        {food.name} vs {compareFood.name}
                      </span>
                    </div>
                    <span className="text-blue-600 group-hover:text-blue-700 font-medium">
                      Compare →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* About Section */}
          <div className="prose max-w-none">
            <h2>About {food.name} Nutrition</h2>
            <p>
              {foodContent.description}
            </p>
            <p>
              With {nutrition.calories} calories per 100 grams, {food.name} provides {nutrition.protein}g of protein,
              {nutrition.carbs}g of carbohydrates, and {nutrition.fat}g of fat.
            </p>

            <h3>Macronutrient Breakdown</h3>
            <ul>
              <li><strong>Protein:</strong> {nutrition.protein}g - {Math.round((nutrition.protein * 4 / nutrition.calories) * 100)}% of calories</li>
              <li><strong>Carbohydrates:</strong> {nutrition.carbs}g - {Math.round((nutrition.carbs * 4 / nutrition.calories) * 100)}% of calories</li>
              <li><strong>Fat:</strong> {nutrition.fat}g - {Math.round((nutrition.fat * 9 / nutrition.calories) * 100)}% of calories</li>
            </ul>

            <h3>Health Benefits of {food.name}</h3>
            <ul>
              {foodContent.healthBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <h3>How to Eat {food.name}</h3>
            <p>{foodContent.howToEat}</p>

            <h3>Selection and Storage</h3>
            <p>{foodContent.storageAndSelection}</p>

            <h3>Dietary Considerations</h3>
            <p>{foodContent.dietaryConsiderations}</p>
          </div>

          {/* FAQ Section - Uses custom FAQs when available, falls back to generated */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About {food.name}
            </h2>
            <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {foodContent.faqs && foodContent.faqs.length > 0 ? (
                // Render custom FAQs for high-priority pages
                foodContent.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 p-6"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2" itemProp="name">
                      {faq.question}
                    </h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-700" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                // Default FAQs for pages without custom content
                <>
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      How many calories are in {food.name}?
                    </h3>
                    <p className="text-gray-700">
                      {food.name} contains {nutrition.calories} calories per 100 grams. A typical serving
                      may contain more or fewer calories depending on the portion size. For example,
                      a {food.servingSizes[2]?.label || 'standard serving'} contains approximately{' '}
                      {Math.round((nutrition.calories * (food.servingSizes[2]?.grams || 85)) / 100)} calories.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Is {food.name} good for weight loss?
                    </h3>
                    <p className="text-gray-700">
                      {nutrition.calories < 100
                        ? `Yes, ${food.name} is relatively low in calories with only ${nutrition.calories} calories per 100g, making it a good choice for weight loss diets when consumed as part of a balanced eating plan.`
                        : nutrition.calories < 200
                        ? `${food.name} has a moderate calorie content of ${nutrition.calories} calories per 100g. It can be part of a weight loss diet when consumed in appropriate portions.`
                        : `${food.name} contains ${nutrition.calories} calories per 100g, which is relatively calorie-dense. While it can be enjoyed as part of a weight loss diet, portion control is important.`
                      }
                      {nutrition.protein > 10 && ` The ${nutrition.protein}g of protein per 100g helps promote satiety and can support weight management.`}
                      {nutrition.fiber > 3 && ` With ${nutrition.fiber}g of fiber per 100g, it also helps keep you feeling full longer.`}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Is {food.name} high in protein?
                    </h3>
                    <p className="text-gray-700">
                      {nutrition.protein >= 20
                        ? `Yes, ${food.name} is an excellent source of protein with ${nutrition.protein}g per 100g. This makes it a great choice for building muscle, supporting recovery after exercise, and maintaining overall health.`
                        : nutrition.protein >= 10
                        ? `${food.name} is a good source of protein with ${nutrition.protein}g per 100g. While not the highest protein food, it contributes meaningfully to daily protein needs.`
                        : `${food.name} contains ${nutrition.protein}g of protein per 100g, which is relatively modest. Consider pairing it with higher-protein foods to meet your protein goals.`
                      }
                    </p>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      What vitamins and nutrients are in {food.name}?
                    </h3>
                    <p className="text-gray-700">
                      {food.name} provides several important nutrients including {nutrition.protein}g of protein,
                      {nutrition.carbs}g of carbohydrates (including {nutrition.fiber}g of fiber and {nutrition.sugar}g of sugar),
                      and {nutrition.fat}g of fat per 100g. It also contains {nutrition.sodium}mg of sodium.
                      The specific vitamin and mineral content varies, but {food.name.toLowerCase()} can contribute
                      to a balanced, nutritious diet.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 border-2 border-primary-200">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Quick Nutrition Facts</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Category</span>
                  <span className="font-semibold text-primary-700">{category?.name || food.category}</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Calories/100g</span>
                  <span className="font-bold text-2xl text-primary-600">{nutrition.calories}</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Protein</span>
                  <span className="font-semibold text-gray-900">{nutrition.protein}g</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Carbs</span>
                  <span className="font-semibold text-gray-900">{nutrition.carbs}g</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Fat</span>
                  <span className="font-semibold text-gray-900">{nutrition.fat}g</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Comparisons */}
          {comparisonFoods.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Quick Comparisons
              </h3>
              <ul className="space-y-2">
                {comparisonFoods.slice(0, 4).map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/compare/${food.slug}-vs-${related.slug}`}
                      className="text-primary-600 hover:text-primary-700 text-sm flex items-center space-x-1"
                    >
                      <span>vs {related.name}</span>
                      <span>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Other comparisons */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Popular Comparisons</h3>
            <ul className="space-y-2">
              {otherFoods.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/compare/${food.slug}-vs-${other.slug}`}
                    className="text-primary-600 hover:text-primary-700 text-sm"
                  >
                    vs {other.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore More Foods */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border-2 border-green-200 p-6">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Explore More Foods</h3>
            <p className="text-sm text-gray-700 mb-4">
              Discover nutrition data for thousands of foods
            </p>
            <Link
              href="/category"
              className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Browse Categories
            </Link>
          </div>

          {/* CTA */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Track Your Nutrition</h3>
            <p className="text-sm text-gray-600 mb-4">
              Monitor your daily intake to reach your health goals
            </p>
            <a
              href="https://www.myfitnesspal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary-600 text-white text-center py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Try MyFitnessPal
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
