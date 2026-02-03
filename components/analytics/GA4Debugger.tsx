'use client'

import { useEffect, useState } from 'react'

/**
 * GA4Debugger Component
 *
 * This component helps debug GA4 tracking by showing:
 * - Whether GA4 is initialized
 * - Recent dataLayer events
 * - Current GA4 configuration
 *
 * Usage: Add to layout.tsx temporarily for debugging
 * Remove before production deployment
 */
export function GA4Debugger() {
  const [isInitialized, setIsInitialized] = useState(false)
  const [events, setEvents] = useState<any[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if GA4 is initialized
    const checkInitialization = () => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function' && window.dataLayer) {
        setIsInitialized(true)
        setEvents(window.dataLayer.slice(-10)) // Last 10 events
      }
    }

    checkInitialization()

    // Recheck every 2 seconds
    const interval = setInterval(checkInitialization, 2000)

    return () => clearInterval(interval)
  }, [])

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 9999,
    }}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          background: isInitialized ? '#10b981' : '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
        title={isInitialized ? 'GA4 Initialized' : 'GA4 Not Initialized'}
      >
        📊
      </button>

      {/* Debug Panel */}
      {isVisible && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '400px',
          maxHeight: '500px',
          background: 'white',
          border: '2px solid #e5e7eb',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          padding: '16px',
          overflow: 'auto',
          fontFamily: 'monospace',
          fontSize: '12px',
        }}>
          <div style={{ marginBottom: '12px', fontWeight: 'bold', fontSize: '14px' }}>
            GA4 Debug Panel
          </div>

          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Status:</div>
            <div style={{
              color: isInitialized ? '#10b981' : '#ef4444',
              fontWeight: 'bold'
            }}>
              {isInitialized ? '✓ Initialized' : '✗ Not Initialized'}
            </div>
          </div>

          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
              DataLayer Events ({events.length}):
            </div>
            <div style={{
              maxHeight: '300px',
              overflow: 'auto',
              background: '#f3f4f6',
              padding: '8px',
              borderRadius: '4px'
            }}>
              {events.length === 0 ? (
                <div style={{ color: '#6b7280' }}>No events yet</div>
              ) : (
                events.map((event, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: '8px',
                      padding: '8px',
                      background: 'white',
                      borderRadius: '4px',
                      fontSize: '11px'
                    }}
                  >
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                      {JSON.stringify(event, null, 2)}
                    </pre>
                  </div>
                ))
              )}
            </div>
          </div>

          <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '12px' }}>
            💡 Tip: Open browser DevTools Network tab and filter for "google-analytics.com"
            to see tracking requests
          </div>
        </div>
      )}
    </div>
  )
}
