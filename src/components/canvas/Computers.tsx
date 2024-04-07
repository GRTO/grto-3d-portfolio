import { FC, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

interface ComputersProps {
  isMobile: boolean;
}

const Computers: FC<ComputersProps> = ({ isMobile }) => {
  const computerAsset = useGLTF("./desktop_pc/scene.gltf");

  return (
    <>
      <hemisphereLight intesity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-1, 3, 1]}
        angle={2}
        penumbra={1}
        intensity={300}
        castShadow
        shadow-mapSize={1024}
      />
      <mesh>
        <primitive
          object={computerAsset.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -3, 2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMediaQueryChanges = (event: MediaQueryListEvent) => {
    setIsMobile(event.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("max-width: 500px");
    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChanges);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
