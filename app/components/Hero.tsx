'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Heading } from './ui/Heading'
import { heroContent } from '@/content/site'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
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
            <Heading level={1} className="mb-6 text-balance">
              {heroContent.headline}
            </Heading>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance">
              {heroContent.subheading}
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
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
              className="group"
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
              className="group"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Play className="mr-2 h-4 w-4" />
              {heroContent.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
