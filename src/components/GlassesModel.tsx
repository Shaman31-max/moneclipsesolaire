"use client";

import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Float, PerspectiveCamera, Environment } from "@react-three/drei";

function GLBModel() {
  const { scene } = useGLTF("/glasses.glb");
  const ref = useRef<any>(null);
  return <primitive ref={ref} object={scene} scale={1.5} />;
}

export default function GlassesModel() {
  return (
    <div className="w-full h-full">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={38} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 3, 4]} color="#FFB800" intensity={2} />
        <directionalLight position={[-3, -2, 2]} color="#22D3EE" intensity={1.5} />
        <pointLight position={[0, 2, 3]} color="#FFFFFF" intensity={1} />
        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
            <GLBModel />
          </Float>
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/glasses.glb");
