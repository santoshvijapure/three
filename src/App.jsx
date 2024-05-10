import { Stats, OrbitControls, Environment } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import Lights from './Lights'

export default function App() {
  const gltf = useLoader(GLTFLoader, '/models/monkey.glb')

  return (
    <Canvas camera={{ position: [0, 1.2, .3] }}>
      <Environment preset='dawn' background blur={0.5} />
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
      <primitive object={gltf.scene} position={[0, 1, 0]}>
        <axesHelper/>
      </primitive>
      <OrbitControls target={[0, 1, 0]}  />
      {/* <axesHelper args={[5]} /> */}
      <Stats />
      {/* <Lights/> */}
    </Canvas>
  )
}