import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tiers = [
    {
        name: "Business Website",
        price: "Starting at ₹35,000",
        description:
            "Professional website with lead capture. A clean, fast site that starts capturing leads from day one.",
        highlight: false,
        cta: "Get a Quote",
    },
    {
        name: "Growth System",
        price: "Starting at ₹75,000",
        description:
            "Website + CRM + Automation. A complete lead-generation and follow-up engine.",
        highlight: true,
        cta: "Most Popular",
    },
    {
        name: "Business Software",
        price: "Starting at ₹1.5 Lakh",
        description:
            "Custom workflows and operational systems built around your business processes.",
        highlight: false,
        cta: "Get a Quote",
    },
    {
        name: "Custom Product",
        price: "Custom Quote",
        description:
            "SaaS platforms, mobile apps, enterprise applications. Scope determines pricing.",
        highlight: false,
        cta: "Let's Talk",
    },
];

export function PricingSection() {
    return (
        <section
            id="pricing"
            className="w-full py-24 px-6 lg:px-20 max-w-[1440px]"
        >
            <div className="mb-14 flex flex-col gap-4 text-center items-center">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                    Investment
                </span>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                    Transparent Pricing Ranges
                </h2>
                <p className="max-w-xl text-slate-600 dark:text-slate-400">
                    Final pricing depends on scope and complexity. Every project
                    gets a custom estimate after a free consultation.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tiers.map((tier) => (
                    <div
                        key={tier.name}
                        className={`relative flex flex-col gap-6 rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                            tier.highlight
                                ? "border-primary bg-primary text-white shadow-xl shadow-primary/20"
                                : "border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/30 hover:border-primary/40"
                        }`}
                    >
                        {tier.highlight && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-4 py-1 text-xs font-bold text-emerald-900">
                                Most Popular
                            </div>
                        )}
                        <div>
                            <p
                                className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                                    tier.highlight
                                        ? "text-blue-200"
                                        : "text-slate-400"
                                }`}
                            >
                                {tier.name}
                            </p>
                            <p
                                className={`text-2xl font-black ${
                                    tier.highlight
                                        ? "text-white"
                                        : "text-slate-900 dark:text-white"
                                }`}
                            >
                                {tier.price}
                            </p>
                        </div>
                        <p
                            className={`text-sm leading-relaxed flex-1 ${
                                tier.highlight
                                    ? "text-blue-100"
                                    : "text-slate-600 dark:text-slate-400"
                            }`}
                        >
                            {tier.description}
                        </p>
                        <Link href="/contact">
                            <Button
                                variant={tier.highlight ? "secondary" : "outline"}
                                className={`w-full gap-2 ${
                                    tier.highlight
                                        ? "bg-white text-primary hover:bg-blue-50"
                                        : "border-slate-200 dark:border-slate-700"
                                }`}
                            >
                                {tier.cta}
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>

            <p className="text-center text-sm text-slate-400 mt-8">
                All projects come with a free discovery consultation. No
                commitments until we agree on scope and budget.
            </p>
        </section>
    );
}
