import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
    return (
        <section
            aria-labelledby="final-cta-title"
            className="w-full bg-ink text-pad"
        >
            <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-x-12 gap-y-6 px-6 py-18 md:py-24 lg:grid-cols-12 lg:px-20">
                <h2
                    id="final-cta-title"
                    className="text-3xl leading-tight font-bold tracking-[-0.015em] [font-stretch:85%] text-balance md:text-5xl lg:col-span-7"
                >
                    Tell me what is slowing the business down.
                </h2>
                <div className="flex flex-col gap-6 lg:col-span-5">
                    <p className="text-lg leading-relaxed text-pad-soft text-pretty">
                        Book a call and we&apos;ll figure out the right next
                        step: a lead-generation website, dashboard, automation
                        fix, internal tool, or scoped software build.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex min-h-12 w-fit items-center gap-2 bg-pad px-6 text-base font-semibold text-ink transition-colors hover:bg-pencil hover:text-pad active:bg-pencil active:text-pad"
                    >
                        Request a Discovery Call
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
