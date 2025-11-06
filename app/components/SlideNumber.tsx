'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function SlideNumber() {
  const pathname = usePathname()
  const currentSlide = pathname?.split('/').pop() || '1'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.7, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="slide-number"
    >
      {currentSlide} / 10
    </motion.div>
  )
}

