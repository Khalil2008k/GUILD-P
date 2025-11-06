'use client'

import Slide from '@/app/components/Slide'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Briefcase, GraduationCap, Target, Flame } from 'lucide-react'
import { useState } from 'react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export default function Slide1() {
  const [selectedItem, setSelectedItem] = useState<number>(0)

  const items = [
    {
      title: 'الجيل الجديد وسوق العمل',
      icon: <Users className="w-6 h-6" />,
      description: 'الجيل الجديد يواجه سوقًا لا يفهمه. الأنظمة القديمة ما زالت تقيّم الإنسان بالشهادة لا بالكفاءة، وبعدد الساعات لا بقيمة الفكرة. يخرج الشاب اليوم إلى واقعٍ يرفض أحلامه، بينما التكنولوجيا تغيّر كل شيء من حوله. يحتاج هذا الجيل إلى مساحة جديدة تتيح له أن يعمل بشروطه، ويثبت قدرته دون أن يُحكم عليه بسقفٍ إداريٍّ جامد. ذوو الاحتياجات الخاصة ومرضى التوحد يحتاجون فرص عمل مناسبة تتناسب مع قدراتهم.',
      points: [
        'يخرج الشاب اليوم إلى واقعٍ يرفض أحلامه',
        'التكنولوجيا تغيّر كل شيء من حوله',
        'يحتاج هذا الجيل إلى مساحة جديدة تتيح له أن يعمل بشروطه',
        'ذوو الاحتياجات الخاصة يحتاجون فرص عمل مرنة',
      ],
    },
    {
      title: 'سوق بلا مرونة',
      icon: <Briefcase className="w-6 h-6" />,
      description: 'الوظائف اليوم صلبة كالحديد. من الثامنة إلى الخامسة، من المكتب إلى المكتب، نفس الروتين ونفس القيود. لا مكان للتجربة ولا لتعدّد مصادر الدخل. هذه الصلابة جعلت العمل عبئًا بدل أن يكون وسيلة حياة، وخلقت جيلاً يهرب من الوظيفة التقليدية إلى المجهول. مرضى التوحد وذوو الاحتياجات الخاصة يحتاجون بيئة عمل مرنة تتناسب مع احتياجاتهم.',
      points: [
        'لا مكان للتجربة ولا لتعدّد مصادر الدخل',
        'هذه الصلابة جعلت العمل عبئًا بدل أن يكون وسيلة حياة',
        'خلقت جيلاً يهرب من الوظيفة التقليدية إلى المجهول',
        'مرضى التوحد يحتاجون بيئة عمل مناسبة',
      ],
    },
    {
      title: 'الاعتماد على الشهادات بدل الكفاءات',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'في عالمٍ يتبدّل كل ستة أشهر، ما زالت المؤسسات تبحث عن الورق لا عن المهارة. الشهادة أصبحت جدارًا يمنع المواهب من الوصول إلى فرصها. بينما الواقع يقول: من يملك الفكرة، يملك المستقبل. ذوو الاحتياجات الخاصة لديهم مهارات قد لا تُعكس في الشهادات التقليدية.',
      points: [
        'المؤسسات تبحث عن الورق لا عن المهارة',
        'الشهادة أصبحت جدارًا يمنع المواهب من الوصول إلى فرصها',
        'من يملك الفكرة، يملك المستقبل',
        'ذوو الاحتياجات الخاصة لديهم مهارات قيمة',
      ],
    },
    {
      title: 'الفرص المفقودة',
      icon: <Target className="w-6 h-6" />,
      description: 'هناك ملايين المواهب التي لا تجد طريقها. الوقت، والمكان، والظروف الاجتماعية تُغلق الأبواب أمامهم. كل مهارة غير مستخدمة خسارةٌ للمجتمع والاقتصاد. المشكلة ليست في غياب العمل، بل في غياب الجسر الذي يصل العامل بالفرصة. ذوو الاحتياجات الخاصة ومرضى التوحد غالباً ما يُستبعدون من سوق العمل.',
      points: [
        'ملايين المواهب التي لا تجد طريقها',
        'كل مهارة غير مستخدمة خسارةٌ للمجتمع والاقتصاد',
        'غياب الجسر الذي يصل العامل بالفرصة',
        'ذوو الاحتياجات الخاصة يحتاجون فرص عمل مناسبة',
      ],
    },
    {
      title: 'الاحتراق والإحباط',
      icon: <Flame className="w-6 h-6" />,
      description: 'تتحول بيئات العمل إلى ساحات استنزاف. ضغطٌ نفسي، ساعاتٌ طويلة، غياب التقدير، ورواتب لا تعكس الجهد. الإنسان يُستبدل بسرعة الحاسوب، فيفقد الإحساس بالانتماء. لم يعد العمل وسيلةً للعيش فقط، بل أصبح معركةً للحفاظ على الذات. مرضى التوحد يحتاجون بيئة عمل داعمة ومريحة.',
      points: [
        'ضغط نفسي، ساعات طويلة، غياب التقدير',
        'رواتب لا تعكس الجهد',
        'فقدان الإحساس بالانتماء',
        'مرضى التوحد يحتاجون بيئة عمل داعمة',
      ],
    },
  ]

  return (
    <Slide background="dark">
      <div className="h-screen bg-[#000000] text-white p-6 flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#BDFF2A] opacity-[0.03] blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#BDFF2A] opacity-[0.04] blur-[160px]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8"
          >
                <h1 className="text-5xl font-black mb-3">
                  سوق <span className="text-[#BDFF2A] mx-1">العمل اليوم</span>
                </h1>
            <p className="text-lg text-[#A6A6A6]">التحديات في سوق العمل الحالي</p>
          </motion.div>

          {/* Two Cards Layout */}
          <div className="grid grid-cols-2 gap-6">
            {/* Black Card - List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-3xl p-6 relative overflow-hidden max-h-full"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <h2 className="text-3xl font-black mb-6 text-white">اختر الموضوع</h2>
              <div className="space-y-3">
                {items.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedItem(index)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className={`
                      relative w-full text-right p-4 rounded-2xl transition-all duration-300
                      flex items-center gap-4 overflow-hidden
                      ${
                        selectedItem === index
                          ? 'bg-[#BDFF2A]/20 border-2 border-[#BDFF2A] text-[#BDFF2A]'
                          : 'bg-[#1A1A1A] border-2 border-[#2A2A2A] text-white hover:border-[#BDFF2A]/50 hover:bg-[#1A1A1A]'
                      }
                    `}
                    whileHover={{ scale: 1.02, x: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <div className={`flex-shrink-0 ${selectedItem === index ? 'text-[#BDFF2A]' : 'text-[#BDFF2A]/70'}`}>
                      {item.icon}
                    </div>
                    <span className="font-bold text-xl flex-1">{item.title}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Green Card - Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#BDFF2A] text-black rounded-3xl p-8 max-h-full overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="text-black">
                      {items[selectedItem].icon}
                    </div>
                    <h3 className="text-4xl font-black">{items[selectedItem].title}</h3>
                  </div>

                  <p className="text-xl leading-relaxed mb-6 text-black/80">
                    {items[selectedItem].description}
                  </p>

                  <div className="space-y-3">
                    {items[selectedItem].points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-black mt-2 flex-shrink-0" />
                        <span className="font-medium text-lg text-black">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  )
}

