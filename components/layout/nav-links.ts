// One list feeds both the desktop Navbar and the MobileNav, so the two can
// never drift apart. Every "/#anchor" must match an id on the home page:
//   #services -> OfferSection, #work -> ProofSection, #about -> WorkingTogether.
export const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Track record", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
] as const;

export const navCta = {
    label: "Request a Discovery Call",
    href: "/contact",
} as const;
