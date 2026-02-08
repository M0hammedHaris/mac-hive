"use client";

import React from "react";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your inquiry! This is a demo submission. In a production environment, this would be sent to your email or a database.");
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Left Side: Hire Us Form */}
                <div className="lg:col-span-7">
                    <div className="mb-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">Work with us</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Let&apos;s Build Your SaaS.</h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400">From concept to launch in weeks, not months. Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                                <input className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Work Email</label>
                                <input className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@company.com" type="email" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Budget Range</label>
                                <select className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                    <option>$5k - $10k</option>
                                    <option>$10k - $25k</option>
                                    <option>$25k - $50k</option>
                                    <option>$50k+</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Target Timeline</label>
                                <select className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                    <option>Less than 4 weeks</option>
                                    <option>1 - 2 months</option>
                                    <option>3+ months</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Project Details</label>
                            <textarea className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your product idea, target audience, and key features..." rows={5}></textarea>
                        </div>
                        <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform active:scale-95 shadow-lg shadow-primary/20" type="submit">
                            Submit Project Inquiry
                        </Button>
                    </form>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-8">
                    <div className="relative overflow-hidden rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/20 p-8">
                        <div className="relative z-10">
                            <h4 className="text-lg font-bold text-primary mb-2">Fast SaaS Delivery</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Our proprietary tech stack allows us to deploy production-ready applications 3x faster than traditional agencies.
                            </p>
                        </div>
                        <Rocket className="absolute -bottom-6 -right-6 text-primary/10" size={128} />
                    </div>
                </div>
            </div>
        </div>
    );
}
