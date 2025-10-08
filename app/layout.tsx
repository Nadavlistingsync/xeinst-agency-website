import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CTABar } from './components/CTABar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Real Estate Video Clipping & Social Media Agency | Xeinst Media',
  description: 'Strategic video clipping campaigns and social media management for real estate agents. We help you grow your personal brand and generate qualified buyer leads through TikTok, Instagram & YouTube.',
  keywords: ['real estate video clipping', 'realtor social media agency', 'tiktok marketing for realtors', 'instagram management for real estate', 'social media agency for realtors', 'real estate video campaigns', 'realtor personal brand', 'real estate lead generation', 'property video marketing', 'realtor marketing'],
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
    title: 'Xeinst Media Agency | Real Estate Video Clipping & Social Media',
    description: 'Strategic video clipping campaigns and social media management for real estate agents. We help you grow your personal brand and generate qualified buyer leads through TikTok, Instagram & YouTube.',
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
    title: 'Xeinst Media Agency | Real Estate Video Clipping & Social Media',
    description: 'Strategic video clipping campaigns and social media management for real estate agents. We help you grow your personal brand and generate qualified buyer leads through TikTok, Instagram & YouTube.',
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
        <CTABar />
      </body>
    </html>
  )
}
