'use client'

import { Fragment, createRef, useEffect, useRef, useState } from 'react'
import { useCaseContext } from '@/context/case'

import type { CaseWithColor } from '@/components/3d/Scene'
import Phone from '@/components/3d/Phone'

import * as THREE from 'three'
import { Html, Plane } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import { HiOutlineBackspace } from 'react-icons/hi2'
import useSpline from '@splinetool/r3f-spline'

const Phones = ({ cases }: { cases: CaseWithColor[] }): JSX.Element => {
  const { caseIndex, setCaseIndex } = useCaseContext()

  const { nodes, materials } = useSpline('/3d/scene.splinecode')
  const phonesRef = useRef(cases.map(() => createRef<any>()))
  const groupSection = useRef<THREE.Group>(null!)
  const groupSpin = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)
  const { pointer: mouse } = useThree()
  const vec = new THREE.Vector3()
  const selected = caseIndex > -1

  useFrame(() => {
    const x = 12
    const index = 2
    const startAngle = -(Math.PI / 2) * (index / (cases.length * 0.5))
    const minEndAngle = -Math.PI * x
    const minMouseX = -0.25
    const maxMouseX = 0.25

    if (hovered && !selected) {
      const clampedMouseX = Math.min(maxMouseX, Math.max(minMouseX, mouse.x))
      let endAngle = clampedMouseX * minEndAngle

      gsap.to(groupSpin.current.rotation, {
        duration: 1.8,
        ease: 'elastic.out(1,1)',
        y: THREE.MathUtils.lerp(startAngle, endAngle, 0.1),
      })
    } else {
      gsap.to(groupSpin.current.rotation, {
        duration: 1.8,
        ease: 'elastic.out(1,1)',
        y: startAngle,
      })
    }

    if (!selected) {
      groupSection.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
      groupSection.current.rotation.y = THREE.MathUtils.lerp(
        groupSection.current.rotation.y,
        (-mouse.x * Math.PI) / 20,
        0.1,
      )
    }
  })

  useEffect(() => {
    if (!selected) {
      phonesRef.current.forEach((item, index) => {
        const phone = item.current.current
        const angle = (Math.PI / 2) * (index / (phonesRef.current.length * 0.5))
        const radius = 3

        gsap.to(phone.position, {
          duration: 1.8,
          ease: 'elastic.out(1,1)',
          x: Math.sin(angle) * radius,
          y: 0,
          z: Math.cos(angle) * radius,
        })

        gsap.to(phone.rotation, {
          duration: 1.8,
          ease: 'elastic.out(1,1)',
          y: angle,
        })
      })
    } else {
      phonesRef.current.forEach((item, index) => {
        const phone = item.current.current

        const angle = (Math.PI / 2) * (index / (phonesRef.current.length * 0.5))
        const radius = 3

        const xx = (Math.PI / 2) * (2 / (phonesRef.current.length * 0.5))
        const zz = (Math.PI / 2) * (1 / (phonesRef.current.length * 0.5))
        gsap.to(phone.position, {
          duration: caseIndex === index ? 1.8 : 2.4,
          ease: caseIndex === index ? 'elastic.out(0.5,1)' : 'elastic.out(1,0.5)',
          x: caseIndex === index ? Math.sin(xx) * radius : Math.sin(angle) * radius - 18,
          y: caseIndex === index ? 0 : -3,
          z: caseIndex === index ? Math.cos(zz) * radius : Math.cos(angle) * radius - 5,
        })

        const yy = (Math.PI / 2) * (3 / (phonesRef.current.length * 0.5))
        gsap.to(phone.rotation, {
          duration: 1.8,
          ease: 'elastic.out(1,1)',
          y: caseIndex === index ? yy : angle,
        })
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caseIndex])

  useEffect(() => {
    const handleEscapeKeyPress = (event: { key: string }) => {
      if (event.key === 'Escape' || event.key === 'Backspace') {
        setCaseIndex(-1)
      }
    }

    window.addEventListener('keydown', handleEscapeKeyPress)

    return () => {
      window.removeEventListener('keydown', handleEscapeKeyPress)
    }
  }, [setCaseIndex])

  return (
    <group ref={groupSection} rotation={[0, 0, 0]}>
      <group ref={groupSpin} rotation={[0, 0, 0]}>
        {cases.map(({ image }, index) => (
          <Phone
            key={index}
            ref={phonesRef.current[index]}
            index={index}
            nodes={nodes}
            materials={materials}
            image={image}
            position={[0, 10, 0]}
          />
        ))}

        {selected ? (
          <Html center position={[4, -0.4, 0]} distanceFactor={6}>
            <div className="w-[500px] h-[500px]">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.8 } }}
                className=" w-16 h-16 flex items-center justify-center"
                style={{ color: cases[caseIndex].colorHex }}
                whileHover={{ color: '#ffffff' }}
                onPointerDown={(e) => {
                  e.stopPropagation()
                  setCaseIndex(-1)
                }}
              >
                <HiOutlineBackspace className="text-4xl" />
              </motion.button>
              <div className="relative p-7" style={{ borderColor: cases[caseIndex].colorHex }}>
                <motion.span
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1, transition: { delay: 0.4 } }}
                  className="pointer-events-none z-0 absolute inset-0 rounded-lg border-2"
                  style={{ borderColor: cases[caseIndex].colorHex }}
                />
                <motion.span
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1, transition: { delay: 0.4 } }}
                  className="pointer-events-none z-0 absolute inset-0 opacity-20 rounded-lg"
                  style={{ backgroundColor: cases[caseIndex].colorHex }}
                />
                <motion.div
                  className="z-10 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.6 } }}
                >
                  <h1 className="mb-5 font-display" style={{ color: cases[caseIndex].colorHex }}>
                    {cases[caseIndex].title}
                  </h1>
                  <p className="text-secondary">{cases[caseIndex].content}</p>
                  <h4 className="mt-4 mb-0">Technologies</h4>
                  <ul className="flex gap-2 list-none">
                    {cases[caseIndex].technologies.map((element, index) => (
                      <Fragment key={index}>
                        {index !== 0 && (
                          <span aria-hidden className="opacity-50">
                            ·
                          </span>
                        )}
                        <li className="">{element}</li>
                      </Fragment>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </Html>
        ) : null}
      </group>

      <Plane
        position={[0, 0, 4]}
        args={[3.7, 3]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial attach="material" color={0x000000} transparent opacity={0} />
      </Plane>
    </group>
  )
}

export default Phones
