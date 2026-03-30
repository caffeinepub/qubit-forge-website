import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function OrbCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.25;
      meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.12;
    }
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.04 + Math.sin(t * 1.5) * 0.02;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
      {/* Inner core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.15, 64, 64]} />
        <meshStandardMaterial
          color="#00BFFF"
          emissive="#00E5FF"
          emissiveIntensity={0.4}
          roughness={0.05}
          metalness={0.9}
          envMapIntensity={1}
        />
      </mesh>
      {/* Outer glow shell */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </Float>
  );
}

function OrbitalRing({
  radius,
  color,
  speed,
  tiltX,
  tiltZ,
}: {
  radius: number;
  color: string;
  speed: number;
  tiltX: number;
  tiltZ: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={[tiltX, 0, tiltZ]}>
      <torusGeometry args={[radius, 0.012, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.55} />
    </mesh>
  );
}

function Particles() {
  const count = 250;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 3.5;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  const particleRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particleRef.current) {
      particleRef.current.rotation.y = state.clock.elapsedTime * 0.04;
      particleRef.current.rotation.x = state.clock.elapsedTime * 0.025;
    }
  });

  return (
    <points ref={particleRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#9B59FF"
        sizeAttenuation
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight
        position={[4, 4, 6]}
        color="#00E5FF"
        intensity={3}
        distance={20}
      />
      <pointLight
        position={[-4, -3, -4]}
        color="#9B59FF"
        intensity={2}
        distance={15}
      />
      <pointLight
        position={[0, 0, 4]}
        color="#00BFFF"
        intensity={1.5}
        distance={10}
      />

      <OrbCore />
      <Particles />

      <OrbitalRing
        radius={1.9}
        color="#00E5FF"
        speed={0.45}
        tiltX={0}
        tiltZ={0}
      />
      <OrbitalRing
        radius={2.3}
        color="#9B59FF"
        speed={-0.28}
        tiltX={Math.PI / 3.5}
        tiltZ={0.3}
      />
      <OrbitalRing
        radius={1.7}
        color="#00BFFF"
        speed={0.7}
        tiltX={Math.PI / 4}
        tiltZ={-0.5}
      />

      <Stars
        radius={60}
        depth={50}
        count={1800}
        factor={2}
        saturation={0}
        fade
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </>
  );
}

function FallbackOrb() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background:
          "radial-gradient(circle, rgba(0,229,255,0.15) 0%, rgba(155,89,255,0.1) 50%, transparent 70%)",
      }}
    >
      <div
        className="w-48 h-48 rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.4) 0%, rgba(0,191,255,0.2) 50%, transparent 70%)",
          boxShadow:
            "0 0 60px rgba(0,229,255,0.3), 0 0 120px rgba(155,89,255,0.2)",
        }}
      />
    </div>
  );
}

export default function QuantumOrb() {
  return (
    <div className="relative w-full h-full" style={{ minHeight: "420px" }}>
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.06) 0%, rgba(155,89,255,0.04) 40%, transparent 70%)",
        }}
      />
      <Suspense fallback={<FallbackOrb />}>
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent", width: "100%", height: "100%" }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
