import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'

export default function Box(props) {
  const ref = useRef()

  useEffect(() => {
        console.log(ref.current)

  })

  useFrame((state, delta) => {
    // console.log({state,delta})
    ref.current.rotation.x += 10 * delta
    ref.current.rotation.y += 10 * delta
    ref.current.rotation.z += 99 * delta
    // ref.current.position.x += .1 * delta
    // ref.current.position.y += .1 * delta
    // ref.current.position.z += .1 * delta
    // ref.current.scale.x += .1 * delta
    // ref.current.scale.y += .1 * delta
    // ref.current.scale.z += .1 * delta




  })
  return (
    <mesh {...props} ref={ref}
        onPointerDown={(e)=>  console.log(e) }
        onPointerup={e=> console.log(e)}
    >
      <sphereGeometry />
      <meshBasicMaterial color={"white"}  wireframe />
    </mesh>
  )
}
