import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

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
    return <ContactForm />;
}
