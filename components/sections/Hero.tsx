import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Globe,
    LayoutDashboard,
    Smartphone,
    GitBranch,
    ArrowRight,
    TrendingUp,
} from "lucide-react";

const visualCards = [
    {
        icon: Globe,
        label: "Website",
        color: "text-primary",
        bg: "bg-accent dark:bg-primary/10",
    },
    {
        icon: LayoutDashboard,
        label: "Dashboard",
        color: "text-emerald-600",
        bg: "bg-secondary dark:bg-emerald-900/20",
    },
    {
        icon: Smartphone,
        label: "Mobile App",
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-500/10",
    },
    {
        icon: GitBranch,
        label: "Automation",
        color: "text-purple-600",
        bg: "bg-purple-50 dark:bg-purple-500/10",
    },
];

export function Hero() {
    return (
        <section className="w-full px-6 py-16 md:py-28 lg:px-20 max-w-[1440px]">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
                {/* Left content */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                    {/* Badge */}
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent dark:bg-primary/20 px-4 py-1.5">
                        <TrendingUp className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">
                            Business Software & Automation
                        </span>
                    </div>

                    <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-6xl xl:text-7xl">
                        Business Software &amp; Automation That Helps You{" "}
                        <span className="text-gradient">Grow Faster</span>
                    </h1>

                    <p className="max-w-xl text-lg font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                        We build lead-generation websites, custom business
                        software, automation systems, and AI-powered solutions
                        that cut manual work so businesses can actually grow.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="h-14 text-base gap-2 shadow-lg shadow-primary/20"
                            >
                                Book a Free Consultation
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 text-base bg-transparent border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                            >
                                View Our Work
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right visual — 4 connected product cards */}
                <div className="lg:col-span-5 relative">
                    <div className="relative rounded-3xl bg-gradient-to-br from-accent via-white to-secondary dark:from-primary/10 dark:via-slate-900 dark:to-emerald-900/10 p-6 border border-slate-100 dark:border-slate-800 shadow-2xl">
                        {/* Connection lines (decorative SVG) */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-10"
                            aria-hidden="true"
                        >
                            <line
                                x1="50%"
                                y1="30%"
                                x2="50%"
                                y2="70%"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                                className="text-primary"
                            />
                            <line
                                x1="25%"
                                y1="50%"
                                x2="75%"
                                y2="50%"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                                className="text-primary"
                            />
                        </svg>

                        <div className="grid grid-cols-2 gap-4">
                            {visualCards.map((card) => {
                                const Icon = card.icon;
                                return (
                                    <div
                                        key={card.label}
                                        className={`flex flex-col items-center gap-3 rounded-2xl ${card.bg} p-5 border border-white/60 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
                                    >
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-sm ${card.color}`}
                                        >
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                                            {card.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Floating outcome badge */}
                        <div className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 shadow-md">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600">
                                <TrendingUp className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                    All connected. All delivering results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
