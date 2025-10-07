import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Xeinst Media Agency | SMMA & Video Clipping Services',
  description: 'Transform your content into viral gold with professional video clipping and full-service social media marketing. We help content creators and businesses dominate TikTok, Instagram, YouTube, and more.',
  keywords: ['SMMA', 'social media marketing', 'video clipping', 'content creation', 'TikTok marketing', 'Instagram Reels', 'YouTube Shorts', 'viral content', 'video editing'],
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
    title: 'Xeinst Media Agency | SMMA & Video Clipping Services',
    description: 'Transform your content into viral gold with professional video clipping and full-service social media marketing. We help content creators and businesses dominate TikTok, Instagram, YouTube, and more.',
    url: 'https://xeinst.com',
    siteName: 'Xeinst Media Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Xeinst Media Agency - SMMA & Video Clipping',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xeinst Media Agency | SMMA & Video Clipping Services',
    description: 'Transform your content into viral gold with professional video clipping and full-service social media marketing. We help content creators and businesses dominate TikTok, Instagram, YouTube, and more.',
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
