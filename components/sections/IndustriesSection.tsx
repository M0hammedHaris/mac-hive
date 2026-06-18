const industries = [
    { emoji: "🏗", label: "Construction" },
    { emoji: "🏭", label: "Manufacturing" },
    { emoji: "🏥", label: "Healthcare" },
    { emoji: "🏪", label: "Retail & Commerce" },
    { emoji: "🏠", label: "Real Estate" },
    { emoji: "🚀", label: "Startups" },
];

export function IndustriesSection() {
    return (
        <section
            id="industries"
            className="w-full py-20 px-6 lg:px-20 max-w-[1440px]"
        >
            <div className="mb-12 flex flex-col gap-4 text-center items-center">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                    Industries
                </span>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                    Built for Growing Businesses
                </h2>
                <p className="max-w-xl text-slate-600 dark:text-slate-400">
                    We&apos;ve delivered software for businesses across industries.
                    Each solution is built around your specific operational
                    challenges.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {industries.map((industry) => (
                    <div
                        key={industry.label}
                        className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/30 p-6 text-center hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <span
                            className="text-3xl"
                            role="img"
                            aria-label={industry.label}
                        >
                            {industry.emoji}
                        </span>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                            {industry.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
