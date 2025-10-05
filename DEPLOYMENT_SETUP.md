# Deployment Setup Guide

## Contact Form Deployment on Vercel

The contact form is ready for deployment! Follow these steps to make it work on your live website.

### Step 1: Get Your Resend API Key

1. Go to [resend.com](https://resend.com) and create a free account
2. Navigate to your dashboard
3. Go to "API Keys" section
4. Create a new API key
5. Copy the API key (it starts with `re_`)

### Step 2: Configure Environment Variables on Vercel

You have two options to set up environment variables:

#### Option A: Using Vercel CLI (Current Method)
Run these commands in your terminal:

```bash
# Add Resend API key
vercel env add RESEND_API_KEY
# When prompted, paste your API key

# Add from email
vercel env add CONTACT_FROM_EMAIL
# When prompted, enter: website@xeinst.com

# Add to email
vercel env add CONTACT_TO_EMAIL
# When prompted, enter: nadav.benedek@xeinst.com
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and log in
2. Navigate to your project: `xeinst/xeinst-agency-website`
3. Go to "Settings" → "Environment Variables"
4. Add these variables:

| Name | Value | Environment |
|------|-------|-------------|
| `RESEND_API_KEY` | `your_actual_api_key_here` | Production, Preview, Development |
| `CONTACT_FROM_EMAIL` | `website@xeinst.com` | Production, Preview, Development |
| `CONTACT_TO_EMAIL` | `nadav.benedek@xeinst.com` | Production, Preview, Development |

### Step 3: Deploy and Test

After setting up environment variables:

1. **Redeploy your site:**
   ```bash
   vercel --prod
   ```

2. **Or trigger a new deployment** by pushing to GitHub:
   ```bash
   git add .
   git commit -m "Configure contact form for deployment"
   git push origin main
   ```

3. **Test the contact form** on your live site:
   - Go to your deployed website
   - Navigate to the contact section
   - Fill out the form with test data
   - Submit the form
   - Check your email inbox for the submission

### Step 4: Verify Email Delivery

1. **Check your email inbox** (nadav.benedek@xeinst.com)
2. **Check Resend dashboard** for delivery status
3. **Check Vercel function logs** if there are issues:
   ```bash
   vercel logs
   ```

### Troubleshooting

#### Form not sending emails?
- ✅ Verify `RESEND_API_KEY` is set correctly
- ✅ Check email addresses are valid
- ✅ Ensure domain is verified in Resend (if using custom domain)
- ✅ Check Vercel function logs for errors

#### Getting validation errors?
- ✅ Ensure all required fields are filled
- ✅ Check email format is valid
- ✅ Problem description must be at least 10 characters

#### Form not submitting at all?
- ✅ Check browser console for JavaScript errors
- ✅ Verify network connectivity
- ✅ Check if API route is accessible: `https://your-domain.com/api/contact`

### Production Checklist

- [ ] Resend API key configured
- [ ] Email addresses set correctly
- [ ] Domain verified in Resend (if custom domain)
- [ ] Contact form tested on live site
- [ ] Email delivery confirmed
- [ ] Error handling working properly

### Alternative: Development Mode

If you want to test without email setup:
- The form will still work and log submissions to console
- Perfect for development and testing
- No email will be sent until Resend is configured

### Support

If you encounter issues:
1. Check the Vercel function logs
2. Verify environment variables are set
3. Test with a simple form submission
4. Check Resend dashboard for delivery status

The contact form is production-ready and will work immediately once the environment variables are configured!
