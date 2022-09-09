/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Ioana Oprisan (https://sketchfab.com/ioanaoprisan)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/vintage-telephone-75b7add8107d4b91bf7f943300048ca7
title: Vintage telephone
*/

import React, { memo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Telephone(props) {
  const { nodes, materials } = useGLTF('/telephone.glb');
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.02;
  });
  return (
    <group {...props} ref={ref} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 0]} scale={0.2}>
        <mesh
          geometry={nodes['Object032_Material_#127_0'].geometry}
          material={materials.Material_127}
        />
      </group>
    </group>
  );
}
export default memo(Telephone);
useGLTF.preload('/telephone.glb');