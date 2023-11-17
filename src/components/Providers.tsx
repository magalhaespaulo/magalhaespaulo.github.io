'use client'

import { CaseProvider } from '@/context/case'

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <CaseProvider>{children}</CaseProvider>
)
