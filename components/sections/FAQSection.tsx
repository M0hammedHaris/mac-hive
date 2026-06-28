"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What kind of work is the best fit for Machive?",
        a: "The best fit is a workflow that is already painful: manual onboarding, reporting bottlenecks, approval chaos, support triage, exports, dashboards, or messy handoffs between tools.",
    },
    {
        q: "How do projects usually start?",
        a: "Most engagements start with a workflow audit or a focused automation sprint. We define the smallest high-value fix before talking about bigger systems or product ideas.",
    },
    {
        q: "Do you work only with local clients?",
        a: "No. Machive is based in India and works worldwide. The delivery model is async-friendly, milestone-based, and built for global founder and operations teams.",
    },
    {
        q: "Do you only take large projects?",
        a: "No. Many engagements start with a focused workflow audit or automation sprint. The goal is to fix the highest-value bottleneck first, then expand only if the result proves worth it.",
    },
    {
        q: "Do you provide maintenance and support?",
        a: "Yes. Ongoing support plans are available after launch. Bug fixes, iteration, reporting improvements, and workflow expansion are all possible after the first delivery.",
    },
];

export function FAQSection() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="w-full py-24 px-6 lg:px-20 max-w-[1440px]">
            <div className="mx-auto max-w-3xl">
                <div className="mb-14 flex flex-col gap-4 text-center items-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">
                        FAQ
                    </span>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                        Common Questions
                    </h2>
                </div>

                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/30 overflow-hidden transition-all duration-200"
                        >
                            <button
                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                onClick={() =>
                                    setOpen(open === i ? null : i)
                                }
                                aria-expanded={open === i}
                            >
                                <span className="font-bold text-slate-900 dark:text-white">
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                                        open === i ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {open === i && (
                                <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed text-sm border-t border-slate-100 dark:border-slate-800 pt-4">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
