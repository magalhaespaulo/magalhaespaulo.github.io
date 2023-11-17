import { Hero } from '@/components/sections/Hero'
import { Work } from '@/components/sections/Work'
import { Snippets } from '@/components/sections/Snippets'
import { About } from '@/components/sections/About'

import { getAllPosts } from '@/lib/content'

export default async function Home() {
  const data = await getAllPosts()

  return (
    <>
      <Hero />
      <Work />
      <Snippets data={data} />
      <About />
    </>
  )
}
