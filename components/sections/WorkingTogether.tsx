import { FounderBlock } from "./FounderBlock";

// The process, set as a worksheet: one ruled row per step, the step number in
// mono, and who does the work (taken from each step's own "we" or "I").
const steps = [
    {
        title: "Discover",
        who: "You and me",
        description:
            "We find the real business problem: weak lead capture, slow reporting, manual work, or a missing internal tool.",
    },
    {
        title: "Scope",
        who: "You and me",
        description:
            "We agree on the smallest build that is worth doing, in clear stages.",
    },
    {
        title: "Build",
        who: "Me",
        description:
            "I build the website, dashboard, automation or software that fixes it.",
    },
    {
        title: "Launch",
        who: "Me",
        description:
            "I put it live, check that it works, and make sure your team can use it.",
    },
    {
        title: "Expand",
        who: "You and me",
        description:
            "When the first part is working well, we add the next one.",
    },
];

const rowGrid =
    "grid grid-cols-[3rem_1fr] gap-x-6 md:grid-cols-[4rem_10rem_1fr_8rem] lg:grid-cols-[6rem_12rem_1fr_10rem]";

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

                    <div className="border-t border-ink">
                        {/* Column heads of the sheet; the rows below carry the same words for screen readers. */}
                        <div
                            aria-hidden="true"
                            className={`${rowGrid} hidden border-b border-rule py-3 text-sm text-ink-soft md:grid`}
                        >
                            <span>Step</span>
                            <span>Stage</span>
                            <span>What happens</span>
                            <span>Who</span>
                        </div>

                        <ol>
                            {steps.map((step, i) => (
                                <li
                                    key={step.title}
                                    className={`${rowGrid} items-baseline gap-y-1 border-b border-rule py-6`}
                                >
                                    <span className="row-span-3 font-mono text-2xl font-semibold tabular-nums text-ink md:row-span-1">
                                        <span className="sr-only">Step </span>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-lg font-semibold text-ink">
                                        {step.title}
                                    </span>
                                    <span className="col-start-2 max-w-[36rem] text-base leading-relaxed text-ink-soft text-pretty md:col-start-auto">
                                        {step.description}
                                    </span>
                                    <span className="col-start-2 text-sm text-ink-soft md:col-start-auto md:text-base md:text-ink">
                                        <span className="md:sr-only">Who: </span>
                                        {step.who}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
