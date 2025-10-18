import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

const AnimatedSphere = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#3B82F6" // New primary blue for dark mode
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

const FloatingParticles = () => {
  const particlesRef = useRef()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i) * 10 - 5,
          Math.cos(i * 0.5) * 10 - 5,
          Math.sin(i * 0.3) * 10 - 5
        ]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#FBBF24" /> {/* New secondary amber for dark mode */}
        </mesh>
      ))}
    </group>
  )
}

const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} className="absolute inset-0">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere />
      <FloatingParticles />
    </Canvas>
  )
}

export default ThreeScene