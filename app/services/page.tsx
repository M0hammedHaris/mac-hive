import React from "react";
import { Terminal, Search, Zap, Gauge, Smartphone, Layers, MonitorSmartphone, Activity, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
    return (
        <main className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-gray-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative px-6 lg:px-40 py-20 lg:py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Now accepting Q4 Projects
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
                        Ship your SaaS in weeks, <br />
                        <span className="text-primary italic">not months.</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Mac Hive delivers high-performance web and mobile applications with a focus on speed, quality, and minimalist design.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="h-14 px-10 text-lg shadow-xl shadow-primary/30">
                            View Our Work
                        </Button>
                        <Button variant="outline" className="h-14 px-10 text-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                            Schedule a Consultation
                        </Button>
                    </div>
                </div>
                {/* Abstract Background Shapes */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px]"></div>
            </section>

            {/* Section A: Web Development */}
            <section className="px-6 lg:px-40 py-24 bg-white dark:bg-background-dark/50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="inline-block p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 mb-6">
                            <Terminal size={32} />
                        </div>
                        <h2 className="text-4xl font-black tracking-tight mb-6">Future-Proof <br />Web Applications</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                            We build robust web experiences using the latest Next.js features for ultimate performance and scale.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <Search size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">SEO Optimized</h4>
                                    <p className="text-sm text-gray-500">Built-in SEO best practices to ensure your SaaS ranks high on search engines from day one.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg text-green-600">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Server-Side Rendering</h4>
                                    <p className="text-sm text-gray-500">SSR and ISR for faster initial page loads and the best possible user experience.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg text-purple-600">
                                    <Gauge size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Lightning Fast</h4>
                                    <p className="text-sm text-gray-500">Optimized assets and edge-ready code splitting for sub-second speeds globally.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                                {/* Code Editor Header */}
                                <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <div className="size-3 rounded-full bg-[#ff5f56]"></div>
                                        <div className="size-3 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="size-3 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-medium font-mono uppercase tracking-widest">page.tsx — Next.js</div>
                                    <div className="w-10"></div>
                                </div>
                                {/* Code Content */}
                                <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto text-gray-300">
                                    <p><span className="text-[#c678dd]">export default function</span> <span className="text-[#61afef]">SaaSApp</span>() {"{"}</p>
                                    <p className="pl-4"><span className="text-[#c678dd]">return</span> (</p>
                                    <p className="pl-8"><span className="text-gray-500">&lt;</span><span className="text-[#c678dd]">main</span> <span className="text-[#d19a66]">className</span>=<span className="text-[#98c379]">"flex min-h-screen flex-col"</span><span className="text-gray-500">&gt;</span></p>
                                    <p className="pl-12"><span className="text-gray-500">&lt;</span><span className="text-[#61afef]">Navbar</span> <span className="text-[#d19a66]">sticky</span> <span className="text-gray-500">/&gt;</span></p>
                                    <p className="pl-12"><span className="text-gray-500">&lt;</span><span className="text-[#61afef]">Hero</span></p>
                                    <p className="pl-16"><span className="text-[#d19a66]">title</span>=<span className="text-[#98c379]">"Scale Fast"</span></p>
                                    <p className="pl-16"><span className="text-[#d19a66]">onAction</span>={"{"}handleSignup{"}"}</p>
                                    <p className="pl-12"><span className="text-gray-500">/&gt;</span></p>
                                    <p className="pl-12"><span className="text-gray-500">&lt;</span><span className="text-[#61afef]">Features</span> <span className="text-[#d19a66]">data</span>={"{"}webBenefits{"}"} <span className="text-gray-500">/&gt;</span></p>
                                    <p className="pl-8"><span className="text-gray-500">&lt;/</span><span className="text-[#c678dd]">main</span><span className="text-gray-500">&gt;</span></p>
                                    <p className="pl-4">);</p>
                                    <p>{"}"}</p>
                                </div>
                            </div>
                            {/* Decorative Floating Element */}
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 hidden sm:block">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 uppercase">Status</p>
                                        <p className="text-sm font-bold">Build Successful</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section B: Mobile Development */}
            <section className="px-6 lg:px-40 py-24">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative flex justify-center items-center h-[500px]">
                        {/* Floating Mobile Mockups - Placeholder Images used from design */}
                        {/* Note: Replacing img tags with next/image would be ideal, but using standard img for now as per design html structure or need to configure domains */}
                        <div className="absolute z-20 w-56 h-[440px] bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden transform -translate-x-12 -rotate-6 transition-transform hover:rotate-0 duration-500">
                            <img className="w-full h-full object-cover" alt="Modern mobile dashboard UI" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJlmk5fRfztW_PugCrpMKJpO01UmJQUIvYDJ6mTtg0uggzePmWyhUATmVwBMnexdrbsqycPlEAOfpZzsUoKgrMWdPRNYonmdRsIaUbyBRWvTrHq00c8-bt77MKO15tVfmAk4AMKr8Yj-8OI_v4d2Ynbrv9P4rtLHW1mk32u9eNJkqqSeS8TFCQ8iRKIsTSe49Avnuy86G19NqkyCznXUxgxWpHPA7w9iUZZAJQpLVhHmSpsob0wjWkIu7dWa4OF7EuivEY3cgEP8es" />
                        </div>
                        <div className="absolute z-10 w-56 h-[440px] bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden transform translate-x-12 rotate-6 transition-transform hover:rotate-0 duration-500">
                            <img className="w-full h-full object-cover" alt="Clean mobile profile settings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhbhCRL3ReXjMkwsGo7MB3t2yXGsn92bE3ptZeMAGnCkmcy3gLKIdZrCtVQCD-d62TXsjQJJUil4IuzAH4GxiDCsMAhsw49jx7TE-jUVBL2iE3sEjPoNLIp3X8DSFzUOmuMG9rZKXxckBgVJIa28Th4_8m-q6NNz_K-PqR1k4eqiBUTR_XAkR2ffNqG41zte-kVawsyvOGhKveGCcEmS-qh2zKxVWG0Dq-mcMIdL6DecVXHqeeIGc-b1ZnVWA0VqUSDaLmRwHDJ5e8" />
                        </div>
                        {/* Pastel background circle */}
                        <div className="absolute w-80 h-80 bg-blue-100 dark:bg-blue-900/10 rounded-full"></div>
                    </div>
                    <div>
                        <div className="inline-block p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 mb-6">
                            <Smartphone size={32} />
                        </div>
                        <h2 className="text-4xl font-black tracking-tight mb-6">Native Performance, <br />Single Codebase</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                            Leverage Flutter to launch on iOS and Android simultaneously without compromising on quality or speed.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Flutter Powered</h4>
                                    <p className="text-sm text-gray-500">One codebase for all platforms using Google's UI toolkit, reducing dev costs by 40%.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                                <div className="bg-orange-100 dark:bg-orange-900/20 p-2 rounded-lg text-orange-600">
                                    <MonitorSmartphone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Cross-platform Parity</h4>
                                    <p className="text-sm text-gray-500">Consistent design and business logic across iPhone, Android, and Web platforms.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                                <div className="bg-pink-100 dark:bg-pink-900/20 p-2 rounded-lg text-pink-600">
                                    <Activity size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">60fps Animations</h4>
                                    <p className="text-sm text-gray-500">Buttery smooth interactions that feel truly native and keep users engaged.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}


