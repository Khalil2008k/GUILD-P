'use client'

import { motion } from 'framer-motion'
import { Target, TrendingUp, Award, Lightbulb, Users, Zap } from 'lucide-react'
import { useState } from 'react'

export default function TestCardsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      title: 'هذا التدريب',
      subtitle: 'ليس للجميع',
      description: 'برنامج متخصص للأشخاص الجادين في تطوير مهاراتهم',
      icon: <Target className="w-10 h-10" />,
      featured: false,
      content: [
        'مصمم للمحترفين والطموحين',
        'يتطلب التزام كامل',
        'نتائج مضمونة مع العمل الجاد',
      ],
    },
    {
      title: 'لمن هذا التدريب؟',
      subtitle: null,
      description: null,
      icon: null,
      featured: true,
      content: [
        { icon: <Users className="w-6 h-6" />, text: 'من يريد بناء مستقبله المهني' },
        { icon: <Target className="w-6 h-6" />, text: 'من يبحث عن فرص حقيقية' },
        { icon: <Award className="w-6 h-6" />, text: 'من يسعى للتميز والاحتراف' },
      ],
    },
    {
      title: 'الحالات الدراسية:',
      subtitle: null,
      description: '15 طالب من أصل 18 حققوا نتائج مذهلة في أول شهرين',
      icon: <TrendingUp className="w-10 h-10" />,
      featured: false,
      content: [
        'طالب واحد حقق 100,000$ في السنة الأولى',
        'طالب آخر حقق 2600$ في شهرين',
      ],
    },
    {
      title: 'ما الذي حققه الطلاب؟',
      subtitle: null,
      description: null,
      icon: <Award className="w-10 h-10" />,
      featured: true,
      content: [
        'استراتيجيات تعمل بنجاح في السوق',
        'عائد مالي من الاستثمار',
      ],
    },
    {
      title: 'لماذا التداول',
      subtitle: 'أفضل وسيلة للدخل الإضافي؟',
      description: null,
      icon: <Zap className="w-10 h-10" />,
      featured: false,
      content: [
        { icon: <Target className="w-8 h-8" />, text: 'جدول زمني مرن', subtext: 'من أي مكان في العالم' },
        { icon: <TrendingUp className="w-8 h-8" />, text: 'يمكن كسب المال', subtext: 'من أي نقطة حول العالم' },
        { icon: <Lightbulb className="w-8 h-8" />, text: 'لا تحتاج سوى', subtext: 'الهاتف أو اللابتوب' },
      ],
    },
    {
      title: 'الباقات',
      subtitle: null,
      description: null,
      icon: null,
      featured: true,
      content: [
        { title: 'الباقة الأساسية', price: '6 شهور + متابعة', desc: 'للمبتدئين' },
        { title: 'الباقة المتقدمة', price: '9 شهور', desc: 'للمحترفين' },
        { title: 'الباقة الشاملة', price: '12 شهر', desc: 'للخبراء' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#000000] text-white p-8">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#BDFF2A] opacity-[0.03] blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#BDFF2A] opacity-[0.04] blur-[160px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-black mb-4">
            عرض <span className="text-[#BDFF2A]">الباقات</span>
          </h1>
          <p className="text-xl text-[#A6A6A6]">اختر الباقة المناسبة لك</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                relative rounded-3xl p-10 transition-all duration-300
                ${
                  card.featured
                    ? 'bg-[#BDFF2A] text-black'
                    : 'bg-[#0A0A0A] border-2 border-[#2A2A2A]'
                }
                ${hoveredCard === index && !card.featured ? 'border-[#BDFF2A]/50 -translate-y-1' : ''}
              `}
            >
              {/* Icon */}
              {card.icon && (
                <div
                  className={`mb-6 transition-opacity duration-300 ${
                    card.featured ? 'text-black' : 'text-[#BDFF2A]'
                  } ${hoveredCard === index ? 'opacity-80' : 'opacity-100'}`}
                >
                  {card.icon}
                </div>
              )}

              {/* Title */}
              <h3
                className={`text-3xl font-black mb-3 ${
                  card.featured ? 'text-black' : 'text-white'
                }`}
              >
                {card.title}
              </h3>

              {/* Subtitle */}
              {card.subtitle && (
                <h4
                  className={`text-xl font-bold mb-4 ${
                    card.featured ? 'text-black/80' : 'text-[#BDFF2A]'
                  }`}
                >
                  {card.subtitle}
                </h4>
              )}

              {/* Description */}
              {card.description && (
                <p
                  className={`mb-6 leading-relaxed ${
                    card.featured ? 'text-black/70' : 'text-[#A6A6A6]'
                  }`}
                >
                  {card.description}
                </p>
              )}

              {/* Content */}
              <div className="space-y-4 mt-8">
                {Array.isArray(card.content) &&
                  card.content.map((item, i) => (
                    <div
                      key={i}
                      className={`
                        ${
                          typeof item === 'string'
                            ? `flex items-center gap-3 ${
                                card.featured ? 'text-black' : 'text-white'
                              }`
                            : 'flex items-start gap-4'
                        }
                      `}
                    >
                      {typeof item === 'string' ? (
                        <>
                          <div
                            className={`w-2 h-2 rounded-full ${
                              card.featured ? 'bg-black' : 'bg-[#BDFF2A]'
                            }`}
                          />
                          <span className="font-medium">{item}</span>
                        </>
                      ) : 'icon' in item ? (
                        <>
                          <div
                            className={`flex-shrink-0 p-3 rounded-xl transition-opacity duration-300 ${
                              card.featured
                                ? 'bg-black/10 text-black'
                                : 'bg-[#BDFF2A]/10 text-[#BDFF2A]'
                            }`}
                          >
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <p
                              className={`font-bold mb-1 ${
                                card.featured ? 'text-black' : 'text-white'
                              }`}
                            >
                              {item.text}
                            </p>
                            {'subtext' in item && item.subtext && (
                              <p
                                className={`text-sm ${
                                  card.featured ? 'text-black/60' : 'text-[#666666]'
                                }`}
                              >
                                {item.subtext}
                              </p>
                            )}
                          </div>
                        </>
                      ) : (
                        <div
                          className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                            card.featured
                              ? 'bg-black/5 border-black/20'
                              : 'bg-[#1A1A1A] border-[#2A2A2A] hover:border-[#BDFF2A]/30'
                          }`}
                        >
                          <p
                            className={`font-bold mb-1 ${
                              card.featured ? 'text-black' : 'text-white'
                            }`}
                          >
                            {item.title}
                          </p>
                          <p
                            className={`text-sm mb-2 ${
                              card.featured ? 'text-black/70' : 'text-[#BDFF2A]'
                            }`}
                          >
                            {item.price}
                          </p>
                          <p
                            className={`text-xs ${
                              card.featured ? 'text-black/60' : 'text-[#666666]'
                            }`}
                          >
                            {item.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>

              {/* Subtle hover effect */}
              {!card.featured && hoveredCard === index && (
                <div className="absolute inset-0 rounded-3xl bg-[#BDFF2A]/5 pointer-events-none transition-opacity duration-300" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
