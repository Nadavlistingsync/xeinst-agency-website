import type { Metadata } from 'next'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { Section } from '../components/ui/Section'
import { Contact } from '../components/Contact'
import { Check, ArrowRight } from 'lucide-react'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Real Estate Video Editing Pricing | Packages for Realtors | Xeinst Media',
  description: 'Transparent pricing for real estate video editing and social media management. Packages starting at $297/month. Fast 24-48hr turnaround, unlimited revisions, TikTok, Instagram Reels & YouTube optimization.',
  keywords: [
    'real estate video editing pricing',
    'real estate video editing cost',
    'realtor video editing packages',
    'social media management pricing for realtors',
    'real estate content creation pricing',
    'property video editing rates',
  ],
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Real Estate Video Editing Pricing | Xeinst Media',
    description: 'Transparent pricing for real estate video editing and social media management. Packages starting at $297/month.',
    url: '/pricing',
    type: 'website',
  },
}

export default function PricingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://xeinst.com' },
    { name: 'Pricing', url: 'https://xeinst.com/pricing' },
  ])

  const videoEditingPackages = [
    {
      name: 'Starter',
      price: '$297',
      period: '/month',
      description: 'Perfect for newer agents or those with 3-5 listings per month',
      features: [
        '15 edited clips per month',
        '24-48 hour turnaround',
        'TikTok, Reels, YouTube Shorts format',
        'Captions and music included',
        'Unlimited revisions',
        'Basic graphics and text overlays',
        'Email support',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Growth',
      price: '$597',
      period: '/month',
      description: 'Ideal for active agents managing 6-12 listings monthly',
      features: [
        '30 edited clips per month',
        '24-48 hour turnaround',
        'All platforms optimized',
        'Captions and premium music',
        'Unlimited revisions',
        'Advanced graphics and animations',
        'Branded templates',
        'Priority support',
        'Monthly strategy call',
      ],
      popular: true,
      cta: 'Get Started',
    },
    {
      name: 'Premium',
      price: '$997',
      period: '/month',
      description: 'For top producers and teams managing 15+ listings',
      features: [
        '60+ edited clips per month',
        '12-24 hour turnaround',
        'All platforms optimized',
        'Premium music and sound effects',
        'Unlimited revisions',
        'Custom animations and graphics',
        'Dedicated account manager',
        'Same-day rush available',
        'Weekly strategy calls',
        'Priority 24/7 support',
      ],
      cta: 'Get Started',
    },
  ]

  const socialMediaPackages = [
    {
      name: 'Essential',
      price: '$997',
      period: '/month',
      description: 'Perfect for agents building their social presence',
      features: [
        '20 posts per month across all platforms',
        'TikTok + Instagram focus',
        'Basic community management',
        'Monthly analytics report',
        'Content calendar planning',
        'Hashtag research',
        'Email support',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Growth',
      price: '$1,997',
      period: '/month',
      description: 'For agents serious about social media lead generation',
      features: [
        '40 posts per month across all platforms',
        'TikTok + Instagram + YouTube + Facebook',
        'Full community management',
        'Weekly analytics & optimization',
        'Advanced content strategy',
        'Stories & daily engagement',
        'Dedicated account manager',
        'Quarterly strategy calls',
      ],
      popular: true,
      cta: 'Get Started',
    },
    {
      name: 'Elite',
      price: '$3,997',
      period: '/month',
      description: 'For top producers and teams',
      features: [
        'Unlimited posts across all platforms',
        'All platforms fully managed',
        'Premium community management',
        'Real-time analytics dashboard',
        'Advanced growth strategies',
        'Paid ad campaign management',
        'Personal brand development',
        'Weekly strategy calls',
        'Priority support',
      ],
      cta: 'Get Started',
    },
  ]

  const addOns = [
    {
      name: 'Same-Day Rush Editing',
      price: '$150',
      period: 'per video',
      description: 'Get your video edited within 6-8 hours for hot listings',
    },
    {
      name: 'Professional Filming',
      price: '$300',
      period: 'per property',
      description: 'On-site professional filming with 4K camera and gimbal stabilization',
    },
    {
      name: 'Drone Footage',
      price: '$400',
      period: 'per property',
      description: 'Aerial drone shots to showcase property and neighborhood',
    },
    {
      name: 'Ad Campaign Management',
      price: '$500',
      period: '/month',
      description: 'Facebook and Instagram ad campaigns (+ ad spend)',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <Section className="bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <Heading level={1} className="mb-6">
                Real Estate Video Editing & Social Media Pricing
              </Heading>
              <p className="text-xl text-gray-700 mb-8">
                Transparent, flexible pricing designed for real estate agents. No hidden fees, no long-term contracts. 
                Cancel anytime with 30 days notice.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-black">24-48hr</div>
                  <div className="text-sm text-gray-600">Turnaround Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black">Unlimited</div>
                  <div className="text-sm text-gray-600">Revisions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black">500K+</div>
                  <div className="text-sm text-gray-600">Views Generated</div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Video Editing Packages */}
        <Section className="bg-white">
          <Container>
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">
                Video Editing Packages
              </Heading>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional video editing for TikTok, Instagram Reels, and YouTube Shorts. 
                All packages include unlimited revisions and platform-specific optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {videoEditingPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative p-8 border-2 rounded-xl ${
                    pkg.popular
                      ? 'border-black shadow-2xl scale-105 bg-gray-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-5xl font-bold mb-2">
                      {pkg.price}
                      <span className="text-lg text-gray-600 font-normal">{pkg.period}</span>
                    </div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-100 text-black hover:bg-gray-200'
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Social Media Management Packages */}
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">
                Social Media Management Packages
              </Heading>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Full-service social media management for real estate agents. We handle content creation, 
                posting, engagement, and lead generation across all platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {socialMediaPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative p-8 border-2 rounded-xl ${
                    pkg.popular
                      ? 'border-black shadow-2xl scale-105 bg-white'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-5xl font-bold mb-2">
                      {pkg.price}
                      <span className="text-lg text-gray-600 font-normal">{pkg.period}</span>
                    </div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-100 text-black hover:bg-gray-200'
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Add-Ons */}
        <Section className="bg-white">
          <Container>
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">
                Add-On Services
              </Heading>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enhance your package with these premium add-ons
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-2">{addon.name}</h3>
                  <div className="text-3xl font-bold text-black mb-2">
                    {addon.price}
                    <span className="text-sm text-gray-600 font-normal">{addon.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-3xl mx-auto">
              <Heading level={2} className="text-center mb-12">
                Pricing FAQs
              </Heading>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-3">Are there any setup fees?</h3>
                  <p className="text-gray-700">
                    No setup fees. Your first month's payment covers everything you need to get started, 
                    including branded templates and initial strategy session.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-3">Can I cancel anytime?</h3>
                  <p className="text-gray-700">
                    Yes. We require 30 days notice for cancellation. No long-term contracts or commitments. 
                    Most clients stay because they see results.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-3">What if I need more clips than my package includes?</h3>
                  <p className="text-gray-700">
                    You can purchase additional clips at $25/clip or upgrade to a higher package. 
                    We'll always notify you before you exceed your monthly allotment.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-3">Do you offer custom packages for teams?</h3>
                  <p className="text-gray-700">
                    Absolutely! We work with real estate teams and brokerages to create custom packages. 
                    Contact us to discuss volume pricing and team solutions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-3">What's your refund policy?</h3>
                  <p className="text-gray-700">
                    If you're not satisfied with our work in the first 30 days, we'll refund your first month's payment. 
                    Your success is our priority.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="bg-black text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heading level={2} className="mb-6 text-white">
                Ready to Transform Your Real Estate Marketing?
              </Heading>
              <p className="text-xl text-gray-300 mb-8">
                Get started today with a free strategy session. We'll analyze your current social media presence 
                and show you exactly how we can generate more leads for your business.
              </p>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Get Your Free Strategy Session
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </Container>
        </Section>

        <Contact />
      </main>
    </>
  )
}

