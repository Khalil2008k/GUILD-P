'use client'

import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function NavigationDots() {
  const router = useRouter()
  const pathname = usePathname()
  
  // Initialize currentSlide based on pathname
  const [currentSlide, setCurrentSlide] = useState<number | 'splash'>(() => {
    if (typeof window === 'undefined') return 0
    const currentPath = window.location.pathname
    if (currentPath === '/splash') return 'splash'
    const match = currentPath.match(/\/slides\/(\d+)/)
    return match ? parseInt(match[1]) : 0
  })

  useEffect(() => {
    // Extract slide number from pathname or check for splash
    if (pathname) {
      if (pathname === '/splash') {
        setCurrentSlide('splash')
      } else {
        const match = pathname.match(/\/slides\/(\d+)/)
        if (match) {
          setCurrentSlide(parseInt(match[1]))
        } else {
          setCurrentSlide(0)
        }
      }
    }
  }, [pathname])

  const totalSlides = 12 // 0-11 (0 is bismillah, 1-11 are content slides)

  const handleDotClick = (slideNum: number | 'splash') => {
    if (slideNum === 'splash') {
      router.push('/splash')
    } else {
      router.push(`/slides/${slideNum}`)
    }
  }

  const isOnSplash = currentSlide === 'splash'
  const isSlide9 = currentSlide === 9

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3">
      {/* Splash Screen Dot - On Top */}
      <motion.button
        onClick={() => handleDotClick('splash')}
        className={`w-3 h-3 rounded-full border-2 transition-all cursor-pointer ${
          isOnSplash
            ? 'bg-[#BDFF2A] border-[#BDFF2A] scale-125 shadow-[0_0_10px_rgba(189,255,42,0.5)]'
            : 'bg-transparent border-[#BDFF2A]/50 hover:bg-[#BDFF2A]/30 hover:border-[#BDFF2A]'
        }`}
        whileHover={{ scale: isOnSplash ? 1.25 : 1.3 }}
        whileTap={{ scale: 0.9 }}
        aria-label="انتقل إلى شاشة البداية"
      />
      
      {/* Slide Dots */}
      {Array.from({ length: totalSlides }, (_, i) => i).map((slideNum) => {
        const isActive = currentSlide === slideNum
        const isBlack = isSlide9 && !isActive
        
        return (
          <motion.button
            key={slideNum}
            onClick={() => handleDotClick(slideNum)}
            className={`w-3 h-3 rounded-full border-2 transition-all cursor-pointer ${
              isActive
                ? 'bg-[#BDFF2A] border-[#BDFF2A] scale-125 shadow-[0_0_10px_rgba(189,255,42,0.5)]'
                : isBlack
                ? 'bg-black border-black hover:bg-black/50 hover:border-black/50'
                : 'bg-transparent border-[#BDFF2A]/50 hover:bg-[#BDFF2A]/30 hover:border-[#BDFF2A]'
            }`}
            whileHover={{ scale: isActive ? 1.25 : 1.3 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`انتقل إلى الشريحة ${slideNum}`}
          />
        )
      })}
    </div>
  )
}
