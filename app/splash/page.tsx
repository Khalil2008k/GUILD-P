'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShaderAnimation } from '@/components/ui/shader-animation'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassButton } from '@/components/ui/glass-button'
import NavigationDots from '@/app/components/NavigationDots'

export default function SplashPage() {
  const router = useRouter()
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    // Show prompt after 1 second
    const timer = setTimeout(() => {
      setShowPrompt(true)
    }, 1000)

    // Handle Enter key press
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        router.push('/slides/0')
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [router])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Shader Animation Background */}
      <ShaderAnimation />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-8 max-w-full"
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-6 tracking-tight">
            GUILD
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 px-4">
            Connect - Collaborate - Conquer
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            the presentation
          </p>
        </motion.div>

        {/* Enter Prompt */}
        <AnimatePresence>
          {showPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-auto mt-8 md:mt-12"
            >
              <GlassButton
                size="lg"
                onClick={() => router.push('/slides/0')}
                className="group"
                contentClassName="flex items-center gap-2 flex-wrap justify-center"
              >
                <span>اضغط</span>
                <kbd className="px-2 py-1 text-[#BDFF2A] rounded-lg font-mono text-sm font-bold border border-[#BDFF2A]/50">
                  Enter
                </kbd>
                <span>للبدء</span>
              </GlassButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none z-[5]" />
      
      {/* Navigation Dots */}
      <NavigationDots />
    </div>
  )
}

