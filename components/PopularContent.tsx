'use client'

import Link from 'next/link'

interface PopularItem {
  title: string
  href: string
  views?: string
  emoji?: string
}

interface PopularContentProps {
  title?: string
  items: PopularItem[]
  variant?: 'sidebar' | 'inline' | 'compact'
}

export default function PopularContent({
  title = "Popular Right Now",
  items,
  variant = 'sidebar'
}: PopularContentProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">{title}</h4>
        <div className="flex flex-wrap gap-2">
          {items.slice(0, 6).map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-colors"
            >
              {item.emoji && <span className="mr-1">{item.emoji}</span>}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className="border-t border-gray-200 pt-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {items.slice(0, 6).map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
            >
              {item.emoji && <span className="text-xl">{item.emoji}</span>}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 group-hover:text-primary-600 truncate">
                  {item.title}
                </p>
                {item.views && (
                  <p className="text-xs text-gray-500">{item.views}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // Sidebar variant
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span className="text-xl">🔥</span>
        {title}
      </h3>
      <div className="space-y-3">
        {items.slice(0, 5).map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-start gap-3 group"
          >
            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold">
              {index + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                {item.title}
              </p>
              {item.views && (
                <p className="text-xs text-gray-500 mt-0.5">{item.views}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
