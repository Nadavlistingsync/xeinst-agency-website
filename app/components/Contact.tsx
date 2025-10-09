'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Container } from './ui/Container'
import { Heading } from './ui/Heading'
import { Section } from './ui/Section'
import { contactContent } from '@/content/site'

const iconMap = {
  Phone,
  Mail,
  MapPin,
}

export function Contact() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Section id="contact" className="contact-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heading level={2} className="mb-6 text-white drop-shadow-lg">
            {contactContent.headline}
          </Heading>
          <p className="text-lg text-white/90 max-w-3xl mx-auto text-balance drop-shadow-md">
            {contactContent.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Ready to dominate your real estate market? We'd love to hear from you. 
                Send us a message and we'll respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactContent.info.map((info, index) => {
                const IconComponent = iconMap[info.icon as keyof typeof iconMap]
                
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center group transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/20 transition-all duration-200 shadow-lg border border-white/20">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{info.label}</div>
                      <div className="text-white/70">{info.value}</div>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Cal.com Booking */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Schedule a Consultation</h3>
            <div 
              data-cal-link="nadavbenedekxeinst/social-media-stratagey-and-plan"
              data-cal-config='{"layout":"month_view"}'
              className="min-h-[600px]"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
