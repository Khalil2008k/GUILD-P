'use client'

import InteractiveSlide, { Topic as TopicType } from '@/app/components/InteractiveSlide'
import { Users, Globe, DollarSign, Heart } from 'lucide-react'
import { WorldMap } from '@/components/ui/world-map'
import Slide from '@/app/components/Slide'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import TopicCard from '@/app/components/TopicCard'
import TopicDetail from '@/app/components/TopicDetail'
import SplitLayout from '@/app/components/SplitLayout'

export default function Slide8() {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null)

  const topics: TopicType[] = [
    {
      id: 'growth',
      title: 'النمو المجتمعي',
      icon: <Users className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">النمو المجتمعي</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            الهدف الوصول إلى مئة ألف مستخدم نشط في قطر خلال السنة الأولى وبناء قاعدة ثقة مستمرة.
          </p>
        </div>
      ),
    },
    {
      id: 'expansion',
      title: 'الانتشار الإقليمي',
      icon: <Globe className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">الانتشار الإقليمي</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            خطة التوسع تشمل دول الخليج ثم الشرق الأوسط، مع تكامل لغوي وثقافي في كل سوق.
          </p>
        </div>
      ),
    },
    {
      id: 'economic',
      title: 'الاستدامة الاقتصادية',
      icon: <DollarSign className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">الاستدامة الاقتصادية</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نموذج الربح يعتمد على عمولات بسيطة وشراكات استراتيجية تضمن استمرارية المنصة دون التضحية بالقيم.
          </p>
        </div>
      ),
    },
    {
      id: 'social',
      title: 'الاستدامة الاجتماعية',
      icon: <Heart className="w-12 h-12" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white mb-8">الاستدامة الاجتماعية</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            المنصة تسعى لخلق تأثير دائم عبر تمكين الفئات الجديدة ودعم ثقافة العمل الحر المسؤول.
          </p>
        </div>
      ),
    },
  ]

  const selectedTopic = topics.find(t => t.id === selectedTopicId)

  const handleBack = () => {
    setSelectedTopicId(null)
  }

  return (
    <Slide background="dark">
      {/* Background Layer - Completely Isolated */}
      <div 
        className="fixed inset-0 z-0"
        style={{ 
          transform: 'translateZ(0)',
          isolation: 'isolate',
          contain: 'strict',
          willChange: 'auto',
          backfaceVisibility: 'hidden',
          pointerEvents: 'none',
          opacity: 0.45
        }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center" 
          style={{ 
            transform: 'translateY(90px) translateZ(0)',
            backfaceVisibility: 'hidden',
            width: '100vw',
            height: '100vh'
          }}
        >
          <div 
            className="w-full h-full" 
            style={{ 
              minHeight: '100vh',
              contain: 'strict',
              transform: 'translateZ(0) scale(0.8)'
            }}
          >
            <WorldMap
              dots={[
                {
                  start: { lat: 25.2048, lng: 55.2708 }, // Dubai
                  end: { lat: 51.5074, lng: -0.1278 }, // London
                },
                {
                  start: { lat: 25.2048, lng: 55.2708 }, // Dubai
                  end: { lat: 40.7128, lng: -74.006 }, // New York
                },
                {
                  start: { lat: 25.2048, lng: 55.2708 }, // Dubai
                  end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
                },
                {
                  start: { lat: 25.2048, lng: 55.2708 }, // Dubai
                  end: { lat: 24.7136, lng: 46.6753 }, // Riyadh
                },
                {
                  start: { lat: 25.2048, lng: 55.2708 }, // Dubai
                  end: { lat: 30.0444, lng: 31.2357 }, // Cairo
                },
              ]}
              lineColor="#BDFF2A"
            />
          </div>
        </div>
      </div>
      
      {/* Content Layer - Completely Isolated */}
      <div 
        className="relative z-[100]"
        style={{
          transform: 'translateZ(0)',
          isolation: 'isolate',
          contain: 'layout style paint',
          willChange: 'contents',
          backfaceVisibility: 'hidden',
          position: 'relative',
          minHeight: '100vh'
        }}
      >
        <AnimatePresence mode="sync">
          {!selectedTopicId ? (
            /* Topic List View */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center space-y-12 w-full h-full"
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="text-center mb-12"
              >
                <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
                  الأهداف والاستدامة
                </h1>
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#BDFF2A]/10 border border-[#BDFF2A]/30">
                  <p className="text-[#BDFF2A] text-sm font-semibold">
                    اضغط على أي موضوع لعرض التفاصيل
                  </p>
                </div>
              </motion.div>

              {/* Topic Cards Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                {topics.map((topic, index) => {
                  const gridCols = 3
                  const totalItems = topics.length
                  const fullRows = Math.floor(totalItems / gridCols)
                  const itemsInLastRow = totalItems % gridCols
                  const isInLastRow = itemsInLastRow > 0 && index >= fullRows * gridCols
                  const positionInLastRow = isInLastRow ? (index - fullRows * gridCols) : -1
                  
                  let gridColumnStart = undefined
                  let translateX = undefined
                  if (isInLastRow && itemsInLastRow < gridCols) {
                    const startColumn = Math.floor((gridCols - itemsInLastRow) / 2) + 1
                    gridColumnStart = positionInLastRow === 0 ? startColumn : undefined
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
                      delay={index * 0.05}
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
              transition={{ duration: 0.15, ease: 'easeOut' }}
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
      </div>
    </Slide>
  )
}
