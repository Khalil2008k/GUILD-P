'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Layers, Split, ListChecks, Sparkles, Globe, Waves } from 'lucide-react'

export default function DesignsHubPage() {
  const router = useRouter()

  const designs = [
    {
      title: 'Design 1',
      description: 'Header with 3 cards below',
      path: '/design-1',
      icon: <Layers className="w-12 h-12" />,
      preview: 'Top heading + 3 black rounded cards with icons'
    },
    {
      title: 'Design 2',
      description: 'Split layout with list',
      path: '/design-2',
      icon: <Split className="w-12 h-12" />,
      preview: 'Left: module list with highlight | Right: rotated text'
    },
    {
      title: 'Design 3',
      description: 'Black card with icon list',
      path: '/design-3',
      icon: <ListChecks className="w-12 h-12" />,
      preview: 'Black background + white/neon text + icon features'
    },
    {
      title: 'Futuristic Hero',
      description: '3D WebGPU Hero with scanning effect',
      path: '/futuristic-hero',
      icon: <Sparkles className="w-12 h-12" />,
      preview: 'GUILD branding + 3D scene + neon green scan lines + bloom'
    },
    {
      title: 'World Map',
      description: 'Animated global network map',
      path: '/world-map',
      icon: <Globe className="w-12 h-12" />,
      preview: 'Interactive dotted world map + animated connections + stats'
    },
    {
      title: 'Wavy Background',
      description: 'Dynamic animated waves',
      path: '/wavy-bg',
      icon: <Waves className="w-12 h-12" />,
      preview: 'Canvas-based wave animation + simplex noise + fluid motion'
    }
  ]

  return (
    <div className="min-h-screen bg-[#000000] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-7xl font-black mb-4">
            Design <span className="text-[#BDFF2A]">Patterns</span>
          </h1>
          <p className="text-2xl text-[#A6A6A6]">
            6 advanced design patterns + 3D interactive experiences
          </p>
        </motion.div>

        {/* Design Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              onClick={() => router.push(design.path)}
              className="group cursor-pointer bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-3xl p-8 hover:border-[#BDFF2A]/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-[#BDFF2A] mb-6 transition-opacity duration-300 group-hover:opacity-80">
                {design.icon}
              </div>

              <h2 className="text-3xl font-bold mb-3">{design.title}</h2>
              <p className="text-[#BDFF2A] text-sm font-semibold mb-4">
                {design.description}
              </p>
              <p className="text-[#A6A6A6] text-sm leading-relaxed">
                {design.preview}
              </p>

              <div className="mt-6 flex items-center gap-2 text-[#BDFF2A] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Design</span>
                <span>←</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 bg-[#0A0A0A] border-2 border-[#BDFF2A]/30 rounded-3xl p-10"
        >
          <h3 className="text-2xl font-bold mb-4">Design System</h3>
          <div className="grid grid-cols-3 gap-8 text-sm">
            <div>
              <p className="text-[#BDFF2A] font-bold mb-2">Colors</p>
              <p className="text-[#A6A6A6]">Neon Green (#BDFF2A)</p>
              <p className="text-[#A6A6A6]">Pure Black (#000000)</p>
              <p className="text-[#A6A6A6]">White backgrounds</p>
            </div>
            <div>
              <p className="text-[#BDFF2A] font-bold mb-2">Borders</p>
              <p className="text-[#A6A6A6]">10px thick black borders</p>
              <p className="text-[#A6A6A6]">60px border radius</p>
              <p className="text-[#A6A6A6]">Bold graphic style</p>
            </div>
            <div>
              <p className="text-[#BDFF2A] font-bold mb-2">Typography</p>
              <p className="text-[#A6A6A6]">Black weight (900)</p>
              <p className="text-[#A6A6A6]">Large headings</p>
              <p className="text-[#A6A6A6]">High contrast</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

