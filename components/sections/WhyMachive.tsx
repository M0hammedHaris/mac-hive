import { CheckCircle2 } from "lucide-react";

const points = [
    {
        title: "Senior Engineering Expertise",
        description:
            "You work directly with a senior engineer, not outsourced to a junior team.",
    },
    {
        title: "Full Ownership from Idea to Deployment",
        description:
            "One partner owns the entire delivery: design, code, infrastructure, and launch.",
    },
    {
        title: "Automation-First Approach",
        description:
            "Every system we build is designed with automation in mind from the ground up.",
    },
    {
        title: "Modern Cloud Infrastructure",
        description:
            "AWS-powered, production-grade infrastructure. Scalable, monitored, and secure.",
    },
    {
        title: "Long-Term Technical Partner",
        description:
            "We stick around after launch. Ongoing support, improvements, and new features.",
    },
    {
        title: "Focused on Business Results",
        description:
            "Technology is a means, not the goal. Every decision is tied back to your business outcomes.",
    },
];

export function WhyMachive() {
    return (
        <section className="w-full bg-white dark:bg-slate-900/50 py-24 px-6 lg:px-20 border-y border-slate-100 dark:border-slate-800">
            <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left */}
                <div className="flex flex-col gap-6">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">
                        Why Machive
                    </span>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl leading-tight">
                        Why Businesses Choose Machive
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        No account managers, no subcontracting, no revolving door of juniors. You talk directly to the engineer writing your code.
                    </p>
                </div>

                {/* Right — checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {points.map((point) => (
                        <div
                            key={point.title}
                            className="flex gap-3 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-background hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                        >
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white text-sm">
                                    {point.title}
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
