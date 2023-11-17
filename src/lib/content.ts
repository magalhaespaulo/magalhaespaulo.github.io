import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import rehypePrettyCode from 'rehype-pretty-code'
import { visit } from 'unist-util-visit'
import { serialize } from 'next-mdx-remote/serialize'

const postsDirectory = join(process.cwd(), 'content')

export const getPostBySlug = async (fileName: string) => {
  const slug = fileName.replace(/\.mdx$/, '')
  const postFilePath = join(postsDirectory, `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [
        () => (tree) => {
          visit(tree, (node) => {
            if (node?.type === 'element' && node?.tagName === 'pre') {
              const [codeEl] = node.children
              if (codeEl.tagName !== 'code') return
              node.raw = codeEl.children?.[0].value
            }
          })
        },
        [rehypePrettyCode as any, { theme: { dark: 'dracula' } }],
        () => (tree) => {
          visit(tree, (node) => {
            if (node?.type === 'element' && node?.tagName === 'div') {
              if (!('data-rehype-pretty-code-fragment' in node.properties)) {
                return
              }

              for (const child of node.children) {
                if (child.tagName === 'pre') {
                  child.properties['raw'] = node.raw
                }
              }
            }
          })
        },
      ],
      format: 'mdx',
    },
    parseFrontmatter: true,
  })

  return {
    slug: slug,
    frontMatter: data,
    source: mdxSource,
  }
}

export const getAllPosts = async () => {
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const { slug, frontMatter } = await getPostBySlug(fileName)

      return {
        slug: slug,
        frontMatter: frontMatter,
      }
    }),
  )

  return posts
}
