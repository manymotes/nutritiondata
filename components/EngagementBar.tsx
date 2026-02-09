'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface EngagementBarProps {
  pageTitle?: string
  shareUrl?: string
  relatedLinks?: { title: string; href: string }[]
}

export default function EngagementBar({
  pageTitle = "This page",
  shareUrl,
  relatedLinks = []
}: EngagementBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolledPast, setHasScrolledPast] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // Show after scrolling 40% of the page
      const scrollPercent = scrollY / (docHeight - windowHeight)
      setHasScrolledPast(scrollPercent > 0.4)

      // Only show when scrolling up after 40% mark
      setIsVisible(scrollPercent > 0.4)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  const handleShare = async () => {
    const url = shareUrl || window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title: pageTitle, url })
      } catch (err) {
        // User cancelled or error
      }
    } else {
      await navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 shadow-lg transform transition-transform duration-300 md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          {relatedLinks.slice(0, 2).map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-xs px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full font-medium hover:bg-primary-100 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <button
          onClick={handleShare}
          className="flex items-center gap-1 text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </div>
    </div>
  )
}
