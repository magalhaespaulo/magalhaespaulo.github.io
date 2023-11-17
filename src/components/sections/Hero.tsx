'use client'

import { useRef } from 'react'
import { ScrollMoreSVG } from '@/components/svg/ScrollMoreSVG'
import { AnimateLine } from '@/components/AnimateLine'
import { useIsMobile } from '@/hooks/useIsMobile'
import { motion, useScroll, useTransform } from 'framer-motion'

export const Hero = () => {
  const viewRef = useRef<HTMLDivElement>(null!)
  const { scrollY, scrollYProgress } = useScroll({
    target: viewRef,
    offset: ['center start', 'center center'],
  })
  const { scrollYProgress: scrollYProgressAlt } = useScroll({
    target: viewRef,
    offset: ['center -420px', 'center center'],
  })
  const isMobile = useIsMobile()

  return (
    <section ref={viewRef} id="hi" className="relative min-h-screen flex items-center justify-center">
      <div
        className="
          z-10 relative
          wrapper w-full
          flex items-center
          flex-col md:flex-row
          justify-center md:justify-start
          gap-10
        "
        style={{ perspective: 1400 }}
      >
        <motion.div
          style={{ translateY: useTransform(scrollYProgress, [1, 0], [0, 200]) }}
          className="flex-1 text-res-1 font-display font-extrabold"
        >
          <motion.div style={{ translateX: useTransform(scrollYProgressAlt, [1, 0], [0, isMobile ? 0 : 120]) }}>
            <AnimateLine delay={0.4}>Hi, my name is</AnimateLine>
          </motion.div>
          <motion.div style={{ translateX: useTransform(scrollYProgressAlt, [1, 0], [0, isMobile ? 0 : 180]) }}>
            <AnimateLine delay={0.6} className="text-secondary">
              &nbsp;&nbsp;Paulo Magalhães.
            </AnimateLine>
          </motion.div>
          <motion.div style={{ translateX: useTransform(scrollYProgressAlt, [1, 0], [0, isMobile ? 0 : 240]) }}>
            <AnimateLine delay={0.8}>&nbsp;&nbsp;&nbsp;&nbsp;I'm a Front-end dev</AnimateLine>
          </motion.div>
          <motion.div style={{ translateX: useTransform(scrollYProgressAlt, [1, 0], [0, isMobile ? 0 : 340]) }}>
            <AnimateLine delay={1}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;working remotely
              <span className="text-pink">.</span>
            </AnimateLine>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: -640, rotateY: -256 }}
          animate={{
            opacity: 1,
            translateY: 0,
            rotateY: 0,
            transition: { duration: 1.6, delay: 1.2, type: 'spring' },
          }}
          className="z-10 flex-1 flex items-center justify-center"
        >
          <span className="z-0 absolute w-px h-[1024px] -translate-y-1/2 -mt-[248px] md:-mt-[328px] bg-transparent md:bg-green" />

          <div className="p-1 border-2 border-green rounded-full">
            <div className="overflow-hidden rounded-full w-[240px] h-[240px] md:w-[320px] md:h-[320px]">
              <img src={'/images/me.webp'} width={460} height={460} alt="me" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.span
        style={{
          translateY: useTransform(scrollY, [0, 240], [0, 240]),
          opacity: useTransform(scrollY, [0, 120], [1, 0]),
        }}
        className="absolute bottom-0 -mb-[66px]"
      >
        <motion.span
          initial={{
            translateY: 66,
            opacity: 1,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
            transition: { duration: 1.6, delay: 2, type: 'spring' },
          }}
          className="relative flex items-center justify-center"
        >
          <span className="absolute animate-bounce w-2 h-[132px] flex items-center">
            <span className="absolute animate-bounce w-2 h-2 bg-cyan rounded-full" />
          </span>
          <ScrollMoreSVG />
        </motion.span>
      </motion.span>
    </section>
  )
}
