'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Heading } from './ui/Heading'
import { heroContent } from '@/content/site'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-section pt-20 overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-10 w-72 h-72 bg-white/10 rounded-full filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 -right-10 w-72 h-72 bg-white/10 rounded-full filter blur-xl opacity-50 animate-blob animation-delay-2000" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-white/10 rounded-full filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{ animationDelay: '4s' }}></div>
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Heading level={1} className="mb-6 text-balance text-white drop-shadow-lg">
              {heroContent.headline}
            </Heading>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 text-balance drop-shadow-md">
              {heroContent.subheading}
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto text-balance drop-shadow-md">
              {heroContent.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="xl"
              className="group bg-white text-black hover:bg-gray-100 border-2 border-white shadow-2xl font-semibold"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {heroContent.primaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              className="group bg-transparent text-white border-2 border-white hover:bg-white hover:text-black shadow-2xl font-semibold"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Play className="mr-2 h-4 w-4" />
              {heroContent.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
