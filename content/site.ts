export const siteConfig = {
  name: "Xeinst Media Agency",
  description: "We help real estate agents grow their personal brand, generate quality leads, and close more deals through strategic video clipping campaigns and social media management.",
  url: "https://xeinst.com",
  ogImage: "https://xeinst.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/xeinst",
    instagram: "https://instagram.com/xeinst",
    linkedin: "https://linkedin.com/company/xeinstmediaa",
    tiktok: "https://tiktok.com/@xeinst",
  },
  contact: {
    email: "nadav.benedek@xeinst.com",
    phone: "347-616-4524",
  },
}

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export const heroContent = {
  headline: "Grow Your Real Estate Brand with Video Clipping Campaigns",
  subheading: "Strategic video clipping and social media management for real estate agents who want to dominate their market",
  description: "Transform your property content into viral short-form videos that grow your personal brand and generate qualified leads. We run strategic video clipping campaigns across TikTok, Instagram, and YouTube to help real estate agents build massive followings and close more deals.",
  primaryCta: "Get Started",
  secondaryCta: "Our Services",
  primaryCtaHref: "#contact",
  secondaryCtaHref: "#services",
}

export const aboutContent = {
  headline: "How We Work",
  description: "We don't just post listings – we build your personal brand as the go-to real estate agent in your market. Our approach transforms property content into lead-generating machines.",
  process: [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "We analyze your market, target audience, and business goals to create a custom video clipping campaign strategy that positions you as the go-to agent in your area.",
    },
    {
      step: "02", 
      title: "Video Clipping & Content Creation",
      description: "We transform your property content into engaging short-form videos optimized for TikTok, Instagram Reels, and YouTube Shorts that grow your personal brand.",
    },
    {
      step: "03",
      title: "Social Media Management & Growth",
      description: "We manage your social media presence with strategic posting schedules and content optimization to maximize reach and build your following.",
    },
  ],
}

export const servicesContent = {
  headline: "Our Services",
  description: "Strategic video clipping campaigns and social media management designed specifically for real estate agents who want to grow their personal brand and generate more leads.",
  services: [
    {
      icon: "Video",
      title: "Video Clipping",
      description: "Transform your property content into engaging short-form clips for TikTok, Instagram Reels, and YouTube Shorts that showcase your listings and grow your following.",
    },
    {
      icon: "TrendingUp",
      title: "Social Media Management",
      description: "Manage your social media presence across TikTok, Instagram, and YouTube with strategic posting schedules and content optimization for maximum reach and growth.",
    },
    {
      icon: "Target",
      title: "Content Strategy",
      description: "Develop strategic content plans that position you as the go-to real estate expert in your market and help you build a strong personal brand.",
    },
  ],
}

export const testimonialsContent = {
  headline: "Why Real Estate Agents Choose Xeinst Media",
  description: "We specialize in helping real estate agents build personal brands, generate quality leads, and close more deals through strategic social media management.",
  features: [
    {
      title: "Real Estate Expertise",
      description: "We understand the real estate industry inside and out. We know how to showcase properties, highlight agent value, and create content that resonates with buyers and sellers.",
    },
    {
      title: "Lead Generation Focus",
      description: "Every piece of content is designed to generate qualified leads. We track which properties and content types drive the most inquiries and double down on what works.",
    },
    {
      title: "Fast Turnaround for Active Listings",
      description: "Get your listing clips within 24-48 hours so you can promote new properties immediately. Strike while the iron is hot and attract buyers fast.",
    },
    {
      title: "Proven Results for Agents",
      description: "Our clients have generated millions of views on their property content, built massive local followings, and closed deals directly from social media leads.",
    },
  ],
}

export const faqContent = {
  headline: "Frequently Asked Questions",
  description: "Everything real estate agents need to know about our video clipping campaigns and social media management services.",
  faqs: [
    {
      question: "How many posts do you create per month?",
      answer: "It depends on your package! Our starter plan includes 20 posts per month, growth plan offers 40 posts, and our premium plan provides unlimited posts. All content is strategically planned and optimized for each platform.",
    },
    {
      question: "How quickly do you respond to new listings?",
      answer: "We can create and post content for new listings within 24-48 hours. For urgent listings, we offer same-day content creation so you can start marketing immediately.",
    },
    {
      question: "Which social media platforms do you manage?",
      answer: "We manage TikTok, Instagram (Feed, Reels & Stories), and YouTube (Shorts & long-form). Each platform gets customized content optimized for that audience and algorithm.",
    },
    {
      question: "What content do you need from me?",
      answer: "We primarily need your property photos, basic listing information, and any videos you have. We create all the video clips, captions, hashtags, and manage posting across TikTok, Instagram, and YouTube.",
    },
    {
      question: "Can you help me generate more buyer and seller leads?",
      answer: "Absolutely! Our content strategy is specifically designed to generate qualified real estate leads. We create property showcases, market update content, agent lifestyle videos, and call-to-action posts that drive inquiries and consultations.",
    },
    {
      question: "How do you track which content generates leads?",
      answer: "We track views, engagement, follower growth, and most importantly - lead inquiries tied to specific content. You'll receive monthly reports showing which properties and content types generated the most buyer interest and direct messages.",
    },
    {
      question: "Can I review content before it goes live?",
      answer: "Absolutely! We can set up an approval process where you review content before posting, or you can give us full posting authority for a more hands-off experience. We work until you're 100% satisfied.",
    },
    {
      question: "How do video clipping campaigns work?",
      answer: "We take your property content and transform it into multiple engaging short-form videos optimized for each platform. Each campaign includes strategic posting schedules, captions, hashtags, and content optimization for maximum reach and growth.",
    },
  ],
}

export const contactContent = {
  headline: "Ready to Dominate Your Market?",
  description: "Let's discuss how we can transform your listings into viral content and generate more qualified leads. Get a free social media audit and custom strategy designed specifically for real estate agents.",
  info: [
    {
      icon: "Phone",
      label: "Phone",
      value: "347-616-4524",
      href: "tel:347-616-4524",
    },
    {
      icon: "Mail",
      label: "Email", 
      value: "nadav.benedek@xeinst.com",
      href: "mailto:nadav.benedek@xeinst.com",
    },
    {
      icon: "MapPin",
      label: "Location",
      value: "New York, NY",
      href: "#",
    },
  ],
  form: {
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Enter your full name",
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "Enter your email address",
      },
      {
        name: "company",
        label: "Brokerage/Team Name",
        type: "text",
        required: false,
        placeholder: "Your brokerage or team name",
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        required: false,
        placeholder: "Enter your phone number",
      },
      {
        name: "problem",
        label: "What Are Your Goals?",
        type: "textarea",
        required: true,
        placeholder: "Tell us about your goals... Are you looking to generate more buyer leads? Grow your personal brand? Get more listing appointments? How many listings do you typically have per month?",
      },
      {
        name: "message",
        label: "Additional Information",
        type: "textarea",
        required: false,
        placeholder: "Current social media presence, target market (luxury, first-time buyers, etc.), average price point, or any other details...",
      },
    ],
    submitText: "Get Free Strategy Session",
    successMessage: "Thank you! We'll get back to you within 24 hours with a custom strategy for your real estate business.",
    errorMessage: "Something went wrong. Please try again or contact us directly.",
  },
}
