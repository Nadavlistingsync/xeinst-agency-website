import type { Metadata } from 'next'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { Section } from '../components/ui/Section'
import { Contact } from '../components/Contact'
import { TrendingUp, Users, DollarSign, Video, Instagram, Play } from 'lucide-react'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Real Estate Social Media Case Studies | Success Stories | Xeinst Media',
  description: 'See how real estate agents generated millions of views, thousands of followers, and qualified buyer leads with our video editing and social media management services. Real results from TikTok, Instagram Reels & YouTube.',
  keywords: [
    'real estate social media case studies',
    'realtor tiktok success stories',
    'real estate video marketing results',
    'instagram reels real estate success',
    'real estate lead generation case studies',
  ],
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    title: 'Real Estate Social Media Case Studies | Xeinst Media',
    description: 'See how real estate agents generated millions of views and qualified leads with our services.',
    url: '/case-studies',
    type: 'website',
  },
}

export default function CaseStudiesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://xeinst.com' },
    { name: 'Case Studies', url: 'https://xeinst.com/case-studies' },
  ])

  const caseStudies = [
    {
      agent: 'Sarah Chen',
      title: 'From 2K to 50K Followers in 90 Days',
      location: 'Los Angeles, CA',
      niche: 'Luxury Real Estate',
      challenge: 'Sarah was struggling to get traction on TikTok despite posting consistently. Her property tours were getting 200-500 views and minimal engagement.',
      solution: 'We completely overhauled her content strategy, focusing on high-end property showcases with viral hooks, trending audio, and strategic CTAs. Implemented 2x daily posting schedule with mix of property tours and educational content.',
      results: {
        followers: '+48,000 followers in 90 days',
        views: '5.2M total video views',
        engagement: '8.3% average engagement rate',
        leads: '127 qualified buyer inquiries',
        deals: '4 closings directly from TikTok ($3.2M total volume)',
      },
      testimonial: 'Xeinst Media transformed my TikTok presence completely. I went from barely getting any views to having multiple videos go viral. The best part? I\'m now getting 3-5 qualified buyer leads per week directly from my content. Worth every penny.',
      metrics: [
        { label: 'Follower Growth', value: '2,400%', icon: Users },
        { label: 'Total Views', value: '5.2M', icon: TrendingUp },
        { label: 'Qualified Leads', value: '127', icon: DollarSign },
        { label: 'Videos Created', value: '180', icon: Video },
      ],
    },
    {
      agent: 'Mike Rodriguez',
      title: 'Generated $500K in Commissions from Instagram Reels',
      location: 'Miami, FL',
      niche: 'Waterfront Properties',
      challenge: 'Mike had a decent Instagram following (8K) but wasn\'t monetizing it. His reels were getting good views but no leads or inquiries.',
      solution: 'We repositioned his content to focus on Miami waterfront properties with strategic CTAs and lead magnets. Created a consistent posting schedule with mix of property showcases, neighborhood tours, and market updates. Implemented Instagram Stories strategy for daily engagement.',
      results: {
        followers: '+12,000 new followers (8K to 20K)',
        views: '3.8M Reels views in 6 months',
        engagement: '6.9% average engagement rate',
        leads: '89 qualified inquiries',
        deals: '6 closings ($500K in commissions)',
      },
      testimonial: 'The ROI is insane. For less than $600/month, I generated over $500K in commissions from Instagram alone. The team understands real estate and knows exactly what content converts viewers into buyers.',
      metrics: [
        { label: 'Revenue Generated', value: '$500K', icon: DollarSign },
        { label: 'New Followers', value: '+12K', icon: Users },
        { label: 'Reels Views', value: '3.8M', icon: Instagram },
        { label: 'Deals Closed', value: '6', icon: TrendingUp },
      ],
    },
    {
      agent: 'Jennifer Park',
      title: 'Built Personal Brand & Dominated Local Market',
      location: 'Austin, TX',
      niche: 'First-Time Homebuyers',
      challenge: 'Jennifer was new to real estate and struggling to stand out in the competitive Austin market. She had no social media presence and was relying solely on referrals.',
      solution: 'We built her TikTok and Instagram from scratch with a focus on first-time homebuyer education. Created engaging, helpful content that positioned her as the go-to expert for young professionals buying their first home. Consistent 5x/week posting schedule across both platforms.',
      results: {
        followers: '0 to 35K followers across platforms',
        views: '8.7M total views in 12 months',
        engagement: '7.8% average engagement rate',
        leads: '200+ qualified buyer leads',
        deals: 'Closed 18 transactions in 12 months',
      },
      testimonial: 'I went from being completely unknown to being recognized in coffee shops. Social media has become my #1 lead source. Xeinst Media made it easy - I just send them footage and they handle everything else.',
      metrics: [
        { label: 'Brand Built', value: '35K', icon: Users },
        { label: 'Total Views', value: '8.7M', icon: Play },
        { label: 'Leads Generated', value: '200+', icon: TrendingUp },
        { label: 'Deals Closed', value: '18', icon: DollarSign },
      ],
    },
  ]

  const stats = [
    { value: '15M+', label: 'Total Views Generated' },
    { value: '100K+', label: 'Followers Grown' },
    { value: '500+', label: 'Qualified Leads' },
    { value: '$5M+', label: 'Revenue Generated' },
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
                Real Estate Social Media Success Stories
              </Heading>
              <p className="text-xl text-gray-700 mb-12">
                See how real estate agents are using our video editing and social media management 
                services to build massive followings, generate qualified leads, and close more deals.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-black mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Case Studies */}
        {caseStudies.map((study, index) => (
          <Section
            key={index}
            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          >
            <Container>
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="text-sm text-gray-500 mb-2">{study.location} • {study.niche}</div>
                  <Heading level={2} className="mb-4">
                    {study.title}
                  </Heading>
                  <div className="text-lg text-gray-600">{study.agent}</div>
                </div>

                {/* Metrics Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  {study.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                      <metric.icon className="w-8 h-8 mx-auto mb-3 text-black" />
                      <div className="text-3xl font-bold text-black mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Story */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                    <p className="text-gray-700 mb-6">{study.challenge}</p>

                    <h3 className="text-xl font-bold mb-4">Our Solution</h3>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">The Results</h3>
                    <ul className="space-y-3 mb-6">
                      {Object.entries(study.results).map(([key, value], rIndex) => (
                        <li key={rIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{value}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-gray-50 border-l-4 border-black p-6 rounded">
                      <p className="text-gray-700 italic">"{study.testimonial}"</p>
                      <p className="text-sm text-gray-600 mt-4 font-semibold">- {study.agent}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        ))}

        {/* Common Themes */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Heading level={2} className="text-center mb-12">
                What All Success Stories Have in Common
              </Heading>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Consistency is Key</h3>
                  <p className="text-gray-700">
                    Every successful agent posts 4-7 times per week. Consistency builds momentum, 
                    trains the algorithm, and keeps your audience engaged. We handle the heavy lifting 
                    so you can maintain consistency effortlessly.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Quality Over Quantity</h3>
                  <p className="text-gray-700">
                    Professional editing makes a massive difference. Well-edited videos with strong hooks, 
                    captions, and CTAs convert 5-10X better than raw footage. Our editors know exactly 
                    what works for real estate content.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Strategic Content Mix</h3>
                  <p className="text-gray-700">
                    The 80/20 rule: 80% valuable content (property tours, market updates, education), 
                    20% promotional. We create the perfect mix that builds trust while generating leads.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Clear Calls-to-Action</h3>
                  <p className="text-gray-700">
                    Every video needs to tell viewers exactly what to do next. Whether it's "DM me to tour," 
                    "Link in bio for more listings," or "Follow for daily property tours," clear CTAs convert.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Results Timeline */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Heading level={2} className="text-center mb-12">
                What to Expect: Typical Results Timeline
              </Heading>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="text-2xl font-bold text-black">Week 1-2</div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-2">Setup & Strategy</h3>
                    <p className="text-gray-700">
                      Onboarding, strategy session, content calendar planning, and first batch of videos created. 
                      Initial follower growth as content goes live.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="text-2xl font-bold text-black">Month 1</div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-2">Building Momentum</h3>
                    <p className="text-gray-700">
                      Consistent posting builds algorithm favor. First viral video typically happens. 
                      200-500 new followers. 5-10 qualified leads start coming in.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="text-2xl font-bold text-black">Month 2-3</div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-2">Acceleration Phase</h3>
                    <p className="text-gray-700">
                      Multiple viral videos. 1,000-3,000 new followers per month. 15-30 qualified leads monthly. 
                      First deals close from social media. ROI becomes clear.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="text-2xl font-bold text-black">Month 4-6</div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-2">Authority & Scale</h3>
                    <p className="text-gray-700">
                      Established as local market authority. 5,000-15,000 total followers. 30-50 qualified leads 
                      monthly. Social media becomes primary lead source. Multiple closings per month.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="text-2xl font-bold text-black">Month 6+</div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-2">Market Domination</h3>
                    <p className="text-gray-700">
                      15,000-50,000+ followers. Recognized in local market. 50-100+ leads monthly. 
                      Social media is #1 lead source. $100K+ in commissions directly attributed to social media.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section className="bg-black text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heading level={2} className="mb-6 text-white">
                Ready to Become Our Next Success Story?
              </Heading>
              <p className="text-xl text-gray-300 mb-8">
                Get started with a free strategy session. We'll analyze your current social media presence, 
                identify opportunities, and show you exactly how we can help you generate more leads.
              </p>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Get Your Free Strategy Session
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>
          </Container>
        </Section>

        <Contact />
      </main>
    </>
  )
}

