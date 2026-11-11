'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navCta, navLinks } from './nav-links';

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleRef = useRef<HTMLButtonElement>(null);

    // Escape closes the menu and hands focus back to the menu button.
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isOpen]);

    const close = () => setIsOpen(false);

    return (
        <>
            <button
                ref={toggleRef}
                type="button"
                className="-mr-3 inline-flex h-12 w-12 items-center justify-center text-ink lg:hidden"
                onClick={() => setIsOpen((open) => !open)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                {isOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                )}
            </button>

            {isOpen && (
                <div className="fixed inset-0 top-[73px] z-40 lg:hidden">
                    <div
                        className="absolute inset-0 bg-ink/50"
                        aria-hidden="true"
                        onClick={close}
                    />

                    <nav
                        id="mobile-menu"
                        aria-label="Main"
                        className="relative flex flex-col border-b border-rule bg-pad px-6 pt-3 pb-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex min-h-12 items-center border-b border-rule text-lg font-semibold text-ink transition-colors hover:text-pencil active:text-pencil"
                                onClick={close}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href={navCta.href}
                            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-6 text-base font-semibold text-pad transition-colors hover:bg-pencil active:bg-pencil"
                            onClick={close}
                        >
                            {navCta.label}
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
