import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

// The two actions of the Time-Study Sheet (DESIGN.md: Buttons, Text links).
// The home sections spell these classes out inline; inner pages use these so
// the look stays in one place. "pad" sits on the pad, "ink" on the ink band.

/** Square 48px button, ink fill on the pad. Width is left to the caller. */
export const primaryActionBase =
    "inline-flex min-h-12 items-center gap-2 bg-ink px-6 text-base font-semibold text-pad transition-colors hover:bg-pencil active:bg-pencil";

const primaryActionClass = `${primaryActionBase} w-fit`;

const onInkActionClass =
    "inline-flex min-h-12 w-fit items-center gap-2 bg-pad px-6 text-base font-semibold text-ink transition-colors hover:bg-pencil hover:text-pad active:bg-pencil active:text-pad";

const textLinkClass =
    "inline-flex min-h-12 items-center text-base font-semibold text-ink underline decoration-rule transition-colors hover:decoration-ink active:text-pencil";

const textLinkOnInkClass =
    "inline-flex min-h-12 items-center text-base font-semibold text-pad underline decoration-rule transition-colors hover:decoration-pad active:text-pad-soft";

type LinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
    tone?: "pad" | "ink";
};

/** The one primary action: a square button with a trailing arrow. */
export function PrimaryLink({ tone = "pad", children, ...props }: LinkProps) {
    return (
        <Link
            {...props}
            className={tone === "ink" ? onInkActionClass : primaryActionClass}
        >
            {children}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
    );
}

/** Secondary action: ink text with a pencil-rule underline, never a second button. */
export function TextLink({ tone = "pad", children, ...props }: LinkProps) {
    return (
        <Link
            {...props}
            className={tone === "ink" ? textLinkOnInkClass : textLinkClass}
        >
            {children}
        </Link>
    );
}
