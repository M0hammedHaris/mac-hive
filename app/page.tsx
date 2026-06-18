import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { ProblemsWeSolve } from "@/components/sections/ProblemsWeSolve";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { FeaturedSolutions } from "@/components/sections/FeaturedSolutions";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyMachive } from "@/components/sections/WhyMachive";
import { PricingSection } from "@/components/sections/PricingSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQSchema } from "@/components/seo/JsonLd";

const faqItems = [
    {
        question: "How much does a project cost?",
        answer: "It depends on what you need. Most projects land somewhere between ₹35,000 and ₹5,00,000+. A 30-minute call is usually enough to give you a rough number.",
    },
    {
        question: "Do you provide hosting?",
        answer: "Yes. I handle hosting, domain setup, SSL, and AWS infrastructure. You own everything. I just set it up and keep it running.",
    },
    {
        question: "Do you provide maintenance and support?",
        answer: "Yes. Ongoing support plans are available after launch. Bug fixes, new features, performance. I stay on as your technical partner.",
    },
    {
        question: "Can you automate my existing business processes?",
        answer: "It's what I work on most often, honestly. Tell me what your team does manually and I'll tell you what can be automated and roughly what you'd save.",
    },
    {
        question: "Can you build mobile apps?",
        answer: "Yes. Android and iOS, native or cross-platform. I'll recommend the right approach based on what you're building and your budget.",
    },
];

export default function Home() {
    return (
        <div className="flex flex-col items-center w-full">
            <FAQSchema items={faqItems} />
            <Hero />
            <TrustStats />
            <ProblemsWeSolve />
            <ServicesSection />
            <IndustriesSection />
            <FeaturedSolutions />
            <ProcessSection />
            <WhyMachive />
            <PricingSection />
            <FounderSection />
            <FAQSection />
            <FinalCTA />
        </div>
    );
}
