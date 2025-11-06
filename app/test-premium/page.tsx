'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Rocket, Shield, Zap, CheckCircle, ArrowLeft } from 'lucide-react'
import { useState, useRef, MouseEvent } from 'react'

export default function TestPremiumPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#BDFF2A] opacity-[0.02] blur-[150px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#BDFF2A] opacity-[0.03] blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-20 py-20">
        {/* Premium Hero with 3D Card Effect */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#BDFF2A]/10 border border-[#BDFF2A]/30 mb-8">
              <span className="text-[#BDFF2A] font-bold">تصميم متطور</span>
            </div>

            <h1 className="text-8xl font-black mb-6 leading-none">
              ارتقِ بمشروعك
              <br />
              إلى المستوى <span className="text-[#BDFF2A]">التالي</span>
            </h1>

            <p className="text-2xl text-[#A6A6A6] max-w-3xl mx-auto leading-relaxed">
              حلول تقنية متقدمة مع تصميم استثنائي وتجربة مستخدم لا مثيل لها
            </p>
          </motion.div>

          {/* Interactive 3D Cards Grid */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Rocket className="w-12 h-12" />,
                title: 'انطلاقة سريعة',
                value: '10x',
                desc: 'أسرع من المنافسين',
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'أمان تام',
                value: '100%',
                desc: 'حماية مضمونة',
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'أداء فائق',
                value: '99.9%',
                desc: 'وقت تشغيل',
              },
            ].map((item, index) => (
              <Card3D key={index} item={item} index={index} />
            ))}
          </div>
        </section>

        {/* Premium Feature Tabs */}
        <section className="mb-32">
          <div className="bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-3xl p-10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#BDFF2A] opacity-[0.02] blur-[120px]" />

            <div className="relative z-10">
              {/* Tabs */}
              <div className="flex gap-4 mb-8 border-b-2 border-[#2A2A2A] pb-4">
                {['الميزات', 'الأسعار', 'الدعم'].map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
                      activeTab === index
                        ? 'bg-[#BDFF2A] text-black'
                        : 'text-[#A6A6A6] hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 0 && (
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      'واجهة مستخدم سهلة وبديهية',
                      'أداء سريع ومستقر',
                      'دعم فني على مدار الساعة',
                      'تحديثات منتظمة ومجانية',
                      'أمان على مستوى عالمي',
                      'تكامل مع جميع الأدوات',
                    ].map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#BDFF2A]/50 transition-all duration-300"
                      >
                        <CheckCircle className="w-6 h-6 text-[#BDFF2A] flex-shrink-0" />
                        <span className="text-white font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { name: 'الأساسية', price: '99', features: 5 },
                      { name: 'المتقدمة', price: '199', features: 10, popular: true },
                      { name: 'المؤسسية', price: '399', features: 15 },
                    ].map((plan, i) => (
                      <div
                        key={i}
                        className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                          plan.popular
                            ? 'bg-[#BDFF2A] text-black scale-105'
                            : 'bg-[#1A1A1A] border-2 border-[#2A2A2A] hover:border-[#BDFF2A]/50'
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-[#BDFF2A] rounded-full text-sm font-bold">
                            الأكثر شعبية
                          </div>
                        )}
                        <h3
                          className={`text-2xl font-bold mb-4 ${
                            plan.popular ? 'text-black' : 'text-white'
                          }`}
                        >
                          {plan.name}
                        </h3>
                        <div className="mb-6">
                          <span
                            className={`text-5xl font-black ${
                              plan.popular ? 'text-black' : 'text-[#BDFF2A]'
                            }`}
                          >
                            ${plan.price}
                          </span>
                          <span
                            className={`text-lg ${
                              plan.popular ? 'text-black/60' : 'text-[#666666]'
                            }`}
                          >
                            /شهر
                          </span>
                        </div>
                        <p
                          className={`mb-6 ${
                            plan.popular ? 'text-black/70' : 'text-[#A6A6A6]'
                          }`}
                        >
                          {plan.features} ميزة متضمنة
                        </p>
                        <button
                          className={`w-full py-3 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                            plan.popular
                              ? 'bg-black text-[#BDFF2A]'
                              : 'bg-[#BDFF2A] text-black'
                          }`}
                        >
                          اختر الباقة
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#BDFF2A]/10 border-2 border-[#BDFF2A] mb-6">
                      <Shield className="w-10 h-10 text-[#BDFF2A]" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">دعم فني 24/7</h3>
                    <p className="text-xl text-[#A6A6A6] max-w-2xl mx-auto mb-8">
                      فريقنا جاهز لمساعدتك في أي وقت. نحن نقدم دعم فني سريع وفعال
                    </p>
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="bg-[#BDFF2A] text-black px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3"
                    >
                      <span>تواصل معنا</span>
                      <ArrowLeft className="w-5 h-5" />
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Floating Stats */}
        <section>
          <div className="grid grid-cols-4 gap-6">
            {[
              { value: '168K+', label: 'مستخدم نشط' },
              { value: '95%', label: 'معدل الرضا' },
              { value: '24/7', label: 'دعم متواصل' },
              { value: '99.9%', label: 'وقت التشغيل' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-3xl p-8 text-center hover:border-[#BDFF2A]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-5xl font-black text-[#BDFF2A] mb-3">
                  {stat.value}
                </p>
                <p className="text-[#A6A6A6] font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

// 3D Interactive Card Component
function Card3D({
  item,
  index,
}: {
  item: { icon: React.ReactNode; title: string; value: string; desc: string }
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
      className="relative bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-3xl p-8 hover:border-[#BDFF2A]/50 transition-colors cursor-pointer"
    >
      <div style={{ transform: 'translateZ(30px)' }} className="relative z-10">
        <div className="text-[#BDFF2A] mb-6 transition-opacity duration-300" style={{ opacity: isHovered ? 0.8 : 1 }}>
          {item.icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-5xl font-black text-[#BDFF2A] mb-2">{item.value}</p>
        <p className="text-[#A6A6A6]">{item.desc}</p>
      </div>

      {/* Subtle glow on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-[#BDFF2A]/5 rounded-3xl pointer-events-none transition-opacity duration-300" />
      )}
    </motion.div>
  )
}
