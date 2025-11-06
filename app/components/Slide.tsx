'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideProps {
  children: ReactNode
  className?: string
  background?: 'gradient1' | 'gradient2' | 'gradient3' | 'gradient4' | 'gradient5' | 'dark'
}

const backgrounds = {
  gradient1: 'bg-[#000000]',
  gradient2: 'bg-[#000000]',
  gradient3: 'bg-[#000000]',
  gradient4: 'bg-[#000000]',
  gradient5: 'bg-[#000000]',
  dark: 'bg-[#000000]',
}

export default function Slide({ children, className = '', background = 'dark' }: SlideProps) {
  return (
    <div className={`slide-container ${backgrounds[background]} h-screen w-screen overflow-hidden ${className}`}>
      {/* Premium Background - Multiple Glow Effects (from test pages) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Static glow effects from test-design */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#BDFF2A] opacity-[0.02] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#BDFF2A] opacity-[0.03] blur-[130px]" />
        
        {/* Static glow effects from test-premium */}
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#BDFF2A] opacity-[0.02] blur-[150px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#BDFF2A] opacity-[0.03] blur-[140px]" />
        
        {/* Static glow effects from test-cards */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#BDFF2A] opacity-[0.03] blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#BDFF2A] opacity-[0.04] blur-[160px]" />
        
        {/* Animated glow effects for subtle movement */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#BDFF2A] opacity-[0.015] blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/3 right-1/3 w-[450px] h-[450px] bg-[#BDFF2A] opacity-[0.025] blur-[135px]"
        />
      </div>
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="slide-content relative z-10 pointer-events-auto min-h-screen flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  )
}

