'use client'

import { motion } from 'framer-motion'
import { Eye, Users, Clock } from 'lucide-react'
import { Container } from './ui/Container'

const stats = [
  { 
    value: '6M+', 
    label: 'Views Generated', 
    icon: Eye,
    description: 'Total social media views for our clients'
  },
  { 
    value: '50+', 
    label: 'Agents Served', 
    icon: Users,
    description: 'Real estate professionals we\'ve helped'
  },
  { 
    value: '24-48h', 
    label: 'Turnaround Time', 
    icon: Clock,
    description: 'Average delivery time for content'
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real Results for Real Estate Agents
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We don't just create content—we deliver measurable results that grow your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-white/90 font-semibold text-sm md:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-white/60 text-xs md:text-sm px-2">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

