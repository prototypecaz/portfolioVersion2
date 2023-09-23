import React, { useMemo, useRef } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import {
  Color,
  AdditiveBlending,
  TextureLoader,
  FrontSide,
  ShaderMaterial,
} from "three";
import { Bloom, EffectComposer, SMAA } from "@react-three/postprocessing";

// Extend permet d'utiliser Three.js native ShaderMaterial dans react-three-fiber
extend({ ShaderMaterial });

// Code du shader pour l'effet de lueur de halo
const GlowShaderMaterialParams = {
  uniforms: {
    glowColor: { value: new Color("white") },
    mapTexture: { type: "t", value: null },
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal; // Déclarez vNormal ici.
    void main() 
    {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal); // Assignez une valeur à vNormal ici.
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: `
    varying vec2 vUv;
    varying vec3 vNormal; // Maintenant, vous pouvez l'utiliser ici.
    uniform vec3 glowColor;
    uniform sampler2D mapTexture;
    void main() 
    {
      vec4 texColor = texture2D(mapTexture, vUv);
      float intensity = 0.12 + 0.8 * pow(abs(dot(vNormal, vec3(1.0, 0.0, 0.0))), 8.0);
      gl_FragColor = vec4(glowColor * texColor.rgb, 5.0) * intensity;
    }`,
  side: FrontSide,
  transparent: true,
  blending: AdditiveBlending,
};

const Model = ({ visible }) => {
  const ref = useRef();

  if(ref.current){
    ref.current.position.y = -0.92;
  }

  const object = useLoader(OBJLoader, "/portfolio/MaleHologram.obj");
  const texture = useLoader(TextureLoader, "/portfolio/panoplieMin.webp");

  const material = useMemo(() => {
    const mat = new ShaderMaterial({
      ...GlowShaderMaterialParams,
      uniforms: {
        ...GlowShaderMaterialParams.uniforms,
        mapTexture: { value: texture },
      },
    });
    return mat;
  }, [texture]);

  object.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  useFrame(({ clock }) => {
    if (ref.current && visible) {
      ref.current.rotation.y = -clock.getElapsedTime() * 1.3;
    }
  });



  return <primitive object={object} ref={ref} />;
};

export default function Modal3D({ visible }) {
  return (
    <Canvas style={{ height: "95%", cursor: "pointer" }} camera={{ position: [0, 1, 1.8] }}>
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <EffectComposer multisampling={0}>
        <SMAA />
      </EffectComposer>
      <Model visible={visible} />
    </Canvas>
  );
}