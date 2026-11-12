import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = {
    title: "Contact Machive — Request a Discovery Call",
    description:
        "Request a discovery call with Machive to discuss websites, lead generation systems, dashboards, automation, internal tools, and business software.",
    openGraph: {
        title: "Contact Machive — Request a Discovery Call",
        description:
            "Let’s discuss the right next step for your website, dashboard, automation, internal tool, or software project.",
    },
    alternates: {
        canonical: "https://machive.in/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="flex w-full flex-col items-center">
            <PageIntro
                title="Tell Us What You Need to Build or Improve."
                lead="Whether you need a better website, stronger lead capture, a reporting dashboard, internal automation, or a focused piece of software, we'll reply with the clearest next step within 24 hours."
            />
            <ContactForm />
        </div>
    );
}
