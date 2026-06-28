import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
    title: "Contact Machive — Book a Discovery Call",
    description: "Book a discovery call with Machive to discuss broken workflows, automation opportunities, dashboards, internal tools, and ongoing optimization.",
    openGraph: {
        title: "Contact Machive — Book a Discovery Call",
        description: "Let's discuss your workflow pain and the right next step: audit, automation sprint, internal tool, dashboard, or support plan.",
    },
    alternates: {
        canonical: "https://machive.in/contact",
    },
};

export default function ContactPage() {
    return <ContactForm />;
}
