'use client'

import { WavyBackground } from '@/components/ui/wavy-background'
import { motion } from 'framer-motion'

export default function Slide0() {
  return (
    <WavyBackground 
      className="max-w-4xl mx-auto"
      colors={[
        "#BDFF2A",
        "#9FE625",
        "#81CD20",
        "#63B41B",
        "#BDFF2A",
      ]}
      waveWidth={50}
      backgroundFill="#000000"
      blur={10}
      speed="slow"
      waveOpacity={0.4}
      numWaves={5}
    >
      <div className="text-center space-y-8 flex flex-col items-center justify-center h-screen px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -220 }}
          animate={{ opacity: 1, y: -200 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
          className="mb-8"
        >
            <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
              <motion.span
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-[#BDFF2A] text-3xl md:text-4xl"
              >
                ۞
              </motion.span>
              
              <h1 className="text-5xl md:text-7xl font-bold text-[#BDFF2A]" style={{ lineHeight: '2' }}>
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </h1>
              
              <motion.span
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-[#BDFF2A] text-3xl md:text-4xl"
              >
                ۞
              </motion.span>
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-0.5 w-64 mx-auto bg-gradient-to-r from-transparent via-[#BDFF2A] to-transparent mt-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 200 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl mt-12 text-white/90 font-normal max-w-2xl mx-auto leading-relaxed"
            >
              نبدأ
            </motion.p>
          </motion.div>
      </div>
    </WavyBackground>
  )
}

