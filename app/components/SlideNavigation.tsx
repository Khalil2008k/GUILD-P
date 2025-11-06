'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SlideNavigation() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isNavigating, setIsNavigating] = useState(false)
  const totalSlides = 11 // 0-11 (0 is bismillah, 1-11 are content slides)

  useEffect(() => {
    if (pathname) {
      const match = pathname.match(/\/slides\/(\d+)/)
      if (match) {
        setCurrentSlide(parseInt(match[1]))
      }
    }
  }, [pathname])

  useEffect(() => {
    // Reset navigating state after route change
    setIsNavigating(false)
  }, [pathname])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isNavigating) return
      
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        // Next slide
        if (currentSlide < totalSlides) {
          setIsNavigating(true)
          router.push(`/slides/${currentSlide + 1}`)
        }
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        // Previous slide
        if (currentSlide > 0) {
          setIsNavigating(true)
          router.push(`/slides/${currentSlide - 1}`)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, router, totalSlides, isNavigating])

  const goToNextSlide = () => {
    if (isNavigating || currentSlide >= totalSlides) return
    setIsNavigating(true)
    router.push(`/slides/${currentSlide + 1}`)
  }

  const goToPrevSlide = () => {
    if (isNavigating || currentSlide <= 0) return
    setIsNavigating(true)
    router.push(`/slides/${currentSlide - 1}`)
  }

  return (
    <>
      {currentSlide > 0 && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.7, x: 0 }}
          whileHover={{ opacity: 1, scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToPrevSlide}
          className="fixed right-4 z-[100] bg-[#0A0A0A]/80 backdrop-blur-md p-4 rounded-full border-2 border-[#BDFF2A]/50 hover:bg-[#BDFF2A]/20 hover:border-[#BDFF2A] transition-all cursor-pointer shadow-lg shadow-[#BDFF2A]/10"
          style={{ top: 'calc(50% + 340px)', transform: 'translateY(-50%)' }}
          aria-label="الشريحة السابقة"
        >
          <ChevronRight className="w-6 h-6 text-[#BDFF2A]" />
        </motion.button>
      )}

      {currentSlide < totalSlides && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.7, x: 0 }}
          whileHover={{ opacity: 1, scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToNextSlide}
          className="fixed left-4 z-[100] bg-[#0A0A0A]/80 backdrop-blur-md p-4 rounded-full border-2 border-[#BDFF2A]/50 hover:bg-[#BDFF2A]/20 hover:border-[#BDFF2A] transition-all cursor-pointer shadow-lg shadow-[#BDFF2A]/10"
          style={{ top: 'calc(50% + 340px)', transform: 'translateY(-50%)' }}
          aria-label="الشريحة التالية"
        >
          <ChevronLeft className="w-6 h-6 text-[#BDFF2A]" />
        </motion.button>
      )}
    </>
  )
}
