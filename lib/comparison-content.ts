/**
 * Rich comparison content for high-priority food comparisons
 * Provides detailed FAQs and insights for better SEO and user value
 */

export interface ComparisonFAQ {
  question: string
  answer: string
}

export interface ComparisonContent {
  summary: string
  healthVerdict: string
  whenToChoose: {
    food1: string[]
    food2: string[]
  }
  faqs: ComparisonFAQ[]
}

// Custom content for high-priority comparison pages
const comparisonContent: Record<string, ComparisonContent> = {
  "french-fries-vs-hot-dog": {
    summary: "Both French fries and hot dogs are classic American comfort foods often enjoyed together, but they have different nutritional profiles. French fries are primarily carbohydrates from potatoes, while hot dogs provide protein but are classified as processed meat with associated health concerns.",
    healthVerdict: "Neither is particularly healthy for regular consumption. French fries (when baked) are the slightly better occasional choice as they're not processed meat. Hot dogs are classified by WHO as a Group 1 carcinogen when consumed regularly. Both should be occasional treats rather than dietary staples.",
    whenToChoose: {
      food1: [
        "When you want a vegetarian option",
        "When baked or air-fried for lower fat content",
        "As an occasional side dish in moderate portions",
        "When you're craving something crispy and salty"
      ],
      food2: [
        "When you need quick protein at a cookout",
        "As an occasional treat at sporting events",
        "When choosing uncured, nitrate-free varieties",
        "In moderation as part of a balanced diet"
      ]
    },
    faqs: [
      {
        question: "Are French fries or hot dogs worse for you?",
        answer: "Hot dogs are generally considered worse for regular consumption because they're processed meat, which the WHO links to increased cancer risk. French fries, while high in fat when deep-fried, are made from whole potatoes. However, both should be occasional treats. Baked fries are a much healthier option than deep-fried."
      },
      {
        question: "Which has more calories, French fries or a hot dog?",
        answer: "A medium serving of French fries (117g) has about 365 calories, while a beef hot dog with bun has about 290 calories. However, French fries are often served in larger portions. Per 100g, French fries have 312 calories vs hot dogs at 290 calories - they're quite similar."
      },
      {
        question: "Can I eat French fries and hot dogs on a diet?",
        answer: "Occasionally, yes - but not as regular foods. For weight loss, choose baked fries over deep-fried (saves 100+ calories), use turkey dogs instead of beef (100 vs 150 calories), skip the bun, and load up on vegetable toppings. Keep portions small and balance with nutritious foods."
      },
      {
        question: "Which is better for protein, fries or hot dogs?",
        answer: "Hot dogs have significantly more protein - about 10g per hot dog vs only 3g per serving of French fries. If you need protein, the hot dog wins. However, you can get protein from healthier sources like grilled chicken, fish, or legumes."
      }
    ]
  },

  "chicken-breast-vs-egg": {
    summary: "Chicken breast and eggs are both excellent protein sources that form the foundation of many healthy diets. Chicken breast is extremely lean with minimal fat, while eggs offer a more complete nutritional package including healthy fats, choline, and vitamin D. Both are versatile, affordable, and widely available.",
    healthVerdict: "Both are healthy protein choices that can be eaten regularly. Chicken breast is better for those limiting fat and calories, while eggs offer more diverse nutrients including choline for brain health. Including both in your diet provides complementary benefits.",
    whenToChoose: {
      food1: [
        "When you need maximum protein with minimal calories",
        "For muscle building and athletic recovery",
        "When following a low-fat diet",
        "For meal prep that stores well"
      ],
      food2: [
        "When you need a quick, complete meal",
        "For breakfast or when variety is needed",
        "When you want brain-boosting choline",
        "As an affordable protein on a budget"
      ]
    },
    faqs: [
      {
        question: "Is chicken breast or eggs better for muscle building?",
        answer: "Chicken breast is generally better for pure muscle building due to higher protein (31g vs 13g per 100g) and lower calories. However, eggs contain all essential amino acids, healthy fats that support hormone production important for muscle growth, and are easier to digest. Many athletes include both - chicken for high-protein meals and eggs for breakfast or snacks."
      },
      {
        question: "Which has more protein, chicken breast or eggs?",
        answer: "Chicken breast has significantly more protein per 100g - about 31g compared to 13g in eggs. One chicken breast (170g) provides about 53g of protein, while 3 large eggs provide about 18g. For maximum protein intake, chicken breast is the clear winner."
      },
      {
        question: "Are eggs or chicken breast better for weight loss?",
        answer: "Both support weight loss, but chicken breast is slightly better due to fewer calories per gram of protein (165 cal vs 155 cal for equivalent protein). However, eggs are more satiating due to their fat content and may help you eat less overall. The best choice depends on your meal timing and preferences."
      },
      {
        question: "Can I eat chicken breast and eggs every day?",
        answer: "Yes, both can be eaten daily as part of a healthy diet. Chicken breast is very lean and can be a daily protein source. Eggs, despite cholesterol concerns, are now considered safe for most people to eat daily (1-3 eggs). Varying your protein sources ensures diverse nutrient intake."
      },
      {
        question: "Which is cheaper, chicken breast or eggs?",
        answer: "Eggs are typically cheaper per gram of protein. A dozen eggs costs about $3-5 and provides 72g of protein. A pound of chicken breast costs $3-6 and provides about 100g of protein. Eggs win on price per serving, while chicken wins on protein density."
      }
    ]
  },

  "banana-vs-blueberry": {
    summary: "Bananas and blueberries are both popular healthy fruits with distinct nutritional profiles. Bananas excel in potassium and provide quick energy from natural sugars, while blueberries are antioxidant powerhouses with fewer calories and lower sugar content. Both make excellent additions to a healthy diet.",
    healthVerdict: "Blueberries edge out bananas for overall health benefits due to their exceptional antioxidant content and lower sugar load. However, bananas are better for athletic performance and energy. The ideal approach is to include both - bananas for energy and blueberries for antioxidants.",
    whenToChoose: {
      food1: [
        "Before or after workouts for energy",
        "When you need quick, portable nutrition",
        "For potassium to support heart health",
        "In smoothies for natural sweetness and thickness"
      ],
      food2: [
        "When maximizing antioxidant intake",
        "For lower sugar and calorie fruit options",
        "To support brain health and memory",
        "When managing blood sugar levels"
      ]
    },
    faqs: [
      {
        question: "Are blueberries healthier than bananas?",
        answer: "Blueberries are often considered healthier due to their exceptional antioxidant content (especially anthocyanins), lower sugar (10g vs 12g per 100g), and fewer calories (57 vs 89 per 100g). However, bananas offer superior potassium and are better for energy. Both are healthy - blueberries for antioxidants, bananas for energy."
      },
      {
        question: "Which fruit is better for weight loss, bananas or blueberries?",
        answer: "Blueberries are better for weight loss - they have 57 calories per 100g vs banana's 89 calories, plus more fiber per calorie. You can eat more blueberries for fewer calories. However, a banana can be a satisfying snack that prevents overeating later. Both can fit in a weight loss diet."
      },
      {
        question: "Which has more sugar, banana or blueberries?",
        answer: "Bananas have slightly more sugar - about 12g per 100g compared to blueberries' 10g. A medium banana has about 14g of sugar, while a cup of blueberries has about 15g. Per serving, they're similar, but bananas are more calorie-dense due to their carbohydrate content."
      },
      {
        question: "Can I eat bananas and blueberries together?",
        answer: "Absolutely! They make an excellent combination - try them in smoothies, on oatmeal, or in a fruit salad. You get the potassium and quick energy from bananas plus the antioxidants and fiber from blueberries. This pairing is popular in post-workout nutrition and healthy breakfasts."
      },
      {
        question: "Which is better for diabetics, bananas or blueberries?",
        answer: "Blueberries are generally better for diabetics due to lower glycemic index (53 vs 51 for bananas, but smaller portions matter) and research showing they may improve insulin sensitivity. Bananas, especially ripe ones, can spike blood sugar more. Choose less ripe bananas and pair with protein if eating them."
      }
    ]
  },

  "apple-vs-avocado": {
    summary: "Apples and avocados are both healthy but serve very different nutritional purposes. Apples are low-calorie, high-fiber fruits perfect for snacking, while avocados are nutrient-dense with healthy fats essential for nutrient absorption. They complement each other rather than compete.",
    healthVerdict: "Both are excellent for health but in different ways. Avocados win for nutrient density and healthy fats that support heart and brain health. Apples win for low-calorie snacking and fiber. Include both in your diet - avocados for meals, apples for snacks.",
    whenToChoose: {
      food1: [
        "When you want a low-calorie, portable snack",
        "For fiber and digestive health",
        "When managing calorie intake",
        "For a naturally sweet treat without added sugar"
      ],
      food2: [
        "When you need healthy fats for satiety",
        "To help absorb fat-soluble vitamins from other foods",
        "For heart health and cholesterol management",
        "As a creamy addition to meals or smoothies"
      ]
    },
    faqs: [
      {
        question: "Is avocado or apple better for weight loss?",
        answer: "Apples are better for calorie-controlled weight loss at just 52 calories per 100g vs avocado's 160 calories. However, avocados' healthy fats increase satiety and may prevent overeating. Strategy matters: apples work for low-calorie snacking, while small amounts of avocado make meals more satisfying."
      },
      {
        question: "Which has more nutrients, apples or avocados?",
        answer: "Avocados are more nutrient-dense, containing 20+ vitamins and minerals including potassium, vitamin E, vitamin K, and B vitamins, plus heart-healthy monounsaturated fats. Apples offer good fiber, vitamin C, and antioxidants but less variety. Per calorie, they're similar; per serving, avocados deliver more diverse nutrition."
      },
      {
        question: "Are apples or avocados better for heart health?",
        answer: "Avocados are better for heart health. Their monounsaturated fats can lower LDL cholesterol and raise HDL cholesterol. They also contain potassium and fiber that support cardiovascular health. Apples help through fiber and antioxidants, but avocados have stronger evidence for heart benefits."
      },
      {
        question: "Can I eat apples and avocados every day?",
        answer: "Yes, both can be eaten daily. An apple a day provides fiber and antioxidants with minimal calories. Half an avocado daily provides healthy fats without excessive calories. Together, they offer complementary nutrition - fiber and antioxidants from apples, healthy fats from avocados."
      },
      {
        question: "Which is better for energy, apples or avocados?",
        answer: "It depends on the type of energy you need. Apples provide quick energy from natural sugars (great for a fast snack or before exercise). Avocados provide sustained energy from healthy fats (better for long-lasting fullness). For immediate energy, choose apples; for lasting satiety, choose avocados."
      }
    ]
  },

  "yogurt-vs-cheese": {
    summary: "Yogurt and cheese are both dairy products that provide calcium and protein, but they differ significantly in nutritional profiles and uses. Yogurt offers probiotics and tends to be lower in fat and calories, while cheese is more calorie-dense with concentrated protein and calcium. Both can be part of a healthy diet.",
    healthVerdict: "Plain Greek yogurt is generally the healthier choice due to probiotics, lower calories, and less saturated fat. However, cheese in moderation provides excellent calcium and protein. Choose yogurt for daily consumption and cheese as an occasional flavor enhancer or protein source.",
    whenToChoose: {
      food1: [
        "For gut health and probiotics benefits",
        "As a high-protein, low-calorie snack",
        "When watching calorie and fat intake",
        "For breakfast or smoothie bases"
      ],
      food2: [
        "When you need concentrated calcium",
        "As a satisfying flavor enhancer for dishes",
        "For keto or low-carb diets",
        "When you need shelf-stable protein"
      ]
    },
    faqs: [
      {
        question: "Is yogurt healthier than cheese?",
        answer: "Generally yes - plain Greek yogurt has fewer calories (100 vs 400 per 100g), more protein relative to calories, probiotics for gut health, and less saturated fat. However, cheese provides more concentrated calcium and can be part of a healthy diet in moderation. Choose plain yogurt over flavored, and hard cheeses over processed."
      },
      {
        question: "Which has more protein, yogurt or cheese?",
        answer: "Per 100g, cheese has more total protein (25g vs 10g for regular yogurt). However, Greek yogurt has about 17g per 100g and far fewer calories. Per calorie, Greek yogurt delivers more protein. If you're watching calories, Greek yogurt wins; if you need calorie-dense protein, cheese works better."
      },
      {
        question: "Can I substitute yogurt for cheese?",
        answer: "In some recipes, yes. Greek yogurt can replace sour cream, cream cheese (when strained), or ricotta in dips and sauces. It works in baking and as a topping. However, it can't replicate melted cheese or provide the same flavor in dishes where cheese is the star ingredient."
      },
      {
        question: "Which is better for bone health, yogurt or cheese?",
        answer: "Both support bone health through calcium, but cheese has more per serving (200mg per oz vs 150mg per cup of yogurt). However, yogurt's vitamin D (if fortified) and probiotics may improve calcium absorption. Both contribute to bone health - variety is ideal."
      },
      {
        question: "Which is better for weight loss, yogurt or cheese?",
        answer: "Plain Greek yogurt is much better for weight loss - it has about 100 calories per 100g vs cheese at 400 calories. It's also more filling due to higher protein-to-calorie ratio. Use cheese sparingly as a flavor enhancer, but choose yogurt as your main dairy protein source when losing weight."
      }
    ]
  },

  "orange-juice-vs-soda": {
    summary: "Orange juice and soda both contain significant sugar, but they differ dramatically in nutritional value. Orange juice provides vitamin C, potassium, and other nutrients, while soda offers only empty calories with no nutritional benefit. However, whole oranges are healthier than either beverage.",
    healthVerdict: "Orange juice is significantly healthier than soda due to its vitamins, minerals, and antioxidants. However, both are high in sugar and should be consumed in moderation. The best choice is to eat whole oranges for fiber and drink water instead of either sweetened beverage.",
    whenToChoose: {
      food1: [
        "When you need vitamin C (illness, immune support)",
        "As an occasional breakfast beverage in small portions",
        "For potassium and natural nutrients",
        "When choosing between OJ and soda (OJ wins)"
      ],
      food2: [
        "Never for nutrition - only as an occasional treat",
        "When you want caffeine (cola varieties)",
        "Zero-sugar versions for flavor without calories",
        "Understand this is a treat, not a food"
      ]
    },
    faqs: [
      {
        question: "Is orange juice healthier than soda?",
        answer: "Yes, orange juice is healthier because it provides vitamin C (over 100% daily value per cup), potassium, folate, and antioxidants. Soda provides zero nutrients - just sugar or artificial sweeteners. However, both have similar sugar content (~25g per cup), so neither should be consumed in large amounts."
      },
      {
        question: "Does orange juice have as much sugar as soda?",
        answer: "Yes, they're surprisingly similar. An 8oz glass of orange juice has about 21g of sugar, while the same amount of Coca-Cola has 26g. The difference is that OJ's sugar comes with vitamins and minerals, while soda's sugar is nutritionally empty. Both should be consumed in moderation."
      },
      {
        question: "Is it OK to drink orange juice every day?",
        answer: "A small glass (4-6oz) of 100% orange juice daily can be part of a healthy diet, providing vitamin C and potassium. However, the sugar adds up - 8oz has 112 calories and 21g sugar. Better choice: eat a whole orange (fewer calories, more fiber) and drink water. Limit juice to occasional consumption."
      },
      {
        question: "Why is orange juice considered unhealthy if it's natural?",
        answer: "Orange juice isn't 'unhealthy' but has limitations: it's high in sugar without the fiber of whole fruit (fiber slows sugar absorption), easy to overconsume (one glass = 2-3 oranges worth of sugar), and can spike blood sugar. It's not as bad as soda nutritionally, but whole fruit is always the better choice."
      },
      {
        question: "What should I drink instead of orange juice or soda?",
        answer: "Water is the best choice - zero calories and essential for health. For flavor, try: sparkling water with citrus slices, unsweetened tea, water with cucumber or berries, or diluted juice (half juice, half water). For vitamin C, eat whole oranges or other citrus fruits instead of drinking juice."
      }
    ]
  },

  "banana-vs-grape": {
    summary: "Bananas and grapes are both popular fruits but differ significantly in how they're consumed and their nutritional profiles. Bananas are filling, potassium-rich energy fruits, while grapes are lighter, hydrating, and rich in antioxidants. Both make healthy snack choices.",
    healthVerdict: "Both are healthy fruits with different strengths. Bananas are better for sustained energy and potassium, while grapes (especially red/purple) offer superior antioxidants and are lower in calories. Include both for variety - bananas for energy, grapes for antioxidants and hydration.",
    whenToChoose: {
      food1: [
        "Before or after exercise for energy",
        "When you need a filling snack",
        "For potassium and heart health",
        "To add thickness to smoothies"
      ],
      food2: [
        "For a light, refreshing snack",
        "When you want antioxidant-rich foods",
        "For lower calorie fruit options",
        "Frozen as a healthy treat"
      ]
    },
    faqs: [
      {
        question: "Are bananas or grapes better for you?",
        answer: "Both are healthy with different benefits. Bananas excel in potassium (358mg vs 191mg per 100g) and provide more sustained energy. Grapes (especially red/purple) are superior in antioxidants like resveratrol and have fewer calories (69 vs 89 per 100g). Choose based on your needs - energy vs antioxidants."
      },
      {
        question: "Which has more sugar, bananas or grapes?",
        answer: "Grapes actually have more sugar per 100g - about 16g compared to bananas' 12g. However, bananas have more total carbohydrates and calories. Per typical serving (1 banana vs 1 cup grapes), they're similar in sugar content. Both have natural sugars with fiber and nutrients."
      },
      {
        question: "Are grapes or bananas better for weight loss?",
        answer: "Grapes are slightly better for calorie-controlled weight loss at 69 calories per 100g vs bananas' 89 calories. You can eat more grapes for fewer calories. However, bananas are more filling due to their fiber and resistant starch. Both can fit in a weight loss diet - grapes for volume eating, bananas for satiety."
      },
      {
        question: "Which fruit is better for athletes, bananas or grapes?",
        answer: "Bananas are better for athletic performance. They're a concentrated source of easily digestible carbohydrates, potassium for muscle function, and natural sugars for quick energy. Grapes are lighter and more hydrating but less effective as fuel. This is why bananas are the classic sports snack."
      },
      {
        question: "Can I eat bananas and grapes together?",
        answer: "Yes! They make a great fruit combination. Together you get bananas' potassium and energy plus grapes' antioxidants and hydration. They're delicious in fruit salads, smoothies, or as a mixed snack. The combination provides diverse nutrients and flavors."
      }
    ]
  },

  "rice-vs-brown-rice": {
    summary: "White rice and brown rice are the same grain, but brown rice retains its bran and germ layers that are removed in white rice processing. This difference affects their fiber content, glycemic impact, and nutrient density. Brown rice is more nutritious, but white rice has its uses.",
    healthVerdict: "Brown rice is the healthier choice due to more fiber, vitamins, minerals, and lower glycemic impact. However, white rice isn't 'bad' - it's easily digestible, often enriched with nutrients, and can be part of a healthy diet. Choose brown rice when possible, especially for blood sugar management.",
    whenToChoose: {
      food1: [
        "When you need easily digestible carbs",
        "For recipes requiring stickier texture",
        "During digestive recovery (bland diet)",
        "When cooking time is limited"
      ],
      food2: [
        "For maximum nutrition and fiber",
        "When managing blood sugar levels",
        "For sustained energy release",
        "When you want more filling meals"
      ]
    },
    faqs: [
      {
        question: "Is brown rice really healthier than white rice?",
        answer: "Yes, brown rice is more nutritious. It has 3x more fiber (1.8g vs 0.4g per 100g), more magnesium, phosphorus, and B vitamins. The bran layer also contains antioxidants. However, white rice is often enriched with iron and folic acid, partially closing the nutrient gap. Brown rice is better, but white rice isn't unhealthy."
      },
      {
        question: "How many more calories does brown rice have than white rice?",
        answer: "They're almost identical - brown rice has 112 calories per 100g (cooked) vs white rice at 130 calories. The difference is negligible. Brown rice feels more filling due to its fiber content, so you may eat less of it, effectively consuming fewer calories."
      },
      {
        question: "Is brown rice better for weight loss than white rice?",
        answer: "Yes, brown rice is better for weight loss because its higher fiber content (3x more) promotes fullness and slows digestion. Studies show people feel more satisfied after brown rice meals. It also has a lower glycemic index, preventing blood sugar spikes that trigger hunger."
      },
      {
        question: "Why do bodybuilders eat white rice instead of brown?",
        answer: "Some bodybuilders prefer white rice around workouts because it's faster-digesting (higher glycemic index), quickly replenishing muscle glycogen. It's also easier on the stomach before training. However, many athletes eat brown rice at other meals for sustained energy. Both can fit in an athletic diet."
      },
      {
        question: "Does brown rice have arsenic?",
        answer: "Brown rice can have more arsenic than white rice because arsenic concentrates in the bran layer. To minimize risk: rinse rice before cooking, use excess water (6:1 ratio) and drain, vary your grains (try quinoa, oats, bulgur), and choose rice from regions with lower arsenic (California, India, Pakistan vs Southern US)."
      }
    ]
  }
}

// Default content for comparisons without custom content
const defaultContent: ComparisonContent = {
  summary: "Both foods offer distinct nutritional profiles and can be part of a healthy diet. Understanding their differences helps you make informed choices based on your health goals.",
  healthVerdict: "The healthier choice depends on your individual needs, dietary goals, and how each food fits into your overall eating pattern. Consider calories, macronutrients, and micronutrients when deciding.",
  whenToChoose: {
    food1: [
      "Based on your specific nutritional needs",
      "When it better fits your calorie goals",
      "For meals where its profile matches your requirements"
    ],
    food2: [
      "Based on your specific nutritional needs",
      "When it better fits your calorie goals",
      "For meals where its profile matches your requirements"
    ]
  },
  faqs: []
}

/**
 * Get rich content for a food comparison
 * Uses food slugs in alphabetical order for consistency
 */
export function getComparisonContent(food1Slug: string, food2Slug: string): ComparisonContent {
  // Normalize to alphabetical order
  const [first, second] = [food1Slug, food2Slug].sort()
  const key = `${first}-vs-${second}`

  // Check both possible orders
  const content = comparisonContent[key] || comparisonContent[`${food1Slug}-vs-${food2Slug}`] || comparisonContent[`${food2Slug}-vs-${food1Slug}`]

  return content || defaultContent
}

/**
 * Check if a comparison has custom content
 */
export function hasCustomComparisonContent(food1Slug: string, food2Slug: string): boolean {
  const [first, second] = [food1Slug, food2Slug].sort()
  const key = `${first}-vs-${second}`

  return !!(comparisonContent[key] || comparisonContent[`${food1Slug}-vs-${food2Slug}`] || comparisonContent[`${food2Slug}-vs-${food1Slug}`])
}

/**
 * Get list of comparisons with custom content
 */
export function getComparisonsWithContent(): string[] {
  return Object.keys(comparisonContent)
}
