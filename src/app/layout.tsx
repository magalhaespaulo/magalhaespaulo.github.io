import '@/styles/globals.css'
import type { Metadata } from 'next'

import localFont from 'next/font/local'

const sans = localFont({
  variable: '--font-sans',
  src: [
    {
      path: '../fonts/haboro-sans-400.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/haboro-sans-500.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/haboro-sans-700.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const display = localFont({
  variable: '--font-display',
  src: [
    {
      path: '../fonts/new-spirit-400.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})

import { Providers } from '@/components/Providers'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Paulo Magalhães · Front-end developer',
  description:
    'Multidisciplinary Front-end developer based in Brazil with over 15 years of experience, focused on making an impact by building unique experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} min-h-screen`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
