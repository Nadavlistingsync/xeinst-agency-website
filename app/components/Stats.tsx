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
    <section className="py-20 bg-white relative overflow-hidden">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Real Results for Real Estate Agents
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
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
              className="text-center group p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-black group-hover:scale-110 transition-all duration-300 shadow-lg">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-black font-semibold text-sm md:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-gray-600 text-xs md:text-sm px-2">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

