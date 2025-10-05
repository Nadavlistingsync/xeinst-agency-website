'use client'

import { motion } from 'framer-motion'
import { Container } from './ui/Container'
import { Heading } from './ui/Heading'
import { Section } from './ui/Section'
import { aboutContent } from '@/content/site'

export function About() {
  return (
    <Section id="about" className="about-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heading level={2} className="mb-6 text-black">
            {aboutContent.headline}
          </Heading>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-balance">
            {aboutContent.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {aboutContent.process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-2xl font-bold mb-4 shadow-lg">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
