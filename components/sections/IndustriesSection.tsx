const industries = [
    { emoji: "🚀", label: "Founder-Led SaaS" },
    { emoji: "🧭", label: "Operations Teams" },
    { emoji: "🎧", label: "Customer Success" },
    { emoji: "🛒", label: "Ecommerce & Marketplaces" },
    { emoji: "🧩", label: "Agencies" },
    { emoji: "📊", label: "Product Teams" },
];

export function IndustriesSection() {
    return (
        <section
            id="industries"
            className="w-full py-20 px-6 lg:px-20 max-w-[1440px]"
        >
            <div className="mb-12 flex flex-col gap-4 text-center items-center">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                    Best-Fit Teams
                </span>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                    Best-Fit Buyers for This Offer
                </h2>
                <p className="max-w-xl text-slate-600 dark:text-slate-400">
                    MacHive is global by default and problem-specific by design.
                    We care more about real operational pain than pretending one
                    narrow niche is the answer to everything.
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
