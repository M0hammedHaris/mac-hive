import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="w-full px-6 py-24 lg:px-20 max-w-[1440px]">
            <div className="relative rounded-3xl bg-slate-900 p-12 md:p-20 overflow-hidden text-center">
                {/* Background Glows */}
                <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />

                <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black text-white md:text-5xl leading-tight">
                        Ready to Fix the Workflow That Is Slowing Your Team
                        Down?
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Start with the workflow pain, not a giant project.
                        Book a call and we&apos;ll figure out whether the right next
                        step is an audit, sprint, internal tool, or support plan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="h-16 px-10 text-lg font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-transform gap-2"
                            >
                                <CalendarCheck className="h-5 w-5" />
                                Book a Discovery Call
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="ghost"
                                className="h-16 px-10 border border-slate-700 bg-white/5 backdrop-blur text-white text-lg font-bold hover:bg-white/10 hover:text-white transition-colors gap-2"
                            >
                                Share Your Workflow
                                <ArrowRight className="h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
