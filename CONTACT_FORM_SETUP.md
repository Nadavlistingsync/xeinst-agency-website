# Contact Form Setup Instructions

The contact form is fully functional and ready to use! Here's how to set it up:

## Email Configuration

### Option 1: Using Resend (Recommended)
1. Sign up for a free account at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Create a `.env.local` file in the project root with:

```bash
# Email Configuration for Contact Form
RESEND_API_KEY=your_actual_api_key_here
CONTACT_FROM_EMAIL=website@xeinst.com
CONTACT_TO_EMAIL=nadav.benedek@xeinst.com
```

### Option 2: Development Mode (No Email)
If you don't want to set up email immediately, the form will still work:
- Form submissions will be logged to the console
- You can see the submission data in your browser's developer tools
- Perfect for testing and development

## Form Features

✅ **Fully Functional Contact Form**
- Client-side validation using React Hook Form + Zod
- Server-side validation and sanitization
- Honeypot field for bot protection
- Responsive design
- Loading states and success/error messages
- Form reset after successful submission

✅ **Email Integration**
- Sends formatted emails with all form data
- Includes reply-to functionality
- Professional email template
- Error handling and fallbacks

✅ **Security Features**
- Honeypot field to prevent spam
- Input validation and sanitization
- Rate limiting (can be added)
- CSRF protection via Next.js

## Testing the Form

1. Start the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form with test data
4. Submit the form
5. Check the console for submission logs (if no email configured)
6. Check your email inbox (if Resend is configured)

## Form Fields

- **Name** (required, min 2 characters)
- **Email** (required, valid email format)
- **Company** (optional)
- **Phone** (optional)
- **Problem Description** (required, min 10 characters)
- **Additional Message** (optional)
- **Honeypot** (hidden, bot protection)

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Ensure all required fields are filled
- Verify network connectivity

### Emails not sending?
- Check your Resend API key
- Verify email addresses in .env.local
- Check Resend dashboard for delivery status
- Check server logs for errors

### Validation errors?
- Ensure all required fields are completed
- Check field length requirements
- Verify email format

## Production Deployment

For production deployment:
1. Set up your Resend API key in your hosting platform's environment variables
2. Configure your domain in Resend
3. Test the form thoroughly before going live
4. Consider adding rate limiting for additional security

The form is production-ready and will work immediately once email credentials are configured!
