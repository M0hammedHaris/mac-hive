import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./MobileNav"

export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full glass-nav px-6 md:px-20 py-4 transition-all duration-300">
            <div className="mx-auto flex max-w-[1440px] items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-10 w-10 transition-transform group-hover:scale-105">
                        <Image
                            src="/logo.svg"
                            alt="Mac Hive Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
                        Mac Hive
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    <Link
                        href="/services"
                        className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="/portfolio"
                        className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                    >
                        Contact
                    </Link>
                    <Link href="/contact">
                        <Button className="rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                            Start Your Build
                        </Button>
                    </Link>
                </nav>

                {/* Mobile navigation - Client Component for interactivity */}
                <MobileNav />
            </div>
        </header>
    )
}
