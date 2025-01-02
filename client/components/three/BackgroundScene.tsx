"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { Environment, Float } from "@react-three/drei";

function FloatingParticles() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={1}
      position={[0, 0, -5]}
    >
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial
          color="#ffd700"
          roughness={0.2}
          metalness={0.8}
          emissive="#ffd700"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function BackgroundScene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingParticles />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}