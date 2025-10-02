'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Container } from './ui/Container'
import { Heading } from './ui/Heading'
import { Section } from './ui/Section'
import { faqContent } from '@/content/site'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section id="faq">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heading level={2} className="mb-6">
            {faqContent.headline}
          </Heading>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            {faqContent.description}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqContent.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-border last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 text-left flex items-center justify-between hover:text-primary transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pr-12">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
