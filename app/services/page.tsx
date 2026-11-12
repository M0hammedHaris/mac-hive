import { PageIntro } from "@/components/sections/PageIntro";
import { PrimaryLink, TextLink } from "@/components/ui/action-link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Machive — Websites, Dashboards, Automation & Software",
    description:
        "Machive helps growing businesses worldwide improve lead generation, operations, and internal workflows with websites, dashboards, automation, and business software.",
    alternates: {
        canonical: "https://machive.in/services",
    },
    openGraph: {
        title: "Services | Machive — Websites, Dashboards, Automation & Software",
        description:
            "Lead-generation websites, dashboards, automation, and business software built end-to-end by a senior engineer.",
    },
};

const serviceSections = [
    {
        note: "Start here",
        title: "Lead-Generation Websites",
        description:
            "For businesses that need a stronger website, better mobile experience, clearer proof, and a cleaner path for leads to request quotes or get in touch.",
        bullets: [
            "Website refresh or rebuild",
            "Lead forms and quote flows",
            "Trust and conversion sections",
            "Mobile UX improvements",
        ],
    },
    {
        note: "Fastest win",
        title: "Automation & Implementation",
        description:
            "Focused delivery for repetitive operational work. We connect tools, clean up routing, automate reminders, improve reporting, and reduce manual follow-up.",
        bullets: [
            "Reporting automation",
            "Routing and reminder flows",
            "Spreadsheet/process cleanup",
            "Integrations around existing tools",
        ],
    },
    {
        note: "Operator leverage",
        title: "Dashboards & Internal Tools",
        description:
            "When teams need one clear screen to work from, we build admin panels, dashboards, onboarding systems, approval flows, and internal consoles around how the team actually works.",
        bullets: [
            "Admin panels",
            "Ops dashboards",
            "Approval workflows",
            "Onboarding and support systems",
        ],
    },
    {
        note: "Product delivery",
        title: "Business Software & SaaS MVPs",
        description:
            "For founders and teams who need a scoped product or internal business system built directly, with clear milestones and practical delivery.",
        bullets: [
            "A first working version",
            "Admin and user workflows",
            "Delivery in agreed stages",
            "Launch-ready software",
        ],
    },
];

const fitExamples = [
    {
        id: "fit-best-title",
        title: "What fits best",
        points: [
            "Outdated service-business websites",
            "Weak lead capture and quote-request flows",
            "Reporting, exports, and seeing where work stands",
            "Internal admin tools teams keep delaying",
        ],
    },
    {
        id: "fit-around-title",
        title: "What we build around",
        points: [
            "Websites, CRMs, spreadsheets, Slack, email",
            "Existing tools your team already uses",
            "Operator workflows that need one clean surface",
            "Business problems that need a practical scoped build",
        ],
    },
];

const goodFits = [
    "Lead-generation websites and quote flows",
    "Reporting dashboards and admin visibility",
    "Automation and follow-up workflows",
    "Internal tools and scoped software builds",
];

const typicalPath = [
    {
        step: "Discovery and scope",
        description: "Define the real business problem before building.",
    },
    {
        step: "Website / dashboard / automation build",
        description: "Ship the clearest high-value fix first.",
    },
    {
        step: "Launch and refinement",
        description: "Tighten the result and remove the obvious friction.",
    },
    {
        step: "Expansion or next system layer",
        description: "Expand only once the first outcome is proven.",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex w-full flex-col items-center">
            <PageIntro
                title="Build the right website, dashboard, automation, or software system."
                lead="Machive helps growing businesses worldwide improve lead generation, operations, and internal workflows with websites, dashboards, automation, and business software — all owned end-to-end by a senior engineer."
            >
                <PrimaryLink href="/contact">Request a Discovery Call</PrimaryLink>
                <TextLink href="/portfolio">Explore Deliverables</TextLink>
            </PageIntro>

            <div className="mt-12 w-full border-y border-ink bg-pad-deep">
                <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-x-12 gap-y-12 px-6 py-18 md:py-24 lg:grid-cols-2 lg:px-20">
                    {fitExamples.map((group) => (
                        <section
                            key={group.title}
                            aria-labelledby={group.id}
                            className="flex flex-col gap-6"
                        >
                            <h2
                                id={group.id}
                                className="text-3xl leading-tight font-bold tracking-[-0.015em] text-ink [font-stretch:85%] text-balance md:text-4xl"
                            >
                                {group.title}
                            </h2>
                            <ul className="border-t border-ink">
                                {group.points.map((point) => (
                                    <li
                                        key={point}
                                        className="border-b border-rule py-3 text-base leading-relaxed text-ink-soft text-pretty"
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>

            <section
                aria-labelledby="ladder-title"
                className="w-full max-w-[1440px] px-6 py-18 md:py-24 lg:px-20"
            >
                <div className="flex flex-col gap-6 md:max-w-[44rem]">
                    <h2
                        id="ladder-title"
                        className="text-3xl leading-tight font-bold tracking-[-0.015em] text-ink [font-stretch:85%] text-balance md:text-4xl"
                    >
                        Start with the clearest business problem and scope the
                        right build.
                    </h2>
                    <p className="text-lg leading-relaxed text-ink-soft text-pretty">
                        This is how Machive works best for growing businesses:
                        identify the highest-value problem, ship the right
                        website, dashboard, automation, or software layer, and
                        expand only when the result is proven.
                    </p>
                </div>

                <ol className="mt-12 border-t border-ink">
                    {serviceSections.map((section) => (
                        <li
                            key={section.title}
                            className="grid grid-cols-1 gap-x-12 gap-y-4 border-b border-rule py-6 md:grid-cols-[14rem_1fr] lg:grid-cols-12"
                        >
                            <div className="flex flex-col gap-2 lg:col-span-4">
                                <h3 className="text-xl font-semibold text-ink text-balance md:text-2xl">
                                    {section.title}
                                </h3>
                                <p className="text-sm text-ink-soft">
                                    {section.note}
                                </p>
                            </div>
                            <div className="flex max-w-[42rem] flex-col gap-4 lg:col-span-8">
                                <p className="text-base leading-relaxed text-ink-soft text-pretty">
                                    {section.description}
                                </p>
                                <ul className="list-disc space-y-1 pl-5 text-base leading-relaxed text-ink-soft marker:text-ink">
                                    {section.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            <section
                aria-labelledby="good-fit-title"
                className="w-full bg-ink text-pad"
            >
                <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-x-12 gap-y-12 px-6 py-18 md:py-24 lg:grid-cols-12 lg:px-20">
                    <div className="flex flex-col gap-6 lg:col-span-7">
                        <h2
                            id="good-fit-title"
                            className="text-3xl leading-tight font-bold tracking-[-0.015em] [font-stretch:85%] text-balance md:text-5xl"
                        >
                            Bring the business problem — not a vague app idea.
                        </h2>
                        <p className="max-w-[40rem] text-lg leading-relaxed text-pad-soft text-pretty">
                            The best projects start when the need is already
                            clear: a website that does not convert, lead
                            follow-up that breaks, a reporting flow that wastes
                            half a day every week, or an internal workflow that
                            still depends on manual coordination.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 lg:col-span-5 lg:col-start-1 lg:row-start-2">
                        <h3 className="text-xl font-semibold">
                            Good fit examples
                        </h3>
                        <ul className="border-t border-rule">
                            {goodFits.map((item) => (
                                <li
                                    key={item}
                                    className="border-b border-rule py-3 text-base leading-relaxed text-pad-soft text-pretty"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6 lg:col-span-7 lg:row-start-2">
                        <h3 className="text-xl font-semibold">Typical path</h3>
                        <ol className="border-t border-rule">
                            {typicalPath.map((item, i) => (
                                <li
                                    key={item.step}
                                    className="grid grid-cols-[3rem_1fr] gap-x-6 gap-y-1 border-b border-rule py-6 md:grid-cols-[4rem_1fr]"
                                >
                                    <span className="row-span-2 font-mono text-2xl font-semibold tabular-nums">
                                        <span className="sr-only">Step </span>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-lg font-semibold">
                                        {item.step}
                                    </span>
                                    <span className="max-w-[36rem] text-base leading-relaxed text-pad-soft text-pretty">
                                        {item.description}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="lg:col-span-12">
                        <PrimaryLink href="/contact" tone="ink">
                            Request a Discovery Call
                        </PrimaryLink>
                    </div>
                </div>
            </section>
        </div>
    );
}
