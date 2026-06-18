import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Machive",
    description:
        "How Machive handles your information. Plain language, no legal jargon.",
};

export default function PrivacyPage() {
    return (
        <main className="w-full px-6 py-24 lg:px-20">
            <div className="mx-auto max-w-3xl">
                <div className="mb-14">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">
                        Legal
                    </span>
                    <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-slate-500 dark:text-slate-400">
                        Last updated: June 2025
                    </p>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-600 dark:text-slate-400">

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            The short version
                        </h2>
                        <p>
                            Machive is a solo engineering practice run by Mohammed Haris. We
                            don&apos;t sell your data, we don&apos;t share it with third parties
                            for marketing, and we only collect what we actually need to respond
                            to your enquiry or deliver your project.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            What we collect
                        </h2>
                        <p>
                            When you fill out the contact form or send an email, we receive
                            your name, email address, and any project details you share. That
                            information goes directly to us, nowhere else.
                        </p>
                        <p className="mt-3">
                            We may also collect basic analytics data (page views, country,
                            device type) through privacy-respecting tools. No individual users
                            are tracked, and no advertising cookies are used.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            How we use it
                        </h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>To respond to your enquiry</li>
                            <li>To scope and deliver your project</li>
                            <li>To send project-related updates and invoices</li>
                            <li>To improve the Machive website and services</li>
                        </ul>
                        <p className="mt-3">
                            We will never email you marketing content unless you&apos;ve
                            specifically asked for it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Who can see your data
                        </h2>
                        <p>
                            Just us. We use a small number of tools to run the business: email,
                            invoicing, project management. Those tools may store data on
                            their own servers. We only use reputable services with their own
                            privacy policies.
                        </p>
                        <p className="mt-3">
                            We do not sell, rent, or trade your personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Cookies
                        </h2>
                        <p>
                            This website uses minimal cookies, only what&apos;s needed for the
                            site to function and for basic analytics. No tracking cookies, no
                            retargeting, no advertising pixels.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Your rights
                        </h2>
                        <p>
                            You can ask us what data we hold on you, request a correction, or
                            ask us to delete it. Just email{" "}
                            <a
                                href="mailto:mohammedharis.k.01@gmail.com"
                                className="text-primary hover:underline"
                            >
                                mohammedharis.k.01@gmail.com
                            </a>{" "}
                            and we&apos;ll sort it out promptly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Data security
                        </h2>
                        <p>
                            We take reasonable steps to protect your information. Emails are
                            encrypted in transit. Project files are stored securely. That said,
                            no system is completely foolproof. If you have security concerns
                            about a specific project, just bring it up directly and
                            we&apos;ll handle it appropriately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Changes to this policy
                        </h2>
                        <p>
                            If we update this policy in a meaningful way, we&apos;ll note it at
                            the top of this page with an updated date. We won&apos;t bury
                            changes in legal language.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Questions?
                        </h2>
                        <p>
                            Email{" "}
                            <a
                                href="mailto:mohammedharis.k.01@gmail.com"
                                className="text-primary hover:underline"
                            >
                                mohammedharis.k.01@gmail.com
                            </a>
                            . We&apos;ll respond within a business day.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
