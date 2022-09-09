import * as THREE from 'three';
import { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { Box } from '@react-three/drei';
import * as TWEEN from '@tweenjs/tween.js';
function Mesh() {
  const mesh = useRef<THREE.Mesh>(null!);
  const avatar = useTexture('/avatar.jpg');

  const upAndDown = new TWEEN.Tween({ y: -0.2, rot: 0 })
    .to({ y: 0.5, rot: 1 }, 3000)
    .easing(TWEEN.Easing.Sinusoidal.InOut)
    .repeat(Infinity)
    .yoyo(true);

  useEffect(() => {
    requestAnimationFrame(animate);
    upAndDown.start();
    upAndDown.onUpdate(({ y, rot }) => {
      mesh.current.position.y = y;
      mesh.current.rotation.y = -0.5 + rot;
    });
    return () => {
      upAndDown.stop();
    };
  }, []);

  function animate(time: number) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }

  return (
    <mesh ref={mesh} scale={3}>
      <boxBufferGeometry />
      <meshStandardMaterial map={avatar} />
    </mesh>
  );
}
export default function AvatarBox() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <Mesh />
      </Suspense>
    </Canvas>
  );
}
