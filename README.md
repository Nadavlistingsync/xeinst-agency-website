# Xeinst Custom Software Agency Website

A modern, minimalist agency website built with Next.js 14, TypeScript, and Tailwind CSS. Features a fully functional contact form, smooth animations, and Apple-inspired design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with Apple-inspired minimalism
- **Functional Contact Form**: Validated form with email delivery via Resend
- **Smooth Animations**: Framer Motion with reduced motion support
- **SEO Optimized**: Complete metadata, sitemap, and robots.txt
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized for Lighthouse scores ≥95

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd xeinst-agency-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_FROM_EMAIL=website@xeinst.com
CONTACT_TO_EMAIL=nadav.benedek@xeinst.com
```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📧 Contact Form Setup

The contact form uses Resend for email delivery. To set it up:

1. Sign up for a [Resend](https://resend.com) account
2. Get your API key from the dashboard
3. Add it to your `.env.local` file
4. Configure your domain in Resend (optional, for better deliverability)

The form will work without Resend (it will log to console), but for production, email delivery is recommended.

## 🎨 Customization

### Content Updates

All content is centralized in `content/site.ts`. Update the following sections:

- `heroContent`: Hero section headline, subheading, and CTAs
- `aboutContent`: About section and process steps
- `servicesContent`: Services offered and descriptions
- `testimonialsContent`: Client testimonials
- `faqContent`: Frequently asked questions
- `contactContent`: Contact information and form configuration

### Styling

The design system uses CSS variables defined in `app/globals.css`. Key customization points:

- Color scheme: Update CSS variables in `:root`
- Typography: Modify font imports and Tailwind config
- Spacing: Adjust section padding in `app/components/ui/Section.tsx`

### Branding

Update the following files for your brand:

- `app/layout.tsx`: Site metadata, title, description
- `content/site.ts`: Company name, contact info, social links
- `public/`: Add your logo, favicon, and OG image

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email nadav.benedek@xeinst.com or call 347-616-4524.

---

Built with ❤️ by [Xeinst Custom Software Agency](https://xeinst.com)
