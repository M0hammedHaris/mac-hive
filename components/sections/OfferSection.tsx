import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Each offer: what it fixes, then one short example of a real build.
const offers = [
    {
        name: "Lead-Generation Website",
        price: "$2,000",
        fixes: "A website that works well on phones, shows clear reasons to trust you, and makes it easy to send an inquiry or ask for a quote.",
        example: "one follow-up list for every lead, with reminders.",
    },
    {
        name: "Internal Automation",
        price: "$3,000",
        fixes: "A focused system that takes repeated work off your team: routing, reminders, follow-ups, reports, exports or admin tasks.",
        example: "weekly reports without manual exports or spreadsheet cleanup.",
    },
    {
        name: "Dashboard / Admin System",
        price: "$4,000",
        fixes: "One clear screen for reports, approvals, admin work and day-to-day decisions.",
        example: "a support console in place of messy queues and manual routing.",
    },
    {
        name: "SaaS MVP / Business Software",
        price: "$6,000",
        fixes: "A first working version of your product or business tool, ready for real use, without building too much too early.",
        example: "an onboarding tracker with reminders, in place of docs, emails and checklists.",
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
                        <div className="flex items-baseline justify-between gap-6 md:flex-col md:justify-start md:gap-2 lg:col-span-4">
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
                        <div className="flex max-w-[42rem] flex-col gap-2 lg:col-span-8">
                            <p className="text-base leading-relaxed text-ink-soft text-pretty">
                                {offer.fixes}
                            </p>
                            <p className="text-sm leading-relaxed text-ink-soft text-pretty">
                                <span className="font-semibold text-ink">For example:</span>{" "}
                                {offer.example}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>

            <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-[40rem] text-base leading-relaxed text-ink-soft text-pretty">
                    After a discovery call, you get a written quote before any
                    work starts.
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
