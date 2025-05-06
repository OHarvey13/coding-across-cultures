import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ path, position = [0, 0, 0], scale = 1 }) {
  const { scene } = useGLTF(path)
  return <primitive object={scene} position={position} scale={scale} />
}