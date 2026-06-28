"use client";

import React, { useActionState } from "react";
import { Rocket, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitContactForm, type FormState } from "@/app/actions";

const initialState: FormState = {
    success: false,
    message: "",
    errors: undefined,
};

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Left Side: Hire Us Form */}
                <div className="lg:col-span-7">
                    <div className="mb-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">Start the conversation</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Let&apos;s Fix the Workflow Slowing Your Team Down.</h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Tell us what&apos;s breaking today — onboarding, reporting, approvals, lead follow-up, dashboards, or internal ops — and we&apos;ll reply with the clearest next step within 24 hours.</p>
                    </div>

                    {/* Success Message */}
                    {state.success && (
                        <div className="mb-8 p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-start gap-4">
                            <CheckCircle2 className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" size={24} />
                            <div>
                                <h3 className="font-bold text-green-800 dark:text-green-200 mb-1">Message Sent!</h3>
                                <p className="text-green-700 dark:text-green-300 text-sm">{state.message}</p>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {!state.success && state.message && !state.errors && (
                        <div className="mb-8 p-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-4">
                            <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" size={24} />
                            <div>
                                <h3 className="font-bold text-red-800 dark:text-red-200 mb-1">Error</h3>
                                <p className="text-red-700 dark:text-red-300 text-sm">{state.message}</p>
                            </div>
                        </div>
                    )}

                    {!state.success && (
                        <form action={formAction} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fullName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder="John Doe"
                                        className={`w-full bg-white dark:bg-slate-900 border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${state.errors?.fullName ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                                            }`}
                                    />
                                    {state.errors?.fullName && (
                                        <p className="text-red-500 text-xs mt-1">{state.errors.fullName[0]}</p>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Work Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@company.com"
                                        className={`w-full bg-white dark:bg-slate-900 border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${state.errors?.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                                            }`}
                                    />
                                    {state.errors?.email && (
                                        <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="budgetRange" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Budget Range</label>
                                    <select
                                        id="budgetRange"
                                        name="budgetRange"
                                        className={`w-full bg-white dark:bg-slate-900 border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${state.errors?.budgetRange ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                                            }`}
                                    >
                                        <option value="">Select budget</option>
                                        <option value="$500 - $1,000">$500 - $1,000</option>
                                        <option value="$1,500 - $4,000">$1,500 - $4,000</option>
                                        <option value="$4,000 - $8,000">$4,000 - $8,000</option>
                                        <option value="$8,000+">$8,000+</option>
                                    </select>
                                    {state.errors?.budgetRange && (
                                        <p className="text-red-500 text-xs mt-1">{state.errors.budgetRange[0]}</p>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="timeline" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Target Timeline</label>
                                    <select
                                        id="timeline"
                                        name="timeline"
                                        className={`w-full bg-white dark:bg-slate-900 border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${state.errors?.timeline ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                                            }`}
                                    >
                                        <option value="">Select timeline</option>
                                        <option value="Within 2 weeks">Within 2 weeks</option>
                                        <option value="2 - 6 weeks">2 - 6 weeks</option>
                                        <option value="6+ weeks">6+ weeks</option>
                                    </select>
                                    {state.errors?.timeline && (
                                        <p className="text-red-500 text-xs mt-1">{state.errors.timeline[0]}</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="projectDetails" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Workflow / Project Details</label>
                                <textarea
                                    id="projectDetails"
                                    name="projectDetails"
                                    rows={5}
                                    placeholder="Tell us what is breaking today: onboarding, reporting, approvals, lead follow-up, dashboards, exports, or internal ops..."
                                    className={`w-full bg-white dark:bg-slate-900 border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none ${state.errors?.projectDetails ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                                        }`}
                                />
                                {state.errors?.projectDetails && (
                                    <p className="text-red-500 text-xs mt-1">{state.errors.projectDetails[0]}</p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                disabled={isPending}
                                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform active:scale-95 shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    'Request Discovery Call'
                                )}
                            </Button>
                        </form>
                    )}
                </div>

                <div className="lg:col-span-5 flex flex-col gap-8">
                    <div className="relative overflow-hidden rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/20 p-8">
                        <div className="relative z-10">
                            <h4 className="text-lg font-bold text-primary mb-2">Founder-Direct Global Delivery</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                You work directly with the engineer doing the audit, scoping the fix, and shipping the system — with clear milestones and async-friendly communication.
                            </p>
                        </div>
                        <Rocket className="absolute -bottom-6 -right-6 text-primary/10" size={128} />
                    </div>
                </div>
            </div>
        </div>
    );
}
