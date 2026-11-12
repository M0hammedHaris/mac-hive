import { FAQSchema } from "@/components/seo/JsonLd";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { OfferSection } from "@/components/sections/OfferSection";
import { ProblemsWeSolve } from "@/components/sections/ProblemsWeSolve";
import { ProofSection } from "@/components/sections/ProofSection";
import { WorkingTogether } from "@/components/sections/WorkingTogether";
import { StickyCta } from "@/components/layout/StickyCta";

// One list feeds both the visible FAQ and the FAQPage JSON-LD.
const faqItems = [
    {
        question: "What kind of work is the best fit for Machive?",
        answer:
            "Work that fixes a clear business problem. For example: a better website that captures more leads, a reporting dashboard, automation of repeated tasks, admin tools, or a focused piece of software.",
    },
    {
        question: "How do projects usually start?",
        answer:
            "Most projects start with a discovery call. After it, I suggest the most useful first step and send a written quote. Nothing bigger is built until that first step is clear.",
    },
    {
        question: "Do you work only with local clients?",
        answer:
            "No. Machive is based in India and works with clients worldwide. You do not need to share a time zone: most updates happen in writing, and the work is delivered in agreed stages.",
    },
    {
        question: "Do you only take large projects?",
        answer:
            "No. Some clients start with a website or one automation. Others start with a dashboard, an internal tool or a larger software project. What matters is a clear problem and a realistic plan.",
    },
    {
        question: "Do you provide maintenance and support?",
        answer:
            "Yes. Support continues after launch if you want it: changes and improvements, better reports, and new parts added as the business grows.",
    },
];

export default function Home() {
    return (
        <div className="flex w-full flex-col items-center">
            <FAQSchema items={faqItems} />
            <Hero />
            <ProblemsWeSolve />
            <ProofSection />
            <OfferSection />
            <WorkingTogether />
            <FAQSection items={faqItems} />
            <FinalCTA />
            <StickyCta />
        </div>
    );
}
