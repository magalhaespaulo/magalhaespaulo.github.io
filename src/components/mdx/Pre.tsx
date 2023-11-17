import { CopySyntax } from './CopySyntax'

export const Pre = ({
  children,
  raw,
  ...props
}: {
  children: React.ReactNode
  raw: string
  [key: string]: any
}) => {
  return (
    <pre {...props} className="relative">
      <div className="z-10 absolute top-3 right-3">
        <CopySyntax text={raw} />
      </div>
      {children}
    </pre>
  )
}
