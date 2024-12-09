import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture, Stars } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={0.8} rotationIntensity={1} floatIntensity={1.5}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 2, 5]} intensity={1.2} />
      
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#1a1a2e"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 0.9]}
          rotation={[0, 0, 0]}
          scale={0.6}
          map={decal}
          flatShading
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial
          transparent
          opacity={0.1}
          emissive="#0077ff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "200px", height: "200px" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Stars
          radius={100}
          depth={50}
          count={100} 
          factor={4}
          fade
        />
        
        <Ball imgUrl={icon} />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
