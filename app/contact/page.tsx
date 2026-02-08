import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Mac Hive to discuss your SaaS project. We build production-ready web and mobile applications in weeks, not months.",
    openGraph: {
        title: "Contact Us | Mac Hive",
        description: "Start your project with Mac Hive. From concept to deployment in weeks.",
    },
    alternates: {
        canonical: "https://machive.in/contact",
    },
};

export default function ContactPage() {
    return <ContactForm />;
}
