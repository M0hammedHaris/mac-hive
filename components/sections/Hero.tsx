import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section
            aria-labelledby="hero-title"
            className="w-full max-w-[1440px] px-6 pt-12 pb-6 md:pt-18 lg:px-20"
        >
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12">
                <h1
                    id="hero-title"
                    className="text-[2.5rem] leading-[1.02] font-bold tracking-[-0.02em] text-ink [font-stretch:80%] text-balance md:text-6xl lg:col-span-11 lg:text-[5.5rem]"
                >
                    Lost leads, manual hours, scattered tools. Fixed.
                </h1>

                <div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-1">
                    <p className="max-w-[36rem] text-lg leading-relaxed text-ink-soft text-pretty md:text-xl">
                        I&apos;m Mohammed Haris, a senior engineer. I build the
                        website, dashboard or automation that fixes it, from
                        the first call to deployment, and you work with me
                        directly.
                    </p>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <Link
                            id="hero-cta"
                            href="/contact"
                            className="inline-flex min-h-12 items-center gap-2 bg-ink px-6 text-base font-semibold text-pad transition-colors hover:bg-pencil active:bg-pencil"
                        >
                            Request a Discovery Call
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <Link
                            href="#work"
                            className="inline-flex min-h-12 items-center text-base font-semibold text-ink underline decoration-rule transition-colors hover:decoration-ink active:text-pencil"
                        >
                            See what I have shipped
                        </Link>
                    </div>
                </div>
            </div>

            <figure className="mt-12 border-y border-ink md:mt-18">
                <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-3 text-sm text-ink-soft">
                    <span className="font-semibold text-ink">
                        Provisioning a new client environment
                    </span>
                    <span>Time per run, before and after I automated it</span>
                </figcaption>
                <dl className="divide-y divide-rule">
                    <div className="grid grid-cols-[4.5rem_1fr] items-center gap-x-4 py-3 md:grid-cols-[6rem_1fr_13rem]">
                        <dt className="text-sm text-ink-soft">Before</dt>
                        <dd className="col-start-2 row-start-1 md:col-start-3 md:text-right">
                            <span className="whitespace-nowrap font-mono text-2xl font-semibold tabular-nums text-ink md:text-3xl">
                                3 h 00 min
                            </span>
                        </dd>
                        <dd
                            aria-hidden="true"
                            className="measure-long col-span-2 mt-3 h-3 bg-ink md:col-span-1 md:col-start-2 md:row-start-1 md:mt-0"
                        />
                    </div>
                    <div className="grid grid-cols-[4.5rem_1fr] items-center gap-x-4 py-3 md:grid-cols-[6rem_1fr_13rem]">
                        <dt className="text-sm text-ink-soft">After</dt>
                        <dd className="col-start-2 row-start-1 md:col-start-3 md:text-right">
                            <span className="whitespace-nowrap font-mono text-2xl font-semibold tabular-nums text-pencil md:text-3xl">
                                &lt; 10 min
                            </span>
                        </dd>
                        <dd
                            aria-hidden="true"
                            className="col-span-2 mt-3 h-3 md:col-span-1 md:col-start-2 md:row-start-1 md:mt-0"
                        >
                            <div className="measure-short h-full w-[5.6%] min-w-2 bg-pencil" />
                        </dd>
                    </div>
                </dl>
            </figure>
        </section>
    );
}
