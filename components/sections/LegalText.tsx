import type { ReactNode } from "react";

/**
 * Legal pages (privacy, terms) as a worksheet: each section is one ruled row,
 * heading on the left from 768px, plain text on the right at a reading
 * measure. Sits under a PageIntro; the sheet opens on a 1px ink rule.
 */
export function LegalDocument({ children }: { children: ReactNode }) {
    return (
        <div className="w-full max-w-[1440px] px-6 pt-12 pb-18 md:pb-24 lg:px-20">
            <div className="border-t border-ink">{children}</div>
        </div>
    );
}

export function LegalSection({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    const id = `legal-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
    return (
        <section
            aria-labelledby={id}
            className="grid grid-cols-1 gap-x-12 gap-y-3 border-b border-rule py-6 md:grid-cols-[14rem_1fr] lg:grid-cols-12"
        >
            <h2
                id={id}
                className="text-xl font-semibold text-ink text-balance lg:col-span-4"
            >
                {title}
            </h2>
            <div className="flex max-w-[60ch] flex-col gap-6 text-base leading-relaxed text-ink-soft text-pretty lg:col-span-8">
                {children}
            </div>
        </section>
    );
}

/** A plain bullet list inside a legal section. */
export function LegalList({ children }: { children: ReactNode }) {
    return (
        <ul className="list-disc space-y-1 pl-5 marker:text-ink">{children}</ul>
    );
}

/** Text link inside running legal text; the tap area is 48px tall without changing the line height. */
export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <a
            href={href}
            className="-my-3 inline-block py-3 text-ink underline decoration-rule transition-colors hover:decoration-ink active:text-pencil"
        >
            {children}
        </a>
    );
}
