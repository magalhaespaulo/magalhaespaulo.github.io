'use client'

import { motion } from 'framer-motion'
import { SVGAttributes } from 'react'

type LogotypeSVGProps = {
  progress?: number
} & SVGAttributes<SVGElement>

const lerp = (from: number, to: number, progress: number) => {
  return from + (to - from) * progress
}

export const LogotypeSVG = ({ progress = 0 }: LogotypeSVGProps) => {
  const size = lerp(54, 40, progress)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 72 72"
      style={{
        width: size,
        height: size,
      }}
    >
      <g clipPath="url(#logotype__a)">
        <path
          d="m44.695 2.268 16.297 9.41a16.931 16.931 0 0 1 8.466 14.663V45.16a16.931 16.931 0 0 1-8.466 14.663l-16.297 9.41a16.931 16.931 0 0 1-16.932 0l-16.297-9.41A16.931 16.931 0 0 1 3 45.16V26.34a16.931 16.931 0 0 1 8.466-14.662l16.297-9.41a16.931 16.931 0 0 1 16.932 0Z"
          fill="#E261D2"
        />
        <path
          d="m44.445 2.701 16.297 9.41a16.431 16.431 0 0 1 8.216 14.23V45.16c0 5.87-3.132 11.295-8.216 14.23L44.445 68.8a16.431 16.431 0 0 1-16.432 0l-16.297-9.41A16.431 16.431 0 0 1 3.5 45.16V26.34c0-5.87 3.132-11.294 8.216-14.23l16.297-9.409a16.431 16.431 0 0 1 16.432 0Z"
          stroke="#fff"
          strokeOpacity=".1"
        />
        <path
          d="m44.695 2.268 16.297 9.41a16.931 16.931 0 0 1 8.466 14.663V45.16a16.931 16.931 0 0 1-8.466 14.663l-16.297 9.41a16.931 16.931 0 0 1-16.932 0l-16.297-9.41A16.931 16.931 0 0 1 3 45.16V26.34a16.931 16.931 0 0 1 8.466-14.662l16.297-9.41a16.931 16.931 0 0 1 16.932 0Z"
          fill="url(#logotype__b)"
        />

        <motion.path
          d="m26.226 38.795-5.65-3.922 5.65-3.923a2.757 2.757 0 1 0-3.175-4.508L16.39 31.2a4.51 4.51 0 0 0 .007 7.345l6.67 4.746a2.748 2.748 0 1 0 3.16-4.496Z"
          fill="#fff"
          stroke="#fff"
          className="origin-center"
          animate={{
            rotate: `${90 * progress}deg`,
            translateX: 15.5 * progress,
            translateY: -10 * progress,
          }}
        />
        <motion.path
          d="m37.123 24.409-6.072 19.607a2.689 2.689 0 0 0 5.134 1.596L42.3 26.018a2.71 2.71 0 1 0-5.176-1.61Z"
          fill="#fff"
          stroke="#fff"
          animate={{ rotate: `${-17 * progress}deg`, translateY: 2 * progress }}
          className="origin-center"
        />

        <motion.path
          d="m46.787 30.95 5.651 3.923-5.65 3.923a2.747 2.747 0 1 0 3.16 4.493l6.657-4.743a4.513 4.513 0 0 0 .007-7.347l-6.649-4.756a2.757 2.757 0 1 0-3.176 4.507Z"
          fill="#fff"
          stroke="#fff"
          className="origin-center"
          animate={{
            rotate: `${-90 * progress}deg`,
            translateX: -15.5 * progress,
            translateY: -10 * progress,
          }}
        />
      </g>
      <defs>
        <radialGradient
          id="logotype__b"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-135.355 42.683 17.75) scale(67.0185 61.5518)"
        >
          <stop offset=".55" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity=".3" />
        </radialGradient>
        <clipPath id="logotype__a">
          <path fill="#fff" d="M0 0h72v72H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
