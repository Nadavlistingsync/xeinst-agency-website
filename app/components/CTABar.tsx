'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { Container } from './ui/Container'
import { Button } from './ui/Button'

export function CTABar() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (800px)
      if (window.scrollY > 800 && !dismissed) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  const handleDismiss = () => {
    setDismissed(true)
    setShow(false)
  }

  const handleCTA = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-black shadow-2xl border-t border-white/10"
        >
          <Container>
            <div className="flex items-center justify-between py-4 gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold text-sm md:text-base">
                  Ready to dominate your real estate market? 🚀
                </p>
                <p className="text-white/80 text-xs md:text-sm hidden sm:block">
                  Get a free social media audit and custom strategy session
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleCTA}
                  className="bg-white text-black hover:bg-gray-100 shadow-lg font-semibold group"
                  size="sm"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <button
                  onClick={handleDismiss}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  aria-label="Dismiss"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

