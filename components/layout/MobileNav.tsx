'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navCta, navLinks } from './nav-links';

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleRef = useRef<HTMLButtonElement>(null);

    // While open: Escape closes the menu and hands focus back to the menu
    // button, and the page behind the scrim does not scroll.
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);

        // Scroll lock on <html> (works in iOS Safari, unlike body alone). Pad
        // the right edge by the scrollbar width so the page does not shift.
        const root = document.documentElement;
        const scrollbar = window.innerWidth - root.clientWidth;
        const previous = {
            overflow: root.style.overflow,
            paddingRight: root.style.paddingRight,
        };
        root.style.overflow = 'hidden';
        if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`;

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            root.style.overflow = previous.overflow;
            root.style.paddingRight = previous.paddingRight;
        };
    }, [isOpen]);

    // A link tap moves on to the new page; nothing to refocus.
    const close = () => setIsOpen(false);

    // A tap on the scrim stays on this page, so focus goes back to the button.
    const dismiss = () => {
        setIsOpen(false);
        toggleRef.current?.focus();
    };

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
                    {/* Scrim: dims the page and closes the menu on tap. */}
                    <div
                        className="absolute inset-0 bg-ink/50"
                        aria-hidden="true"
                        onClick={dismiss}
                    />

                    <nav
                        id="mobile-menu"
                        aria-label="Main"
                        className="relative flex max-h-full flex-col overflow-y-auto overscroll-contain border-b border-rule bg-pad px-6 pt-3 pb-6"
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
