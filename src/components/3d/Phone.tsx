'use client'

import { forwardRef, useImperativeHandle, useEffect, useRef, useState } from 'react'
import { useCaseContext } from '@/context/case'

import type { Group } from 'three'
import { GroupProps } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

import { gsap } from 'gsap'

type PhoneProps = {
  index: number
  nodes: any
  materials: any
  image: string
} & GroupProps

const SCALE = 0.0065
const SCALE_HOVER = 0.0075

const Phone = forwardRef<React.MutableRefObject<Group>, PhoneProps>(function Phone(
  { index, nodes, materials, image, ...props }: PhoneProps & JSX.IntrinsicElements['group'],
  ref,
): JSX.Element {
  const { caseIndex, setCaseIndex } = useCaseContext()
  useImperativeHandle(ref, () => phoneRef)
  const phoneRef = useRef<Group>(null!)
  const texture = useTexture(image)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const selected = caseIndex > -1

    document.body.style.cursor = hovered && !selected ? 'pointer' : 'auto'

    const isHover = hovered && !selected

    gsap.to(phoneRef.current.scale, {
      duration: 0.2,
      x: isHover ? SCALE_HOVER : SCALE,
      y: isHover ? SCALE_HOVER : SCALE,
      z: isHover ? SCALE_HOVER : SCALE,
      ease: 'power2.out',
    })
    gsap.to(phoneRef.current.position, {
      duration: 0.2,
      y: isHover ? SCALE_HOVER : 0,
      ease: 'power2.out',
    })
  }, [caseIndex, hovered, index])

  return (
    <group
      ref={phoneRef}
      {...props}
      dispose={null}
      scale={[SCALE, SCALE, SCALE]}
      onPointerDown={(e) => {
        if (caseIndex > -1) return
        e.stopPropagation()
        setHovered(false)
        setCaseIndex(index)
      }}
      onPointerOver={(e) => {
        if (caseIndex > -1) return
        e.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={(e) => {
        if (caseIndex > -1) return
        e.stopPropagation()
        setHovered(false)
      }}
    >
      <mesh
        name="Screen"
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
        position={[-10.45, -18.61, 14.55]}
      >
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
      <mesh
        name="Screen Border"
        geometry={nodes['Screen Border'].geometry}
        material={materials['Black Border']}
        position={[-10.45, -18.61, 14.39]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[1.08, 1.08, 1.06]}
      />
      <group name="Left Buttons" position={[-139.66, 74.64, 0.26]} scale={[0.98, 0.98, 0.96]}>
        <mesh
          name="Rectangle 7"
          geometry={nodes['Rectangle 7'].geometry}
          material={materials[`${index}`]}
          position={[-1.51, 11.96, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.04, 1.02, 1.02]}
        />
        <mesh
          name="Rectangle 5"
          geometry={nodes['Rectangle 5'].geometry}
          material={materials[`${index}`]}
          position={[-1.51, -38.91, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.04, 1.02, 1.02]}
        />
      </group>
      <mesh
        name="Metal Border"
        geometry={nodes['Metal Border'].geometry}
        material={materials[`${index}`]}
        position={[-10.45, -18.61, 13.04]}
        rotation={[-Math.PI, 0, Math.PI]}
        scale={[1.08, 1.08, 1.06]}
      />
    </group>
  )
})

export default Phone
