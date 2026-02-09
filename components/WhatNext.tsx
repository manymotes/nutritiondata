'use client'

import Link from 'next/link'

interface Suggestion {
  title: string
  description: string
  href: string
  emoji: string
  highlight?: boolean
}

interface WhatNextProps {
  title?: string
  description?: string
  suggestions: Suggestion[]
  variant?: 'default' | 'compact' | 'highlight'
}

export default function WhatNext({
  title = "What's Next?",
  description = "Continue your nutrition journey with these recommended tools",
  suggestions,
  variant = 'default'
}: WhatNextProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-gray-50 rounded-lg p-4 mt-6">
        <p className="text-sm font-medium text-gray-700 mb-3">{title}</p>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary-300 hover:bg-primary-50 transition-colors"
            >
              <span>{item.emoji}</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'highlight') {
    return (
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200 rounded-xl p-6 mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="grid gap-3">
          {suggestions.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                item.highlight || index === 0
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-white border border-gray-200 text-gray-900 hover:border-primary-300 hover:shadow-md'
              }`}
            >
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <p className={`font-semibold ${item.highlight || index === 0 ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </p>
                <p className={`text-sm ${item.highlight || index === 0 ? 'text-primary-100' : 'text-gray-500'}`}>
                  {item.description}
                </p>
              </div>
              <span className="ml-auto">→</span>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="border-t border-gray-200 pt-8 mt-8">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {suggestions.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`p-4 rounded-lg border transition-all hover:shadow-md ${
              item.highlight
                ? 'bg-primary-50 border-primary-200 hover:border-primary-400'
                : 'bg-white border-gray-200 hover:border-primary-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
