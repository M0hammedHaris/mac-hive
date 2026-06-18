"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "How much does a project cost?",
        a: "It depends on what you need. Most projects land somewhere between ₹35,000 and ₹5,00,000+. A 30-minute call is usually enough to give you a rough number.",
    },
    {
        q: "Do you provide hosting?",
        a: "Yes. I handle hosting, domain setup, SSL, and AWS infrastructure. You own everything. I just set it up and keep it running.",
    },
    {
        q: "Do you provide maintenance and support?",
        a: "Yes. Ongoing support plans are available after launch. Bug fixes, new features, performance. I stay on as your technical partner.",
    },
    {
        q: "Can you automate my existing business processes?",
        a: "It's what I work on most often, honestly. Tell me what your team does manually and I'll tell you what can be automated and roughly what you'd save.",
    },
    {
        q: "Can you build mobile apps?",
        a: "Yes. Android and iOS, native or cross-platform. I'll recommend the right approach based on what you're building and your budget.",
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
