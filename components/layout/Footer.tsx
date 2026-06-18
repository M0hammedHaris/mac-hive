import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark py-12 px-6 md:px-20">
            <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 transition-transform hover:scale-105">
                        <Image
                            src="/logo.svg"
                            alt="Machive Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-lg font-bold text-slate-900 dark:text-white font-display">
                        Machive
                    </span>
                </div>
                <div className="flex gap-8 text-sm font-medium text-slate-500">
                    <Link
                        href="https://linkedin.com/in/mohammed-haris-k"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        LinkedIn
                    </Link>
                    <Link
                        href="https://github.com/M0hammedHaris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        GitHub
                    </Link>
                    <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                </div>
                <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} Machive. Built for growing businesses.
                </p>
            </div>
        </footer>
    )
}
