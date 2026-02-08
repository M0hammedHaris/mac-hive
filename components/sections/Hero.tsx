import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, Zap } from "lucide-react";

export function Hero() {
    return (
        <section className="w-full px-6 py-12 md:py-24 lg:px-20 max-w-[1440px]">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                <div className="lg:col-span-7 flex flex-col gap-8">
                    <div className="inline-flex w-fit items-center rounded-full bg-accent px-4 py-1.5 dark:bg-primary/20">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">
                            Accelerated Delivery
                        </span>
                    </div>
                    <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-7xl">
                        Building the Future of SaaS at{" "}
                        <span className="text-primary text-gradient">Agentic Speed</span>
                    </h1>
                    <p className="max-w-xl text-lg font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                        From concept to deployment in weeks, not months. We leverage
                        AI-driven development and autonomous agents to build robust, scalable
                        SaaS solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="h-14 text-base">
                                Book a Demo
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 text-base bg-transparent border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                            >
                                View Portfolio
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="lg:col-span-5 relative">
                    <div className="relative aspect-square w-full rounded-3xl bg-gradient-to-tr from-accent to-secondary dark:from-primary/10 dark:to-emerald-500/10 flex items-center justify-center overflow-hidden">
                        {/* Abstract 3D Representation */}
                        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="relative z-10 h-64 w-64 rounded-2xl bg-white/30 backdrop-blur-3xl shadow-2xl border border-white/50 flex items-center justify-center rotate-12">
                            <div className="h-48 w-48 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center -rotate-12">
                                <Sparkles className="h-20 w-20 text-primary animate-pulse" />
                            </div>
                        </div>
                        {/* Floating decorative elements */}
                        <div className="absolute top-10 right-10 h-16 w-16 rounded-full bg-secondary/50 blur-xl"></div>
                        <div className="absolute bottom-20 left-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl"></div>
                    </div>
                    {/* Glass Stat Card */}
                    <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
                        <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                            <Zap className="h-6 w-6 fill-current" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Deploy Speed
                            </p>
                            <p className="text-xl font-black text-slate-900 dark:text-white">
                                14 Days
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
