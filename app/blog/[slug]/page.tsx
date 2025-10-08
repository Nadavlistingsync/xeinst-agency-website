import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/app/components/ui/Container'
import { Section } from '@/app/components/ui/Section'
import { Button } from '@/app/components/ui/Button'
import { Contact } from '@/app/components/Contact'
import { getBlogPost, getAllBlogPosts } from '@/content/blog/posts'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { BlogButton } from '@/app/components/BlogButton'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.metaDescription,
    url: `https://xeinst.com/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://xeinst.com' },
    { name: 'Blog', url: 'https://xeinst.com/blog' },
    { name: post.title, url: `https://xeinst.com/blog/${post.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="pt-20">
        {/* Article Header */}
        <Section className="bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumbs */}
              <nav className="mb-8 text-sm">
                <Link href="/" className="text-gray-600 hover:text-black">
                  Home
                </Link>
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/blog" className="text-gray-600 hover:text-black">
                  Blog
                </Link>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-black">{post.category}</span>
              </nav>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                {post.h1}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Intro */}
              <div className="text-xl text-gray-700 leading-relaxed mb-12 border-l-4 border-black pl-6">
                {post.intro}
              </div>
            </div>
          </Container>
        </Section>

        {/* Article Content */}
        <Section className="bg-white">
          <Container>
            <article className="max-w-4xl mx-auto prose prose-lg prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-black">
              {post.sections.map((section, index) => (
                <div key={index}>
                  <h2>{section.heading}</h2>
                  <p>{section.content}</p>
                  
                  {section.list && (
                    <ul>
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3>{subsection.heading}</h3>
                      {subsection.content && <p>{subsection.content}</p>}
                      {subsection.list && (
                        <ul>
                          {subsection.list.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* Conclusion */}
              <h2>Conclusion</h2>
              <p>{post.conclusion}</p>
            </article>
          </Container>
        </Section>

        {/* Article CTA */}
        <Section className="bg-black text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">{post.cta.headline}</h2>
              <p className="text-xl text-gray-300 mb-8">{post.cta.description}</p>
              <BlogButton
                className="group bg-white text-black hover:bg-gray-100 border-2 border-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                {post.cta.buttonText}
              </BlogButton>
            </div>
          </Container>
        </Section>

        {/* Related Articles */}
        <Section className="bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {getAllBlogPosts()
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="text-sm text-gray-500 mb-2">{relatedPost.category}</div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-gray-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.metaDescription}
                    </p>
                    <div className="flex items-center gap-2 text-black font-semibold text-sm group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
            </div>
          </Container>
        </Section>

        <Contact />
      </main>
    </>
  )
}

