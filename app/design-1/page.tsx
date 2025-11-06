'use client'

import { motion } from 'framer-motion'
import { Rocket, Zap, Shield } from 'lucide-react'

export default function Design1Page() {
  return (
    <div className="min-h-screen bg-[#BDFF2A] flex items-center justify-center p-0">
      <div className="w-full h-screen flex items-center justify-center px-16 py-20">
        {/* Header Text */}
        <div className="w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-7xl font-black text-black mb-2">
              لماذا تختارنا
            </h1>
            <h2 className="text-7xl font-black text-black">
              ؟للمشروع الخاص بك
            </h2>
          </motion.div>

          {/* Three Cards */}
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-16 h-16" />,
                title: 'انطلاقة سريعة',
                subtitle: 'نبدأ مشروعك في أسرع وقت'
              },
              {
                icon: <Zap className="w-16 h-16" />,
                title: 'أداء عالي',
                subtitle: 'تقنيات متطورة للأداء الأمثل'
              },
              {
                icon: <Shield className="w-16 h-16" />,
                title: 'أمان موثوق',
                subtitle: 'حماية كاملة لبياناتك'
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-black rounded-[50px] p-10 flex flex-col items-center justify-center min-h-[320px]"
              >
                <div className="text-[#BDFF2A] mb-6">
                  {card.icon}
                </div>
                <h3 className="text-white text-2xl font-bold text-center mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-white/70 text-base text-center leading-snug">
                  {card.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
