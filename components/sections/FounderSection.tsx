import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    ArrowRight,
    Award,
    Cloud,
    Code,
    Database,
    Cpu,
} from "lucide-react";

const specializations = [
    { icon: Database, label: "Backend Systems" },
    { icon: Cpu, label: "Automation" },
    { icon: Cloud, label: "Cloud Infrastructure" },
    { icon: Code, label: "Product Engineering" },
    { icon: Award, label: "Business Software" },
];

export function FounderSection() {
    return (
        <section
            id="about"
            className="w-full bg-white dark:bg-slate-900/50 py-24 px-6 lg:px-20 border-y border-slate-100 dark:border-slate-800"
        >
            <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex justify-center lg:justify-start">
                    <div className="relative">
                        <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-accent to-secondary dark:from-primary/20 dark:to-emerald-900/20 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-2xl">
                            <span className="text-8xl select-none">👨‍💻</span>
                        </div>
                        <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2">
                            <span className="text-xl">🇮🇳</span>
                            <div>
                                <p className="text-xs font-bold text-slate-900 dark:text-white">
                                    Based in India · Working Worldwide
                                </p>
                                <p className="text-xs text-slate-500">
                                    6+ Years Experience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">
                        The Engineer Behind Machive
                    </span>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl leading-tight">
                        Meet Mohammed Haris
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        I&apos;ve been building production software for six years:
                        websites, automation tools, cloud systems, dashboards,
                        internal tools, SaaS platforms, and operator-facing
                        products. Before starting Machive, I helped ship
                        software that now runs across 300+ live client
                        environments.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Most agencies hide who&apos;s actually doing the work. At
                        Machive, you work directly with me from discovery
                        through delivery. I care most about shipping practical
                        systems that improve lead flow, visibility, operations,
                        and execution before the scope gets bigger.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                        {specializations.map((spec) => {
                            const Icon = spec.icon;
                            return (
                                <div
                                    key={spec.label}
                                    className="flex items-center gap-1.5 rounded-full bg-accent dark:bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
                                >
                                    <Icon className="h-3.5 w-3.5" />
                                    {spec.label}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Link href="/contact">
                            <Button className="gap-2">
                                Request a Discovery Call
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link
                            href="https://linkedin.com/in/mohammed-haris-k"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" className="gap-2">
                                LinkedIn Profile
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
