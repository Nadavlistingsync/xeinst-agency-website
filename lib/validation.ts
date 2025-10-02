import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  problem: z.string().min(10, 'Please describe your problem in at least 10 characters'),
  message: z.string().optional(),
  honeypot: z.string().max(0, 'Bot detected'), // Honeypot field
})

export type ContactFormData = z.infer<typeof contactFormSchema>
