'use client'

import { DottedSurface } from "@/components/ui/dotted-surface";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function Custom3DPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <DottedSurface className="size-full" />
      
      <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: '-350px' }}>
        {/* Gradient glow effect */}
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,rgba(189,255,42,0.1),transparent_50%)]',
            'blur-[30px]',
          )}
        />
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            سطح النقاط
            <br />
            <span className="text-[#BDFF2A]">المتحرك</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            سطح ثلاثي الأبعاد متحرك بألوان المشروع
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <div className="px-6 py-3 rounded-full bg-[#BDFF2A]/10 border border-[#BDFF2A]/30">
              <p className="text-[#BDFF2A] font-bold">2,400 نقطة متحركة</p>
            </div>
            <div className="px-6 py-3 rounded-full bg-[#BDFF2A]/10 border border-[#BDFF2A]/30">
              <p className="text-[#BDFF2A] font-bold">رسوم متحركة سلسة</p>
            </div>
            <div className="px-6 py-3 rounded-full bg-[#BDFF2A]/10 border border-[#BDFF2A]/30">
              <p className="text-[#BDFF2A] font-bold">تأثير ثلاثي الأبعاد</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
