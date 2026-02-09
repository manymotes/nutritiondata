'use client'

import Link from 'next/link'

interface Tool {
  name: string
  description: string
  href: string
  emoji: string
}

const allTools: Record<string, Tool> = {
  calorie: {
    name: 'Calorie Calculator',
    description: 'Calculate your daily calorie needs',
    href: '/calculators/calorie-calculator',
    emoji: '🔥'
  },
  macro: {
    name: 'Macro Calculator',
    description: 'Get your protein, carb & fat targets',
    href: '/calculators/macro-calculator',
    emoji: '🥗'
  },
  bmi: {
    name: 'BMI Calculator',
    description: 'Check your body mass index',
    href: '/calculators/bmi-calculator',
    emoji: '⚖️'
  },
  quiz: {
    name: 'Diet Personality Quiz',
    description: 'Find your ideal nutrition approach',
    href: '/quiz/diet-personality',
    emoji: '🎯'
  },
  compare: {
    name: 'Food Comparison',
    description: 'Compare any two foods side-by-side',
    href: '/compare',
    emoji: '🔄'
  },
  mealPlan: {
    name: 'Meal Planner',
    description: 'Plan your daily meals',
    href: '/calculators/meal-planner',
    emoji: '📋'
  },
  highProtein: {
    name: 'High Protein Foods',
    description: 'Foods to hit your protein goals',
    href: '/lists/high-protein-foods',
    emoji: '💪'
  },
  lowCalorie: {
    name: 'Low Calorie Foods',
    description: 'Great options for weight loss',
    href: '/lists/low-calorie-foods',
    emoji: '🥬'
  }
}

interface RelatedToolsProps {
  current: string // key of current tool to exclude
  recommended?: string[] // specific tools to show (keys)
  title?: string
  maxItems?: number
}

export default function RelatedTools({
  current,
  recommended,
  title = "Try These Next",
  maxItems = 3
}: RelatedToolsProps) {
  let toolsToShow: Tool[]

  if (recommended) {
    toolsToShow = recommended
      .filter(key => key !== current && allTools[key])
      .map(key => allTools[key])
      .slice(0, maxItems)
  } else {
    // Smart recommendations based on current tool
    const recommendationMap: Record<string, string[]> = {
      calorie: ['macro', 'quiz', 'mealPlan'],
      macro: ['calorie', 'highProtein', 'mealPlan'],
      bmi: ['calorie', 'quiz', 'lowCalorie'],
      quiz: ['calorie', 'macro', 'mealPlan'],
      compare: ['calorie', 'highProtein', 'lowCalorie'],
      mealPlan: ['macro', 'calorie', 'highProtein']
    }

    const keys = recommendationMap[current] || ['calorie', 'macro', 'quiz']
    toolsToShow = keys
      .filter(key => allTools[key])
      .map(key => allTools[key])
      .slice(0, maxItems)
  }

  return (
    <div className="bg-gray-50 rounded-xl p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="grid gap-3">
        {toolsToShow.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="flex items-center gap-4 p-3 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">{tool.emoji}</span>
            <div className="flex-grow">
              <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">{tool.name}</p>
              <p className="text-sm text-gray-500">{tool.description}</p>
            </div>
            <span className="text-gray-400 group-hover:text-primary-600 transition-colors">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
