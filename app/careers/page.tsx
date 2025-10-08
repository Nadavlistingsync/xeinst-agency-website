import type { Metadata } from 'next'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { Section } from '../components/ui/Section'
import { Contact } from '../components/Contact'
import { Users, Code, Phone, FileText, Scissors, Video, MapPin, DollarSign } from 'lucide-react'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Careers at Xeinst Media | Join Our Real Estate Marketing Team',
  description: 'Join Xeinst Media Agency! We\'re hiring Cold Callers, Script Writers, Video Editors & Clippers. Remote positions with growth opportunities in real estate marketing. Apply today!',
  keywords: [
    'xeinst media careers',
    'real estate marketing jobs',
    'video editing jobs remote',
    'cold calling jobs',
    'script writing jobs',
    'social media jobs real estate',
    'remote marketing positions',
    'xeinst media hiring'
  ],
  openGraph: {
    title: 'Careers at Xeinst Media | Join Our Real Estate Marketing Team',
    description: 'Join Xeinst Media Agency! We\'re hiring Cold Callers, Script Writers, Video Editors & Clippers. Remote positions with growth opportunities in real estate marketing. Apply today!',
    url: 'https://xeinst.com/careers',
  },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://xeinst.com' },
  { name: 'Careers', url: 'https://xeinst.com/careers' }
])

const growthRoles = [
  {
    title: 'Cold Caller',
    icon: Phone,
    description: 'Generate leads and sell Xeinst Media\'s video editing and social media management services to real estate agents.',
    responsibilities: [
      'Make outbound calls to real estate agents',
      'Present our video editing and social media services',
      'Qualify prospects and set up discovery calls',
      'Maintain CRM and track lead progress',
      'Meet monthly sales targets'
    ],
    requirements: [
      'Previous cold calling experience preferred',
      'Excellent communication and persuasion skills',
      'Knowledge of real estate industry a plus',
      'Self-motivated and results-driven',
      'Comfortable with rejection and persistence'
    ],
    applicationInstructions: 'To apply: Call our founder directly at 347-616-4524 and pitch Xeinst Media\'s product. Show us your selling skills by convincing us why real estate agents need our video editing and social media management services. Be prepared to discuss your experience and how you can help us grow.',
    type: 'Full-time',
    location: 'Remote',
    salary: 'Commission-based + Base'
  }
]

const productRoles = [
  {
    title: 'Video Editor',
    icon: Video,
    description: 'Create engaging video content for real estate agents including TikTok, Instagram Reels, and YouTube videos.',
    responsibilities: [
      'Edit property tour videos and real estate content',
      'Create social media optimized clips (TikTok, Instagram Reels)',
      'Add graphics, text overlays, and trending effects',
      'Ensure 24-48 hour turnaround times',
      'Collaborate with script writers and account managers'
    ],
    requirements: [
      'Proficient in video editing software (Premiere Pro, DaVinci Resolve, Final Cut)',
      'Experience with social media video formats',
      'Understanding of real estate marketing trends',
      'Portfolio of previous video editing work',
      'Ability to work under tight deadlines'
    ],
    applicationInstructions: 'To apply: Send your best video editing work to nadav.benedek@xeinst.com. Include 3-5 examples of your best real estate or social media video edits. Show us your range - from property tours to engaging social media clips. Tell us about your editing process and why you want to work with real estate agents.',
    type: 'Full-time/Part-time',
    location: 'Remote',
    salary: 'Competitive hourly rates'
  },
  {
    title: 'Video Clipper',
    icon: Scissors,
    description: 'Create short-form video content by clipping and editing longer videos into engaging social media posts.',
    responsibilities: [
      'Clip longer videos into 15-60 second social media content',
      'Identify the most engaging moments in property tours',
      'Add captions, trending sounds, and effects',
      'Optimize for TikTok and Instagram Reels algorithms',
      'Maintain brand consistency across all clips'
    ],
    requirements: [
      'Experience with short-form video creation',
      'Understanding of social media trends and algorithms',
      'Basic video editing skills',
      'Creative eye for engaging content moments',
      'Familiarity with TikTok and Instagram formats'
    ],
    applicationInstructions: 'To apply: Send your best video clipping work to nadav.benedek@xeinst.com. Include examples of how you\'ve transformed longer videos into engaging short-form content. Show us clips that performed well on social media. Explain your process for identifying the most engaging moments in longer videos.',
    type: 'Full-time/Part-time',
    location: 'Remote',
    salary: 'Competitive hourly rates'
  },
  {
    title: 'Script Writer',
    icon: FileText,
    description: 'Write compelling scripts for real estate video content that converts viewers into leads.',
    responsibilities: [
      'Write scripts for property tour videos',
      'Create engaging social media video scripts',
      'Develop call-to-action copy that generates leads',
      'Adapt scripts for different platforms (TikTok, Instagram, YouTube)',
      'Collaborate with video editors and account managers'
    ],
    requirements: [
      'Strong writing and storytelling skills',
      'Understanding of real estate marketing',
      'Knowledge of social media best practices',
      'Portfolio of previous script writing work',
      'Ability to write for different audiences and platforms'
    ],
    applicationInstructions: 'To apply: Send your best script for a Miami-based luxury real estate agent looking to get more buyers for a $2.3 million 3-bedroom, 2-bathroom house close to a school to nadav.benedek@xeinst.com. The script should be engaging, highlight the property\'s key features, and include a strong call-to-action for potential buyers. Show us how you would make this luxury property irresistible to qualified buyers.',
    type: 'Full-time/Part-time',
    location: 'Remote',
    salary: 'Competitive hourly rates'
  }
]

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-black to-gray-900 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={1} className="mb-6">
              Join the Xeinst Media Team
            </Heading>
            <p className="text-xl text-gray-300 mb-8">
              We're building the future of real estate marketing. Join our team of creative professionals 
              who help real estate agents dominate social media and close more deals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                Remote-first culture
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Code className="w-4 h-4" />
                Growth opportunities
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <DollarSign className="w-4 h-4" />
                Competitive compensation
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Growth Roles */}
      <Section className="py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">
                Growth Team
              </Heading>
              <p className="text-gray-600 text-lg">
                Help us expand our reach and bring our services to more real estate agents nationwide.
              </p>
            </div>
            
            <div className="grid gap-8">
              {growthRoles.map((role, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="bg-black text-white p-3 rounded-xl">
                      <role.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{role.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {role.location}
                            </span>
                            <span>{role.type}</span>
                            <span>{role.salary}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6">{role.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-8 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                          <ul className="space-y-2">
                            {role.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <span className="text-black mt-1">•</span>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {role.requirements.map((requirement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <span className="text-black mt-1">•</span>
                                {requirement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-3">How to Apply:</h4>
                        <p className="text-gray-700 leading-relaxed">{role.applicationInstructions}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Product Roles */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">
                Product Team
              </Heading>
              <p className="text-gray-600 text-lg">
                Create the high-quality content that helps real estate agents stand out on social media.
              </p>
            </div>
            
            <div className="grid gap-8">
              {productRoles.map((role, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="bg-black text-white p-3 rounded-xl">
                      <role.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{role.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {role.location}
                            </span>
                            <span>{role.type}</span>
                            <span>{role.salary}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6">{role.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-8 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                          <ul className="space-y-2">
                            {role.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <span className="text-black mt-1">•</span>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {role.requirements.map((requirement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <span className="text-black mt-1">•</span>
                                {requirement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-3">How to Apply:</h4>
                        <p className="text-gray-700 leading-relaxed">{role.applicationInstructions}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Work With Us */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2} className="mb-8">
              Why Work With Xeinst Media?
            </Heading>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Remote-First Culture</h3>
                <p className="text-gray-600">
                  Work from anywhere with flexible hours and a supportive team environment.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
                <p className="text-gray-600">
                  Join a fast-growing company with opportunities for advancement and skill development.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitive Compensation</h3>
                <p className="text-gray-600">
                  Earn competitive rates with performance bonuses and growth incentives.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-black text-white py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level={2} className="mb-6">
              Ready to Join Our Team?
            </Heading>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for helping 
              real estate agents succeed through innovative marketing.
            </p>
            <p className="text-gray-400">
              Don't see a role that fits? We'd still love to hear from you. 
              Send us your resume and tell us how you can help us grow.
            </p>
          </div>
        </Container>
      </Section>

      <Contact />
    </>
  )
}
