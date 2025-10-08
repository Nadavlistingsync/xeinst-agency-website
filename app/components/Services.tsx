'use client'

import { motion } from 'framer-motion'
import { Video, TrendingUp, Target, Film, BarChart, Megaphone, Users, Award } from 'lucide-react'
import { Container } from './ui/Container'
import { Heading } from './ui/Heading'
import { Section } from './ui/Section'
import { servicesContent } from '@/content/site'

const iconMap = {
  Video,
  TrendingUp,
  Target,
  Film,
  BarChart,
  Megaphone,
  Users,
  Award,
}

export function Services() {
  return (
    <Section id="services" className="services-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heading level={2} className="mb-6 text-black">
            {servicesContent.headline}
          </Heading>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-balance">
            {servicesContent.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesContent.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient border glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                {/* Icon with gradient background */}
                <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Hover arrow indicator */}
                <div className="flex items-center text-purple-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more 
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
