'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TopicDetailProps {
  content: ReactNode
}

export default function TopicDetail({ content }: TopicDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-3xl p-10 w-full max-w-4xl transition-all duration-300 hover:border-[#BDFF2A]/30 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#BDFF2A] opacity-[0.02] blur-[120px] pointer-events-none" />
        <div className="relative z-10">
          {content}
        </div>
      </div>
    </motion.div>
  )
}
