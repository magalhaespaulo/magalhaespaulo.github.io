'use client'

import { SnippetsList } from '@/components/SnippetsList'
import { AnimateHeader } from '@/components/AnimateHeader'

type SnippetsProps = {
  data: {
    slug: string
    frontMatter: {
      [key: string]: any
    }
  }[]
}

export const Snippets = ({ data }: SnippetsProps) => {
  return (
    <section id="snippets" className="relative min-h-screen overflow-hidden">
      <AnimateHeader>Snippets</AnimateHeader>

      <div className="-mt-12 z-10 relative wrapper-content flex flex-col gap-10">
        <SnippetsList data={data} />
      </div>
    </section>
  )
}

export const getTags = (posts: any, property: 'categories' | 'technologies') => {
  return [
    'All',
    ...posts
      .reduce((acc: string[], post: any) => {
        return post.frontMatter[property].every((item: string) => acc.includes(item))
          ? acc
          : [...acc, ...post.frontMatter[property]]
      }, [])
      .filter((item: any, index: any, self: string | any[]) => self.indexOf(item) === index)
      .sort((a: string, b: string) => a.localeCompare(b)),
  ]
}
