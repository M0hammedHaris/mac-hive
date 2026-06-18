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

export default function Home() {
    return (
        <div className="flex flex-col items-center w-full">
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
