'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Section } from './ui/Section'

interface ServiceCTAProps {
  headline: string
  description: string
  buttonText: string
}

export function ServiceCTA({ headline, description, buttonText }: ServiceCTAProps) {
  return (
    <Section className="bg-black text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{headline}</h2>
          <p className="text-xl text-gray-300 mb-8">{description}</p>
          <Button
            size="xl"
            className="group bg-white text-black hover:bg-gray-100 border-2 border-white"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </Container>
    </Section>
  )
}

