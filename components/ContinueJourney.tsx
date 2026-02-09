'use client'

import Link from 'next/link'

interface JourneyStep {
  step: number
  title: string
  description: string
  href: string
  emoji: string
  completed?: boolean
  current?: boolean
}

interface ContinueJourneyProps {
  title?: string
  currentStep?: number
  steps: JourneyStep[]
}

export default function ContinueJourney({
  title = "Your Nutrition Journey",
  currentStep = 1,
  steps
}: ContinueJourneyProps) {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-xl p-6 border border-primary-200">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">Follow these steps to reach your health goals</p>

      <div className="space-y-3">
        {steps.map((step, index) => {
          const isCompleted = step.completed || step.step < currentStep
          const isCurrent = step.current || step.step === currentStep

          return (
            <Link
              key={step.step}
              href={step.href}
              className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                isCurrent
                  ? 'bg-primary-600 text-white shadow-md'
                  : isCompleted
                  ? 'bg-white/80 text-gray-600 hover:bg-white'
                  : 'bg-white/50 text-gray-500 hover:bg-white/80'
              }`}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                isCurrent
                  ? 'bg-white/20'
                  : isCompleted
                  ? 'bg-green-100'
                  : 'bg-gray-100'
              }`}>
                {isCompleted && !isCurrent ? (
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.emoji
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium ${isCurrent ? 'text-primary-100' : 'text-gray-400'}`}>
                    Step {step.step}
                  </span>
                  {isCurrent && (
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Current</span>
                  )}
                </div>
                <p className={`font-medium ${isCurrent ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </p>
                <p className={`text-sm ${isCurrent ? 'text-primary-100' : 'text-gray-500'}`}>
                  {step.description}
                </p>
              </div>
              <svg
                className={`w-5 h-5 flex-shrink-0 ${isCurrent ? 'text-white' : 'text-gray-400'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
