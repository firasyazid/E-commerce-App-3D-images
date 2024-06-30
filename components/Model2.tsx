import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Wood: THREE.Mesh
    Fabric: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Fabric: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const {nodes, materials} = useGLTF(
    require('../assets/Model2.glb'),
  ) as GLTFResult;  return (
    <group {...props} dispose={null} scale={5} position={[0, -1.4,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wood.geometry}
        material={materials.Wood}
        position={[0.001, 0, -0.006]}
        rotation={[0, 0.715, 0]}
        scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fabric.geometry}
          material={materials.Fabric}
          position={[0, 194.882, -196.89]}
          scale={[1, 0.938, 1]}
        />
      </mesh>
    </group>
  )
}

