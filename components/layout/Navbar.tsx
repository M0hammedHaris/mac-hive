import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Hexagon } from "lucide-react"
import { MobileNav } from "./MobileNav"

export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full glass-nav px-6 md:px-20 py-4 transition-all duration-300">
            <div className="mx-auto flex max-w-[1440px] items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                        <Hexagon className="h-6 w-6 fill-current" />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
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
