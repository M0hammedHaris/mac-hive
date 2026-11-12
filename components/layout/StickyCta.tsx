'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { navCta } from './nav-links';

// Height of the fixed header; the hero CTA counts as gone once it is under it.
const HEADER_OFFSET = 73;

/**
 * Phones and tablets (below 1024px) only: a pad strip on an ink rule at the
 * bottom of the screen holding the one action. It shows once the hero CTA
 * (#hero-cta) has scrolled up out of view and hides again while the closing
 * CTA band (#final-cta) or the footer is on screen, so it never doubles the
 * action or covers the end of the page. When hidden it stays in the tab order
 * (just before the footer) and shows itself while it holds focus, so keyboard
 * users can always reach it and never focus something invisible. While
 * mounted it sets data-sticky-cta on <html>, which reserves its height as
 * scroll-padding-bottom (app/globals.css) so focused and anchored elements are
 * not hidden under it.
 */
export function StickyCta() {
    const [heroPassed, setHeroPassed] = useState(false);
    const [endInView, setEndInView] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-sticky-cta', '');
        return () => root.removeAttribute('data-sticky-cta');
    }, []);

    useEffect(() => {
        const hero = document.getElementById('hero-cta');
        if (!hero || !('IntersectionObserver' in window)) return;

        const heroObserver = new IntersectionObserver(
            ([entry]) => {
                setHeroPassed(
                    !entry.isIntersecting && entry.boundingClientRect.top < HEADER_OFFSET,
                );
            },
            { rootMargin: `-${HEADER_OFFSET}px 0px 0px 0px` },
        );
        heroObserver.observe(hero);

        const ends = [
            document.getElementById('final-cta'),
            document.querySelector('footer'),
        ].filter((el): el is HTMLElement => el !== null);
        const visible = new Set<Element>();
        const endObserver = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) visible.add(entry.target);
                else visible.delete(entry.target);
            }
            setEndInView(visible.size > 0);
        });
        ends.forEach((el) => endObserver.observe(el));

        return () => {
            heroObserver.disconnect();
            endObserver.disconnect();
        };
    }, []);

    const shown = heroPassed && !endInView;

    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-30 border-t border-ink bg-pad px-6 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-opacity duration-150 ease-out motion-reduce:transition-none lg:hidden ${
                shown
                    ? 'opacity-100'
                    : 'pointer-events-none opacity-0 focus-within:pointer-events-auto focus-within:opacity-100'
            }`}
        >
            <Link
                href={navCta.href}
                className="flex min-h-12 w-full items-center justify-center gap-2 bg-ink px-6 text-base font-semibold text-pad transition-colors hover:bg-pencil active:bg-pencil"
            >
                {navCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
        </div>
    );
}
