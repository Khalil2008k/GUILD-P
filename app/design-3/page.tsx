'use client'

import { motion } from 'framer-motion'
import { BarChart3, Globe, Smartphone } from 'lucide-react'

export default function Design3Page() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-0">
      <div className="w-full h-screen bg-black p-20 flex items-center justify-center">
        <div className="w-full max-w-6xl h-full flex flex-col justify-between py-8">
          {/* Header */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl font-black text-white mb-4 leading-tight"
            >
              لماذا التكنولوجيا
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-6xl font-black text-[#BDFF2A] leading-tight"
            >
              هي أفضل وسيلة
              <br />
              لتطوير مشروعك
              <br />
              ؟بشكل احترافي
            </motion.h2>
          </div>

          {/* Feature List */}
          <div className="space-y-8">
            {[
              {
                icon: <BarChart3 className="w-10 h-10" />,
                title: 'رسوم بيانية متقدمة',
                subtitle: 'تحليل دقيق للبيانات'
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: 'وصول عالمي',
                subtitle: 'من أي مكان في العالم'
              },
              {
                icon: <Smartphone className="w-10 h-10" />,
                title: 'سهولة الاستخدام',
                subtitle: 'على جميع الأجهزة'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-6"
              >
                <div className="w-20 h-20 rounded-[30px] bg-[#BDFF2A]/10 border-2 border-[#BDFF2A] flex items-center justify-center flex-shrink-0 text-[#BDFF2A]">
                  {item.icon}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-white font-bold text-2xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-base">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
