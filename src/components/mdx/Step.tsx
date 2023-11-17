type StepProps = {
  number: number
  title?: string
  className?: string
  children?: React.ReactNode
  color?: 'cyan' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow'
} & React.SVGAttributes<SVGElement>

export const Step = ({ color = 'pink', number, title }: StepProps) => {
  const size = 'w-[48px] h-[48px]'
  return (
    <>
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`
          flex items-center justify-center
          ${size}
        `}
        >
          <span className="absolute text-3xl font-display text-white font-bold">{number}</span>
          <svg className={size} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        <h2 className="!mb-0">{title}</h2>
      </div>
    </>
  )
}
