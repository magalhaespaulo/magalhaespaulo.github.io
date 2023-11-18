import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const AnimateHeader = ({
  children,
  translateX = ['-50%', '10%'],
}: {
  children: React.ReactNode
  translateX?: [string, string]
}) => {
  const viewRef = useRef(null!)
  const { scrollYProgress } = useScroll({
    target: viewRef,
    offset: ['start end', 'start 40px'],
  })

  return (
    <motion.h2
      ref={viewRef}
      className="relative mt-12 pb-12 px-3"
      style={{
        translateX: useTransform(scrollYProgress, [0, 1], translateX),
      }}
    >
      <span className="pointer-events-none z-10 absolute inset-0 text-right bg-gradient-to-b from-transparent via-tertiary to-tertiary" />
      <span className="text-res-2 font-display text-tertiary drop-shadow-[0_0_1px_rgba(255,255,255,1)]">
        {children}
      </span>
    </motion.h2>
  )
}
