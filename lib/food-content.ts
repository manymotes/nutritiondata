/**
 * Rich food content for nutrition education and SEO
 * Provides detailed information about popular foods
 */

export interface FAQItem {
  question: string
  answer: string
}

export interface FoodEducationContent {
  description: string
  healthBenefits: string[]
  howToEat: string
  storageAndSelection: string
  dietaryConsiderations: string
  faqs?: FAQItem[]  // Custom FAQs for high-priority pages
}

// Detailed content for popular foods
const foodContent: Record<string, FoodEducationContent> = {
  "banana": {
    description: "Bananas are one of the most popular and widely consumed fruits in the world. Native to Southeast Asia, this tropical fruit is now grown in warm climates globally. Bananas are an excellent source of potassium, vitamin B6, and natural energy, making them a favorite among athletes and health-conscious individuals.",
    healthBenefits: [
      "Rich in potassium which supports heart health and helps maintain healthy blood pressure levels",
      "Contains vitamin B6 essential for brain development and function",
      "Provides quick, natural energy from natural sugars and carbohydrates",
      "Contains pectin and resistant starch that may help moderate blood sugar levels after meals",
      "High in antioxidants including dopamine and catechins",
      "May improve digestive health due to fiber content and prebiotic properties"
    ],
    howToEat: "Bananas are incredibly versatile and can be enjoyed fresh as a snack, sliced over cereal or oatmeal, blended into smoothies, or used in baking for natural sweetness. Frozen bananas make an excellent base for dairy-free ice cream. For best flavor, consume when the peel has yellow color with small brown spots, indicating peak ripeness and sweetness.",
    storageAndSelection: "Select bananas based on your timeline for eating them. Green bananas will ripen over several days at room temperature. Once ripe, they can be refrigerated to slow further ripening - the peel may darken but the fruit inside remains fresh for several more days. Overripe bananas are perfect for baking or freezing for smoothies.",
    dietaryConsiderations: "Bananas are naturally fat-free, cholesterol-free, and sodium-free. They're suitable for most dietary patterns including vegan, vegetarian, and gluten-free diets. Those monitoring carbohydrate intake should note that bananas are higher in natural sugars than many other fruits, with ripeness affecting glycemic impact."
  },

  "apple": {
    description: "Apples are among the most cultivated and widely consumed fruits worldwide, with thousands of varieties ranging from sweet to tart. Originating in Central Asia, apples have been grown for thousands of years and are prized for their crisp texture, versatility, and impressive nutritional profile including fiber and vitamin C.",
    healthBenefits: [
      "Excellent source of dietary fiber, particularly pectin which supports digestive health",
      "Contains quercetin, an antioxidant that may support brain health",
      "May help with weight management due to high water and fiber content promoting satiety",
      "Polyphenols in apple skin may help protect against oxidative stress",
      "Regular consumption associated with improved heart health markers",
      "Low glycemic index makes them a good choice for blood sugar management"
    ],
    howToEat: "Apples can be enjoyed raw as a healthy snack, sliced with nut butter for added protein, baked into desserts, cooked into applesauce, or pressed for fresh juice or cider. Eating the skin provides the most nutritional benefit as it contains the majority of the fiber and antioxidants. Different varieties suit different purposes - Granny Smith for baking, Honeycrisp for fresh eating.",
    storageAndSelection: "Choose firm apples without bruises or soft spots. Apples continue to ripen after picking, so store them in the refrigerator to maintain freshness for several weeks. Keep apples separate from other produce as they release ethylene gas which can cause nearby fruits and vegetables to ripen faster.",
    dietaryConsiderations: "Apples are naturally low in calories and fat-free, making them excellent for weight management. They're suitable for vegan, vegetarian, paleo, and gluten-free diets. The fiber content makes them more filling than apple juice, which lacks fiber and concentrates natural sugars."
  },

  "chicken-breast": {
    description: "Chicken breast is one of the most popular lean protein sources worldwide. This versatile cut comes from the pectoral muscles of the chicken and is prized for its mild flavor, tender texture, and exceptional protein content. It's a staple in fitness-focused diets and cuisines around the globe.",
    healthBenefits: [
      "Excellent source of complete protein containing all essential amino acids",
      "Very low in fat when prepared without skin, supporting lean muscle maintenance",
      "Rich in B vitamins, especially niacin (B3) which supports energy metabolism",
      "Good source of selenium, an important mineral for thyroid function and immunity",
      "Contains phosphorus for bone health and cell repair",
      "Provides choline which supports brain function and liver health"
    ],
    howToEat: "Chicken breast can be grilled, baked, poached, sauteed, or slow-cooked. To prevent dryness, avoid overcooking - internal temperature should reach 165°F (74°C). Marinating before cooking adds flavor and helps tenderize the meat. Slice against the grain for maximum tenderness. Pairs well with virtually any seasoning profile from Mediterranean herbs to Asian-inspired sauces.",
    storageAndSelection: "Choose chicken breast that appears pink and moist without any gray coloring or unpleasant odor. Fresh chicken should be used within 1-2 days of purchase or frozen for up to 9 months. Always store raw chicken on the lowest refrigerator shelf to prevent cross-contamination. Thaw frozen chicken in the refrigerator, not at room temperature.",
    dietaryConsiderations: "Chicken breast is an excellent protein choice for low-fat, low-carb, and high-protein diets including keto and paleo. It's naturally gluten-free. Those watching sodium intake should choose fresh over processed or pre-seasoned varieties. Organic and free-range options may have slightly different nutritional profiles."
  },

  "rice": {
    description: "Rice is a staple food for more than half of the world's population, particularly in Asia. This cereal grain has been cultivated for thousands of years and comes in many varieties including white, brown, jasmine, basmati, and wild rice. It serves as the foundation for countless dishes across diverse culinary traditions.",
    healthBenefits: [
      "Provides quick energy from easily digestible carbohydrates",
      "Brown rice is a good source of fiber, B vitamins, and minerals",
      "Naturally gluten-free, making it safe for those with celiac disease",
      "Contains manganese important for bone health and metabolism",
      "White rice is easy to digest and often recommended during digestive recovery",
      "Enriched varieties provide added iron, folic acid, and B vitamins"
    ],
    howToEat: "Rice can be steamed, boiled, baked, or cooked in a rice cooker for consistent results. The water-to-rice ratio varies by type: typically 2:1 for white rice and 2.5:1 for brown rice. Rinse rice before cooking to remove excess starch for fluffier results. Rice serves as a base for stir-fries, curries, grain bowls, and can be used in soups, salads, and even desserts like rice pudding.",
    storageAndSelection: "Uncooked white rice can be stored in a cool, dry place for years. Brown rice has a shorter shelf life (6 months) due to its oil-containing bran layer and should be refrigerated for longer storage. Cooked rice should be refrigerated within an hour of cooking and consumed within 4-6 days. Reheat thoroughly to 165°F.",
    dietaryConsiderations: "Rice is naturally vegan, vegetarian, and gluten-free. Brown rice offers more fiber and nutrients but takes longer to cook. Those managing blood sugar should consider brown or wild rice which have lower glycemic indices than white rice. Portion control is important as rice is calorie-dense.",
    faqs: [
      {
        question: "How many calories are in a cup of rice?",
        answer: "One cup of cooked white rice contains approximately 205 calories. Brown rice has about 215 calories per cup. Per 100g, cooked white rice has 130 calories and brown rice has 112 calories. Uncooked rice roughly triples in volume when cooked."
      },
      {
        question: "Is rice good for weight loss?",
        answer: "Rice can be part of a weight loss diet when eaten in appropriate portions. Brown rice is preferable due to higher fiber content (3.5g vs 0.6g per cup) which promotes satiety. White rice has a higher glycemic index which may trigger hunger sooner. Control portions to about 1/2-1 cup cooked per meal."
      },
      {
        question: "Is white rice or brown rice healthier?",
        answer: "Brown rice is generally healthier as it retains the bran and germ, providing more fiber (3.5g vs 0.6g per cup), magnesium, and B vitamins. However, white rice is easier to digest and often enriched with nutrients. Brown rice has a lower glycemic index, making it better for blood sugar control."
      },
      {
        question: "Is rice gluten-free?",
        answer: "Yes, all varieties of rice are naturally gluten-free, making rice safe for people with celiac disease or gluten sensitivity. This includes white, brown, jasmine, basmati, and wild rice. However, always check flavored or seasoned rice products for added gluten-containing ingredients."
      },
      {
        question: "How long does cooked rice last in the fridge?",
        answer: "Cooked rice should be refrigerated within an hour of cooking and can be stored for 4-6 days in an airtight container. Reheat thoroughly to 165°F before eating. Rice left at room temperature too long can develop harmful bacteria. When in doubt, throw it out."
      }
    ]
  },

  "egg": {
    description: "Eggs are one of nature's most nutritionally complete foods, containing high-quality protein and a wide array of essential nutrients. Once controversial due to cholesterol concerns, eggs are now recognized as a nutrient-dense food that can be part of a healthy diet. They're incredibly versatile and economical.",
    healthBenefits: [
      "Contains all nine essential amino acids, making it a complete protein source",
      "Excellent source of choline, crucial for brain function and development",
      "Rich in vitamin D, important for bone health and immune function",
      "Contains lutein and zeaxanthin which support eye health",
      "B12 content supports nerve function and red blood cell formation",
      "High satiety factor helps with appetite control and weight management"
    ],
    howToEat: "Eggs can be prepared countless ways: scrambled, fried, poached, boiled, baked, or made into omelets and frittatas. Cooking method affects nutritional value - poaching and boiling add no extra fat. For food safety, cook eggs until both white and yolk are firm, or to an internal temperature of 160°F for dishes containing eggs. Eggs are essential in baking for structure and leavening.",
    storageAndSelection: "Store eggs in their original carton in the main body of the refrigerator, not the door, where temperature fluctuates. Fresh eggs can be stored for 3-5 weeks past the pack date. To test freshness, place in water - fresh eggs sink and lie flat, older eggs stand upright, and bad eggs float. Check shells for cracks before purchasing.",
    dietaryConsiderations: "Eggs are naturally low-carb and suitable for keto, paleo, and gluten-free diets. Current dietary guidelines no longer strictly limit dietary cholesterol for most healthy adults. Those with specific health conditions should consult their healthcare provider about egg consumption. Free-range and omega-3 enriched eggs offer additional nutritional benefits."
  },

  "avocado": {
    description: "Avocados are unique fruits known for their creamy texture and rich, buttery flavor. Native to Central America, they're technically classified as berries and are prized for their healthy monounsaturated fats. Often called a superfood, avocados have become increasingly popular for their nutritional density and versatility.",
    healthBenefits: [
      "High in heart-healthy monounsaturated fats that may help reduce bad cholesterol",
      "Excellent source of potassium, even more than bananas, supporting heart health",
      "Contains nearly 20 vitamins and minerals including folate, vitamin K, and vitamin E",
      "Rich in fiber supporting digestive health and blood sugar control",
      "Healthy fats help absorb fat-soluble vitamins from other foods",
      "Contains oleic acid which has anti-inflammatory properties"
    ],
    howToEat: "Avocados can be enjoyed in countless ways: mashed into guacamole, sliced on toast, blended into smoothies, used as a mayo substitute, added to salads, or eaten straight with a sprinkle of salt. To prevent browning, squeeze lemon or lime juice on cut surfaces. A ripe avocado should yield slightly to gentle pressure. To speed ripening, place in a paper bag with a banana.",
    storageAndSelection: "Choose avocados based on when you plan to eat them. Firm avocados will ripen in 4-5 days at room temperature. Once ripe (yields to gentle pressure), refrigerate to slow ripening for up to 3 days. Store cut avocado with the pit, covered tightly with plastic wrap, refrigerated. The darkening on exposed flesh is harmless oxidation.",
    dietaryConsiderations: "Avocados are suitable for vegan, vegetarian, keto, and paleo diets. While high in calories from fat, these are predominantly healthy fats. The high fiber content helps with satiety. Those following low-fat diets may want to moderate portions, but the nutritional benefits often outweigh calorie concerns."
  },

  "salmon": {
    description: "Salmon is one of the most nutritious fish available, prized for its rich omega-3 fatty acid content and excellent protein. This cold-water fish is found in both Atlantic and Pacific varieties, with wild-caught salmon typically having a more robust flavor. It's a cornerstone of the Mediterranean and Nordic diets.",
    healthBenefits: [
      "Exceptional source of omega-3 fatty acids EPA and DHA for heart and brain health",
      "High-quality complete protein supporting muscle maintenance and repair",
      "One of the few natural food sources of vitamin D",
      "Contains astaxanthin, a powerful antioxidant giving salmon its pink color",
      "B vitamins support energy metabolism and nervous system function",
      "Selenium content supports thyroid health and immune function"
    ],
    howToEat: "Salmon can be baked, grilled, pan-seared, poached, or smoked. Cook to an internal temperature of 145°F, though many prefer it slightly less done for moistness. The skin becomes crispy when pan-seared and contains additional omega-3s. Raw salmon is enjoyed in sushi and sashimi (ensure it's sushi-grade). Canned salmon is equally nutritious and more economical.",
    storageAndSelection: "Fresh salmon should smell like the ocean, not fishy, with firm, moist flesh that springs back when pressed. Use fresh salmon within 1-2 days of purchase. Frozen salmon maintains quality for 2-3 months. Thaw in the refrigerator overnight. Wild salmon typically has a deeper color and more intense flavor than farmed.",
    dietaryConsiderations: "Salmon fits well in Mediterranean, paleo, keto, and pescatarian diets. It's naturally gluten-free. Mercury content is relatively low compared to larger fish, making it safe for regular consumption. Pregnant women can safely enjoy 2-3 servings per week. Those with fish allergies should avoid salmon."
  },

  "broccoli": {
    description: "Broccoli is a nutrient-dense cruciferous vegetable belonging to the cabbage family. This green vegetable, with its tree-like appearance, originated in Italy and has become one of the most popular vegetables worldwide. It's celebrated for its impressive concentration of vitamins, minerals, and disease-fighting compounds.",
    healthBenefits: [
      "Exceptionally high in vitamin C, supporting immune function and skin health",
      "Rich in vitamin K essential for blood clotting and bone health",
      "Contains sulforaphane, a compound studied for its potential cancer-fighting properties",
      "High fiber content supports digestive health and weight management",
      "Good source of folate, important for cell division and DNA synthesis",
      "Contains potent antioxidants that help protect cells from damage"
    ],
    howToEat: "Broccoli can be eaten raw with dips, steamed, roasted, stir-fried, or added to soups and casseroles. Steaming for 3-4 minutes preserves the most nutrients while making it tender. Roasting at high heat (425°F) brings out natural sweetness and creates crispy edges. Don't discard the stems - they're equally nutritious when peeled and sliced. Pair with lemon juice or cheese for enhanced flavor.",
    storageAndSelection: "Choose broccoli with tight, dark green florets without yellowing. Stems should be firm, not rubbery. Store unwashed in the refrigerator crisper for up to 5 days. Wash just before using. Broccoli freezes well - blanch for 3 minutes, then freeze for up to 12 months. Pre-cut broccoli has a shorter shelf life.",
    dietaryConsiderations: "Broccoli is extremely low in calories and naturally vegan, gluten-free, and keto-friendly. It's one of the most nutrient-dense foods per calorie. Those taking blood thinners should maintain consistent intake due to vitamin K content. Raw broccoli may cause digestive discomfort for some people; cooking improves digestibility."
  },

  "oatmeal": {
    description: "Oatmeal is a whole grain cereal made from oats that have been processed into various forms including rolled oats, steel-cut oats, and instant oats. Oats have been cultivated for over 2,000 years and are renowned for their heart-healthy properties and sustained energy release.",
    healthBenefits: [
      "Contains beta-glucan, a soluble fiber shown to help lower cholesterol",
      "Low glycemic index provides sustained energy without blood sugar spikes",
      "Rich in antioxidants including avenanthramides unique to oats",
      "Good source of plant-based protein for a grain",
      "High in manganese, phosphorus, and magnesium for bone health",
      "May help with weight management by promoting feelings of fullness"
    ],
    howToEat: "Oatmeal can be prepared stovetop, in the microwave, or overnight in the refrigerator for no-cook overnight oats. Steel-cut oats have a chewier texture and take 20-30 minutes to cook, while rolled oats cook in 5 minutes. Top with fresh fruit, nuts, seeds, honey, or maple syrup. Oats also work in baking, smoothies, and savory dishes.",
    storageAndSelection: "Store oats in an airtight container in a cool, dry place for up to 2 years. Steel-cut oats have a slightly shorter shelf life. Rolled oats and instant oats cook faster but have similar nutritional profiles to steel-cut. Choose plain oats over flavored varieties to avoid added sugars.",
    dietaryConsiderations: "Oats are naturally gluten-free but often processed in facilities with wheat, so those with celiac disease should choose certified gluten-free oats. Oatmeal fits well in vegetarian, vegan, and heart-healthy diets. The fiber content may cause bloating in some people when first increasing intake."
  },

  "greek-yogurt": {
    description: "Greek yogurt is a strained yogurt that's thicker and creamier than regular yogurt, with higher protein content. Made by straining out the whey, Greek yogurt has become extremely popular for its protein content, probiotic benefits, and versatility in both sweet and savory applications.",
    healthBenefits: [
      "High protein content (nearly double regular yogurt) supports muscle health and satiety",
      "Contains live probiotics that support gut health and immunity",
      "Excellent source of calcium for bone health",
      "Good source of B12, especially important for vegetarians",
      "Lower in lactose than regular yogurt, often tolerated by lactose-sensitive individuals",
      "Provides potassium and phosphorus for overall health"
    ],
    howToEat: "Greek yogurt can be enjoyed plain, with honey and fruit, in smoothies, as a sour cream substitute, in dips and sauces, or as a base for overnight oats. Use it to add creaminess to soups, marinades, and baked goods. Freeze with fruit for a healthier ice cream alternative. The tangy flavor pairs well with both sweet and savory dishes.",
    storageAndSelection: "Choose plain Greek yogurt over flavored varieties to avoid added sugars. Check the protein content - authentic Greek yogurt should have 15-20g per cup. Store in the refrigerator and use by the date on the package. Separation of whey on top is normal - stir it back in for added nutrition.",
    dietaryConsiderations: "Greek yogurt is suitable for vegetarian diets and can be part of low-carb and high-protein eating plans. Those with dairy allergies or severe lactose intolerance should avoid it. Non-dairy alternatives made from coconut or almond milk are available but have different nutritional profiles."
  },

  "almonds": {
    description: "Almonds are tree nuts native to the Middle East that have become one of the most popular and nutritious snacks worldwide. These versatile nuts are actually seeds from the fruit of the almond tree and are valued for their satisfying crunch, mild flavor, and impressive nutritional profile.",
    healthBenefits: [
      "Rich in vitamin E, a powerful antioxidant that protects cells",
      "High in healthy monounsaturated fats supporting heart health",
      "Good source of plant-based protein and fiber for satiety",
      "Contains magnesium important for blood sugar control and muscle function",
      "May help lower LDL cholesterol when part of a healthy diet",
      "Provides riboflavin and niacin for energy metabolism"
    ],
    howToEat: "Almonds can be eaten raw, roasted, or blanched (skins removed). Enjoy as a snack, in trail mix, ground into almond flour for baking, or processed into almond butter or almond milk. Toast in a dry pan to enhance flavor. A serving is about 23 almonds (1 ounce). Sliced almonds are great on salads, oatmeal, and desserts.",
    storageAndSelection: "Store almonds in an airtight container in a cool, dark place for up to a year, or refrigerate/freeze for longer storage. Choose almonds that are uniform in color without dark spots. Unsalted raw almonds offer the most versatility. Almond skin contains fiber and antioxidants - blanched almonds have less fiber.",
    dietaryConsiderations: "Almonds are naturally gluten-free and suitable for vegetarian, vegan, paleo, and keto diets. While calorie-dense, their protein, fiber, and healthy fats promote satiety. Those with tree nut allergies must avoid almonds. Portion control is important due to high calorie content."
  },

  "sweet-potato": {
    description: "Sweet potatoes are nutritious root vegetables native to Central and South America that have been cultivated for thousands of years. Despite their name, they're not closely related to regular potatoes. Their natural sweetness, vibrant orange color, and impressive nutrient density make them a popular healthy food choice.",
    healthBenefits: [
      "Exceptionally high in beta-carotene, which converts to vitamin A for eye health",
      "Good source of fiber supporting digestive health and blood sugar control",
      "Contains manganese and copper for energy metabolism",
      "Rich in vitamin C for immune support and skin health",
      "Potassium content supports heart health and blood pressure",
      "Lower glycemic index than white potatoes, better for blood sugar management"
    ],
    howToEat: "Sweet potatoes can be baked, roasted, mashed, fried, or even eaten raw. Baking whole at 400°F for 45-60 minutes caramelizes their natural sugars. Cube and roast with olive oil and spices for a delicious side. Use in soups, curries, and casseroles. Sweet potato fries are a popular healthier alternative to regular fries. The skin is edible and nutritious.",
    storageAndSelection: "Choose firm sweet potatoes without cracks, soft spots, or sprouts. Store in a cool, dark, well-ventilated place (not the refrigerator) for up to 3-4 weeks. Once cut, wrap and refrigerate for up to a week. Cooked sweet potatoes can be refrigerated for 3-5 days or frozen for up to 12 months.",
    dietaryConsiderations: "Sweet potatoes are naturally gluten-free, vegan, and suitable for paleo diets. They're an excellent carbohydrate source for athletes. Those on very low-carb or keto diets may need to limit portions. The skin adds fiber, so eating it when possible is recommended."
  },

  "spinach": {
    description: "Spinach is a leafy green vegetable that originated in Persia and has become one of the most nutritious vegetables available. Made famous by Popeye, this superfood lives up to its reputation with an exceptional concentration of vitamins, minerals, and antioxidants packed into very few calories.",
    healthBenefits: [
      "Extremely high in vitamin K, essential for blood clotting and bone health",
      "Excellent source of vitamin A in the form of beta-carotene for eye health",
      "Contains iron and folate important for red blood cell production",
      "Rich in antioxidants including lutein for eye health",
      "Nitrates in spinach may help lower blood pressure",
      "High in vitamin C when consumed raw, supporting immune function"
    ],
    howToEat: "Spinach is extremely versatile - enjoy raw in salads and smoothies, or cooked in sautees, soups, pasta dishes, and omelets. Cooking reduces volume significantly (one pound cooks down to about a cup) and increases absorption of some nutrients like beta-carotene. Baby spinach has a milder flavor than mature leaves. Pair with foods high in vitamin C to enhance iron absorption.",
    storageAndSelection: "Choose crisp, dark green leaves without yellowing or wilting. Store unwashed in the refrigerator crisper for up to a week. Wash thoroughly before use as spinach can harbor sand and dirt. Pre-washed spinach is convenient but has a shorter shelf life. Frozen spinach retains most nutrients and stores for months.",
    dietaryConsiderations: "Spinach is extremely low in calories and naturally vegan and gluten-free. It's ideal for weight loss diets due to high nutrient density per calorie. Those on blood thinners should maintain consistent vitamin K intake. High oxalate content may be a concern for those prone to kidney stones."
  },

  "salmon-fillet": {
    description: "Salmon is one of the most nutritious fish available, prized for its rich omega-3 fatty acid content and excellent protein. This cold-water fish is found in both Atlantic and Pacific varieties, with wild-caught salmon typically having a more robust flavor. It's a cornerstone of the Mediterranean and Nordic diets.",
    healthBenefits: [
      "Exceptional source of omega-3 fatty acids EPA and DHA for heart and brain health",
      "High-quality complete protein supporting muscle maintenance and repair",
      "One of the few natural food sources of vitamin D",
      "Contains astaxanthin, a powerful antioxidant giving salmon its pink color",
      "B vitamins support energy metabolism and nervous system function",
      "Selenium content supports thyroid health and immune function"
    ],
    howToEat: "Salmon can be baked, grilled, pan-seared, poached, or smoked. Cook to an internal temperature of 145°F, though many prefer it slightly less done for moistness. The skin becomes crispy when pan-seared and contains additional omega-3s. Raw salmon is enjoyed in sushi and sashimi (ensure it's sushi-grade). Canned salmon is equally nutritious and more economical.",
    storageAndSelection: "Fresh salmon should smell like the ocean, not fishy, with firm, moist flesh that springs back when pressed. Use fresh salmon within 1-2 days of purchase. Frozen salmon maintains quality for 2-3 months. Thaw in the refrigerator overnight. Wild salmon typically has a deeper color and more intense flavor than farmed.",
    dietaryConsiderations: "Salmon fits well in Mediterranean, paleo, keto, and pescatarian diets. It's naturally gluten-free. Mercury content is relatively low compared to larger fish, making it safe for regular consumption. Pregnant women can safely enjoy 2-3 servings per week. Those with fish allergies should avoid salmon."
  },

  "ground-beef": {
    description: "Ground beef is a versatile and popular form of beef made by grinding various cuts of meat. It's a staple in cuisines worldwide, used in everything from burgers to tacos to pasta sauces. The fat content varies by type, from extra lean to regular, affecting both flavor and nutritional profile.",
    healthBenefits: [
      "Excellent source of complete protein with all essential amino acids",
      "Rich in highly bioavailable heme iron, better absorbed than plant iron",
      "Good source of zinc important for immune function",
      "Contains vitamin B12 essential for nerve health and energy",
      "Provides creatine and carnosine supporting muscle function",
      "Source of conjugated linoleic acid (CLA) with potential health benefits"
    ],
    howToEat: "Ground beef can be formed into patties for burgers, browned for tacos and pasta sauces, shaped into meatballs or meatloaf, or used in casseroles. Cook to an internal temperature of 160°F. Breaking up the meat while cooking ensures even browning. Drain excess fat for leaner preparations. Season generously as ground beef absorbs flavors well.",
    storageAndSelection: "Fresh ground beef should be bright red on the outside (may be darker inside). Use within 1-2 days of purchase or freeze for up to 4 months. Choose lean percentages (90/10 or 93/7) for healthier options, though some fat (80/20) adds moisture and flavor. Grass-fed beef may have higher omega-3 content.",
    dietaryConsiderations: "Ground beef suits low-carb, keto, paleo, and high-protein diets. Those watching saturated fat intake should choose leaner varieties or drain excess fat. Red meat consumption recommendations vary - many health organizations suggest limiting intake. Organic and grass-fed options may offer nutritional advantages."
  },

  "tuna": {
    description: "Tuna is a saltwater fish belonging to the mackerel family, prized for its meaty texture and versatility. Whether fresh, canned, or frozen, tuna is one of the most consumed fish worldwide. It's an excellent source of lean protein and omega-3 fatty acids, making it popular among health-conscious consumers.",
    healthBenefits: [
      "Very high in lean protein supporting muscle maintenance and weight management",
      "Good source of omega-3 fatty acids for heart and brain health",
      "Rich in selenium, a powerful antioxidant mineral",
      "Contains vitamin D for bone health and immune function",
      "Provides B vitamins including B12 and niacin for energy metabolism",
      "Low in calories making it excellent for weight loss diets"
    ],
    howToEat: "Fresh tuna can be seared, grilled, or served raw in sushi and poke bowls. Canned tuna is versatile for sandwiches, salads, pasta dishes, and casseroles. For fresh tuna, cooking to medium-rare (125°F) preserves moisture and flavor. Canned tuna packed in water is lower in calories than oil-packed. Mix canned tuna with Greek yogurt instead of mayo for a healthier option.",
    storageAndSelection: "Fresh tuna should have a deep red color without brown spots and smell clean, not fishy. Use within 1-2 days or freeze. For canned tuna, check expiration dates and choose low-sodium options when available. Light tuna (skipjack) is lower in mercury than albacore. Store canned tuna in a cool, dry place.",
    dietaryConsiderations: "Tuna is naturally low-carb, gluten-free, and suitable for keto, paleo, and Mediterranean diets. Due to mercury content, FDA recommends limiting albacore tuna to 6 ounces per week; light tuna can be consumed more frequently. Pregnant women should be especially mindful of tuna consumption."
  },

  "pizza": {
    description: "Pizza is one of the world's most beloved foods, originating from Naples, Italy. This iconic dish combines a yeasted dough base with tomato sauce, cheese, and various toppings. While often considered indulgent, pizza can range from highly nutritious to calorie-dense depending on ingredients and preparation.",
    healthBenefits: [
      "Tomato sauce provides lycopene, an antioxidant linked to heart health",
      "Cheese offers protein and calcium for bone health",
      "Vegetable toppings add fiber, vitamins, and minerals",
      "Whole wheat crusts provide more fiber than refined alternatives",
      "Can be a vehicle for incorporating multiple food groups in one meal",
      "Protein from cheese and meat toppings provides satiety"
    ],
    howToEat: "Pizza can be eaten as a meal on its own or paired with a salad for added nutrients and fiber. Opt for thin crust over deep dish to reduce calories and carbs. Choose vegetable toppings like peppers, mushrooms, and spinach over processed meats. Consider portions - one or two slices with vegetables is more balanced than multiple slices of meat lovers. Blotting excess oil can reduce fat content.",
    storageAndSelection: "Store leftover pizza refrigerated for 3-4 days. Reheat in a skillet over medium heat covered with a lid for crispy crust, or in the oven at 350°F. Avoid microwave reheating which makes crust soggy. When ordering, look for pizzerias using fresh ingredients and real cheese rather than processed substitutes.",
    dietaryConsiderations: "Traditional pizza contains gluten; cauliflower crusts offer a lower-carb alternative. Dairy-free cheese is available for those avoiding dairy. Portion control is key for weight management. Homemade pizza allows control over ingredients and is often healthier than delivery options. Choose lean proteins and vegetables over processed meats."
  },

  "hamburger": {
    description: "The hamburger is an iconic American food consisting of a cooked ground beef patty in a bun, typically served with various toppings and condiments. Despite its simple concept, the hamburger has evolved into countless variations and remains one of the most popular foods in the United States and globally.",
    healthBenefits: [
      "Beef provides high-quality complete protein for muscle health",
      "Good source of iron, zinc, and B vitamins",
      "Can include vegetable toppings for added nutrition",
      "Provides satiety from protein and fat content",
      "Whole grain buns add fiber and B vitamins",
      "Customizable to fit various dietary preferences"
    ],
    howToEat: "Cook burgers to 160°F internal temperature for food safety. Adding seasonings to the meat before forming patties enhances flavor. Let meat come to room temperature before cooking for more even results. Create a small indentation in the center of patties to prevent bulging during cooking. Load up on vegetable toppings and skip the mayo for a healthier burger.",
    storageAndSelection: "Use fresh ground beef within 1-2 days or freeze. Cooked burgers can be refrigerated for 3-4 days. Choose leaner ground beef (90/10) for healthier burgers, though 80/20 has more flavor. Look for grass-fed beef options for potentially higher omega-3 content. Pre-formed frozen patties are convenient but read labels for additives.",
    dietaryConsiderations: "Traditional hamburgers can fit into most diets with modifications. Use lettuce wraps instead of buns for low-carb or gluten-free options. Turkey, chicken, or plant-based patties offer alternatives to beef. Loading with vegetables increases nutritional value. Watch portions and toppings - a double with bacon and cheese differs greatly from a single with vegetables."
  },

  "french-fries": {
    description: "French fries are thin strips of potato that have been deep-fried or baked until crispy on the outside and fluffy inside. Despite their name, they likely originated in Belgium. While traditionally deep-fried, modern cooking methods include oven-baking and air frying for lower-fat versions.",
    healthBenefits: [
      "Potatoes provide potassium, vitamin C, and vitamin B6",
      "Source of carbohydrates for energy",
      "Contains some fiber, especially when eaten with skin",
      "Can be prepared in healthier ways (baked or air-fried)",
      "Provides satiety when paired with protein",
      "Sweet potato fries offer more beta-carotene"
    ],
    howToEat: "For crispier homemade fries, soak cut potatoes in cold water for 30 minutes to remove excess starch, then dry thoroughly before cooking. Baking at high heat (425°F) with a light coating of oil creates a healthier alternative to deep-frying. Air fryers produce crispy results with minimal oil. Season with herbs and spices instead of just salt.",
    storageAndSelection: "Fresh fries are best eaten immediately. Leftover fries can be reheated in the oven or air fryer - microwaving makes them soggy. For frozen fries, avoid those with long ingredient lists containing artificial additives. Choose sweet potato fries for additional nutrients. Making fries at home allows control over oil type and salt content.",
    dietaryConsiderations: "French fries are naturally gluten-free (when not coated) and vegan. The main concern is the high fat content from frying and potential formation of acrylamide at high temperatures. Baked or air-fried versions are healthier alternatives. Portion control is important as fries are calorie-dense. Consider as an occasional treat rather than a dietary staple.",
    faqs: [
      {
        question: "How many calories are in french fries?",
        answer: "A medium serving of fast-food french fries (117g) contains about 365 calories. Per 100g, deep-fried french fries have approximately 312 calories. Homemade baked fries have about 150-180 calories per 100g. Air-fried fries fall in between at roughly 200 calories per 100g."
      },
      {
        question: "Are french fries bad for weight loss?",
        answer: "Traditional deep-fried french fries are high in calories and fat, making them challenging for weight loss. A medium serving provides 365 calories with 17g of fat. For weight loss, try baked or air-fried versions which cut calories by 40-50%. Portion control is key - limit to a small serving occasionally."
      },
      {
        question: "Are baked fries healthier than fried?",
        answer: "Yes, baked fries are significantly healthier. They contain 40-50% fewer calories and 75% less fat than deep-fried fries. Baking also produces less acrylamide, a potentially harmful compound formed during high-heat frying. Air-frying offers similar benefits with a crispier texture."
      },
      {
        question: "What is the healthiest way to eat french fries?",
        answer: "The healthiest options are baked or air-fried fries made at home. Cut potatoes with skin on for extra fiber, use minimal olive oil, and season with herbs instead of excessive salt. Sweet potato fries offer more vitamins. Keep portions small (about 3oz) and pair with protein and vegetables."
      },
      {
        question: "How often can I eat french fries?",
        answer: "For a balanced diet, limit deep-fried french fries to once a week or less. Baked or air-fried versions can be enjoyed more frequently as part of a healthy meal. Studies link frequent fried food consumption to health risks, so moderation is important. When you do indulge, choose a small portion."
      }
    ]
  },

  "chocolate": {
    description: "Chocolate is made from cocoa beans and ranges from dark (highest cocoa content) to milk to white chocolate. Dark chocolate in particular has gained recognition for potential health benefits due to its antioxidant content. Chocolate has been consumed for thousands of years, originally as a bitter beverage by ancient Mesoamerican civilizations.",
    healthBenefits: [
      "Dark chocolate is rich in flavanols with potential cardiovascular benefits",
      "Contains antioxidants that may help protect cells from damage",
      "May improve mood and cognitive function",
      "Source of minerals including iron, magnesium, and copper",
      "Cocoa flavanols may help lower blood pressure",
      "Dark chocolate may improve cholesterol profiles"
    ],
    howToEat: "Choose dark chocolate with at least 70% cocoa for the most health benefits and less sugar. Enjoy in moderation - 1-2 ounces is a reasonable serving. Pair with fruits and nuts for a satisfying snack. Use in baking for special occasions. Savor chocolate slowly to appreciate flavors and prevent overconsumption. Hot cocoa made with real cocoa powder offers benefits without as much fat.",
    storageAndSelection: "Store chocolate in a cool, dry place away from strong odors (chocolate absorbs them). Avoid refrigeration which can cause bloom (white coating - harmless but affects texture). High-quality chocolate should snap cleanly and have a glossy appearance. Check ingredients - look for cocoa butter, not vegetable oils. Dark chocolate has a longer shelf life than milk chocolate.",
    dietaryConsiderations: "Dark chocolate is lower in sugar than milk chocolate. Most chocolate contains dairy, though dairy-free dark varieties exist. Chocolate contains caffeine and theobromine which some should limit. White chocolate has no cocoa solids or associated benefits. Despite potential benefits, chocolate is calorie-dense and should be consumed in moderation."
  },

  "ice-cream": {
    description: "Ice cream is a frozen dessert made from dairy products, sugar, and various flavorings. This beloved treat comes in countless flavors and variations. While traditionally considered an indulgent treat, modern options include lower-calorie, lower-sugar, and dairy-free alternatives for various dietary needs.",
    healthBenefits: [
      "Provides calcium and protein from dairy",
      "Contains vitamin A and B vitamins",
      "Can be a source of energy from carbohydrates and fats",
      "Enjoyment and satisfaction support mental wellbeing",
      "Some contain probiotics when made with live cultures",
      "Fruit-based varieties may provide additional vitamins"
    ],
    howToEat: "Enjoy ice cream in moderate portions - about 1/2 cup is a standard serving. Let ice cream sit at room temperature for a few minutes before serving for optimal texture and flavor. Choose varieties with fewer artificial ingredients. Top with fresh fruit for added nutrition. Homemade ice cream allows control over sugar content and ingredients.",
    storageAndSelection: "Store ice cream in the main body of the freezer, not the door, at 0°F or below. Ice cream with ice crystals has likely been thawed and refrozen. Look for brands with simple, recognizable ingredients. Check sugar content - some contain over 20g per serving. Explore lower-calorie options made with milk instead of cream, or plant-based alternatives.",
    dietaryConsiderations: "Traditional ice cream is high in saturated fat and sugar. Non-dairy alternatives include coconut, almond, oat, and soy-based options. Sugar-free varieties use alternative sweeteners - check labels for specific types. Lactose-free versions are available for those with intolerance. Consider frozen yogurt or fruit sorbet as lighter alternatives.",
    faqs: [
      {
        question: "How many calories are in a scoop of ice cream?",
        answer: "A typical single scoop (about 65g) of vanilla ice cream contains approximately 135 calories. Premium ice creams can have 200+ calories per scoop due to higher fat content. Light or low-fat varieties may have 80-100 calories per scoop."
      },
      {
        question: "Is ice cream bad for weight loss?",
        answer: "Ice cream is calorie-dense at 207 calories per 100g with 11g of fat and 21g of sugar. While occasional small portions can fit into a weight loss plan, frequent consumption may hinder progress. Consider lighter alternatives like frozen yogurt (100-150 cal/100g) or fruit sorbets."
      },
      {
        question: "What is the healthiest type of ice cream?",
        answer: "The healthiest options include frozen Greek yogurt (higher protein, lower fat), fruit-based sorbets (no dairy fat), and protein ice creams. Look for varieties with simple ingredients, less than 150 calories per serving, and minimal added sugars."
      },
      {
        question: "Does ice cream have any nutritional value?",
        answer: "Yes, ice cream provides calcium (about 128mg per 100g), protein (3.5g), vitamin A, B vitamins, and phosphorus. However, these benefits must be weighed against the high sugar and saturated fat content. Dairy-free alternatives have different nutritional profiles."
      },
      {
        question: "How much ice cream is a healthy serving?",
        answer: "A standard serving is 1/2 cup (about 65g), containing roughly 135 calories. The FDA defines a serving as 2/3 cup (88g). For better portion control, use small bowls, avoid eating from the container, and savor each bite slowly."
      }
    ]
  },

  "orange": {
    description: "Oranges are one of the world's most popular citrus fruits, renowned for their high vitamin C content and refreshing sweet-tart flavor. Native to Southeast Asia, oranges are now cultivated in tropical and subtropical regions worldwide. This versatile fruit is enjoyed fresh, juiced, and in countless culinary applications.",
    healthBenefits: [
      "Exceptionally high in vitamin C - one orange provides over 100% of daily needs",
      "Rich in antioxidants including flavonoids and carotenoids",
      "Contains fiber that supports digestive health and blood sugar control",
      "Potassium content helps maintain healthy blood pressure",
      "Folate supports cell division and is important during pregnancy",
      "Citrus flavonoids may support heart health and reduce inflammation"
    ],
    howToEat: "Oranges can be enjoyed fresh as a snack, segmented into salads, juiced for fresh OJ, or zested into baked goods and savory dishes. Peel and eat whole for maximum fiber benefits. The white pith contains beneficial flavonoids - don't remove it all. Orange zest adds intense citrus flavor to recipes without added calories.",
    storageAndSelection: "Choose oranges that feel heavy for their size (indicating juiciness) with bright, firm skin. Avoid soft spots or mold. Store at room temperature for up to a week, or refrigerate for 2-3 weeks. Fresh-squeezed juice should be consumed within 2-3 days. Naval oranges are best for eating, Valencia for juicing.",
    dietaryConsiderations: "Oranges are naturally vegan, gluten-free, and low-calorie at just 47 calories per 100g. They have a moderate glycemic index but the fiber helps moderate blood sugar response. Fresh oranges are preferable to juice, which lacks fiber and concentrates natural sugars. Those with citrus allergies or acid reflux may need to limit consumption.",
    faqs: [
      {
        question: "How many calories are in one orange?",
        answer: "A medium orange (about 130g) contains approximately 62 calories. Per 100g, oranges have just 47 calories, making them an excellent low-calorie snack. A large orange (180g) has about 85 calories, while a small orange (100g) has 47 calories."
      },
      {
        question: "Are oranges good for weight loss?",
        answer: "Yes, oranges are excellent for weight loss. With only 47 calories per 100g, high water content (87%), and 2.4g of fiber, they're filling without being calorie-dense. The fiber helps you feel full longer, and the natural sweetness can satisfy sugar cravings healthily."
      },
      {
        question: "Is it OK to eat an orange every day?",
        answer: "Yes, eating an orange daily is healthy for most people. One medium orange provides over 100% of your daily vitamin C needs, plus fiber, potassium, and antioxidants. However, those with acid reflux or citrus allergies should limit intake."
      },
      {
        question: "Are oranges high in sugar?",
        answer: "Oranges contain about 9g of natural sugar per 100g, which is moderate compared to other fruits. However, their fiber content (2.4g) helps slow sugar absorption, giving them a relatively low glycemic load. Whole oranges are much better than orange juice, which concentrates sugars."
      },
      {
        question: "Which is healthier: eating an orange or drinking orange juice?",
        answer: "Eating a whole orange is healthier. Fresh oranges provide fiber (2.4g per 100g) that juice lacks, making them more filling and better for blood sugar. One 8oz glass of OJ has 110 calories and 21g sugar, while a whole orange has only 62 calories and 12g sugar plus fiber."
      }
    ]
  },

  "flaxseed": {
    description: "Flaxseeds (also called linseeds) are tiny nutritional powerhouses that have been cultivated for over 6,000 years. These small brown or golden seeds are among the richest plant sources of omega-3 fatty acids and contain exceptional amounts of fiber and lignans. Flaxseeds have gained popularity as a superfood for heart and digestive health.",
    healthBenefits: [
      "Richest plant source of alpha-linolenic acid (ALA) omega-3 fatty acids",
      "Exceptionally high in both soluble and insoluble fiber (27g per 100g)",
      "Contains lignans with antioxidant and phytoestrogen properties",
      "High-quality plant protein with 18g per 100g",
      "May help lower cholesterol and support heart health",
      "Supports digestive regularity and gut health"
    ],
    howToEat: "Ground flaxseed is better absorbed than whole seeds. Add to smoothies, oatmeal, yogurt, or baked goods. Use flax eggs (1 tbsp ground flax + 3 tbsp water) as a vegan egg substitute. Sprinkle on salads or mix into homemade energy bars. Start with 1 tablespoon daily and increase gradually to avoid digestive discomfort.",
    storageAndSelection: "Whole flaxseeds store for up to a year in a cool, dark place. Ground flaxseed spoils quickly due to oils - store in the refrigerator or freezer for up to 3 months. Buy whole seeds and grind small batches as needed. Golden and brown flaxseeds have similar nutrition. Avoid rancid-smelling flaxseed.",
    dietaryConsiderations: "Flaxseeds are high in calories (534 per 100g) due to healthy fats, so portion control matters. They're naturally gluten-free, vegan, and keto-friendly. The high fiber may cause bloating initially - increase intake gradually. Drink plenty of water when consuming flaxseed. Those on blood thinners should consult their doctor due to omega-3 content.",
    faqs: [
      {
        question: "How many calories are in a tablespoon of flaxseed?",
        answer: "One tablespoon of whole flaxseed (about 10g) contains approximately 55 calories. Ground flaxseed is slightly more calorie-dense at about 37 calories per tablespoon (7g) because it's more compact. Despite being calorie-dense, flaxseeds are highly nutritious."
      },
      {
        question: "Is flaxseed good for weight loss?",
        answer: "Yes, flaxseed can support weight loss despite being calorie-dense. Its high fiber content (27g per 100g) promotes fullness and satiety. The soluble fiber forms a gel that slows digestion, helping you feel full longer. Studies suggest 2-3 tablespoons daily may help reduce body weight."
      },
      {
        question: "Should I eat flaxseed whole or ground?",
        answer: "Ground flaxseed is recommended because whole seeds often pass through the digestive system undigested. Grinding breaks the hard outer shell, allowing your body to absorb the omega-3s, fiber, and lignans. Grind fresh or buy pre-ground and store in the freezer."
      },
      {
        question: "How much flaxseed should I eat daily?",
        answer: "The recommended amount is 1-2 tablespoons (10-20g) of ground flaxseed daily, providing 55-110 calories. This amount delivers significant omega-3s and fiber without excessive calories. Start with 1 teaspoon and gradually increase to avoid digestive issues."
      },
      {
        question: "What are the side effects of eating too much flaxseed?",
        answer: "Consuming too much flaxseed (more than 5 tablespoons daily) may cause bloating, gas, abdominal pain, or diarrhea due to high fiber content. The omega-3s may interact with blood thinners. Always drink plenty of water with flaxseed, as fiber absorbs liquid and may cause constipation if you don't stay hydrated."
      },
      {
        question: "Is flaxseed better than chia seeds?",
        answer: "Both are excellent superfoods with different strengths. Flaxseed has more omega-3s (22.8g vs 17.8g per 100g) and is cheaper. Chia seeds have more fiber (34g vs 27g) and don't need grinding. Both support heart health, digestion, and weight management. Consider including both in your diet."
      }
    ]
  },

  "flaxseeds": {
    description: "Flaxseeds (also called linseeds) are tiny nutritional powerhouses that have been cultivated for over 6,000 years. These small brown or golden seeds are among the richest plant sources of omega-3 fatty acids and contain exceptional amounts of fiber and lignans. Flaxseeds have gained popularity as a superfood for heart and digestive health.",
    healthBenefits: [
      "Richest plant source of alpha-linolenic acid (ALA) omega-3 fatty acids",
      "Exceptionally high in both soluble and insoluble fiber (27g per 100g)",
      "Contains lignans with antioxidant and phytoestrogen properties",
      "High-quality plant protein with 18g per 100g",
      "May help lower cholesterol and support heart health",
      "Supports digestive regularity and gut health"
    ],
    howToEat: "Ground flaxseed is better absorbed than whole seeds. Add to smoothies, oatmeal, yogurt, or baked goods. Use flax eggs (1 tbsp ground flax + 3 tbsp water) as a vegan egg substitute. Sprinkle on salads or mix into homemade energy bars. Start with 1 tablespoon daily and increase gradually to avoid digestive discomfort.",
    storageAndSelection: "Whole flaxseeds store for up to a year in a cool, dark place. Ground flaxseed spoils quickly due to oils - store in the refrigerator or freezer for up to 3 months. Buy whole seeds and grind small batches as needed. Golden and brown flaxseeds have similar nutrition. Avoid rancid-smelling flaxseed.",
    dietaryConsiderations: "Flaxseeds are high in calories (534 per 100g) due to healthy fats, so portion control matters. They're naturally gluten-free, vegan, and keto-friendly. The high fiber may cause bloating initially - increase intake gradually. Drink plenty of water when consuming flaxseed. Those on blood thinners should consult their doctor due to omega-3 content.",
    faqs: [
      {
        question: "How many calories are in a tablespoon of flaxseed?",
        answer: "One tablespoon of whole flaxseed (about 10g) contains approximately 55 calories. Ground flaxseed is slightly more calorie-dense at about 37 calories per tablespoon (7g) because it's more compact. Despite being calorie-dense, flaxseeds are highly nutritious."
      },
      {
        question: "Is flaxseed good for weight loss?",
        answer: "Yes, flaxseed can support weight loss despite being calorie-dense. Its high fiber content (27g per 100g) promotes fullness and satiety. The soluble fiber forms a gel that slows digestion, helping you feel full longer. Studies suggest 2-3 tablespoons daily may help reduce body weight."
      },
      {
        question: "Should I eat flaxseed whole or ground?",
        answer: "Ground flaxseed is recommended because whole seeds often pass through the digestive system undigested. Grinding breaks the hard outer shell, allowing your body to absorb the omega-3s, fiber, and lignans. Grind fresh or buy pre-ground and store in the freezer."
      },
      {
        question: "How much flaxseed should I eat daily?",
        answer: "The recommended amount is 1-2 tablespoons (10-20g) of ground flaxseed daily, providing 55-110 calories. This amount delivers significant omega-3s and fiber without excessive calories. Start with 1 teaspoon and gradually increase to avoid digestive issues."
      },
      {
        question: "What are the side effects of eating too much flaxseed?",
        answer: "Consuming too much flaxseed (more than 5 tablespoons daily) may cause bloating, gas, abdominal pain, or diarrhea due to high fiber content. The omega-3s may interact with blood thinners. Always drink plenty of water with flaxseed, as fiber absorbs liquid and may cause constipation if you don't stay hydrated."
      },
      {
        question: "Is flaxseed better than chia seeds?",
        answer: "Both are excellent superfoods with different strengths. Flaxseed has more omega-3s (22.8g vs 17.8g per 100g) and is cheaper. Chia seeds have more fiber (34g vs 27g) and don't need grinding. Both support heart health, digestion, and weight management. Consider including both in your diet."
      }
    ]
  },

  "popcorn": {
    description: "Popcorn is a whole grain snack made from dried corn kernels that expand when heated. This ancient food has been enjoyed for thousands of years and remains one of the most popular snacks worldwide. When air-popped without excessive butter or oil, popcorn is a surprisingly healthy, high-fiber, low-calorie treat.",
    healthBenefits: [
      "Whole grain food providing beneficial fiber (15g per 100g)",
      "Low calorie when air-popped - only 31 calories per cup",
      "Contains polyphenol antioxidants concentrated in the hull",
      "Good source of B vitamins and minerals like magnesium and zinc",
      "Naturally gluten-free whole grain option",
      "High volume, low calorie density promotes satiety"
    ],
    howToEat: "Air-pop kernels for the healthiest option - no oil needed. Season with herbs, spices, or nutritional yeast instead of butter. Stovetop popping with minimal oil is also healthy. Avoid microwave popcorn with artificial butter flavoring. Pre-popped bags vary widely - check labels for added fats and sodium.",
    storageAndSelection: "Store unpopped kernels in an airtight container at room temperature for up to a year. Popped popcorn is best eaten fresh but stores 1-2 weeks in an airtight container. Choose plain kernels over microwave bags. For pre-popped, look for minimal ingredients (corn, oil, salt) and low sodium options.",
    dietaryConsiderations: "Plain air-popped popcorn is naturally vegan, gluten-free, and suitable for most diets. However, added butter, cheese, or caramel dramatically increases calories and fat. Movie theater popcorn can contain 1,000+ calories per large tub. Those with corn allergies or diverticulitis should avoid popcorn.",
    faqs: [
      {
        question: "How many calories are in a cup of popcorn?",
        answer: "Air-popped popcorn has only 31 calories per cup (8g). Oil-popped popcorn has about 55 calories per cup. Movie theater popcorn can have 150-200+ calories per cup due to coconut oil and butter. One serving (3 cups) of air-popped is just 93 calories."
      },
      {
        question: "Is popcorn a healthy snack for weight loss?",
        answer: "Yes, air-popped popcorn is excellent for weight loss. It has high volume and low calorie density - you can eat 3 cups for under 100 calories. The 15g of fiber per 100g keeps you full longer. Avoid butter and choose light seasonings for best results."
      },
      {
        question: "Is popcorn better than chips?",
        answer: "Yes, popcorn is generally healthier than chips. Air-popped popcorn has 31 calories per cup vs chips at 150+ calories per serving. Popcorn is a whole grain with 15g fiber per 100g, while chips are refined. However, heavily buttered popcorn can equal chips in calories."
      },
      {
        question: "Is microwave popcorn unhealthy?",
        answer: "Some microwave popcorn can be unhealthy due to added fats, artificial flavoring, and high sodium. Look for brands with simple ingredients and no trans fats. Better yet, pop your own kernels - it takes just 3 minutes in a paper bag in the microwave with no oil needed."
      },
      {
        question: "How much popcorn can I eat on a diet?",
        answer: "On a weight loss diet, 3-4 cups of air-popped popcorn (93-124 calories) makes an excellent snack. This provides good volume and fiber to satisfy hunger. Avoid eating directly from a large bowl - portion out your serving to prevent overeating."
      }
    ]
  },

  "pineapple": {
    description: "Pineapple is a tropical fruit known for its sweet, tangy flavor and distinctive spiky appearance. Native to South America, this iconic fruit is now cultivated in tropical regions worldwide. Pineapple is notable for containing bromelain, a unique enzyme with digestive and anti-inflammatory properties.",
    healthBenefits: [
      "Rich in vitamin C - one cup provides 131% of daily needs",
      "Contains bromelain enzyme that aids protein digestion",
      "Good source of manganese for bone health and metabolism",
      "Provides antioxidants that may reduce inflammation",
      "Contains B vitamins including thiamin for energy",
      "May support immune function and reduce recovery time after exercise"
    ],
    howToEat: "Enjoy fresh pineapple chunks as a snack, in fruit salads, or blended in smoothies. Grill slices for enhanced sweetness with savory dishes. Add to stir-fries in the last minutes of cooking. Fresh pineapple makes meat more tender due to bromelain. Avoid adding to gelatin desserts - bromelain prevents setting.",
    storageAndSelection: "Choose pineapples that smell sweet at the base, have golden-yellow color, and yield slightly to pressure. Green pineapples won't ripen further after picking. Store whole at room temperature for 2-3 days or refrigerate for up to a week. Cut pineapple keeps refrigerated 5-7 days in an airtight container.",
    dietaryConsiderations: "Pineapple is naturally vegan, gluten-free, and low in calories at 50 per 100g. The sugar content (10g per 100g) is moderate for fruit. Fresh pineapple is preferable to canned in syrup. Those with acid reflux may want to limit intake. Bromelain may interact with certain medications - consult your doctor if concerned.",
    faqs: [
      {
        question: "How many calories are in a cup of pineapple?",
        answer: "One cup of fresh pineapple chunks (165g) contains approximately 82 calories. Per 100g, pineapple has just 50 calories, making it a relatively low-calorie fruit. Canned pineapple in juice has similar calories, but pineapple in syrup can have 130+ calories per cup."
      },
      {
        question: "Is pineapple good for weight loss?",
        answer: "Yes, pineapple can support weight loss. With only 50 calories per 100g and high water content (86%), it's filling without being calorie-dense. The fiber and bromelain enzyme support digestion. However, portion control matters as sugar content (10g per 100g) can add up."
      },
      {
        question: "Is pineapple high in sugar?",
        answer: "Pineapple contains about 10g of natural sugar per 100g, which is moderate for fruit (lower than grapes at 16g, similar to oranges at 9g). Its fiber and water content help moderate the blood sugar response. Whole fresh pineapple is always better than juice."
      },
      {
        question: "What does bromelain in pineapple do?",
        answer: "Bromelain is a unique enzyme found only in pineapple that helps break down proteins and aids digestion. It also has anti-inflammatory properties and may reduce swelling after surgery or injury. Bromelain is most concentrated in the pineapple core."
      },
      {
        question: "Can I eat pineapple every day?",
        answer: "Yes, eating pineapple daily is healthy for most people. One cup provides over 100% of vitamin C needs and beneficial bromelain. However, the acidity may cause mouth irritation for some people if eaten in large amounts. Those with acid reflux should monitor their tolerance."
      }
    ]
  },

  "kale": {
    description: "Kale is a nutrient-dense leafy green vegetable that has earned its reputation as a superfood. A member of the cruciferous family alongside broccoli and cabbage, kale is packed with vitamins, minerals, and powerful antioxidants. Available in curly, lacinato (dinosaur), and red varieties, kale offers one of the highest nutrient densities per calorie of any food.",
    healthBenefits: [
      "Exceptionally high in vitamin K - one cup provides over 600% of daily needs",
      "Excellent source of vitamin A and vitamin C for immune support",
      "Contains powerful antioxidants including quercetin and kaempferol",
      "Rich in lutein and zeaxanthin for eye health",
      "High fiber content supports digestive health and satiety",
      "Contains sulforaphane and other compounds studied for cancer prevention"
    ],
    howToEat: "Kale can be eaten raw in salads (massage with oil to soften), blended in smoothies, sautéed with garlic, baked into crispy chips, or added to soups and stews. Remove the tough stems before eating. Massaging raw kale with olive oil and lemon breaks down fibers and reduces bitterness. Baby kale is more tender and mild for raw eating.",
    storageAndSelection: "Choose kale with firm, dark green leaves without yellowing or wilting. Smaller leaves tend to be more tender. Store unwashed in a plastic bag in the refrigerator for up to a week. Wash thoroughly before use. Kale can be blanched and frozen for up to 8 months.",
    dietaryConsiderations: "Kale is extremely low in calories (just 33 per 100g) and suitable for virtually all diets. Those on blood thinners should maintain consistent vitamin K intake. Raw kale contains goitrogens that may affect thyroid function in large amounts - cooking reduces this. Start with small amounts if new to kale to assess digestive tolerance.",
    faqs: [
      {
        question: "How many calories are in a cup of kale?",
        answer: "One cup of raw chopped kale (about 67g) contains only 33 calories. Per 100g, kale has just 49 calories, making it one of the most nutrient-dense foods per calorie. Cooked kale is similar at 28 calories per cup due to volume reduction."
      },
      {
        question: "Is kale healthier than spinach?",
        answer: "Both are extremely healthy, but kale has more vitamin C, vitamin K, and fiber, while spinach has more iron, folate, and vitamin A. Kale is lower in oxalates than spinach, making its minerals more bioavailable. Including both in your diet provides complementary benefits."
      },
      {
        question: "Is it OK to eat kale every day?",
        answer: "Yes, eating kale daily is healthy for most people and provides consistent antioxidants, vitamins, and fiber. However, those on blood thinners should maintain steady vitamin K intake. Rotating with other greens ensures nutrient variety."
      },
      {
        question: "Is raw or cooked kale healthier?",
        answer: "Both have benefits. Raw kale retains more vitamin C and enzymes, while cooking increases absorption of some nutrients and reduces goitrogens. Lightly sautéing or steaming preserves most nutrients while improving digestibility. Vary your preparation methods."
      }
    ]
  },

  "cashews": {
    description: "Cashews are kidney-shaped nuts that grow from the cashew apple tree, native to Brazil. Unlike most nuts, cashews are never sold raw because the shell contains toxic compounds. Known for their rich, buttery flavor and creamy texture, cashews are popular both as snacks and as a base for dairy-free alternatives like cashew milk and cheese.",
    healthBenefits: [
      "Rich in heart-healthy monounsaturated fats similar to olive oil",
      "Excellent source of copper, essential for energy and iron metabolism",
      "High in magnesium for muscle function and bone health",
      "Contains zinc for immune function and wound healing",
      "Good source of plant-based protein (18g per 100g)",
      "Lower in fat than most nuts, making them a lighter choice"
    ],
    howToEat: "Cashews can be eaten roasted or raw (processed to remove toxins), added to stir-fries, blended into creamy sauces and dressings, or made into cashew butter. Soak and blend for dairy-free cream or cheese. A serving is about 18 cashews (1 ounce). They pair well with both sweet and savory dishes.",
    storageAndSelection: "Choose cashews that are plump and uniform in color without dark spots. Store in an airtight container in a cool, dark place for up to 3 months, or refrigerate/freeze for longer storage. Unsalted varieties offer the most versatility. Cashew pieces are more economical for cooking.",
    dietaryConsiderations: "Cashews are naturally gluten-free and suitable for vegan, vegetarian, and paleo diets. While calorie-dense (553 cal per 100g), their protein, fat, and fiber promote satiety. Those with tree nut allergies must avoid cashews. Lower in fiber than some nuts but higher in carbs, making them less ideal for strict keto.",
    faqs: [
      {
        question: "How many calories are in 10 cashews?",
        answer: "Ten cashews (about 15g) contain approximately 83 calories. A standard 1-ounce serving (about 18 cashews) has 157 calories. Per 100g, cashews have 553 calories, making portion control important despite their health benefits."
      },
      {
        question: "Are cashews good for weight loss?",
        answer: "Cashews can support weight loss when eaten in moderation. Despite being calorie-dense, their protein (18g per 100g), healthy fats, and magnesium promote satiety. Studies show nut eaters tend to have lower body weights. Stick to a 1-ounce serving (18 nuts, 157 calories)."
      },
      {
        question: "What happens if I eat too many cashews?",
        answer: "Eating too many cashews can lead to excess calorie intake and weight gain. High sodium in salted varieties can affect blood pressure. Some people experience digestive discomfort from large amounts. The high copper content could be concerning with extreme overconsumption. Stick to 1-2 ounces daily."
      },
      {
        question: "Are cashews healthier than almonds?",
        answer: "Both are healthy with different strengths. Almonds have more fiber (12g vs 3g per 100g), vitamin E, and calcium. Cashews have more copper, zinc, and iron, plus fewer calories. Almonds are better for keto; cashews are creamier for dairy alternatives. Both are excellent choices."
      }
    ]
  },

  "onion": {
    description: "Onions are one of the most widely used vegetables in cuisines worldwide, prized for their ability to add depth and flavor to dishes. Part of the allium family alongside garlic and leeks, onions contain unique sulfur compounds that provide both their pungent aroma and many health benefits. Available in yellow, white, red, and sweet varieties, each offers slightly different flavors.",
    healthBenefits: [
      "Rich in quercetin, a powerful antioxidant with anti-inflammatory properties",
      "Contains sulfur compounds that may support heart health",
      "Good source of vitamin C for immune function",
      "Provides prebiotic fiber that feeds beneficial gut bacteria",
      "May help regulate blood sugar levels",
      "Contains chromium which helps with insulin function"
    ],
    howToEat: "Onions can be eaten raw in salads and sandwiches, sautéed as a base for countless dishes, caramelized for sweetness, grilled for smoky flavor, or pickled for tang. Cooking mellows their sharp flavor. To reduce tears when cutting, chill onions first or cut near a vent. Different varieties suit different uses - red for raw, yellow for cooking, sweet for grilling.",
    storageAndSelection: "Choose firm onions with dry, papery skins and no soft spots or sprouting. Store whole onions in a cool, dark, well-ventilated place (not the refrigerator) for up to 2 months. Once cut, wrap tightly and refrigerate for up to 10 days. Sweet onions have shorter shelf life.",
    dietaryConsiderations: "Onions are very low in calories (40 per 100g) and naturally vegan and gluten-free. They're suitable for most diets including keto and paleo. Some people have difficulty digesting raw onions due to FODMAPs - cooking improves digestibility. Those with acid reflux may want to limit intake.",
    faqs: [
      {
        question: "How many calories are in one onion?",
        answer: "A medium onion (about 110g) contains approximately 44 calories. Per 100g, onions have just 40 calories with 9g of carbohydrates. This makes them an excellent low-calorie way to add flavor and nutrition to meals."
      },
      {
        question: "Are onions healthy to eat every day?",
        answer: "Yes, eating onions daily provides beneficial antioxidants, particularly quercetin, plus prebiotic fiber for gut health. Their sulfur compounds support heart health. Most people can eat onions daily without issues, though those with IBS may need to limit raw onion intake."
      },
      {
        question: "Which onion is healthiest?",
        answer: "Red onions are considered healthiest as they contain the most quercetin and anthocyanins (antioxidants that give them their color). Yellow onions are also excellent with high quercetin content. White onions have fewer antioxidants but are milder and still nutritious."
      },
      {
        question: "Do onions lose nutrients when cooked?",
        answer: "Cooking reduces some vitamin C and sulfur compounds in onions, but also makes certain antioxidants more bioavailable. Quercetin remains stable with cooking. Sautéing or roasting retains most benefits. For maximum nutrition, include both raw and cooked onions in your diet."
      }
    ]
  },

  "protein-bar": {
    description: "Protein bars are convenient, portable snacks designed to provide a concentrated source of protein. They range from minimally processed whole food bars to highly engineered supplements. Popular among athletes, busy professionals, and those seeking convenient nutrition, protein bars vary widely in their ingredients, protein sources, and overall nutritional quality.",
    healthBenefits: [
      "Provides convenient, portable protein for muscle maintenance and repair",
      "Can help meet daily protein requirements, especially for active individuals",
      "Many varieties offer fiber for digestive health and satiety",
      "Some include added vitamins and minerals for comprehensive nutrition",
      "Can support weight management by promoting fullness between meals",
      "Useful post-workout recovery option when whole foods aren't available"
    ],
    howToEat: "Protein bars work well as post-workout recovery, mid-afternoon snacks, or meal replacements in a pinch. Choose bars with 15-25g protein and minimal added sugar. Read labels carefully - many bars are essentially candy bars with protein added. Whole food bars with recognizable ingredients are generally healthier than heavily processed options.",
    storageAndSelection: "Look for bars with 15-25g protein, under 10g added sugar, and recognizable ingredients. Whey, casein, and plant proteins (pea, soy) are quality sources. Store in a cool, dry place. Check expiration dates. Refrigeration can improve texture of some bars. Compare nutrition labels as quality varies enormously.",
    dietaryConsiderations: "Protein bars range from 150-400+ calories depending on size and ingredients. Many contain sugar alcohols that can cause digestive issues in some people. Those with dairy allergies should choose plant-based options. Watch for hidden sugars under various names. Whole food protein sources are generally preferable when available.",
    faqs: [
      {
        question: "How many calories are in a protein bar?",
        answer: "Protein bars typically contain 150-300 calories, though some exceed 400 calories. Per 100g, they average 350-450 calories depending on ingredients. Lower-calorie bars (150-200 cal) usually have less protein (10-15g), while higher-calorie bars (250-350 cal) often have 20-30g protein."
      },
      {
        question: "Are protein bars good for weight loss?",
        answer: "Protein bars can support weight loss when used strategically - the protein promotes satiety and preserves muscle. However, many bars are high in calories and sugar. Choose bars with high protein (20g+), low sugar (<5g), and moderate calories (200 or less) for weight loss. Don't use them as candy replacements."
      },
      {
        question: "Is it OK to eat a protein bar every day?",
        answer: "Eating one quality protein bar daily is generally fine for most people, especially if it helps meet protein needs. However, whole food protein sources (meat, fish, eggs, legumes) are preferable when possible. Daily consumption is fine if the bar has quality ingredients and fits your calorie goals."
      },
      {
        question: "What should I look for in a protein bar?",
        answer: "Look for: 15-25g protein from quality sources (whey, casein, pea), under 10g sugar, at least 3g fiber, recognizable ingredients, and appropriate calories for your goals. Avoid: excessive sugar alcohols, artificial sweeteners if sensitive, and bars with candy-like ingredient lists."
      }
    ]
  },

  "taco": {
    description: "Tacos are a traditional Mexican dish consisting of a tortilla filled with various ingredients. From authentic street tacos with simple meat and onion to loaded American-style tacos with cheese and sour cream, this versatile food can range from a light, nutritious meal to an indulgent treat depending on preparation and ingredients.",
    healthBenefits: [
      "Corn tortillas provide whole grain fiber and are naturally gluten-free",
      "Can be an excellent vehicle for lean proteins like fish, chicken, or beans",
      "Fresh toppings like salsa, cilantro, and lime add vitamins with minimal calories",
      "Customizable to fit various dietary needs and preferences",
      "Bean tacos offer plant protein and fiber for heart health",
      "Tomato-based salsas provide lycopene and vitamin C"
    ],
    howToEat: "Build healthier tacos by choosing corn over flour tortillas, lean proteins (grilled fish, chicken, or beans), plenty of fresh vegetables, and limiting cheese and sour cream. Use salsa, pico de gallo, and lime for flavor without excess calories. Control portions - 2-3 tacos typically make a satisfying meal. Soft tacos are generally lower in calories than fried shells.",
    storageAndSelection: "Fresh tacos should be eaten immediately. Store leftover components separately - meat refrigerated up to 3 days, tortillas in original packaging. When eating out, choose grilled over fried, and ask for sauces on the side. Street-style tacos with simple toppings are often healthier than loaded American versions.",
    dietaryConsiderations: "Taco nutrition varies dramatically based on ingredients. A simple fish taco might have 200 calories while a loaded beef taco could exceed 500. Corn tortillas are gluten-free; flour contains gluten. Those watching sodium should limit cheese and seasoning packets. Bean and vegetable tacos offer excellent plant-based options.",
    faqs: [
      {
        question: "How many calories are in one taco?",
        answer: "Calories vary widely: a simple street taco has 150-200 calories, while a loaded American-style taco can have 300-500+ calories. A basic beef taco with cheese is about 210 calories. Fish tacos average 250-300 calories. The tortilla contributes 50-150 calories depending on size and type."
      },
      {
        question: "Are tacos healthy or unhealthy?",
        answer: "Tacos can be very healthy or unhealthy depending on ingredients. Healthy versions use corn tortillas, lean proteins (fish, chicken, beans), lots of vegetables, and fresh salsa. Unhealthy versions have fried shells, fatty meats, excessive cheese, and sour cream. It's all about how you build them."
      },
      {
        question: "Are corn or flour tortillas healthier?",
        answer: "Corn tortillas are generally healthier - they're lower in calories (50 vs 90-150), contain whole grain fiber, and are naturally gluten-free. Flour tortillas are higher in calories, often contain added fats, and have less fiber. However, flour tortillas provide more protein and iron."
      },
      {
        question: "How many tacos should I eat?",
        answer: "For a balanced meal, 2-3 tacos is typically appropriate, providing 400-600 calories depending on ingredients. One taco is a light snack. More than 3 tacos can quickly exceed calorie needs. Fill up on vegetable toppings and pair with a side salad to make 2 tacos more satisfying."
      }
    ]
  },

  "cherry": {
    description: "Cherries are stone fruits prized for their sweet-tart flavor and impressive nutritional profile. Available in sweet varieties (Bing, Rainier) and tart/sour varieties (Montmorency), cherries are rich in antioxidants and anti-inflammatory compounds. They have a short growing season, making fresh cherries a special summer treat, though frozen and dried options are available year-round.",
    healthBenefits: [
      "Exceptionally high in antioxidants, particularly anthocyanins that give them their red color",
      "Tart cherries contain melatonin, which may improve sleep quality",
      "Anti-inflammatory compounds may reduce muscle soreness after exercise",
      "May help lower uric acid levels, beneficial for gout sufferers",
      "Good source of potassium for heart health and blood pressure",
      "Contains vitamin C and fiber for immune and digestive health"
    ],
    howToEat: "Eat fresh cherries as a snack, add to salads, blend into smoothies, or use in baking. Tart cherry juice is popular for sleep and exercise recovery. Frozen cherries work well in smoothies and cooking. Dried cherries add sweetness to trail mix and oatmeal (but are higher in sugar). Remove pits before eating - cherry pitters make this easy.",
    storageAndSelection: "Choose firm, glossy cherries with green stems attached. Avoid soft, bruised, or leaking fruit. Store unwashed in the refrigerator for up to a week. Wash just before eating. Cherries freeze well - spread on a baking sheet, freeze, then transfer to bags for up to 12 months.",
    dietaryConsiderations: "Cherries are naturally vegan, gluten-free, and relatively low in calories (63 per 100g for sweet, 50 for tart). The natural sugars (13g per 100g) are moderate for fruit. Dried cherries are much higher in sugar and calories due to concentration. Those with stone fruit allergies should avoid cherries.",
    faqs: [
      {
        question: "How many calories are in 10 cherries?",
        answer: "Ten sweet cherries (about 70g) contain approximately 44 calories. Per 100g, sweet cherries have 63 calories, while tart cherries have about 50 calories. A cup of cherries (about 140g) has roughly 87 calories - a satisfying low-calorie snack."
      },
      {
        question: "Are cherries good for weight loss?",
        answer: "Yes, cherries can support weight loss. With only 63 calories per 100g and high water content, they're satisfying without being calorie-dense. Their fiber and natural sweetness can help curb sugar cravings. The anti-inflammatory benefits may also support metabolic health."
      },
      {
        question: "Do cherries help you sleep?",
        answer: "Yes, especially tart cherries. They're one of the few natural food sources of melatonin, the sleep hormone. Studies show tart cherry juice can increase sleep time and quality. Drink 8oz of tart cherry juice or eat a handful of cherries 1-2 hours before bed."
      },
      {
        question: "How many cherries should I eat a day?",
        answer: "One cup (about 20-25 cherries) is a healthy daily serving, providing antioxidants and nutrients without excess sugar. For sleep benefits, research suggests 8oz of tart cherry juice or equivalent. Eating more is fine but adds calories and sugar - moderation is key."
      }
    ]
  },

  "hot-dog": {
    description: "Hot dogs are processed meat sausages typically made from beef, pork, or a combination, served in a sliced bun. An iconic American food associated with baseball games and cookouts, hot dogs are convenient but are considered a processed meat with associated health concerns. Quality varies significantly from highly processed varieties to premium all-beef or artisan options.",
    healthBenefits: [
      "Provides protein (about 10g per hot dog) for muscle maintenance",
      "Good source of B vitamins, particularly B12 for nerve function",
      "Contains zinc and selenium for immune support",
      "All-beef varieties avoid pork for those with dietary restrictions",
      "Quick, convenient protein source for active lifestyles",
      "Turkey and chicken varieties offer leaner alternatives"
    ],
    howToEat: "Hot dogs can be grilled, boiled, steamed, or pan-fried. Choose quality all-beef or uncured varieties when possible. Load up on vegetable toppings like sauerkraut, onions, and peppers for added nutrition. Limit high-calorie toppings like chili and cheese. Consider turkey or chicken dogs for lower fat options. Whole grain buns add fiber.",
    storageAndSelection: "Choose hot dogs with shorter ingredient lists and recognizable ingredients. Look for 'uncured' or 'no nitrates added' options. All-beef hot dogs are generally higher quality than mixed-meat varieties. Store unopened in refrigerator until expiration date; once opened, use within a week. Freeze for up to 2 months.",
    dietaryConsiderations: "Hot dogs are processed meats, which the WHO links to increased cancer risk with regular consumption. They're high in sodium (500-600mg per dog) and saturated fat. Occasional consumption as part of a varied diet is generally fine. Those watching sodium or following heart-healthy diets should limit intake. Turkey dogs are lower in fat but often high in sodium.",
    faqs: [
      {
        question: "How many calories are in a hot dog?",
        answer: "A typical beef hot dog (without bun) has about 150-180 calories. With a standard bun, that increases to 270-310 calories. Per 100g, hot dogs average about 290 calories. Turkey dogs are lower at 100-130 calories. Toppings can add 50-200+ additional calories."
      },
      {
        question: "Are hot dogs bad for you?",
        answer: "Hot dogs are processed meats, which health organizations recommend limiting. They're high in sodium, saturated fat, and often contain preservatives like nitrates. Occasional consumption is unlikely to cause harm, but regular intake is associated with increased health risks. Choose quality brands and limit frequency."
      },
      {
        question: "Are turkey hot dogs healthier?",
        answer: "Turkey hot dogs are lower in fat and calories (100-130 vs 150-180) but often just as high in sodium. They're a better choice for those watching fat intake, but still processed meat with similar health concerns. Check labels - some turkey dogs have more additives than beef varieties."
      },
      {
        question: "How often can I eat hot dogs?",
        answer: "Health guidelines suggest limiting processed meats to occasional consumption - perhaps once or twice a month rather than weekly. If you enjoy hot dogs, choose quality all-beef or uncured varieties, load with vegetable toppings, and balance with plenty of whole foods in your overall diet."
      }
    ]
  },

  "quinoa": {
    description: "Quinoa is a nutrient-dense seed that's prepared and eaten like a grain. Native to the Andes mountains of South America, quinoa has been cultivated for thousands of years and was considered sacred by the Incas. It's one of the few plant foods that contains all nine essential amino acids, making it a complete protein - rare for plant-based foods.",
    healthBenefits: [
      "Complete protein source with all essential amino acids (8g protein per cup cooked)",
      "High in fiber (5g per cup) supporting digestive health and satiety",
      "Excellent source of manganese, magnesium, and phosphorus for bone health",
      "Contains iron and folate important for blood health",
      "Naturally gluten-free, safe for celiac disease",
      "Low glycemic index helps maintain steady blood sugar levels"
    ],
    howToEat: "Rinse quinoa before cooking to remove bitter saponins. Cook 1 part quinoa to 2 parts water for 15-20 minutes until fluffy. Use as a base for grain bowls, add to salads, use in place of rice, make breakfast porridge, or add to soups. Red and black quinoa are slightly crunchier than white. Pre-rinsed quinoa is available for convenience.",
    storageAndSelection: "Choose from white (mildest), red (nuttier), or black (earthiest) quinoa - all have similar nutrition. Store uncooked quinoa in an airtight container in a cool, dark place for up to 2 years. Cooked quinoa keeps refrigerated for 5-7 days or frozen for up to 8 months.",
    dietaryConsiderations: "Quinoa is naturally gluten-free, vegan, and suitable for most diets. At 120 calories per cooked cup, it's moderate in calories with excellent nutrition. The complete protein makes it especially valuable for vegetarians and vegans. Contains oxalates, so those with kidney stone history should moderate intake.",
    faqs: [
      {
        question: "How many calories are in a cup of quinoa?",
        answer: "One cup of cooked quinoa contains approximately 222 calories. Per 100g (cooked), quinoa has about 120 calories. Uncooked quinoa has 368 calories per 100g but triples in volume when cooked. The calorie density is similar to rice and other grains."
      },
      {
        question: "Is quinoa better than rice?",
        answer: "Quinoa is generally more nutritious than white rice - it has more protein (8g vs 4g per cup), more fiber (5g vs 0.6g), and is a complete protein. Brown rice is closer nutritionally but still lacks complete protein. Quinoa also has a lower glycemic index. Both can be part of a healthy diet."
      },
      {
        question: "Is quinoa good for weight loss?",
        answer: "Yes, quinoa supports weight loss through high protein (8g per cup) and fiber (5g per cup) that promote satiety. Its low glycemic index prevents blood sugar spikes that trigger hunger. Studies show high-protein grains help with weight management. Use it to replace refined grains."
      },
      {
        question: "Why do you need to rinse quinoa?",
        answer: "Quinoa has a natural coating called saponins that can taste bitter or soapy. Rinsing removes this coating and improves flavor. Place quinoa in a fine-mesh strainer and rinse under running water for 1-2 minutes. Some brands sell pre-rinsed quinoa for convenience."
      }
    ]
  },

  "coffee": {
    description: "Coffee is one of the world's most popular beverages, made from roasted coffee beans. Beyond its energizing caffeine content, coffee is surprisingly rich in antioxidants and has been linked to numerous health benefits when consumed in moderation. From espresso to cold brew, coffee comes in countless preparations that can be enjoyed black or with various additions.",
    healthBenefits: [
      "Rich in antioxidants - coffee is the largest source of antioxidants in the Western diet",
      "Caffeine improves mental alertness, focus, and physical performance",
      "Associated with reduced risk of type 2 diabetes, Parkinson's disease, and liver disease",
      "May support healthy liver function and reduce liver fat",
      "Contains essential nutrients including riboflavin (B2), niacin (B3), and potassium",
      "Linked to improved mood and reduced risk of depression"
    ],
    howToEat: "Black coffee provides benefits with minimal calories (2 cal per cup). Adding cream, sugar, or flavored syrups significantly increases calories. Moderate consumption is 3-4 cups daily (400mg caffeine max). Avoid coffee late in the day if it affects sleep. Cold brew is less acidic than hot coffee. Decaf retains most antioxidants with minimal caffeine.",
    storageAndSelection: "Store whole beans in an airtight container away from light, heat, and moisture. Ground coffee loses freshness faster than whole beans. Use within 2-4 weeks of roasting for best flavor. Freeze for longer storage. Choose quality beans from reputable roasters for best taste and potential benefits.",
    dietaryConsiderations: "Black coffee has virtually no calories and fits all diets. Caffeine may cause anxiety, insomnia, or rapid heartbeat in sensitive individuals. Pregnant women should limit caffeine to 200mg daily. Coffee can interfere with iron absorption - drink between meals if iron-deficient. May worsen acid reflux in some people.",
    faqs: [
      {
        question: "How many calories are in a cup of coffee?",
        answer: "Black coffee has only 2 calories per 8oz cup. Adding milk adds 10-80 calories depending on type and amount. Sugar adds 16 calories per teaspoon. A typical latte has 100-200 calories. Flavored coffee drinks can exceed 400 calories. Per 100ml, black coffee has less than 1 calorie."
      },
      {
        question: "Is coffee good or bad for you?",
        answer: "For most adults, moderate coffee consumption (3-4 cups daily) is associated with health benefits including reduced risk of several diseases and high antioxidant intake. However, excess caffeine can cause anxiety, sleep issues, and rapid heartbeat. Individual tolerance varies. Those with certain conditions should limit intake."
      },
      {
        question: "How much coffee is too much?",
        answer: "Most health organizations recommend limiting caffeine to 400mg daily (about 4 cups of coffee) for healthy adults. Pregnant women should stay under 200mg. Signs of too much caffeine include anxiety, insomnia, rapid heartbeat, and digestive issues. Individual tolerance varies significantly."
      },
      {
        question: "Is decaf coffee healthy?",
        answer: "Yes, decaf coffee retains most of the antioxidants and health benefits of regular coffee with 97% less caffeine. Studies show decaf is associated with similar reduced disease risks as regular coffee. It's a good option for those sensitive to caffeine or drinking coffee later in the day."
      }
    ]
  },

  "steak": {
    description: "Steak refers to cuts of beef sliced perpendicular to the muscle fibers, typically grilled, pan-seared, or broiled. From ribeye to filet mignon, different cuts offer varying levels of tenderness, marbling, and flavor. Beef steak is one of the most protein-dense foods available and provides essential nutrients that are highly bioavailable.",
    healthBenefits: [
      "Excellent complete protein source with all essential amino acids (26g per 100g)",
      "Rich in highly bioavailable heme iron, more easily absorbed than plant iron",
      "Outstanding source of vitamin B12 for nerve function and energy",
      "Contains zinc and selenium for immune function",
      "Provides creatine and carnosine that support muscle and brain function",
      "Good source of phosphorus for bone health"
    ],
    howToEat: "Let steak come to room temperature before cooking for even doneness. Season simply with salt and pepper. Cook to your preferred doneness (145°F for medium). Let rest 5 minutes before cutting to retain juices. Leaner cuts like sirloin and filet mignon have less saturated fat than ribeye. Trim visible fat to reduce calories.",
    storageAndSelection: "Choose steak with bright red color and firm texture. Marbling (white fat streaks) indicates flavor and tenderness. Store in the coldest part of refrigerator up to 3-5 days; freeze for up to 6 months. Grass-fed beef may have more omega-3s but less marbling than grain-fed. USDA grades (Prime, Choice, Select) indicate quality.",
    dietaryConsiderations: "Steak fits low-carb, keto, paleo, and high-protein diets. Red meat consumption recommendations vary - many suggest limiting to 2-3 servings weekly. Choose leaner cuts to reduce saturated fat. Grass-fed beef has a slightly better fatty acid profile. Cooking method matters - grilling at very high temperatures can create carcinogenic compounds.",
    faqs: [
      {
        question: "How many calories are in a steak?",
        answer: "Calories vary by cut: 6oz ribeye has about 450 calories, sirloin about 300, filet mignon about 350. Per 100g, lean beef steak averages 250 calories, while fattier cuts like ribeye can exceed 300 calories. Cooking method and added fats affect final calorie count."
      },
      {
        question: "Is steak healthy to eat?",
        answer: "Steak provides excellent nutrition - complete protein, B12, iron, and zinc in highly bioavailable forms. However, red meat should be consumed in moderation (2-3 servings weekly per many guidelines). Choose leaner cuts, reasonable portions (6oz), and balance with plenty of vegetables, fish, and plant proteins."
      },
      {
        question: "Which steak is healthiest?",
        answer: "Leaner cuts are healthiest: sirloin, tenderloin (filet mignon), flank, and eye of round have less saturated fat. Per 100g, sirloin has about 5g fat vs ribeye's 15g+. Grass-fed beef has slightly more omega-3s. Any cut is fine in moderation - just trim visible fat and control portions."
      },
      {
        question: "How often should I eat steak?",
        answer: "Most health guidelines suggest limiting red meat to 2-3 servings (about 12-18oz total) per week. Enjoy steak as part of a varied diet that includes fish, poultry, and plant proteins. Quality matters - choose grass-fed when possible and avoid charring, which creates potentially harmful compounds."
      }
    ]
  }
}

// Default content for foods not specifically defined
const defaultContent: FoodEducationContent = {
  description: "This nutritious food can be part of a healthy, balanced diet. Understanding its nutritional profile helps you make informed choices about incorporating it into your meals and snacks.",
  healthBenefits: [
    "Provides essential nutrients your body needs for daily functions",
    "Can be part of a balanced, varied diet",
    "Offers macronutrients (protein, carbohydrates, or fats) for energy",
    "May contain vitamins and minerals supporting overall health",
    "Natural foods typically offer benefits over highly processed alternatives"
  ],
  howToEat: "This food can be prepared in various ways to suit your taste preferences and dietary needs. Experiment with different cooking methods and seasonings to find preparations you enjoy. Pairing with other nutritious foods creates balanced, satisfying meals.",
  storageAndSelection: "Choose fresh products that look and smell appropriate for the food type. Store properly according to food safety guidelines - refrigerate perishables promptly and use within recommended timeframes. Check expiration dates and inspect packaging for damage.",
  dietaryConsiderations: "Consider how this food fits into your overall dietary pattern and health goals. Portion size matters - even nutritious foods should be consumed in appropriate amounts. Those with allergies, intolerances, or specific health conditions should consult healthcare providers about individual dietary needs."
}

/**
 * Get rich content for a food item
 */
export function getFoodContent(slug: string): FoodEducationContent {
  return foodContent[slug.toLowerCase()] || defaultContent
}

/**
 * Get list of foods with custom content
 */
export function getFoodsWithContent(): string[] {
  return Object.keys(foodContent)
}
