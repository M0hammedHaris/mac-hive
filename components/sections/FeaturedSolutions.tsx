import { CheckCircle2 } from "lucide-react";

const solutions = [
    {
        badge: "Construction",
        badgeColor: "text-orange-600 bg-orange-500/10",
        title: "Construction Lead Management System",
        description:
            "A full lead pipeline for construction businesses, from first inquiry to signed contract. No lead goes untracked.",
        features: [
            "Lead Capture",
            "Site Inquiry Forms",
            "WhatsApp Notifications",
            "Admin Dashboard",
        ],
        color: "text-orange-500",
    },
    {
        badge: "Manufacturing",
        badgeColor: "text-blue-600 bg-blue-500/10",
        title: "Manufacturing Workflow System",
        description:
            "End-to-end production visibility. Track jobs, generate reports, and manage teams across your factory floor.",
        features: ["Job Tracking", "Reporting", "Team Management"],
        color: "text-primary",
    },
    {
        badge: "Marketing / AI",
        badgeColor: "text-purple-600 bg-purple-500/10",
        title: "AI Marketing Platform",
        description:
            "Generate ad creatives, manage campaigns, and track performance. All powered by AI. Based on our live Ad Hive product.",
        features: [
            "Creative Generation",
            "Campaign Management",
            "Analytics",
        ],
        color: "text-purple-600",
    },
    {
        badge: "Finance",
        badgeColor: "text-emerald-600 bg-emerald-500/10",
        title: "Finance Tracking Platform",
        description:
            "Give your team full visibility into spend, budgets, and financial health. Based on our live Salary Man product.",
        features: [
            "Expense Tracking",
            "Budget Management",
            "Reporting",
        ],
        color: "text-emerald-600",
    },
];

export function FeaturedSolutions() {
    return (
        <section
            id="solutions"
            className="w-full bg-white dark:bg-slate-900/50 py-24 px-6 lg:px-20 border-y border-slate-100 dark:border-slate-800"
        >
            <div className="mx-auto max-w-[1440px]">
                <div className="mb-14 flex flex-col gap-4 text-center items-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">
                        Featured Solutions
                    </span>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                        Real Business Problems, Solved
                    </h2>
                    <p className="max-w-xl text-slate-600 dark:text-slate-400">
                        No tech demos. These are real problems businesses hired us to solve.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solutions.map((solution) => (
                        <div
                            key={solution.title}
                            className="group flex flex-col gap-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background p-8 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-bold ${solution.badgeColor}`}
                                >
                                    {solution.badge}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                {solution.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {solution.description}
                            </p>
                            <ul className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                                {solution.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-1.5 text-sm text-slate-700 dark:text-slate-300"
                                    >
                                        <CheckCircle2
                                            className={`h-3.5 w-3.5 shrink-0 ${solution.color}`}
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
