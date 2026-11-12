// Written the way a buyer says it, in short sentences.
const problems = [
    {
        title: "“We lose leads”",
        description:
            "People visit the website or send a message, and nobody follows up. We only notice when the customer has gone somewhere else.",
    },
    {
        title: "“Too much is done by hand”",
        description:
            "Our team spends hours on onboarding, reports, exports, handoffs and status updates. Most of it should not be manual any more.",
    },
    {
        title: "“Our information is everywhere”",
        description:
            "Our data is in spreadsheets, inboxes, Slack, Notion and other tools. Nobody has one clear view, so decisions take too long.",
    },
    {
        title: "“What worked before is breaking”",
        description:
            "Our processes worked with 10 customers. With 100, they break, and growth slows down.",
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
                        These are the problems I fix. If one of them sounds like
                        your business, let&apos;s talk.
                    </p>
                </div>

                <ul className="border-t border-ink lg:col-span-8">
                    {problems.map((problem) => (
                        <li
                            key={problem.title}
                            className="grid grid-cols-1 gap-x-12 gap-y-2 border-b border-rule py-6 md:grid-cols-[14rem_1fr]"
                        >
                            <h3 className="text-xl font-semibold text-ink text-balance">
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
