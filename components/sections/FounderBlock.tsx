import Image from "next/image";

// Founder portrait. Leave undefined until the photo is in /public (for example
// "/founder.jpg"); the block then renders it in a square 1px ink frame above
// the title block. With no photo the title block carries the section alone.
export const FOUNDER_PHOTO_SRC = undefined as string | undefined;

const FOUNDER = {
    name: "Mohammed Haris",
    role: "Founder and engineer",
    base: "India, working with teams worldwide.",
    linkedinHref: "https://www.linkedin.com/in/mohammed-haris-k",
    siteHref: "https://mh.machive.in",
} as const;

const linkClass =
    "inline-flex min-h-12 w-fit items-center font-mono text-sm text-ink underline decoration-rule hover:decoration-ink";

export function FounderBlock({
    photoSrc = FOUNDER_PHOTO_SRC,
}: {
    photoSrc?: string;
}) {
    return (
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-7">
                <h2
                    id="founder-title"
                    className="text-3xl leading-tight font-bold tracking-[-0.015em] text-ink [font-stretch:85%] text-balance md:text-4xl"
                >
                    You work directly with me
                </h2>
                <p className="max-w-[36rem] text-xl leading-relaxed text-ink text-pretty">
                    Most agencies hide who&apos;s actually doing the work. At
                    Machive, you work directly with me from discovery through
                    delivery.
                </p>
                <p className="max-w-[36rem] text-lg leading-relaxed text-ink-soft text-pretty">
                    I care most about shipping practical systems that improve
                    lead flow, visibility, operations, and execution before the
                    scope gets bigger.
                </p>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
                {photoSrc ? (
                    <div className="relative aspect-[4/5] w-full max-w-[22rem] border border-ink">
                        <Image
                            src={photoSrc}
                            alt={`${FOUNDER.name}, founder of Machive`}
                            fill
                            sizes="(min-width: 1024px) 22rem, 90vw"
                            className="object-cover"
                        />
                    </div>
                ) : null}

                <div className="border-t border-ink">
                    <p className="py-6 text-4xl leading-none font-bold tracking-[-0.02em] text-ink [font-stretch:80%] md:text-5xl">
                        {FOUNDER.name}
                    </p>

                    <dl className="border-t border-rule">
                        <div className="grid grid-cols-1 gap-x-6 border-b border-rule py-3 sm:grid-cols-[7rem_1fr] sm:items-baseline">
                            <dt className="text-sm text-ink-soft">Role</dt>
                            <dd className="text-base text-ink">{FOUNDER.role}</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-x-6 border-b border-rule py-3 sm:grid-cols-[7rem_1fr] sm:items-baseline">
                            <dt className="text-sm text-ink-soft">Based in</dt>
                            <dd className="text-base text-ink">{FOUNDER.base}</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-x-6 border-b border-rule py-0 sm:grid-cols-[7rem_1fr] sm:items-center">
                            <dt className="pt-3 text-sm text-ink-soft sm:pt-0">
                                LinkedIn
                            </dt>
                            <dd>
                                <a
                                    href={FOUNDER.linkedinHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClass}
                                >
                                    linkedin.com/in/
                                    <wbr />
                                    mohammed-haris-k
                                    <span className="sr-only">
                                        {" "}
                                        (opens in a new tab)
                                    </span>
                                </a>
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-x-6 border-b border-rule py-0 sm:grid-cols-[7rem_1fr] sm:items-center">
                            <dt className="pt-3 text-sm text-ink-soft sm:pt-0">
                                Personal site
                            </dt>
                            <dd>
                                <a
                                    href={FOUNDER.siteHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClass}
                                >
                                    mh.machive.in
                                    <span className="sr-only">
                                        {" "}
                                        (opens in a new tab)
                                    </span>
                                </a>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
