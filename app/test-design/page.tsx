'use client'

import { motion } from 'framer-motion'
import { Rocket, Shield, Zap, ArrowLeft, TrendingUp, Users } from 'lucide-react'

export default function TestDesignPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#BDFF2A] opacity-[0.02] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#BDFF2A] opacity-[0.03] blur-[130px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-20 py-20">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div>
                <p className="text-sm font-semibold tracking-wider text-[#BDFF2A] mb-4 uppercase">
                  حافظ على تقدمك
                </p>
                <h1 className="text-7xl font-black leading-[1.1] mb-6">
                  أفضل منصة
                  <br />
                  <span className="text-[#BDFF2A]">تقنية متطورة</span>
                  <br />
                  لمستقبلك.
                </h1>
              </div>

              <p className="text-xl text-[#A6A6A6] leading-relaxed max-w-lg">
                منصة متكاملة تجمع بين الابتكار والتقنية المتقدمة
                لتوفير حلول شاملة لجميع احتياجاتك
              </p>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#000000] bg-gradient-to-br from-[#BDFF2A] to-[#8BC34A] flex items-center justify-center text-xs font-bold text-black"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">168K+</p>
                  <p className="text-sm text-[#666666]">مستخدم نشط</p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group bg-[#BDFF2A] text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#CCFF55] transition-colors"
              >
                <span>ابدأ الآن</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </motion.button>
            </motion.div>

            {/* Right Visual - Central Card with Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Central card */}
              <div className="relative z-10 bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-3xl p-10 backdrop-blur-xl transition-all duration-300 hover:border-[#BDFF2A]/30">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#BDFF2A] flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-black" />
                  </div>
                  <div className="px-4 py-2 rounded-full bg-[#BDFF2A]/10 border border-[#BDFF2A]/30">
                    <p className="text-[#BDFF2A] text-sm font-bold">نشط</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4">النمو السريع</h3>
                <p className="text-[#A6A6A6] mb-8 leading-relaxed">
                  زيادة مستمرة في الأداء والكفاءة مع تحسينات يومية
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1A1A1A] rounded-2xl p-4 border border-[#2A2A2A] transition-all duration-300 hover:border-[#BDFF2A]/30">
                    <p className="text-[#666666] text-xs mb-1">معدل النمو</p>
                    <p className="text-[#BDFF2A] text-2xl font-bold">+45.8%</p>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-2xl p-4 border border-[#2A2A2A] transition-all duration-300 hover:border-[#BDFF2A]/30">
                    <p className="text-[#666666] text-xs mb-1">المستخدمون</p>
                    <p className="text-[#BDFF2A] text-2xl font-bold">168K</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Card Section */}
      <section className="relative py-32 px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-black mb-6">
              شريكك <span className="text-[#BDFF2A]">الموثوق</span>
            </h2>
            <p className="text-xl text-[#A6A6A6] max-w-2xl mx-auto">
              نوفر لك أفضل الحلول التقنية المتطورة
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                number: '01.',
                title: 'خدمة لأي مستوى خبرة',
                description: 'نوفر حلول مخصصة لجميع المستويات من المبتدئين إلى المحترفين',
                icon: <Users className="w-12 h-12" />,
                featured: false,
              },
              {
                number: '02.',
                title: 'أفضل ممارسات الصناعة',
                description: 'نتبع أحدث المعايير والممارسات العالمية في التطوير',
                icon: <Zap className="w-12 h-12" />,
                featured: true,
              },
              {
                number: '03.',
                title: 'محمي بالتأمين',
                description: 'جميع خدماتنا مؤمنة بالكامل لضمان راحة بالك',
                icon: <Shield className="w-12 h-12" />,
                featured: false,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`
                  group relative rounded-3xl p-10 transition-all duration-300
                  ${
                    card.featured
                      ? 'bg-[#BDFF2A] text-black'
                      : 'bg-[#0A0A0A] border-2 border-[#2A2A2A] hover:border-[#BDFF2A]/50 hover:-translate-y-1'
                  }
                `}
              >
                <p
                  className={`text-sm font-bold mb-6 ${
                    card.featured ? 'text-black/60' : 'text-[#BDFF2A]'
                  }`}
                >
                  {card.number}
                </p>

                <div
                  className={`mb-6 transition-opacity duration-300 ${
                    card.featured ? 'text-black' : 'text-[#BDFF2A] group-hover:opacity-80'
                  }`}
                >
                  {card.icon}
                </div>

                <h3
                  className={`text-2xl font-bold mb-4 ${
                    card.featured ? 'text-black' : 'text-white'
                  }`}
                >
                  {card.title}
                </h3>

                <p
                  className={`leading-relaxed ${
                    card.featured ? 'text-black/70' : 'text-[#A6A6A6]'
                  }`}
                >
                  {card.description}
                </p>

                {card.featured && (
                  <button className="mt-8 flex items-center gap-2 font-bold group/btn">
                    <span>اعرف المزيد</span>
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover/btn:-translate-x-1" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Platform Section */}
      <section className="relative py-32 px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20 items-center">
            {/* Left - Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-3xl p-10 transition-all duration-300 hover:border-[#BDFF2A]/30">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#BDFF2A]/10 border border-[#BDFF2A]/30 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#BDFF2A]" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">$4,528 USD</p>
                    <p className="text-sm text-[#666666]">متوسط الربح</p>
                  </div>
                </div>

                {/* Chart Line */}
                <div className="relative h-40 mb-6">
                  <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                    <path
                      d="M 0 140 Q 50 120, 100 100 T 200 60 T 300 40 T 400 20"
                      fill="none"
                      stroke="#BDFF2A"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                    <path
                      d="M 0 140 Q 50 120, 100 100 T 200 60 T 300 40 T 400 20 L 400 160 L 0 160 Z"
                      fill="url(#statsGradient)"
                    />
                    <defs>
                      <linearGradient id="statsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#BDFF2A" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#BDFF2A" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#666666]">معدل النمو</span>
                  <span className="text-[#BDFF2A] font-bold">+45.66%</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <h2 className="text-6xl font-black leading-tight">
                منصة <span className="text-[#BDFF2A]">موثوقة</span>
                <br />
                في أي وقت وأي مكان
              </h2>

              <p className="text-lg text-[#A6A6A6] leading-relaxed">
                منصة آمنة ومتطورة توفر نظام متنامي من البلوكشين المتخصصة.
                التطبيقات والخدمات على المنصة يمكن أن توفر نظام بيئي متكامل.
              </p>

              <p className="text-lg text-white font-semibold">
                المنصة <span className="text-[#BDFF2A]">توحد وتؤمن</span> نظام بيئي متنامي
                من البلوكشين المتخصصة المسماة بالسلاسل.
              </p>

              <div className="flex gap-4 pt-4">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#BDFF2A] text-black px-8 py-4 rounded-full font-bold flex items-center gap-2"
                >
                  <span>اعرف المزيد</span>
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="border-2 border-[#2A2A2A] text-white px-8 py-4 rounded-full font-bold hover:border-[#BDFF2A]/50 transition-colors"
                >
                  اطرح سؤال
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
