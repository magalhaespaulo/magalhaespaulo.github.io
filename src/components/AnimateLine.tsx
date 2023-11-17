import { type MotionStyle, motion } from 'framer-motion'

export const AnimateLine = ({
  children,
  className = '',
  style,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  style?: MotionStyle
  delay?: number
}) => (
  <div className="overflow-hidden pb-1">
    <motion.div
      className={className}
      style={style}
      whileInView={{ opacity: 1 }}
      initial={{ translateY: 72, opacity: 0 }}
      animate={{
        translateY: 0,
        transition: {
          duration: 1.6,
          delay,
          type: 'spring',
        },
      }}
    >
      {children}
    </motion.div>
  </div>
)
