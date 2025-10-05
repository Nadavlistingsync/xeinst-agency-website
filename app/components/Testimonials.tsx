'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
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
            {testimonialsContent.headline}
          </Heading>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-balance">
            {testimonialsContent.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonialsContent.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gray-400" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-black fill-current" />
                ))}
              </div>

              <blockquote className="text-lg text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4 shadow-md">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-black font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
