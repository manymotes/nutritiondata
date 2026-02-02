/**
 * Rich food content for nutrition education and SEO
 * Provides detailed information about popular foods
 */

export interface FoodEducationContent {
  description: string
  healthBenefits: string[]
  howToEat: string
  storageAndSelection: string
  dietaryConsiderations: string
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
    dietaryConsiderations: "Rice is naturally vegan, vegetarian, and gluten-free. Brown rice offers more fiber and nutrients but takes longer to cook. Those managing blood sugar should consider brown or wild rice which have lower glycemic indices than white rice. Portion control is important as rice is calorie-dense."
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
    dietaryConsiderations: "French fries are naturally gluten-free (when not coated) and vegan. The main concern is the high fat content from frying and potential formation of acrylamide at high temperatures. Baked or air-fried versions are healthier alternatives. Portion control is important as fries are calorie-dense. Consider as an occasional treat rather than a dietary staple."
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
    dietaryConsiderations: "Traditional ice cream is high in saturated fat and sugar. Non-dairy alternatives include coconut, almond, oat, and soy-based options. Sugar-free varieties use alternative sweeteners - check labels for specific types. Lactose-free versions are available for those with intolerance. Consider frozen yogurt or fruit sorbet as lighter alternatives."
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
