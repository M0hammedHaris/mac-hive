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
        question: "What kind of work is the best fit for Machive?",
        answer: "The best fit is a workflow that is already painful: manual onboarding, reporting bottlenecks, approvals, support triage, exports, dashboards, or messy handoffs between tools.",
    },
    {
        question: "How do projects usually start?",
        answer: "Most engagements start with a workflow audit or a focused automation sprint. We define the smallest high-value fix before talking about bigger systems or product ideas.",
    },
    {
        question: "Do you work only with local clients?",
        answer: "No. Machive is based in India and works worldwide. The delivery model is async-friendly, milestone-based, and built for global founder and operations teams.",
    },
    {
        question: "Do you only take large projects?",
        answer: "No. Many engagements start with a focused workflow audit or automation sprint. The goal is to fix the highest-value bottleneck first, then expand only if the result proves worth it.",
    },
    {
        question: "Do you provide maintenance and support?",
        answer: "Yes. Ongoing support plans are available after launch. Bug fixes, iteration, reporting improvements, and workflow expansion are all possible after the first delivery.",
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
