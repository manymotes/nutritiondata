'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SITE_NAME, FOOD_CATEGORIES } from '@/lib/constants'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🥗</span>
              <span className="text-xl font-bold text-primary-600">{SITE_NAME}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/category/fruits" className="text-gray-600 hover:text-primary-600">
              Foods
            </Link>
            <Link href="/compare" className="text-gray-600 hover:text-primary-600">
              Compare
            </Link>
            <Link href="/calculators" className="text-gray-600 hover:text-primary-600">
              Calculators
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/category/fruits" className="text-gray-600 hover:text-primary-600 py-2">
                Foods
              </Link>
              <Link href="/compare" className="text-gray-600 hover:text-primary-600 py-2">
                Compare
              </Link>
              <Link href="/calculators" className="text-gray-600 hover:text-primary-600 py-2">
                Calculators
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-600 py-2">
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
