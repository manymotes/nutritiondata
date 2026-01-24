import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

interface PageProps {
  params: {
    slug: string
  }
}

interface BlogArticle {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  publishDate: string
  content: React.ReactNode
}

const ARTICLES: Record<string, BlogArticle> = {
  'low-calorie-foods-for-weight-loss': {
    slug: 'low-calorie-foods-for-weight-loss',
    title: 'Low Calorie Foods for Weight Loss: 30 Best Options',
    description: 'Discover the best low calorie foods that help you lose weight while staying full and satisfied. Science-backed nutrition guide with calories per 100g.',
    category: 'Weight Loss',
    readTime: '8 min read',
    publishDate: '2026-01-24',
    content: (
      <div>
        <p className="lead text-xl text-gray-700 mb-6">
          Looking to lose weight without feeling hungry? The secret is choosing foods that are low in calories but high in volume and nutrients. This comprehensive guide reveals the 30 best low calorie foods that will help you create a sustainable calorie deficit while keeping you satisfied.
        </p>

        <h2>Why Low Calorie Foods Work for Weight Loss</h2>
        <p>
          Weight loss fundamentally comes down to creating a calorie deficit - consuming fewer calories than you burn. However, the key to sustainable weight loss is doing this without constant hunger. Low calorie, high-volume foods allow you to eat satisfying portions while keeping your total calorie intake low.
        </p>
        <p>
          Foods with low calorie density (calories per gram) let you eat larger portions for fewer calories. This triggers stretch receptors in your stomach, signaling fullness to your brain - all while maintaining your calorie deficit.
        </p>

        <h2>Top 30 Low Calorie Foods (Under 50 Calories per 100g)</h2>

        <h3>Vegetables (10-50 calories per 100g)</h3>
        <ul>
          <li><strong>Celery (14 cal)</strong> - 95% water, extremely filling with minimal calories</li>
          <li><strong>Cucumber (16 cal)</strong> - Hydrating and crunchy, perfect for snacking</li>
          <li><strong>Lettuce (15 cal)</strong> - Bulk up salads without adding calories</li>
          <li><strong>Zucchini (17 cal)</strong> - Versatile vegetable, great as pasta alternative</li>
          <li><strong>Spinach (23 cal)</strong> - Nutrient-dense leafy green packed with vitamins</li>
          <li><strong>Broccoli (34 cal)</strong> - High in fiber and protein for a vegetable</li>
          <li><strong>Cauliflower (25 cal)</strong> - Low-carb rice alternative, very filling</li>
          <li><strong>Tomato (18 cal)</strong> - Rich in antioxidants, adds flavor to meals</li>
          <li><strong>Bell Pepper (31 cal)</strong> - Sweet, crunchy, vitamin C powerhouse</li>
          <li><strong>Asparagus (20 cal)</strong> - Natural diuretic, helps reduce water weight</li>
        </ul>

        <h3>Fruits (30-50 calories per 100g)</h3>
        <ul>
          <li><strong>Strawberry (32 cal)</strong> - Sweet treat with minimal sugar impact</li>
          <li><strong>Watermelon (30 cal)</strong> - Hydrating summer fruit, mostly water</li>
          <li><strong>Grapefruit (42 cal)</strong> - May boost metabolism and fat burning</li>
          <li><strong>Cantaloupe (34 cal)</strong> - Sweet melon with high water content</li>
          <li><strong>Peach (39 cal)</strong> - Juicy stone fruit, naturally sweet</li>
          <li><strong>Orange (47 cal)</strong> - Fiber-rich citrus, more filling than juice</li>
        </ul>

        <h3>Proteins (30-50 calories per 100g)</h3>
        <ul>
          <li><strong>Egg whites (52 cal)</strong> - Pure protein with zero fat</li>
          <li><strong>White fish like cod (82 cal)</strong> - Lean protein, very low fat</li>
          <li><strong>Shrimp (99 cal)</strong> - High protein, minimal calories</li>
        </ul>

        <h3>Other Low Calorie Options</h3>
        <ul>
          <li><strong>Mushrooms (22 cal)</strong> - Meaty texture, umami flavor</li>
          <li><strong>Kale (35 cal)</strong> - Superfood packed with nutrients</li>
          <li><strong>Cabbage (25 cal)</strong> - Budget-friendly, bulk cooking staple</li>
          <li><strong>Green beans (31 cal)</strong> - Fiber-rich side dish</li>
          <li><strong>Brussels sprouts (43 cal)</strong> - Cruciferous vegetable, very filling</li>
        </ul>

        <h2>How to Use Low Calorie Foods for Maximum Weight Loss</h2>

        <h3>1. Fill Half Your Plate with Vegetables</h3>
        <p>
          Start every meal by filling half your plate with non-starchy vegetables. This ensures you get volume and nutrients while naturally limiting higher-calorie foods. A plate with 200g of vegetables adds only 40-80 calories but takes up significant space.
        </p>

        <h3>2. Start Meals with Soup or Salad</h3>
        <p>
          Research shows that eating a low-calorie soup or salad before your main course reduces total calorie intake by 100-150 calories per meal. The volume fills your stomach, triggering early satiety signals.
        </p>

        <h3>3. Swap High-Calorie for Low-Calorie Alternatives</h3>
        <p>
          Simple swaps create massive calorie savings:
        </p>
        <ul>
          <li>Zucchini noodles instead of pasta: Save 180 calories per cup</li>
          <li>Cauliflower rice instead of white rice: Save 160 calories per cup</li>
          <li>Lettuce wraps instead of tortillas: Save 100+ calories per wrap</li>
          <li>Spaghetti squash instead of spaghetti: Save 170 calories per cup</li>
        </ul>

        <h3>4. Snack Smart with Volume</h3>
        <p>
          When hunger strikes between meals, reach for high-volume, low-calorie snacks:
        </p>
        <ul>
          <li>2 cups of watermelon chunks (90 calories)</li>
          <li>1 cup of cucumber slices with salsa (25 calories)</li>
          <li>2 cups of air-popped popcorn (60 calories)</li>
          <li>10 cherry tomatoes (30 calories)</li>
        </ul>

        <h2>Building a Low Calorie Meal Plan</h2>

        <h3>Sample Day (1,200 calories)</h3>

        <p><strong>Breakfast (250 calories):</strong></p>
        <ul>
          <li>3 egg white omelet with spinach, tomatoes, and mushrooms</li>
          <li>1 cup strawberries</li>
          <li>Black coffee</li>
        </ul>

        <p><strong>Lunch (350 calories):</strong></p>
        <ul>
          <li>Large salad: 3 cups mixed lettuce, cucumber, bell peppers</li>
          <li>100g grilled chicken breast</li>
          <li>Balsamic vinegar dressing</li>
          <li>1 small apple</li>
        </ul>

        <p><strong>Snack (100 calories):</strong></p>
        <ul>
          <li>2 cups watermelon</li>
          <li>10 almonds</li>
        </ul>

        <p><strong>Dinner (450 calories):</strong></p>
        <ul>
          <li>150g baked cod</li>
          <li>2 cups roasted broccoli and cauliflower</li>
          <li>1 cup zucchini noodles with marinara</li>
        </ul>

        <p><strong>Evening Snack (50 calories):</strong></p>
        <ul>
          <li>1 cup cucumber slices</li>
          <li>Sugar-free flavored water</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>

        <h3>1. Going Too Low in Calories</h3>
        <p>
          While low calorie foods are powerful for weight loss, don't slash calories too drastically. Eating below 1,200 calories daily (for women) or 1,500 (for men) can slow your metabolism, cause muscle loss, and lead to nutritional deficiencies.
        </p>

        <h3>2. Forgetting About Protein</h3>
        <p>
          While vegetables are low in calories, you still need adequate protein to preserve muscle mass during weight loss. Aim for 0.7-1g of protein per pound of body weight daily. Include lean proteins like chicken breast, fish, or egg whites with every meal.
        </p>

        <h3>3. Ignoring Healthy Fats</h3>
        <p>
          Some fat is essential for hormone production and nutrient absorption. Include small amounts of healthy fats like avocado, nuts, or olive oil even while focusing on low calorie foods.
        </p>

        <h2>Science Behind Low Calorie Dieting</h2>
        <p>
          Studies show that people who focus on low calorie density foods naturally consume 300-400 fewer calories per day without feeling deprived. The volumetrics approach - eating foods with high water and fiber content - has been shown to produce sustainable weight loss of 1-2 pounds per week.
        </p>
        <p>
          Research published in the American Journal of Clinical Nutrition found that participants who increased their intake of low calorie density foods lost significantly more weight over 6 months compared to those simply restricting portions.
        </p>

        <h2>Practical Tips for Success</h2>
        <ul>
          <li><strong>Meal prep vegetables</strong> - Chop vegetables Sunday for easy weekday access</li>
          <li><strong>Keep frozen vegetables stocked</strong> - Just as nutritious, never spoil</li>
          <li><strong>Use large plates</strong> - Fill them with low calorie foods for visual satisfaction</li>
          <li><strong>Season generously</strong> - Herbs and spices add flavor without calories</li>
          <li><strong>Stay hydrated</strong> - Water increases the volume effect of fibrous foods</li>
          <li><strong>Track your intake</strong> - Use an app to ensure you're in a deficit</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Low calorie foods are your secret weapon for sustainable weight loss. By filling your plate with vegetables, fruits, and lean proteins that are naturally low in calories but high in volume, you can create the calorie deficit needed for weight loss without the constant hunger that derails most diets.
        </p>
        <p>
          Start by incorporating 2-3 low calorie foods from this list into your daily meals. As you become comfortable, gradually build more of your diet around these nutrient-dense, filling options. Combined with regular exercise and adequate sleep, these foods will help you achieve your weight loss goals while actually enjoying the process.
        </p>

        <div className="bg-primary-50 rounded-lg p-6 my-8">
          <h3 className="text-xl font-semibold mb-3">Explore More Low Calorie Foods</h3>
          <p className="mb-4">
            Want detailed nutrition information for specific foods? Check out our comprehensive food database with calorie counts and macros for over 300,000 foods.
          </p>
          <div className="flex gap-4">
            <Link
              href="/lists/low-calorie-foods"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View Low Calorie Foods List
            </Link>
            <Link
              href="/category/vegetables"
              className="border-2 border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Browse Vegetables
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  'high-protein-foods-for-muscle-building': {
    slug: 'high-protein-foods-for-muscle-building',
    title: 'High Protein Foods for Muscle Building: Complete Guide',
    description: 'Build muscle faster with the best high protein foods. Complete guide with protein content per 100g, meal plans, and science-backed nutrition tips.',
    category: 'Nutrition',
    readTime: '10 min read',
    publishDate: '2026-01-24',
    content: (
      <div>
        <p className="lead text-xl text-gray-700 mb-6">
          Building muscle requires two things: progressive resistance training and adequate protein intake. This comprehensive guide reveals the best high protein foods, how much you need, and exactly how to structure your diet for maximum muscle growth.
        </p>

        <h2>Why Protein Matters for Muscle Building</h2>
        <p>
          Protein is the building block of muscle tissue. When you lift weights, you create microscopic tears in muscle fibers. Your body repairs these tears using amino acids from dietary protein, building the muscle back bigger and stronger - a process called muscle protein synthesis.
        </p>
        <p>
          Without adequate protein, your body cannot effectively repair and grow muscle tissue, regardless of how hard you train. Research shows that resistance training combined with insufficient protein intake results in minimal muscle gains compared to adequate protein consumption.
        </p>

        <h2>How Much Protein Do You Need?</h2>
        <p>
          For muscle building, research consistently shows optimal results with:
        </p>
        <ul>
          <li><strong>0.7-1.0g of protein per pound of body weight daily</strong></li>
          <li>Or <strong>1.6-2.2g per kilogram</strong> if you prefer metric</li>
        </ul>
        <p>
          For a 180-pound person, this means 126-180 grams of protein daily. Active individuals and those in a calorie deficit may benefit from the higher end of this range to prevent muscle loss.
        </p>

        <h2>Top 30 High Protein Foods for Muscle Building</h2>

        <h3>Animal Protein Sources (20-35g per 100g)</h3>
        <ul>
          <li><strong>Chicken breast (31g protein, 165 cal)</strong> - Lean muscle-building staple, affordable and versatile</li>
          <li><strong>Turkey breast (29g protein, 135 cal)</strong> - Even leaner than chicken, great for cutting</li>
          <li><strong>Tuna (29g protein, 132 cal)</strong> - Convenient canned option, rich in omega-3s</li>
          <li><strong>Salmon (25g protein, 206 cal)</strong> - Healthy fats support hormone production</li>
          <li><strong>Lean beef (26g protein, 250 cal)</strong> - Contains creatine, iron, and B vitamins</li>
          <li><strong>Pork tenderloin (26g protein, 143 cal)</strong> - Lean cut, often overlooked</li>
          <li><strong>Cod (23g protein, 82 cal)</strong> - Ultra-lean white fish, minimal calories</li>
          <li><strong>Shrimp (24g protein, 99 cal)</strong> - Low calorie, quick cooking protein</li>
          <li><strong>Eggs (13g protein per egg, 155 cal)</strong> - Complete amino acid profile, budget-friendly</li>
          <li><strong>Greek yogurt (10g protein per 100g)</strong> - Probiotic benefits, versatile</li>
        </ul>

        <h3>Plant-Based Protein Sources (15-30g per 100g)</h3>
        <ul>
          <li><strong>Tofu (17g protein, 144 cal)</strong> - Complete plant protein, absorbs flavors</li>
          <li><strong>Tempeh (19g protein, 193 cal)</strong> - Fermented soy, higher protein than tofu</li>
          <li><strong>Edamame (11g protein per 100g)</strong> - Young soybeans, great snack</li>
          <li><strong>Lentils (9g protein per 100g)</strong> - Fiber-rich, budget-friendly</li>
          <li><strong>Black beans (9g protein per 100g)</strong> - Versatile, pairs with rice for complete protein</li>
          <li><strong>Chickpeas (9g protein per 100g)</strong> - Great in curries, salads, or roasted</li>
          <li><strong>Quinoa (4g protein per 100g cooked)</strong> - Complete plant protein, grain alternative</li>
        </ul>

        <h3>Protein-Rich Snacks and Supplements</h3>
        <ul>
          <li><strong>Protein powder (20-30g per scoop)</strong> - Whey, casein, or plant-based options</li>
          <li><strong>Cottage cheese (11g protein per 100g)</strong> - Slow-digesting casein, perfect pre-bed</li>
          <li><strong>Jerky (33g protein per 100g)</strong> - Portable high-protein snack</li>
          <li><strong>Protein bars (15-20g per bar)</strong> - Convenient but watch added sugars</li>
          <li><strong>Almonds (21g protein per 100g)</strong> - Healthy fats plus protein</li>
          <li><strong>Peanut butter (25g protein per 100g)</strong> - Calorie-dense, great for bulking</li>
        </ul>

        <h2>Optimizing Protein Timing for Muscle Growth</h2>

        <h3>Distribute Protein Throughout the Day</h3>
        <p>
          Research shows that consuming protein evenly across 4-5 meals maximizes muscle protein synthesis better than cramming it into 1-2 large meals. Aim for 20-40g of protein per meal to optimize muscle building.
        </p>

        <h3>The Anabolic Window: Myth vs Reality</h3>
        <p>
          The old belief that you must consume protein within 30 minutes post-workout has been largely debunked. Total daily protein intake matters far more than precise timing. That said, having protein within a few hours of training is beneficial - but not urgent.
        </p>

        <h3>Pre-Bed Protein</h3>
        <p>
          Consuming 30-40g of slow-digesting protein (like casein or cottage cheese) before bed can support overnight muscle recovery and prevent muscle breakdown during the 8-hour fast of sleep.
        </p>

        <h2>Sample High Protein Meal Plan (180g protein, 2,500 calories)</h2>

        <h3>Breakfast (40g protein, 550 calories)</h3>
        <ul>
          <li>4 whole eggs scrambled</li>
          <li>2 slices whole wheat toast</li>
          <li>1 cup Greek yogurt with berries</li>
          <li>Black coffee</li>
        </ul>

        <h3>Mid-Morning Snack (25g protein, 200 calories)</h3>
        <ul>
          <li>Protein shake with 1 scoop whey protein</li>
          <li>1 banana</li>
        </ul>

        <h3>Lunch (45g protein, 650 calories)</h3>
        <ul>
          <li>200g grilled chicken breast</li>
          <li>1 cup brown rice</li>
          <li>2 cups mixed vegetables</li>
          <li>1 tbsp olive oil for cooking</li>
        </ul>

        <h3>Pre-Workout Snack (15g protein, 250 calories)</h3>
        <ul>
          <li>2 tbsp peanut butter</li>
          <li>1 apple</li>
          <li>10 almonds</li>
        </ul>

        <h3>Post-Workout Meal (35g protein, 550 calories)</h3>
        <ul>
          <li>150g salmon</li>
          <li>200g sweet potato</li>
          <li>Large salad with olive oil dressing</li>
        </ul>

        <h3>Evening Snack (20g protein, 300 calories)</h3>
        <ul>
          <li>1 cup cottage cheese</li>
          <li>1 cup blueberries</li>
          <li>1 oz almonds</li>
        </ul>

        <h2>Protein Quality: Understanding Amino Acids</h2>

        <h3>Complete vs Incomplete Proteins</h3>
        <p>
          <strong>Complete proteins</strong> contain all 9 essential amino acids your body cannot produce. These include:
        </p>
        <ul>
          <li>All animal sources (meat, fish, eggs, dairy)</li>
          <li>Soy products (tofu, tempeh, edamame)</li>
          <li>Quinoa</li>
        </ul>
        <p>
          <strong>Incomplete proteins</strong> lack one or more essential amino acids but can be combined to create complete proteins:
        </p>
        <ul>
          <li>Rice + beans</li>
          <li>Hummus + pita bread</li>
          <li>Peanut butter + whole wheat bread</li>
        </ul>

        <h3>Leucine: The Anabolic Trigger</h3>
        <p>
          Leucine is the amino acid most directly responsible for triggering muscle protein synthesis. Foods high in leucine include:
        </p>
        <ul>
          <li>Chicken breast (2.5g leucine per 100g)</li>
          <li>Beef (2.4g per 100g)</li>
          <li>Eggs (1.1g per egg)</li>
          <li>Whey protein (2.5-3g per scoop)</li>
        </ul>
        <p>
          Aim for 2-3g of leucine per meal to maximize muscle protein synthesis.
        </p>

        <h2>Protein for Different Goals</h2>

        <h3>Bulking (Muscle Gain Phase)</h3>
        <p>
          When eating in a calorie surplus to build muscle:
        </p>
        <ul>
          <li>Aim for 0.8-1.0g protein per pound of body weight</li>
          <li>Eat 300-500 calories above maintenance</li>
          <li>Don't neglect carbs - they support training intensity</li>
          <li>Include some higher-calorie protein sources like salmon, beef, whole eggs</li>
        </ul>

        <h3>Cutting (Fat Loss While Preserving Muscle)</h3>
        <p>
          When eating in a calorie deficit to lose fat:
        </p>
        <ul>
          <li>Increase to 1.0g protein per pound (higher end)</li>
          <li>Eat 300-500 calories below maintenance</li>
          <li>Focus on leaner protein sources to save calories</li>
          <li>Keep training volume high to signal muscle retention</li>
        </ul>

        <h3>Maintenance (Recomposition)</h3>
        <p>
          Building muscle while staying at same body weight:
        </p>
        <ul>
          <li>0.8g protein per pound is sufficient</li>
          <li>Eat at maintenance calories</li>
          <li>Progress is slower but you avoid bulk/cut cycles</li>
          <li>Best for intermediate lifters</li>
        </ul>

        <h2>Common High Protein Diet Mistakes</h2>

        <h3>1. Neglecting Carbohydrates</h3>
        <p>
          Some focus so heavily on protein they forget carbs fuel intense training. Carbohydrates replenish glycogen stores, support workout performance, and trigger insulin release that helps drive amino acids into muscle cells.
        </p>

        <h3>2. Over-Relying on Supplements</h3>
        <p>
          Protein powder is convenient but whole food sources provide additional nutrients, fiber, and satiety. Aim for 80% of protein from whole foods, 20% from supplements if needed.
        </p>

        <h3>3. Ignoring Digestive Health</h3>
        <p>
          High protein diets can cause digestive issues if you don't consume adequate fiber and water. Include vegetables with every meal and drink at least 8-10 glasses of water daily.
        </p>

        <h3>4. Eating Too Much Protein</h3>
        <p>
          More isn't always better. Research shows benefits plateau around 0.8-1.0g per pound. Excess protein is simply expensive calories that could come from carbs or fats instead.
        </p>

        <h2>The Science of Muscle Protein Synthesis</h2>
        <p>
          Studies show that consuming 20-40g of high-quality protein stimulates maximum muscle protein synthesis for 3-5 hours. After this period, muscle building rates return to baseline even if amino acids are still elevated in the blood.
        </p>
        <p>
          This is why spacing protein intake across multiple meals is more effective than one or two massive protein servings. A 2018 study in the Journal of the International Society of Sports Nutrition found that distributing 80g of protein across 4 meals resulted in greater muscle protein synthesis than 2 meals with 40g each.
        </p>

        <h2>Budget-Friendly High Protein Options</h2>
        <p>
          Building muscle doesn't require expensive supplements:
        </p>
        <ul>
          <li><strong>Eggs</strong> - $0.15-0.30 per egg, 6g protein</li>
          <li><strong>Canned tuna</strong> - $1 per can, 25g protein</li>
          <li><strong>Chicken breast (on sale)</strong> - $2-3 per pound, 100g protein</li>
          <li><strong>Greek yogurt</strong> - $1 per serving, 15-20g protein</li>
          <li><strong>Whey protein</strong> - $0.50-0.80 per serving, 25g protein</li>
          <li><strong>Lentils</strong> - $0.15 per serving, 9g protein</li>
          <li><strong>Cottage cheese</strong> - $0.75 per serving, 14g protein</li>
        </ul>

        <h2>Conclusion: Putting It All Together</h2>
        <p>
          Building muscle comes down to consistent training and adequate protein intake. Focus on consuming 0.7-1.0g of protein per pound of body weight daily, distributed across 4-5 meals. Prioritize complete protein sources like chicken, fish, eggs, and dairy, supplementing with plant proteins and protein powder as needed.
        </p>
        <p>
          Remember that protein is just one piece of the puzzle. You also need:
        </p>
        <ul>
          <li>Progressive overload in the gym</li>
          <li>Adequate calories (surplus for bulking, maintenance for recomposition)</li>
          <li>7-9 hours of quality sleep</li>
          <li>Sufficient carbohydrates to fuel training</li>
          <li>Consistency over months and years</li>
        </ul>
        <p>
          Start by tracking your protein intake for a week to establish your baseline, then gradually increase to hit your target. Meal prep on Sundays can make hitting your protein goals much easier during busy weekdays.
        </p>

        <div className="bg-primary-50 rounded-lg p-6 my-8">
          <h3 className="text-xl font-semibold mb-3">Find the Best Protein Sources</h3>
          <p className="mb-4">
            Explore our database of high protein foods with complete nutrition information, calorie counts, and detailed macros.
          </p>
          <div className="flex gap-4">
            <Link
              href="/lists/high-protein-foods"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View High Protein Foods List
            </Link>
            <Link
              href="/category/proteins"
              className="border-2 border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Browse Protein Foods
            </Link>
          </div>
        </div>
      </div>
    ),
  },
}

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = ARTICLES[params.slug]

  if (!article) {
    return { title: 'Article Not Found' }
  }

  return {
    title: `${article.title} | ${SITE_NAME}`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishDate,
    },
  }
}

export default function BlogArticlePage({ params }: PageProps) {
  const article = ARTICLES[params.slug]

  if (!article) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
          <li>/</li>
          <li><Link href="/blog" className="hover:text-gray-700">Blog</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{article.title}</li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded">
            {article.category}
          </span>
          <span className="text-sm text-gray-500">{article.readTime}</span>
          <span className="text-sm text-gray-500">
            {new Date(article.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <p className="text-xl text-gray-600">
          {article.description}
        </p>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {article.content}
      </div>

      {/* Related Articles */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.values(ARTICLES)
            .filter((a) => a.slug !== params.slug)
            .slice(0, 2)
            .map((relatedArticle) => (
              <Link
                key={relatedArticle.slug}
                href={`/blog/${relatedArticle.slug}`}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {relatedArticle.category}
                  </span>
                  <span className="text-xs text-gray-500">{relatedArticle.readTime}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {relatedArticle.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {relatedArticle.description}
                </p>
              </Link>
            ))}
        </div>
      </div>

      {/* Schema.org Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.description,
            datePublished: article.publishDate,
            author: {
              '@type': 'Organization',
              name: SITE_NAME,
            },
            publisher: {
              '@type': 'Organization',
              name: SITE_NAME,
            },
          }),
        }}
      />
    </article>
  )
}
