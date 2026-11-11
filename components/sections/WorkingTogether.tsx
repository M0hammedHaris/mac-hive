import { FounderBlock } from "./FounderBlock";

const steps = [
    {
        title: "Discover",
        description:
            "We pin down the business problem: weak lead capture, reporting friction, manual ops, or a missing internal tool.",
    },
    {
        title: "Scope",
        description:
            "We agree the smallest build that creates real value, with clear milestones.",
    },
    {
        title: "Build",
        description:
            "I ship the website, dashboard, automation, or software that solves it.",
    },
    {
        title: "Launch",
        description:
            "I deploy it, check the result, and make sure your team can use it.",
    },
    {
        title: "Expand",
        description:
            "Once the first result proves useful, we add the next workflow.",
    },
];

export function WorkingTogether() {
    return (
        <section
            id="about"
            aria-labelledby="founder-title"
            className="w-full border-y border-ink bg-pad-deep"
        >
            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-18 md:py-24 lg:px-20">
                <FounderBlock />

                <div className="flex flex-col gap-6 border-t border-ink pt-12">
                    <h3 className="text-xl font-semibold text-ink">
                        How a project goes
                    </h3>
                    <ol className="relative grid grid-cols-1 gap-y-6 border-l border-ink pl-6 lg:grid-cols-5 lg:gap-x-6 lg:border-t lg:border-l-0 lg:pt-6 lg:pl-0">
                        {steps.map((step) => (
                            <li key={step.title} className="relative flex max-w-[36rem] flex-col gap-2 lg:max-w-none">
                                <span
                                    aria-hidden="true"
                                    className="absolute top-2 -left-6 h-px w-3 bg-ink lg:-top-6 lg:left-0 lg:h-3 lg:w-px"
                                />
                                <span className="font-semibold text-ink">
                                    {step.title}
                                </span>
                                <span className="text-sm leading-relaxed text-ink-soft text-pretty">
                                    {step.description}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
