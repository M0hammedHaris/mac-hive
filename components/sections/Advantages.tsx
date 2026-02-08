import { Lightbulb, Bot, Rocket } from "lucide-react";

export function Advantages() {
    const advantages = [
        {
            icon: <Lightbulb className="h-8 w-8" />,
            title: "Rapid Prototyping",
            description:
                "Visualizing ideas into interactive, high-fidelity MVPs instantly. We focus on validation before massive scaling.",
            color: "text-primary",
            bgColor: "bg-accent dark:bg-primary/10",
        },
        {
            icon: <Bot className="h-8 w-8" />,
            title: "Agentic Coding",
            description:
                "Harnessing AI agents to write, test, and optimize production-grade code autonomously, reducing human error and dev cycles.",
            color: "text-emerald-600",
            bgColor: "bg-secondary dark:bg-emerald-900/10",
        },
        {
            icon: <Rocket className="h-8 w-8" />,
            title: "Instant Deploy",
            description:
                "Streamlined CI/CD pipelines paired with serverless architecture for immediate, global market entry.",
            color: "text-orange-500",
            bgColor: "bg-orange-50 dark:bg-orange-500/10",
        },
    ];

    return (
        <section id="services" className="w-full bg-white dark:bg-slate-900/50 py-24 px-6 lg:px-20 border-y border-slate-100 dark:border-slate-800">
            <div className="mx-auto max-w-[1440px]">
                <div className="mb-16 flex flex-col gap-4 text-center items-center">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                        The Mac Hive Advantage
                    </h2>
                    <p className="max-w-2xl text-slate-600 dark:text-slate-400">
                        Our core pillars for delivering high-performance SaaS products that outpace the competition.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {advantages.map((adv, index) => (
                        <div
                            key={index}
                            className="group flex flex-col gap-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-background-dark p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-xl ${adv.bgColor} ${adv.color}`}
                            >
                                {adv.icon}
                            </div>
                            <div>
                                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                                    {adv.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {adv.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
