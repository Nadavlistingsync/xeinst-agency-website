'use client'

import { ArrowRight } from 'lucide-react'

interface PricingButtonProps {
  className?: string
  children: React.ReactNode
}

export function PricingButton({ className, children }: PricingButtonProps) {
  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </button>
  )
}
