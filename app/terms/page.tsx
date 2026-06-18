import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Machive",
    description:
        "The terms that govern working with Machive. Written in plain language.",
    robots: { index: false, follow: false },
    alternates: { canonical: "https://machive.in/terms" },
};

export default function TermsPage() {
    return (
        <main className="w-full px-6 py-24 lg:px-20">
            <div className="mx-auto max-w-3xl">
                <div className="mb-14">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">
                        Legal
                    </span>
                    <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                        Terms of Service
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
                            These terms apply when you engage Machive for any service: a
                            website, software build, automation project, or consultation.
                            By working with us, you agree to what&apos;s below. We&apos;ve
                            kept it plain and practical.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Who this is
                        </h2>
                        <p>
                            Machive is a software development practice run by Mohammed Haris,
                            based in Coimbatore, India. All engagements are contracted
                            directly with Mohammed Haris as the service provider.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Scope of work
                        </h2>
                        <p>
                            Every project starts with a defined scope: features, deliverables,
                            timeline, and cost, agreed in writing before any work begins. Work
                            outside that scope is treated as a separate engagement and priced
                            accordingly. If something is unclear, ask upfront. We&apos;d rather
                            spend an extra hour scoping than have a disagreement mid-project.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Payment
                        </h2>
                        <p>
                            Payment terms are agreed per project: typically a deposit to start,
                            milestone payments during the build, and a final payment on delivery.
                            Invoices are due within the timeframe stated on the invoice.
                        </p>
                        <p className="mt-3">
                            Work stops if invoices go significantly overdue. We&apos;ll always
                            let you know before that happens.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Intellectual property
                        </h2>
                        <p>
                            Once a project is paid in full, you own the work we built for you.
                            That includes source code, design files, and any other deliverables
                            specified in the project agreement.
                        </p>
                        <p className="mt-3">
                            We may use the project in our portfolio and mention it as a case
                            study unless you ask us not to. Just let us know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Your responsibilities
                        </h2>
                        <p>
                            Projects go smoothly when clients are responsive and provide content,
                            access, and feedback on time. Delays on your side may push timelines
                            out. We&apos;ll flag if that&apos;s happening.
                        </p>
                        <p className="mt-3">
                            You are responsible for ensuring that any content, data, or materials
                            you provide do not infringe third-party rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Confidentiality
                        </h2>
                        <p>
                            We treat your business information as confidential by default.
                            We won&apos;t share project details, pricing, or business data
                            with third parties. If you need a formal NDA, we&apos;re happy
                            to sign one.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Warranties and liability
                        </h2>
                        <p>
                            We build software to a professional standard and stand behind our
                            work. If something we built has a bug or doesn&apos;t function as
                            agreed, we&apos;ll fix it.
                        </p>
                        <p className="mt-3">
                            That said, software exists in complex environments. We are not liable
                            for losses arising from third-party systems, hosting providers, or
                            changes outside our control. Our total liability for any project is
                            capped at the amount paid for that project.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Cancellations
                        </h2>
                        <p>
                            Either party can terminate a project with written notice. Work
                            completed up to that point is billable. Deposits are non-refundable
                            unless we have failed to begin work within the agreed timeline.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Governing law
                        </h2>
                        <p>
                            These terms are governed by the laws of India. Any disputes will be
                            resolved in the courts of Coimbatore, Tamil Nadu.
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
                            . We&apos;re easy to reach.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
