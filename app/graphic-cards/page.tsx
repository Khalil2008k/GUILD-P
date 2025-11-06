'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, BookOpen, Gift } from 'lucide-react'

export default function GraphicCardsPage() {
  return (
    <div className="min-h-screen bg-[#BDFF2A] p-16">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-sm tracking-[0.4em] text-black/40 mb-2">
          ПРЕЗЕНТАЦИИ • KARSCREATE • GRAPHIC DESIGNER • ПРЕЗЕНТАЦИИ
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-8 mb-8">
        
        {/* Card 1 - Training Not For Everyone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-[#1a2a1a] rounded-[40px] border-[8px] border-black p-12 overflow-hidden aspect-[1.4/1] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(26,42,26,0.9)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect fill="%23264d26" width="400" height="300"/></svg>')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-white mb-3 leading-tight">
              ЭТО ОБУЧЕНИЕ
            </h2>
            <h2 className="text-5xl font-black text-[#BDFF2A] leading-tight">
              НЕ ДЛЯ ВСЕХ
            </h2>
          </div>
        </motion.div>

        {/* Card 2 - For Whom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#BDFF2A] rounded-[40px] border-[8px] border-black p-12 aspect-[1.4/1]"
        >
          <h2 className="text-5xl font-black text-black mb-8 text-center leading-tight">
            ДЛЯ КОГО<br />ЭТО ОБУЧЕНИЕ?
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: '☕', text: 'Кто давно хотел научиться, но боялся' },
              { icon: '💰', text: 'Кто хочет зарабатывать больше 3000$ в месяц' },
              { icon: '😎', text: 'Кто хочет брать отпуск сразу с лимонадом' },
            ].map((item, i) => (
              <div key={i} className="bg-black rounded-3xl p-6 flex flex-col items-center justify-center text-center min-h-[140px]">
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-white text-sm font-semibold leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 3 - Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-black rounded-[40px] border-[8px] border-black p-12 aspect-[1.4/1] relative"
        >
          <h2 className="text-5xl font-black text-white mb-8">КЕЙСЫ:</h2>
          
          <div className="relative">
            {/* Arrow path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
              <path
                d="M 50 40 Q 150 20, 250 60 T 350 100"
                stroke="#BDFF2A"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>

            {/* Text annotations */}
            <div className="relative space-y-4">
              <div className="absolute top-0 right-16">
                <p className="text-white text-sm font-bold">15 студентов из 18</p>
                <p className="text-gray-400 text-xs">прошли челлендж и пролонгировали<br />обучение более 3-х месяцев</p>
              </div>
              
              <div className="absolute top-24 left-12">
                <p className="text-[#BDFF2A] text-sm font-bold">Один студент а получил<br />100 000$ под управление</p>
              </div>
              
              <div className="absolute bottom-0 right-12">
                <p className="text-white text-sm font-bold">Другой студент<br />вывел 2600$ за медиана</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4 - Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-[40px] border-[8px] border-black overflow-hidden aspect-[1.4/1] grid grid-cols-2"
        >
          <div className="bg-black p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-black text-[#BDFF2A] leading-tight mb-8">
              ЧТО ПРИВЕЛО<br />К ТАКИМ<br />РЕЗУЛЬТАТАМ?
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-[#BDFF2A] rounded-2xl px-4 py-2">
                <p className="text-white text-sm font-bold">☑ Стратегии, которые<br />реально работают на рынке</p>
              </div>
              <div className="border-2 border-[#BDFF2A] rounded-2xl px-4 py-2">
                <p className="text-white text-sm font-bold">📊 Настойчивость<br />и 0 до результата</p>
              </div>
            </div>
          </div>
          <div className="bg-[#8BC34A] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl">🐂</div>
            </div>
          </div>
        </motion.div>

        {/* Card 5 - Why Trading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-black rounded-[40px] border-[8px] border-black p-12 aspect-[1.4/1] relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-8 right-8 text-[#BDFF2A] opacity-20 text-6xl">💰</div>
          <div className="absolute bottom-8 left-8 text-[#BDFF2A] opacity-20 text-6xl">💰</div>

          <h2 className="text-4xl font-black text-white leading-tight mb-3">
            ПОЧЕМУ ТРЕЙДИНГ
          </h2>
          <h2 className="text-4xl font-black text-[#BDFF2A] leading-tight mb-10">
            ЭТО САМЫЙ ЛУЧШИЙ ВИД<br />ДОПОЛНИТЕЛЬНОГО<br />ЗАРАБОТКА?
          </h2>

          <div className="space-y-6">
            {[
              { icon: '📊', title: 'Гибкий график', desc: 'с любой точки мира' },
              { icon: '🌍', title: 'Можно зарабатывать', desc: 'с любой точки мира' },
              { icon: '📱', title: 'Нужно только', desc: 'телефон или ноутбук' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#BDFF2A]/10 border border-[#BDFF2A] flex items-center justify-center flex-shrink-0 text-2xl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-bold text-lg">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 6 - Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-[40px] border-[8px] border-black overflow-hidden aspect-[1.4/1] grid grid-cols-2 bg-[#BDFF2A]"
        >
          <div className="p-10 flex flex-col justify-center">
            <div className="transform -rotate-90 origin-center">
              <h2 className="text-6xl font-black text-black whitespace-nowrap">
                ПАКЕТЫ!
              </h2>
            </div>
          </div>
          <div className="bg-white p-8 flex flex-col justify-center">
            <div className="space-y-3">
              {[
                { name: 'Базовый', desc: 'Обучение для начинающих трейдеров', price: 'Бесплатно', highlight: false },
                { name: 'Продвинутый', desc: 'Углубленное обучение стратегиям', price: '6 шахов + практика', highlight: true },
                { name: 'Модуль #1', desc: 'Введение в трейдинг', highlight: false },
                { name: 'Модуль #2', desc: 'Технический анализ', highlight: false },
                { name: 'Модуль #3', desc: 'Психология трейдинга', highlight: false },
                { name: 'Модуль #4', desc: 'Управление рисками', highlight: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl ${
                    item.highlight ? 'bg-[#BDFF2A]' : 'bg-gray-50'
                  }`}
                >
                  <p className="font-black text-sm text-black">{item.name}</p>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                  {item.price && (
                    <p className="text-xs font-bold text-black mt-1">{item.price}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <p className="text-sm tracking-[0.4em] text-black/40">
          ПРЕЗЕНТАЦИИ • KARSCREATE • GRAPHIC DESIGNER • ПРЕЗЕНТАЦИИ
        </p>
      </div>
    </div>
  )
}

