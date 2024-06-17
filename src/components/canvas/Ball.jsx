import React, { useState } from "react";
import { Decal, Float, Html, useTexture } from "@react-three/drei";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [hovered, setHovered] = useState(false);

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
      {hovered && (
        <Html position={[0, 0, 2]} center>
          <div className="hover-text">{props.name}</div>
        </Html>
      )}
    </group>
  );
};

export default Ball;