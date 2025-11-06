'use client'

import { motion } from 'framer-motion'

export default function Design2Page() {
  return (
    <div className="min-h-screen bg-[#BDFF2A] flex items-center justify-center p-0">
      <div className="w-full h-screen grid grid-cols-[2fr_1fr]">
        {/* Left Side - List */}
        <div className="bg-white p-16 flex flex-col justify-center">
          <div className="space-y-5 max-w-2xl">
            {[
              { label: 'المستوى الأول', subtitle: 'للمبتدئين في المجال', highlight: false },
              { label: 'المستوى المتقدم', subtitle: 'تعلم متعمق واستراتيجيات متطورة', highlight: true },
              { label: 'الوحدة #1', subtitle: 'مقدمة في التصميم', highlight: false },
              { label: 'الوحدة #2', subtitle: 'التحليل والتخطيط', highlight: false },
              { label: 'الوحدة #3', subtitle: 'التنفيذ والتطبيق', highlight: false },
              { label: 'الوحدة #4', subtitle: 'إدارة المشاريع', highlight: false },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className={`p-6 rounded-[35px] transition-all duration-300 ${
                  item.highlight 
                    ? 'bg-[#BDFF2A]' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <h3 className="text-black text-xl font-black mb-1">
                  {item.label}
                </h3>
                <p className="text-black/60 text-base font-medium">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Rotated Text */}
        <div className="bg-[#BDFF2A] flex items-center justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, rotate: -90, x: 50 }}
            animate={{ opacity: 1, rotate: -90, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute"
          >
            <h2 className="text-9xl font-black text-black whitespace-nowrap tracking-tight">
              الباقات
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
