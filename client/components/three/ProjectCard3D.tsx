'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, Text, PerspectiveCamera } from '@react-three/drei'
import { motion } from "framer-motion"
import * as THREE from 'three'
import { Project } from '@/types/project'

interface ProjectCard3DProps {
  project: Project
  index: number
}

function Card({ project }: { project: Project }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const texture = new THREE.TextureLoader().load(project.image); // Load texture
  
    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      }
    });
  
    return (
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        scale={hovered ? 1.05 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[3, 4]} />
        <meshBasicMaterial map={texture} />
        <Text
          position={[0, -2, 0.1]}
          fontSize={0.25}
          color="#fbbf24"
          anchorX="center"
          anchorY="middle"
        >
          {project.category}
        </Text>
        <Text
          position={[0, -2.3, 0.1]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.ttf"
        >
          {project.title}
        </Text>
      </mesh>
    );
  }
  

  export default function ProjectCard3D({ project, index }: ProjectCard3DProps) {
    return (
      <motion.div
        className="h-[300px] w-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Card project={project} />
        </Canvas>
      </motion.div>
    );
  }
  

