'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };

// Create circular texture for particles
function createCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// Subtle particle field
const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread particles across the scene
      positions[i3] = (Math.random() - 0.5) * 25;
      positions[i3 + 1] = (Math.random() - 0.5) * 25;
      positions[i3 + 2] = (Math.random() - 0.5) * 15 - 3;

      // Theme neon green RGB(189, 255, 42)
      colors[i3] = 189 / 255;
      colors[i3 + 1] = 255 / 255;
      colors[i3 + 2] = 42 / 255;
    }

    return { positions, colors };
  }, [count]);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const time = clock.getElapsedTime();
      particlesRef.current.rotation.y = time * 0.03;
      
      const pos = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        pos[i3 + 1] += Math.sin(time * 0.5 + i * 0.1) * 0.008;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        map={createCircleTexture()}
      />
    </points>
  );
};

// 3D Image with scanning effect
const Scene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture] = useTexture([TEXTUREMAP.src]);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: texture },
        uScanPos: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform sampler2D uTexture;
        uniform float uScanPos;
        varying vec2 vUv;

        void main() {
          vec4 texColor = texture2D(uTexture, vUv);
          
          // Scanning line effect with theme green
          float scanLine = smoothstep(0.0, 0.03, abs(vUv.y - uScanPos));
          vec3 scanColor = vec3(189.0/255.0, 255.0/255.0, 42.0/255.0);
          
          // Add scan glow
          vec3 finalColor = mix(texColor.rgb + scanColor * 0.6, texColor.rgb, scanLine);
          
          // Subtle overall glow
          float glow = (1.0 - scanLine) * 0.2;
          finalColor += scanColor * glow;
          
          gl_FragColor = vec4(finalColor, texColor.a);
        }
      `,
      transparent: true,
    });
  }, [texture]);

  useFrame(({ clock }) => {
    if (meshRef.current && material.uniforms) {
      const time = clock.getElapsedTime();
      material.uniforms.uTime.value = time;
      material.uniforms.uScanPos.value = (Math.sin(time * 0.5) * 0.5 + 0.5);
      
      // Subtle rotation
      meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
      meshRef.current.rotation.x = Math.cos(time * 0.3) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} material={material} scale={[5, 5, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
    </mesh>
  );
};

export const HeroFuturistic = () => {
  const [visible, setVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setVisible(true), 400);
    const subtitleTimer = setTimeout(() => setSubtitleVisible(true), 1200);
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full relative bg-black">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#BDFF2A" />
          <pointLight position={[-5, -5, 3]} intensity={0.4} color="#BDFF2A" />
          <ParticleField />
          <Scene />
        </Canvas>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none px-10" style={{ zIndex: 10 }}>
        <div className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold uppercase">
          <div
            className={visible ? 'fade-in' : ''}
            style={{ 
              color: '#BDFF2A',
              opacity: visible ? undefined : 0,
              letterSpacing: '0.15em',
              textShadow: '0 0 30px rgba(189, 255, 42, 0.5), 0 0 60px rgba(189, 255, 42, 0.3)'
            }}
          >
            GUILD
          </div>
        </div>
        
        <div className="text-sm md:text-2xl xl:text-3xl 2xl:text-4xl mt-6 font-bold">
          <div
            className={subtitleVisible ? 'fade-in-subtitle' : ''}
            style={{ 
              color: '#FFFFFF',
              opacity: subtitleVisible ? undefined : 0,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
            }}
          >
            تواصل - تعاون - أنجح
          </div>
        </div>
      </div>
      
      {/* Thanks Text - Replacing Scroll Button */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40 text-center pointer-events-none flex flex-col gap-2"
        style={{ animationDelay: '2s' }}
      >
        <div
          className="fade-in"
          style={{
            color: '#FFFFFF',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
            fontSize: '1.75rem',
            fontWeight: '600'
          }}
        >
          شكرا لكم
        </div>
        <div
          className="fade-in"
          style={{
            color: '#FFFFFF',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
            fontSize: '1.75rem',
            fontWeight: '600'
          }}
        >
          <span className="text-[#BDFF2A]">Guild</span> رؤية جديدة لسوق العمل
        </div>
      </div>
    </div>
  );
};

export default HeroFuturistic;
