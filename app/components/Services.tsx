'use client'

import { motion } from 'framer-motion'
import { Video, TrendingUp, Target, Film, BarChart, Megaphone } from 'lucide-react'
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
                className="group p-8 rounded-lg border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-2xl bg-white"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mb-4 group-hover:bg-gray-800 transition-all duration-300 shadow-lg">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black group-hover:text-gray-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
