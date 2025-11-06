'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Topic } from './InteractiveSlide'
import { GlowingEffect } from '@/components/ui/glowing-effect'

interface SplitLayoutProps {
  topics: Topic[]
  selectedTopicId: string
  onTopicSelect: (id: string) => void
  content: ReactNode
  onBack: () => void
}

export default function SplitLayout({ 
  topics,
  selectedTopicId,
  onTopicSelect,
  content, 
  onBack 
}: SplitLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="flex items-center justify-center w-full h-full gap-12 px-12"
    >
      {/* Left Side - Compact Topic Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="flex flex-col gap-6 w-[45%]"
      >
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#BDFF2A]/10 border border-[#BDFF2A]/30 text-[#BDFF2A] hover:bg-[#BDFF2A]/20 transition-colors self-start mb-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowRight className="w-5 h-5" />
          <span className="font-semibold">العودة</span>
        </motion.button>

        {/* Compact Topic Cards */}
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <motion.button
              key={topic.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.03, duration: 0.15, ease: 'easeOut' }}
              onClick={() => onTopicSelect(topic.id)}
              className={`
                relative w-full p-6 rounded-2xl text-right
                border-2 transition-all duration-200
                flex items-center gap-4 overflow-hidden
                ${topic.id === selectedTopicId
                  ? 'bg-[#BDFF2A]/10 border-[#BDFF2A] shadow-lg shadow-[#BDFF2A]/20' 
                  : 'bg-[#0A0A0A] border-[#2A2A2A] hover:border-[#BDFF2A]/50 hover:bg-[#0A0A0A]'
                }
              `}
              whileHover={{ scale: topic.id === selectedTopicId ? 1 : 1.02 }}
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
              {/* Subtle glow on hover */}
              {topic.id !== selectedTopicId && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#BDFF2A]/5 rounded-2xl pointer-events-none"
                />
              )}
              
              {topic.icon && (
                <div className={`flex-shrink-0 relative z-10 ${topic.id === selectedTopicId ? 'text-[#BDFF2A]' : 'text-[#BDFF2A]'}`}>
                  {topic.icon}
                </div>
              )}
              <h3 className={`text-xl font-bold relative z-10 ${topic.id === selectedTopicId ? 'text-[#BDFF2A]' : 'text-white'}`}>
                {topic.title}
              </h3>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        key={selectedTopicId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="w-[55%] h-full flex items-center"
      >
        {content}
      </motion.div>
    </motion.div>
  )
}
