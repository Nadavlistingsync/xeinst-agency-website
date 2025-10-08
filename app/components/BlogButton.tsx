'use client'

import { ArrowRight } from 'lucide-react'

interface BlogButtonProps {
  className?: string
  children: React.ReactNode
}

export function BlogButton({ className, children }: BlogButtonProps) {
  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  )
}
