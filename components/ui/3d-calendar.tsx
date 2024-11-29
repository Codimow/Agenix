"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function CalendarModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.2}
      floatIntensity={0.4}
      floatingRange={[0, 0.2]}
    >
      <mesh ref={meshRef} scale={2}>
        <boxGeometry args={[1, 1.4, 0.1]} />
        <meshStandardMaterial
          color="hsl(var(--primary))"
          emissive="hsl(var(--primary))"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export function Calendar3DScene() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Environment preset="city" />
        <CalendarModel />
        <EffectComposer>
          <Bloom
            intensity={1}
            luminanceThreshold={0.8}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}