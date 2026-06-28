import React from "react";
import Link from "next/link";
import {
    Search,
    Wrench,
    Bot,
    Layers,
    ArrowRight,
    CheckCircle2,
    Workflow,
    Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Machive — Workflow Audits, Internal Tools & Dashboards",
    description:
        "Machive helps founders and operations teams worldwide fix manual workflows with workflow audits, automation sprints, internal tools, dashboards, and ongoing optimization.",
    alternates: {
        canonical: "https://machive.in/services",
    },
    openGraph: {
        title: "Services | Machive — Workflow Audits, Internal Tools & Dashboards",
        description:
            "Workflow audits, automation sprints, internal tools, dashboards, and ongoing optimization built end-to-end by a senior engineer.",
    },
};

const serviceSections = [
    {
        icon: Search,
        eyebrow: "Start here",
        title: "Workflow Audits",
        description:
            "We begin by understanding the workflow that is already breaking: manual onboarding, messy reporting, approval chaos, support triage, exports, or scattered admin work.",
        bullets: [
            "Current-process mapping",
            "Bottleneck diagnosis",
            "Tooling and handoff review",
            "Fix options with scope and priorities",
        ],
    },
    {
        icon: Bot,
        eyebrow: "Fastest win",
        title: "Automation Sprints",
        description:
            "Focused delivery for a painful operational step. We connect tools, clean up routing, automate reminders, improve reporting, and remove repeated manual work.",
        bullets: [
            "Reporting automation",
            "Routing and reminder flows",
            "Spreadsheet/process cleanup",
            "Integrations around existing tools",
        ],
    },
    {
        icon: Wrench,
        eyebrow: "Operator leverage",
        title: "Internal Tools & Dashboards",
        description:
            "When teams need a better operating surface, we build admin panels, dashboards, onboarding systems, approval flows, and internal consoles around how the team actually works.",
        bullets: [
            "Admin panels",
            "Ops dashboards",
            "Approval workflows",
            "Onboarding and support systems",
        ],
    },
    {
        icon: Layers,
        eyebrow: "After launch",
        title: "Ongoing Optimization",
        description:
            "After the first win lands, we help improve reliability, refine reporting, add the next workflow layer, and stay involved where ongoing support is useful.",
        bullets: [
            "Support and iteration",
            "Workflow expansion",
            "Reporting refinements",
            "Next-step roadmap",
        ],
    },
];

const fitExamples = [
    {
        icon: Workflow,
        title: "What fits best",
        points: [
            "Manual onboarding and customer ops",
            "Reporting, exports, and status visibility",
            "Approval bottlenecks and handoff chaos",
            "Internal admin tools teams keep delaying",
        ],
    },
    {
        icon: Database,
        title: "What we build around",
        points: [
            "Spreadsheets, Notion, Slack, email, CRMs",
            "Existing tools your team already uses",
            "Operator workflows that need one clean surface",
            "Repeated problems that may become reusable systems later",
        ],
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col text-slate-900 dark:text-gray-100">
            <section className="relative px-6 lg:px-40 py-20 lg:py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Global problem-led delivery
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
                        Fix the workflow. <br />
                        <span className="text-primary italic">Then scale the system.</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Machive helps founders and operations teams worldwide remove
                        manual work with workflow audits, automation sprints,
                        internal tools, dashboards, and ongoing optimization —
                        all owned end-to-end by a senior engineer.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button className="h-14 px-10 text-lg shadow-xl shadow-primary/30 gap-2">
                                Book a Discovery Call
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="outline" className="h-14 px-10 text-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                                Explore Solutions
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px]"></div>
            </section>

            <section className="px-6 lg:px-40 py-24 bg-white dark:bg-background-dark/50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {fitExamples.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/40 p-8 shadow-sm"
                            >
                                <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-6">
                                    <Icon size={28} />
                                </div>
                                <h2 className="text-2xl font-black tracking-tight mb-4">
                                    {item.title}
                                </h2>
                                <div className="space-y-3">
                                    {item.points.map((point) => (
                                        <div key={point} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="px-6 lg:px-40 py-24">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            Service ladder
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                            Start small. Prove the fix. Expand only when it pays.
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            This is how Macive works best for growing teams: find the
                            painful workflow, ship the right fix, and only move toward a
                            bigger system or support plan once the result is proven.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {serviceSections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <div
                                    key={section.title}
                                    className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/40 p-8 shadow-sm hover:shadow-xl transition-shadow"
                                >
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                                        <Icon size={14} />
                                        {section.eyebrow}
                                    </div>
                                    <h3 className="text-3xl font-black tracking-tight mb-4">
                                        {section.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                        {section.description}
                                    </p>
                                    <div className="space-y-3">
                                        {section.bullets.map((bullet) => (
                                            <div key={bullet} className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {bullet}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="px-6 lg:px-40 py-24 bg-white dark:bg-background-dark/50">
                <div className="max-w-[1200px] mx-auto rounded-[32px] bg-slate-950 text-white p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.16),transparent_30%)]"></div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6">
                            Good fit examples
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-6">
                            Bring the broken workflow — not a vague app idea.
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                            The best projects start when the problem is already visible:
                            a founder still doing onboarding manually, an ops team buried in
                            exports, support triage with no clear queue, or a reporting flow
                            that wastes half a day every week.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-300">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Manual onboarding and activation ops</div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Reporting, exports, and admin visibility</div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Approval workflows and messy handoffs</div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Support queues and internal operator tools</div>
                        </div>
                    </div>
                    <div className="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                            Typical path
                        </div>
                        <div className="space-y-4">
                            {[
                                "Workflow audit",
                                "Automation sprint",
                                "Internal tool or ops dashboard",
                                "Optimization or next workflow module",
                            ].map((step, index) => (
                                <div key={step} className="flex items-start gap-4">
                                    <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <div className="font-semibold">{step}</div>
                                        <div className="text-sm text-slate-400">
                                            {index === 0 && "Scope the real problem before building."}
                                            {index === 1 && "Ship the smallest high-value fix first."}
                                            {index === 2 && "Add a cleaner operating surface for the team."}
                                            {index === 3 && "Only when repeated demand proves it should exist."}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
