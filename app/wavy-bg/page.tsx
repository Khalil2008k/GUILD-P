"use client";

import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "framer-motion";

export default function WavyBgPage() {
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
      waveWidth={60}
      backgroundFill="#000000"
      blur={12}
      speed="fast"
      waveOpacity={0.6}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-black mb-6">
          GUILD
        </h1>
        
        <p className="text-2xl md:text-4xl text-[#BDFF2A] font-bold mb-4">
          تواصل - تعاون - أنجح
        </p>
        
        <p className="text-base md:text-xl mt-6 text-white/90 font-normal max-w-2xl mx-auto px-4">
          Experience the power of dynamic waves combined with cutting-edge design.
          Build connections that flow naturally across the digital landscape.
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex gap-4 justify-center flex-wrap px-4"
        >
          <button className="px-8 py-3 bg-[#BDFF2A] text-black font-bold rounded-full hover:bg-[#9FE625] transition-colors duration-300">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-[#BDFF2A] text-[#BDFF2A] font-bold rounded-full hover:bg-[#BDFF2A]/10 transition-colors duration-300">
            Learn More
          </button>
        </motion.div>
      </motion.div>
      
      {/* Feature badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4"
      >
        <div className="bg-black/40 backdrop-blur-sm border border-[#BDFF2A]/30 rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-[#BDFF2A] mb-2">Fluid</div>
          <div className="text-white/80 text-sm">Dynamic animations</div>
        </div>
        
        <div className="bg-black/40 backdrop-blur-sm border border-[#BDFF2A]/30 rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-[#BDFF2A] mb-2">Modern</div>
          <div className="text-white/80 text-sm">Cutting-edge design</div>
        </div>
        
        <div className="bg-black/40 backdrop-blur-sm border border-[#BDFF2A]/30 rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-[#BDFF2A] mb-2">Smooth</div>
          <div className="text-white/80 text-sm">Seamless experience</div>
        </div>
      </motion.div>
    </WavyBackground>
  );
}



