import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import Model from './components/Model'
import LanguageToggle from './components/LanguageToggle'
import { useTranslation } from 'react-i18next'
import './i18n'
import Scene from './components/Scene'


function App() {
  const { t } = useTranslation()
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <LanguageToggle />
      <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Scene />{/*Ground Plane*/}
        <Model path="/models/temple.glb" position={[0, 0, 0]} scale={0.5} />
        <Html center position={[0, 1.5, 0]}>
          <div style={{
            background: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            fontSize: '14px',
            maxWidth: '200px'
          }}>
            {t('facts.japan')}
          </div>
        </Html>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App