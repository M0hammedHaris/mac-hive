import { UserMinus, RefreshCw, Network, TrendingDown } from "lucide-react";

const problems = [
    {
        icon: UserMinus,
        title: "Losing Leads",
        description:
            "Potential customers visit your website but never get tracked or followed up. Revenue slips through the cracks silently.",
        color: "text-red-500",
        bg: "bg-red-50 dark:bg-red-900/10",
    },
    {
        icon: RefreshCw,
        title: "Manual Operations",
        description:
            "Teams spend hours on onboarding, reporting, handoffs, exports, and status updates that should not be manual anymore.",
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-500/10",
    },
    {
        icon: Network,
        title: "Disconnected Systems",
        description:
            "Data lives across spreadsheets, inboxes, Slack, Notion, and multiple tools. No clean operator view. Decisions take too long.",
        color: "text-yellow-600",
        bg: "bg-yellow-50 dark:bg-yellow-500/10",
    },
    {
        icon: TrendingDown,
        title: "Growth Bottlenecks",
        description:
            "Processes that worked for 10 customers break at 100. Operations don't scale, and the business stalls.",
        color: "text-purple-600",
        bg: "bg-purple-50 dark:bg-purple-500/10",
    },
];

export function ProblemsWeSolve() {
    return (
        <section className="w-full py-24 px-6 lg:px-20 max-w-[1440px]">
            <div className="mb-14 flex flex-col gap-4 text-center items-center">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                    Sound Familiar?
                </span>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl max-w-2xl">
                    Your Business Shouldn&apos;t Run on Spreadsheets and Manual
                    Work
                </h2>
                <p className="max-w-xl text-slate-600 dark:text-slate-400">
                    These are the problems we solve every day for growing
                    businesses. If any of this sounds familiar, let&apos;s talk.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {problems.map((problem) => {
                    const Icon = problem.icon;
                    return (
                        <div
                            key={problem.title}
                            className="group flex flex-col gap-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/30 p-7 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-xl ${problem.bg} ${problem.color}`}
                            >
                                <Icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                                    {problem.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
