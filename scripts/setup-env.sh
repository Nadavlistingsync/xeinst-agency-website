#!/bin/bash

# Contact Form Environment Variables Setup Script
# This script helps you set up environment variables for the contact form on Vercel

echo "🚀 Setting up Contact Form Environment Variables for Vercel..."
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Please install it first:"
    echo "npm i -g vercel"
    exit 1
fi

# Check if project is linked
if [ ! -f ".vercel/project.json" ]; then
    echo "❌ Project not linked to Vercel. Please run 'vercel link' first."
    exit 1
fi

echo "✅ Vercel CLI found and project is linked"
echo ""

# Get API key from user
echo "📧 Please provide your Resend API key:"
echo "   (Get it from https://resend.com)"
read -p "Resend API Key: " RESEND_API_KEY

if [ -z "$RESEND_API_KEY" ]; then
    echo "❌ API key is required"
    exit 1
fi

echo ""
echo "📧 Setting up email addresses..."
echo "   From email: website@xeinst.com"
echo "   To email: nadav.benedek@xeinst.com"

# Set environment variables
echo ""
echo "🔧 Adding environment variables to Vercel..."

# Add RESEND_API_KEY
echo "$RESEND_API_KEY" | vercel env add RESEND_API_KEY production
echo "$RESEND_API_KEY" | vercel env add RESEND_API_KEY preview
echo "$RESEND_API_KEY" | vercel env add RESEND_API_KEY development

# Add CONTACT_FROM_EMAIL
echo "website@xeinst.com" | vercel env add CONTACT_FROM_EMAIL production
echo "website@xeinst.com" | vercel env add CONTACT_FROM_EMAIL preview
echo "website@xeinst.com" | vercel env add CONTACT_FROM_EMAIL development

# Add CONTACT_TO_EMAIL
echo "nadav.benedek@xeinst.com" | vercel env add CONTACT_TO_EMAIL production
echo "nadav.benedek@xeinst.com" | vercel env add CONTACT_TO_EMAIL preview
echo "nadav.benedek@xeinst.com" | vercel env add CONTACT_TO_EMAIL development

echo ""
echo "✅ Environment variables added successfully!"
echo ""
echo "🚀 Next steps:"
echo "1. Redeploy your site: vercel --prod"
echo "2. Test the contact form on your live site"
echo "3. Check your email inbox for submissions"
echo ""
echo "📖 For more details, see DEPLOYMENT_SETUP.md"
