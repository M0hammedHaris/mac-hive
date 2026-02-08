'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 text-slate-900 dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle mobile menu"
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 top-[72px] z-40 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu Panel */}
                    <nav className="relative bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top-2 duration-200">
                        <Link
                            href="/services"
                            className="text-lg font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/portfolio"
                            className="text-lg font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/contact"
                            className="text-lg font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <Button className="w-full rounded-xl shadow-lg shadow-primary/20">
                                Start Your Build
                            </Button>
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
