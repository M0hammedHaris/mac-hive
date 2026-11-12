import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import {
    LegalDocument,
    LegalLink,
    LegalList,
    LegalSection,
} from "@/components/sections/LegalText";

export const metadata: Metadata = {
    title: "Privacy Policy | Machive",
    description:
        "How Machive handles your information. Plain language, no legal jargon.",
    robots: { index: false, follow: false },
    alternates: { canonical: "https://machive.in/privacy" },
};

export default function PrivacyPage() {
    return (
        <div className="flex w-full flex-col items-center">
            <PageIntro title="Privacy Policy" meta="Last updated: June 2025" />

            <LegalDocument>
                <LegalSection title="The short version">
                    <p>
                        Machive is a solo engineering practice run by Mohammed Haris. We
                        don&apos;t sell your data, we don&apos;t share it with third parties
                        for marketing, and we only collect what we actually need to respond
                        to your enquiry or deliver your project.
                    </p>
                </LegalSection>

                <LegalSection title="What we collect">
                    <p>
                        When you fill out the contact form or send an email, we receive
                        your name, email address, and any project details you share. That
                        information goes directly to us, nowhere else.
                    </p>
                    <p>
                        We may also collect basic analytics data (page views, country,
                        device type) through privacy-respecting tools. No individual users
                        are tracked, and no advertising cookies are used.
                    </p>
                </LegalSection>

                <LegalSection title="How we use it">
                    <LegalList>
                        <li>To respond to your enquiry</li>
                        <li>To scope and deliver your project</li>
                        <li>To send project-related updates and invoices</li>
                        <li>To improve the Machive website and services</li>
                    </LegalList>
                    <p>
                        We will never email you marketing content unless you&apos;ve
                        specifically asked for it.
                    </p>
                </LegalSection>

                <LegalSection title="Who can see your data">
                    <p>
                        Just us. We use a small number of tools to run the business: email,
                        invoicing, project management. Those tools may store data on
                        their own servers. We only use reputable services with their own
                        privacy policies.
                    </p>
                    <p>
                        We do not sell, rent, or trade your personal information.
                    </p>
                </LegalSection>

                <LegalSection title="Cookies">
                    <p>
                        This website uses minimal cookies, only what&apos;s needed for the
                        site to function and for basic analytics. No tracking cookies, no
                        retargeting, no advertising pixels.
                    </p>
                </LegalSection>

                <LegalSection title="Your rights">
                    <p>
                        You can ask us what data we hold on you, request a correction, or
                        ask us to delete it. Just email{" "}
                        <LegalLink href="mailto:mohammedharis.k.01@gmail.com">
                            mohammedharis.k.01@gmail.com
                        </LegalLink>{" "}
                        and we&apos;ll sort it out promptly.
                    </p>
                </LegalSection>

                <LegalSection title="Data security">
                    <p>
                        We take reasonable steps to protect your information. Emails are
                        encrypted in transit. Project files are stored securely. That said,
                        no system is completely foolproof. If you have security concerns
                        about a specific project, just bring it up directly and
                        we&apos;ll handle it appropriately.
                    </p>
                </LegalSection>

                <LegalSection title="Changes to this policy">
                    <p>
                        If we update this policy in a meaningful way, we&apos;ll note it at
                        the top of this page with an updated date. We won&apos;t bury
                        changes in legal language.
                    </p>
                </LegalSection>

                <LegalSection title="Questions?">
                    <p>
                        Email{" "}
                        <LegalLink href="mailto:mohammedharis.k.01@gmail.com">
                            mohammedharis.k.01@gmail.com
                        </LegalLink>
                        . We&apos;ll respond within a business day.
                    </p>
                </LegalSection>
            </LegalDocument>
        </div>
    );
}
