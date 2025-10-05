export const siteConfig = {
  name: "Xeinst Custom Software Agency",
  description: "We take people's biggest problems and make software to fix them.",
  url: "https://xeinst.com",
  ogImage: "https://xeinst.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/xeinst",
    github: "https://github.com/xeinst",
    linkedin: "https://linkedin.com/company/xeinst",
  },
  contact: {
    email: "nadav.benedek@xeinst.com",
    phone: "347-616-4524",
  },
}

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export const heroContent = {
  headline: "We Solve Your Biggest Problems",
  subheading: "Custom software solutions that transform how real estate agents and construction companies work",
  description: "Stop wasting time on repetitive tasks and outdated systems. We build software that actually solves your problems and grows your business. You only pay 20% of the value we create or a fixed price based on results.",
  primaryCta: "Get Started",
  secondaryCta: "Our Services",
  primaryCtaHref: "#contact",
  secondaryCtaHref: "#services",
}

export const aboutContent = {
  headline: "How We Work",
  description: "We don't just build software – we solve problems. Our approach is simple but powerful: understand your biggest challenge, then create software that eliminates it.",
  process: [
    {
      step: "01",
      title: "Understand Your Problem",
      description: "We dive deep into your business to identify the root cause of your biggest challenges.",
    },
    {
      step: "02", 
      title: "Design the Solution",
      description: "We create a custom software solution that directly addresses your specific needs.",
    },
    {
      step: "03",
      title: "Build & Deploy",
      description: "We develop, test, and deploy your solution with ongoing support and optimization.",
    },
  ],
}

export const servicesContent = {
  headline: "Our Services",
  description: "We specialize in custom software solutions for real estate and construction industries. Our value-based pricing means you only pay when we deliver results.",
  services: [
    {
      icon: "Code",
      title: "Custom Software Development",
      description: "Tailored applications that solve your specific business problems and integrate seamlessly with your workflow.",
    },
    {
      icon: "Users",
      title: "Process Automation",
      description: "Streamline your operations with automated workflows that save time and reduce errors.",
    },
    {
      icon: "Database",
      title: "Data Management Systems",
      description: "Organize and analyze your data with powerful, user-friendly management systems.",
    },
    {
      icon: "Smartphone",
      title: "Mobile Applications",
      description: "Access your business tools anywhere with custom mobile apps for iOS and Android.",
    },
    {
      icon: "Cloud",
      title: "Cloud Integration",
      description: "Connect all your tools and data in one centralized, cloud-based platform.",
    },
    {
      icon: "Headphones",
      title: "Ongoing Support",
      description: "24/7 support and regular updates to keep your software running smoothly.",
    },
  ],
}

export const testimonialsContent = {
  headline: "Why Choose Xeinst",
  description: "We focus on solving real problems with custom software solutions that deliver measurable results.",
  features: [
    {
      title: "Problem-First Approach",
      description: "We start by understanding your biggest challenges, then build software that directly addresses them.",
    },
    {
      title: "Industry Expertise",
      description: "Specialized experience in real estate and construction industries with deep understanding of workflows.",
    },
    {
      title: "Measurable Results & Value-Based Pricing",
      description: "Every solution we build comes with clear metrics and ROI tracking to prove its value. Our pricing model ensures you only pay 20% of the value we create or a fixed price based on results.",
    },
    {
      title: "Ongoing Support",
      description: "We don't just build and leave - we provide continuous support and optimization for your success.",
    },
  ],
}

export const faqContent = {
  headline: "Frequently Asked Questions",
  description: "Everything you need to know about our custom software solutions.",
  faqs: [
    {
      question: "How long does it take to build custom software?",
      answer: "Timeline depends on complexity, but most projects range from 4-12 weeks. We provide detailed project timelines during our initial consultation and keep you updated throughout development.",
    },
    {
      question: "How do you determine pricing for custom software development?",
      answer: "We use a value-based pricing model that aligns our success with yours. We charge 20% of the money we save you or the revenue we help you generate, OR we set a fixed price based on the value creation equation. This ensures you only pay when you see real results from our software solutions.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! We include 90 days of free support with every project, then offer flexible support plans. We're always available for updates, bug fixes, and feature enhancements.",
    },
    {
      question: "Will the software integrate with our existing tools?",
      answer: "Absolutely. We specialize in seamless integrations with popular business tools like CRM systems, accounting software, project management platforms, and more.",
    },
    {
      question: "What if we need changes after the software is built?",
      answer: "We build flexibility into every solution. Most changes can be implemented quickly, and we offer maintenance plans that include regular updates and modifications.",
    },
    {
      question: "Do you work with both real estate and construction companies?",
      answer: "Yes! We have extensive experience in both industries and understand their unique challenges. Our solutions are tailored to each industry's specific needs and workflows.",
    },
    {
      question: "How do you ensure our data is secure?",
      answer: "We implement enterprise-grade security measures including encryption, secure hosting, regular backups, and compliance with industry standards. Your data security is our top priority.",
    },
    {
      question: "Can you help us migrate from our current system?",
      answer: "Definitely. We handle data migration, user training, and provide ongoing support during the transition to ensure a smooth switch to your new custom software.",
    },
  ],
}

export const contactContent = {
  headline: "Ready to Solve Your Biggest Problem?",
  description: "Let's discuss how custom software can transform your business. With our value-based pricing, you only pay when we deliver measurable results. Get in touch for a free consultation.",
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
        label: "Company",
        type: "text",
        required: false,
        placeholder: "Enter your company name",
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
        label: "Describe Your Problem",
        type: "textarea",
        required: true,
        placeholder: "Tell us about the biggest problem you're facing that software could solve...",
      },
      {
        name: "message",
        label: "Additional Message",
        type: "textarea",
        required: false,
        placeholder: "Any additional information you'd like to share...",
      },
    ],
    submitText: "Send Message",
    successMessage: "Thank you! We'll get back to you within 24 hours.",
    errorMessage: "Something went wrong. Please try again or contact us directly.",
  },
}
