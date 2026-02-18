import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms & Conditions | Mac Hive",
    description: "Terms and conditions governing the use of Mac Hive's services, including web development, mobile development, and SaaS solutions.",
    openGraph: {
        title: "Terms & Conditions | Mac Hive",
        description: "Our terms of service and conditions for using Mac Hive's development services.",
    },
    alternates: {
        canonical: "https://machive.in/terms",
    },
};

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            {/* Header */}
            <div className="mb-12">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                    Legal
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                    Terms & Conditions
                </h1>
                <p className="text-slate-600 dark:text-slate-400">
                    Last updated: February 18, 2026
                </p>
            </div>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        1. Agreement to Terms
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (the &quot;Client&quot;) and Mac Hive (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your access to and use of our website <strong>machive.in</strong> and our development services.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our services.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        2. Services Overview
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Mac Hive provides the following professional services:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                        <li><strong>Web Development:</strong> Custom web applications built with Next.js, TypeScript, and modern web technologies</li>
                        <li><strong>Mobile Development:</strong> Cross-platform mobile applications using Flutter for iOS and Android</li>
                        <li><strong>SaaS Publishing:</strong> Development and publication of proprietary SaaS products</li>
                        <li><strong>Consulting Services:</strong> Technical consulting and architectural guidance</li>
                    </ul>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Specific services, deliverables, timelines, and pricing are detailed in separate project agreements or statements of work.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        3. Scope of Work and Project Agreements
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Each project engagement is governed by a separate Scope of Work document that includes:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                        <li>Detailed project requirements and specifications</li>
                        <li>Project timeline, milestones, and deliverables</li>
                        <li>Payment terms and schedule</li>
                        <li>Client responsibilities and required inputs</li>
                        <li>Acceptance criteria and review procedures</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        4. Client Obligations
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        As a Client, you agree to:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                        <li>Provide accurate and complete information necessary for project execution</li>
                        <li>Respond to requests for information, feedback, or approvals in a timely manner</li>
                        <li>Ensure that you have the legal right to use any content, materials, or assets provided to us</li>
                        <li>Make payments according to the agreed schedule</li>
                        <li>Not use our services for any unlawful or prohibited purposes</li>
                        <li>Maintain the confidentiality of any access credentials or sensitive information</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        5. Payment Terms
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Payment terms are specified in each project agreement and typically include:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                        <li><strong>Project Fee:</strong> Fixed price, hourly rate, or milestone-based payments as agreed</li>
                        <li><strong>Payment Schedule:</strong> Upfront deposits and milestone payments as outlined in the project agreement</li>
                        <li><strong>Late Payments:</strong> Payments not received within 15 days of the due date may incur a late fee of 1.5% per month</li>
                        <li><strong>Currency:</strong> All fees are quoted and payable in USD unless otherwise specified</li>
                    </ul>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        We reserve the right to suspend work or services if payments are overdue by more than 30 days.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        6. Intellectual Property Rights
                    </h2>
                    
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        6.1 Client-Owned Work
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Upon full payment of all fees, the Client receives ownership of the custom code and deliverables specifically created for their project, subject to the following exceptions.
                    </p>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        6.2 Mac Hive Retained Rights
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        We retain all rights to:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                        <li>Pre-existing tools, libraries, frameworks, and components</li>
                        <li>Generalized methodologies, processes, and techniques developed during the project</li>
                        <li>Our proprietary workflows, documentation templates, and development tools</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        6.3 Third-Party Components
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Projects may incorporate third-party open-source libraries or commercial components subject to their respective licenses. Clients are responsible for compliance with these licenses.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        7. Confidentiality
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Both parties agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the engagement. This obligation continues for 3 years after the termination of services.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Confidential information does not include information that is publicly available, independently developed, or required to be disclosed by law.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        8. Warranties and Disclaimers
                    </h2>
                    
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        8.1 Our Warranties
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        We warrant that:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                        <li>Services will be performed in a professional and workmanlike manner</li>
                        <li>Deliverables will materially conform to the specifications in the Scope of Work</li>
                        <li>We have the right to provide the services and grant the licenses described in these Terms</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        8.2 Disclaimers
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, WE PROVIDE SERVICES &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        We do not warrant that deliverables will be error-free, uninterrupted, or meet all of your requirements. Software development involves inherent complexities, and some issues may only be discovered after deployment.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        9. Limitation of Liability
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                        <li>OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY THE CLIENT IN THE 12 MONTHS PRECEDING THE CLAIM</li>
                        <li>WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA LOSS, BUSINESS INTERRUPTION, OR LOSS OF GOODWILL</li>
                        <li>THESE LIMITATIONS APPLY REGARDLESS OF THE LEGAL THEORY ON WHICH A CLAIM IS BASED</li>
                    </ul>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Some jurisdictions do not allow certain liability exclusions, so these limitations may not apply to you in full.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        10. Maintenance and Support
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Unless explicitly included in a project agreement, ongoing maintenance and support services are not included in project fees. Post-launch support may be available through:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                        <li><strong>Bug Fixes:</strong> Critical bugs discovered within 30 days of launch may be fixed at no charge</li>
                        <li><strong>Maintenance Agreements:</strong> Ongoing support and updates available through separate monthly or annual contracts</li>
                        <li><strong>Ad-Hoc Support:</strong> Billed at our standard hourly rates</li>
                    </ul>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Clients are responsible for maintaining their own hosting environments, backups, and security measures unless otherwise agreed.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        11. Termination
                    </h2>
                    
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        11.1 Termination by Client
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Clients may terminate services with 15 days written notice. Upon termination, the Client is responsible for payment of all work completed up to the termination date, plus any non-refundable expenses incurred.
                    </p>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        11.2 Termination by Mac Hive
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        We may terminate services immediately if:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                        <li>The Client breaches these Terms or any project agreement</li>
                        <li>Payments are more than 30 days overdue</li>
                        <li>The Client engages in unlawful or unethical activities</li>
                        <li>The working relationship becomes untenable</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        11.3 Effect of Termination
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Upon termination, we will provide the Client with all completed work-in-progress in exchange for payment of outstanding fees. Provisions regarding confidentiality, intellectual property, and limitations of liability survive termination.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        12. Changes to Terms
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the new Terms. For active projects, material changes will only apply to new engagements unless mutually agreed.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        13. Governing Law and Dispute Resolution
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be resolved through:
                    </p>
                    <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-400 space-y-2 mb-4">
                        <li><strong>Negotiation:</strong> Good faith negotiations between the parties</li>
                        <li><strong>Mediation:</strong> If negotiation fails, non-binding mediation</li>
                        <li><strong>Arbitration:</strong> Binding arbitration under Indian law if mediation is unsuccessful</li>
                    </ol>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        The exclusive jurisdiction for any legal proceedings shall be the courts of Bangalore, India.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        14. Force Majeure
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Neither party shall be liable for any failure or delay in performing obligations due to circumstances beyond their reasonable control, including but not limited to acts of God, war, terrorism, labor disputes, governmental actions, or technical failures. During such events, deadlines will be extended by a reasonable period.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        15. Miscellaneous
                    </h2>
                    
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        15.1 Entire Agreement
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        These Terms, together with any project-specific agreements, constitute the entire agreement between the parties and supersede all prior communications and proposals.
                    </p>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        15.2 Severability
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect.
                    </p>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        15.3 Waiver
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        No waiver of any term shall be deemed a further or continuing waiver of that term or any other term.
                    </p>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        15.4 Assignment
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        These Terms may not be assigned by either party without the written consent of the other party, except that we may assign these Terms in connection with a merger, acquisition, or sale of all or substantially all of our assets.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        16. Contact Information
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        If you have any questions about these Terms or wish to discuss a project, please contact us:
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                        <p className="text-slate-700 dark:text-slate-300 font-semibold mb-2">Mac Hive</p>
                        <p className="text-slate-600 dark:text-slate-400">
                            Email: <a href="mailto:contact@machive.in" className="text-primary hover:underline">contact@machive.in</a>
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                            Website: <Link href="/" className="text-primary hover:underline">machive.in</Link>
                        </p>
                    </div>
                </section>

                <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <strong>Note:</strong> These Terms & Conditions are provided for informational purposes and represent our standard terms of service. Specific project engagements may be governed by additional or modified terms as outlined in individual agreements. We recommend seeking legal counsel for significant projects or if you have concerns about any provisions.
                    </p>
                </div>
            </div>
        </div>
    );
}
