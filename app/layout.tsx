import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Real Estate Social Media Marketing & Video Editing Agency | Xeinst Media',
  description: 'Professional video editing and social media management for real estate agents. We create viral TikTok, Instagram Reels & YouTube content that generates qualified buyer leads. 24-48hr turnaround.',
  keywords: ['video editing for real estate agents', 'real estate social media management', 'tiktok marketing for realtors', 'instagram reels for real estate', 'real estate video editing service', 'property video clipping', 'realtor social media agency', 'real estate lead generation', 'property tour videos', 'realtor marketing'],
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
    title: 'Xeinst Media Agency | Real Estate Social Media Marketing & Video Clipping',
    description: 'Transform your property listings into viral content. We help real estate agents dominate social media, generate quality leads, and close more deals through expert video clipping and SMMA services.',
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
    title: 'Xeinst Media Agency | Real Estate Social Media Marketing & Video Clipping',
    description: 'Transform your property listings into viral content. We help real estate agents dominate social media, generate quality leads, and close more deals through expert video clipping and SMMA services.',
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
