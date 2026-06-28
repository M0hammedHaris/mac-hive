import { Clock, Building2, Zap, Layers } from "lucide-react";

const stats = [
    {
        icon: Clock,
        value: "6+ Years",
        label: "Building production software",
        color: "text-primary",
        bg: "bg-accent dark:bg-primary/10",
    },
    {
        icon: Building2,
        value: "300+ Environments",
        label: "Software delivered across live client environments",
        color: "text-emerald-600",
        bg: "bg-secondary dark:bg-emerald-900/20",
    },
    {
        icon: Zap,
        value: "3h → <10m",
        label: "Real provisioning automation improvement",
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-500/10",
    },
    {
        icon: Layers,
        value: "End-to-End",
        label: "From idea to deployment",
        color: "text-purple-600",
        bg: "bg-purple-50 dark:bg-purple-500/10",
    },
];

export function TrustStats() {
    return (
        <section className="w-full bg-white dark:bg-slate-900/50 py-16 px-6 lg:px-20 border-y border-slate-100 dark:border-slate-800">
            <div className="mx-auto max-w-[1440px]">
                <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-10">
                    Trusted Engineering Experience
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.value}
                                className="flex flex-col items-center gap-3 rounded-2xl p-6 text-center border border-slate-100 dark:border-slate-800 bg-background hover:shadow-md transition-all duration-300"
                            >
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}
                                >
                                    <Icon className="h-6 w-6" />
                                </div>
                                <p className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
