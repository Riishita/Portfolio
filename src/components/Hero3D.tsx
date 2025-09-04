import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Box, Octahedron, Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';



// Floating geometric shapes component
function FloatingShapes() {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef1.current) {
      meshRef1.current.rotation.x = time * 0.3;
      meshRef1.current.rotation.y = time * 0.2;
      meshRef1.current.position.y = Math.sin(time) * 0.5;
    }
    
    if (meshRef2.current) {
      meshRef2.current.rotation.x = time * 0.2;
      meshRef2.current.rotation.z = time * 0.3;
      meshRef2.current.position.y = Math.cos(time * 0.8) * 0.3;
    }
    
    if (meshRef3.current) {
      meshRef3.current.rotation.y = time * 0.4;
      meshRef3.current.rotation.z = time * 0.1;
      meshRef3.current.position.y = Math.sin(time * 1.2) * 0.4;
    }
  });

  return (
    <>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Box ref={meshRef1} position={[-3, 0, -2]} args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial
            color="#00ffff"
            metalness={0.8}
            roughness={0.2}
            emissive="#00ffff"
            emissiveIntensity={0.2}
          />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere ref={meshRef2} position={[3, 1, -1]} args={[1, 32, 32]}>
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.9}
            roughness={0.1}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>

      {/* <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <Octahedron ref={meshRef3} position={[0, -1, 1]} args={[1.2]}>
          <meshStandardMaterial
            color="#00ffff"
            metalness={0.7}
            roughness={0.3}
            emissive="#00ffff"
            emissiveIntensity={0.25}
          />
        </Octahedron>
      </Float> */}

      {/* Additional smaller shapes */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
        <Box position={[4, -2, 0]} args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.6}
            roughness={0.4}
            emissive="#8b5cf6"
            emissiveIntensity={0.1}
          />
        </Box>
      </Float>

      <Float speed={1.6} rotationIntensity={1} floatIntensity={2.5}>
        <Sphere position={[-2, 2, 1]} args={[0.6, 16, 16]}>
          <meshStandardMaterial
            color="#00ffff"
            metalness={0.8}
            roughness={0.2}
            emissive="#00ffff"
            emissiveIntensity={0.15}
          />
        </Sphere>
      </Float>
    </>
  );
}

// Lighting setup
function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#ffffff"
        castShadow
      />
    </>
  );
}

// Main Hero3D component
export const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 60,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
        style={{ background: 'transparent' }}
      >
        <Lights />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};