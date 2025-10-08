'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Container } from './ui/Container'
import { siteConfig, navigation } from '@/content/site'

export function Footer() {
  const router = useRouter()
  
  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Handle page links
      router.push(href)
    }
  }

  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <Container>
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4">{siteConfig.name}</h3>
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                {siteConfig.description}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-3" />
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-black transition-colors duration-200"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-3" />
                  <a 
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-black transition-colors duration-200"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>New York, NY</span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="text-gray-600 hover:text-black transition-colors duration-200 text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleNavigation('#services')}
                    className="text-gray-600 hover:text-black transition-colors duration-200 text-left"
                  >
                    Video Clipping
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('#services')}
                    className="text-gray-600 hover:text-black transition-colors duration-200 text-left"
                  >
                    Social Media Management
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('#services')}
                    className="text-gray-600 hover:text-black transition-colors duration-200 text-left"
                  >
                    Content Strategy
                  </button>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-200 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-6">
                {siteConfig.links.instagram && (
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    Instagram
                  </a>
                )}
                {siteConfig.links.tiktok && (
                  <a
                    href={siteConfig.links.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    TikTok
                  </a>
                )}
                {siteConfig.links.linkedin && (
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                )}
                {siteConfig.links.twitter && (
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  )
}
