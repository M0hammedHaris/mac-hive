import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Mac Hive",
    description: "Learn how Mac Hive collects, uses, and protects your personal information when you use our services.",
    openGraph: {
        title: "Privacy Policy | Mac Hive",
        description: "Our commitment to protecting your privacy and personal data.",
    },
    alternates: {
        canonical: "https://machive.in/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            {/* Header */}
            <div className="mb-12">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                    Legal
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                    Privacy Policy
                </h1>
                <p className="text-slate-600 dark:text-slate-400">
                    Last updated: February 9, 2026
                </p>
            </div>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        1. Introduction
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Mac Hive (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>machive.in</strong> or use our SaaS development and publishing services.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        By accessing our website or engaging our services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our services.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        2. Information We Collect
                    </h2>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        2.1 Information You Provide
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        When you fill out our contact form or engage our services, we collect:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                        <li><strong>Contact Information:</strong> Your full name and email address</li>
                        <li><strong>Project Details:</strong> Budget range, timeline preferences, and project descriptions</li>
                        <li><strong>Communication Data:</strong> Any messages or inquiries you send us</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        2.2 Automatically Collected Information
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        When you visit our website, we may automatically collect:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                        <li>Device and browser information</li>
                        <li>IP address and approximate location</li>
                        <li>Pages visited and time spent on site</li>
                        <li>Referring website addresses</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        3. How We Use Your Information
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Evaluate and manage project proposals</li>
                        <li>Send you updates about our services (with your consent)</li>
                        <li>Improve our website and services</li>
                        <li>Comply with legal obligations</li>
                        <li>Maintain internal records for CRM and business operations</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        4. Data Protection & Security
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        We implement appropriate technical and organizational measures to protect your personal data, including:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                        <li>Encrypted data transmission (HTTPS/TLS)</li>
                        <li>Secure cloud infrastructure with industry-standard security</li>
                        <li>Limited access to personal data on a need-to-know basis</li>
                        <li>Regular security assessments and updates</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        5. Data Sharing & Disclosure
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        We do not sell, trade, or rent your personal information. We may share your data with:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                        <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our business (e.g., hosting, analytics)</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        6. Your Rights
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        Depending on your location, you may have the following rights:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                        <li><strong>Access:</strong> Request a copy of your personal data</li>
                        <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                        <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                        <li><strong>Restriction:</strong> Limit how we process your data</li>
                        <li><strong>Portability:</strong> Receive your data in a portable format</li>
                        <li><strong>Objection:</strong> Object to certain processing activities</li>
                    </ul>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                        To exercise these rights, please contact us at the email provided below.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        7. Data Retention
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Contact form submissions are typically retained for up to 3 years for business development and follow-up purposes.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        8. Cookies
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        9. Third-Party Links
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        10. Changes to This Policy
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this policy periodically.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        11. Contact Us
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:
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
            </div>
        </div>
    );
}
