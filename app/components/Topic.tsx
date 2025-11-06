'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TopicProps {
  children: ReactNode
  delay?: number
  className?: string
  animation?: 'fade' | 'slide' | 'scale' | 'rotate'
}

export default function Topic({ 
  children, 
  delay = 0, 
  className = '',
  animation = 'slide' 
}: TopicProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: animation === 'slide' ? 50 : 0,
        scale: animation === 'scale' ? 0.8 : 1,
        rotation: animation === 'rotate' ? -10 : 0,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [delay, animation])

  return (
    <div ref={ref} className={`topic-item ${className}`}>
      {children}
    </div>
  )
}

