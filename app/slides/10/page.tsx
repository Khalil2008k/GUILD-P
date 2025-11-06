'use client'

import Slide from '@/app/components/Slide'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Star, Users, FileText, Shield, MessageSquare, Trophy, Building, CheckCircle2, X } from 'lucide-react'
import { useState } from 'react'
import React from 'react'

export default function Slide10() {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null)

  const topics = [
    {
      id: 'ranks',
      title: 'نظام Ranking',
      subtitle: 'يبدأ المستخدم برتبة G ويصعد تدريجيًا حتى S. كل رتبة تمثّل ثقة أعلى وفرصًا أكبر. التقدم يعتمد على الإنجازات، التقييمات، والالتزام بالعقود.',
      icon: <Award className="w-12 h-12" />,
      description: 'يبدأ المستخدم برتبة G ويصعد تدريجيًا حتى S. كل رتبة تمثّل ثقة أعلى وفرصًا أكبر. التقدم يعتمد على الإنجازات، التقييمات، والالتزام بالعقود.',
    },
    {
      id: 'rating',
      title: 'نظام التقييم',
      subtitle: 'بعد كل مهمة، يقيّم الطرفان بعضهما. هذا النظام يبني سمعة رقمية حقيقية تحدد ترتيبك في المنصة وتؤثر على نوعية الفرص المتاحة لك.',
      icon: <Star className="w-12 h-12" />,
      description: 'بعد كل مهمة، يقيّم الطرفان بعضهما. هذا النظام يبني سمعة رقمية حقيقية تحدد ترتيبك في المنصة وتؤثر على نوعية الفرص المتاحة لك.',
    },
    {
      id: 'guilds',
      title: 'إنشاء Guilds',
      subtitle: 'من يصل إلى رتبة C يستطيع تأسيس Guild خاصة. يبدأ كـ Guild Master ويختار نوابًا وأعضاء يتراوح عددهم بين 5 و 20 ألفًا. المهام الجماعية ترفع مستوى Guild وتمنحها مكافآت مشتركة.',
      icon: <Users className="w-12 h-12" />,
      description: 'من يصل إلى رتبة C يستطيع تأسيس Guild خاصة. يبدأ كـ Guild Master ويختار نوابًا وأعضاء يتراوح عددهم بين 5 و 20 ألفًا. المهام الجماعية ترفع مستوى Guild وتمنحها مكافآت مشتركة.',
    },
    {
      id: 'contracts',
      title: 'العقود الالكترونية',
      subtitle: 'كل مهمة تبدأ وتنتهي عبر عقد إلكتروني يحتوي على القواعد الأساسية وشروط الطرفين. العقد يُوقّع برمز QR خاص بالمستخدم ويُوثّق داخل النظام لحماية الحقوق.',
      icon: <FileText className="w-12 h-12" />,
      description: 'كل مهمة تبدأ وتنتهي عبر عقد إلكتروني يحتوي على القواعد الأساسية وشروط الطرفين. العقد يُوقّع برمز QR خاص بالمستخدم ويُوثّق داخل النظام لحماية الحقوق.',
    },
    {
      id: 'gid',
      title: 'نظام GID',
      subtitle: 'كل مستخدم يمتلك معرفًا رقميًا فريدًا يُعرف باسم GID. هذا الرقم هو هويتك داخل المنصة ويُستخدم في التوقيعات الرقمية، دون الحاجة لكشف بياناتك الشخصية.',
      icon: <Shield className="w-12 h-12" />,
      description: 'كل مستخدم يمتلك معرفًا رقميًا فريدًا يُعرف باسم GID. هذا الرقم هو هويتك داخل المنصة ويُستخدم في التوقيعات الرقمية، دون الحاجة لكشف بياناتك الشخصية.',
    },
    {
      id: 'disputes',
      title: 'نظام النزاعات',
      subtitle: 'في حال الخلاف، يتدخّل نظام التحكيم المدمج لحماية حقوق الطرفين بموضوعية وشفافية، لضمان العدالة وسرعة الفصل في النزاعات.',
      icon: <CheckCircle2 className="w-12 h-12" />,
      description: 'في حال الخلاف، يتدخّل نظام التحكيم المدمج لحماية حقوق الطرفين بموضوعية وشفافية، لضمان العدالة وسرعة الفصل في النزاعات.',
    },
    {
      id: 'leaderboard',
      title: 'لوحة الشرف',
      subtitle: 'ترتيب عالمي للـ Guilds والمستخدمين يعتمد على الأداء، عدد المهام، ومستوى الثقة. هذه اللوحة تعزز التنافس الشريف وتشجع الإبداع.',
      icon: <Trophy className="w-12 h-12" />,
      description: 'ترتيب عالمي للـ Guilds والمستخدمين يعتمد على الأداء، عدد المهام، ومستوى الثقة. هذه اللوحة تعزز التنافس الشريف وتشجع الإبداع.',
    },
    {
      id: 'types',
      title: 'أنواع الـGuilds',
      subtitle: 'هناك Guilds عامة مفتوحة لكل المجالات، وأخرى خاصة تُدار بدعوة، متخصصة في مجالات محددة كالتقنية أو التصميم أو التعليم.',
      icon: <Building className="w-12 h-12" />,
      description: 'هناك Guilds عامة مفتوحة لكل المجالات، وأخرى خاصة تُدار بدعوة، متخصصة في مجالات محددة كالتقنية أو التصميم أو التعليم.',
    },
    {
      id: 'chat',
      title: 'نظام الدردشة',
      subtitle: 'نظام تواصل متكامل داخل التطبيق يسمح بالنقاش، إرسال الملفات، والتنسيق الفوري، مما يجعل بيئة العمل الرقمية أكثر واقعية وتفاعلاً.',
      icon: <MessageSquare className="w-12 h-12" />,
      description: 'نظام تواصل متكامل داخل التطبيق يسمح بالنقاش، إرسال الملفات، والتنسيق الفوري، مما يجعل بيئة العمل الرقمية أكثر واقعية وتفاعلاً.',
    },
  ]

  return (
    <Slide background="dark">
      <div className="fixed inset-0 bg-[#BDFF2A] flex items-center justify-center p-0 overflow-hidden">
        <div className="w-full h-full grid grid-cols-[2fr_1fr]">
          {/* Left Side - Cuboid Cards Grid 3x3 or Full Card */}
          <div className="bg-white p-3 md:p-4 flex items-center justify-center relative overflow-hidden w-full h-full">
            <AnimatePresence mode="wait">
              {selectedTopic !== null ? (
                /* Full Card View */
                <motion.div
                  key="full-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex flex-col justify-center items-center p-8 md:p-12 relative"
                >
                  {/* Close Button */}
                  <motion.button
                    onClick={() => setSelectedTopic(null)}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#BDFF2A] flex items-center justify-center text-black hover:bg-[#BDFF2A]/80 transition-colors cursor-pointer z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 md:w-7 md:h-7" />
                  </motion.button>

                  {/* Full Card Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="w-full max-w-4xl flex flex-col items-center text-center"
                  >
                    <div className="text-[#BDFF2A] mb-6 flex justify-center">
                      {React.cloneElement(topics[selectedTopic].icon as React.ReactElement, { 
                        className: 'w-20 h-20 md:w-24 md:h-24' 
                      })}
                    </div>
                    <h3 className="text-black text-4xl md:text-5xl font-black mb-6 leading-tight">
                      {topics[selectedTopic].title}
                    </h3>
                    <p className="text-black/70 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
                      {topics[selectedTopic].description}
                    </p>
                  </motion.div>
                </motion.div>
              ) : (
                /* Grid 3x3 View */
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full grid grid-cols-3 grid-rows-3 gap-2 md:gap-2.5"
                >
                  {topics.slice(0, 9).map((topic, index) => (
                    <motion.div
                      key={topic.id}
                      onClick={() => setSelectedTopic(index)}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                      whileHover={{ scale: 1.05, z: 10 }}
                      className={`
                        relative bg-white rounded-lg p-3 md:p-4 flex flex-col justify-center items-center text-center
                        transform transition-all duration-300 cursor-pointer border-2
                        border-gray-200 hover:border-gray-300
                      `}
                      style={{
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)',
                      }}
                    >
                      {/* Content */}
                      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-1.5">
                        <div className="text-[#BDFF2A] flex justify-center">
                          {React.cloneElement(topic.icon as React.ReactElement, { 
                            className: 'w-8 h-8 md:w-10 md:h-10' 
                          })}
                        </div>
                        <h4 className="text-black text-lg md:text-xl font-black line-clamp-1 leading-tight">
                          {topic.title}
                        </h4>
                        <p className="text-black/60 text-base md:text-lg font-medium line-clamp-3 leading-tight px-1">
                          {topic.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side - Rotated Text */}
          <div className="bg-[#BDFF2A] flex items-center justify-center relative overflow-hidden w-full h-full">
            <motion.div
              initial={{ opacity: 0, rotate: -90, x: 50 }}
              animate={{ opacity: 1, rotate: -90, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute"
            >
              <h2 className="text-7xl md:text-9xl font-black text-black whitespace-nowrap tracking-tight">
                داخل Guild
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
