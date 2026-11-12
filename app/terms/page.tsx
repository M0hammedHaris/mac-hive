import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import {
    LegalDocument,
    LegalLink,
    LegalSection,
} from "@/components/sections/LegalText";

export const metadata: Metadata = {
    title: "Terms of Service | Machive",
    description:
        "The terms that govern working with Machive. Written in plain language.",
    robots: { index: false, follow: false },
    alternates: { canonical: "https://machive.in/terms" },
};

export default function TermsPage() {
    return (
        <div className="flex w-full flex-col items-center">
            <PageIntro title="Terms of Service" meta="Last updated: June 2025" />

            <LegalDocument>
                <LegalSection title="The short version">
                    <p>
                        These terms apply when you engage Machive for any service: a
                        website, software build, automation project, or consultation.
                        By working with us, you agree to what&apos;s below. We&apos;ve
                        kept it plain and practical.
                    </p>
                </LegalSection>

                <LegalSection title="Who this is">
                    <p>
                        Machive is a software development practice run by Mohammed Haris,
                        based in Coimbatore, India. All engagements are contracted
                        directly with Mohammed Haris as the service provider.
                    </p>
                </LegalSection>

                <LegalSection title="Scope of work">
                    <p>
                        Every project starts with a defined scope: features, deliverables,
                        timeline, and cost, agreed in writing before any work begins. Work
                        outside that scope is treated as a separate engagement and priced
                        accordingly. If something is unclear, ask upfront. We&apos;d rather
                        spend an extra hour scoping than have a disagreement mid-project.
                    </p>
                </LegalSection>

                <LegalSection title="Payment">
                    <p>
                        Payment terms are agreed per project: typically a deposit to start,
                        milestone payments during the build, and a final payment on delivery.
                        Invoices are due within the timeframe stated on the invoice.
                    </p>
                    <p>
                        Work stops if invoices go significantly overdue. We&apos;ll always
                        let you know before that happens.
                    </p>
                </LegalSection>

                <LegalSection title="Intellectual property">
                    <p>
                        Once a project is paid in full, you own the work we built for you.
                        That includes source code, design files, and any other deliverables
                        specified in the project agreement.
                    </p>
                    <p>
                        We may use the project in our portfolio and mention it as a case
                        study unless you ask us not to. Just let us know.
                    </p>
                </LegalSection>

                <LegalSection title="Your responsibilities">
                    <p>
                        Projects go smoothly when clients are responsive and provide content,
                        access, and feedback on time. Delays on your side may push timelines
                        out. We&apos;ll flag if that&apos;s happening.
                    </p>
                    <p>
                        You are responsible for ensuring that any content, data, or materials
                        you provide do not infringe third-party rights.
                    </p>
                </LegalSection>

                <LegalSection title="Confidentiality">
                    <p>
                        We treat your business information as confidential by default.
                        We won&apos;t share project details, pricing, or business data
                        with third parties. If you need a formal NDA, we&apos;re happy
                        to sign one.
                    </p>
                </LegalSection>

                <LegalSection title="Warranties and liability">
                    <p>
                        We build software to a professional standard and stand behind our
                        work. If something we built has a bug or doesn&apos;t function as
                        agreed, we&apos;ll fix it.
                    </p>
                    <p>
                        That said, software exists in complex environments. We are not liable
                        for losses arising from third-party systems, hosting providers, or
                        changes outside our control. Our total liability for any project is
                        capped at the amount paid for that project.
                    </p>
                </LegalSection>

                <LegalSection title="Cancellations">
                    <p>
                        Either party can terminate a project with written notice. Work
                        completed up to that point is billable. Deposits are non-refundable
                        unless we have failed to begin work within the agreed timeline.
                    </p>
                </LegalSection>

                <LegalSection title="Governing law">
                    <p>
                        These terms are governed by the laws of India. Any disputes will be
                        resolved in the courts of Coimbatore, Tamil Nadu.
                    </p>
                </LegalSection>

                <LegalSection title="Questions?">
                    <p>
                        Email{" "}
                        <LegalLink href="mailto:mohammedharis.k.01@gmail.com">
                            mohammedharis.k.01@gmail.com
                        </LegalLink>
                        . We&apos;re easy to reach.
                    </p>
                </LegalSection>
            </LegalDocument>
        </div>
    );
}
