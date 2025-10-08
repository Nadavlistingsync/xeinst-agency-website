import type { Metadata } from 'next'
import { ServiceHero } from '@/app/components/ServiceHero'
import { ServiceSection } from '@/app/components/ServiceSection'
import { ServiceFAQ } from '@/app/components/ServiceFAQ'
import { ServiceCTA } from '@/app/components/ServiceCTA'
import { Contact } from '@/app/components/Contact'
import { servicePages } from '@/content/services'
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

const service = servicePages.instagramReels

export const metadata: Metadata = {
  title: service.title,
  description: service.metaDescription,
  keywords: [
    'instagram reels for real estate',
    'real estate instagram reels',
    'instagram for realtors',
    'real estate reels editing',
    'instagram marketing for real estate agents',
    'realtor instagram strategy',
    'property reels',
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

export default function InstagramReelsPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Instagram Reels for Real Estate Agents',
    description: service.metaDescription,
    url: `https://xeinst.com/services/${service.slug}`,
  })

  const faqSchema = generateFAQSchema(service.faq)
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://xeinst.com' },
    { name: 'Services', url: 'https://xeinst.com/#services' },
    { name: 'Instagram Reels for Real Estate', url: `https://xeinst.com/services/${service.slug}` },
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
          />
        ))}

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

