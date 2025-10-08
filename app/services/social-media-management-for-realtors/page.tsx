import type { Metadata } from 'next'
import { ServiceHero } from '@/app/components/ServiceHero'
import { ServiceSection } from '@/app/components/ServiceSection'
import { ServiceFAQ } from '@/app/components/ServiceFAQ'
import { ServiceCTA } from '@/app/components/ServiceCTA'
import { Contact } from '@/app/components/Contact'
import { servicePages } from '@/content/services'
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { ServiceButton } from '@/app/components/ServiceButton'

const service = servicePages.socialMediaManagement

export const metadata: Metadata = {
  title: service.title,
  description: service.metaDescription,
  keywords: [
    'real estate social media management',
    'social media manager for realtors',
    'real estate smma',
    'social media agency for real estate agents',
    'realtor social media services',
    'real estate content creation',
    'social media marketing for realtors',
  ],
  alternates: {
    canonical: `/services/${service.slug}`,
  },
  openGraph: {
    title: service.title,
    description: service.metaDescription,
    url: `/services/${service.slug}`,
    type: 'website',
  },
}

export default function SocialMediaManagementPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Social Media Management for Real Estate Agents',
    description: service.metaDescription,
    url: `https://xeinst.com/services/${service.slug}`,
  })

  const faqSchema = generateFAQSchema(service.faq)
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://xeinst.com' },
    { name: 'Services', url: 'https://xeinst.com/#services' },
    { name: 'Social Media Management for Realtors', url: `https://xeinst.com/services/${service.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        <ServiceHero
          h1={service.h1}
          subtitle={service.subtitle}
          description={service.hero.description}
          stats={service.hero.stats}
        />

        {service.sections.map((section, index) => (
          <ServiceSection
            key={index}
            title={section.title}
            items={section.items}
            steps={section.steps}
            benefits={section.benefits}
          />
        ))}

        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Social Media Management Packages</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Choose the level of management that fits your goals and budget
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {service.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative p-8 border-2 rounded-xl ${
                    pkg.popular
                      ? 'border-black shadow-2xl scale-105'
                      : 'border-gray-200'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold mb-2">
                      {pkg.price}
                      <span className="text-lg text-gray-600">{pkg.period}</span>
                    </div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ServiceButton
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-100 text-black hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </ServiceButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={service.faq} />
        
        <ServiceCTA
          headline={service.cta.headline}
          description={service.cta.description}
          buttonText={service.cta.buttonText}
        />

        <Contact />
      </main>
    </>
  )
}

