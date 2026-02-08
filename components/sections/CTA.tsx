import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
    return (
        <section className="w-full px-6 py-24 lg:px-20 max-w-[1440px]">
            <div className="relative rounded-3xl bg-slate-900 p-12 md:p-20 overflow-hidden text-center">
                {/* Background Glows */}
                <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-[120px]"></div>
                <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]"></div>

                <div className="relative z-10 flex flex-col items-center gap-8">
                    <h2 className="text-4xl font-black text-white md:text-5xl">
                        Ready to enter the Hive?
                    </h2>
                    <p className="max-w-2xl text-slate-400 text-lg">
                        We&apos;re currently taking on select partners for Q4. Secure your spot in
                        the build queue and experience SaaS development at agentic speed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="h-16 px-10 text-lg font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-transform">
                                Start Your Project
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="ghost" className="h-16 px-10 border border-slate-700 bg-white/5 backdrop-blur text-white text-lg font-bold hover:bg-white/10 hover:text-white transition-colors">
                                Schedule a Call
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
