'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Heading } from './ui/Heading'

interface ServiceHeroProps {
  h1: string
  subtitle: string
  description: string
  stats?: Array<{ value: string; label: string }>
}

export function ServiceHero({ h1, subtitle, description, stats }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Heading level={1} className="mb-6 text-balance">
            {h1}
          </Heading>
          <p className="text-2xl text-gray-700 mb-6 text-balance">
            {subtitle}
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-balance">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="xl"
              className="group bg-black text-white hover:bg-gray-800 border-2 border-black shadow-xl"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              className="group bg-transparent text-black border-2 border-black hover:bg-black hover:text-white shadow-xl"
              onClick={() => {
                const pricing = document.getElementById('pricing')
                if (pricing) {
                  pricing.scrollIntoView({ behavior: 'smooth' })
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              View Pricing
            </Button>
          </div>

          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}

