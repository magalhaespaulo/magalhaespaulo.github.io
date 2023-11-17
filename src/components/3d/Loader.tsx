import { useEffect } from 'react'
import { Html, useProgress } from '@react-three/drei'

type LoaderProps = {
  text: string
}

export const Loader = ({ text }: LoaderProps): JSX.Element => {
  const { progress } = useProgress()

  useEffect(() => {
    document.body.style.cursor = 'progress'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <Html center>
      <div className="text-xl text-secondary font-bold text-center">
        {progress < 100 && <span className="text-transparent">0</span>}
        {progress.toFixed(0)}% {text}
      </div>
    </Html>
  )
}
