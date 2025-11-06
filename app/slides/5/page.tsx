'use client'

import Slide from '@/app/components/Slide'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { BookOpen, Store, Building2, User, CheckCircle } from 'lucide-react'
import { useState, useRef, MouseEvent } from 'react'
import React from 'react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export default function Slide5() {
  const [activeTab, setActiveTab] = useState(0)

  const topics = [
    {
      id: 'education',
      title: 'التعليم',
      icon: <BookOpen className="w-12 h-12" />,
      description: 'يمكن للمدارس والجامعات استضافة خبراء عبر Guild لإثراء التجربة التعليمية. ساعة واحدة من الواقع العملي قد تغيّر نظرة الطالب إلى تخصصه.',
      points: [
        'استضافة خبراء عبر Guild',
        'إثراء التجربة التعليمية',
        'ساعة واحدة من الواقع العملي قد تغيّر نظرة الطالب',
      ],
    },
    {
      id: 'businesses',
      title: 'الأعمال الصغيرة',
      icon: <Store className="w-12 h-12" />,
      description: 'المطاعم والمتاجر يمكنها توظيف موظفين مؤقتين بسرعة دون عقود طويلة. كل شيء يتم عبر التطبيق بمرونة وسلاسة.',
      points: [
        'توظيف موظفين مؤقتين بسرعة',
        'دون عقود طويلة',
        'كل شيء يتم عبر التطبيق بمرونة وسلاسة',
      ],
    },
    {
      id: 'government',
      title: 'المشاريع الحكومية',
      icon: <Building2 className="w-12 h-12" />,
      description: 'المؤسسات العامة تستطيع عبر Guild تنفيذ المهام بسرعة باستخدام كوادر محلية موثوقة. النظام يخلق جسورًا بين القطاعين العام والخاص.',
      points: [
        'تنفيذ المهام بسرعة',
        'استخدام كوادر محلية موثوقة',
        'النظام يخلق جسورًا بين القطاعين العام والخاص',
      ],
    },
    {
      id: 'individuals',
      title: 'الأفراد',
      icon: <User className="w-12 h-12" />,
      description: 'كل فرد يستطيع تحويل وقته الفارغ إلى قيمة. مهمة قصيرة، ترجمة، تصميم، أو تصوير — كل مهارة تجد مكانها هنا.',
      points: [
        'تحويل الوقت الفارغ إلى قيمة',
        'مهمة قصيرة، ترجمة، تصميم، أو تصوير',
        'كل مهارة تجد مكانها هنا',
      ],
    },
  ]

  return (
    <Slide background="dark">
      <div className="h-screen text-white p-4 md:p-6 flex items-center justify-center overflow-hidden">

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-4 h-full flex flex-col">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#BDFF2A]/10 border border-[#BDFF2A]/30 mb-3">
              <span className="text-[#BDFF2A] font-bold text-base">Guild في الحياة اليومية</span>
            </div>

                <h1 className="text-4xl md:text-5xl font-black mb-2 leading-tight">
                  Guild في <span className="text-[#BDFF2A] mx-1">الحياة اليومية</span>
                </h1>

            <p className="text-base md:text-lg text-[#A6A6A6] max-w-2xl mx-auto leading-relaxed">
              منصة Guild تلبي احتياجات مختلف القطاعات والأفراد بطريقة مرنة وفعالة
            </p>
          </motion.div>

          {/* 3D Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 flex-shrink-0">
            {topics.map((topic, index) => (
              <Card3D key={topic.id} item={topic} index={index} />
            ))}
          </div>

          {/* Premium Feature Tabs */}
          <div className="bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-2xl p-5 md:p-6 relative overflow-hidden flex-1 flex flex-col min-h-0">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#BDFF2A] opacity-[0.02] blur-[120px]" />

            <div className="relative z-10 flex flex-col flex-1 min-h-0">
              {/* Tabs */}
              <div className="flex flex-wrap gap-3 mb-4 border-b-2 border-[#2A2A2A] pb-3 flex-shrink-0">
                {topics.map((topic, index) => (
                  <button
                    key={topic.id}
                    onClick={() => setActiveTab(index)}
                    className={`px-5 py-2.5 rounded-xl font-bold text-sm md:text-base transition-all ${
                      activeTab === index
                        ? 'bg-[#BDFF2A] text-black'
                        : 'text-[#A6A6A6] hover:text-white'
                    }`}
                  >
                    {topic.title}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col min-h-0"
              >
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-[#BDFF2A]">
                      {React.cloneElement(topics[activeTab].icon as React.ReactElement, { className: 'w-8 h-8 md:w-10 md:h-10' })}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {topics[activeTab].title}
                    </h3>
                  </div>

                  <p className="text-base md:text-lg text-[#A6A6A6] leading-relaxed mb-3">
                    {topics[activeTab].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
                    {topics[activeTab].points.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#BDFF2A]/50 transition-all duration-300"
                      >
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#BDFF2A] flex-shrink-0" />
                        <span className="text-white font-medium text-sm md:text-base">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}

// 3D Interactive Card Component
function Card3D({
  item,
  index,
}: {
  item: { icon: React.ReactNode; title: string; description: string }
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-2xl p-4 md:p-5 hover:border-[#BDFF2A]/50 transition-colors cursor-pointer overflow-hidden"
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div style={{ transform: 'translateZ(30px)' }} className="relative z-10">
        <div className="text-[#BDFF2A] mb-3 transition-opacity duration-300" style={{ opacity: isHovered ? 0.8 : 1 }}>
          {React.cloneElement(item.icon as React.ReactElement, { className: 'w-8 h-8 md:w-10 md:h-10' })}
        </div>

        <h3 className="text-base md:text-lg font-bold text-white mb-2">{item.title}</h3>
        <p className="text-sm md:text-base text-[#A6A6A6] line-clamp-2">{item.description}</p>
      </div>

      {/* Subtle glow on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-[#BDFF2A]/5 rounded-2xl pointer-events-none transition-opacity duration-300" />
      )}
    </motion.div>
  )
}
