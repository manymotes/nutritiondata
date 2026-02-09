'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  title?: string
  description?: string
  buttonText?: string
  source: string // For tracking where the signup came from
  resultData?: Record<string, any> // Optional data to include (e.g., calculator results)
  variant?: 'inline' | 'card' | 'modal'
  className?: string
}

export default function EmailCapture({
  title = 'Get Your Results Sent to Your Email',
  description = 'Plus receive weekly nutrition tips and healthy recipes.',
  buttonText = 'Send My Results',
  source,
  resultData,
  variant = 'card',
  className = '',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setErrorMessage('Please enter your email address')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      // Store in localStorage for now (can be replaced with actual API)
      const subscribers = JSON.parse(localStorage.getItem('caloriedata_subscribers') || '[]')
      const newSubscriber = {
        email,
        name: name || undefined,
        source,
        resultData,
        subscribedAt: new Date().toISOString(),
      }
      subscribers.push(newSubscriber)
      localStorage.setItem('caloriedata_subscribers', JSON.stringify(subscribers))

      // Track the event with GA4 if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'email_signup', {
          event_category: 'engagement',
          event_label: source,
          value: 1,
        })
      }

      setStatus('success')
      setEmail('')
      setName('')
    } catch (error) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">You are All Set!</h3>
        <p className="text-green-700 text-sm">
          Check your inbox for your personalized results and nutrition tips.
        </p>
      </div>
    )
  }

  const baseStyles = variant === 'card'
    ? 'bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-lg p-6'
    : variant === 'inline'
    ? 'bg-gray-50 rounded-lg p-4'
    : ''

  return (
    <div className={`${baseStyles} ${className}`}>
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {variant === 'card' && (
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name (optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
          </div>
        )}

        <div className={variant === 'inline' ? 'flex gap-2' : ''}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`${variant === 'inline' ? 'flex-1' : 'w-full'} px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm`}
          />

          {variant === 'inline' && (
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 whitespace-nowrap text-sm"
            >
              {status === 'loading' ? 'Sending...' : buttonText}
            </button>
          )}
        </div>

        {variant !== 'inline' && (
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : buttonText}
          </button>
        )}

        {errorMessage && (
          <p className="text-red-600 text-sm text-center">{errorMessage}</p>
        )}

        <p className="text-xs text-gray-500 text-center">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    </div>
  )
}
