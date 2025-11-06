'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import Slide from './Slide'
import TopicCard from './TopicCard'
import TopicDetail from './TopicDetail'
import SplitLayout from './SplitLayout'
import { ReactNode } from 'react'

export interface Topic {
  id: string
  title: string
  icon?: ReactNode
  content: ReactNode
}

interface InteractiveSlideProps {
  title: string
  subtitle?: string
  topics: Topic[]
  background?: 'gradient1' | 'gradient2' | 'gradient3' | 'gradient4' | 'gradient5' | 'dark'
}

export default function InteractiveSlide({ 
  title, 
  subtitle, 
  topics, 
  background = 'dark' 
}: InteractiveSlideProps) {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null)

  const selectedTopic = topics.find(t => t.id === selectedTopicId)

  const handleBack = () => {
    setSelectedTopicId(null)
  }

  return (
    <Slide background={background}>
      <AnimatePresence mode="wait">
        {!selectedTopicId ? (
          /* Topic List View - 3 Cards Centered */
          <motion.div
            key="list"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-12 w-full h-full"
          >
            {/* Header */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl text-[#A6A6A6] mb-6 leading-relaxed">
                  {subtitle}
                </p>
              )}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#BDFF2A]/10 border border-[#BDFF2A]/30">
                <p className="text-[#BDFF2A] text-sm font-semibold">
                  اضغط على أي موضوع لعرض التفاصيل
                </p>
              </div>
            </motion.div>

            {/* Topic Cards Grid - Responsive grid that wraps */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {topics.map((topic, index) => {
                const gridCols = 3
                const totalItems = topics.length
                const fullRows = Math.floor(totalItems / gridCols)
                const itemsInLastRow = totalItems % gridCols
                const isInLastRow = itemsInLastRow > 0 && index >= fullRows * gridCols
                const positionInLastRow = isInLastRow ? (index - fullRows * gridCols) : -1
                
                // Center items in incomplete last row by starting them from the correct column
                let gridColumnStart = undefined
                let translateX = undefined
                if (isInLastRow && itemsInLastRow < gridCols) {
                  // Calculate starting column to center the items
                  const startColumn = Math.floor((gridCols - itemsInLastRow) / 2) + 1
                  gridColumnStart = positionInLastRow === 0 ? startColumn : undefined
                  // Move second row cards 50px to the left
                  translateX = '-50px'
                }
                
                const styleObj: React.CSSProperties = {}
                if (gridColumnStart) {
                  styleObj.gridColumnStart = gridColumnStart
                }
                if (translateX) {
                  styleObj.transform = `translateX(${translateX})`
                }
                
                return (
                  <TopicCard
                    key={topic.id}
                    title={topic.title}
                    icon={topic.icon}
                    onClick={() => setSelectedTopicId(topic.id)}
                    delay={0.5 + index * 0.1}
                    style={Object.keys(styleObj).length > 0 ? styleObj : undefined}
                  />
                )
              })}
            </motion.div>
          </motion.div>
        ) : (
          /* Split View - Selected Topic Detail */
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            {selectedTopic && (
              <SplitLayout
                topics={topics}
                selectedTopicId={selectedTopicId}
                onTopicSelect={setSelectedTopicId}
                content={<TopicDetail content={selectedTopic.content} />}
                onBack={handleBack}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Slide>
  )
}
