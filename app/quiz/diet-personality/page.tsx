'use client'

import { useState } from 'react'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import { SITE_NAME } from '@/lib/constants'

// Quiz questions
const questions = [
  {
    id: 1,
    question: "What's your main health goal right now?",
    options: [
      { text: "Lose weight and burn fat", value: "weight_loss", icon: "🔥" },
      { text: "Build muscle and strength", value: "muscle_gain", icon: "💪" },
      { text: "Have more energy throughout the day", value: "energy", icon: "⚡" },
      { text: "Improve overall health and longevity", value: "health", icon: "❤️" },
    ],
  },
  {
    id: 2,
    question: "How would you describe your current eating habits?",
    options: [
      { text: "I eat whatever I want, whenever", value: "unstructured", icon: "🍕" },
      { text: "I try to eat healthy but struggle with consistency", value: "inconsistent", icon: "🔄" },
      { text: "I follow a pretty strict diet most of the time", value: "structured", icon: "📋" },
      { text: "I'm always experimenting with new diets", value: "experimenter", icon: "🧪" },
    ],
  },
  {
    id: 3,
    question: "How do you feel about meal prepping?",
    options: [
      { text: "Love it - I prep all my meals weekly", value: "prep_lover", icon: "📦" },
      { text: "I do it sometimes when I'm motivated", value: "occasional_prepper", icon: "🤔" },
      { text: "Too much work - I prefer cooking fresh", value: "fresh_cooker", icon: "👨‍🍳" },
      { text: "What's meal prep? I mostly eat out", value: "eats_out", icon: "🍽️" },
    ],
  },
  {
    id: 4,
    question: "What's your biggest nutrition challenge?",
    options: [
      { text: "Controlling portions and overeating", value: "portions", icon: "🍽️" },
      { text: "Cravings for sweets and junk food", value: "cravings", icon: "🍫" },
      { text: "Not knowing what to eat or cook", value: "knowledge", icon: "❓" },
      { text: "Finding time to eat healthy", value: "time", icon: "⏰" },
    ],
  },
  {
    id: 5,
    question: "How do you typically handle stress?",
    options: [
      { text: "Comfort eating - food makes me feel better", value: "stress_eater", icon: "🍰" },
      { text: "I lose my appetite when stressed", value: "stress_starver", icon: "😰" },
      { text: "Exercise or physical activity", value: "active_coper", icon: "🏃" },
      { text: "Stress doesn't really affect my eating", value: "stable", icon: "😌" },
    ],
  },
  {
    id: 6,
    question: "What type of foods do you prefer?",
    options: [
      { text: "Meat-heavy meals (steak, chicken, etc.)", value: "carnivore", icon: "🥩" },
      { text: "Balanced mix of everything", value: "balanced", icon: "🥗" },
      { text: "Mostly plant-based with some animal products", value: "flexitarian", icon: "🥬" },
      { text: "Strictly vegetarian or vegan", value: "plant_based", icon: "🌱" },
    ],
  },
  {
    id: 7,
    question: "How important is convenience in your food choices?",
    options: [
      { text: "Very - I need quick and easy options", value: "convenience_first", icon: "⚡" },
      { text: "Somewhat - I'll cook but keep it simple", value: "simple_cooker", icon: "🍳" },
      { text: "Not very - I enjoy cooking elaborate meals", value: "home_chef", icon: "👨‍🍳" },
      { text: "I don't mind either way", value: "flexible", icon: "🔀" },
    ],
  },
  {
    id: 8,
    question: "How would you rate your nutrition knowledge?",
    options: [
      { text: "Beginner - I don't know much about nutrition", value: "beginner", icon: "📚" },
      { text: "Intermediate - I know the basics", value: "intermediate", icon: "📖" },
      { text: "Advanced - I track macros and understand nutrition", value: "advanced", icon: "🎓" },
      { text: "Expert - Nutrition is my passion", value: "expert", icon: "🏆" },
    ],
  },
]

// Diet personality types
const dietPersonalities = {
  disciplined_optimizer: {
    name: "The Disciplined Optimizer",
    emoji: "📊",
    description: "You're analytical, goal-oriented, and thrive with structure. You prefer tracking your progress and optimizing your nutrition for specific outcomes.",
    strengths: ["Consistent with routines", "Data-driven decision making", "Goal-focused mindset", "Willing to make sacrifices"],
    challenges: ["Can be too rigid", "May over-restrict", "Risk of obsessive tracking"],
    recommendations: [
      "Use our Macro Calculator to set precise targets",
      "Try a structured meal prep approach",
      "Consider the Mediterranean or Zone diet",
      "Track progress weekly, not daily to avoid obsession",
    ],
    idealDiets: ["IIFYM (If It Fits Your Macros)", "Zone Diet", "Mediterranean Diet"],
    tools: [
      { name: "Macro Calculator", href: "/calculators/macro-calculator" },
      { name: "Calorie Calculator", href: "/calculators/calorie-calculator" },
      { name: "Meal Planner", href: "/calculators/meal-planner" },
    ],
  },
  intuitive_eater: {
    name: "The Intuitive Eater",
    emoji: "🧘",
    description: "You prefer listening to your body over strict rules. You believe in balance and moderation rather than restriction.",
    strengths: ["Flexible approach", "Sustainable long-term", "Healthy relationship with food", "Low stress around eating"],
    challenges: ["May lack structure when needed", "Can underestimate portions", "Might miss nutrient targets"],
    recommendations: [
      "Focus on whole, unprocessed foods",
      "Learn portion sizes without obsessive tracking",
      "Use the hunger-fullness scale",
      "Add more protein and fiber to increase satiety",
    ],
    idealDiets: ["Intuitive Eating", "Mediterranean Diet", "Anti-Diet Approach"],
    tools: [
      { name: "BMI Calculator", href: "/calculators/bmi-calculator" },
      { name: "High Protein Foods", href: "/categories/high-protein" },
      { name: "High Fiber Foods", href: "/categories/high-fiber" },
    ],
  },
  busy_pragmatist: {
    name: "The Busy Pragmatist",
    emoji: "⚡",
    description: "Time is your most precious resource. You need simple, practical solutions that fit your hectic lifestyle without complicated meal plans.",
    strengths: ["Practical decision making", "Adaptable to circumstances", "Results-focused", "Efficient"],
    challenges: ["Often resort to convenience foods", "Skip meals when busy", "May sacrifice nutrition for speed"],
    recommendations: [
      "Master 5-10 quick, healthy recipes",
      "Prep simple ingredients on weekends",
      "Keep healthy grab-and-go options ready",
      "Use meal delivery services strategically",
    ],
    idealDiets: ["Simplified Meal Prep", "One-Pot Meals", "15-Minute Meals"],
    tools: [
      { name: "Meal Prep Guides", href: "/meal-prep" },
      { name: "Quick Recipes", href: "/recipes" },
      { name: "Low Calorie Foods", href: "/categories/low-calorie" },
    ],
  },
  social_foodie: {
    name: "The Social Foodie",
    emoji: "🍽️",
    description: "Food is a social experience for you. You love dining out, trying new restaurants, and sharing meals with friends and family.",
    strengths: ["Enjoys variety", "Open to new foods", "Food brings joy", "Social connections through food"],
    challenges: ["Restaurant portions are large", "Social pressure to overeat", "Hard to track when eating out"],
    recommendations: [
      "Learn to make smarter choices at restaurants",
      "Practice the 'half plate' method",
      "Focus on protein and veggies first",
      "Allow flexibility without guilt",
    ],
    idealDiets: ["80/20 Approach", "Flexible Dieting", "Mediterranean Diet"],
    tools: [
      { name: "Compare Foods", href: "/compare" },
      { name: "Calorie Calculator", href: "/calculators/calorie-calculator" },
      { name: "Fast Food Options", href: "/categories/fast-food" },
    ],
  },
  health_enthusiast: {
    name: "The Health Enthusiast",
    emoji: "🌱",
    description: "You're motivated by overall wellness, not just weight. You care about food quality, sustainability, and long-term health benefits.",
    strengths: ["Quality-focused", "Long-term thinking", "Open to learning", "Values whole foods"],
    challenges: ["May overthink food choices", "Can be too restrictive", "Information overload"],
    recommendations: [
      "Focus on nutrient density over calories",
      "Incorporate more colorful vegetables",
      "Learn about anti-inflammatory foods",
      "Don't let perfect be the enemy of good",
    ],
    idealDiets: ["Whole30", "Plant-Forward", "Anti-Inflammatory Diet"],
    tools: [
      { name: "Nutrient-Dense Foods", href: "/categories" },
      { name: "Diet Guides", href: "/diets" },
      { name: "Healthy Recipes", href: "/recipes" },
    ],
  },
  transformation_seeker: {
    name: "The Transformation Seeker",
    emoji: "🦋",
    description: "You're ready for a significant change. Whether it's weight loss or a lifestyle overhaul, you're motivated and ready to commit.",
    strengths: ["High motivation", "Ready for change", "Willing to work hard", "Clear goals"],
    challenges: ["May want results too fast", "Risk of unsustainable approaches", "All-or-nothing thinking"],
    recommendations: [
      "Set realistic weekly goals (1-2 lbs/week max)",
      "Focus on building habits, not just losing weight",
      "Calculate your calorie deficit properly",
      "Plan for plateaus and setbacks",
    ],
    idealDiets: ["Calorie Deficit", "High Protein Diet", "Carb Cycling"],
    tools: [
      { name: "TDEE Calculator", href: "/calculators/calorie-calculator" },
      { name: "Macro Calculator", href: "/calculators/macro-calculator" },
      { name: "Weight Loss Foods", href: "/lists/weight-loss" },
    ],
  },
}

type DietPersonalityKey = keyof typeof dietPersonalities

// Calculate personality based on answers
function calculatePersonality(answers: Record<number, string>): DietPersonalityKey {
  const scores: Record<DietPersonalityKey, number> = {
    disciplined_optimizer: 0,
    intuitive_eater: 0,
    busy_pragmatist: 0,
    social_foodie: 0,
    health_enthusiast: 0,
    transformation_seeker: 0,
  }

  // Question 1: Main goal
  if (answers[1] === 'weight_loss') {
    scores.transformation_seeker += 3
    scores.disciplined_optimizer += 2
  } else if (answers[1] === 'muscle_gain') {
    scores.disciplined_optimizer += 3
    scores.transformation_seeker += 2
  } else if (answers[1] === 'energy') {
    scores.health_enthusiast += 3
    scores.intuitive_eater += 2
  } else if (answers[1] === 'health') {
    scores.health_enthusiast += 3
    scores.intuitive_eater += 2
  }

  // Question 2: Eating habits
  if (answers[2] === 'unstructured') {
    scores.social_foodie += 2
    scores.busy_pragmatist += 2
  } else if (answers[2] === 'inconsistent') {
    scores.transformation_seeker += 2
    scores.intuitive_eater += 1
  } else if (answers[2] === 'structured') {
    scores.disciplined_optimizer += 3
  } else if (answers[2] === 'experimenter') {
    scores.health_enthusiast += 2
    scores.disciplined_optimizer += 1
  }

  // Question 3: Meal prep
  if (answers[3] === 'prep_lover') {
    scores.disciplined_optimizer += 3
  } else if (answers[3] === 'occasional_prepper') {
    scores.busy_pragmatist += 2
    scores.intuitive_eater += 1
  } else if (answers[3] === 'fresh_cooker') {
    scores.health_enthusiast += 2
    scores.intuitive_eater += 1
  } else if (answers[3] === 'eats_out') {
    scores.social_foodie += 3
    scores.busy_pragmatist += 2
  }

  // Question 4: Biggest challenge
  if (answers[4] === 'portions') {
    scores.transformation_seeker += 2
    scores.intuitive_eater += 1
  } else if (answers[4] === 'cravings') {
    scores.transformation_seeker += 2
    scores.disciplined_optimizer += 1
  } else if (answers[4] === 'knowledge') {
    scores.health_enthusiast += 2
    scores.transformation_seeker += 1
  } else if (answers[4] === 'time') {
    scores.busy_pragmatist += 3
  }

  // Question 5: Stress handling
  if (answers[5] === 'stress_eater') {
    scores.transformation_seeker += 2
    scores.intuitive_eater += 1
  } else if (answers[5] === 'stress_starver') {
    scores.intuitive_eater += 2
  } else if (answers[5] === 'active_coper') {
    scores.disciplined_optimizer += 2
    scores.health_enthusiast += 2
  } else if (answers[5] === 'stable') {
    scores.intuitive_eater += 2
    scores.disciplined_optimizer += 1
  }

  // Question 6: Food preferences
  if (answers[6] === 'carnivore') {
    scores.disciplined_optimizer += 1
    scores.transformation_seeker += 1
  } else if (answers[6] === 'balanced') {
    scores.intuitive_eater += 2
    scores.health_enthusiast += 1
  } else if (answers[6] === 'flexitarian') {
    scores.health_enthusiast += 2
    scores.intuitive_eater += 1
  } else if (answers[6] === 'plant_based') {
    scores.health_enthusiast += 3
  }

  // Question 7: Convenience
  if (answers[7] === 'convenience_first') {
    scores.busy_pragmatist += 3
  } else if (answers[7] === 'simple_cooker') {
    scores.busy_pragmatist += 1
    scores.intuitive_eater += 1
  } else if (answers[7] === 'home_chef') {
    scores.health_enthusiast += 2
    scores.social_foodie += 1
  } else if (answers[7] === 'flexible') {
    scores.intuitive_eater += 2
  }

  // Question 8: Knowledge level
  if (answers[8] === 'beginner') {
    scores.transformation_seeker += 1
  } else if (answers[8] === 'intermediate') {
    scores.intuitive_eater += 1
    scores.busy_pragmatist += 1
  } else if (answers[8] === 'advanced') {
    scores.disciplined_optimizer += 2
  } else if (answers[8] === 'expert') {
    scores.health_enthusiast += 2
    scores.disciplined_optimizer += 1
  }

  // Find highest score
  let maxScore = 0
  let personality: DietPersonalityKey = 'intuitive_eater'

  for (const [key, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score
      personality = key as DietPersonalityKey
    }
  }

  return personality
}

export default function DietPersonalityQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [result, setResult] = useState<DietPersonalityKey | null>(null)
  const [showEmailCapture, setShowEmailCapture] = useState(false)

  const handleAnswer = (value: string) => {
    const questionId = questions[currentQuestion].id
    setAnswers({ ...answers, [questionId]: value })

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate result
      const newAnswers = { ...answers, [questionId]: value }
      const personality = calculatePersonality(newAnswers)
      setResult(personality)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
    setShowEmailCapture(false)
  }

  const progress = ((currentQuestion) / questions.length) * 100

  // Show results
  if (result) {
    const personality = dietPersonalities[result]

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Diet Personality Quiz</li>
          </ol>
        </nav>

        {/* Result Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{personality.emoji}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            You are: {personality.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            {personality.description}
          </p>
        </div>

        {/* Email Capture */}
        {!showEmailCapture ? (
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-6 mb-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-2">
              Want Your Personalized Nutrition Plan?
            </h3>
            <p className="mb-4 text-primary-100">
              Get a customized meal plan and weekly tips based on your diet personality.
            </p>
            <button
              onClick={() => setShowEmailCapture(true)}
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Yes, Send Me My Plan
            </button>
          </div>
        ) : (
          <div className="mb-8">
            <EmailCapture
              title="Get Your Personalized Plan"
              description={`Receive a custom nutrition guide for "${personality.name}" plus weekly tips.`}
              buttonText="Send My Free Plan"
              source="diet_personality_quiz"
              resultData={{ personality: result, personalityName: personality.name }}
            />
          </div>
        )}

        {/* Strengths & Challenges */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <span className="text-lg">💪</span> Your Strengths
            </h3>
            <ul className="space-y-2">
              {personality.strengths.map((strength, i) => (
                <li key={i} className="text-green-700 text-sm flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
              <span className="text-lg">⚠️</span> Watch Out For
            </h3>
            <ul className="space-y-2">
              {personality.challenges.map((challenge, i) => (
                <li key={i} className="text-amber-700 text-sm flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">!</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            Our Recommendations for You
          </h3>
          <ul className="space-y-3">
            {personality.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-primary-100 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-700">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal Diets */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-3">
            Diet Approaches That Work for You
          </h3>
          <div className="flex flex-wrap gap-2">
            {personality.idealDiets.map((diet, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
              >
                {diet}
              </span>
            ))}
          </div>
        </div>

        {/* Recommended Tools */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            Tools to Help You Succeed
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {personality.tools.map((tool, i) => (
              <Link
                key={i}
                href={tool.href}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-center"
              >
                <span className="text-primary-600 font-semibold">{tool.name}</span>
                <span className="block text-sm text-gray-500 mt-1">Try it free →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Share & Restart */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRestart}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Retake Quiz
          </button>
          <Link
            href="/calculators"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
          >
            Explore All Calculators
          </Link>
        </div>
      </div>
    )
  }

  // Show quiz
  const question = questions[currentQuestion]

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Diet Personality Quiz</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          What's Your Diet Personality?
        </h1>
        <p className="text-lg text-gray-600">
          Discover your unique approach to nutrition and get personalized recommendations.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{option.icon}</span>
                <span className="text-gray-700 group-hover:text-primary-700 font-medium">
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Back Button */}
      {currentQuestion > 0 && (
        <div className="text-center">
          <button
            onClick={handleBack}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            ← Go back to previous question
          </button>
        </div>
      )}
    </div>
  )
}

// Note: metadata is in layout.tsx as this is a client component
