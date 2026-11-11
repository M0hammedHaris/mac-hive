import Link from "next/link";
import { ArrowRight } from "lucide-react";

const offers = [
    {
        name: "Lead-Generation Website",
        price: "$2,000",
        fixes: "A stronger website with better mobile UX, clearer trust signals, and a cleaner inquiry or quote-request flow.",
        exampleTitle: "Lead Capture & Follow-up System",
        example:
            "Turn inbound leads, form fills, inbox replies, and spreadsheets into one cleaner follow-up workflow with routing, reminders, and status visibility.",
    },
    {
        name: "Internal Automation",
        price: "$3,000",
        fixes: "A focused system to reduce repetitive ops work around routing, reminders, follow-up, reporting, exports, or admin tasks.",
        exampleTitle: "Reporting & Export Workflow Layer",
        example:
            "Turn one-by-one exports, spreadsheet cleanup, and weekly manual summaries into a cleaner reporting system operators can actually use.",
    },
    {
        name: "Dashboard / Admin System",
        price: "$4,000",
        fixes: "A clearer operating surface for reporting, admin visibility, approvals, internal workflows, and day-to-day decision-making.",
        exampleTitle: "Support Triage Console",
        example:
            "Consolidate messy support queues, manual routing, and missing visibility into a lightweight internal console.",
    },
    {
        name: "SaaS MVP / Business Software",
        price: "$6,000",
        fixes: "A scoped MVP or business tool for founders and teams that need real product delivery without overbuilding too early.",
        exampleTitle: "Customer Onboarding Ops System",
        example:
            "Replace Notion docs, email follow-ups, and manual checklists with a clear onboarding tracker, reminders, and status visibility.",
    },
];

export function OfferSection() {
    return (
        <section
            id="services"
            aria-labelledby="offer-title"
            className="w-full max-w-[1440px] px-6 py-18 md:py-24 lg:px-20"
        >
            <div className="flex flex-col gap-6 md:max-w-[44rem]">
                <h2
                    id="offer-title"
                    className="text-3xl leading-tight font-bold tracking-[-0.015em] text-ink [font-stretch:85%] text-balance md:text-4xl"
                >
                    What I build, and what it costs to start
                </h2>
                <p className="text-lg leading-relaxed text-ink-soft text-pretty">
                    These are starting prices for each type of project. The
                    final price depends on scope, urgency, complexity, and how
                    much of the system needs to be built.
                </p>
            </div>

            <ol className="mt-12 border-t border-ink">
                {offers.map((offer) => (
                    <li
                        key={offer.name}
                        className="grid grid-cols-1 gap-x-12 gap-y-4 border-b border-rule py-6 md:grid-cols-[14rem_1fr] lg:grid-cols-12"
                    >
                        <div className="flex items-baseline justify-between gap-6 md:row-span-2 md:flex-col md:justify-start md:gap-2 lg:col-span-4 lg:row-span-1">
                            <h3 className="text-xl font-semibold text-ink text-balance md:text-2xl">
                                {offer.name}
                            </h3>
                            <p className="shrink-0 text-ink">
                                <span className="text-sm text-ink-soft">from </span>
                                <span className="font-mono text-xl font-semibold tabular-nums">
                                    {offer.price}
                                </span>
                            </p>
                        </div>
                        <p className="text-base leading-relaxed text-ink-soft text-pretty lg:col-span-4">
                            {offer.fixes}
                        </p>
                        <div className="flex flex-col gap-1 lg:col-span-4">
                            <p className="text-sm font-semibold text-ink text-pretty">
                                Example: {offer.exampleTitle}
                            </p>
                            <p className="text-sm leading-relaxed text-ink-soft text-pretty md:text-base">
                                {offer.example}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>

            <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-[40rem] text-base leading-relaxed text-ink-soft text-pretty">
                    Scope sets the final price. After a discovery call, you get
                    a scoped quote in writing before any work starts.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex min-h-12 w-fit shrink-0 items-center gap-2 bg-ink px-6 text-base font-semibold text-pad transition-colors hover:bg-pencil active:bg-pencil"
                >
                    Request a Discovery Call
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}
