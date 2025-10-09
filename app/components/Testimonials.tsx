'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Container } from './ui/Container'
import { Heading } from './ui/Heading'
import { Section } from './ui/Section'
import { testimonialsContent } from '@/content/site'

export function Testimonials() {
  return (
    <Section id="testimonials" className="testimonials-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heading level={2} className="mb-6 text-black">
            Client Success Stories
          </Heading>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-balance">
            We're currently gathering testimonials from our amazing clients. Check back soon!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-12 bg-white rounded-2xl border border-gray-200 text-center shadow-lg">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-2xl mb-6 shadow-lg">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4 text-black">
              Coming Soon
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We're working with incredible real estate agents who are seeing amazing results. Their testimonials will be featured here soon!
            </p>
            
            <div className="inline-flex items-center text-gray-600 font-semibold">
              <span className="animate-pulse mr-2">●</span>
              Collecting success stories now
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us - keeping the features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-black text-center mb-12">
            Why Real Estate Agents Choose Xeinst Media
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testimonialsContent.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-black transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
