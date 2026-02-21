'use client'

import { useEffect, useRef } from 'react'

interface AdsterraAdProps {
  className?: string
}

const AD_HASH = '0d526d405857eb0c72510015378c73d6'
const SCRIPT_URL = `https://pl28758900.effectivegatecpm.com/${AD_HASH}/invoke.js`

export default function AdsterraAd({ className = '' }: AdsterraAdProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current) return
    scriptLoaded.current = true

    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = SCRIPT_URL

    if (containerRef.current) {
      containerRef.current.appendChild(script)
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className={`adsterra-container ${className}`}>
      <div ref={containerRef}>
        <div id={`container-${AD_HASH}`}></div>
      </div>
    </div>
  )
}
