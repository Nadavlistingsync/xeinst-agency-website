'use client'

import { TrendingUp } from 'lucide-react'

interface CaseStudyButtonProps {
  className?: string
  children: React.ReactNode
}

export function CaseStudyButton({ className, children }: CaseStudyButtonProps) {
  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
      <TrendingUp className="w-5 h-5" />
    </button>
  )
}
