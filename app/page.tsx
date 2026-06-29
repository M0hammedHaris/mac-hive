import { FAQSchema } from "@/components/seo/JsonLd";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturedSolutions } from "@/components/sections/FeaturedSolutions";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FounderSection } from "@/components/sections/FounderSection";
import { Hero } from "@/components/sections/Hero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProblemsWeSolve } from "@/components/sections/ProblemsWeSolve";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustStats } from "@/components/sections/TrustStats";
import { WhyMachive } from "@/components/sections/WhyMachive";

const faqItems = [
    {
        question: "What kind of work is the best fit for Machive?",
        answer:
            "Machive is a strong fit for businesses that need a better website, stronger lead capture, a reporting dashboard, internal automation, admin tooling, or a scoped software build tied to a clear business problem.",
    },
    {
        question: "How do projects usually start?",
        answer:
            "Most projects start with a discovery conversation and a scoped recommendation. The goal is to define the clearest high-value next step before building anything bigger.",
    },
    {
        question: "Do you work only with local clients?",
        answer:
            "No. Machive is based in India and works worldwide. The delivery model is async-friendly, milestone-based, and built for global founder and business teams.",
    },
    {
        question: "Do you only take large projects?",
        answer:
            "No. Some clients start with a website or focused automation build, while others come in with dashboards, internal tools, or a broader software project. The key is having a clear problem and a realistic scope.",
    },
    {
        question: "Do you provide maintenance and support?",
        answer:
            "Yes. Ongoing support is available after launch for iteration, reporting improvements, system expansion, and follow-through once the first delivery is live.",
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
