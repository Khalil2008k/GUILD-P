'use client';

import React from 'react';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot'

export default function Robot3DPage() { 
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";
  
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Color overlay for tinting */}
      <div className="absolute inset-0 z-[1] bg-[#BDFF2A] opacity-10 mix-blend-overlay pointer-events-none" />
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          filter: 'hue-rotate(80deg) saturate(1.2) brightness(1.1)',
        }}
      >
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
        />
      </div>
    
      <div className="
        absolute inset-0 z-10
        pt-20 md:pt-32 lg:pt-40
        px-4 md:px-8            
        pointer-events-none     
      ">
        <div className="
          text-center
          text-white
          drop-shadow-lg
          w-full max-w-2xl
          mx-auto
        ">
          <h1 className="
            text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
            font-bold 
          ">
            روبوت تفاعلي ثلاثي الأبعاد
          </h1>
          <p className="text-lg md:text-xl text-[#BDFF2A] mt-4 font-semibold">
            يمكنك التفاعل معه باستخدام الماوس
          </p>
        </div>
      </div>
    </div> 
  );
}
