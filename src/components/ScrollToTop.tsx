'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

export const ScrollToTop = () => {
  useEffect(() => {
    gsap.to(window, { duration: 0.4, scrollTo: 'body', ease: 'power1.out' })
  }, [])

  return null
}
