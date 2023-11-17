'use client'

import { useContext, useState, createContext, Dispatch, SetStateAction, ReactNode } from 'react'

type Case = {
  caseIndex: number
  setCaseIndex: Dispatch<SetStateAction<number>>
}

export const CaseContext = createContext<Case | null>(null)

export const CaseProvider = ({ children }: { children: ReactNode }) => {
  const [caseIndex, setCaseIndex] = useState<number>(-1)

  return <CaseContext.Provider value={{ caseIndex, setCaseIndex }}>{children}</CaseContext.Provider>
}

export const useCaseContext = (): Case => {
  const output = useContext(CaseContext)

  if (output === null) {
    throw new Error('Case Context missing provider')
  }

  return output
}
