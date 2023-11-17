'use client'

import { AnimateHeader } from '@/components/AnimateHeader'

export const About = () => {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden">
      <AnimateHeader>About Me</AnimateHeader>

      <div className="-mt-12 z-10 relative wrapper-content flex flex-col gap-10">
        <div className="flex-1">
          {"I'm"} a Brazilian Software Engineer specializing in{' '}
          <strong>Front-end development</strong>, driven by a passion for problem-solving and a
          knack for exploring innovative solutions beyond the ordinary.
          <br />
          <br />
          You can drop me a line at{' '}
          <a target="_blank" href="mailto:magalhaes.paulo.dev@gmail.com">
            magalhaes.paulo.dev@gmail.com
          </a>
          , or we can connect on{' '}
          <a target="_blank" href="https://github.com/magalhaespaulo/">
            GitHub
          </a>
          ,{' '}
          <a target="_blank" href="https://codepen.io/magalhaespaulo">
            CodePen
          </a>
          , and{' '}
          <a target="_blank" href="https://www.linkedin.com/in/paulomg/">
            LinkedIn
          </a>
          . {"Let's"} embark on a digital journey together! 🚀
          <br />
          <br />
          <strong>Some of my qualifications:</strong>
          <br />
          <ul className="pl-5 list-disc">
            <li>15+ years of professional web applications development experience</li>
            <li>
              Strong knowledge of Javascript/Typescript, Next.js, React, Tailwind CSS, CSS (Sass),
              GreenSock, and Framer Motion
            </li>
            <li>
              Experience designing and optimizing large-scale modern web applications (i.e. state
              management, caching, performance optimizations, etc.)
            </li>
            <li>
              Experience in Accessibility (WAI-ARIA), Responsive design, Cross-browser development
              and troubleshooting
            </li>
            <li>Familiar with tooling such as Webpack, Vite, Yarn, and NPM</li>
            <li>
              Extensive use of APIs and a strong understanding of HTTP(S), REST and GraphQL
              architecture
            </li>

            <li>
              Good communication and personal skills: ability to interact and work well with members
              of other functional groups in a project team and a strong sense of project ownership
            </li>
          </ul>
          <br />
        </div>
      </div>
    </section>
  )
}
