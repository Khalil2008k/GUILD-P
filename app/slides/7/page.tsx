'use client'

import Slide from '@/app/components/Slide'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, Server, Shield, Cloud, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import { Component } from '@/components/ui/ai-loader'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export default function Slide7() {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null)

  const topics = [
    {
      id: 'interface',
      title: 'الواجهة والتجربة',
      icon: <Smartphone className="w-10 h-10" />,
      description: 'بُنيت الواجهة باستخدام React Native وExpo لتعمل بسلاسة على كل الأجهزة. التصميم بسيط وواضح، يعكس روح النظام.',
      points: [
        'React Native وExpo',
        'يعمل بسلاسة على كل الأجهزة',
        'التصميم بسيط وواضح',
      ],
    },
    {
      id: 'backend',
      title: 'البنية التقنية',
      icon: <Server className="w-10 h-10" />,
      description: 'الخلفية تعتمد على Node.js و Firebase و PostgreSQL، مدعومة بذاكرة Redis لضمان الأداء الفوري.',
      points: [
        'Node.js و Firebase',
        'PostgreSQL قاعدة البيانات',
        'Redis للأداء الفوري',
      ],
    },
    {
      id: 'security',
      title: 'الأمان والاستقرار',
      icon: <Shield className="w-10 h-10" />,
      description: 'يُطبّق النظام تشفيرًا كاملاً ومصادقة متعددة العوامل، متوافق مع معايير ISO و GDPR. حماية المستخدم أولوية مطلقة.',
      points: [
        'تشفير كامل',
        'مصادقة متعددة العوامل',
        'متوافق مع ISO و GDPR',
      ],
    },
    {
      id: 'cloud',
      title: 'التوسع السحابي',
      icon: <Cloud className="w-10 h-10" />,
      description: 'تستضيفه منصتا Render و Vercel لضمان التوسع الفوري والثبات المستمر عبر بنية DevOps حديثة.',
      points: [
        'Render و Vercel',
        'التوسع الفوري',
        'بنية DevOps حديثة',
      ],
    },
  ]

  return (
    <Slide background="dark">
      <div className="h-screen text-white flex items-center justify-center overflow-hidden">

        <div className="relative w-full h-full flex items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Left Side - Cards Grid (2x2) */}
          <div className="w-[45%] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 md:mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-black mb-3 md:mb-4">
                <span style={{ transform: 'translateY(-8px)', display: 'inline-block' }}>التصميم والبنية</span><span style={{ marginLeft: '12px', marginRight: '12px' }}></span><span className="text-[#BDFF2A]">التقنية</span>
              </h1>
              <p className="text-lg text-[#A6A6A6]">المواصفات التقنية للمنصة</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {topics.map((topic, index) => (
                <motion.button
                  key={topic.id}
                  onClick={() => setSelectedTopic(selectedTopic === index ? null : index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`
                    relative p-4 md:p-5 rounded-2xl text-right transition-all duration-300
                    border-2 overflow-hidden ${
                      selectedTopic === index
                        ? 'bg-[#BDFF2A]/20 border-[#BDFF2A] text-[#BDFF2A]'
                        : 'bg-[#0A0A0A] border-[#2A2A2A] text-white hover:border-[#BDFF2A]/50 hover:bg-[#1A1A1A]'
                    }
                  `}
                  style={{ transform: 'scale(1.1)' }}
                  whileHover={{ scale: 1.12, x: -5 }}
                  whileTap={{ scale: 1.08 }}
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className={`mb-3 ${selectedTopic === index ? 'text-[#BDFF2A]' : 'text-[#BDFF2A]/70'}`}>
                    {React.cloneElement(topic.icon as React.ReactElement, { className: 'w-5 h-5 md:w-6 md:h-6' })}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{topic.title}</h3>
                  <p className="text-sm md:text-base text-[#A6A6A6] line-clamp-4">{topic.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Side - Selected Topic Details */}
          <div className="w-[45%] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {selectedTopic !== null ? (
                <motion.div
                  key={selectedTopic}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-3xl p-8 md:p-10"
                >
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <div className="text-[#BDFF2A]">
                      {topics[selectedTopic].icon}
                    </div>
                    <h2 className="text-3xl font-black text-white">
                      {topics[selectedTopic].title}
                    </h2>
                  </div>

                  <p className="text-lg text-[#A6A6A6] leading-relaxed mb-6 md:mb-8">
                    {topics[selectedTopic].description}
                  </p>

                  <div className="space-y-3 md:space-y-4">
                    {topics[selectedTopic].points.map((point, i) => (
                      <div key={i} className="flex items-center gap-3 md:gap-4">
                        <CheckCircle className="w-5 h-5 text-[#BDFF2A] flex-shrink-0" />
                        <span className="text-white font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-3xl p-8 md:p-10 min-h-[400px] relative overflow-hidden"
                >
                  {/* AI Loader - Front and Center */}
                  <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                    <div className="relative" style={{ width: '200px', height: '200px' }}>
                      <div className="relative flex items-center justify-center font-inter select-none w-full h-full" style={{ direction: 'ltr' }}>
                        {Array.from("GUILD").map((letter, index) => (
                          <span
                            key={index}
                            className="inline-block text-[#BDFF2A] opacity-60 animate-loaderLetter text-2xl font-bold"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {letter}
                          </span>
                        ))}
                        <div className="absolute inset-0 rounded-full animate-loaderCircle border-2 border-[#BDFF2A]/50"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Text */}
                  <div className="absolute bottom-4 left-0 right-0 z-40 text-center">
                    <p className="text-[#BDFF2A] font-bold text-lg">مدعوم بالذكاء الاصطناعي</p>
                  </div>
                  
                  {/* Prompt Text - Hidden completely */}
                  <div className="hidden">
                    <div>
                      <p className="text-white font-semibold mb-2">You are given a task to integrate an existing React component in the codebase</p>
                      <p className="mb-2">The codebase should support:</p>
                      <ul className="list-disc list-inside mr-4 space-y-1 mt-1">
                        <li>shadcn project structure</li>
                        <li>Tailwind CSS</li>
                        <li>Typescript</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-white font-semibold mb-2">If it doesn&apos;t, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.</p>
                      <p className="mb-1">Determine the default path for components and styles.</p>
                      <p className="mb-2">If default path for components is not /components/ui, provide instructions on why it&apos;s important to create this folder</p>
                    </div>

                    <div>
                      <p className="text-white font-semibold mb-2">Copy-paste this component to /components/ui folder:</p>
                      <code className="block bg-[#1A1A1A] p-2 rounded text-[10px] text-[#BDFF2A] overflow-x-auto mt-1 font-mono">
                        ai-loader.tsx
                      </code>
                      <pre className="bg-[#1A1A1A] p-3 rounded text-[10px] text-[#BDFF2A] overflow-x-auto mt-2 font-mono whitespace-pre-wrap">
{`import * as React from "react";

interface LoaderProps {
  size?: number; 
  text?: string;
}

export const Component: React.FC<LoaderProps> = ({ size = 180, text = "Generating" }) => {
  const letters = text.split("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#1a3379] via-[#0f172a] to-black dark:from-gray-100 dark:via-gray-200 dark:to-gray-300">
      <div
        className="relative flex items-center justify-center font-inter select-none"
        style={{ width: size, height: size }}
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block text-white dark:text-gray-800 opacity-40 animate-loaderLetter"
            style={{ animationDelay: \`\${index * 0.1}s\` }}
          >
            {letter}
          </span>
        ))}
        <div
          className="absolute inset-0 rounded-full animate-loaderCircle"
        ></div>
      </div>
      <style jsx>{\`
        @keyframes loaderCircle {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 6px 12px 0 #38bdf8 inset,
              0 12px 18px 0 #005dff inset,
              0 36px 36px 0 #1e40af inset,
              0 0 3px 1.2px rgba(56, 189, 248, 0.3),
              0 0 6px 1.8px rgba(0, 93, 255, 0.2);
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 6px 12px 0 #60a5fa inset,
              0 12px 6px 0 #0284c7 inset,
              0 24px 36px 0 #005dff inset,
              0 0 3px 1.2px rgba(56, 189, 248, 0.3),
              0 0 6px 1.8px rgba(0, 93, 255, 0.2);
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 6px 12px 0 #4dc8fd inset,
              0 12px 18px 0 #005dff inset,
              0 36px 36px 0 #1e40af inset,
              0 0 3px 1.2px rgba(56, 189, 248, 0.3),
              0 0 6px 1.8px rgba(0, 93, 255, 0.2);
          }
        }
        @keyframes loaderLetter {
          0%, 100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          20% {
            opacity: 1;
            transform: scale(1.15);
          }
          40% {
            opacity: 0.7;
            transform: translateY(0);
          }
        }
        .animate-loaderCircle {
          animation: loaderCircle 5s linear infinite;
        }
        .animate-loaderLetter {
          animation: loaderLetter 3s infinite;
        }
        @media (prefers-color-scheme: dark) {
          .animate-loaderCircle {
            box-shadow:
              0 6px 12px 0 #4b5563 inset,
              0 12px 18px 0 #6b7280 inset,
              0 36px 36px 0 #9ca3af inset,
              0 0 3px 1.2px rgba(107, 114, 128, 0.3),
              0 0 6px 1.8px rgba(156, 163, 175, 0.2);
          }
        }
      \`}</style>
    </div>
  );
};

demo.tsx
import { Component } from "@/components/ui/ai-loader";

export default function DemoOne() {
  return <Component/>;
}`}
                      </pre>
                    </div>

                    <div>
                      <p className="text-white font-semibold mb-2">Implementation Guidelines:</p>
                      <ol className="list-decimal list-inside mr-4 space-y-1 mt-1">
                        <li>Analyze the component structure and identify all required dependencies</li>
                        <li>Review the component&apos;s arguments and state</li>
                        <li>Identify any required context providers or hooks and install them</li>
                        <li>Questions to Ask - What data/props will be passed to this component? Are there any specific state management requirements? Are there any required assets (images, icons, etc.)? What is the expected responsive behavior? What is the best place to use this component in the app?</li>
                      </ol>
                    </div>

                    <div>
                      <p className="text-white font-semibold mb-2">Steps to integrate:</p>
                      <ol className="list-decimal list-inside mr-4 space-y-1 mt-1">
                        <li>Copy paste all the code above in the correct directories</li>
                        <li>Install external dependencies</li>
                        <li>Fill image assets with Unsplash stock images you know exist</li>
                        <li>Use lucide-react icons for svgs or logos if component requires them</li>
                      </ol>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
                      <p className="text-[#BDFF2A] font-bold text-base text-center">مدعوم بالذكاء الاصطناعي</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Slide>
  )
}
