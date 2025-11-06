'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Rocket, Grid3x3, Sparkles, Home, ArrowLeft } from 'lucide-react'

export default function DesignPreviewPage() {
  const router = useRouter()

  const pages = [
    {
      title: 'Hero & Features',
      path: '/test-design',
      description: 'صفحة هبوط كاملة مع رسوم متحركة وعناصر تفاعلية',
      icon: <Rocket className="w-12 h-12" />,
      features: ['Hero Section', '3 Card Grid', 'Stats Charts', 'Call to Action'],
    },
    {
      title: 'Modular Cards',
      path: '/test-cards',
      description: 'نظام بطاقات معياري مستوحى من التصميم المرجعي',
      icon: <Grid3x3 className="w-12 h-12" />,
      features: ['2-Column Grid', 'Featured Cards', 'Icon Sections', 'Hover Effects'],
    },
    {
      title: 'Premium 3D',
      path: '/test-premium',
      description: 'تفاعلات متقدمة مع بطاقات ثلاثية الأبعاد وتأثيرات حركية',
      icon: <Sparkles className="w-12 h-12" />,
      features: ['3D Tilt Cards', 'Animated Tabs', 'Pricing Tables', 'Stats Display'],
    },
  ]

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#BDFF2A] opacity-[0.03] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#BDFF2A] opacity-[0.02] blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-20 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#BDFF2A]/10 border border-[#BDFF2A]/30 mb-8">
            <span className="text-[#BDFF2A] font-bold">معاينة التصميم المتطور</span>
          </div>

          <h1 className="text-7xl font-black mb-6 leading-tight">
            نظام التصميم
            <br />
            <span className="text-[#BDFF2A]">المتطور</span>
          </h1>

          <p className="text-2xl text-[#A6A6A6] max-w-3xl mx-auto leading-relaxed">
            ثلاث صفحات تجريبية تعرض أفضل ممارسات التصميم الحديث
            مع تأثيرات متقدمة ورسوم متحركة احترافية
          </p>
        </motion.div>

        {/* Preview Cards */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {pages.map((page, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => router.push(page.path)}
              className="group cursor-pointer bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-3xl p-8 hover:border-[#BDFF2A]/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-[#BDFF2A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-[#BDFF2A] mb-6 transition-opacity duration-300 group-hover:opacity-80">
                  {page.icon}
                </div>

                <h3 className="text-3xl font-bold mb-3 text-white">{page.title}</h3>
                <p className="text-[#A6A6A6] mb-6 leading-relaxed">{page.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {page.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#BDFF2A]" />
                      <span className="text-sm text-[#A6A6A6]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="flex items-center gap-2 text-[#BDFF2A] font-bold transition-transform duration-300 group-hover:-translate-x-1">
                  <span>عرض الصفحة</span>
                  <ArrowLeft className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            onClick={() => router.push('/')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-3 bg-[#BDFF2A] text-black px-10 py-5 rounded-full font-bold text-lg"
          >
            <Home className="w-6 h-6" />
            <span>العودة للعرض التقديمي</span>
          </motion.button>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 bg-[#0A0A0A] border-2 border-[#BDFF2A]/30 rounded-3xl p-10"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">معلومات مهمة</h3>
          <div className="space-y-3 text-[#A6A6A6]">
            <p>• جميع الصفحات مبنية باستخدام نفس نظام الألوان: <span className="text-[#BDFF2A] font-bold">#BDFF2A</span> على خلفية سوداء نقية</p>
            <p>• الرسوم المتحركة تستخدم <span className="text-white font-bold">Framer Motion</span> مع تأثيرات سلسة</p>
            <p>• جميع المكونات قابلة لإعادة الاستخدام ويمكن دمجها في العرض التقديمي</p>
            <p>• راجع ملف <span className="text-[#BDFF2A] font-mono">PREMIUM_DESIGN_SYSTEM.md</span> للتفاصيل الكاملة</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
