import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface LeadNotificationData {
    fullName: string;
    email: string;
    budgetRange: string;
    timeline: string;
    projectDetails: string;
}

export async function sendLeadNotification(data: LeadNotificationData) {
    const notificationEmail = process.env.NOTIFICATION_EMAIL;

    if (!notificationEmail) {
        console.warn('NOTIFICATION_EMAIL not set, skipping email notification');
        return;
    }

    try {
        await resend.emails.send({
            from: 'Mac Hive <noreply@machive.in>',
            to: notificationEmail,
            subject: `🚀 New Lead: ${data.fullName} - ${data.budgetRange}`,
            html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #1c4b82 0%, #2563eb 100%); padding: 30px; border-radius: 12px 12px 0 0;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">🐝 New Lead Received</h1>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Name</strong><br>
                                    <span style="color: #1e293b; font-size: 16px;">${data.fullName}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Email</strong><br>
                                    <a href="mailto:${data.email}" style="color: #1c4b82; font-size: 16px;">${data.email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Budget</strong><br>
                                    <span style="color: #059669; font-size: 16px; font-weight: 600;">${data.budgetRange}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Timeline</strong><br>
                                    <span style="color: #1e293b; font-size: 16px;">${data.timeline}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0;">
                                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Project Details</strong><br>
                                    <p style="color: #1e293b; font-size: 14px; line-height: 1.6; margin: 8px 0 0 0; white-space: pre-wrap;">${data.projectDetails}</p>
                                </td>
                            </tr>
                        </table>
                        
                        <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e2e8f0; text-align: center;">
                            <a href="mailto:${data.email}?subject=Re: Your Mac Hive Inquiry" 
                               style="display: inline-block; background: #1c4b82; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                                Reply to Lead
                            </a>
                        </div>
                    </div>
                    
                    <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 20px;">
                        Submitted on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
                    </p>
                </div>
            `,
        });
    } catch (error) {
        console.error('Failed to send email notification:', error);
        // Don't throw - email failure shouldn't break form submission
    }
}
