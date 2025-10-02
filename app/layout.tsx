import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Xeinst Custom Software Agency | Solving Your Biggest Problems',
  description: 'We take people\'s biggest problems and make software to fix them. Specializing in custom software solutions for real estate agents and construction companies.',
  keywords: ['custom software', 'real estate software', 'construction software', 'business automation', 'problem solving'],
  authors: [{ name: 'Nadav Benedek' }],
  creator: 'Xeinst Custom Software Agency',
  publisher: 'Xeinst Custom Software Agency',
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
    title: 'Xeinst Custom Software Agency | Solving Your Biggest Problems',
    description: 'We take people\'s biggest problems and make software to fix them. Specializing in custom software solutions for real estate agents and construction companies.',
    url: 'https://xeinst.com',
    siteName: 'Xeinst Custom Software Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Xeinst Custom Software Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xeinst Custom Software Agency | Solving Your Biggest Problems',
    description: 'We take people\'s biggest problems and make software to fix them. Specializing in custom software solutions for real estate agents and construction companies.',
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
        {children}
      </body>
    </html>
  )
}
