import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Float, Stars, Sparkles } from '@react-three/drei'

const AnimatedParticles = () => {
  const particlesRef = useRef()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 100 }).map((_, i) => (
        <Float
          key={i}
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <mesh
            position={[
              Math.sin(i) * 20 - 10,
              Math.cos(i * 0.5) * 15 - 5,
              Math.sin(i * 0.3) * 10 - 5
            ]}
            scale={Math.random() * 0.5 + 0.1}
          >
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="#3B82F6" />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

const FloatingOrbs = () => {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main Central Orb */}
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1}
      >
        <Sphere args={[1.5, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#3B82F6"
            transparent
            opacity={0.1}
            wireframe
          />
        </Sphere>
      </Float>

      {/* Orbiting Elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Float
          key={i}
          speed={1}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <mesh
            position={[
              Math.sin((i / 8) * Math.PI * 2) * 4,
              Math.cos((i / 8) * Math.PI * 2) * 2,
              Math.cos((i / 8) * Math.PI * 2) * 4
            ]}
          >
            <icosahedronGeometry args={[0.3, 0]} />
            <meshBasicMaterial color="#FBBF24" />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

const EnergyBeams = () => {
  const beamsRef = useRef()

  useFrame((state) => {
    if (beamsRef.current) {
      beamsRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={beamsRef}>
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh
          key={i}
          rotation={[0, 0, (i / 12) * Math.PI * 2]}
          position={[0, 0, -2]}
        >
          <planeGeometry args={[0.1, 10]} />
          <meshBasicMaterial
            color="#10B981"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

const FuturisticBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        {/* Ambient Light */}
        <ambientLight intensity={0.3} />
        
        {/* Point Lights */}
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#3B82F6" />
        <pointLight position={[-10, -10, 5]} intensity={0.3} color="#FBBF24" />
        <pointLight position={[0, 0, 10]} intensity={0.4} color="#10B981" />
        
        {/* Background Elements */}
        <Stars 
          radius={50} 
          depth={50} 
          count={2000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={0.5}
        />
        
        <Sparkles
          count={100}
          scale={[20, 10, 10]}
          size={2}
          speed={0.3}
          color="#3B82F6"
        />
        
        {/* Animated Components */}
        <AnimatedParticles />
        <FloatingOrbs />
        <EnergyBeams />
      </Canvas>
      
      {/* CSS Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, var(--accent-primary) 0%, transparent 70%)'
        }}
      />
      
      {/* Animated Grid */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(var(--accent-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--accent-primary) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>
      
      {/* Pulse Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-64 h-64 rounded-full opacity-10 animate-pulse"
          style={{
            background: 'radial-gradient(circle, var(--accent-secondary), transparent)',
            animation: 'pulseGlow 4s ease-in-out infinite'
          }}
        />
      </div>
    </div>
  )
}

export default FuturisticBackground