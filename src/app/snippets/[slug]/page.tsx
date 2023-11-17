import { Content } from '@/components/Content'
import { ScrollToTop } from '@/components/ScrollToTop'
import { getAllPosts, getPostBySlug } from '@/lib/content'

export default async function Snippets({ params: { slug } }: { params: { slug: string } }) {
  const { source, frontMatter } = await getPostBySlug(slug)
  const { title } = frontMatter

  return (
    <main className="wrapper-content py-36">
      <h1 className="mb-10 text-3xl md:text-5xl font-display font-bold">{title}</h1>
      <ScrollToTop />
      <Content source={source} />
    </main>
  )
}

export async function generateStaticParams() {
  const data = await getAllPosts()

  return data.map((snippet) => ({
    slug: snippet.slug,
  }))
}
