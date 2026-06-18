import { Globe, Wrench, Bot, Smartphone, CheckCircle2 } from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Lead Generation Systems",
        tagline: "Convert visitors into customers.",
        description:
            "We build digital front doors that capture every lead and route them to the right place, automatically.",
        includes: [
            "Business Websites",
            "Landing Pages",
            "Lead Capture Forms",
            "WhatsApp Integration",
            "CRM Integration",
        ],
        color: "text-primary",
        bg: "bg-accent dark:bg-primary/10",
        border: "border-primary/20 hover:border-primary/50",
    },
    {
        icon: Wrench,
        title: "Business Software",
        tagline: "Custom systems built around your workflow.",
        description:
            "Stop bending your operations to fit generic software. We build systems that match the way your business actually runs.",
        includes: [
            "Dashboards",
            "Internal Tools",
            "Admin Panels",
            "Portals",
            "Workflow Management",
        ],
        color: "text-emerald-600",
        bg: "bg-secondary dark:bg-emerald-900/20",
        border: "border-emerald-200 hover:border-emerald-500/50",
    },
    {
        icon: Bot,
        title: "Automation & AI",
        tagline: "Reduce repetitive work.",
        description:
            "Every hour your team spends on repetitive tasks is an hour not spent growing the business. We automate the routine so your team's time goes toward actual work.",
        includes: [
            "Report Automation",
            "WhatsApp Automation",
            "Lead Routing",
            "AI Assistants",
            "Process Automation",
        ],
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-500/10",
        border: "border-orange-200 hover:border-orange-400/50",
    },
    {
        icon: Smartphone,
        title: "Mobile & Web Applications",
        tagline: "Modern applications built for scale.",
        description:
            "Customer portals, SaaS platforms, mobile apps. We build software that works reliably at any scale.",
        includes: [
            "Customer Portals",
            "Mobile Apps",
            "SaaS Platforms",
            "Enterprise Applications",
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
                        Solutions Built Around Business Outcomes
                    </h2>
                    <p className="max-w-xl text-slate-600 dark:text-slate-400">
                        Every engagement starts with understanding your business
                        goal, not picking a technology stack.
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
