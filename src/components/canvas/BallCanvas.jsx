import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import Ball from "./Ball"; // Assuming Ball.jsx is in the same directory

const BallCanvas = ({ icon, name }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} name={name} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;