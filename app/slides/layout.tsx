'use client'

import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import NavigationDots from '../components/NavigationDots'
import SlideNavigation from '../components/SlideNavigation'

// Different transition types for each slide
const getTransitionForSlide = (slideNum: number) => {
  const transitions = [
    // Slide 0 - Fade
    { type: 'fade', duration: 0.4 },
    // Slide 1 - Slide from right
    { type: 'slideRight', duration: 0.5 },
    // Slide 2 - Slide from left
    { type: 'slideLeft', duration: 0.5 },
    // Slide 3 - Scale up
    { type: 'scale', duration: 0.4 },
    // Slide 4 - Slide from bottom
    { type: 'slideUp', duration: 0.5 },
    // Slide 5 - Rotate fade
    { type: 'rotate', duration: 0.6 },
    // Slide 6 - Slide from top
    { type: 'slideDown', duration: 0.5 },
    // Slide 7 - Zoom in
    { type: 'zoom', duration: 0.4 },
    // Slide 8 - Fade with scale
    { type: 'fadeScale', duration: 0.5 },
    // Slide 9 - Slide from right with fade
    { type: 'slideRightFade', duration: 0.5 },
    // Slide 10 - Fade
    { type: 'fade', duration: 0.4 },
    // Slide 11 - Fade (closing slide)
    { type: 'fade', duration: 0.6 },
  ]

  return transitions[slideNum] || transitions[0]
}

const getTransitionVariants = (type: string) => {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    },
    slideLeft: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 100 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
    },
    slideUp: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -100 },
    },
    rotate: {
      initial: { opacity: 0, rotate: -10, scale: 0.9 },
      animate: { opacity: 1, rotate: 0, scale: 1 },
      exit: { opacity: 0, rotate: 10, scale: 0.9 },
    },
    slideDown: {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 100 },
    },
    zoom: {
      initial: { opacity: 0, scale: 1.2 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
    },
    fadeScale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
    },
    slideRightFade: {
      initial: { opacity: 0, x: 50, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: -50, scale: 0.95 },
    },
  }

  return variants[type as keyof typeof variants] || variants.fade
}

export default function SlidesLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  
  // Extract slide number from pathname
  const slideMatch = pathname?.match(/\/slides\/(\d+)/)
  const slideNum = slideMatch ? parseInt(slideMatch[1]) : 0
  
  const transitionConfig = getTransitionForSlide(slideNum)
  const variants = getTransitionVariants(transitionConfig.type)

  return (
    <div className="fixed inset-0 bg-[#000000] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={pathname}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={{
            duration: transitionConfig.duration,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-screen w-full overflow-hidden"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <NavigationDots />
      <SlideNavigation />
    </div>
  )
}

