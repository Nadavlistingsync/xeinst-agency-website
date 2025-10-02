'use client'

import { motion } from 'framer-motion'
import { Code, Users, Database, Smartphone, Cloud, Headphones } from 'lucide-react'
import { Container } from './ui/Container'
import { Heading } from './ui/Heading'
import { Section } from './ui/Section'
import { servicesContent } from '@/content/site'

const iconMap = {
  Code,
  Users,
  Database,
  Smartphone,
  Cloud,
  Headphones,
}

export function Services() {
  return (
    <Section id="services" className="services-gradient">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heading level={2} className="mb-6 text-white drop-shadow-lg">
            {servicesContent.headline}
          </Heading>
          <p className="text-lg text-white/90 max-w-3xl mx-auto text-balance drop-shadow">
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
                className="group p-8 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl bg-white/10 backdrop-blur-sm"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-lg mb-4 group-hover:from-yellow-300 group-hover:to-orange-400 transition-all duration-300 shadow-lg">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-yellow-200 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
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
