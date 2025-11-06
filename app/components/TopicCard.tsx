'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

interface TopicCardProps {
  title: string
  icon?: ReactNode
  isActive?: boolean
  onClick: () => void
  delay?: number
  style?: React.CSSProperties
}

export default function TopicCard({ 
  title, 
  icon, 
  isActive = false, 
  onClick, 
  delay = 0,
  style
}: TopicCardProps) {
  return (
    <motion.button
      style={{
        ...style,
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className={`
        relative w-full p-10 rounded-3xl text-center
        border-2 transition-all duration-300 overflow-hidden
        ${isActive 
          ? 'bg-[#BDFF2A]/10 border-[#BDFF2A] shadow-xl shadow-[#BDFF2A]/30' 
          : 'bg-[#0A0A0A] border-[#2A2A2A] hover:border-[#BDFF2A]/50 hover:bg-[#0A0A0A] hover:shadow-lg hover:shadow-[#BDFF2A]/10'
        }
      `}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      {/* Subtle background glow on hover */}
      {!isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-[#BDFF2A]/5 rounded-3xl pointer-events-none"
        />
      )}
      
      {icon && (
        <motion.div 
          className={`mb-6 flex justify-center ${isActive ? 'text-[#BDFF2A]' : 'text-[#BDFF2A]'}`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      )}
      <h3 className={`text-2xl font-bold relative z-10 ${isActive ? 'text-[#BDFF2A]' : 'text-white'}`}>
        {title}
      </h3>
    </motion.button>
  )
}
