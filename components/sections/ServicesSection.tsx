import { Globe, Wrench, Bot, Layers, CheckCircle2 } from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Workflow Audits",
        tagline: "Turn pain into a scoped plan.",
        description:
            "Start with the workflow that is already wasting time. We map the current process, identify the real bottleneck, and turn it into a focused execution plan.",
        includes: [
            "Workflow Mapping",
            "Bottleneck Diagnosis",
            "Tooling Review",
            "Fix Options",
            "Implementation Scope",
        ],
        color: "text-primary",
        bg: "bg-accent dark:bg-primary/10",
        border: "border-primary/20 hover:border-primary/50",
    },
    {
        icon: Wrench,
        title: "Internal Tools",
        tagline: "Operator surfaces that make work easier.",
        description:
            "Admin panels, dashboards, approval flows, onboarding systems, and internal consoles built around how your team actually works.",
        includes: [
            "Dashboards",
            "Internal Tools",
            "Admin Panels",
            "Approval Workflows",
            "Ops Consoles",
        ],
        color: "text-emerald-600",
        bg: "bg-secondary dark:bg-emerald-900/20",
        border: "border-emerald-200 hover:border-emerald-500/50",
    },
    {
        icon: Bot,
        title: "Automation Sprints",
        tagline: "Remove repeated manual work.",
        description:
            "We connect the tools you already use and remove repetitive work around reporting, routing, reminders, exports, and handoffs.",
        includes: [
            "Report Automation",
            "Routing & Reminders",
            "Spreadsheet Cleanup",
            "Ops Integrations",
            "Process Automation",
        ],
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-500/10",
        border: "border-orange-200 hover:border-orange-400/50",
    },
    {
        icon: Layers,
        title: "Ongoing Optimization",
        tagline: "Keep the system sharp after launch.",
        description:
            "After the first workflow win lands, we stay involved to improve reliability, expand the system, refine reporting, and support the next high-value fix.",
        includes: [
            "Monthly Support",
            "Workflow Expansion",
            "Reporting Improvements",
            "Next-Step Roadmaps",
        ],
        color: "text-purple-600",
        bg: "bg-purple-50 dark:bg-purple-500/10",
        border: "border-purple-200 hover:border-purple-400/50",
    },
];

export function ServicesSection() {
    return (
        <section
            id="services"
            className="w-full bg-white dark:bg-slate-900/50 py-24 px-6 lg:px-20 border-y border-slate-100 dark:border-slate-800"
        >
            <div className="mx-auto max-w-[1440px]">
                <div className="mb-14 flex flex-col gap-4 text-center items-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">
                        What We Build
                    </span>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                        Global Offers Built Around Real Workflow Pain
                    </h2>
                    <p className="max-w-xl text-slate-600 dark:text-slate-400">
                        MacHive does not start with random app ideas. We start
                        with a workflow that is already costing time, visibility,
                        revenue, or lead follow-up quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className={`group flex flex-col gap-6 rounded-2xl border ${service.border} bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                            >
                                <div
                                    className={`flex h-13 w-13 items-center justify-center rounded-xl ${service.bg} ${service.color} h-[52px] w-[52px]`}
                                >
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm font-semibold ${service.color}`}>
                                        {service.tagline}
                                    </p>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="flex flex-col gap-2 mt-auto">
                                    {service.includes.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                                        >
                                            <CheckCircle2
                                                className={`h-4 w-4 shrink-0 ${service.color}`}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
