'use server';

import { getDb } from '@/lib/db';
import { sendLeadNotification } from '@/lib/email';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';

export type FormState = {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
};

export async function submitContactForm(
    _prevState: FormState,
    formData: FormData
): Promise<FormState> {
    // Parse form data
    const rawData: ContactFormData = {
        fullName: formData.get('fullName') as string,
        email: formData.get('email') as string,
        budgetRange: formData.get('budgetRange') as string,
        timeline: formData.get('timeline') as string,
        projectDetails: formData.get('projectDetails') as string,
    };

    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(rawData);

    if (!validationResult.success) {
        return {
            success: false,
            message: 'Please fix the errors below.',
            errors: validationResult.error.flatten().fieldErrors as Record<string, string[]>,
        };
    }

    const validData = validationResult.data;

    try {
        const sql = getDb();

        await sql`
            INSERT INTO leads (full_name, email, budget_range, timeline, project_details, source, status)
            VALUES (${validData.fullName}, ${validData.email}, ${validData.budgetRange}, ${validData.timeline}, ${validData.projectDetails}, 'contact_form', 'new')
        `;

        // Send email notification (non-blocking)
        sendLeadNotification({
            fullName: validData.fullName,
            email: validData.email,
            budgetRange: validData.budgetRange,
            timeline: validData.timeline,
            projectDetails: validData.projectDetails,
        });

        return {
            success: true,
            message: "Thanks for reaching out! We'll get back to you within 24 hours.",
        };
    } catch (error) {
        console.error('Database error:', error);
        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
        };
    }
}

