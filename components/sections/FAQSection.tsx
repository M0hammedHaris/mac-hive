"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = { question: string; answer: string };

export function FAQSection({ items }: { items: FAQItem[] }) {
    // The first answer starts open so the format is clear at a glance.
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section
            aria-labelledby="faq-title"
            className="w-full max-w-[1440px] px-6 py-18 md:py-24 lg:px-20"
        >
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12">
                <h2
                    id="faq-title"
                    className="text-3xl leading-tight font-bold tracking-[-0.015em] text-ink [font-stretch:85%] text-balance md:text-4xl lg:col-span-4"
                >
                    Common questions
                </h2>

                <ul className="border-t border-ink lg:col-span-8">
                    {items.map((item, i) => {
                        const isOpen = open === i;
                        const panelId = `faq-panel-${i}`;
                        return (
                            <li key={item.question} className="border-b border-rule">
                                <h3>
                                    <button
                                        type="button"
                                        className="flex min-h-12 w-full items-center justify-between gap-6 py-4 text-left text-lg font-semibold text-ink transition-colors hover:text-pencil active:text-pencil"
                                        onClick={() => setOpen(isOpen ? null : i)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                    >
                                        <span className="text-pretty">{item.question}</span>
                                        <ChevronDown
                                            aria-hidden="true"
                                            className={`h-5 w-5 shrink-0 text-ink-soft transition-transform duration-200 motion-reduce:transition-none ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                </h3>
                                <div
                                    id={panelId}
                                    hidden={!isOpen}
                                    className="max-w-[36rem] pb-6 text-base leading-relaxed text-ink-soft text-pretty"
                                >
                                    {item.answer}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
