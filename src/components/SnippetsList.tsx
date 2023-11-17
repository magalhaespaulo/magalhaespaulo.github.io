'use client'

import Link from 'next/link'

export const SnippetsList = ({
  data,
}: {
  data: {
    slug: string
    frontMatter: {
      [key: string]: any
    }
  }[]
}) => {
  return (
    <ul className="flex flex-col items-start gap-2">
      {data
        .sort((a, b) => new Date(b.frontMatter.publishedAt).getTime() - new Date(a.frontMatter.publishedAt).getTime())
        .map(({ slug, frontMatter: { title } }) => (
          <li key={slug}>
            <Link href={`/snippets/${slug}`}>{title}</Link>
          </li>
        ))}
    </ul>
  )
}
