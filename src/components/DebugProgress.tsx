import { MotionValue, motion } from 'framer-motion'

export const DebugProgress = ({
  progress,
  position = 'bottom-0',
}: {
  progress: MotionValue<number>
  position?: string
}) => (
  <figure className={`fixed left-0 ${position}`}>
    <svg fill="none" width="75" height="75" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        className="opacity-20 stroke-2 stroke-gray-500"
      />
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        className="stroke-2 stroke-rose-600"
        style={{ pathLength: progress }}
      />
    </svg>
  </figure>
)
