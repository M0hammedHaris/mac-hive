import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
    title: "Contact Machive — Book a Free Consultation",
    description: "Book a free consultation with Machive. Discuss your business goals and identify opportunities for lead generation, automation, and custom software.",
    openGraph: {
        title: "Contact Machive — Book a Free Consultation",
        description: "Let's discuss your business goals. Book a free consultation to explore lead generation, automation, and custom software opportunities.",
    },
    alternates: {
        canonical: "https://machive.in/contact",
    },
};

export default function ContactPage() {
    return <ContactForm />;
}
