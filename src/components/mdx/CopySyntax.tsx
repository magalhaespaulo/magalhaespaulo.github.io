'use client'

import { useState } from 'react'
import { HiOutlineCheck, HiOutlineDocumentDuplicate } from 'react-icons/hi2'

export const CopySyntax = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    const textWithoutDolar = text.replace(/^\$ /gm, '').trim()
    await navigator.clipboard.writeText(textWithoutDolar)
    setIsCopied(true)

    const timeout = setTimeout(() => {
      setIsCopied(false)
      clearTimeout(timeout)
    }, 1500)
  }

  return (
    <button
      onClick={copy}
      className={`
        flex items-center justify-center
        w-8 h-8 rounded border
        ${
          isCopied
            ? 'text-green/60 hover:text-green/100 border-green/10 hover:border-green/30'
            : 'text-white/60 hover:text-white/100 border-white/10 hover:border-white/30'
        }
      `}
      aria-label="Copy code"
    >
      {isCopied ? (
        <HiOutlineCheck className="text-xl" />
      ) : (
        <HiOutlineDocumentDuplicate className="text-xl" />
      )}
    </button>
  )
}
