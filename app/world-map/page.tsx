"use client";

import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export default function WorldMapPage() {
  return (
    <div className="min-h-screen py-20 dark:bg-black bg-black w-full">
      <div className="max-w-7xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-bold text-4xl md:text-6xl mb-4">
            <span className="text-white">GUILD </span>
            <span className="text-[#BDFF2A]">Network</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-[#BDFF2A] font-semibold mb-4">
            تواصل - تعاون - أنجح
          </p>
          
          <p className="text-sm md:text-lg text-neutral-400 max-w-2xl mx-auto py-4">
            Connect with members worldwide. Build your network across continents.
            Collaborate globally, succeed locally.
          </p>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <WorldMap
          dots={[
            {
              start: {
                lat: 40.7128,
                lng: -74.006,
              }, // New York
              end: {
                lat: 51.5074,
                lng: -0.1278,
              }, // London
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 25.2048, lng: 55.2708 }, // Dubai
            },
            {
              start: { lat: 25.2048, lng: 55.2708 }, // Dubai
              end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
            },
            {
              start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
              end: { lat: -33.8688, lng: 151.2093 }, // Sydney
            },
            {
              start: { lat: -33.8688, lng: 151.2093 }, // Sydney
              end: { lat: -23.5505, lng: -46.6333 }, // São Paulo
            },
            {
              start: { lat: -23.5505, lng: -46.6333 }, // São Paulo
              end: { lat: 40.7128, lng: -74.006 }, // New York
            },
            {
              start: { lat: 24.7136, lng: 46.6753 }, // Riyadh
              end: { lat: 30.0444, lng: 31.2357 }, // Cairo
            },
            {
              start: { lat: 30.0444, lng: 31.2357 }, // Cairo
              end: { lat: 51.5074, lng: -0.1278 }, // London
            },
          ]}
          lineColor="#BDFF2A"
        />
      </div>
      
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-[#0A0A0A] border-2 border-[#BDFF2A]/30 rounded-2xl p-8 text-center"
          >
            <div className="text-5xl font-bold text-[#BDFF2A] mb-2">50+</div>
            <div className="text-white text-lg">Countries</div>
            <div className="text-neutral-500 text-sm mt-2">Global Reach</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-[#0A0A0A] border-2 border-[#BDFF2A]/30 rounded-2xl p-8 text-center"
          >
            <div className="text-5xl font-bold text-[#BDFF2A] mb-2">10k+</div>
            <div className="text-white text-lg">Members</div>
            <div className="text-neutral-500 text-sm mt-2">Active Community</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-[#0A0A0A] border-2 border-[#BDFF2A]/30 rounded-2xl p-8 text-center"
          >
            <div className="text-5xl font-bold text-[#BDFF2A] mb-2">24/7</div>
            <div className="text-white text-lg">Support</div>
            <div className="text-neutral-500 text-sm mt-2">Always Online</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}



