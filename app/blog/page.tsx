import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { Section } from '../components/ui/Section'
import { getAllBlogPosts } from '@/content/blog/posts'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Social Media Marketing Blog | Xeinst Media',
  description: 'Expert guides on real estate video editing, TikTok marketing, Instagram Reels, and social media strategies for realtors. Learn how to generate leads from social media.',
  keywords: [
    'real estate marketing blog',
    'real estate social media tips',
    'realtor marketing guide',
    'real estate video editing tips',
    'tiktok for realtors guide',
  ],
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="pt-20">
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Heading level={1} className="mb-6">
              Real Estate Social Media Marketing Blog
            </Heading>
            <p className="text-xl text-gray-600">
              Expert guides, strategies, and tips to help real estate agents dominate social media, 
              create viral content, and generate qualified leads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.metaDescription}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <div className="flex items-center gap-2 text-black font-semibold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}

