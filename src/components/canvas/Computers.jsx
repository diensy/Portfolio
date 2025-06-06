import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.55} groundColor="black" />
      <pointLight intensity={2} />
     <spotLight
      position={[-20, 50, 10]} 
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile?0.5 : 0.75}
        position={isMobile?[0,-3,-2.2]:[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
     
    </mesh>
  );
};

const ComputetrsCanvas = () => {
  const [isMobile,setMobile] = useState(false);

  useEffect(()=>{
    const MediaQuery = window.matchMedia(
      '(max-width:760px)'
    );
    setMobile(MediaQuery.matches);
    const handleMediaQueryChanges = (event)=>{
      setMobile(event.matches)
    }

    MediaQuery.addEventListener('change',handleMediaQueryChanges);

    return()=>{
      MediaQuery.removeEventListener('change',handleMediaQueryChanges)
    }
  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5],  fov: isMobile ? 40 : 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputetrsCanvas;
