'use client';

import { Sphere, Torus } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function BlackHole() {
  const blackHoleRef = useRef<THREE.Mesh>(null!);
  const diskRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate the Accretion Disk
    if (diskRef.current) {
      diskRef.current.rotation.z = time * 0.1;
    }
    
    // Pulse the Black Hole core
    if (blackHoleRef.current) {
      const pulse = 1 + Math.sin(time * 2) * 0.02;
      blackHoleRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group scale={[1.8, 1.8, 1.8]} rotation={[0.5, 0, 0]}>
      {/* 1. THE BLACK HOLE SPHERE (The Void) */}
      <Sphere args={[1, 64, 64]} ref={blackHoleRef}>
        <meshBasicMaterial color="#000" />
      </Sphere>

      {/* 2. THE PHOTON RING (The Inner Glowing Edge) */}
      <Sphere args={[1.05, 64, 64]}>
        <meshBasicMaterial color="#fff" side={THREE.BackSide} transparent opacity={0.8} />
      </Sphere>

      {/* 3. THE ACCRETION DISK (The Ring of Fire) */}
      <group ref={diskRef}>
        {/* Main Disk */}
        <Torus args={[3, 0.8, 2, 100]} rotation={[1.6, 0, 0]} scale={[1, 0.1, 1]}>
          <meshStandardMaterial 
            color="#ff4500" // Orange-Red fire
            emissive="#ff2200"
            emissiveIntensity={2}
            roughness={0.1}
            transparent
            opacity={0.7}
          />
        </Torus>
        
        {/* Outer Glow Ring */}
        <Torus args={[3.2, 0.9, 2, 100]} rotation={[1.6, 0, 0]} scale={[1, 0.05, 1]}>
           <meshBasicMaterial color="#ff8800" transparent opacity={0.1} />
        </Torus>
      </group>
    </group>
  );
}