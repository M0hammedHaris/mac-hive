import { z } from 'zod';

export const contactFormSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    budgetRange: z.string().min(1, 'Please select a budget range'),
    timeline: z.string().min(1, 'Please select a timeline'),
    projectDetails: z.string().min(20, 'Please provide at least 20 characters about your project'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
