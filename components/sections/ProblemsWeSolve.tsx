const problems = [
    {
        title: "Losing Leads",
        description:
            "Potential customers visit your website but never get tracked or followed up. Revenue slips through the cracks silently.",
    },
    {
        title: "Manual Operations",
        description:
            "Teams spend hours on onboarding, reporting, handoffs, exports, and status updates that should not be manual anymore.",
    },
    {
        title: "Disconnected Systems",
        description:
            "Data lives across spreadsheets, inboxes, Slack, Notion, and multiple tools. No clean operator view. Decisions take too long.",
    },
    {
        title: "Growth Bottlenecks",
        description:
            "Processes that worked for 10 customers break at 100. Operations don't scale, and the business stalls.",
    },
];

export function ProblemsWeSolve() {
    return (
        <section
            aria-labelledby="problems-title"
            className="w-full max-w-[1440px] px-6 py-18 md:py-24 lg:px-20"
        >
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12">
                <div className="flex flex-col gap-6 lg:col-span-4">
                    <h2
                        id="problems-title"
                        className="text-3xl leading-tight font-bold tracking-[-0.015em] text-ink [font-stretch:85%] text-balance md:text-4xl"
                    >
                        Your business shouldn&apos;t run on spreadsheets and
                        manual work
                    </h2>
                    <p className="max-w-[34rem] text-lg leading-relaxed text-ink-soft text-pretty">
                        These are the problems I solve every day for growing
                        businesses. If any of this sounds familiar, let&apos;s
                        talk.
                    </p>
                </div>

                <ul className="border-t border-ink lg:col-span-8">
                    {problems.map((problem) => (
                        <li
                            key={problem.title}
                            className="grid grid-cols-1 gap-x-12 gap-y-2 border-b border-rule py-6 md:grid-cols-[14rem_1fr]"
                        >
                            <h3 className="text-xl font-semibold text-ink">
                                {problem.title}
                            </h3>
                            <p className="max-w-[40rem] text-base leading-relaxed text-ink-soft text-pretty">
                                {problem.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
