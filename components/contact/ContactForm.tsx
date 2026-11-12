"use client";

import React, { useActionState } from "react";
import {
    AlertCircle,
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Loader2,
} from "lucide-react";
import { primaryActionBase } from "@/components/ui/action-link";
import { submitContactForm, type FormState } from "@/app/actions";

const initialState: FormState = {
    success: false,
    message: "",
    errors: undefined,
};

// Square fields on the pad, 48px tall, 16px text (so phones do not zoom in).
// The border is ink, not the pale rule colour, so the field edge stays visible
// (the rule colour is 1.9:1 on the pad). Focus is the site-wide pencil outline.
const labelClass = "text-sm font-semibold text-ink";
const fieldBase =
    "min-h-12 w-full rounded-none border bg-pad px-4 py-3 text-base text-ink placeholder:text-ink-soft";

function fieldClass(hasError: boolean) {
    return `${fieldBase} ${hasError ? "border-pencil" : "border-ink"}`;
}

// Ties a field to its message: aria-invalid plus aria-describedby on the field,
// and the same id on the message below it.
function describe(id: string, error?: string) {
    return {
        "aria-invalid": error ? (true as const) : undefined,
        "aria-describedby": error ? `${id}-error` : undefined,
    };
}

function FieldError({ id, message }: { id: string; message?: string }) {
    if (!message) return null;
    return (
        <p id={`${id}-error`} role="alert" className="text-sm text-pencil">
            {message}
        </p>
    );
}

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(
        submitContactForm,
        initialState,
    );

    return (
        <div className="w-full max-w-[1440px] px-6 pt-12 pb-18 md:pb-24 lg:px-20">
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
                <div className="flex flex-col gap-6 lg:col-span-7">
                    {state.success && (
                        <div
                            role="status"
                            className="flex items-start gap-4 border-t border-b border-t-ink border-b-rule py-6"
                        >
                            <CheckCircle2
                                className="mt-0.5 h-6 w-6 shrink-0 text-ink"
                                aria-hidden="true"
                            />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold text-ink">
                                    Message Sent!
                                </h2>
                                <p className="text-base leading-relaxed text-ink-soft text-pretty">
                                    {state.message}
                                </p>
                            </div>
                        </div>
                    )}

                    {!state.success && state.message && !state.errors && (
                        <div
                            role="alert"
                            className="flex items-start gap-4 border-t border-b border-t-ink border-b-rule py-6"
                        >
                            <AlertCircle
                                className="mt-0.5 h-6 w-6 shrink-0 text-pencil"
                                aria-hidden="true"
                            />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold text-ink">
                                    Error
                                </h2>
                                <p className="text-base leading-relaxed text-ink-soft text-pretty">
                                    {state.message}
                                </p>
                            </div>
                        </div>
                    )}

                    {!state.success && (
                        <form
                            action={formAction}
                            aria-busy={isPending}
                            className="flex flex-col gap-6 border-t border-ink pt-6"
                        >
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fullName" className={labelClass}>
                                        Full Name
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="John Doe"
                                        className={fieldClass(!!state.errors?.fullName)}
                                        {...describe("fullName", state.errors?.fullName?.[0])}
                                    />
                                    <FieldError
                                        id="fullName"
                                        message={state.errors?.fullName?.[0]}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className={labelClass}>
                                        Work Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="john@company.com"
                                        className={fieldClass(!!state.errors?.email)}
                                        {...describe("email", state.errors?.email?.[0])}
                                    />
                                    <FieldError
                                        id="email"
                                        message={state.errors?.email?.[0]}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="budgetRange" className={labelClass}>
                                        Budget Range
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="budgetRange"
                                            name="budgetRange"
                                            className={`${fieldClass(!!state.errors?.budgetRange)} appearance-none pr-12`}
                                            {...describe(
                                                "budgetRange",
                                                state.errors?.budgetRange?.[0],
                                            )}
                                        >
                                            <option value="">Select budget</option>
                                            <option value="$2,000 - $3,000">
                                                $2,000 - $3,000
                                            </option>
                                            <option value="$3,000 - $6,000">
                                                $3,000 - $6,000
                                            </option>
                                            <option value="$6,000 - $10,000">
                                                $6,000 - $10,000
                                            </option>
                                            <option value="$10,000+">
                                                $10,000+
                                            </option>
                                        </select>
                                        <ChevronDown
                                            className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-ink"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <FieldError
                                        id="budgetRange"
                                        message={state.errors?.budgetRange?.[0]}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="timeline" className={labelClass}>
                                        Target Timeline
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            className={`${fieldClass(!!state.errors?.timeline)} appearance-none pr-12`}
                                            {...describe("timeline", state.errors?.timeline?.[0])}
                                        >
                                            <option value="">Select timeline</option>
                                            <option value="Within 2 weeks">
                                                Within 2 weeks
                                            </option>
                                            <option value="2 - 6 weeks">
                                                2 - 6 weeks
                                            </option>
                                            <option value="6+ weeks">6+ weeks</option>
                                        </select>
                                        <ChevronDown
                                            className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-ink"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <FieldError
                                        id="timeline"
                                        message={state.errors?.timeline?.[0]}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="projectDetails" className={labelClass}>
                                    Project Details
                                </label>
                                <textarea
                                    id="projectDetails"
                                    name="projectDetails"
                                    rows={5}
                                    placeholder="Tell us what you want to improve: website conversion, lead follow-up, dashboards, automation, internal workflows, or a software build..."
                                    className={`${fieldClass(!!state.errors?.projectDetails)} resize-none`}
                                    {...describe(
                                        "projectDetails",
                                        state.errors?.projectDetails?.[0],
                                    )}
                                />
                                <FieldError
                                    id="projectDetails"
                                    message={state.errors?.projectDetails?.[0]}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isPending}
                                className={`${primaryActionBase} w-full justify-center md:w-fit disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-ink`}
                            >
                                {isPending ? (
                                    <>
                                        <Loader2
                                            className="h-4 w-4 animate-spin motion-reduce:animate-none"
                                            aria-hidden="true"
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Request a Discovery Call
                                        <ArrowRight
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>

                <div className="border-t border-ink pt-6 lg:col-span-4 lg:col-start-9">
                    <p className="max-w-[28rem] text-base leading-relaxed text-ink-soft text-pretty">
                        You work directly with the engineer handling
                        discovery, scoping, delivery, and launch — with work
                        delivered in agreed stages and most updates in
                        writing.
                    </p>
                </div>
            </div>
        </div>
    );
}
