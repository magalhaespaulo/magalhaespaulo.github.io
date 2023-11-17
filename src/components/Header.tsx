'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { LogotypeSVG } from '@/components/svg/LogotypeSVG'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

const links = [
  { id: 'work', label: 'Work' },
  { id: 'snippets', label: 'Snippets' },
  { id: 'about', label: 'About' },
]

export const Header = () => {
  const pathname = usePathname()
  const headerRef = useRef<HTMLDivElement>(null!)
  const [progress, setProgress] = useState(0)

  const goTo = (id: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: '#' + id,
      ease: 'power1.out',
    })
  }

  useEffect(() => {
    if (pathname !== '/') {
      return
    }

    const hash = window.location.hash
    if (!hash) {
      return
    }

    goTo(hash.slice(1))
  }, [pathname])

  useEffect(() => {
    gsap.to(headerRef.current, {
      top: 12,
      scrollTrigger: {
        start: '120 top',
        end: '+=240 top',
        scrub: true,
        onUpdate: (event) => {
          setProgress(event.progress)
        },
      },
    })
  }, [])

  return (
    <div ref={headerRef} className="pointer-events-none z-50 fixed left-0 top-12 w-full">
      <nav className="relative wrapper flex items-center justify-between">
        <div className="flex items- justify-center">
          <Link
            href={progress === 0 ? `/#${'hi'}` : ''}
            scroll={false}
            onClick={() =>
              progress === 0
                ? goTo('hi')
                : gsap.to(window, { duration: 1, scrollTo: 'body', ease: 'power1.out' })
            }
            className="pointer-events-auto flex items-center justify-center font-display"
            aria-label="Home"
          >
            <LogotypeSVG progress={progress} />
          </Link>
        </div>

        <ul
          className="
            list-none
            px-4
            flex items-center justify-center gap-4
            rounded-full
            bg-tertiary/70 backdrop-blur
            border-b border-tertiary
          "
        >
          {links.map(({ id, label }) => (
            <li key={label}>
              <Link
                href={`/#${id}`}
                scroll={false}
                onClick={() => goTo(id)}
                className="pointer-events-auto py-2 flex items-center justify-center font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
