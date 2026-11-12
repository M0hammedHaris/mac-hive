import type { ReactNode } from "react";

type PageIntroProps = {
    title: ReactNode;
    /** One short paragraph under the title. */
    lead?: ReactNode;
    /** A quiet line under the title block, e.g. a last-updated date. */
    meta?: ReactNode;
    /** Actions (a PrimaryLink, a TextLink), set in a row under the lead. */
    children?: ReactNode;
};

/**
 * Opening block of an inner page (services, portfolio, contact, legal): the
 * page's h1, one lead paragraph and the actions, left-aligned on the pad.
 * Same footprint as the home hero without the time-study figure. The h1 uses
 * the closing-band headline step (30px phone, 48px from 768px), not the
 * hero Display, which belongs to the home h1 alone.
 */
export function PageIntro({ title, lead, meta, children }: PageIntroProps) {
    return (
        <section
            aria-labelledby="page-title"
            className="w-full max-w-[1440px] px-6 pt-12 pb-6 md:pt-18 lg:px-20"
        >
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12">
                <h1
                    id="page-title"
                    className="text-3xl leading-tight font-bold tracking-[-0.015em] text-ink [font-stretch:85%] text-balance md:text-5xl lg:col-span-9"
                >
                    {title}
                </h1>
                {lead ? (
                    <p className="max-w-[40rem] text-lg leading-relaxed text-ink-soft text-pretty lg:col-span-7">
                        {lead}
                    </p>
                ) : null}
                {meta ? (
                    <p className="text-sm text-ink-soft lg:col-span-7">{meta}</p>
                ) : null}
                {children ? (
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:col-span-7">
                        {children}
                    </div>
                ) : null}
            </div>
        </section>
    );
}
