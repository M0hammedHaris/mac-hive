const steps = [
    {
        number: "01",
        title: "Discover",
        description:
            "Start by understanding the business problem clearly: website conversion, weak lead capture, reporting friction, manual ops, or a missing internal tool.",
        color: "text-primary",
        bg: "bg-accent dark:bg-primary/10",
    },
    {
        number: "02",
        title: "Scope",
        description:
            "Define the clearest high-value next step with practical scope, milestones, and the smallest build that can create real business value.",
        color: "text-emerald-600",
        bg: "bg-secondary dark:bg-emerald-900/20",
    },
    {
        number: "03",
        title: "Build",
        description:
            "Ship the website, dashboard, automation, or software layer that solves the problem without turning it into a bloated project.",
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-500/10",
    },
    {
        number: "04",
        title: "Launch",
        description:
            "Deploy cleanly, validate the result, and make sure the new system is actually usable by the team or customers it was built for.",
        color: "text-purple-600",
        bg: "bg-purple-50 dark:bg-purple-500/10",
    },
    {
        number: "05",
        title: "Expand",
        description:
            "Once the first result proves useful, improve the system, add the next workflow layer, and define the right long-term support path.",
        color: "text-rose-500",
        bg: "bg-rose-50 dark:bg-rose-500/10",
    },
];

export function ProcessSection() {
    return (
        <section className="w-full py-24 px-6 lg:px-20 max-w-[1440px]">
            <div className="mb-14 flex flex-col gap-4 text-center items-center">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                    The Process
                </span>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                    How the MacHive Process Works
                </h2>
                <p className="max-w-xl text-slate-600 dark:text-slate-400">
                    We move from a clear business problem to a scoped build and
                    then to a cleaner system that can keep improving without
                    unnecessary complexity.
                </p>
            </div>

            <div className="relative">
                <div className="hidden lg:block absolute top-11 left-0 right-0 h-px bg-slate-100 dark:bg-slate-800 z-0" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="flex flex-col items-center gap-4 text-center group"
                        >
                            <div
                                className={`flex h-[52px] w-[52px] items-center justify-center rounded-full ${step.bg} ${step.color} font-black text-lg border-4 border-background shadow-md group-hover:scale-110 transition-transform duration-300`}
                            >
                                {step.number}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                {step.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
