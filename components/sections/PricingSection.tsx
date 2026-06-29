import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tiers = [
    {
        name: "Lead-Generation Website",
        price: "$2,000+",
        description:
            "A stronger website with better mobile UX, clearer trust signals, and a cleaner inquiry or quote-request flow.",
        highlight: false,
        cta: "Discuss Website Project",
    },
    {
        name: "Internal Automation",
        price: "$3,000+",
        description:
            "A focused system to reduce repetitive ops work around routing, reminders, follow-up, reporting, exports, or admin tasks.",
        highlight: true,
        cta: "Most Popular",
    },
    {
        name: "Dashboard / Admin System",
        price: "$4,000+",
        description:
            "A clearer operating surface for reporting, admin visibility, approvals, internal workflows, and day-to-day decision-making.",
        highlight: false,
        cta: "Discuss Dashboard Project",
    },
    {
        name: "SaaS MVP / Business Software",
        price: "$6,000+",
        description:
            "A scoped MVP or business tool for founders and teams that need real product delivery without overbuilding too early.",
        highlight: false,
        cta: "Scope the Build",
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
                    Global Project Anchors for the Work MacHive Sells
                </h2>
                <p className="max-w-xl text-slate-600 dark:text-slate-400">
                    These are practical starting points from the current
                    playbook. Final pricing depends on scope, urgency,
                    complexity, and how much of the system needs to be built.
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
                The goal is not to chase many tiny projects. One or two strong
                projects per month can be enough to hit the revenue target.
            </p>
        </section>
    );
}
