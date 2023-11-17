'use client'

import { Suspense } from 'react'

import { Loader } from '@/components/3d/Loader'
import Phones from '@/components/3d/Phones'

import { CaseContext } from '@/context/case'

import type { Color } from 'three'
import { Canvas } from '@react-three/fiber'
import { Environment, Preload, useContextBridge } from '@react-three/drei'

export type Case = {
  image: string
  title: string
  content: string
  technologies: string[]
}

export type CaseWithColor = Case & {
  color: Color
  colorHex: string
}

export const Scene = ({ cases }: { cases: CaseWithColor[] }) => {
  const ContextBridge = useContextBridge(CaseContext)

  return (
    <Canvas
      style={{ zIndex: 0, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      camera={{ position: [0, 0, 8], fov: 64 }}
    >
      <ContextBridge>
        <fog attach="fog" args={['#111019', 5, 25]} />
        <Suspense fallback={<Loader text="Loading..." />}>
          <Phones cases={cases} />
          <Environment preset="city" />
        </Suspense>
        <Preload all />
      </ContextBridge>
    </Canvas>
  )
}
