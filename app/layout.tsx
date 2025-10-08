import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Real Estate Social Media Management Agency | Xeinst Media',
  description: 'Strategic social media management and content creation for real estate agents. We handle TikTok, Instagram, YouTube & Facebook to generate qualified buyer leads and build your personal brand.',
  keywords: ['real estate social media management', 'realtor social media agency', 'tiktok marketing for realtors', 'instagram management for real estate', 'social media agency for realtors', 'real estate content creation', 'realtor social media strategy', 'real estate lead generation', 'property social media marketing', 'realtor marketing'],
  authors: [{ name: 'Nadav Benedek' }],
  creator: 'Xeinst Media Agency',
  publisher: 'Xeinst Media Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://xeinst.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Xeinst Media Agency | Real Estate Social Media Management',
    description: 'Strategic social media management for real estate agents. We handle TikTok, Instagram, YouTube & Facebook to generate qualified buyer leads and build your personal brand.',
    url: 'https://xeinst.com',
    siteName: 'Xeinst Media Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Xeinst Media Agency - Real Estate Social Media Marketing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xeinst Media Agency | Real Estate Social Media Management',
    description: 'Strategic social media management for real estate agents. We handle TikTok, Instagram, YouTube & Facebook to generate qualified buyer leads and build your personal brand.',
    images: ['/og-image.jpg'],
    creator: '@xeinst',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable, 'scroll-smooth')}>
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
