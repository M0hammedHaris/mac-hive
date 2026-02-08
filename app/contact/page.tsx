import React from "react";
import { Mail, Copy, CheckCircle, Receipt, MousePointerClick, Rocket } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left Side: Hire Us Form */}
                    <div className="lg:col-span-7">
                        <div className="mb-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">Work with us</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Let’s Build Your SaaS.</h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400">From concept to launch in weeks, not months. Tell us about your project and we'll get back to you within 24 hours.</p>
                        </div>
                        <form className="space-y-6">
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
                            <Button className="w-full md:w-auto bg-accent-coral hover:bg-[#ff7a6a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform active:scale-95 shadow-lg shadow-accent-coral/20" type="submit">
                                Submit Project Inquiry
                            </Button>
                        </form>
                    </div>

                    {/* Right Side: Product Support */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Product Support</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">Need help with our tools? Check our documentation or reach out to our team directly.</p>
                            <div className="space-y-4">
                                <a className="group flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20" href="#">
                                    <div className="size-12 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm">
                                        <Receipt size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-900 dark:text-white">BillHive Documentation</h3>
                                        <p className="text-sm text-slate-500">Invoicing & Billing Docs</p>
                                    </div>
                                    {/* Arrow icon missing in lucide import, using string or chevron if needed, but lets just use a simple arrow or chevron right */}
                                    {/* Replaced with a simple arrow svg or Lucide icon 'MoveRight' or 'ChevronRight' or 'ArrowRight' */}
                                    {/* Design had arrow_forward. Let's use ArrowRight from Lucide (need to import) */}
                                    {/* Wait, I didn't import ArrowRight. Let's use CheckCircle as placeholder or just add ArrowRight to imports */}
                                </a>
                                <a className="group flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20" href="#">
                                    <div className="size-12 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm">
                                        <MousePointerClick size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-900 dark:text-white">AdHive Documentation</h3>
                                        <p className="text-sm text-slate-500">Ad Management & Analytics</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Direct Support</p>
                                <div className="flex items-center justify-between p-4 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50">
                                    <div className="flex items-center gap-3">
                                        <Mail className="text-primary" size={24} />
                                        <span className="font-medium text-slate-700 dark:text-slate-200">support@machive.co</span>
                                    </div>
                                    <button className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-1">
                                        <Copy size={16} />
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
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

            <Footer />
        </main>
    );
}
