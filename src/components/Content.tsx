'use client'

import { Pre } from '@/components/mdx/Pre'
import { Step } from '@/components/mdx/Step'
import { MDXRemote } from 'next-mdx-remote'
import { DynamicReferencesExample } from '@/components/mdx/examples/DynamicReferencesExample'

const components = {
  pre: Pre,
  Step,
  DynamicReferencesExample,
}

export const Content = ({ source }: { source: any }) => {
  return (
    <div className="markdown prose lg:prose-xl">
      <MDXRemote {...source} components={components} />
    </div>
  )
}
