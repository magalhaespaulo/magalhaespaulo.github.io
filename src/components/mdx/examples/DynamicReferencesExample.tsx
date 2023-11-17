'use client'

import { createRef, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const colors = ['#8be9fd', '#50fa7b', '#ff79c6', '#bd93f9', '#ff5555', '#F1FA8C']

export const DynamicReferencesExample = () => {
  const references = useRef(colors.map(() => createRef<HTMLLIElement>()))

  useEffect(() => {
    references.current.forEach((element, index) => {
      gsap.to(element.current, {
        duration: 0.4,
        y: -128,
        scale: 1.4,
        delay: 0.075 * index,
        repeat: -1,
        yoyo: true,
      })
    })
  }, [])

  return (
    <section
      className="
        h-[256px]
        overflow-hidden
        border-2 border-gray-800 rounded
        flex flex-col items-center justify-end
      "
    >
      <ul className="flex items-center justify-center gap-4 !mb-0">
        {colors.map((color, index) => (
          <li
            key={color}
            ref={references.current[index]}
            className="w-8 h-8 rounded list-none"
            style={{ backgroundColor: color }}
          />
        ))}
      </ul>
      <div className="bg-gray-800 w-full h-4" />
    </section>
  )
}
