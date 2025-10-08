'use client'

import { Container } from './ui/Container'
import { Heading } from './ui/Heading'
import { Section } from './ui/Section'
import { CheckCircle } from 'lucide-react'

interface ServiceSectionProps {
  title: string
  items?: Array<{
    title: string
    description: string
  }>
  features?: string[]
  steps?: Array<{
    step: string
    title: string
    description: string
  }>
  benefits?: Array<{
    title: string
    description: string
  }>
  content?: Array<{
    category: string
    examples: string[]
  }>
}

export function ServiceSection({ 
  title, 
  items, 
  features, 
  steps, 
  benefits,
  content 
}: ServiceSectionProps) {
  return (
    <Section className="bg-white">
      <Container>
        <Heading level={2} className="text-center mb-16">
          {title}
        </Heading>

        {items && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {features && (
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {steps && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-gray-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        )}

        {benefits && (
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        )}

        {content && (
          <div className="grid md:grid-cols-2 gap-8">
            {content.map((item, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{item.category}</h3>
                <ul className="space-y-2">
                  {item.examples.map((example, exIndex) => (
                    <li key={exIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}

